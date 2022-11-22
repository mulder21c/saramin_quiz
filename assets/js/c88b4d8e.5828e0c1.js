"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(o,".").concat(p)]||f[p]||d[p]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2952:(e,t,n)=>{n.d(t,{Eh:()=>a});n(7462),n(3366),n(7294);var r=n(3905),a=function(e){var t=e.children;return(0,r.kt)("div",{className:"feedback__correct"},(0,r.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},5264:(e,t,n)=>{n.d(t,{Tg:()=>l});n(7462),n(3366);var r=n(7294),a=n(3905),l=function(e){var t=e.term,n=e.children;return(0,a.kt)(r.Fragment,null,(0,a.kt)("dt",null," ",t," "),(0,a.kt)("dd",null," ",n," "))}},8182:(e,t,n)=>{n.d(t,{AY:()=>d});n(7462),n(3366);var r=n(7294),a=n(3905);function l(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}function i(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}var c=function(e){var t=e.option,n=e.setCheckedList,r=t.label,l=t.image,c=t.value,o=i();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:o,type:"checkbox",value:c,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,r=t.checked,a=t.value;n({checked:r,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:o,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,r||""),l&&(0,a.kt)("img",{src:l,alt:""}))))};var o=function(e){var t=e.checkExercise,n=e.feedback,r="verify-btn "+(null!==n?"verify-btn--"+(n?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:r,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var u=function(e){var t=e.feedback,n=e.answer,l=e.children,i=void 0===l?[]:l;n=Array.isArray(n)?n:[String(n)],i=i.length?i:[i];var c=null===t,o=[].concat(i).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),u=o?[].concat(i).splice(1):i,s=(0,r.useRef)();return void 0!==typeof window&&(0,r.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(s.current,{attributes:!0}),function(){e.disconnect(s.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:s,hidden:c,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,n.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&o?(0,a.kt)("div",{className:"feedback__correct"},o):"",u?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),u):"")};var s=n(5264),d=function(e){var t=e.options,n=e.answer,i=e.column,d=void 0===i?2:i,f=e.children;f=f.length?f:[f];var p=(0,r.useState)(null),m=p[0],k=p[1],v=(0,r.useState)(new Set),b=v[0],h=v[1],y=[].concat(f).filter((function(e){var t;return"Glossary"===(null==e||null==(t=e.props)?void 0:t.mdxType)}));f=[].concat(f).filter((function(e){var t;return"Glossary"!==(null==e||null==(t=e.props)?void 0:t.mdxType)}));var g=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),h(b)};return console.log(y),(0,a.kt)(r.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+d},t.map((function(e,t){return(0,a.kt)(c,{key:t,option:e,setCheckedList:g,mdxType:"Checkbox"})}))),y.length?(0,a.kt)("dl",{className:"glossary"},y.map((function(e,t){return(0,a.kt)(s.Tg,{key:t,term:e.props.term,children:e.props.children,mdxType:"Glossary"})}))):"",(0,a.kt)(o,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(n)?n:[String(n)]);k(l(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:m,mdxType:"VerifyButton"}),(0,a.kt)(u,{feedback:m,answer:n,mdxType:"Feedback"},f))}},4673:(e,t,n)=>{n.d(t,{Fm:()=>l});n(7462),n(3366);var r=n(7294),a=n(3905),l=function(e){var t=e.column,n=void 0===t?1:t,l=e.children;return(0,a.kt)(r.Fragment,null,(0,a.kt)("div",{className:"quesition-box-"+n},l))}},5057:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>f,toc:()=>p,default:()=>k});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(8182),c=(n(5264),n(2952)),o=n(4673),u=["components"],s={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"13\ubc88 \ubb38\uc81c",id:"quiz-13",slug:"/quiz/13",hide_table_of_contents:!0},d=void 0,f={unversionedId:"quiz/quiz-13",id:"quiz/quiz-13",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q13. \ub2e4\uc74c \ud654\uba74\uc5d0\uc11c \uc800\uc2dc\ub825 \ub610\ub294 \ub178\uc548\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \ub0b4\uc6a9\uc744 \uc778\uc2dd\ud558\ub294\ub370 \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/13.mdx",sourceDirName:"quiz",slug:"/quiz/13",permalink:"/saramin_quiz/quiz/13",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"13\ubc88 \ubb38\uc81c",id:"quiz-13",slug:"/quiz/13",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"12\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/12"},next:{title:"14\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/14"}},p=[{value:"Q13. \ub2e4\uc74c \ud654\uba74\uc5d0\uc11c \uc800\uc2dc\ub825 \ub610\ub294 \ub178\uc548\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \ub0b4\uc6a9\uc744 \uc778\uc2dd\ud558\ub294\ub370 \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694.",id:"q13-\ub2e4\uc74c-\ud654\uba74\uc5d0\uc11c-\uc800\uc2dc\ub825-\ub610\ub294-\ub178\uc548\uc744-\uac00\uc9c4-\uc0ac\uc6a9\uc790\uac00-\ub0b4\uc6a9\uc744-\uc778\uc2dd\ud558\ub294\ub370-\uc5b4\ub824\uc6b4-\ubd80\ubd84\uc744-\ubaa8\ub450-\uace0\ub974\uc138\uc694",children:[],level:2}],m={toc:p};function k(e){var t=e.components,s=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"q13-\ub2e4\uc74c-\ud654\uba74\uc5d0\uc11c-\uc800\uc2dc\ub825-\ub610\ub294-\ub178\uc548\uc744-\uac00\uc9c4-\uc0ac\uc6a9\uc790\uac00-\ub0b4\uc6a9\uc744-\uc778\uc2dd\ud558\ub294\ub370-\uc5b4\ub824\uc6b4-\ubd80\ubd84\uc744-\ubaa8\ub450-\uace0\ub974\uc138\uc694"},"Q13. \ub2e4\uc74c \ud654\uba74\uc5d0\uc11c \uc800\uc2dc\ub825 \ub610\ub294 \ub178\uc548\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \ub0b4\uc6a9\uc744 \uc778\uc2dd\ud558\ub294\ub370 \uc5b4\ub824\uc6b4 \ubd80\ubd84\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694."),(0,l.kt)(o.Fm,{column:2,mdxType:"QuestionBox"},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Quiz 14 - \uba85\ub3c4 \ub300\ube44 \ubcf4\uc7a5",src:n(9183).Z}))),(0,l.kt)(i.AY,{options:[{label:"1, 2, 3, 4, 5",value:1},{label:"2, 3, 4, 5",value:2},{label:"4, 5",value:3},{label:"4",value:4}],answer:3,mdxType:"ObjectiveQuiz"},(0,l.kt)(c.Eh,{mdxType:"Correct"},(0,l.kt)("p",null,"\uc800\uc2dc\ub825 \uc0ac\uc6a9\uc790\uac00 \ud65c\uc131 \uc720\uc800 \uc778\ud130\ud398\uc774\uc2a4 \ucef4\ud3ec\ub10c\ud2b8 \ubc0f \uc758\ubbf8 \uc788\ub294 \uadf8\ub798\ud53d\uc744 \uad6c\ubcc4\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c\ud558\uba70, \ud14d\uc2a4\ud2b8\uc640 \ubc30\uacbd \uc0ac\uc774\uc5d0 \ucda9\ubd84\ud55c \ub300\ube44\ub97c \uc81c\uacf5\ud558\uc5ec \uc911\uac04 \uc815\ub3c4\uc758 \uc2dc\ub825\uc744 \uac00\uc9c4 \uc0ac\ub78c\ub4e4\uc774 \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \uc81c\uacf5\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("h6",null,"\ud56d\ubaa9\ubcc4 \uba85\ub3c4\ub300\ube44 \uc124\uba85"),(0,l.kt)("ol",null,(0,l.kt)("li",null,"\ud56d\ubaa9 \uc77d\ud600\uc9c0\uac70\ub098 \uc758\ubbf8\uac00 \uc5c6\ub294 \uc544\uc774\ucf58\uc774\uba70 \uba85\ub3c4\ub300\ube44 \uccb4\ud06c\ud560 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4"),(0,l.kt)("li",null,"\ud56d\ubaa9 \uba85\ub3c4\ub300\ube44 10.44(O)"),(0,l.kt)("li",null,"\ud56d\ubaa9 \uba85\ub3c4\ub300\ube44 4.1(X)"),(0,l.kt)("li",null,"\ud56d\ubaa9 \uc544\uc774\ucf58 \uba85\ub3c4\ub300\ube44 2.62(X), \uae00\uc790 3.18(X)"),(0,l.kt)("li",null,"\ud56d\ubaa9 border \uba85\ub3c4\ub300\ube44 1.37(X), \uae00\uc790 5.76(O)"))),(0,l.kt)("ul",null,(0,l.kt)("li",null,"\ub0ae\uc740 \ub300\ube44\uc758 \ucf58\ud150\uce20\ub294 \uc800\uc2dc\ub825, \uc0c9\uc57d, \ub178\uc548 \ub4f1\uc758 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uad6c\ubcc4\uc744 \uc5b4\ub835\uac8c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("li",null,"\ucee8\ud2b8\ub864\uc774 \ubc30\uacbd\uc774\ub098 \uc8fc\ubcc0 \ucf58\ud150\uce20\uc640 \ub0ae\uc740 \ub300\ube44\ub97c \uc774\ub8e8\uace0 \uc788\uc744 \uacbd\uc6b0 \uc800\uc2dc\ub825 \uc0ac\uc6a9\uc790\ub294 \ucee8\ud2b8\ub864\uc784\uc744 \uad6c\ubcc4\ud558\uae30 \uc5b4\ub824\uc6cc \uc778\uc9c0\ud560 \uc218 \uc5c6\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("li",null,"\uc77c\ubd80 \uc800\uc2dc\ub825 \uc0ac\uc6a9\uc790\ub294 \ubc30\uacbd\uc0c9\uacfc \ub0ae\uc740 \ub300\ube44\ub97c \uc774\ub8e8\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc778\uc2dd\ud558\ub294\ub370 \uc5b4\ub824\uc6c0\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc5f0\uad00 \uc9c0\uce68 2\uac00\uc9c0",(0,l.kt)("a",{href:"https://sri-fe1.notion.site/a70d0cf66d7f48e68307f1749614f65c"},"\ud83d\udd0e \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30"),(0,l.kt)("a",{href:"https://sri-fe1.notion.site/a13805c62b74442abe8e0e6b8d48abb5"},"\ud83d\udd0e \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30"))))}k.isMDXComponent=!0},9183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quiz-contrast-25e501fd0716a9d2404ff02d3665cba7.png"}}]);