(()=>{"use strict";var e,r,t,o,a={},n={};function f(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return a[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=a,f.c=n,e=[],f.O=(r,t,o,a)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,o,a]=e[l],i=!0,c=0;c<t.length;c++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](t[c])))?t.splice(c--,1):(i=!1,a<n&&(n=a));if(i){e.splice(l--,1);var d=o();void 0!==d&&(r=d)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,f.d(a,n),a},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({27:"33abf4a9",46:"2f0df33d",53:"935f2afb",150:"81feceb3",484:"d17efaae",514:"1be78505",592:"common",608:"9e4087bc",625:"832b6025",851:"83ae8a45",918:"17896441"}[e]||e)+"."+{27:"068bb741",46:"c94bcf96",53:"53e2da88",75:"064d494d",150:"3f7df48a",484:"4f37f897",514:"e986c9c9",592:"b38a811c",608:"d480e299",625:"d56c4adf",851:"29de1bb3",918:"16f78869",955:"36af1ad8"}[e]+".js",f.miniCssF=e=>"assets/css/styles.aee86dc7.css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},f.l=(e,r,t,a)=>{if(o[e])o[e].push(r);else{var n,i;if(void 0!==t)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var l=c[d];if(l.getAttribute("src")==e){n=l;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.src=e),o[e]=[r];var s=(r,t)=>{n.onerror=n.onload=null,clearTimeout(u);var a=o[e];if(delete o[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(t))),r)return r(t)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),i&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/saramin_quiz/",f.gca=function(e){return e={17896441:"918","33abf4a9":"27","2f0df33d":"46","935f2afb":"53","81feceb3":"150",d17efaae:"484","1be78505":"514",common:"592","9e4087bc":"608","832b6025":"625","83ae8a45":"851"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=f.p+f.u(r),i=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[n,i,c]=t,d=0;if(n.some((r=>0!==e[r]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(c)var l=c(f)}for(r&&r(t);d<n.length;d++)a=n[d],f.o(e,a)&&e[a]&&e[a][0](),e[n[d]]=0;return f.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();