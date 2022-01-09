import SensenTheme from "./sensen-hinata/Theme";


const AppTheme = new SensenTheme('sensen-kit')

AppTheme.Define( 'Header', AppTheme.Async('header') )

AppTheme.Define( 'NavBottom', AppTheme.Async('nav.bottom') )


export default AppTheme;


