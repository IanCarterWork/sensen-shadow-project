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
/* harmony import */ var _sensen_hinata_LocationMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensen-hinata/LocationMethods */ "./jsbundle/sensen-hinata/LocationMethods.js");

const AppViewControllersDependencies = {
    'GET': _sensen_hinata_LocationMethods__WEBPACK_IMPORTED_MODULE_0__["default"],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppViewControllersDependencies);


/***/ }),

/***/ "./jsbundle/index.js":
/*!***************************!*\
  !*** ./jsbundle/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sensen_hinata_Framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensen-hinata/Framework */ "./jsbundle/sensen-hinata/Framework.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./jsbundle/router.js");


const SensenJSApp = () => {
    _router__WEBPACK_IMPORTED_MODULE_1__["default"].root = document.querySelector('#root');
    _router__WEBPACK_IMPORTED_MODULE_1__["default"].render();
};
_sensen_hinata_Framework__WEBPACK_IMPORTED_MODULE_0__["default"].JS(SensenJSApp);


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
/* harmony import */ var _sensen_hinata_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensen-hinata/Router */ "./jsbundle/sensen-hinata/Router.js");
/* harmony import */ var _dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dependencies */ "./jsbundle/dependencies.js");
/* harmony import */ var _view_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/about */ "./jsbundle/view/about.js");
/* harmony import */ var _view_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/home */ "./jsbundle/view/home.js");




const AppRouter = new _sensen_hinata_Router__WEBPACK_IMPORTED_MODULE_0__.SensenRouter({
    default: 'home?param=value',
    viewControllersDependencies: _dependencies__WEBPACK_IMPORTED_MODULE_1__["default"]
});
AppRouter
    .add(_view_home__WEBPACK_IMPORTED_MODULE_3__["default"])
    .add(_view_about__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppRouter);


/***/ }),

/***/ "./jsbundle/sensen-hinata/Framework.js":
/*!*********************************************!*\
  !*** ./jsbundle/sensen-hinata/Framework.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _MetricRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetricRandom */ "./jsbundle/sensen-hinata/MetricRandom.js");

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
                const refID = _MetricRandom__WEBPACK_IMPORTED_MODULE_0__.ProtorianMetricRandom.CreateAplpha(32).join('');
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
        window.SensenJSApp();
    }
}
Sensen.Name = 'Sensen Senju';
Sensen.RLPObject = window.$SensenRLP;
Sensen.Compilator = Compilator;
Sensen.CompilateVariables = CompilateVariables;
Sensen.CompilatorNodeVariables = CompilatorNodeVariables;
Sensen.CompilatorNode = CompilatorNode;


/***/ }),

/***/ "./jsbundle/sensen-hinata/LocationMethods.js":
/*!***************************************************!*\
  !*** ./jsbundle/sensen-hinata/LocationMethods.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./jsbundle/sensen-hinata/MetricRandom.js":
/*!************************************************!*\
  !*** ./jsbundle/sensen-hinata/MetricRandom.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./jsbundle/sensen-hinata/Router.js":
/*!******************************************!*\
  !*** ./jsbundle/sensen-hinata/Router.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensenRouter": () => (/* binding */ SensenRouter)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View */ "./jsbundle/sensen-hinata/View.js");

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
        globalThis.addEventListener('hashchange', () => {
            const slug = (location.hash || '').substr(1);
            this.navigate(slug);
        });
        if (this.config.default) {
            this.navigate(location.hash ? location.hash.substr(1) : this.config.default);
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
        if (window.View instanceof _View__WEBPACK_IMPORTED_MODULE_0__.SensenView) {
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

/***/ "./jsbundle/sensen-hinata/View.js":
/*!****************************************!*\
  !*** ./jsbundle/sensen-hinata/View.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SensenView": () => (/* binding */ SensenView)
/* harmony export */ });
/* harmony import */ var _Framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework */ "./jsbundle/sensen-hinata/Framework.js");

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
        (0,_Framework__WEBPACK_IMPORTED_MODULE_0__.CompilatorRecordsRefsVariables)(this.input);
        (0,_Framework__WEBPACK_IMPORTED_MODULE_0__.Compilator)(this.input);
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
                    target.innerHTML = (0,_Framework__WEBPACK_IMPORTED_MODULE_0__.CompilateVariables)(check.content, dictionary);
                }
                if (check.attribute) {
                    /** Element Content */
                    target.setAttribute(check.attribute.name, check.attribute.value.replace(check.records[1].match[0], (value || check.records[1].syntax[1]).trim()));
                }
                /** * Update */
                (0,_Framework__WEBPACK_IMPORTED_MODULE_0__.CompilatorNodeVariables)(target, dictionary);
            }
        }
        if (persist) {
            window.$SensenRLP.push(name, value);
        }
        return this;
    }
}


