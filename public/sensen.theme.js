"use strict";
(self["webpackChunksensen_shadow"] = self["webpackChunksensen_shadow"] || []).push([["theme"],{

/***/ "./jsbundle/sensen.theme.bundle.js":
/*!*****************************************!*\
  !*** ./jsbundle/sensen.theme.bundle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");

const themeBundle = {}
;themeBundle['sensen-kit'] = (new sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].Theme('sensen-kit'))
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeBundle);

/***/ }),

/***/ "./node_modules/sensen-hinata/index.js":
/*!*********************************************!*\
  !*** ./node_modules/sensen-hinata/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_Framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Framework.js */ "./node_modules/sensen-hinata/js/Framework.js");
/* harmony import */ var _js_Router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Router.js */ "./node_modules/sensen-hinata/js/Router.js");
/* harmony import */ var _js_Theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Theme.js */ "./node_modules/sensen-hinata/js/Theme.js");
/* harmony import */ var _js_ThemeColor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ThemeColor.js */ "./node_modules/sensen-hinata/js/ThemeColor.js");
/* harmony import */ var _js_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/View.js */ "./node_modules/sensen-hinata/js/View.js");
/* harmony import */ var _js_LocationMethods_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/LocationMethods.js */ "./node_modules/sensen-hinata/js/LocationMethods.js");







const SensenHinata = {
    Framework: _js_Framework_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    View: _js_View_js__WEBPACK_IMPORTED_MODULE_4__.SensenView,
    Theme: _js_Theme_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    ThemeColor: _js_ThemeColor_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    Router: _js_Router_js__WEBPACK_IMPORTED_MODULE_1__.SensenRouter,
    Dependencies: {
        LocationGetMethods: _js_LocationMethods_js__WEBPACK_IMPORTED_MODULE_5__["default"]
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SensenHinata);


/***/ }),

/***/ "./node_modules/sensen-hinata/js/Framework.js":
/*!****************************************************!*\
  !*** ./node_modules/sensen-hinata/js/Framework.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensenElement": () => (/* binding */ SensenElement),
/* harmony export */   "SensenElementEcho": () => (/* binding */ SensenElementEcho),
/* harmony export */   "CompilatorCheckVariables": () => (/* binding */ CompilatorCheckVariables),
/* harmony export */   "CompilatorRecordsRefsVariables": () => (/* binding */ CompilatorRecordsRefsVariables),
/* harmony export */   "CompilateVariables": () => (/* binding */ CompilateVariables),
/* harmony export */   "CompilatorNodeVariables": () => (/* binding */ CompilatorNodeVariables),
/* harmony export */   "CompilatorNode": () => (/* binding */ CompilatorNode),
/* harmony export */   "Compilator": () => (/* binding */ Compilator),
/* harmony export */   "default": () => (/* binding */ Sensen)
/* harmony export */ });
/* harmony import */ var _MetricRandom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricRandom.js */ "./node_modules/sensen-hinata/js/MetricRandom.js");

window.$SensenNodeRefVariables = {};
window.$SensenRLP = {
    entries: {},
    push(name, value) {
        this.entries[name] = value;
        return this;
    },
    remove(name) {
        delete this.entries[name];
        return this;
    },
    clean() {
        const recovery = {};
        Object.entries(this.entries).map(entry => {
            if (entry[0].match('@Theme.')) {
                recovery[entry[0]] = entry[1];
            }
            else {
            }
        });
        this.entries = recovery;
        return this;
    },
    retrive(name) {
        return this.entries[name];
    },
    retrives() {
        return this.entries || {};
    },
};
/**
 * @WorkInProgressBegin
 */
/**
 * Sensen HTML Element
 */
class SensenElement extends HTMLElement {
}
/**
 * Sensen Element : Value
 */
class SensenElementEcho extends SensenElement {
    init() {
        const get = this.getAttribute('get');
        const set = this.getAttribute('set');
        const or = this.getAttribute('or');
        console.log('Parse Echo Element', get, or, set);
        if (typeof get == 'string') {
            // const value = window.$SensenRLP.retrive(get) || or || '';
            // const ref = document.createDocumentFragment()
            // this.parentNode.replaceChild(ref, this)
        }
        return this;
    }
    connectedCallback() {
        this.init();
    }
}
if (!customElements.get('sn-echo')) {
    globalThis.customElements.define('sn-echo', SensenElementEcho);
}
/**
 * @WorkInProgressEnd
 */
function CompilatorCheckVariables(content) {
    const records = {};
    const variableRex = new RegExp('{{(.*?)}}', 'g');
    const contentMatches = [...content.matchAll(variableRex)];
    Object.values(contentMatches).map(match => {
        const syntax = match[1].split('||');
        syntax[0] = syntax[0].trim();
        syntax[1] = (syntax[1] || '').trim().replace(/'(.*)'/gi, "$1");
        syntax[1] = (syntax[1] || '').trim().replace(/"(.*)"/gi, "$1");
        records[syntax[0]] = { match, syntax, };
    });
    return records;
}
function CompilatorRecordsRefsVariables(element) {
    const state = {};
    if (element) {
        Object.values(element.children).map(child => {
            const children = Object.values(child);
            const hasChildren = children.length;
            if (!hasChildren) {
                const refID = _MetricRandom_js__WEBPACK_IMPORTED_MODULE_0__.ProtorianMetricRandom.CreateAplpha(32).join('');
                /** Element Content */
                Object.entries(CompilatorCheckVariables(child.innerHTML) || {}).map(entry => {
                    window.$SensenNodeRefVariables[entry[0]] = {
                        ref: refID,
                        records: entry,
                        content: child.innerHTML,
                        attribute: undefined,
                    };
                    child.setAttribute('sensen-ref', refID);
                });
                /** Element Attributes */
                Object.values(child.attributes).map(attr => {
                    Object.entries(CompilatorCheckVariables(attr.value) || {}).map(entry => {
                        window.$SensenNodeRefVariables[entry[0]] = {
                            ref: refID,
                            records: entry,
                            content: undefined,
                            attribute: { name: attr.name, value: attr.value, },
                        };
                        child.setAttribute('sensen-ref', refID);
                    });
                });
            }
            else {
                CompilatorNodeVariables(child);
            }
        });
    }
    return state;
}
function CompilateVariables(content, dictionary) {
    const _dictionary = dictionary || window.$SensenRLP.retrives();
    Object.entries(CompilatorCheckVariables(content) || {}).map(entry => {
        if (window.$SensenNodeRefVariables[entry[0]]) {
            content = content.replace(entry[1].match[0], (_dictionary[entry[0]] || entry[1].syntax[1] || entry[0]).trim());
        }
        else {
            const variables = CompilatorCheckVariables(content);
            Object.values(variables).map(variable => {
                content = content.replace(variable.match[0], (_dictionary[variable.syntax[0]] || variable.syntax[1] || variable.syntax[0]).trim());
            });
        }
    });
    return content;
}
function CompilatorNodeVariables(element, dictionary) {
    // const state : { [K: string]: any } = {};
    if (element) {
        if (element.children.length) {
            Object.values(element.children).map(child => {
                const children = Object.values(child);
                const hasChildren = children.length;
                if (!hasChildren) {
                    /** Element Content */
                    child.innerHTML = CompilateVariables(child.innerHTML, dictionary);
                    /** Element Attributes */
                    Object.values(child.attributes).map(attr => {
                        if (attr.name == 'sensen-ref') {
                            return;
                        }
                        const value = CompilateVariables(attr.value, dictionary);
                        child.setAttribute(attr.name, value);
                    });
                }
                else {
                    CompilatorNodeVariables(child, dictionary);
                }
            });
        }
        else {
            element.innerHTML = CompilateVariables(element.innerHTML, dictionary);
            Object.values(element.attributes).map(attr => {
                if (attr.name == 'sensen-ref') {
                    return;
                }
                const value = CompilateVariables(attr.value, dictionary);
                element.setAttribute(attr.name, value);
            });
        }
    }
    // return state;
    return element;
}
function CompilatorNode(element, dictionary) {
    return CompilatorNodeVariables(element, dictionary);
}
function Compilator(element) {
    const content = element.innerHTML;
    let parsing = CompilateVariables(content);
    element.innerHTML = parsing;
}
class Sensen {
    static JS(app) {
        console.log(`${this.Name} is ready`);
        window.SensenJSApp = app;
        window.SensenJSApp(this);
    }
}
Sensen.Name = 'Sensen Senju';
Sensen.RLPObject = window.$SensenRLP;
Sensen.Compilator = Compilator;
Sensen.CompilateVariables = CompilateVariables;
Sensen.CompilatorNodeVariables = CompilatorNodeVariables;
Sensen.CompilatorNode = CompilatorNode;


