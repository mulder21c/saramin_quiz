(()=>{"use strict";var e,r,t,o,n={},a={};function f(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,f),t.loaded=!0,t.exports}f.m=n,f.c=a,e=[],f.O=(r,t,o,n)=>{if(!t){var a=1/0;for(l=0;l<e.length;l++){for(var[t,o,n]=e[l],i=!0,d=0;d<t.length;d++)(!1&n||a>=n)&&Object.keys(f.O).every((e=>f.O[e](t[d])))?t.splice(d--,1):(i=!1,n<a&&(a=n));if(i){e.splice(l--,1);var c=o();void 0!==c&&(r=c)}}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,o,n]},f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&o&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,f.d(n,a),n},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"assets/js/"+({27:"33abf4a9",46:"2f0df33d",53:"935f2afb",150:"81feceb3",484:"d17efaae",514:"1be78505",592:"common",608:"9e4087bc",625:"832b6025",851:"83ae8a45",918:"17896441"}[e]||e)+"."+{27:"b64c6082",46:"255b8b41",53:"53e2da88",75:"064d494d",150:"5db078f7",484:"4f37f897",514:"e986c9c9",592:"b38a811c",608:"d480e299",625:"d56c4adf",851:"29de1bb3",918:"16f78869",955:"36af1ad8"}[e]+".js",f.miniCssF=e=>"assets/css/styles.aee86dc7.css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},f.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var a,i;if(void 0!==t)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var l=d[c];if(l.getAttribute("src")==e){a=l;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.src=e),o[e]=[r];var s=(r,t)=>{a.onerror=a.onload=null,clearTimeout(u);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(t))),r)return r(t)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),i&&document.head.appendChild(a)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/saramin_quiz/",f.gca=function(e){return e={17896441:"918","33abf4a9":"27","2f0df33d":"46","935f2afb":"53","81feceb3":"150",d17efaae:"484","1be78505":"514",common:"592","9e4087bc":"608","832b6025":"625","83ae8a45":"851"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}},f.O.j=r=>0===e[r];var r=(r,t)=>{var o,n,[a,i,d]=t,c=0;if(a.some((r=>0!==e[r]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(d)var l=d(f)}for(r&&r(t);c<a.length;c++)n=a[c],f.o(e,n)&&e[n]&&e[n][0](),e[a[c]]=0;return f.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();