import SensenTheme from "./sensen-hinata/Theme";
const themeBundle = (new SensenTheme('sensen-kit'))
.Define('themes/sensen-kit/header',`
<header>
    <h1>Header Artifact</h1>
</header>
`)
.Asset('-css','assets/css/sensen-kit/header/full.css')
.Asset('-css','assets/css/sensen-kit/header/index.css')
.Asset('-css','assets/css/sensen-kit/header/simple.css')
.Asset('-js','assets/js/sensen-kit/header/index.js')
.Define('themes/sensen-kit/nav.bottom',`<nav>
    nav bottom
</nav>`)
.Asset('-css','assets/css/sensen-kit/nav.bottom/index.css')
.Asset('-js','assets/js/sensen-kit/nav.bottom/index.js')
;themeBundle.Use();
export default themeBundle;