import Sensen from "./sensen-hinata/Framework";
import AppRouter from "./router";
const SensenJSApp = () => {
    AppRouter.root = document.querySelector('#root');
    AppRouter.render();
};
Sensen.JS(SensenJSApp);