/***/ }),

/***/ "./node_modules/sensen-hinata/js/LocationMethods.js":
/*!**********************************************************!*\
  !*** ./node_modules/sensen-hinata/js/LocationMethods.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LocationGetMethods = {
    parseString(str, encoding = false) {
        const out = {};
        const ex = str.split('&');
        ex.map(q => {
            const qu = q.split('=');
            out[qu[0]] = `${qu[1]}`;
        });
        return out;
    },
    trigger(props) {
        const ex = (location.hash ? location.hash.substr(1) : props.router.config.default || '').split('?');
        const params = this.parseString(ex[1] || '');
        Object.entries(params || {}).map(param => {
            window.$SensenRLP.push(param[0], param[1]);
        });
        return params;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocationGetMethods);


/***/ }),

/***/ "./node_modules/sensen-hinata/js/MetricRandom.js":
/*!*******************************************************!*\
  !*** ./node_modules/sensen-hinata/js/MetricRandom.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtorianMetricRandom": () => (/* binding */ ProtorianMetricRandom)
/* harmony export */ });
class ProtorianMetricRandom {
    static CreateRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static CreateBlock(base, length) {
        let based, out = [];
        if (typeof base == 'string') {
            based = base.split(' ');
        }
        if (Array.isArray(based)) {
            for (let x = 0; x < length; x++) {
                const k = this.CreateRandom(0, based.length - 1);
                out[out.length] = based[k];
            }
        }
        return out;
    }
    static CreateAplpha(length) {
        return this.CreateBlock(`${this.ALPHA_LOWER} ${this.ALPHA_UPPER}`, length);
    }
    static CreateNumeric(length) {
        return this.CreateBlock(`${this.NUMERIC}`, length);
    }
    static Create(length) {
        return this.CreateBlock(`${this.ALPHA_NUMERIC}`, length);
    }
}
ProtorianMetricRandom.ALPHA_NUMERIC = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
ProtorianMetricRandom.ALPHA_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
ProtorianMetricRandom.NUMERIC = '0 1 2 3 4 5 6 7 8 9';


/***/ }),

/***/ "./node_modules/sensen-hinata/js/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/sensen-hinata/js/Router.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensenRouter": () => (/* binding */ SensenRouter)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./node_modules/sensen-hinata/js/View.js");

