/*! For license information please see component---src-pages-about-tsx-e9194907196d9100ce79.js.LICENSE.txt */
(self.webpackChunktham_website=self.webpackChunktham_website||[]).push([[49],{7989:function(e,t,n){"use strict";var r=n(4925),a=n(7294),o=["title","titleId"];var i=a.forwardRef((function(e,t){var n=e.title,i=e.titleId,s=(0,r.Z)(e,o);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":i},s),n?a.createElement("title",{id:i},n):null,a.createElement("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))}));t.Z=i},1763:function(e,t,n){var r;r=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),o=u(o);break;case"resolution":a=l(a),o=l(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=c(a),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=a;case"max":return o<=a;default:return o===a}}));return a&&!n||!a&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],i=t[2],s=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(a);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=/[A-Z]/g,a=/^ms-/,o={};function i(e){return"-"+e.toLowerCase()}var s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,i);return o[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,n){"use strict";var r=n("./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(a&&!n){var i=a.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)},this.dispose=function(){i&&i.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,c=a(e),l=1;l<arguments.length;l++){for(var u in i=Object(arguments[l]))n.call(i,u)&&(c[u]=i[u]);if(t){s=t(i);for(var f=0;f<s.length;f++)r.call(i,s[f])&&(c[s[f]]=i[s[f]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,n){"use strict";var r=function(){},a=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},i=n("./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var l in e)if(i(e,l)){var u;try{if("function"!=typeof e[l]){var f=Error((s||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}u=e[l](t,l,s,n,null,a)}catch(p){u=p}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+u.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,n){"use strict";var r=n("./node_modules/react-is/index.js"),a=n("./node_modules/object-assign/index.js"),o=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i=n("./node_modules/prop-types/lib/has.js"),s=n("./node_modules/prop-types/checkPropTypes.js"),c=function(){};function l(){return null}c=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+a+" `"+i+"` of type `"+h(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,r,a,i+"["+c+"]",o);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,a,o){var i=t[n];return e(i)?null:new p("Invalid "+a+" `"+o+"` of type `"+h(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,a,o){var i=e[t];return r.isValidElementType(i)?null:new p("Invalid "+a+" `"+o+"` of type `"+h(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,a,o){if(!(t[n]instanceof e)){var i=e.name||u;return new p("Invalid "+a+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var s;return null}))},node:m((function(e,t,n,r,a){return b(e[t])?null:new p("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=h(c);if("object"!==l)return new p("Invalid "+a+" `"+s+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(i(c,u)){var f=e(c,u,r,a,s+"."+u,o);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l;function t(t,n,r,a,o){for(var i=t[n],s=0;s<e.length;s++)if(d(i,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+a+" `"+o+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+c+".")}return m(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(n)+" at index "+t+"."),l}return m((function(t,n,r,a,s){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,a,s,o);if(null==u)return null;u.data&&i(u.data,"expectedType")&&c.push(u.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,a,i){var s=t[n],c=h(s);if("object"!==c)return new p("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return v(r,a,i,l,x(u));var f=u(s,l,r,a,i+"."+l,o);if(f)return f}return null}))},exact:function(e){return m((function(t,n,r,s,c){var l=t[n],u=h(l);if("object"!==u)return new p("Invalid "+s+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var f=a({},t[n],e);for(var d in f){var m=e[d];if(i(e,d)&&"function"!=typeof m)return v(r,s,c,d,x(m));if(!m)return new p("Invalid "+s+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(l,d,r,s,c+"."+d,o);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},r=0;function a(a,i,s,l,f,d,m){if(l=l||u,d=d||s,m!==o){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var v=l+":"+s;!n[v]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null==i[s]?a?null===i[s]?new p("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(i,s,l,f,d)}var i=a.bind(null,!1);return i.isRequired=a.bind(null,!0),i}function y(e){return m((function(t,n,r,a,o,i){var s=t[n];return h(s)!==e?new p("Invalid "+a+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,n,r,a){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!b(a.value))return!1}else for(;!(a=o.next()).done;){var i=a.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":function(e,t,n){var r=n("./node_modules/react-is/index.js");e.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case u:case a:case i:case o:case d:return p;default:var v=p&&p.$$typeof;switch(v){case c:case f:case y:case m:case s:return v;default:return t}}case r:return t}}}var w=l,j=u,E=c,O=s,_=n,S=f,N=a,T=y,C=m,P=r,M=i,k=o,I=d,H=!1;function R(e){return g(e)===u}t.AsyncMode=w,t.ConcurrentMode=j,t.ContextConsumer=E,t.ContextProvider=O,t.Element=_,t.ForwardRef=S,t.Fragment=N,t.Lazy=T,t.Memo=C,t.Portal=P,t.Profiler=M,t.StrictMode=k,t.Suspense=I,t.isAsyncMode=function(e){return H||(H=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||g(e)===l},t.isConcurrentMode=R,t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===a},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===i},t.isStrictMode=function(e){return g(e)===o},t.isSuspense=function(e){return g(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===i||e===o||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===h||e.$$typeof===x||e.$$typeof===v)},t.typeOf=g}()},"./node_modules/react-is/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var i=n[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:function(){return a},shallowEqualObjects:function(){return r}})},"./src/Component.ts":function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,a=e.onChange,i=r(e,["children","device","onChange"]),s=(0,o.default)(i,n,a);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n("react").createContext)(void 0);t.default=r},"./src/index.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=r(n("./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var o=r(n("./src/Component.ts"));t.default=o.default;var i=r(n("./src/toQuery.ts"));t.toQuery=i.default;var s=r(n("./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n("./node_modules/prop-types/index.js")),s=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},l={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:s,type:Object.keys(c)},u=a(l,["type"]),f=r({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:s,maxResolution:s},u),d=r(r({},c),f);t.default={all:d,types:c,matchers:l,features:f}},"./src/toQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("./node_modules/hyphenate-style-name/index.js")),o=r(n("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n("react"),o=r(n("./node_modules/matchmediaquery/index.js")),i=r(n("./node_modules/hyphenate-style-name/index.js")),s=n("./node_modules/shallow-equal/dist/index.esm.js"),c=r(n("./src/toQuery.ts")),l=r(n("./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,i.default)(n)]=e[n],t}),{})},f=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,a.useState)(t),r=n[0],o=n[1];return(0,a.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,a.useContext)(l.default),n=function(){return u(e)||u(t)},r=(0,a.useState)(n),o=r[0],i=r[1];return(0,a.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||i(e)}),[e,t]),o}(t),i=d(e);if(!i)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,a.useState)(n),i=r[0],s=r[1],c=f();return(0,a.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),i}(i,r),p=function(e){var t=(0,a.useState)(e.matches),n=t[0],r=t[1];return(0,a.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),m=f();return(0,a.useEffect)((function(){m&&n&&n(p)}),[p]),(0,a.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")}()},e.exports=r(n(7294))},8274:function(e,t,n){"use strict";var r=n(9931),a=n.n(r),o=n(7294);t.Z=function(e){var t=e.heading,n=e.title,r=e.className,i=e.underlineClassName,s=e.textClassName;return o.createElement("div",{className:a()("flex flex-col items-center space-y-2",r)},"h1"===t?o.createElement("h1",{className:a()("font-bold",s)},n):o.createElement("h2",{className:a()("font-bold",s)},n),o.createElement("div",{className:a()("h-0.5 rounded-md bg-primary-main w-16",i)}))}},9639:function(e,t,n){"use strict";var r=n(7294),a=n(7782),o=n(3723),i=n(9931),s=n.n(i);t.Z=function(e){var t=e.coverImage,n=e.title,i=e.description,c=e.createdAt,l=e.href,u=e.className;return r.createElement(a.Link,{to:l||"",className:s()("group",u)},r.createElement("article",{className:"space-y-2.5"},r.createElement("div",{className:"!aspect-w-16 !aspect-h-9"},t&&r.createElement(o.G,{alt:n||"",image:t,className:"object-cover w-full h-full rounded-lg"})),r.createElement("span",{className:"block text-sm text-neutral-900"},c),r.createElement("h3",{className:"text-lg font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-main dealy-100"},n),r.createElement("span",{className:"line-clamp-2 text-sm text-neutral-600 !mt-1"},i)))}},3597:function(e,t,n){"use strict";n.d(t,{Nq:function(){return u},Oo:function(){return s},eu:function(){return c.Z}});var r=n(7294),a=n(9931),o=n.n(a),i=n(3723),s=function(e){var t=e.title,n=e.desc,a=e.icon,s=e.className;return r.createElement("div",{className:o()("flex flex-col justify-center",s)},r.createElement("div",{className:"w-max h-max p-3 rounded-lg bg-primary-border bg-opacity-20"},a&&r.createElement(i.G,{alt:t||"",image:a,className:"w-10 h-10"})),r.createElement("div",{className:"mt-6"},r.createElement("span",{className:"text-2xl text-primary-main font-bold"},t),r.createElement("p",{className:"text-nuetral-900 line-clamp-4 mt-2"},n)))},c=n(9639),l=n(7989),u=function(e){var t=e.branch,n=e.location,a=e.phone,i=e.line,s=e.email,c=e.className;return r.createElement("div",{className:o()("flex flex-col justify-center border border-neutral-300 rounded-lg p-6 space-y-3",c)},r.createElement("div",{className:"flex flex-row items-center space-x-1"},r.createElement(l.Z,{className:"w-6 h-6 text-primary-main"}),r.createElement("h3",{className:"text-neutral-900 text-xl font-bold"},t)),r.createElement("p",{className:"text-sm text-neutral-900"},n),r.createElement("div",{className:"flex flex-row items-center"},r.createElement("a",{href:"tel:"+(null==a?void 0:a.tel),className:"w-1/2"},"Tel:"," ",r.createElement("span",{className:"text-primary-main hover:underline unlderline-offset-4"},null==a?void 0:a.display)),r.createElement("a",{href:"tel:"+(null==i?void 0:i.href),className:"w-1/2"},"Line@:"," ",r.createElement("span",{className:"text-primary-main hover:underline unlderline-offset-4"},null==i?void 0:i.display))),r.createElement("a",{href:"mailto:"+s,className:"flex flex-row items-center w-1/2"},"Email:",r.createElement("span",{className:"ml-1 text-primary-main hover:underline unlderline-offset-4"},s)))}},1667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(5375),o=n(8274),i=n(7782),s=n(3597),c=n(1763);var l=n(3723),u=n(8547),f=n.n(u),d=function(e){var t,u,d,p,m,y=e.data,v=(0,i.useTranslation)().t,b=(0,i.useI18next)().language,h=(0,c.useMediaQuery)({query:"(min-width: 768px)"}),x=null===(t="th"===b?y.missionsTH:y.missionsEN)||void 0===t||null===(u=t.pages)||void 0===u||null===(d=u.home)||void 0===d||null===(p=d.section_2)||void 0===p||null===(m=p.data)||void 0===m?void 0:m.missions;return r.createElement(a.Z,null,r.createElement("section",{className:"flex flex-col lg:flex-row"},r.createElement("div",{className:"h-[50vh] flex justify-center items-center relative lg:w-1/2"},r.createElement("div",{className:"bg-primary-pressed/90 absolute z-10 w-full h-full"}),r.createElement(l.S,{src:"../images/THH-Building.png",alt:"Tong Hua Building",className:"w-full h-full object-cover !absolute z-0",__imageData:n(9812)}),r.createElement(l.S,{src:"../images/THAM-logo-square.svg",alt:"Tong Hua Building",className:"w-2/3 h-auto object-cover !absolute z-20 sm:w-2/5 lg:w-2/3 2xl:w-1/2",__imageData:n(8495)})),r.createElement("div",{className:"lg:w-1/2 flex flex-col items-center justify-center px-4 py-28 lg:py-0 md:px-6 lg:px-10 xl:px-16 2xl:px-32 space-y-8"},r.createElement(f(),{className:"text-primary-focus w-20 h-20 self-start"}),r.createElement("h2",{className:"text-3xl font-bold text-primary-main text-center leading-normal"},v(h?"pages.about.section-1.md-header-1":"pages.about.section-1.header-1")),r.createElement(f(),{className:"text-primary-focus w-20 h-20 self-end rotate-180"}))),r.createElement("section",{className:"bg-primary-focus"},r.createElement("div",{className:"px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto flex flex-col items-center md:items-start space-y-10"},r.createElement(o.Z,{title:v("pages.about.section-2.header-1"),textClassName:"text-4xl text-neutral-900",className:"md:items-start",heading:"h2"}),r.createElement("div",{dangerouslySetInnerHTML:{__html:""+v("pages.about.section-2.desc-1")||"<div />"},className:"about"}),r.createElement("p",{className:"about"},v("pages.about.section-2.desc-2")))),r.createElement("section",{className:"flex flex-col justify-center items-center px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},r.createElement(o.Z,{title:v("pages.home.section-2.header-1"),textClassName:"text-4xl text-neutral-900",heading:"h2"}),r.createElement("p",{className:"text-xl lg:text-2xl text-center text-neutral-900 mt-6"},v("pages.home.section-2.desc-1")),r.createElement("div",{className:"md:w-3/4 lg:w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 mt-16"},null==x?void 0:x.map((function(e,t){var n,a=e||{},o=a.title,i=a.desc,c=a.icon;return r.createElement("div",{key:t,className:"w-full lg:w-1/3 lg:px-2.5"},r.createElement(s.Oo,{icon:null==c||null===(n=c.childImageSharp)||void 0===n?void 0:n.gatsbyImageData,title:o,desc:i,className:"items-center text-center lg:items-start lg:text-left"}))})))))}},8547:function(e,t,n){var r=n(7294);function a(e){return r.createElement("svg",e,r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.277 12.0301V0C22.1283 2.70949 13.7951 8.83285 8.27703 18.3703C2.75898 27.9077 0 40.8588 0 57.2241L0 84.2105H37.5V48.1203L21.4527 48.1203V44.3812C21.4527 35.6025 22.4381 28.5308 24.4088 23.166C26.3795 17.8012 29.3356 14.0893 33.277 12.0301ZM95.777 12.0301V0C84.6283 2.70949 76.2951 8.83285 70.777 18.3703C65.259 27.9077 62.5 40.8588 62.5 57.2241V84.2105H100L100 48.1203L83.9527 48.1203V44.3812C83.9527 35.6025 84.938 28.5308 86.9088 23.166C88.8795 17.8012 91.8356 14.0893 95.777 12.0301Z",fill:"currentColor"}))}a.defaultProps={width:"100",height:"85",viewBox:"0 0 100 85",fill:"currentColor"},e.exports=a,a.default=a},8495:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/192b4a222748a49b46a20cfcd5f0e7f4/b2cbb/THAM-logo-square.svg","srcSet":"/static/192b4a222748a49b46a20cfcd5f0e7f4/1c22e/THAM-logo-square.svg 279w,\\n/static/192b4a222748a49b46a20cfcd5f0e7f4/083f0/THAM-logo-square.svg 558w,\\n/static/192b4a222748a49b46a20cfcd5f0e7f4/b2cbb/THAM-logo-square.svg 1115w","sizes":"(min-width: 1115px) 1115px, 100vw"},"sources":[{"srcSet":"/static/192b4a222748a49b46a20cfcd5f0e7f4/15ff0/THAM-logo-square.webp 279w,\\n/static/192b4a222748a49b46a20cfcd5f0e7f4/7c9d9/THAM-logo-square.webp 558w,\\n/static/192b4a222748a49b46a20cfcd5f0e7f4/37bcb/THAM-logo-square.webp 1115w","type":"image/webp","sizes":"(min-width: 1115px) 1115px, 100vw"}]},"width":1115,"height":969}')},9812:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/93c99/THH-Building.png","srcSet":"/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/ecbec/THH-Building.png 360w,\\n/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/17ffc/THH-Building.png 720w,\\n/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/93c99/THH-Building.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/7268c/THH-Building.webp 360w,\\n/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/a5fbe/THH-Building.webp 720w,\\n/static/e80a6e6d9ee51e6e22c7c91e62b4ba36/1790f/THH-Building.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1068}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-e9194907196d9100ce79.js.map