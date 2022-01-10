import SensenHinata from "sensen-hinata"



const AboutView = new SensenHinata.View({

    slug: 'about',

    controller: ()=>{

        console.warn('View Init ')
        
    },
    
    mounted: ()=>{
        
        console.warn('View Focused')
        
    },

    unmounted: ()=>{
        
        console.warn('View Blurred')
        
    },
    
})



export default AboutView