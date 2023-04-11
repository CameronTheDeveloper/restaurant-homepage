(()=>{"use strict";var e={996:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"#container {\n    grid-template-rows: 1fr 8fr;\n}\n\n#content {\n    font-size: 2.5rem;\n    justify-items: center;\n    justify-content: start;\n    align-items: center;\n    grid-template-rows: 3fr 3fr 3fr 2fr;\n}",""]);const s=a},771:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n    font-family: 'Times New Roman', Times, serif;\n    background-color: #439d31;\n}\n\n#container {\n    display: grid;\n    grid-template-rows: 1fr 12fr;\n}\n\n#content {\n    height: 125vh;\n    display: grid;\n    justify-content: center;\n}\n\n#buttons {\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    gap: 16px;\n}\n\nbutton {\n    cursor: pointer;\n    padding: 16px;\n    border-radius: 12px;\n    font-size: 1rem;\n    background-color: rgb(5, 119, 5);\n    border: 0;\n}",""]);const s=a},188:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"* {\n    margin: 0;\n}\n\n#content {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 8fr 1fr;\n}\n\n.welcome-title {\n    font-size: 4.8rem;\n    font-weight: 700;\n    justify-self: center;\n    grid-row: 1/2;\n}\n\n.welcome-img {\n    justify-self: center;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    grid-row: 2/3;\n}\n\n.welcome-img img {\n    height: 100%;\n    width: 100%;\n}\n\n.welcome-body {\n    font-size: 3rem;\n    margin: 32px;\n    grid-row: 3/4;\n}\n\n.food-images {\n    margin: 100px;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    width: 75%;\n}\n\n.food-images img {\n    width: 90%;\n    margin: 32px;\n    border-radius: 16px;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(771),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"e4632e40d8a38587c2f8.png",g=t.p+"814d39a93fcc1c770fa6.png",v=t.p+"b377d3eb4d45acf4383d.png",y=t.p+"2d03fb715063f76679f6.png";var b=t(188),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=a().bind(null,"head"),w.domAPI=o(),w.insertStyleElement=l(),n()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;const T=new Image,x=new Image,C=new Image,L=new Image;T.src=h,x.src=y,C.src=v,L.src=g;const E=e=>{const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("p"),o=document.createElement("div");n.classList.add("welcome-title"),t.classList.add("welcome-img"),r.classList.add("welcome-body"),o.classList.add("food-images"),n.innerHTML="Welcome to Nature Restaurant",r.innerHTML="Dine with us at one of our finest locations to experience ambient fine-dining atmosphere and the wonderful flavors of nature in our signature dishes.",t.appendChild(T),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o),o.appendChild(x),o.appendChild(L),o.appendChild(C)};var M=t(996),S={};S.styleTagTransform=p(),S.setAttributes=c(),S.insert=a().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=l(),n()(M.Z,S),M.Z&&M.Z.locals&&M.Z.locals;const Z=document.querySelector("#content"),j=document.querySelector("#buttons"),H=document.createElement("button"),I=document.createElement("button");H.innerHTML="Home",I.innerHTML="Contact Info",j.appendChild(H),j.appendChild(I),E(Z),H.addEventListener("click",(()=>{Z.innerHTML="",E(Z)})),I.addEventListener("click",(()=>{Z.innerHTML="",(e=>{e.innerHTML="";const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");n.classList.add("owner-name"),t.classList.add("phone-number"),r.classList.add("address"),e.appendChild(n),e.appendChild(t),e.appendChild(r),n.innerHTML="Nature Restaurant",t.innerHTML="(000)-000-0000",r.innerHTML="123 Main Street, Suite 456 Meadowbrook, CA 98765"})(Z)}))})()})();