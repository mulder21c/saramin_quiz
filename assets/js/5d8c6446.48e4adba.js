"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8182:(e,t,r)=>{r.d(t,{AY:()=>u});r(7462),r(3366);var n=r(7294),a=r(3905);function i(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}function l(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}var c=function(e){var t=e.option,r=e.setCheckedList,n=t.label,l=t.image,c=t.value,o=i();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:o,type:"checkbox",value:c,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:o,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),l&&(0,a.kt)("img",{src:l,alt:""}))))};var o=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var s=function(e){var t=e.feedback,r=e.answer,n=e.children;r=Array.isArray(r)?r:[String(r)];var i=null===t,l=n=n&&n.length?n:[n],c=l[0],o=l.slice(1);return(0,a.kt)("div",{hidden:i,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&c?(0,a.kt)("div",{className:"feedback__correct"},c):"",o?(0,a.kt)("div",{className:"feedback__desc"},o):"")};var u=function(e){var t=e.options,r=e.answer,i=e.column,u=void 0===i?2:i,f=e.children,p=(0,n.useState)(null),d=p[0],m=p[1],v=(0,n.useState)(new Set),k=v[0],b=v[1],g=function(e){var t=e.value;e.checked?k.add(t):k.delete(t),b(k)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+u},t.map((function(e,t){return(0,a.kt)(c,{key:t,option:e,setCheckedList:g,mdxType:"Checkbox"})}))),(0,a.kt)(o,{checkExercise:function(){if(0!==k.size){var e=new Set(Array.isArray(r)?r:[String(r)]);m(l(e,k))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:d,mdxType:"VerifyButton"}),(0,a.kt)(s,{feedback:d,answer:r,mdxType:"Feedback"},f))}},5722:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>u,toc:()=>f,default:()=>d});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(8182),c=["components"],o={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"Quiz 11",id:"quiz-11",slug:"/quiz/11",hide_table_of_contents:!0},s=void 0,u={unversionedId:"quiz/quiz-11",id:"quiz/quiz-11",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q11. \ub2e4\uc74c \uc544\ub798 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uace0 \uc77d\uae30 \uc21c\uc11c\uc640 \ucf54\ub529 \uc21c\uc11c\uc5d0 \ub300\ud574\uc11c \uc633\ubc14\ub978 \uc21c\uc11c\ub97c \ucc3e\uc73c\uc138\uc694",source:"@site/../docs/quiz/11.mdx",sourceDirName:"quiz",slug:"/quiz/11",permalink:"/saramin_quiz/quiz/11",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"Quiz 11",id:"quiz-11",slug:"/quiz/11",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Quiz 10",permalink:"/saramin_quiz/quiz/10"},next:{title:"Quiz 12",permalink:"/saramin_quiz/quiz/12"}},f=[{value:"Q11. \ub2e4\uc74c \uc544\ub798 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uace0 \uc77d\uae30 \uc21c\uc11c\uc640 \ucf54\ub529 \uc21c\uc11c\uc5d0 \ub300\ud574\uc11c \uc633\ubc14\ub978 \uc21c\uc11c\ub97c \ucc3e\uc73c\uc138\uc694",id:"q11-\ub2e4\uc74c-\uc544\ub798-\uc774\ubbf8\uc9c0\ub97c-\ubcf4\uace0-\uc77d\uae30-\uc21c\uc11c\uc640-\ucf54\ub529-\uc21c\uc11c\uc5d0-\ub300\ud574\uc11c-\uc633\ubc14\ub978-\uc21c\uc11c\ub97c-\ucc3e\uc73c\uc138\uc694",children:[],level:2}],p={toc:f};function d(e){var t=e.components,o=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"q11-\ub2e4\uc74c-\uc544\ub798-\uc774\ubbf8\uc9c0\ub97c-\ubcf4\uace0-\uc77d\uae30-\uc21c\uc11c\uc640-\ucf54\ub529-\uc21c\uc11c\uc5d0-\ub300\ud574\uc11c-\uc633\ubc14\ub978-\uc21c\uc11c\ub97c-\ucc3e\uc73c\uc138\uc694"},"Q11. \ub2e4\uc74c \uc544\ub798 \uc774\ubbf8\uc9c0\ub97c \ubcf4\uace0 \uc77d\uae30 \uc21c\uc11c\uc640 \ucf54\ub529 \uc21c\uc11c\uc5d0 \ub300\ud574\uc11c \uc633\ubc14\ub978 \uc21c\uc11c\ub97c \ucc3e\uc73c\uc138\uc694"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"11",src:r(7395).Z})),(0,i.kt)(l.AY,{options:[{label:"1=>2=>3=>4",image:"",value:1},{label:"1=>3=>2=>4",image:"",value:2},{label:"1=>3=>4=>2",image:"",value:3},{label:"1=>4=>3=>2",image:"",value:4}],answer:3,mdxType:"ObjectiveQuiz"},(0,i.kt)("div",null,(0,i.kt)("p",null,"\uc815\ub2f5: ",(0,i.kt)("strong",null,"3\ubc88")),(0,i.kt)("p",null,"'\uc774\ub825\uc11c, \uc774\uc81c \ubaa8\ubc14\uc77c\uc5d0\uc11c \uc27d\uac8c \uc4f0\uc790! \uc0c8\ub85c\uc6cc\uc9c4 \ubaa8\ubc14\uc77c \uc774\ub825\uc11c \ud655\uc778\ud558\uae30' \uc774\ubbf8\uc9c0\ub97c \ud1b5\ud574 \uc2dc\uac01\uc801\uc73c\ub85c \uc804\ub2ec\ub418\ub294 \uc815\ubcf4\uac00 \ub3d9\ub4f1\ud55c \uc218\uc900\uc758 \ub300\uccb4 \ud14d\uc2a4\ud2b8\ub85c \uc81c\uacf5\ub418\uc5b4, \ub204\uad6c\ub098 \uc774\ubbf8\uc9c0\uac00 \uc804\ub2ec\ud558\ub294 \uc815\ubcf4\ub97c \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}d.isMDXComponent=!0},7395:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/quiz-dir-2d2b0090e3f3b472f6a3aa1d8f8997a3.jpg"}}]);