/***/ }),

/***/ "./jsbundle/view/about.js":
/*!********************************!*\
  !*** ./jsbundle/view/about.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sensen_hinata_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sensen-hinata/View */ "./jsbundle/sensen-hinata/View.js");

const AboutView = new _sensen_hinata_View__WEBPACK_IMPORTED_MODULE_0__.SensenView({
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

/***/ "./jsbundle/view/home.js":
/*!*******************************!*\
  !*** ./jsbundle/view/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sensen_hinata_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sensen-hinata/View */ "./jsbundle/sensen-hinata/View.js");

const HomeView = new _sensen_hinata_View__WEBPACK_IMPORTED_MODULE_0__.SensenView({
    slug: 'home',
    source: 'home.html',
    controller: ($) => {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./jsbundle/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUE4QjtBQUN0QyxRQUFRLHNEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxVQUFVO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4REFBa0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1FQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEhtRDtBQUNuRCxzQkFBc0IsMkRBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMEI7QUFDbkQscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvcm91dGVyLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS9zZW5zZW4taGluYXRhL0ZyYW1ld29yay5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvc2Vuc2VuLWhpbmF0YS9Mb2NhdGlvbk1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL2pzYnVuZGxlL3NlbnNlbi1oaW5hdGEvTWV0cmljUmFuZG9tLmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS9zZW5zZW4taGluYXRhL1JvdXRlci5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tc2hhZG93Ly4vanNidW5kbGUvc2Vuc2VuLWhpbmF0YS9WaWV3LmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS92aWV3L2Fib3V0LmpzIiwid2VicGFjazovL3NlbnNlbi1zaGFkb3cvLi9qc2J1bmRsZS92aWV3L2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2F0aW9uR2V0TWV0aG9kcyBmcm9tIFwiLi9zZW5zZW4taGluYXRhL0xvY2F0aW9uTWV0aG9kc1wiO1xuY29uc3QgQXBwVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzID0ge1xuICAgICdHRVQnOiBMb2NhdGlvbkdldE1ldGhvZHMsXG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzO1xuIiwiaW1wb3J0IFNlbnNlbiBmcm9tIFwiLi9zZW5zZW4taGluYXRhL0ZyYW1ld29ya1wiO1xuaW1wb3J0IEFwcFJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcbmNvbnN0IFNlbnNlbkpTQXBwID0gKCkgPT4ge1xuICAgIEFwcFJvdXRlci5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBBcHBSb3V0ZXIucmVuZGVyKCk7XG59O1xuU2Vuc2VuLkpTKFNlbnNlbkpTQXBwKTtcbiIsImltcG9ydCB7IFNlbnNlblJvdXRlciB9IGZyb20gXCIuL3NlbnNlbi1oaW5hdGEvUm91dGVyXCI7XG5pbXBvcnQgQXBwVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzIGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuaW1wb3J0IEFib3V0VmlldyBmcm9tIFwiLi92aWV3L2Fib3V0XCI7XG5pbXBvcnQgSG9tZVZpZXcgZnJvbSBcIi4vdmlldy9ob21lXCI7XG5jb25zdCBBcHBSb3V0ZXIgPSBuZXcgU2Vuc2VuUm91dGVyKHtcbiAgICBkZWZhdWx0OiAnaG9tZT9wYXJhbT12YWx1ZScsXG4gICAgdmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzOiBBcHBWaWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXNcbn0pO1xuQXBwUm91dGVyXG4gICAgLmFkZChIb21lVmlldylcbiAgICAuYWRkKEFib3V0Vmlldyk7XG5leHBvcnQgZGVmYXVsdCBBcHBSb3V0ZXI7XG4iLCJpbXBvcnQgeyBQcm90b3JpYW5NZXRyaWNSYW5kb20gfSBmcm9tIFwiLi9NZXRyaWNSYW5kb21cIjtcbndpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlcyA9IHt9O1xud2luZG93LiRTZW5zZW5STFAgPSB7XG4gICAgZW50cmllczoge30sXG4gICAgcHVzaChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmVudHJpZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmUobmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWVdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGNsZWFuKCkge1xuICAgICAgICBjb25zdCByZWNvdmVyeSA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmVudHJpZXMpLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnlbMF0ubWF0Y2goJ0BUaGVtZS4nKSkge1xuICAgICAgICAgICAgICAgIHJlY292ZXJ5W2VudHJ5WzBdXSA9IGVudHJ5WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSByZWNvdmVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZXRyaXZlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lXTtcbiAgICB9LFxuICAgIHJldHJpdmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzIHx8IHt9O1xuICAgIH0sXG59O1xuLyoqXG4gKiBAV29ya0luUHJvZ3Jlc3NCZWdpblxuICovXG4vKipcbiAqIFNlbnNlbiBIVE1MIEVsZW1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbnNlbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG59XG4vKipcbiAqIFNlbnNlbiBFbGVtZW50IDogVmFsdWVcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbnNlbkVsZW1lbnRFY2hvIGV4dGVuZHMgU2Vuc2VuRWxlbWVudCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2dldCcpO1xuICAgICAgICBjb25zdCBzZXQgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc2V0Jyk7XG4gICAgICAgIGNvbnN0IG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ29yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJzZSBFY2hvIEVsZW1lbnQnLCBnZXQsIG9yLCBzZXQpO1xuICAgICAgICBpZiAodHlwZW9mIGdldCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gY29uc3QgdmFsdWUgPSB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlKGdldCkgfHwgb3IgfHwgJyc7XG4gICAgICAgICAgICAvLyBjb25zdCByZWYgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICAgICAgICAgIC8vIHRoaXMucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQocmVmLCB0aGlzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxufVxuaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ3NuLWVjaG8nKSkge1xuICAgIGdsb2JhbFRoaXMuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzbi1lY2hvJywgU2Vuc2VuRWxlbWVudEVjaG8pO1xufVxuLyoqXG4gKiBAV29ya0luUHJvZ3Jlc3NFbmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjb250ZW50KSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IHt9O1xuICAgIGNvbnN0IHZhcmlhYmxlUmV4ID0gbmV3IFJlZ0V4cCgne3soLio/KX19JywgJ2cnKTtcbiAgICBjb25zdCBjb250ZW50TWF0Y2hlcyA9IFsuLi5jb250ZW50Lm1hdGNoQWxsKHZhcmlhYmxlUmV4KV07XG4gICAgT2JqZWN0LnZhbHVlcyhjb250ZW50TWF0Y2hlcykubWFwKG1hdGNoID0+IHtcbiAgICAgICAgY29uc3Qgc3ludGF4ID0gbWF0Y2hbMV0uc3BsaXQoJ3x8Jyk7XG4gICAgICAgIHN5bnRheFswXSA9IHN5bnRheFswXS50cmltKCk7XG4gICAgICAgIHN5bnRheFsxXSA9IChzeW50YXhbMV0gfHwgJycpLnRyaW0oKS5yZXBsYWNlKC8nKC4qKScvZ2ksIFwiJDFcIik7XG4gICAgICAgIHN5bnRheFsxXSA9IChzeW50YXhbMV0gfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9cIiguKilcIi9naSwgXCIkMVwiKTtcbiAgICAgICAgcmVjb3Jkc1tzeW50YXhbMF1dID0geyBtYXRjaCwgc3ludGF4LCB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZWNvcmRzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0b3JSZWNvcmRzUmVmc1ZhcmlhYmxlcyhlbGVtZW50KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IE9iamVjdC52YWx1ZXMoY2hpbGQpO1xuICAgICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmSUQgPSBQcm90b3JpYW5NZXRyaWNSYW5kb20uQ3JlYXRlQXBscGhhKDMyKS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBDb250ZW50ICovXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzKGNoaWxkLmlubmVySFRNTCkgfHwge30pLm1hcChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tlbnRyeVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHJlZklELFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjaGlsZC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tcmVmJywgcmVmSUQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8qKiBFbGVtZW50IEF0dHJpYnV0ZXMgKi9cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMpLm1hcChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzKGF0dHIudmFsdWUpIHx8IHt9KS5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzW2VudHJ5WzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IHJlZklELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IHsgbmFtZTogYXR0ci5uYW1lLCB2YWx1ZTogYXR0ci52YWx1ZSwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ3NlbnNlbi1yZWYnLCByZWZJRCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0ZVZhcmlhYmxlcyhjb250ZW50LCBkaWN0aW9uYXJ5KSB7XG4gICAgY29uc3QgX2RpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5IHx8IHdpbmRvdy4kU2Vuc2VuUkxQLnJldHJpdmVzKCk7XG4gICAgT2JqZWN0LmVudHJpZXMoQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzKGNvbnRlbnQpIHx8IHt9KS5tYXAoZW50cnkgPT4ge1xuICAgICAgICBpZiAod2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzW2VudHJ5WzBdXSkge1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShlbnRyeVsxXS5tYXRjaFswXSwgKF9kaWN0aW9uYXJ5W2VudHJ5WzBdXSB8fCBlbnRyeVsxXS5zeW50YXhbMV0gfHwgZW50cnlbMF0pLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSBDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoY29udGVudCk7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHZhcmlhYmxlcykubWFwKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHZhcmlhYmxlLm1hdGNoWzBdLCAoX2RpY3Rpb25hcnlbdmFyaWFibGUuc3ludGF4WzBdXSB8fCB2YXJpYWJsZS5zeW50YXhbMV0gfHwgdmFyaWFibGUuc3ludGF4WzBdKS50cmltKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29udGVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyhlbGVtZW50LCBkaWN0aW9uYXJ5KSB7XG4gICAgLy8gY29uc3Qgc3RhdGUgOiB7IFtLOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlbGVtZW50LmNoaWxkcmVuKS5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gT2JqZWN0LnZhbHVlcyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzQ2hpbGRyZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBDb250ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmlubmVySFRNTCA9IENvbXBpbGF0ZVZhcmlhYmxlcyhjaGlsZC5pbm5lckhUTUwsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBBdHRyaWJ1dGVzICovXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY2hpbGQuYXR0cmlidXRlcykubWFwKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PSAnc2Vuc2VuLXJlZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IENvbXBpbGF0ZVZhcmlhYmxlcyhhdHRyLnZhbHVlLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyhjaGlsZCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IENvbXBpbGF0ZVZhcmlhYmxlcyhlbGVtZW50LmlubmVySFRNTCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKGVsZW1lbnQuYXR0cmlidXRlcykubWFwKGF0dHIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT0gJ3NlbnNlbi1yZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBDb21waWxhdGVWYXJpYWJsZXMoYXR0ci52YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gc3RhdGU7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRvck5vZGUoZWxlbWVudCwgZGljdGlvbmFyeSkge1xuICAgIHJldHVybiBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyhlbGVtZW50LCBkaWN0aW9uYXJ5KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC5pbm5lckhUTUw7XG4gICAgbGV0IHBhcnNpbmcgPSBDb21waWxhdGVWYXJpYWJsZXMoY29udGVudCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzaW5nO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuIHtcbiAgICBzdGF0aWMgSlMoYXBwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuTmFtZX0gaXMgcmVhZHlgKTtcbiAgICAgICAgd2luZG93LlNlbnNlbkpTQXBwID0gYXBwO1xuICAgICAgICB3aW5kb3cuU2Vuc2VuSlNBcHAoKTtcbiAgICB9XG59XG5TZW5zZW4uTmFtZSA9ICdTZW5zZW4gU2VuanUnO1xuU2Vuc2VuLlJMUE9iamVjdCA9IHdpbmRvdy4kU2Vuc2VuUkxQO1xuU2Vuc2VuLkNvbXBpbGF0b3IgPSBDb21waWxhdG9yO1xuU2Vuc2VuLkNvbXBpbGF0ZVZhcmlhYmxlcyA9IENvbXBpbGF0ZVZhcmlhYmxlcztcblNlbnNlbi5Db21waWxhdG9yTm9kZVZhcmlhYmxlcyA9IENvbXBpbGF0b3JOb2RlVmFyaWFibGVzO1xuU2Vuc2VuLkNvbXBpbGF0b3JOb2RlID0gQ29tcGlsYXRvck5vZGU7XG4iLCJjb25zdCBMb2NhdGlvbkdldE1ldGhvZHMgPSB7XG4gICAgcGFyc2VTdHJpbmcoc3RyLCBlbmNvZGluZyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IHt9O1xuICAgICAgICBjb25zdCBleCA9IHN0ci5zcGxpdCgnJicpO1xuICAgICAgICBleC5tYXAocSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdSA9IHEuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIG91dFtxdVswXV0gPSBgJHtxdVsxXX1gO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9LFxuICAgIHRyaWdnZXIocHJvcHMpIHtcbiAgICAgICAgY29uc3QgZXggPSAobG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpIDogcHJvcHMucm91dGVyLmNvbmZpZy5kZWZhdWx0IHx8ICcnKS5zcGxpdCgnPycpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnBhcnNlU3RyaW5nKGV4WzFdIHx8ICcnKTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMocGFyYW1zIHx8IHt9KS5tYXAocGFyYW0gPT4ge1xuICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAucHVzaChwYXJhbVswXSwgcGFyYW1bMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25HZXRNZXRob2RzO1xuIiwiZXhwb3J0IGNsYXNzIFByb3Rvcmlhbk1ldHJpY1JhbmRvbSB7XG4gICAgc3RhdGljIENyZWF0ZVJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlQmxvY2soYmFzZSwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBiYXNlZCwgb3V0ID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYmFzZWQgPSBiYXNlLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZWQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IHRoaXMuQ3JlYXRlUmFuZG9tKDAsIGJhc2VkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IGJhc2VkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVBcGxwaGEobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTE9XRVJ9ICR7dGhpcy5BTFBIQV9VUFBFUn1gLCBsZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlTnVtZXJpYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soYCR7dGhpcy5OVU1FUklDfWAsIGxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGUobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTlVNRVJJQ31gLCBsZW5ndGgpO1xuICAgIH1cbn1cblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiBBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfTlVNRVJJQ19MT1dFUiA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfTlVNRVJJQ19VUFBFUiA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uQUxQSEFfVVBQRVIgPSAnQSBCIEMgRCBFIEYgRyBIIEkgSiBLIEwgTSBOIE8gUCBRIFIgUyBUIFUgViBXIFggWSBaJztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9MT1dFUiA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHonO1xuUHJvdG9yaWFuTWV0cmljUmFuZG9tLk5VTUVSSUMgPSAnMCAxIDIgMyA0IDUgNiA3IDggOSc7XG4iLCJpbXBvcnQgeyBTZW5zZW5WaWV3IH0gZnJvbSBcIi4vVmlld1wiO1xuZXhwb3J0IGNsYXNzIFNlbnNlblJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIH1cbiAgICBhZGQodmlldykge1xuICAgICAgICB0aGlzLnJvdXRlc1t2aWV3LnNsdWddID0gdmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IChsb2NhdGlvbi5oYXNoIHx8ICcnKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKHNsdWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUobG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpIDogdGhpcy5jb25maWcuZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU2x1ZyhzbHVnKSB7XG4gICAgICAgIGNvbnN0IGV4ID0gc2x1Zy5zcGxpdCgnPycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZXhbMF0sXG4gICAgICAgICAgICBzZWFyY2g6IGV4WzFdIHx8ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIG5hdmlnYXRlKHNsdWcpIHtcbiAgICAgICAgY29uc3QgcHNsdWcgPSB0aGlzLnBhcnNlU2x1ZyhzbHVnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnQgbGFzdCBWaWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAod2luZG93LlZpZXcgaW5zdGFuY2VvZiBTZW5zZW5WaWV3KSB7XG4gICAgICAgICAgICBpZiAoJ3VubW91bnRlZCcgaW4gd2luZG93LlZpZXcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuVmlldy51bm1vdW50ZWQod2luZG93LlZpZXcuZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5yb3V0ZXNbcHNsdWcubmFtZV0gfHwgbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgICAgICBmZXRjaChgLi9zZW5zZW4vdmlld3MvJHtwc2x1Zy5uYW1lfS5odG1sYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ociA9PiByLnRleHQoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAuY2xlYW4oKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5ib2R5LmNoaWxkcmVuKS5tYXAoYyA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXIoZnJhZ21lbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gc2x1ZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdtb3VudGVkJyBpbiB0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5tb3VudGVkKHRoaXMudmlldy5kZXBlbmRlbmNpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IDpcXG4ke2VyfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IHJvdXRlIDwgXFxuJHtzbHVnfSA+IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb21waWxhdGVWYXJpYWJsZXMsIENvbXBpbGF0b3IsIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzLCBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXMgfSBmcm9tIFwiLi9GcmFtZXdvcmtcIjtcbndpbmRvdy5WaWV3ID0ge307XG5leHBvcnQgY2xhc3MgU2Vuc2VuVmlldyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBwcm9wcy5zb3VyY2U7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IHByb3BzLmNvbnRyb2xsZXIgfHwgKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IHByb3BzLm1vdW50ZWQgfHwgKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMudW5tb3VudGVkID0gcHJvcHMudW5tb3VudGVkIHx8ICgoKSA9PiB7IH0pO1xuICAgIH1cbiAgICBjbGVhblJvb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyKGlucHV0LCByb3V0ZXIpIHtcbiAgICAgICAgd2luZG93LlZpZXcgPSB0aGlzO1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSByb3V0ZXIuY29uZmlnLnZpZXdDb250cm9sbGVyc0RlcGVuZGVuY2llcztcbiAgICAgICAgLy9yb290IDogSFRNTEVsZW1lbnQsIGRlcGVuZGVuY2llcz86IFNlbnNlblRWaWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXNcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBBbGwgRGVwZW5kZW5jaWVzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzID0ge307XG4gICAgICAgIGlmICh0eXBlb2YgZGVwZW5kZW5jaWVzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzQXJncyA9IHtcbiAgICAgICAgICAgICAgICB2aWV3OiB0aGlzLFxuICAgICAgICAgICAgICAgIHJvdXRlcixcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBfZGVwZW5kZW5jaWVzQXJyYXkgPSBPYmplY3QuZW50cmllcyhkZXBlbmRlbmNpZXMgfHwge30pO1xuICAgICAgICAgICAgaWYgKF9kZXBlbmRlbmNpZXNBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfZGVwZW5kZW5jaWVzQXJyYXkuZm9yRWFjaChkZXAgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ3RyaWdnZXInIGluIGRlcFsxXSAmJiB0eXBlb2YgZGVwWzFdWyd0cmlnZ2VyJ10gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc1tkZXBbMF1dID0gZGVwWzFdLnRyaWdnZXIoX2RlcGVuZGVuY2llc0FyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gX2RlcGVuZGVuY2llc1sgZGVwWzBdIF0gPSAoKCk9Pnt9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIF9kZXBlbmRlbmNpZXNbIGRlcFswXSBdID0gJ3RyaWdnZXInIGluIGRlcFsxXSA/IGRlcFsxXS50cmlnZ2VyKF9kZXBlbmRlbmNpZXNBcmdzKSA6ICgoKT0+e30pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2RlcGVuZGVuY2llcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIF9kZXBlbmRlbmNpZXMudmlldyA9IHRoaXM7XG4gICAgICAgIF9kZXBlbmRlbmNpZXMucHJvcHMgPSB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpO1xuICAgICAgICBfZGVwZW5kZW5jaWVzLnRlbXBsYXRlID0gKGZyYWdtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVkID0gX2RlcGVuZGVuY2llcy5wcm9wc1tgQFRoZW1lLiR7ZnJhZ21lbnR9YF0gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBkb20gPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoc2FtcGxlZCwgJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgY29uc3Qgb3V0ID0ge1xuICAgICAgICAgICAgICAgIHJhdzogc2FtcGxlZCxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb20uYm9keVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaGFyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IF9kZXBlbmRlbmNpZXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvdXRlci5yb290O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlXG4gICAgICAgICAqL1xuICAgICAgICBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXModGhpcy5pbnB1dCk7XG4gICAgICAgIENvbXBpbGF0b3IodGhpcy5pbnB1dCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0IENvbnRyb2xsZXIgd2l0aCBkZXBlbmRlbmNpZXNcbiAgICAgICAgICovXG4gICAgICAgIGlmICgnY29udHJvbGxlcicgaW4gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyKF9kZXBlbmRlbmNpZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5pbnB1dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW5kZXIgVmlldyAnLCB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpLCAgX2RlcGVuZGVuY2llcylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldENvbnRlbnQoZWxlbWVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUGFyc2UgOicsIGVsZW1lbnQsIHRoaXMucm9vdCApXG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5Sb290KCkucm9vdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0VmFyaWFibGUobmFtZSwgdmFsdWUsIHBlcnNpc3QgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0RGljdGlvbmFyeSA9IHdpbmRvdy4kU2Vuc2VuUkxQLnJldHJpdmVzKCkgfHwge307XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdERpY3Rpb25hcnkpLm1hcChkaWMgPT4ge1xuICAgICAgICAgICAgZGljdGlvbmFyeVtkaWNbMF1dID0gZGljWzFdO1xuICAgICAgICB9KTtcbiAgICAgICAgZGljdGlvbmFyeVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICBpZiAod2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzW25hbWVdKSB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tuYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaW5wdXQucXVlcnlTZWxlY3RvcihgW3NlbnNlbi1yZWY9XCIke2NoZWNrLnJlZn1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2suY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBDb250ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoY2hlY2suY29udGVudCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVjay5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGNoZWNrLmF0dHJpYnV0ZS5uYW1lLCBjaGVjay5hdHRyaWJ1dGUudmFsdWUucmVwbGFjZShjaGVjay5yZWNvcmRzWzFdLm1hdGNoWzBdLCAodmFsdWUgfHwgY2hlY2sucmVjb3Jkc1sxXS5zeW50YXhbMV0pLnRyaW0oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiogKiBVcGRhdGUgKi9cbiAgICAgICAgICAgICAgICBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyh0YXJnZXQsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJzaXN0KSB7XG4gICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTZW5zZW5WaWV3IH0gZnJvbSBcIi4uL3NlbnNlbi1oaW5hdGEvVmlld1wiO1xuY29uc3QgQWJvdXRWaWV3ID0gbmV3IFNlbnNlblZpZXcoe1xuICAgIHNsdWc6ICdhYm91dCcsXG4gICAgc291cmNlOiAnYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgSW5pdCAnKTtcbiAgICB9LFxuICAgIG1vdW50ZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdWaWV3IEZvY3VzZWQnKTtcbiAgICB9LFxuICAgIHVubW91bnRlZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgQmx1cnJlZCcpO1xuICAgIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0VmlldztcbiIsImltcG9ydCB7IFNlbnNlblZpZXcgfSBmcm9tIFwiLi4vc2Vuc2VuLWhpbmF0YS9WaWV3XCI7XG5jb25zdCBIb21lVmlldyA9IG5ldyBTZW5zZW5WaWV3KHtcbiAgICBzbHVnOiAnaG9tZScsXG4gICAgc291cmNlOiAnaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAoJCkgPT4ge1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIC8vICAgICAkLnZpZXcuc2V0VmFyaWFibGUoJ3Bvc3RJbWFnZScsICcuL2Fzc2V0cy9pbWFnZXMvZ2duLnBuZycpO1xuICAgICAgICAvLyB9LCAxMDAwKVxuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgQ29udHJvbGxlciA6JywgJD8uR0VUPy5wYXJhbSk7XG4gICAgfSxcbiAgICBtb3VudGVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBNb3VudGVkJyk7XG4gICAgfSxcbiAgICB1bm1vdW50ZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdWaWV3IFVuTW91bnRlZCcpO1xuICAgIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhvbWVWaWV3O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9