(()=>{"use strict";var e,r,t,a,o={},n={};function d(e){var r=n[e];if(void 0!==r)return r.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=o,d.c=n,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,a,o]=e[l],f=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(f=!1,o<n&&(n=o));if(f){e.splice(l--,1);var c=a();void 0!==c&&(r=c)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[t,a,o]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(o,n),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({27:"33abf4a9",46:"2f0df33d",53:"935f2afb",126:"61bd8806",150:"81feceb3",233:"c88b4d8e",390:"5d8c6446",412:"10b1a2e4",420:"d750ed9e",484:"d17efaae",514:"1be78505",608:"9e4087bc",625:"832b6025",689:"32c02c06",784:"a5e90d84",807:"d2ad1d5a",851:"83ae8a45",918:"17896441"}[e]||e)+"."+{27:"530f6394",46:"a0288283",53:"bb72a734",75:"064d494d",126:"fda002e4",150:"c2e50882",233:"70b45774",390:"48e4adba",412:"34ddcac9",420:"fea22769",484:"4f37f897",514:"e986c9c9",608:"d480e299",625:"d56c4adf",667:"01059e28",689:"fbbc0437",784:"99d88c08",807:"d7cc39b0",814:"2fe6bbbe",851:"29de1bb3",918:"16f78869",955:"fcb9f91c"}[e]+".js",d.miniCssF=e=>"assets/css/styles.e9e6678a.css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},d.l=(e,r,t,o)=>{if(a[e])a[e].push(r);else{var n,f;if(void 0!==t)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var l=i[c];if(l.getAttribute("src")==e){n=l;break}}n||(f=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.src=e),a[e]=[r];var s=(r,t)=>{n.onerror=n.onload=null,clearTimeout(u);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=s.bind(null,n.onerror),n.onload=s.bind(null,n.onload),f&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/saramin_quiz/",d.gca=function(e){return e={17896441:"918","33abf4a9":"27","2f0df33d":"46","935f2afb":"53","61bd8806":"126","81feceb3":"150",c88b4d8e:"233","5d8c6446":"390","10b1a2e4":"412",d750ed9e:"420",d17efaae:"484","1be78505":"514","9e4087bc":"608","832b6025":"625","32c02c06":"689",a5e90d84:"784",d2ad1d5a:"807","83ae8a45":"851"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=d.p+d.u(r),f=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[n,f,i]=t,c=0;if(n.some((r=>0!==e[r]))){for(a in f)d.o(f,a)&&(d.m[a]=f[a]);if(i)var l=i(d)}for(r&&r(t);c<n.length;c++)o=n[c],d.o(e,o)&&e[o]&&e[o][0](),e[n[c]]=0;return d.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();