class SensenRouter {
    constructor(config) {
        this.config = config;
        this.routes = {};
    }
    add(view) {
        this.routes[view.slug] = view;
        return this;
    }
    render() {
        window.addEventListener('hashchange', () => {
            const slug = (location.hash || '').substr(1);
            this.navigate(slug);
        });
        if (this.config.default) {
            console.log('Go to default view', this.config.default);
            this.navigate(this.config.default);
        }
        else {
            console.log('Go to view', location.hash ? location.hash.substr(1) : 'undefined');
            this.navigate(location.hash ? location.hash.substr(1) : 'home');
        }
        return this;
    }
    parseSlug(slug) {
        const ex = slug.split('?');
        return {
            name: ex[0],
            search: ex[1] || ''
        };
    }
    navigate(slug) {
        const pslug = this.parseSlug(slug);
        /**
         * Unmount last View
         */
        if (window.View instanceof _View_js__WEBPACK_IMPORTED_MODULE_0__.SensenView) {
            if ('unmounted' in window.View) {
                window.View.unmounted(window.View.dependencies);
            }
        }
        return new Promise((resolve, reject) => {
            this.view = this.routes[pslug.name] || null;
            if (this.view) {
                fetch(`./sensen/views/${pslug.name}.html`)
                    .then(r => r.text())
                    .then(html => {
                    const element = new DOMParser().parseFromString(html, 'text/html');
                    const fragment = document.createElement('div');
                    window.$SensenRLP.clean();
                    window.$SensenNodeRefVariables = {};
                    Object.values(element.body.children).map(c => fragment.appendChild(c));
                    this.view.render(fragment, this);
                    resolve(element);
                    location.hash = slug;
                    if ('mounted' in this.view) {
                        this.view.mounted(this.view.dependencies);
                    }
                })
                    .catch(er => {
                    reject(er);
                    throw (`SensenJS Router say :\n${er}`);
                });
            }
            else {
                throw (`SensenJS Router say route < \n${slug} > not found`);
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/sensen-hinata/js/Theme.js":
/*!************************************************!*\
  !*** ./node_modules/sensen-hinata/js/Theme.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SensenTheme)
/* harmony export */ });
class SensenTheme {
    constructor(theme) {
        this.Fragments = {};
        this.Payloads = [];
        this.Assets = {
            CSS: [],
            JS: [],
        };
        this.Theme = theme;
    }
    async Async(path) {
        return new Promise((resolve, reject) => {
            fetch(`./sensen/themes/${(this.Theme ? `${this.Theme}/` : '')}${path}.html`)
                .then(r => r.text())
                .then(data => resolve(data))
                .catch(er => reject(er));
        });
    }
    Define(name, payload) {
        if (typeof payload == 'string') {
            switch (typeof payload) {
                case 'string':
                    this.Fragments[name] = payload;
                    break;
            }
        }
        if (payload instanceof Promise) {
            this.Payloads.push(new Promise((resolve, reject) => {
                payload
                    .then(data => {
                    this.Fragments[name] = data;
                    window.$SensenRLP.push(`@Theme.${name}`, data);
                    return resolve(data);
                })
                    .catch(er => {
                    reject(er);
                    throw (`Sensen Theme say ${er}`);
                });
            }));
        }
        return this;
    }
    Asset(type, path) {
        switch (type) {
            case '-css':
                this.Assets.CSS.push(path);
                break;
            case '-js':
                this.Assets.JS.push(path);
                break;
        }
        return this;
    }
    LoadCSS(path) {
        const d = document.createElement('link');
        d.addEventListener('load', () => {
            console.log('Asset :', path, 'loaded');
        });
        d.addEventListener('error', () => {
            console.log('Asset :', path, 'failed');
        });
        d.setAttribute('type', 'text/css');
        d.setAttribute('rel', 'StyleSheet');
        d.setAttribute('sensen-assets', '-css');
        d.setAttribute('href', path);
        document.head.appendChild(d);
        return d;
    }
    LoadJS(path) {
        const d = document.createElement('script');
        d.addEventListener('load', () => {
            console.log('Asset :', path, 'loaded');
        });
        d.addEventListener('error', () => {
            console.log('Asset :', path, 'failed');
        });
        d.setAttribute('type', 'text/javascript');
        d.setAttribute('sensen-assets', '-js');
        d.setAttribute('src', path);
        document.head.appendChild(d);
        return d;
    }
    async Use() {
        return new Promise(async (resolve, reject) => {
            try {
                /**
                 * Insertions des Assets
                 */
                if (this.Assets.CSS.length) {
                    this.Assets.CSS.map(path => this.LoadCSS(path));
                }
                if (this.Assets.JS.length) {
                    this.Assets.JS.map(path => this.LoadJS(path));
                }
                /**
                 * Traitement des fragments
                 */
                const fragmentsArray = Object.entries(this.Fragments);
                if (fragmentsArray.length) {
                    fragmentsArray.map(e => {
                        window.$SensenRLP.push(`@Theme(${this.Theme}).${e[0]}`, e[1]);
                    });
                    if (this.Payloads.length) {
                        // Object.values( this.Payloads ).map(promise=>)
                        await Promise.all(this.Payloads).then(fragment => {
                            console.warn('load fragment', fragment);
                        })
                            .then(() => {
                            resolve(this);
                        });
                    }
                    else {
                        resolve(this);
                    }
                    // resolve(this);
                }
                else {
                    resolve(this);
                }
            }
            catch (er) {
                reject(er);
            }
        });
    }
}


/***/ }),

/***/ "./node_modules/sensen-hinata/js/ThemeColor.js":
/*!*****************************************************!*\
  !*** ./node_modules/sensen-hinata/js/ThemeColor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
window.UiThemeColorChange = (name) => {
    const doc = document.querySelector(':root');
    if (doc) {
        doc.setAttribute('theme-color', name);
        localStorage.setItem('@ian-ui-theme', name);
    }
    else {
        throw (`Impossible de changer le theme en ${name}`);
    }
};
window.UiThemeColorToggle = () => {
    const doc = document.querySelector(':root');
    const current = localStorage.getItem('@ian-ui-theme') || 'light';
    window.UiThemeColorChange((current == 'light') ? 'dark' : 'light');
};
window.UiThemeColorInit = () => {
    const name = localStorage.getItem('@ian-ui-theme') || 'light';
    window.UiThemeColorChange(name);
};
window.UiThemeSplashScreen = (message = 'Chargement...') => {
    const w = document.createElement('div');
    const m = document.createElement('div');
    const logo = document.createElement('img');
    m.textContent = message || '';
    logo.setAttribute('src', '/assets/images/app-logo.png');
    w.classList.add('splashscreen');
    m.classList.add('splashscreen-title');
    logo.classList.add('splashscreen-logo');
    w.appendChild(logo);
    w.appendChild(m);
    document.body.appendChild(w);
    globalThis.addEventListener('load', () => {
        let t = setTimeout(() => {
            clearTimeout(t);
            w.addEventListener('transitionend', () => {
                try {
                    if (w) {
                        w.parentNode.removeChild(w);
                    }
                }
                catch (s) { }
            });
            w.classList.add('hide');
        }, 1962);
    });
};
/**
 * For tranditional Browser
 */
// globalThis.addEventListener('DOMContentLoaded', ()=>{
//     UiThemeColorInit()
//     UiThemeSplashScreen()
// });
const SensenThemeColor = {
    Set: window.UiThemeColorChange,
    Toggle: window.UiThemeColorToggle,
    Init: window.UiThemeColorInit,
    SplashScreen: window.UiThemeSplashScreen,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SensenThemeColor);


/***/ }),

/***/ "./node_modules/sensen-hinata/js/View.js":
/*!***********************************************!*\
  !*** ./node_modules/sensen-hinata/js/View.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensenView": () => (/* binding */ SensenView)
/* harmony export */ });
/* harmony import */ var _Framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework.js */ "./node_modules/sensen-hinata/js/Framework.js");

