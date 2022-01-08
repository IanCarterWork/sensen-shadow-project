
import { SensenWindow } from "./Window";
declare let window: SensenWindow;








export default class SensenTheme{
    


    Theme: string;

    Fragments: {
        
        [K: string] : string

    } = {};
    
    Payloads: Promise<string>[] = [];
    


    
    
    
    constructor(theme: string){

        this.Theme = theme;

        
    }
    




    async Async(path: string){

        return new Promise<string>(

            (resolve, reject) =>{

                fetch(`./sensen/themes/${ (this.Theme ? `${ this.Theme }/` : '') }${ path }.html`)

                .then(r=>r.text())

                .then(data=>resolve(data))

                .catch(er=>reject(er))
                
            }
            
        )
        
    }

    

    async Define(name: string, payload: Promise<string> | string){



        if(typeof payload == 'string'){

            switch( typeof payload ){

                case 'string':

                    this.Fragments[ name ] = payload;

                break;
                
            }
            
        }
        


        if( payload instanceof Promise){

            this.Payloads.push(

                new Promise<string>(
                    
                    (resolve, reject)=>{

                        payload
        
                        .then(data=> {

                            this.Fragments[ name ] = data;
                            
                            window.$SensenRLP.push(`@Theme.${ name }`, data )
                            
                            return resolve(data);
                            
                        })
        
                        .catch(er=>{ 

                            reject(er)

                            throw (`Sensen Theme say ${ er }`);

                        })
        
                    }

                )
                
            )

            
        }


        return this;

    }
    
    





    async Use(){

        return new Promise<this>(

            async (resolve, reject)=>{

                try{
                    
                    
                    const fragmentsArray = Object.entries( this.Fragments );


                    if( fragmentsArray.length ){
                        

                        fragmentsArray.map(e=>{
                            
                            window.$SensenRLP.push(`@Theme.${ e[0] }`, e[1])
                            
                        });


    
                        if( this.Payloads.length ){
    
                            // Object.values( this.Payloads ).map(promise=>)
    
                            await Promise.all( this.Payloads ).then(fragment=>{
    
                                console.warn('load fragment', fragment)
                                
                            })
                            
                            .then(()=>{ 
                                
                                resolve(this); 
                                
                            })
                            
                        }

                        else{ resolve(this); }


                        // resolve(this);
                        
                    }

                    else{


                        resolve(this);

                        
                    }

                    
                    
                }

                catch(er){ reject(er); }
                
            }
        );
        
    }
    
    
    
    
}