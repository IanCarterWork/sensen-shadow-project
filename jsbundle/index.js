import SensenHinata from "sensen-hinata";
import UsingRouter from "./router";
const SensenJSApp = () => {
    UsingRouter.root = document.querySelector('#root');
    UsingRouter.render();
};
SensenHinata.Framework.JS(SensenJSApp);
