"use strict";
(self["webpackChunksensen_shadow"] = self["webpackChunksensen_shadow"] || []).push([["shadow"],{

/***/ "./jsbundle/dependencies.js":
/*!**********************************!*\
  !*** ./jsbundle/dependencies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");

const AppViewControllersDependencies = {
    'GET': sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].Dependencies.LocationGetMethods,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppViewControllersDependencies);


/***/ }),

/***/ "./jsbundle/index.js":
/*!***************************!*\
  !*** ./jsbundle/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./jsbundle/router.js");


const SensenJSApp = () => {
    _router__WEBPACK_IMPORTED_MODULE_1__["default"].root = document.querySelector('#root');
    _router__WEBPACK_IMPORTED_MODULE_1__["default"].render();
};
sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].Framework.JS(SensenJSApp);


/***/ }),

/***/ "./jsbundle/router.js":
/*!****************************!*\
  !*** ./jsbundle/router.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies */ "./jsbundle/dependencies.js");
/* harmony import */ var _views_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/about */ "./jsbundle/views/about/index.js");
/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home */ "./jsbundle/views/home/index.js");




const AppRouter = new sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].Router({
    default: 'home',
    viewControllersDependencies: _dependencies__WEBPACK_IMPORTED_MODULE_1__["default"]
});
AppRouter
    .add(_views_home__WEBPACK_IMPORTED_MODULE_3__["default"])
    .add(_views_about__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);


/***/ }),

/***/ "./jsbundle/views/about/index.js":
/*!***************************************!*\
  !*** ./jsbundle/views/about/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");

const AboutView = new sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].View({
    slug: 'about',
    source: 'about.html',
    controller: () => {
        console.warn('View Init ');
    },
    mounted: () => {
        console.warn('View Focused');
    },
    unmounted: () => {
        console.warn('View Blurred');
    },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutView);


/***/ }),

/***/ "./jsbundle/views/home/index.js":
/*!**************************************!*\
  !*** ./jsbundle/views/home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sensen_hinata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sensen-hinata */ "./node_modules/sensen-hinata/index.js");

