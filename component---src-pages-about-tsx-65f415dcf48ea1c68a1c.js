/*! For license information please see component---src-pages-about-tsx-65f415dcf48ea1c68a1c.js.LICENSE.txt */
(self.webpackChunktham_website=self.webpackChunktham_website||[]).push([[49],{7989:function(e,t,n){"use strict";var r=n(4925),a=n(7294),o=["title","titleId"];var s=a.forwardRef((function(e,t){var n=e.title,s=e.titleId,i=(0,r.Z)(e,o);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":s},i),n?a.createElement("title",{id:s},n):null,a.createElement("path",{fillRule:"evenodd",d:"M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))}));t.Z=s},1763:function(e,t,n){var r;r=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return i(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),o=u(o);break;case"resolution":a=l(a),o=l(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=c(a),o=c(o);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=a;case"max":return o<=a;default:return o===a}}));return a&&!n||!a&&n}))},t.parse=i;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,s=/(dpi|dpcm|dppx)?$/;function i(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],s=t[2],i=t[3]||"",c={};return c.inverse=!!o&&"not"===o.toLowerCase(),c.type=s?s.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],c.expressions=i.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(a);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(s)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=/[A-Z]/g,a=/^ms-/,o={};function s(e){return"-"+e.toLowerCase()}var i=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,s);return o[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,n){"use strict";var r=n("./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(a&&!n){var s=a.call(window,e);this.matches=s.matches,this.media=s.media,s.addListener(i)}else this.matches=r(e,t),this.media=e;function i(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){s&&s.addListener(e)},this.removeListener=function(e){s&&s.removeListener(e)},this.dispose=function(){s&&s.removeListener(i)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var s,i,c=a(e),l=1;l<arguments.length;l++){for(var u in s=Object(arguments[l]))n.call(s,u)&&(c[u]=s[u]);if(t){i=t(s);for(var f=0;f<i.length;f++)r.call(s,i[f])&&(c[i[f]]=s[i[f]])}}return c}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,n){"use strict";var r=function(){},a=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},s=n("./node_modules/prop-types/lib/has.js");function i(e,t,n,i,c){for(var l in e)if(s(e,l)){var u;try{if("function"!=typeof e[l]){var f=Error((i||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}u=e[l](t,l,i,n,null,a)}catch(p){u=p}if(!u||u instanceof Error||r((i||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+u.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},i.resetWarningCache=function(){o={}},e.exports=i},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,n){"use strict";var r=n("./node_modules/react-is/index.js"),a=n("./node_modules/object-assign/index.js"),o=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n("./node_modules/prop-types/lib/has.js"),i=n("./node_modules/prop-types/checkPropTypes.js"),c=function(){};function l(){return null}c=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new p("Invalid "+a+" `"+s+"` of type `"+h(i)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<i.length;c++){var l=e(i,c,r,a,s+"["+c+"]",o);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,a,o){var s=t[n];return e(s)?null:new p("Invalid "+a+" `"+o+"` of type `"+h(s)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,a,o){var s=e[t];return r.isValidElementType(s)?null:new p("Invalid "+a+" `"+o+"` of type `"+h(s)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,a,o){if(!(t[n]instanceof e)){var s=e.name||u;return new p("Invalid "+a+" `"+o+"` of type `"+((i=t[n]).constructor&&i.constructor.name?i.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+s+"`.")}var i;return null}))},node:m((function(e,t,n,r,a){return x(e[t])?null:new p("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=h(c);if("object"!==l)return new p("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(s(c,u)){var f=e(c,u,r,a,i+"."+u,o);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l;function t(t,n,r,a,o){for(var s=t[n],i=0;i<e.length;i++)if(d(s,e[i]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new p("Invalid "+a+" `"+o+"` of value `"+String(s)+"` supplied to `"+r+"`, expected one of "+c+".")}return m(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(n)+" at index "+t+"."),l}return m((function(t,n,r,a,i){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,a,i,o);if(null==u)return null;u.data&&s(u.data,"expectedType")&&c.push(u.data.expectedType)}return new p("Invalid "+a+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,a,s){var i=t[n],c=h(i);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return v(r,a,s,l,b(u));var f=u(i,l,r,a,s+"."+l,o);if(f)return f}return null}))},exact:function(e){return m((function(t,n,r,i,c){var l=t[n],u=h(l);if("object"!==u)return new p("Invalid "+i+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var f=a({},t[n],e);for(var d in f){var m=e[d];if(s(e,d)&&"function"!=typeof m)return v(r,i,c,d,b(m));if(!m)return new p("Invalid "+i+" `"+c+"` key `"+d+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(l,d,r,i,c+"."+d,o);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},r=0;function a(a,s,i,l,f,d,m){if(l=l||u,d=d||i,m!==o){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var v=l+":"+i;!n[v]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[v]=!0,r++)}}return null==s[i]?a?null===s[i]?new p("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+f+" `"+d+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,i,l,f,d)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function y(e){return m((function(t,n,r,a,o,s){var i=t[n];return h(i)!==e?new p("Invalid "+a+" `"+o+"` of type `"+b(i)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,n,r,a){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function x(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(x);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,o=r.call(t);if(r!==t.entries){for(;!(a=o.next()).done;)if(!x(a.value))return!1}else for(;!(a=o.next()).done;){var s=a.value;if(s&&!x(s[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function g(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":function(e,t,n){var r=n("./node_modules/react-is/index.js");e.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,x=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function g(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case u:case a:case s:case o:case d:return p;default:var v=p&&p.$$typeof;switch(v){case c:case f:case y:case m:case i:return v;default:return t}}case r:return t}}}var w=l,j=u,E=c,O=i,_=n,N=f,S=a,P=y,C=m,T=r,k=s,I=o,M=d,R=!1;function $(e){return g(e)===u}t.AsyncMode=w,t.ConcurrentMode=j,t.ContextConsumer=E,t.ContextProvider=O,t.Element=_,t.ForwardRef=N,t.Fragment=S,t.Lazy=P,t.Memo=C,t.Portal=T,t.Profiler=k,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),$(e)||g(e)===l},t.isConcurrentMode=$,t.isContextConsumer=function(e){return g(e)===c},t.isContextProvider=function(e){return g(e)===i},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return g(e)===f},t.isFragment=function(e){return g(e)===a},t.isLazy=function(e){return g(e)===y},t.isMemo=function(e){return g(e)===m},t.isPortal=function(e){return g(e)===r},t.isProfiler=function(e){return g(e)===s},t.isStrictMode=function(e){return g(e)===o},t.isSuspense=function(e){return g(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===s||e===o||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===i||e.$$typeof===c||e.$$typeof===f||e.$$typeof===x||e.$$typeof===h||e.$$typeof===b||e.$$typeof===v)},t.typeOf=g}()},"./node_modules/react-is/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var o=0;o<a;o++){var s=n[o];if(e[s]!==t[s]||!Object.prototype.hasOwnProperty.call(t,s))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:function(){return a},shallowEqualObjects:function(){return r}})},"./src/Component.ts":function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,a=e.onChange,s=r(e,["children","device","onChange"]),i=(0,o.default)(s,n,a);return"function"==typeof t?t(i):i?t:null}},"./src/Context.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n("react").createContext)(void 0);t.default=r},"./src/index.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=r(n("./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var o=r(n("./src/Component.ts"));t.default=o.default;var s=r(n("./src/toQuery.ts"));t.toQuery=s.default;var i=r(n("./src/Context.ts"));t.Context=i.default},"./src/mediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n("./node_modules/prop-types/index.js")),i=s.default.oneOfType([s.default.string,s.default.number]),c={all:s.default.bool,grid:s.default.bool,aural:s.default.bool,braille:s.default.bool,handheld:s.default.bool,print:s.default.bool,projection:s.default.bool,screen:s.default.bool,tty:s.default.bool,tv:s.default.bool,embossed:s.default.bool},l={orientation:s.default.oneOf(["portrait","landscape"]),scan:s.default.oneOf(["progressive","interlace"]),aspectRatio:s.default.string,deviceAspectRatio:s.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:s.default.bool,colorIndex:s.default.bool,monochrome:s.default.bool,resolution:i,type:Object.keys(c)},u=a(l,["type"]),f=r({minAspectRatio:s.default.string,maxAspectRatio:s.default.string,minDeviceAspectRatio:s.default.string,maxDeviceAspectRatio:s.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:s.default.number,maxColor:s.default.number,minColorIndex:s.default.number,maxColorIndex:s.default.number,minMonochrome:s.default.number,maxMonochrome:s.default.number,minResolution:i,maxResolution:i},u),d=r(r({},c),f);t.default={all:d,types:c,matchers:l,features:f}},"./src/toQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("./node_modules/hyphenate-style-name/index.js")),o=r(n("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n("react"),o=r(n("./node_modules/matchmediaquery/index.js")),s=r(n("./node_modules/hyphenate-style-name/index.js")),i=n("./node_modules/shallow-equal/dist/index.esm.js"),c=r(n("./src/toQuery.ts")),l=r(n("./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,s.default)(n)]=e[n],t}),{})},f=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,a.useState)(t),r=n[0],o=n[1];return(0,a.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,a.useContext)(l.default),n=function(){return u(e)||u(t)},r=(0,a.useState)(n),o=r[0],s=r[1];return(0,a.useEffect)((function(){var e=n();(0,i.shallowEqualObjects)(o,e)||s(e)}),[e,t]),o}(t),s=d(e);if(!s)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,a.useState)(n),s=r[0],i=r[1],c=f();return(0,a.useEffect)((function(){if(c){var e=n();return i(e),function(){e&&e.dispose()}}}),[e,t]),s}(s,r),p=function(e){var t=(0,a.useState)(e.matches),n=t[0],r=t[1];return(0,a.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),m=f();return(0,a.useEffect)((function(){m&&n&&n(p)}),[p]),(0,a.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")}()},e.exports=r(n(7294))},8274:function(e,t,n){"use strict";var r=n(9931),a=n.n(r),o=n(7294);t.Z=function(e){var t=e.heading,n=e.title,r=e.className,s=e.underlineClassName,i=e.textClassName;return o.createElement("div",{className:a()("flex flex-col items-center space-y-2",r)},"h1"===t?o.createElement("h1",{className:a()("font-bold",i)},n):o.createElement("h2",{className:a()("font-bold",i)},n),o.createElement("div",{className:a()("h-0.5 rounded-md border-b border-secondary-main w-16",s)}))}},9639:function(e,t,n){"use strict";var r=n(7294),a=n(7782),o=n(3723),s=n(9931),i=n.n(s);t.Z=function(e){var t=e.coverImage,n=e.title,s=e.description,c=e.createdAt,l=e.href,u=e.className;return r.createElement(a.Link,{to:l||"",className:i()("group",u)},r.createElement("article",{className:"space-y-2.5"},r.createElement("div",{className:"!aspect-w-16 !aspect-h-9"},t&&r.createElement(o.G,{alt:n||"",image:t,className:"object-cover w-full h-full rounded-lg"})),r.createElement("span",{className:"block text-sm text-neutral-900"},c),r.createElement("h3",{className:"text-lg font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-main dealy-100"},n),r.createElement("span",{className:"line-clamp-2 text-sm text-neutral-600 !mt-1"},s)))}},3597:function(e,t,n){"use strict";n.d(t,{Nq:function(){return u},Oo:function(){return i},eu:function(){return c.Z}});var r=n(7294),a=n(9931),o=n.n(a),s=n(3723),i=function(e){var t=e.title,n=e.desc,a=e.icon,i=e.className;return r.createElement("div",{className:o()("flex flex-col justify-center",i)},r.createElement("div",{className:"w-max h-max p-3 rounded-lg bg-primary-border bg-opacity-20"},a&&r.createElement(s.G,{alt:t||"",image:a,className:"w-10 h-10"})),r.createElement("div",{className:"mt-6"},r.createElement("span",{className:"text-2xl text-primary-main font-semibold"},t),r.createElement("p",{className:"text-lg text-nuetral-900 line-clamp-4 mt-2"},n)))},c=n(9639),l=n(7989),u=function(e){var t=e.branch,n=e.location,a=e.tel,s=e.line,i=e.email,c=e.className;return r.createElement("div",{className:o()("flex flex-col justify-center border border-neutral-300 rounded-lg p-6 space-y-3",c)},r.createElement("div",{className:"flex flex-row items-center space-x-1"},r.createElement(l.Z,{className:"w-6 h-6 text-primary-main"}),r.createElement("h3",{className:"text-primary-main text-xl font-bold"},t)),r.createElement("p",{className:"text-sm text-neutral-900"},n),r.createElement("div",{className:"flex flex-row items-center"},r.createElement("p",{className:"w-1/2"},"Tel: ",a),r.createElement("p",{className:"w-1/2"},"Line@: ",s)),r.createElement("p",null,"Email: ",i))}},1667:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(5375),o=n(8274),s=n(7782),i=n(2516),c=n(3597),l=n(1763);var u=n(8787),f=n.n(u),d=n(857),p=n.n(d),m=function(e){var t,n,u,d,m,y=e.data,v=(0,s.useTranslation)().t,x=(0,s.useI18next)().language,h=(0,l.useMediaQuery)({query:"(min-width: 768px)"}),b=null===(t="th"===x?y.missionsTH:y.missionsEN)||void 0===t||null===(n=t.pages)||void 0===n||null===(u=n.home)||void 0===u||null===(d=u.section_2)||void 0===d||null===(m=d.data)||void 0===m?void 0:m.missions;return r.createElement(a.Z,null,r.createElement("section",{className:"full-page bg-gradient-to-t from-primary-focus via-transparent to-transparent lg:bg-gradient-to-l"},r.createElement("div",{className:"h-full flex flex-col justify-center lg:flex-row lg:justify-between items-center px-4 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},r.createElement("div",{className:"h-1/2 lg:h-full w-full lg:w-1/2 flex flex-col justify-center space-y-10"},r.createElement(o.Z,{title:v("pages.about.section-1.header-1"),textClassName:"font-bold text-4xl md:text-5xl lg:text-6xl whitespace-pre-line md:whitespace-normal lg:whitespace-pre-line text-primary-main",heading:"h1",className:"w-full !items-start",underlineClassName:"!mt-10"})),r.createElement("div",{className:"h-1/2 w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-center lg:items-end"},r.createElement(f(),{className:"w-full md:w-auto"})))),r.createElement("section",{className:"bg-neutral-100"},r.createElement("div",{className:"px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto"},r.createElement("h2",{className:"text-3xl font-bold text-primary-main text-center md:whitespace-pre-line"},v(h?"pages.about.section-2.md-header-1":"pages.about.section-2.header-1")))),r.createElement("section",{className:"px-4 py-28 lg:py-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto space-y-16 lg:space-y-0 flex flex-col items-center lg:flex-row"},r.createElement("div",{className:"flex flex-col items-start space-y-6 lg:w-3/4 lg:pr-10"},r.createElement(o.Z,{title:v("pages.about.section-3.header-1"),textClassName:"text-4xl text-neutral-900",className:"!items-start",heading:"h2"}),r.createElement("div",{dangerouslySetInnerHTML:{__html:""+v("pages.about.section-3.desc-1")||"<div />"},className:"about"}),r.createElement("p",null,v("pages.about.section-3.desc-2"))),r.createElement(f(),{className:"w-72 lg:w-1/4"})),r.createElement("section",{className:"px-4 pb-28 lg:pb-32 md:px-6 lg:px-16 xl:px-28 2xl:px-0 max-w-7xl mx-auto flex flex-col items-center"},r.createElement(o.Z,{title:v("pages.home.section-2.header-1"),textClassName:"text-4xl text-neutral-900",heading:"h2"}),r.createElement("p",{className:"text-lg text-center mt-6"},v("pages.home.section-2.desc-1")),r.createElement("div",{className:"md:w-3/4 lg:w-full flex flex-col space-y-10 lg:flex-row lg:space-y-0 mt-16"},null==b?void 0:b.map((function(e,t){var n,a=e||{},o=a.title,s=a.desc,i=a.icon;return r.createElement("div",{key:t,className:"w-full lg:w-1/3 lg:px-2.5"},r.createElement(c.Oo,{icon:null==i||null===(n=i.childImageSharp)||void 0===n?void 0:n.gatsbyImageData,title:o,desc:s,className:"items-center text-center lg:items-start lg:text-left"}))})))),r.createElement("section",{className:"border border-primary-main rounded-2xl mb-28 px-4 py-10 mx-4 md:mx-6 lg:mx-16 xl:mx-28 2xl:px-0 max-w-7xl 2xl:mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-around"},r.createElement(p(),{className:"w-80"}),r.createElement("div",{className:"mt-16 flex flex-col items-center lg:items-start lg:mt-0"},r.createElement("h2",{className:"text-4xl font-bold text-primary-main"},v("pages.about.section-4.header-1")),r.createElement("h3",{className:"text-2xl text-neutral-900 mt-2 px-4 text-center lg:px-0"},v("pages.about.section-4.desc-1")),r.createElement(s.Link,{to:"/contact",className:"mt-5"},r.createElement(i.KM,{title:v("components.buttons.career")})))))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-65f415dcf48ea1c68a1c.js.map