!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var i,r,a,u,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function w(e){return c=e,f=setTimeout(T,t),d?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function T(){var e=b();if(O(e))return S(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function S(e){return f=void 0,m&&i?p(e):(i=r=void 0,u)}function h(){var e=b(),n=O(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(T,t),p(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},h.flush=function(){return void 0===f?u:S(b())},h}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form"),O=(document.querySelector("button"),{email:"",message:""}),T=JSON.parse(localStorage.getItem("feedback-form-state"));window.addEventListener("load",(function(){T&&(w.email.value=T.email,w.message.value=T.message)})),w.addEventListener("input",e(t)((function(){O.email=w.email.value,O.message=w.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),w.addEventListener("submit",(function(e){"BUTTON"===e.target.nodeName&&(e.preventDefault(),localStorage.removeItem("feedback-form-state"),console.log(T))}))}();
//# sourceMappingURL=03-feedback.4c12f5f9.js.map