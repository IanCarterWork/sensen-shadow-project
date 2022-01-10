import SensenHinata from "sensen-hinata"
import style from "./index.css"


const HomeView = new SensenHinata.View({

    slug: 'home',

    controller: ($: any)=>{

        console.warn('Welcome to home page\n', style )

        
        // setTimeout(()=>{

        //     $.view.setVariable('postImage', './assets/images/ggn.png');

        // }, 1000)

        
        console.warn('View Controller :', $?.GET?.param )
        
    },


    mounted: ()=>{
        
        console.warn('View Mounted')
        
    },
    


    unmounted: ()=>{
        
        console.warn('View UnMounted')
        
    },
    
})


export default HomeView