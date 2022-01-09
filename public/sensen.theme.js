"use strict";
(self["webpackChunksensen_shadow"] = self["webpackChunksensen_shadow"] || []).push([["theme"],{

/***/ "./jsbundle/sensen-hinata/Theme.js":
/*!*****************************************!*\
  !*** ./jsbundle/sensen-hinata/Theme.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./jsbundle/sensen.theme.bundle.js":
/*!*****************************************!*\
  !*** ./jsbundle/sensen.theme.bundle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sensen_hinata_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sensen-hinata/Theme */ "./jsbundle/sensen-hinata/Theme.js");

const themeBundle = {}
;themeBundle['sensen-kit'] = (new _sensen_hinata_Theme__WEBPACK_IMPORTED_MODULE_0__["default"]('sensen-kit'))
;themeBundle['sensen-kit'].Asset('-css','assets/css/sensen-kit/index.css')
;themeBundle['sensen-kit'].Asset('-js','assets/js/sensen-kit/index.js')
;themeBundle['sensen-kit']
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
;themeBundle['sensen-kit'].Use();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeBundle);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./jsbundle/sensen.theme.bundle.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc2VuLnRoZW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCLFdBQVcsU0FBUyxFQUFFLEtBQUs7QUFDakY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsK0NBQStDLEdBQUc7QUFDbEQsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFdBQVcsSUFBSSxLQUFLO0FBQzdFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SGdEO0FBQ2hEO0FBQ0EsQ0FBQyxpQ0FBaUMsNERBQVc7QUFDN0MsQ0FBQztBQUNELENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL2pzYnVuZGxlL3NlbnNlbi1oaW5hdGEvVGhlbWUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLXNoYWRvdy8uL2pzYnVuZGxlL3NlbnNlbi50aGVtZS5idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuVGhlbWUge1xuICAgIGNvbnN0cnVjdG9yKHRoZW1lKSB7XG4gICAgICAgIHRoaXMuRnJhZ21lbnRzID0ge307XG4gICAgICAgIHRoaXMuUGF5bG9hZHMgPSBbXTtcbiAgICAgICAgdGhpcy5Bc3NldHMgPSB7XG4gICAgICAgICAgICBDU1M6IFtdLFxuICAgICAgICAgICAgSlM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlRoZW1lID0gdGhlbWU7XG4gICAgfVxuICAgIGFzeW5jIEFzeW5jKHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZldGNoKGAuL3NlbnNlbi90aGVtZXMvJHsodGhpcy5UaGVtZSA/IGAke3RoaXMuVGhlbWV9L2AgOiAnJyl9JHtwYXRofS5odG1sYClcbiAgICAgICAgICAgICAgICAudGhlbihyID0+IHIudGV4dCgpKVxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4gcmVqZWN0KGVyKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBEZWZpbmUobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWQgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLkZyYWdtZW50c1tuYW1lXSA9IHBheWxvYWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5QYXlsb2Fkcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkZyYWdtZW50c1tuYW1lXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuUkxQLnB1c2goYEBUaGVtZS4ke25hbWV9YCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IChgU2Vuc2VuIFRoZW1lIHNheSAke2VyfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBBc3NldCh0eXBlLCBwYXRoKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnLWNzcyc6XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3NldHMuQ1NTLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctanMnOlxuICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkpTLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIExvYWRDU1MocGF0aCkge1xuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzZXQgOicsIHBhdGgsICdsb2FkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzZXQgOicsIHBhdGgsICdmYWlsZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdyZWwnLCAnU3R5bGVTaGVldCcpO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgnc2Vuc2VuLWFzc2V0cycsICctY3NzJyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdocmVmJywgcGF0aCk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBMb2FkSlMocGF0aCkge1xuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2xvYWRlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCA6JywgcGF0aCwgJ2ZhaWxlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgIGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tYXNzZXRzJywgJy1qcycpO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgnc3JjJywgcGF0aCk7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBhc3luYyBVc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEluc2VydGlvbnMgZGVzIEFzc2V0c1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLkFzc2V0cy5DU1MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkNTUy5tYXAocGF0aCA9PiB0aGlzLkxvYWRDU1MocGF0aCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Bc3NldHMuSlMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQXNzZXRzLkpTLm1hcChwYXRoID0+IHRoaXMuTG9hZEpTKHBhdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogVHJhaXRlbWVudCBkZXMgZnJhZ21lbnRzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnRzQXJyYXkgPSBPYmplY3QuZW50cmllcyh0aGlzLkZyYWdtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudHNBcnJheS5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKGBAVGhlbWUoJHt0aGlzLlRoZW1lfSkuJHtlWzBdfWAsIGVbMV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuUGF5bG9hZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3QudmFsdWVzKCB0aGlzLlBheWxvYWRzICkubWFwKHByb21pc2U9PilcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuUGF5bG9hZHMpLnRoZW4oZnJhZ21lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbG9hZCBmcmFnbWVudCcsIGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNlbnNlblRoZW1lIGZyb20gXCIuL3NlbnNlbi1oaW5hdGEvVGhlbWVcIjtcbmNvbnN0IHRoZW1lQnVuZGxlID0ge31cbjt0aGVtZUJ1bmRsZVsnc2Vuc2VuLWtpdCddID0gKG5ldyBTZW5zZW5UaGVtZSgnc2Vuc2VuLWtpdCcpKVxuO3RoZW1lQnVuZGxlWydzZW5zZW4ta2l0J10uQXNzZXQoJy1jc3MnLCdhc3NldHMvY3NzL3NlbnNlbi1raXQvaW5kZXguY3NzJylcbjt0aGVtZUJ1bmRsZVsnc2Vuc2VuLWtpdCddLkFzc2V0KCctanMnLCdhc3NldHMvanMvc2Vuc2VuLWtpdC9pbmRleC5qcycpXG47dGhlbWVCdW5kbGVbJ3NlbnNlbi1raXQnXVxuLkRlZmluZSgndGhlbWVzL3NlbnNlbi1raXQvaGVhZGVyJyxgXG48aGVhZGVyPlxuICAgIDxoMT5IZWFkZXIgQXJ0aWZhY3Q8L2gxPlxuPC9oZWFkZXI+XG5gKVxuLkFzc2V0KCctY3NzJywnYXNzZXRzL2Nzcy9zZW5zZW4ta2l0L2hlYWRlci9mdWxsLmNzcycpXG4uQXNzZXQoJy1jc3MnLCdhc3NldHMvY3NzL3NlbnNlbi1raXQvaGVhZGVyL2luZGV4LmNzcycpXG4uQXNzZXQoJy1jc3MnLCdhc3NldHMvY3NzL3NlbnNlbi1raXQvaGVhZGVyL3NpbXBsZS5jc3MnKVxuLkFzc2V0KCctanMnLCdhc3NldHMvanMvc2Vuc2VuLWtpdC9oZWFkZXIvaW5kZXguanMnKVxuLkRlZmluZSgndGhlbWVzL3NlbnNlbi1raXQvbmF2LmJvdHRvbScsYDxuYXY+XG4gICAgbmF2IGJvdHRvbVxuPC9uYXY+YClcbi5Bc3NldCgnLWNzcycsJ2Fzc2V0cy9jc3Mvc2Vuc2VuLWtpdC9uYXYuYm90dG9tL2luZGV4LmNzcycpXG4uQXNzZXQoJy1qcycsJ2Fzc2V0cy9qcy9zZW5zZW4ta2l0L25hdi5ib3R0b20vaW5kZXguanMnKVxuO3RoZW1lQnVuZGxlWydzZW5zZW4ta2l0J10uVXNlKCk7XG5leHBvcnQgZGVmYXVsdCB0aGVtZUJ1bmRsZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=