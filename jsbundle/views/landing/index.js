import SensenHinata from "sensen-hinata";
/**
* A Sensen View
* @package Landing
* @license
* @sensen undefined : undefined (undefined)
*/
const LandingView = new SensenHinata.View({
    slug: 'landing',
    controller: ($) => {
        console.warn('View Controller landing -> Landing');
    },
    mounted: () => { },
    unmounted: () => { },
});
export default LandingView;
