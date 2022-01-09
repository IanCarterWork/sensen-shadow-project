import SensenTheme from "./sensen-hinata/Theme";
const themeBundle = {}
;themeBundle['sensen-kit'] = (new SensenTheme('sensen-kit'))
;themeBundle['sensen-kit'].Asset('-css','assets/css/sensen-kit/index.css')
;themeBundle['sensen-kit'].Asset('-js','assets/js/sensen-kit/index.js')
;themeBundle['sensen-kit']
.Define('header',`
<header>
    <h1>Header Artifact</h1>
</header>
`)
.Asset('-css','assets/css/sensen-kit/header/full.css')
.Asset('-css','assets/css/sensen-kit/header/index.css')
.Asset('-css','assets/css/sensen-kit/header/simple.css')
.Asset('-js','assets/js/sensen-kit/header/index.js')
.Define('nav.bottom',`<nav>
    nav bottom
</nav>`)
.Asset('-css','assets/css/sensen-kit/nav.bottom/index.css')
.Asset('-js','assets/js/sensen-kit/nav.bottom/index.js')
;themeBundle['sensen-kit'].Use();
export default themeBundle;