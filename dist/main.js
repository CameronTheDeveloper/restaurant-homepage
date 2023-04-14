(()=>{"use strict";var e={996:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,"#container {\n    grid-template-rows: 1fr 8fr;\n}\n\n#content {\n    font-style: italic;\n    height: 100vh;\n    font-size: 3rem;\n    justify-items: center;\n    justify-content: start;\n    align-items: center;\n    grid-template-rows: 2fr repeat(3, 1fr) 10fr;\n}\n\n.name {\n    font-size: 4.4rem;\n    font-weight: 700;\n}",""]);const s=a},771:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,"body {\n    font-family: 'Times New Roman', Times, serif;\n    background-color: #59d141;\n}\n\n#container {\n    display: grid;\n    grid-template-rows: 1fr 20fr;\n}\n\n#content {\n    height: 125vh;\n    display: grid;\n    justify-content: center;\n}\n\n#buttons {\n    padding: 20px;\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    gap: 32px;\n}\n\n#buttons button {\n    color: rgb(0, 0, 0);\n    cursor: pointer;\n    width: 155px;\n    padding: 12px;\n    border-radius: 12px;\n    font-size: 1.3rem;\n    background-color: rgb(46 172 46);\n    border: 1px solid black;\n    font-weight: 900;\n}\n\n#buttons button:hover {\n    color: rgb(255, 255, 255);\n    border-color: rgb(184, 184, 184);\n    font-weight: 700;\n}",""]);const s=a},195:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,".title {\n    font-size: 3rem;\n    font-weight: bold;\n    text-decoration: underline;\n    margin-bottom: 12px;\n}",""]);const s=a},188:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([e.id,"* {\n    margin: 0;\n}\n\n#content {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 8fr 1fr;\n}\n\n.welcome-title,\n.welcome-body {\n    font-style: italic;\n}\n\n.welcome-title {\n    padding: 24px;\n    font-size: 5rem;\n    font-weight: 700;\n    justify-self: center;\n    grid-row: 1/2;\n}\n\n.welcome-img {\n    justify-self: center;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    grid-row: 2/3;\n}\n\n.welcome-img img {\n    height: 100%;\n    width: 100%;\n}\n\n.welcome-body {\n    width: clamp(200px, 170vh, 2000px);\n    font-size: 3.5rem;\n    margin: 32px;\n    grid-row: 3/4;\n}\n\n.food-images {\n    margin: 100px;\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    height: auto;\n    width: clamp(200px, 100%, 1300px);\n}\n\n.food-images img {\n    margin: 32px;\n    border-radius: 16px;\n    height: auto;\n    width: clamp(250px, 100%, 1300px);\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=t(o[a]);n[s].references--}for(var c=r(e,i),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),i=t.n(r),o=t(569),a=t.n(o),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(771),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"e4632e40d8a38587c2f8.png",g=t.p+"814d39a93fcc1c770fa6.png",v=t.p+"b377d3eb4d45acf4383d.png",y=t.p+"2d03fb715063f76679f6.png";var b=t(188),w={};w.styleTagTransform=u(),w.setAttributes=c(),w.insert=a().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=l(),n()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;const x=new Image,T=new Image,L=new Image,C=new Image;x.src=h,T.src=y,L.src=v,C.src=g;const E=e=>{const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("p"),i=document.createElement("div");e.innerHTML="",n.classList.add("welcome-title"),t.classList.add("welcome-img"),r.classList.add("welcome-body"),i.classList.add("food-images"),n.innerHTML="Welcome to Nature Restaurant",r.innerHTML="Dine with us at our finest location to experience ambient fine-dining atmosphere and the wonderful flavors of nature in our signature dishes.",t.appendChild(x),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(i),i.appendChild(T),i.appendChild(C),i.appendChild(L)};var M=t(195),Z={};Z.styleTagTransform=u(),Z.setAttributes=c(),Z.insert=a().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=l(),n()(M.Z,Z),M.Z&&M.Z.locals&&M.Z.locals;const S=[H("Nature Pizza",12.99),H("Nature Burger",11.99)];function H(e,n){return{displayFood:t=>{const r=document.createElement("div");r.classList.add("food-item"),r.innerHTML=e+" -- $"+n,t.appendChild(r)}}}var j=t(996),I={};I.styleTagTransform=u(),I.setAttributes=c(),I.insert=a().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=l(),n()(j.Z,I),j.Z&&j.Z.locals&&j.Z.locals;const A=document.querySelector("#content"),N=document.querySelector("#buttons"),P=document.createElement("button"),k=document.createElement("button"),z=document.createElement("button");P.innerHTML="Home",k.innerHTML="Menu",z.innerHTML="Contact Info",N.appendChild(P),N.appendChild(k),N.appendChild(z),E(A),P.addEventListener("click",(()=>{E(A)})),k.addEventListener("click",(()=>{(e=>{const n=document.createElement("div"),t=document.createElement("div");e.innerHTML="",t.innerHTML="Kitchen Specials",n.classList.add("specials"),t.classList.add("title","specials"),n.appendChild(t),e.appendChild(n);for(let e=0;e<S.length;e++)S[e].displayFood(n)})(A)})),z.addEventListener("click",(()=>{(e=>{const n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");e.innerHTML="",n.classList.add("name"),t.classList.add("phone-number"),r.classList.add("schedule"),i.classList.add("address"),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(i),n.innerHTML="Nature Restaurant",t.innerHTML="(000)-000-0000",r.innerHTML="Monday-Friday -- 1:00pm-11:00pm",i.innerHTML="123 Main Street, Suite 456 Meadowbrook, CA 98765"})(A)}))})()})();