const HomeView = new sensen_hinata__WEBPACK_IMPORTED_MODULE_0__["default"].View({
    slug: 'home',
    source: 'home.html',
    controller: ($) => {
        console.warn('Welcome to home page\n');
        // setTimeout(()=>{
        //     $.view.setVariable('postImage', './assets/images/ggn.png');
        // }, 1000)
        console.warn('View Controller :', $?.GET?.param);
    },
    mounted: () => {
        console.warn('View Mounted');
    },
    unmounted: () => {
        console.warn('View UnMounted');
    },
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeView);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./jsbundle/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQThCO0FBQ3RDLFFBQVEseURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLFVBQVU7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlFQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvcm91dGVyLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS92aWV3cy9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvdmlld3MvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vbm9kZV9tb2R1bGVzL3NlbnNlbi1oaW5hdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL0ZyYW1ld29yay5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vbm9kZV9tb2R1bGVzL3NlbnNlbi1oaW5hdGEvanMvTG9jYXRpb25NZXRob2RzLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9ub2RlX21vZHVsZXMvc2Vuc2VuLWhpbmF0YS9qcy9NZXRyaWNSYW5kb20uanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vbm9kZV9tb2R1bGVzL3NlbnNlbi1oaW5hdGEvanMvVGhlbWUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL1RoZW1lQ29sb3IuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL25vZGVfbW9kdWxlcy9zZW5zZW4taGluYXRhL2pzL1ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbnNlbkhpbmF0YSBmcm9tIFwic2Vuc2VuLWhpbmF0YVwiO1xuY29uc3QgQXBwVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzID0ge1xuICAgICdHRVQnOiBTZW5zZW5IaW5hdGEuRGVwZW5kZW5jaWVzLkxvY2F0aW9uR2V0TWV0aG9kcyxcbn07XG5leHBvcnQgZGVmYXVsdCBBcHBWaWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXM7XG4iLCJpbXBvcnQgU2Vuc2VuSGluYXRhIGZyb20gXCJzZW5zZW4taGluYXRhXCI7XG5pbXBvcnQgQXBwUm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xuY29uc3QgU2Vuc2VuSlNBcHAgPSAoKSA9PiB7XG4gICAgQXBwUm91dGVyLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIEFwcFJvdXRlci5yZW5kZXIoKTtcbn07XG5TZW5zZW5IaW5hdGEuRnJhbWV3b3JrLkpTKFNlbnNlbkpTQXBwKTtcbiIsImltcG9ydCBTZW5zZW5IaW5hdGEgZnJvbSBcInNlbnNlbi1oaW5hdGFcIjtcbmltcG9ydCBBcHBWaWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXMgZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgQWJvdXRWaWV3IGZyb20gXCIuL3ZpZXdzL2Fib3V0XCI7XG5pbXBvcnQgSG9tZVZpZXcgZnJvbSBcIi4vdmlld3MvaG9tZVwiO1xuY29uc3QgQXBwUm91dGVyID0gbmV3IFNlbnNlbkhpbmF0YS5Sb3V0ZXIoe1xuICAgIGRlZmF1bHQ6ICdob21lJyxcbiAgICB2aWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXM6IEFwcFZpZXdDb250cm9sbGVyc0RlcGVuZGVuY2llc1xufSk7XG5BcHBSb3V0ZXJcbiAgICAuYWRkKEhvbWVWaWV3KVxuICAgIC5hZGQoQWJvdXRWaWV3KTtcbmV4cG9ydCBkZWZhdWx0IEFwcFJvdXRlcjtcbiIsImltcG9ydCBTZW5zZW5IaW5hdGEgZnJvbSBcInNlbnNlbi1oaW5hdGFcIjtcbmNvbnN0IEFib3V0VmlldyA9IG5ldyBTZW5zZW5IaW5hdGEuVmlldyh7XG4gICAgc2x1ZzogJ2Fib3V0JyxcbiAgICBzb3VyY2U6ICdhYm91dC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBJbml0ICcpO1xuICAgIH0sXG4gICAgbW91bnRlZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgRm9jdXNlZCcpO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBCbHVycmVkJyk7XG4gICAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgQWJvdXRWaWV3O1xuIiwiaW1wb3J0IFNlbnNlbkhpbmF0YSBmcm9tIFwic2Vuc2VuLWhpbmF0YVwiO1xuY29uc3QgSG9tZVZpZXcgPSBuZXcgU2Vuc2VuSGluYXRhLlZpZXcoe1xuICAgIHNsdWc6ICdob21lJyxcbiAgICBzb3VyY2U6ICdob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICgkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignV2VsY29tZSB0byBob21lIHBhZ2VcXG4nKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAvLyAgICAgJC52aWV3LnNldFZhcmlhYmxlKCdwb3N0SW1hZ2UnLCAnLi9hc3NldHMvaW1hZ2VzL2dnbi5wbmcnKTtcbiAgICAgICAgLy8gfSwgMTAwMClcbiAgICAgICAgY29uc29sZS53YXJuKCdWaWV3IENvbnRyb2xsZXIgOicsICQ/LkdFVD8ucGFyYW0pO1xuICAgIH0sXG4gICAgbW91bnRlZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgTW91bnRlZCcpO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBVbk1vdW50ZWQnKTtcbiAgICB9LFxufSk7XG5leHBvcnQgZGVmYXVsdCBIb21lVmlldztcbiIsImltcG9ydCBTZW5zZW4gZnJvbSBcIi4vanMvRnJhbWV3b3JrLmpzXCI7XG5pbXBvcnQgeyBTZW5zZW5Sb3V0ZXIgfSBmcm9tIFwiLi9qcy9Sb3V0ZXIuanNcIjtcbmltcG9ydCBTZW5zZW5UaGVtZSBmcm9tIFwiLi9qcy9UaGVtZS5qc1wiO1xuaW1wb3J0IFNlbnNlblRoZW1lQ29sb3IgZnJvbSBcIi4vanMvVGhlbWVDb2xvci5qc1wiO1xuaW1wb3J0IHsgU2Vuc2VuVmlldyB9IGZyb20gXCIuL2pzL1ZpZXcuanNcIjtcbmltcG9ydCBMb2NhdGlvbkdldE1ldGhvZHMgZnJvbSBcIi4vanMvTG9jYXRpb25NZXRob2RzLmpzXCJcblxuY29uc3QgU2Vuc2VuSGluYXRhID0ge1xuICAgIEZyYW1ld29yazogU2Vuc2VuLFxuICAgIFZpZXc6IFNlbnNlblZpZXcsXG4gICAgVGhlbWU6IFNlbnNlblRoZW1lLFxuICAgIFRoZW1lQ29sb3I6IFNlbnNlblRoZW1lQ29sb3IsXG4gICAgUm91dGVyOiBTZW5zZW5Sb3V0ZXIsXG4gICAgRGVwZW5kZW5jaWVzOiB7XG4gICAgICAgIExvY2F0aW9uR2V0TWV0aG9kc1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbnNlbkhpbmF0YTtcbiIsImltcG9ydCB7IFByb3Rvcmlhbk1ldHJpY1JhbmRvbSB9IGZyb20gXCIuL01ldHJpY1JhbmRvbS5qc1wiO1xud2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzID0ge307XG53aW5kb3cuJFNlbnNlblJMUCA9IHtcbiAgICBlbnRyaWVzOiB7fSxcbiAgICBwdXNoKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZV07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgY2xlYW4oKSB7XG4gICAgICAgIGNvbnN0IHJlY292ZXJ5ID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZW50cmllcykubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeVswXS5tYXRjaCgnQFRoZW1lLicpKSB7XG4gICAgICAgICAgICAgICAgcmVjb3ZlcnlbZW50cnlbMF1dID0gZW50cnlbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IHJlY292ZXJ5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJldHJpdmUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW25hbWVdO1xuICAgIH0sXG4gICAgcmV0cml2ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMgfHwge307XG4gICAgfSxcbn07XG4vKipcbiAqIEBXb3JrSW5Qcm9ncmVzc0JlZ2luXG4gKi9cbi8qKlxuICogU2Vuc2VuIEhUTUwgRWxlbWVudFxuICovXG5leHBvcnQgY2xhc3MgU2Vuc2VuRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbn1cbi8qKlxuICogU2Vuc2VuIEVsZW1lbnQgOiBWYWx1ZVxuICovXG5leHBvcnQgY2xhc3MgU2Vuc2VuRWxlbWVudEVjaG8gZXh0ZW5kcyBTZW5zZW5FbGVtZW50IHtcbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBnZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZ2V0Jyk7XG4gICAgICAgIGNvbnN0IHNldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzZXQnKTtcbiAgICAgICAgY29uc3Qgb3IgPSB0aGlzLmdldEF0dHJpYnV0ZSgnb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcnNlIEVjaG8gRWxlbWVudCcsIGdldCwgb3IsIHNldCk7XG4gICAgICAgIGlmICh0eXBlb2YgZ2V0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBjb25zdCB2YWx1ZSA9IHdpbmRvdy4kU2Vuc2VuUkxQLnJldHJpdmUoZ2V0KSB8fCBvciB8fCAnJztcbiAgICAgICAgICAgIC8vIGNvbnN0IHJlZiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgICAgICAgLy8gdGhpcy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChyZWYsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG59XG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnc24tZWNobycpKSB7XG4gICAgZ2xvYmFsVGhpcy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NuLWVjaG8nLCBTZW5zZW5FbGVtZW50RWNobyk7XG59XG4vKipcbiAqIEBXb3JrSW5Qcm9ncmVzc0VuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzKGNvbnRlbnQpIHtcbiAgICBjb25zdCByZWNvcmRzID0ge307XG4gICAgY29uc3QgdmFyaWFibGVSZXggPSBuZXcgUmVnRXhwKCd7eyguKj8pfX0nLCAnZycpO1xuICAgIGNvbnN0IGNvbnRlbnRNYXRjaGVzID0gWy4uLmNvbnRlbnQubWF0Y2hBbGwodmFyaWFibGVSZXgpXTtcbiAgICBPYmplY3QudmFsdWVzKGNvbnRlbnRNYXRjaGVzKS5tYXAobWF0Y2ggPT4ge1xuICAgICAgICBjb25zdCBzeW50YXggPSBtYXRjaFsxXS5zcGxpdCgnfHwnKTtcbiAgICAgICAgc3ludGF4WzBdID0gc3ludGF4WzBdLnRyaW0oKTtcbiAgICAgICAgc3ludGF4WzFdID0gKHN5bnRheFsxXSB8fCAnJykudHJpbSgpLnJlcGxhY2UoLycoLiopJy9naSwgXCIkMVwiKTtcbiAgICAgICAgc3ludGF4WzFdID0gKHN5bnRheFsxXSB8fCAnJykudHJpbSgpLnJlcGxhY2UoL1wiKC4qKVwiL2dpLCBcIiQxXCIpO1xuICAgICAgICByZWNvcmRzW3N5bnRheFswXV0gPSB7IG1hdGNoLCBzeW50YXgsIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlY29yZHM7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRvclJlY29yZHNSZWZzVmFyaWFibGVzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHt9O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5jaGlsZHJlbikubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gT2JqZWN0LnZhbHVlcyhjaGlsZCk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZJRCA9IFByb3Rvcmlhbk1ldHJpY1JhbmRvbS5DcmVhdGVBcGxwaGEoMzIpLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIC8qKiBFbGVtZW50IENvbnRlbnQgKi9cbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoY2hpbGQuaW5uZXJIVE1MKSB8fCB7fSkubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzW2VudHJ5WzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogcmVmSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNoaWxkLmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NlbnNlbi1yZWYnLCByZWZJRCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQXR0cmlidXRlcyAqL1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY2hpbGQuYXR0cmlidXRlcykubWFwKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoYXR0ci52YWx1ZSkgfHwge30pLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbZW50cnlbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogcmVmSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZTogeyBuYW1lOiBhdHRyLm5hbWUsIHZhbHVlOiBhdHRyLnZhbHVlLCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnc2Vuc2VuLXJlZicsIHJlZklEKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlVmFyaWFibGVzKGNvbnRlbnQsIGRpY3Rpb25hcnkpIHtcbiAgICBjb25zdCBfZGljdGlvbmFyeSA9IGRpY3Rpb25hcnkgfHwgd2luZG93LiRTZW5zZW5STFAucmV0cml2ZXMoKTtcbiAgICBPYmplY3QuZW50cmllcyhDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoY29udGVudCkgfHwge30pLm1hcChlbnRyeSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbZW50cnlbMF1dKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGVudHJ5WzFdLm1hdGNoWzBdLCAoX2RpY3Rpb25hcnlbZW50cnlbMF1dIHx8IGVudHJ5WzFdLnN5bnRheFsxXSB8fCBlbnRyeVswXSkudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjb250ZW50KTtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModmFyaWFibGVzKS5tYXAodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UodmFyaWFibGUubWF0Y2hbMF0sIChfZGljdGlvbmFyeVt2YXJpYWJsZS5zeW50YXhbMF1dIHx8IHZhcmlhYmxlLnN5bnRheFsxXSB8fCB2YXJpYWJsZS5zeW50YXhbMF0pLnRyaW0oKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzKGVsZW1lbnQsIGRpY3Rpb25hcnkpIHtcbiAgICAvLyBjb25zdCBzdGF0ZSA6IHsgW0s6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBPYmplY3QudmFsdWVzKGNoaWxkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNDaGlsZHJlbiA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiBFbGVtZW50IENvbnRlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gQ29tcGlsYXRlVmFyaWFibGVzKGNoaWxkLmlubmVySFRNTCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgICAgIC8qKiBFbGVtZW50IEF0dHJpYnV0ZXMgKi9cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjaGlsZC5hdHRyaWJ1dGVzKS5tYXAoYXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09ICdzZW5zZW4tcmVmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gQ29tcGlsYXRlVmFyaWFibGVzKGF0dHIudmFsdWUsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzKGNoaWxkLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gQ29tcGlsYXRlVmFyaWFibGVzKGVsZW1lbnQuaW5uZXJIVE1MLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5hdHRyaWJ1dGVzKS5tYXAoYXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PSAnc2Vuc2VuLXJlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IENvbXBpbGF0ZVZhcmlhYmxlcyhhdHRyLnZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiBzdGF0ZTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdG9yTm9kZShlbGVtZW50LCBkaWN0aW9uYXJ5KSB7XG4gICAgcmV0dXJuIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzKGVsZW1lbnQsIGRpY3Rpb25hcnkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0b3IoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LmlubmVySFRNTDtcbiAgICBsZXQgcGFyc2luZyA9IENvbXBpbGF0ZVZhcmlhYmxlcyhjb250ZW50KTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHBhcnNpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zZW4ge1xuICAgIHN0YXRpYyBKUyhhcHApIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5OYW1lfSBpcyByZWFkeWApO1xuICAgICAgICB3aW5kb3cuU2Vuc2VuSlNBcHAgPSBhcHA7XG4gICAgICAgIHdpbmRvdy5TZW5zZW5KU0FwcCh0aGlzKTtcbiAgICB9XG59XG5TZW5zZW4uTmFtZSA9ICdTZW5zZW4gU2VuanUnO1xuU2Vuc2VuLlJMUE9iamVjdCA9IHdpbmRvdy4kU2Vuc2VuUkxQO1xuU2Vuc2VuLkNvbXBpbGF0b3IgPSBDb21waWxhdG9yO1xuU2Vuc2VuLkNvbXBpbGF0ZVZhcmlhYmxlcyA9IENvbXBpbGF0ZVZhcmlhYmxlcztcblNlbnNlbi5Db21waWxhdG9yTm9kZVZhcmlhYmxlcyA9IENvbXBpbGF0b3JOb2RlVmFyaWFibGVzO1xuU2Vuc2VuLkNvbXBpbGF0b3JOb2RlID0gQ29tcGlsYXRvck5vZGU7XG4iLCJjb25zdCBMb2NhdGlvbkdldE1ldGhvZHMgPSB7XG4gICAgcGFyc2VTdHJpbmcoc3RyLCBlbmNvZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IHt9O1xuICAgICAgICBjb25zdCBleCA9IHN0ci5zcGxpdCgnJicpO1xuICAgICAgICBleC5tYXAocSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdSA9IHEuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIG91dFtxdVswXV0gPSBgJHtxdVsxXX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuICAgIHRyaWdnZXIocHJvcHMpIHtcbiAgICAgICAgY29uc3QgZXggPSAobG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpIDogcHJvcHMucm91dGVyLmNvbmZpZy5kZWZhdWx0IHx8ICcnKS5zcGxpdCgnPycpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnBhcnNlU3RyaW5nKGV4WzFdIHx8ICcnKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocGFyYW1zIHx8IHt9KS5tYXAocGFyYW0gPT4ge1xuICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAucHVzaChwYXJhbVswXSwgcGFyYW1bMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25HZXRNZXRob2RzO1xuIiwiZXhwb3J0IGNsYXNzIFByb3Rvcmlhbk1ldHJpY1JhbmRvbSB7XG4gICAgc3RhdGljIENyZWF0ZVJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlQmxvY2soYmFzZSwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBiYXNlZCwgb3V0ID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYmFzZWQgPSBiYXNlLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZWQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IHRoaXMuQ3JlYXRlUmFuZG9tKDAsIGJhc2VkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IGJhc2VkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVBcGxwaGEobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTE9XRVJ9ICR7dGhpcy5BTFBIQV9VUFBFUn1gLCBsZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlTnVtZXJpYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soYCR7dGhpcy5OVU1FUklDfWAsIGxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGUobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTlVNRVJJQ31gLCBsZW5ndGgpO1xuICAgIH1cbn1cblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiBBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfTlVNRVJJQ19MT1dFUiA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfTlVNRVJJQ19VUFBFUiA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfVVBQRVIgPSAnQSBCIEMgRCBFIEYgRyBIIEkgSiBLIEwgTSBOIE8gUCBRIFIgUyBUIFUgViBXIFggWSBaJztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9MT1dFUiA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHonO1xuUHJvdG9yaWFuTWV0cmljUmFuZG9tLk5VTUVSSUMgPSAnMCAxIDIgMyA0IDUgNiA3IDggOSc7XG4iLCJpbXBvcnQgeyBTZW5zZW5WaWV3IH0gZnJvbSBcIi4vVmlldy5qc1wiO1xuZXhwb3J0IGNsYXNzIFNlbnNlblJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIH1cbiAgICBhZGQodmlldykge1xuICAgICAgICB0aGlzLnJvdXRlc1t2aWV3LnNsdWddID0gdmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbHVnID0gKGxvY2F0aW9uLmhhc2ggfHwgJycpLnN1YnN0cigxKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoc2x1Zyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvIHRvIGRlZmF1bHQgdmlldycsIHRoaXMuY29uZmlnLmRlZmF1bHQpO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZSh0aGlzLmNvbmZpZy5kZWZhdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHbyB0byB2aWV3JywgbG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpIDogJ3VuZGVmaW5lZCcpO1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZShsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgOiAnaG9tZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwYXJzZVNsdWcoc2x1Zykge1xuICAgICAgICBjb25zdCBleCA9IHNsdWcuc3BsaXQoJz8nKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGV4WzBdLFxuICAgICAgICAgICAgc2VhcmNoOiBleFsxXSB8fCAnJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBuYXZpZ2F0ZShzbHVnKSB7XG4gICAgICAgIGNvbnN0IHBzbHVnID0gdGhpcy5wYXJzZVNsdWcoc2x1Zyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50IGxhc3QgVmlld1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHdpbmRvdy5WaWV3IGluc3RhbmNlb2YgU2Vuc2VuVmlldykge1xuICAgICAgICAgICAgaWYgKCd1bm1vdW50ZWQnIGluIHdpbmRvdy5WaWV3KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LlZpZXcudW5tb3VudGVkKHdpbmRvdy5WaWV3LmRlcGVuZGVuY2llcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMucm91dGVzW3BzbHVnLm5hbWVdIHx8IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYC4vc2Vuc2VuL3ZpZXdzLyR7cHNsdWcubmFtZX0uaHRtbGApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHIgPT4gci50ZXh0KCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuUkxQLmNsZWFuKCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGVsZW1lbnQuYm9keS5jaGlsZHJlbikubWFwKGMgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcucmVuZGVyKGZyYWdtZW50LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHNsdWc7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnbW91bnRlZCcgaW4gdGhpcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcubW91bnRlZCh0aGlzLnZpZXcuZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChgU2Vuc2VuSlMgUm91dGVyIHNheSA6XFxuJHtlcn1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IChgU2Vuc2VuSlMgUm91dGVyIHNheSByb3V0ZSA8IFxcbiR7c2x1Z30gPiBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuVGhlbWUge1xuICAgIGNvbnN0cnVjdG9yKHRoZW1lKSB7XG4gICAgICAgIHRoaXMuRnJhZ21lbnRzID0ge307XG4gICAgICAgIHRoaXMuUGF5bG9hZHMgPSBbXTtcbiAgICAgICAgdGhpcy5Bc3NldHMgPSB7XG4gICAgICAgICAgICBDU1M6IFtdLFxuICAgICAgICAgICAgSlM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlRoZW1lID0gdGhlbWU7XG4gICAgfVxuICAgIGFzeW5jIEFzeW5jKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZldGNoKGAuL3NlbnNlbi90aGVtZXMvJHsodGhpcy5UaGVtZSA/IGAke3RoaXMuVGhlbWV9L2AgOiAnJyl9JHtwYXRofS5odG1sYClcbiAgICAgICAgICAgICAgICAudGhlbihyID0+IHIudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4gcmVqZWN0KGVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBEZWZpbmUobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZyYWdtZW50c1tuYW1lXSA9IHBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5QYXlsb2Fkcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkZyYWdtZW50c1tuYW1lXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuUkxQLnB1c2goYEBUaGVtZS4ke25hbWV9YCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChgU2Vuc2VuIFRoZW1lIHNheSAke2VyfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBBc3NldCh0eXBlLCBwYXRoKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnLWNzcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3NldHMuQ1NTLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctanMnOlxuICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkpTLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIExvYWRDU1MocGF0aCkge1xuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzZXQgOicsIHBhdGgsICdsb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzZXQgOicsIHBhdGgsICdmYWlsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdyZWwnLCAnU3R5bGVTaGVldCcpO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgnc2Vuc2VuLWFzc2V0cycsICctY3NzJyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdocmVmJywgcGF0aCk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBMb2FkSlMocGF0aCkge1xuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2xvYWRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2ZhaWxlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tYXNzZXRzJywgJy1qcycpO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBVc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEluc2VydGlvbnMgZGVzIEFzc2V0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkFzc2V0cy5DU1MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkNTUy5tYXAocGF0aCA9PiB0aGlzLkxvYWRDU1MocGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Bc3NldHMuSlMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkpTLm1hcChwYXRoID0+IHRoaXMuTG9hZEpTKHBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVHJhaXRlbWVudCBkZXMgZnJhZ21lbnRzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnRzQXJyYXkgPSBPYmplY3QuZW50cmllcyh0aGlzLkZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudHNBcnJheS5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKGBAVGhlbWUoJHt0aGlzLlRoZW1lfSkuJHtlWzBdfWAsIGVbMV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGF5bG9hZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3QudmFsdWVzKCB0aGlzLlBheWxvYWRzICkubWFwKHByb21pc2U9PilcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuUGF5bG9hZHMpLnRoZW4oZnJhZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbG9hZCBmcmFnbWVudCcsIGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwid2luZG93LlVpVGhlbWVDb2xvckNoYW5nZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBpZiAoZG9jKSB7XG4gICAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoJ3RoZW1lLWNvbG9yJywgbmFtZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdAaWFuLXVpLXRoZW1lJywgbmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyAoYEltcG9zc2libGUgZGUgY2hhbmdlciBsZSB0aGVtZSBlbiAke25hbWV9YCk7XG4gICAgfVxufTtcbndpbmRvdy5VaVRoZW1lQ29sb3JUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBjb25zdCBjdXJyZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BpYW4tdWktdGhlbWUnKSB8fCAnbGlnaHQnO1xuICAgIHdpbmRvdy5VaVRoZW1lQ29sb3JDaGFuZ2UoKGN1cnJlbnQgPT0gJ2xpZ2h0JykgPyAnZGFyaycgOiAnbGlnaHQnKTtcbn07XG53aW5kb3cuVWlUaGVtZUNvbG9ySW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0BpYW4tdWktdGhlbWUnKSB8fCAnbGlnaHQnO1xuICAgIHdpbmRvdy5VaVRoZW1lQ29sb3JDaGFuZ2UobmFtZSk7XG59O1xud2luZG93LlVpVGhlbWVTcGxhc2hTY3JlZW4gPSAobWVzc2FnZSA9ICdDaGFyZ2VtZW50Li4uJykgPT4ge1xuICAgIGNvbnN0IHcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG0udGV4dENvbnRlbnQgPSBtZXNzYWdlIHx8ICcnO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdzcmMnLCAnL2Fzc2V0cy9pbWFnZXMvYXBwLWxvZ28ucG5nJyk7XG4gICAgdy5jbGFzc0xpc3QuYWRkKCdzcGxhc2hzY3JlZW4nKTtcbiAgICBtLmNsYXNzTGlzdC5hZGQoJ3NwbGFzaHNjcmVlbi10aXRsZScpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnc3BsYXNoc2NyZWVuLWxvZ28nKTtcbiAgICB3LmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIHcuYXBwZW5kQ2hpbGQobSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3KTtcbiAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGxldCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgICB3LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAocykgeyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHcuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9LCAxOTYyKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIEZvciB0cmFuZGl0aW9uYWwgQnJvd3NlclxuICovXG4vLyBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xuLy8gICAgIFVpVGhlbWVDb2xvckluaXQoKVxuLy8gICAgIFVpVGhlbWVTcGxhc2hTY3JlZW4oKVxuLy8gfSk7XG5jb25zdCBTZW5zZW5UaGVtZUNvbG9yID0ge1xuICAgIFNldDogd2luZG93LlVpVGhlbWVDb2xvckNoYW5nZSxcbiAgICBUb2dnbGU6IHdpbmRvdy5VaVRoZW1lQ29sb3JUb2dnbGUsXG4gICAgSW5pdDogd2luZG93LlVpVGhlbWVDb2xvckluaXQsXG4gICAgU3BsYXNoU2NyZWVuOiB3aW5kb3cuVWlUaGVtZVNwbGFzaFNjcmVlbixcbn07XG5leHBvcnQgZGVmYXVsdCBTZW5zZW5UaGVtZUNvbG9yO1xuIiwiaW1wb3J0IHsgQ29tcGlsYXRlVmFyaWFibGVzLCBDb21waWxhdG9yLCBDb21waWxhdG9yTm9kZVZhcmlhYmxlcywgQ29tcGlsYXRvclJlY29yZHNSZWZzVmFyaWFibGVzIH0gZnJvbSBcIi4vRnJhbWV3b3JrLmpzXCI7XG53aW5kb3cuVmlldyA9IHt9O1xuZXhwb3J0IGNsYXNzIFNlbnNlblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2x1ZyA9IHByb3BzLnNsdWc7XG4gICAgICAgIHRoaXMuc291cmNlID0gcHJvcHMuc291cmNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBwcm9wcy5jb250cm9sbGVyIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSBwcm9wcy5tb3VudGVkIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLnVubW91bnRlZCA9IHByb3BzLnVubW91bnRlZCB8fCAoKCkgPT4geyB9KTtcbiAgICB9XG4gICAgY2xlYW5Sb290KCkge1xuICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbmRlcihpbnB1dCwgcm91dGVyKSB7XG4gICAgICAgIHdpbmRvdy5WaWV3ID0gdGhpcztcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcm91dGVyLmNvbmZpZy52aWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXM7XG4gICAgICAgIC8vcm9vdCA6IEhUTUxFbGVtZW50LCBkZXBlbmRlbmNpZXM/OiBTZW5zZW5UVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgQWxsIERlcGVuZGVuY2llc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llcyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGRlcGVuZGVuY2llcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llc0FyZ3MgPSB7XG4gICAgICAgICAgICAgICAgdmlldzogdGhpcyxcbiAgICAgICAgICAgICAgICByb3V0ZXIsXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llc0FycmF5ID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzIHx8IHt9KTtcbiAgICAgICAgICAgIGlmIChfZGVwZW5kZW5jaWVzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc0FycmF5LmZvckVhY2goZGVwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCd0cmlnZ2VyJyBpbiBkZXBbMV0gJiYgdHlwZW9mIGRlcFsxXVsndHJpZ2dlciddID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZXBlbmRlbmNpZXNbZGVwWzBdXSA9IGRlcFsxXS50cmlnZ2VyKF9kZXBlbmRlbmNpZXNBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9kZXBlbmRlbmNpZXNbIGRlcFswXSBdID0gKCgpPT57fSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBfZGVwZW5kZW5jaWVzWyBkZXBbMF0gXSA9ICd0cmlnZ2VyJyBpbiBkZXBbMV0gPyBkZXBbMV0udHJpZ2dlcihfZGVwZW5kZW5jaWVzQXJncykgOiAoKCk9Pnt9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9kZXBlbmRlbmNpZXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICBfZGVwZW5kZW5jaWVzLnZpZXcgPSB0aGlzO1xuICAgICAgICBfZGVwZW5kZW5jaWVzLnByb3BzID0gd2luZG93LiRTZW5zZW5STFAucmV0cml2ZXMoKTtcbiAgICAgICAgX2RlcGVuZGVuY2llcy50ZW1wbGF0ZSA9IChmcmFnbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2FtcGxlZCA9IF9kZXBlbmRlbmNpZXMucHJvcHNbYEBUaGVtZS4ke2ZyYWdtZW50fWBdIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZG9tID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKHNhbXBsZWQsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgIGNvbnN0IG91dCA9IHtcbiAgICAgICAgICAgICAgICByYXc6IHNhbXBsZWQsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9tLmJvZHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2hhcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBfZGVwZW5kZW5jaWVzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLnJvb3QgPSByb3V0ZXIucm9vdDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBpbGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgQ29tcGlsYXRvclJlY29yZHNSZWZzVmFyaWFibGVzKHRoaXMuaW5wdXQpO1xuICAgICAgICBDb21waWxhdG9yKHRoaXMuaW5wdXQpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdCBDb250cm9sbGVyIHdpdGggZGVwZW5kZW5jaWVzXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoJ2NvbnRyb2xsZXInIGluIHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcihfZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUGFyc2luZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRDb250ZW50KHRoaXMuaW5wdXQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVuZGVyIFZpZXcgJywgd2luZG93LiRTZW5zZW5STFAucmV0cml2ZXMoKSwgIF9kZXBlbmRlbmNpZXMpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXRDb250ZW50KGVsZW1lbnQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1BhcnNlIDonLCBlbGVtZW50LCB0aGlzLnJvb3QgKVxuICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuUm9vdCgpLnJvb3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldFZhcmlhYmxlKG5hbWUsIHZhbHVlLCBwZXJzaXN0ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERpY3Rpb25hcnkgPSB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpIHx8IHt9O1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHREaWN0aW9uYXJ5KS5tYXAoZGljID0+IHtcbiAgICAgICAgICAgIGRpY3Rpb25hcnlbZGljWzBdXSA9IGRpY1sxXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpY3Rpb25hcnlbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tuYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbbmFtZV07XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoYFtzZW5zZW4tcmVmPVwiJHtjaGVjay5yZWZ9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gQ29tcGlsYXRlVmFyaWFibGVzKGNoZWNrLmNvbnRlbnQsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2suYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiBFbGVtZW50IENvbnRlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShjaGVjay5hdHRyaWJ1dGUubmFtZSwgY2hlY2suYXR0cmlidXRlLnZhbHVlLnJlcGxhY2UoY2hlY2sucmVjb3Jkc1sxXS5tYXRjaFswXSwgKHZhbHVlIHx8IGNoZWNrLnJlY29yZHNbMV0uc3ludGF4WzFdKS50cmltKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqICogVXBkYXRlICovXG4gICAgICAgICAgICAgICAgQ29tcGlsYXRvck5vZGVWYXJpYWJsZXModGFyZ2V0LCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyc2lzdCkge1xuICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAucHVzaChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9