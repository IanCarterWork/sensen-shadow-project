import SensenHinata from "sensen-hinata";
/**
* A Sensen View
* @package UserSettings
* @license
* @sensen undefined : undefined (undefined)
*/
const UserSettingsView = new SensenHinata.View({
    slug: 'settings',
    controller: ($) => {
        console.warn('View Controller settings -> UserSettings');
    },
    mounted: () => { },
    unmounted: () => { },
});
export default UserSettingsView;
