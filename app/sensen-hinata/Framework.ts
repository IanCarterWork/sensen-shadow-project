import type { SensenTObject, SensenTVariableRecorded } from "./Framework.type";
import { ProtorianMetricRandom } from "./MetricRandom";

import { SensenWindow } from "./Window";
declare let window: SensenWindow;








window.$SensenNodeRefVariables = {}


window.$SensenRLP = {


    entries: {},

    
    push(name: string, value: any){

        this.entries[ name ] = value

        return this;
        
    },

    
    remove(name: string){

        delete this.entries[ name ]

        return this;
        
    },


    clean(){

        const recovery : { [K: string] : any } = {}


        Object.entries( this.entries ).map(entry=>{

            if(
                entry[0].match('@Theme.')
            ){

                recovery[ entry[0] as string ] = entry[1];

            }

            else{

                
                
            }
            
        })
        

        this.entries = recovery;

        return this;
        
    },



    retrive(name: string){

        return this.entries[ name ] as string;
        
    },



    retrives(){

        return this.entries || {};
        
    },
    

}






/**
 * @WorkInProgressBegin
 */


/**
 * Sensen HTML Element
 */

export class SensenElement extends HTMLElement{

}




/**
 * Sensen Element : Value
 */

export class SensenElementEcho extends SensenElement{


    init(){

        const get = this.getAttribute('get');

        const set = this.getAttribute('set');

        const or = this.getAttribute('or');
        
        console.log('Parse Echo Element', get, or, set)


        if(typeof get == 'string'){

            // const value = window.$SensenRLP.retrive(get) || or || '';

            // const ref = document.createDocumentFragment()

            // this.parentNode.replaceChild(ref, this)
            
        }
        

        return this;
        
    }
    

    connectedCallback(){

        this.init();

    }
    
    
    
}


if(!customElements.get('sn-echo')){ globalThis.customElements.define('sn-echo', SensenElementEcho); }

/**
 * @WorkInProgressEnd
 */









export function CompilatorCheckVariables(content : string) : SensenTObject<any> {

    const records: SensenTVariableRecorded = {}

    const variableRex = new RegExp('{{(.*?)}}', 'g')

    const contentMatches = [...content.matchAll(variableRex)]


    Object.values(contentMatches).map(match=>{

        const syntax: string[] = match[1].split('||')

            syntax[0] = syntax[0].trim()

            syntax[1] = (syntax[1]||'').trim().replace( /'(.*)'/gi, "$1" )

            syntax[1] = (syntax[1]||'').trim().replace( /"(.*)"/gi, "$1" )
            
        records[ syntax[0] ] = { match, syntax, }
    
    })


    return records;
    
}







export function CompilatorRecordsRefsVariables(element: HTMLElement) : {} {

    const state : { [K: string]: any } = {};


    if(element){

        Object.values(element.children).map(child=>{

            const children = Object.values(child)

            const hasChildren = children.length


            if(!hasChildren){

                const refID = ProtorianMetricRandom.CreateAplpha(32).join('');



                /** Element Content */

                Object.entries( CompilatorCheckVariables(child.innerHTML) || {} ).map(entry=>{

                    window.$SensenNodeRefVariables[ entry[0] ] = { 
                        
                        ref: refID, 
                        
                        records: entry, 
                        
                        content: child.innerHTML,
                        
                        attribute: undefined,

                    };

                    child.setAttribute('sensen-ref', refID );

                })
                    


                /** Element Attributes */

                Object.values(child.attributes).map(attr=>{

                    Object.entries( CompilatorCheckVariables(attr.value) || {} ).map(entry=>{

                        window.$SensenNodeRefVariables[ entry[0] ] = { 
                            
                            ref: refID, 
                            
                            records: entry, 
                            
                            content: undefined,
                            
                            attribute: { name: attr.name, value: attr.value, },

                        };
    
                        child.setAttribute('sensen-ref', refID );
    
                    })
                 

                })

            }

            else{

                CompilatorNodeVariables(child as HTMLElement)
                
            }
            
            
        })
        
    }


    return state;

}





export function CompilateVariables(content: string, dictionary?: {}) : string{


    const _dictionary: { [K: string]:any } = dictionary || window.$SensenRLP.retrives()

    
    Object.entries( CompilatorCheckVariables(content) || {} ).map(entry=>{

        if(window.$SensenNodeRefVariables[ entry[0] ]){

            content = content.replace(
                
                entry[1].match[0], 
                
                (_dictionary[ entry[0] ] || entry[1].syntax[1] || entry[0]).trim() 
                
            );
            
        }

        else{

            const variables = CompilatorCheckVariables(content)

            Object.values(variables).map(variable=>{

                content = content.replace(
                
                    variable.match[0], 
                    
                    (_dictionary[ variable.syntax[0] ] || variable.syntax[1] || variable.syntax[0]).trim() 
                    
                );
                
            })
            
        }

    })

        
    return content;
    
}




export function CompilatorNodeVariables(element: HTMLElement, dictionary?: {}) : HTMLElement {

    // const state : { [K: string]: any } = {};


    if(element){

        if(element.children.length){
    
            Object.values(element.children).map(child=>{
    
                const children = Object.values(child)
    
                const hasChildren = children.length
    
    
                if(!hasChildren){
    
    
                    /** Element Content */
    
                    child.innerHTML = CompilateVariables(child.innerHTML, dictionary)
    
    
    
                    /** Element Attributes */
    
                    Object.values(child.attributes).map(attr=>{
    
                        if( attr.name == 'sensen-ref' ){ return; }
    
                        const value = CompilateVariables(attr.value, dictionary);
    
                        child.setAttribute( attr.name, value )
    
                    })
                    
                }
    
                else{
    
                    CompilatorNodeVariables(child as HTMLElement, dictionary)
                    
                }
                
                
            })
            
        }

        else{

            element.innerHTML = CompilateVariables(element.innerHTML, dictionary);
            
            Object.values(element.attributes).map(attr=>{
    
                if( attr.name == 'sensen-ref' ){ return; }

                const value = CompilateVariables(attr.value, dictionary);

                element.setAttribute( attr.name, value )

            })
            
        }
        
    }


    // return state;

    return element;

}







export function CompilatorNode(element: HTMLElement, dictionary?: {}) : HTMLElement {

    return CompilatorNodeVariables(element, dictionary)
    
}







export function Compilator(element: HTMLElement){

    const content = element.innerHTML as string;
    
    let parsing = CompilateVariables(content);
    

    element.innerHTML = parsing;

    
}




















export default class Sensen{

    static Name: string = 'Sensen Senju';

    static JS(app: Function){

        console.log(`${ this.Name } is ready`)

        window.SensenJSApp = app;

        window.SensenJSApp()

    }

    static RLPObject = window.$SensenRLP

    static Compilator = Compilator

    static CompilateVariables = CompilateVariables

    static CompilatorNodeVariables = CompilatorNodeVariables

    static CompilatorNode = CompilatorNode

    
}



