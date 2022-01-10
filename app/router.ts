/**
* A Sensen Router
* @package sensen.app.router
* @license MIT
* @sensen undefined : undefined (undefined)
*/

import SensenHinata from "sensen-hinata";
import AppViewControllersDependencies from "./dependencies";

import HomeView from "./views/home";
import AboutView from "./views/about";
const UsingRouter = new SensenHinata.Router({
    default: 'home',
    viewControllersDependencies: AppViewControllersDependencies
});
UsingRouter
.add(HomeView)
.add(AboutView)
;export default UsingRouter;