window.View = {};
class SensenView {
    constructor(props) {
        this.slug = props.slug;
        this.source = props.source;
        this.controller = props.controller || (() => { });
        this.mounted = props.mounted || (() => { });
        this.unmounted = props.unmounted || (() => { });
    }
    cleanRoot() {
        if (this.root) {
            this.root.innerHTML = '';
        }
        return this;
    }
    render(input, router) {
        window.View = this;
        const dependencies = router.config.viewControllersDependencies;
        //root : HTMLElement, dependencies?: SensenTViewControllersDependencies
        /**
         * Get All Dependencies
         */
        const _dependencies = {};
        if (typeof dependencies == 'object') {
            const _dependenciesArgs = {
                view: this,
                router,
                input,
            };
            const _dependenciesArray = Object.entries(dependencies || {});
            if (_dependenciesArray.length) {
                _dependenciesArray.forEach(dep => {
                    if ('trigger' in dep[1] && typeof dep[1]['trigger'] == 'function') {
                        _dependencies[dep[0]] = dep[1].trigger(_dependenciesArgs);
                    }
                    else {
                        // _dependencies[ dep[0] ] = (()=>{})
                    }
                    // _dependencies[ dep[0] ] = 'trigger' in dep[1] ? dep[1].trigger(_dependenciesArgs) : (()=>{})
                });
            }
        }
        _dependencies.router = router;
        _dependencies.view = this;
        _dependencies.props = window.$SensenRLP.retrives();
        _dependencies.template = (fragment) => {
            const sampled = _dependencies.props[`@Theme.${fragment}`] || '';
            const dom = (new DOMParser()).parseFromString(sampled, 'text/html');
            const out = {
                raw: sampled,
                element: dom.body
            };
            return out;
        };
        /**
         * Sharing
         */
        this.dependencies = _dependencies;
        /**
         * States
         */
        this.router = router;
        this.input = input;
        this.root = router.root;
        /**
         * Compilate
         */
        (0,_Framework_js__WEBPACK_IMPORTED_MODULE_0__.CompilatorRecordsRefsVariables)(this.input);
        (0,_Framework_js__WEBPACK_IMPORTED_MODULE_0__.Compilator)(this.input);
        /**
         * Init Controller with dependencies
         */
        if ('controller' in this) {
            this.controller(_dependencies);
        }
        /**
         * Parsing
         */
        this.setContent(this.input);
        // console.log('Render View ', window.$SensenRLP.retrives(),  _dependencies)
        return this;
    }
    setContent(element) {
        // console.log('Parse :', element, this.root )
        if (this.root) {
            this.cleanRoot().root.appendChild(element);
        }
        return this;
    }
    setVariable(name, value, persist = false) {
        const defaultDictionary = window.$SensenRLP.retrives() || {};
        const dictionary = {};
        Object.entries(defaultDictionary).map(dic => {
            dictionary[dic[0]] = dic[1];
        });
        dictionary[name] = value;
        if (window.$SensenNodeRefVariables[name]) {
            const check = window.$SensenNodeRefVariables[name];
            const target = this.input.querySelector(`[sensen-ref="${check.ref}"]`);
            if (target) {
                if (check.content) {
                    /** Element Content */
                    target.innerHTML = (0,_Framework_js__WEBPACK_IMPORTED_MODULE_0__.CompilateVariables)(check.content, dictionary);
                }
                if (check.attribute) {
                    /** Element Content */
                    target.setAttribute(check.attribute.name, check.attribute.value.replace(check.records[1].match[0], (value || check.records[1].syntax[1]).trim()));
                }
                /** * Update */
                (0,_Framework_js__WEBPACK_IMPORTED_MODULE_0__.CompilatorNodeVariables)(target, dictionary);
            }
        }
        if (persist) {
            window.$SensenRLP.push(name, value);
        }
        return this;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./jsbundle/sensen.theme.bundle.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEeUY7QUFDekg7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxrREFBa0Q7QUFDbEQsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxrSEFBa0g7QUFDbEgsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxTQUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUE4QjtBQUN0QyxRQUFRLHlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxVQUFVO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpRUFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL2pzYnVuZGxlL3NlbnNlbi50aGVtZS5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2luZGV4LmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9ub2RlX21vZHVsZXMvc2Vuc2VuLWhpbmF0YS9qcy9GcmFtZXdvcmsuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL0xvY2F0aW9uTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vbm9kZV9tb2R1bGVzL3NlbnNlbi1oaW5hdGEvanMvTWV0cmljUmFuZG9tLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9ub2RlX21vZHVsZXMvc2Vuc2VuLWhpbmF0YS9qcy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL1RoZW1lLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9ub2RlX21vZHVsZXMvc2Vuc2VuLWhpbmF0YS9qcy9UaGVtZUNvbG9yLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9ub2RlX21vZHVsZXMvc2Vuc2VuLWhpbmF0YS9qcy9WaWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZW5zZW5IaW5hdGEgZnJvbSBcInNlbnNlbi1oaW5hdGFcIjtcbmNvbnN0IHRoZW1lQnVuZGxlID0ge31cbjt0aGVtZUJ1bmRsZVsnc2Vuc2VuLWtpdCddID0gKG5ldyBTZW5zZW5IaW5hdGEuVGhlbWUoJ3NlbnNlbi1raXQnKSlcbjt0aGVtZUJ1bmRsZVsnc2Vuc2VuLWtpdCddLkFzc2V0KCctY3NzJywnYXNzZXRzL2Nzcy9zZW5zZW4ta2l0L2luZGV4LmNzcycpXG47dGhlbWVCdW5kbGVbJ3NlbnNlbi1raXQnXS5Bc3NldCgnLWpzJywnYXNzZXRzL2pzL3NlbnNlbi1raXQvaW5kZXguanMnKVxuO3RoZW1lQnVuZGxlWydzZW5zZW4ta2l0J11cbi5EZWZpbmUoJ2hlYWRlcicsYFxuPGhlYWRlcj5cbiAgICA8aDE+SGVhZGVyIEFydGlmYWN0PC9oMT5cbjwvaGVhZGVyPlxuYClcbi5Bc3NldCgnLWNzcycsJ2Fzc2V0cy9jc3Mvc2Vuc2VuLWtpdC9oZWFkZXIvZnVsbC5jc3MnKVxuLkFzc2V0KCctY3NzJywnYXNzZXRzL2Nzcy9zZW5zZW4ta2l0L2hlYWRlci9pbmRleC5jc3MnKVxuLkFzc2V0KCctY3NzJywnYXNzZXRzL2Nzcy9zZW5zZW4ta2l0L2hlYWRlci9zaW1wbGUuY3NzJylcbi5Bc3NldCgnLWpzJywnYXNzZXRzL2pzL3NlbnNlbi1raXQvaGVhZGVyL2luZGV4LmpzJylcbi5EZWZpbmUoJ25hdi5ib3R0b20nLGA8bmF2PlxuICAgIG5hdiBib3R0b21cbjwvbmF2PmApXG4uQXNzZXQoJy1jc3MnLCdhc3NldHMvY3NzL3NlbnNlbi1raXQvbmF2LmJvdHRvbS9pbmRleC5jc3MnKVxuLkFzc2V0KCctanMnLCdhc3NldHMvanMvc2Vuc2VuLWtpdC9uYXYuYm90dG9tL2luZGV4LmpzJylcbjt0aGVtZUJ1bmRsZVsnc2Vuc2VuLWtpdCddLlVzZSgpO1xuZXhwb3J0IGRlZmF1bHQgdGhlbWVCdW5kbGU7IiwiaW1wb3J0IFNlbnNlbiBmcm9tIFwiLi9qcy9GcmFtZXdvcmsuanNcIjtcbmltcG9ydCB7IFNlbnNlblJvdXRlciB9IGZyb20gXCIuL2pzL1JvdXRlci5qc1wiO1xuaW1wb3J0IFNlbnNlblRoZW1lIGZyb20gXCIuL2pzL1RoZW1lLmpzXCI7XG5pbXBvcnQgU2Vuc2VuVGhlbWVDb2xvciBmcm9tIFwiLi9qcy9UaGVtZUNvbG9yLmpzXCI7XG5pbXBvcnQgeyBTZW5zZW5WaWV3IH0gZnJvbSBcIi4vanMvVmlldy5qc1wiO1xuaW1wb3J0IExvY2F0aW9uR2V0TWV0aG9kcyBmcm9tIFwiLi9qcy9Mb2NhdGlvbk1ldGhvZHMuanNcIlxuXG5jb25zdCBTZW5zZW5IaW5hdGEgPSB7XG4gICAgRnJhbWV3b3JrOiBTZW5zZW4sXG4gICAgVmlldzogU2Vuc2VuVmlldyxcbiAgICBUaGVtZTogU2Vuc2VuVGhlbWUsXG4gICAgVGhlbWVDb2xvcjogU2Vuc2VuVGhlbWVDb2xvcixcbiAgICBSb3V0ZXI6IFNlbnNlblJvdXRlcixcbiAgICBEZXBlbmRlbmNpZXM6IHtcbiAgICAgICAgTG9jYXRpb25HZXRNZXRob2RzXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Vuc2VuSGluYXRhO1xuIiwiaW1wb3J0IHsgUHJvdG9yaWFuTWV0cmljUmFuZG9tIH0gZnJvbSBcIi4vTWV0cmljUmFuZG9tLmpzXCI7XG53aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXMgPSB7fTtcbndpbmRvdy4kU2Vuc2VuUkxQID0ge1xuICAgIGVudHJpZXM6IHt9LFxuICAgIHB1c2gobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjbGVhbigpIHtcbiAgICAgICAgY29uc3QgcmVjb3ZlcnkgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5lbnRyaWVzKS5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5WzBdLm1hdGNoKCdAVGhlbWUuJykpIHtcbiAgICAgICAgICAgICAgICByZWNvdmVyeVtlbnRyeVswXV0gPSBlbnRyeVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gcmVjb3Zlcnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmV0cml2ZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbbmFtZV07XG4gICAgfSxcbiAgICByZXRyaXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcyB8fCB7fTtcbiAgICB9LFxufTtcbi8qKlxuICogQFdvcmtJblByb2dyZXNzQmVnaW5cbiAqL1xuLyoqXG4gKiBTZW5zZW4gSFRNTCBFbGVtZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5zZW5FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xufVxuLyoqXG4gKiBTZW5zZW4gRWxlbWVudCA6IFZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5zZW5FbGVtZW50RWNobyBleHRlbmRzIFNlbnNlbkVsZW1lbnQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IGdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdnZXQnKTtcbiAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NldCcpO1xuICAgICAgICBjb25zdCBvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdvcicpO1xuICAgICAgICBjb25zb2xlLmxvZygnUGFyc2UgRWNobyBFbGVtZW50JywgZ2V0LCBvciwgc2V0KTtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXQgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlID0gd2luZG93LiRTZW5zZW5STFAucmV0cml2ZShnZXQpIHx8IG9yIHx8ICcnO1xuICAgICAgICAgICAgLy8gY29uc3QgcmVmID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgICAgICAvLyB0aGlzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlZiwgdGhpcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbn1cbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdzbi1lY2hvJykpIHtcbiAgICBnbG9iYWxUaGlzLmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc24tZWNobycsIFNlbnNlbkVsZW1lbnRFY2hvKTtcbn1cbi8qKlxuICogQFdvcmtJblByb2dyZXNzRW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoY29udGVudCkge1xuICAgIGNvbnN0IHJlY29yZHMgPSB7fTtcbiAgICBjb25zdCB2YXJpYWJsZVJleCA9IG5ldyBSZWdFeHAoJ3t7KC4qPyl9fScsICdnJyk7XG4gICAgY29uc3QgY29udGVudE1hdGNoZXMgPSBbLi4uY29udGVudC5tYXRjaEFsbCh2YXJpYWJsZVJleCldO1xuICAgIE9iamVjdC52YWx1ZXMoY29udGVudE1hdGNoZXMpLm1hcChtYXRjaCA9PiB7XG4gICAgICAgIGNvbnN0IHN5bnRheCA9IG1hdGNoWzFdLnNwbGl0KCd8fCcpO1xuICAgICAgICBzeW50YXhbMF0gPSBzeW50YXhbMF0udHJpbSgpO1xuICAgICAgICBzeW50YXhbMV0gPSAoc3ludGF4WzFdIHx8ICcnKS50cmltKCkucmVwbGFjZSgvJyguKiknL2dpLCBcIiQxXCIpO1xuICAgICAgICBzeW50YXhbMV0gPSAoc3ludGF4WzFdIHx8ICcnKS50cmltKCkucmVwbGFjZSgvXCIoLiopXCIvZ2ksIFwiJDFcIik7XG4gICAgICAgIHJlY29yZHNbc3ludGF4WzBdXSA9IHsgbWF0Y2gsIHN5bnRheCwgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVjb3Jkcztcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXMoZWxlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhlbGVtZW50LmNoaWxkcmVuKS5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBPYmplY3QudmFsdWVzKGNoaWxkKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZklEID0gUHJvdG9yaWFuTWV0cmljUmFuZG9tLkNyZWF0ZUFwbHBoYSgzMikuam9pbignJyk7XG4gICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjaGlsZC5pbm5lckhUTUwpIHx8IHt9KS5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbZW50cnlbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY2hpbGQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnc2Vuc2VuLXJlZicsIHJlZklEKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBBdHRyaWJ1dGVzICovXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjaGlsZC5hdHRyaWJ1dGVzKS5tYXAoYXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhhdHRyLnZhbHVlKSB8fCB7fSkubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tlbnRyeVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB7IG5hbWU6IGF0dHIubmFtZSwgdmFsdWU6IGF0dHIudmFsdWUsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tcmVmJywgcmVmSUQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVWYXJpYWJsZXMoY29udGVudCwgZGljdGlvbmFyeSkge1xuICAgIGNvbnN0IF9kaWN0aW9uYXJ5ID0gZGljdGlvbmFyeSB8fCB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpO1xuICAgIE9iamVjdC5lbnRyaWVzKENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjb250ZW50KSB8fCB7fSkubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tlbnRyeVswXV0pIHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoZW50cnlbMV0ubWF0Y2hbMF0sIChfZGljdGlvbmFyeVtlbnRyeVswXV0gfHwgZW50cnlbMV0uc3ludGF4WzFdIHx8IGVudHJ5WzBdKS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzID0gQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzKGNvbnRlbnQpO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh2YXJpYWJsZXMpLm1hcCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSh2YXJpYWJsZS5tYXRjaFswXSwgKF9kaWN0aW9uYXJ5W3ZhcmlhYmxlLnN5bnRheFswXV0gfHwgdmFyaWFibGUuc3ludGF4WzFdIHx8IHZhcmlhYmxlLnN5bnRheFswXSkudHJpbSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMoZWxlbWVudCwgZGljdGlvbmFyeSkge1xuICAgIC8vIGNvbnN0IHN0YXRlIDogeyBbSzogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5jaGlsZHJlbikubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IE9iamVjdC52YWx1ZXMoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoY2hpbGQuaW5uZXJIVE1MLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQXR0cmlidXRlcyAqL1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMpLm1hcChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT0gJ3NlbnNlbi1yZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBDb21waWxhdGVWYXJpYWJsZXMoYXR0ci52YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMoY2hpbGQsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoZWxlbWVudC5pbm5lckhUTUwsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlbGVtZW50LmF0dHJpYnV0ZXMpLm1hcChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09ICdzZW5zZW4tcmVmJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gQ29tcGlsYXRlVmFyaWFibGVzKGF0dHIudmFsdWUsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gcmV0dXJuIHN0YXRlO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0b3JOb2RlKGVsZW1lbnQsIGRpY3Rpb25hcnkpIHtcbiAgICByZXR1cm4gQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMoZWxlbWVudCwgZGljdGlvbmFyeSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRvcihlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIGxldCBwYXJzaW5nID0gQ29tcGlsYXRlVmFyaWFibGVzKGNvbnRlbnQpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcGFyc2luZztcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbnNlbiB7XG4gICAgc3RhdGljIEpTKGFwcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLk5hbWV9IGlzIHJlYWR5YCk7XG4gICAgICAgIHdpbmRvdy5TZW5zZW5KU0FwcCA9IGFwcDtcbiAgICAgICAgd2luZG93LlNlbnNlbkpTQXBwKHRoaXMpO1xuICAgIH1cbn1cblNlbnNlbi5OYW1lID0gJ1NlbnNlbiBTZW5qdSc7XG5TZW5zZW4uUkxQT2JqZWN0ID0gd2luZG93LiRTZW5zZW5STFA7XG5TZW5zZW4uQ29tcGlsYXRvciA9IENvbXBpbGF0b3I7XG5TZW5zZW4uQ29tcGlsYXRlVmFyaWFibGVzID0gQ29tcGlsYXRlVmFyaWFibGVzO1xuU2Vuc2VuLkNvbXBpbGF0b3JOb2RlVmFyaWFibGVzID0gQ29tcGlsYXRvck5vZGVWYXJpYWJsZXM7XG5TZW5zZW4uQ29tcGlsYXRvck5vZGUgPSBDb21waWxhdG9yTm9kZTtcbiIsImNvbnN0IExvY2F0aW9uR2V0TWV0aG9kcyA9IHtcbiAgICBwYXJzZVN0cmluZyhzdHIsIGVuY29kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0ge307XG4gICAgICAgIGNvbnN0IGV4ID0gc3RyLnNwbGl0KCcmJyk7XG4gICAgICAgIGV4Lm1hcChxID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ID0gcS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb3V0W3F1WzBdXSA9IGAke3F1WzFdfWA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG4gICAgdHJpZ2dlcihwcm9wcykge1xuICAgICAgICBjb25zdCBleCA9IChsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgOiBwcm9wcy5yb3V0ZXIuY29uZmlnLmRlZmF1bHQgfHwgJycpLnNwbGl0KCc/Jyk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucGFyc2VTdHJpbmcoZXhbMV0gfHwgJycpO1xuICAgICAgICBPYmplY3QuZW50cmllcyhwYXJhbXMgfHwge30pLm1hcChwYXJhbSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKHBhcmFtWzBdLCBwYXJhbVsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkdldE1ldGhvZHM7XG4iLCJleHBvcnQgY2xhc3MgUHJvdG9yaWFuTWV0cmljUmFuZG9tIHtcbiAgICBzdGF0aWMgQ3JlYXRlUmFuZG9tKG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVCbG9jayhiYXNlLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGJhc2VkLCBvdXQgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBiYXNlZCA9IGJhc2Uuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShiYXNlZCkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrID0gdGhpcy5DcmVhdGVSYW5kb20oMCwgYmFzZWQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgb3V0W291dC5sZW5ndGhdID0gYmFzZWRba107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgc3RhdGljIENyZWF0ZUFwbHBoYShsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soYCR7dGhpcy5BTFBIQV9MT1dFUn0gJHt0aGlzLkFMUEhBX1VQUEVSfWAsIGxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVOdW1lcmljKGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5DcmVhdGVCbG9jayhgJHt0aGlzLk5VTUVSSUN9YCwgbGVuZ3RoKTtcbiAgICB9XG4gICAgc3RhdGljIENyZWF0ZShsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soYCR7dGhpcy5BTFBIQV9OVU1FUklDfWAsIGxlbmd0aCk7XG4gICAgfVxufVxuUHJvdG9yaWFuTWV0cmljUmFuZG9tLkFMUEhBX05VTUVSSUMgPSAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHUgdiB3IHggeSB6IEEgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDX0xPV0VSID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDX1VQUEVSID0gJ0EgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9VUFBFUiA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFonO1xuUHJvdG9yaWFuTWV0cmljUmFuZG9tLkFMUEhBX0xPV0VSID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeic7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uTlVNRVJJQyA9ICcwIDEgMiAzIDQgNSA2IDcgOCA5JztcbiIsImltcG9ydCB7IFNlbnNlblZpZXcgfSBmcm9tIFwiLi9WaWV3LmpzXCI7XG5leHBvcnQgY2xhc3MgU2Vuc2VuUm91dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucm91dGVzID0ge307XG4gICAgfVxuICAgIGFkZCh2aWV3KSB7XG4gICAgICAgIHRoaXMucm91dGVzW3ZpZXcuc2x1Z10gPSB2aWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNsdWcgPSAobG9jYXRpb24uaGFzaCB8fCAnJykuc3Vic3RyKDEpO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShzbHVnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR28gdG8gZGVmYXVsdCB2aWV3JywgdGhpcy5jb25maWcuZGVmYXVsdCk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKHRoaXMuY29uZmlnLmRlZmF1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvIHRvIHZpZXcnLCBsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgOiAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKGxvY2F0aW9uLmhhc2ggPyBsb2NhdGlvbi5oYXNoLnN1YnN0cigxKSA6ICdob21lJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU2x1ZyhzbHVnKSB7XG4gICAgICAgIGNvbnN0IGV4ID0gc2x1Zy5zcGxpdCgnPycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZXhbMF0sXG4gICAgICAgICAgICBzZWFyY2g6IGV4WzFdIHx8ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIG5hdmlnYXRlKHNsdWcpIHtcbiAgICAgICAgY29uc3QgcHNsdWcgPSB0aGlzLnBhcnNlU2x1ZyhzbHVnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnQgbGFzdCBWaWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAod2luZG93LlZpZXcgaW5zdGFuY2VvZiBTZW5zZW5WaWV3KSB7XG4gICAgICAgICAgICBpZiAoJ3VubW91bnRlZCcgaW4gd2luZG93LlZpZXcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuVmlldy51bm1vdW50ZWQod2luZG93LlZpZXcuZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5yb3V0ZXNbcHNsdWcubmFtZV0gfHwgbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgICAgICBmZXRjaChgLi9zZW5zZW4vdmlld3MvJHtwc2x1Zy5uYW1lfS5odG1sYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ociA9PiByLnRleHQoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAuY2xlYW4oKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5ib2R5LmNoaWxkcmVuKS5tYXAoYyA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXIoZnJhZ21lbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gc2x1ZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdtb3VudGVkJyBpbiB0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5tb3VudGVkKHRoaXMudmlldy5kZXBlbmRlbmNpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IDpcXG4ke2VyfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IHJvdXRlIDwgXFxuJHtzbHVnfSA+IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zZW5UaGVtZSB7XG4gICAgY29uc3RydWN0b3IodGhlbWUpIHtcbiAgICAgICAgdGhpcy5GcmFnbWVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5QYXlsb2FkcyA9IFtdO1xuICAgICAgICB0aGlzLkFzc2V0cyA9IHtcbiAgICAgICAgICAgIENTUzogW10sXG4gICAgICAgICAgICBKUzogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuVGhlbWUgPSB0aGVtZTtcbiAgICB9XG4gICAgYXN5bmMgQXN5bmMocGF0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2goYC4vc2Vuc2VuL3RoZW1lcy8keyh0aGlzLlRoZW1lID8gYCR7dGhpcy5UaGVtZX0vYCA6ICcnKX0ke3BhdGh9Lmh0bWxgKVxuICAgICAgICAgICAgICAgIC50aGVuKHIgPT4gci50ZXh0KCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiByZXNvbHZlKGRhdGEpKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiByZWplY3QoZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIERlZmluZShuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnJhZ21lbnRzW25hbWVdID0gcGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLlBheWxvYWRzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuRnJhZ21lbnRzW25hbWVdID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAucHVzaChgQFRoZW1lLiR7bmFtZX1gLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW4gVGhlbWUgc2F5ICR7ZXJ9YCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIEFzc2V0KHR5cGUsIHBhdGgpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICctY3NzJzpcbiAgICAgICAgICAgICAgICB0aGlzLkFzc2V0cy5DU1MucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy1qcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3NldHMuSlMucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgTG9hZENTUyhwYXRoKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2xvYWRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2ZhaWxlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdTdHlsZVNoZWV0Jyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tYXNzZXRzJywgJy1jc3MnKTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBwYXRoKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIExvYWRKUyhwYXRoKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2V0IDonLCBwYXRoLCAnbG9hZGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fzc2V0IDonLCBwYXRoLCAnZmFpbGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ3NlbnNlbi1hc3NldHMnLCAnLWpzJyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXRoKTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIGFzeW5jIFVzZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSW5zZXJ0aW9ucyBkZXMgQXNzZXRzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQXNzZXRzLkNTUy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Bc3NldHMuQ1NTLm1hcChwYXRoID0+IHRoaXMuTG9hZENTUyhwYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkFzc2V0cy5KUy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Bc3NldHMuSlMubWFwKHBhdGggPT4gdGhpcy5Mb2FkSlMocGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBUcmFpdGVtZW50IGRlcyBmcmFnbWVudHNcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudHNBcnJheSA9IE9iamVjdC5lbnRyaWVzKHRoaXMuRnJhZ21lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnRzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50c0FycmF5Lm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuUkxQLnB1c2goYEBUaGVtZSgke3RoaXMuVGhlbWV9KS4ke2VbMF19YCwgZVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5QYXlsb2Fkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdC52YWx1ZXMoIHRoaXMuUGF5bG9hZHMgKS5tYXAocHJvbWlzZT0+KVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5QYXlsb2FkcykudGhlbihmcmFnbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdsb2FkIGZyYWdtZW50JywgZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJ3aW5kb3cuVWlUaGVtZUNvbG9yQ2hhbmdlID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIGlmIChkb2MpIHtcbiAgICAgICAgZG9jLnNldEF0dHJpYnV0ZSgndGhlbWUtY29sb3InLCBuYW1lKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0BpYW4tdWktdGhlbWUnLCBuYW1lKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IChgSW1wb3NzaWJsZSBkZSBjaGFuZ2VyIGxlIHRoZW1lIGVuICR7bmFtZX1gKTtcbiAgICB9XG59O1xud2luZG93LlVpVGhlbWVDb2xvclRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQGlhbi11aS10aGVtZScpIHx8ICdsaWdodCc7XG4gICAgd2luZG93LlVpVGhlbWVDb2xvckNoYW5nZSgoY3VycmVudCA9PSAnbGlnaHQnKSA/ICdkYXJrJyA6ICdsaWdodCcpO1xufTtcbndpbmRvdy5VaVRoZW1lQ29sb3JJbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQGlhbi11aS10aGVtZScpIHx8ICdsaWdodCc7XG4gICAgd2luZG93LlVpVGhlbWVDb2xvckNoYW5nZShuYW1lKTtcbn07XG53aW5kb3cuVWlUaGVtZVNwbGFzaFNjcmVlbiA9IChtZXNzYWdlID0gJ0NoYXJnZW1lbnQuLi4nKSA9PiB7XG4gICAgY29uc3QgdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbS50ZXh0Q29udGVudCA9IG1lc3NhZ2UgfHwgJyc7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvYXNzZXRzL2ltYWdlcy9hcHAtbG9nby5wbmcnKTtcbiAgICB3LmNsYXNzTGlzdC5hZGQoJ3NwbGFzaHNjcmVlbicpO1xuICAgIG0uY2xhc3NMaXN0LmFkZCgnc3BsYXNoc2NyZWVuLXRpdGxlJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdzcGxhc2hzY3JlZW4tbG9nbycpO1xuICAgIHcuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgdy5hcHBlbmRDaGlsZChtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHcpO1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgbGV0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgICAgIHcuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChzKSB7IH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0sIDE5NjIpO1xuICAgIH0pO1xufTtcbi8qKlxuICogRm9yIHRyYW5kaXRpb25hbCBCcm93c2VyXG4gKi9cbi8vIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT57XG4vLyAgICAgVWlUaGVtZUNvbG9ySW5pdCgpXG4vLyAgICAgVWlUaGVtZVNwbGFzaFNjcmVlbigpXG4vLyB9KTtcbmNvbnN0IFNlbnNlblRoZW1lQ29sb3IgPSB7XG4gICAgU2V0OiB3aW5kb3cuVWlUaGVtZUNvbG9yQ2hhbmdlLFxuICAgIFRvZ2dsZTogd2luZG93LlVpVGhlbWVDb2xvclRvZ2dsZSxcbiAgICBJbml0OiB3aW5kb3cuVWlUaGVtZUNvbG9ySW5pdCxcbiAgICBTcGxhc2hTY3JlZW46IHdpbmRvdy5VaVRoZW1lU3BsYXNoU2NyZWVuLFxufTtcbmV4cG9ydCBkZWZhdWx0IFNlbnNlblRoZW1lQ29sb3I7XG4iLCJpbXBvcnQgeyBDb21waWxhdGVWYXJpYWJsZXMsIENvbXBpbGF0b3IsIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzLCBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXMgfSBmcm9tIFwiLi9GcmFtZXdvcmsuanNcIjtcbndpbmRvdy5WaWV3ID0ge307XG5leHBvcnQgY2xhc3MgU2Vuc2VuVmlldyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBwcm9wcy5zb3VyY2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHByb3BzLmNvbnRyb2xsZXIgfHwgKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IHByb3BzLm1vdW50ZWQgfHwgKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMudW5tb3VudGVkID0gcHJvcHMudW5tb3VudGVkIHx8ICgoKSA9PiB7IH0pO1xuICAgIH1cbiAgICBjbGVhblJvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyKGlucHV0LCByb3V0ZXIpIHtcbiAgICAgICAgd2luZG93LlZpZXcgPSB0aGlzO1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByb3V0ZXIuY29uZmlnLnZpZXdDb250cm9sbGVyc0RlcGVuZGVuY2llcztcbiAgICAgICAgLy9yb290IDogSFRNTEVsZW1lbnQsIGRlcGVuZGVuY2llcz86IFNlbnNlblRWaWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXNcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBBbGwgRGVwZW5kZW5jaWVzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzID0ge307XG4gICAgICAgIGlmICh0eXBlb2YgZGVwZW5kZW5jaWVzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzQXJncyA9IHtcbiAgICAgICAgICAgICAgICB2aWV3OiB0aGlzLFxuICAgICAgICAgICAgICAgIHJvdXRlcixcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzQXJyYXkgPSBPYmplY3QuZW50cmllcyhkZXBlbmRlbmNpZXMgfHwge30pO1xuICAgICAgICAgICAgaWYgKF9kZXBlbmRlbmNpZXNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfZGVwZW5kZW5jaWVzQXJyYXkuZm9yRWFjaChkZXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ3RyaWdnZXInIGluIGRlcFsxXSAmJiB0eXBlb2YgZGVwWzFdWyd0cmlnZ2VyJ10gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc1tkZXBbMF1dID0gZGVwWzFdLnRyaWdnZXIoX2RlcGVuZGVuY2llc0FyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX2RlcGVuZGVuY2llc1sgZGVwWzBdIF0gPSAoKCk9Pnt9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIF9kZXBlbmRlbmNpZXNbIGRlcFswXSBdID0gJ3RyaWdnZXInIGluIGRlcFsxXSA/IGRlcFsxXS50cmlnZ2VyKF9kZXBlbmRlbmNpZXNBcmdzKSA6ICgoKT0+e30pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2RlcGVuZGVuY2llcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIF9kZXBlbmRlbmNpZXMudmlldyA9IHRoaXM7XG4gICAgICAgIF9kZXBlbmRlbmNpZXMucHJvcHMgPSB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpO1xuICAgICAgICBfZGVwZW5kZW5jaWVzLnRlbXBsYXRlID0gKGZyYWdtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVkID0gX2RlcGVuZGVuY2llcy5wcm9wc1tgQFRoZW1lLiR7ZnJhZ21lbnR9YF0gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBkb20gPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoc2FtcGxlZCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0ge1xuICAgICAgICAgICAgICAgIHJhdzogc2FtcGxlZCxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb20uYm9keVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaGFyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IF9kZXBlbmRlbmNpZXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvdXRlci5yb290O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlXG4gICAgICAgICAqL1xuICAgICAgICBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXModGhpcy5pbnB1dCk7XG4gICAgICAgIENvbXBpbGF0b3IodGhpcy5pbnB1dCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0IENvbnRyb2xsZXIgd2l0aCBkZXBlbmRlbmNpZXNcbiAgICAgICAgICovXG4gICAgICAgIGlmICgnY29udHJvbGxlcicgaW4gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyKF9kZXBlbmRlbmNpZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5pbnB1dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW5kZXIgVmlldyAnLCB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpLCAgX2RlcGVuZGVuY2llcylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldENvbnRlbnQoZWxlbWVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUGFyc2UgOicsIGVsZW1lbnQsIHRoaXMucm9vdCApXG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5Sb290KCkucm9vdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0VmFyaWFibGUobmFtZSwgdmFsdWUsIHBlcnNpc3QgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0RGljdGlvbmFyeSA9IHdpbmRvdy4kU2Vuc2VuUkxQLnJldHJpdmVzKCkgfHwge307XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdERpY3Rpb25hcnkpLm1hcChkaWMgPT4ge1xuICAgICAgICAgICAgZGljdGlvbmFyeVtkaWNbMF1dID0gZGljWzFdO1xuICAgICAgICB9KTtcbiAgICAgICAgZGljdGlvbmFyeVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICBpZiAod2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzW25hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcihgW3NlbnNlbi1yZWY9XCIke2NoZWNrLnJlZn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2suY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBDb250ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoY2hlY2suY29udGVudCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVjay5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGNoZWNrLmF0dHJpYnV0ZS5uYW1lLCBjaGVjay5hdHRyaWJ1dGUudmFsdWUucmVwbGFjZShjaGVjay5yZWNvcmRzWzFdLm1hdGNoWzBdLCAodmFsdWUgfHwgY2hlY2sucmVjb3Jkc1sxXS5zeW50YXhbMV0pLnRyaW0oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiogKiBVcGRhdGUgKi9cbiAgICAgICAgICAgICAgICBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyh0YXJnZXQsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=