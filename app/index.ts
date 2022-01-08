import Sensen from "./sensen-hinata/Framework";
import AppRouter from "./router";

'use strict';



const SensenJSApp = ()=>{
    
    AppRouter.root = document.querySelector('#root');

    AppRouter.render()
    
}




Sensen.JS(SensenJSApp);

