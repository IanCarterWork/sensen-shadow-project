import Sensen from "./sensen-hinata/Framework";
import AppRouter from "./router";




const SensenJSApp = ()=>{
    
    AppRouter.root = document.querySelector('#root') as HTMLElement;

    AppRouter.render()
    
}

Sensen.JS(SensenJSApp);

