"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.d(t,{Eh:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("div",{className:"feedback__correct"},(0,n.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},5264:(e,t,r)=>{r.d(t,{Tg:()=>l});r(7462),r(3366);var n=r(7294),a=r(3905),l=function(e){var t=e.term,r=e.children;return(0,a.kt)(n.Fragment,null,(0,a.kt)("dt",null," ",t," "),(0,a.kt)("dd",null," ",r," "))}},8182:(e,t,r)=>{r.d(t,{AY:()=>f});r(7462),r(3366);var n=r(7294),a=r(3905);function l(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}function i(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}var c=function(e){var t=e.option,r=e.setCheckedList,n=t.label,l=t.image,c=t.value,o=i();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:o,type:"checkbox",value:c,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:o,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),l&&(0,a.kt)("img",{src:l,alt:""}))))};var o=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var s=function(e){var t=e.feedback,r=e.answer,l=e.children,i=void 0===l?[]:l;r=Array.isArray(r)?r:[String(r)],i=i.length?i:[i];var c=null===t,o=[].concat(i).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),s=o?[].concat(i).splice(1):i,u=(0,n.useRef)();return void 0!==typeof window&&(0,n.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(u.current,{attributes:!0}),function(){e.disconnect(u.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:u,hidden:c,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&o?(0,a.kt)("div",{className:"feedback__correct"},o):"",s?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),s):"")};var u=r(5264),f=function(e){var t=e.options,r=e.answer,i=e.column,f=void 0===i?2:i,d=e.children;d=d.length?d:[d];var p=(0,n.useState)(null),m=p[0],v=p[1],k=(0,n.useState)(new Set),b=k[0],h=k[1],y=[].concat(d).filter((function(e){var t;return"Glossary"===(null==e||null==(t=e.props)?void 0:t.mdxType)}));d=[].concat(d).filter((function(e){var t;return"Glossary"!==(null==e||null==(t=e.props)?void 0:t.mdxType)}));var g=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),h(b)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+f},t.map((function(e,t){return(0,a.kt)(c,{key:t,option:e,setCheckedList:g,mdxType:"Checkbox"})}))),y.length?(0,a.kt)("dl",{className:"glossary"},y.map((function(e,t){return(0,a.kt)(u.Tg,{key:t,term:e.props.term,children:e.props.children,mdxType:"Glossary"})}))):"",(0,a.kt)(o,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(r)?r:[String(r)]);v(l(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:m,mdxType:"VerifyButton"}),(0,a.kt)(s,{feedback:m,answer:r,mdxType:"Feedback"},d))}},9314:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>f,toc:()=>d,default:()=>m});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=r(8182),c=(r(5264),r(2952)),o=["components"],s={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"2\ubc88 \ubb38\uc81c",id:"quiz-2",slug:"/quiz/2",hide_table_of_contents:!0},u=void 0,f={unversionedId:"quiz/quiz-2",id:"quiz/quiz-2",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q2. \ub2e4\uc74c \uc911 \uc811\uadfc\uc131\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/2.mdx",sourceDirName:"quiz",slug:"/quiz/2",permalink:"/saramin_quiz/quiz/2",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"2\ubc88 \ubb38\uc81c",id:"quiz-2",slug:"/quiz/2",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"1\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/1"},next:{title:"3\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/3"}},d=[{value:"Q2. \ub2e4\uc74c \uc911 \uc811\uadfc\uc131\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694.",id:"q2-\ub2e4\uc74c-\uc911-\uc811\uadfc\uc131\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\ubaa8\ub450-\uace0\ub974\uc138\uc694",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"q2-\ub2e4\uc74c-\uc911-\uc811\uadfc\uc131\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\ubaa8\ub450-\uace0\ub974\uc138\uc694"},"Q2. \ub2e4\uc74c \uc911 \uc811\uadfc\uc131\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \ubaa8\ub450 \uace0\ub974\uc138\uc694."),(0,l.kt)(i.AY,{column:1,options:[{label:"\ubc95\uc73c\ub85c \ubcf4\uc7a5 \ub41c \uc758\ubb34\uc0ac\ud56d\uc73c\ub85c, \uc811\uadfc\uc131\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544 \ucc28\ubcc4\ud589\uc704\ub85c \uc778\uc815\ub418\uba74 \ubc95\uc801 \ucc45\uc784\uc744 \ubb3c\uc744 \uc218 \uc788\ub2e4.",value:1},{label:"\uc7a5\uc560\uc778 \uc0ac\uc6a9\uc790\uac00 \ub9e4\uc6b0 \uc801\uc744 \uacbd\uc6b0(ex. \uc804\uccb4 \uc0ac\uc6a9\uc790\uc758 2% \ubbf8\ub9cc) \uc811\uadfc\uc131\uc774 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc544\ub3c4 \uad1c\ucc2e\ub2e4.",value:2},{label:"\uc7a5\uc560\uc778 \uc0ac\uc6a9\uc790\uac00 \uc804\ud600 \uc5c6\uc73c\uba74 \uc811\uadfc\uc131\uc744 \uace0\ub824\ud558\uc9c0 \uc54a\uc544\ub3c4 \uad1c\ucc2e\ub2e4.",value:3},{label:"\uc811\uadfc\uc131\uc774 \uc81c\uacf5\ub418\ub294 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4 \uc218 \uc788\ub3c4\ub85d \uad6d\uac00\uc801\uc73c\ub85c \uacf5\uc778 \ub41c \uad6d\uac00\ud45c\uc900 \uae30\uc220 \uac00\uc774\ub4dc\uac00 \uc874\uc7ac\ud55c\ub2e4.",value:4}],answer:[2,3],mdxType:"ObjectiveQuiz"},(0,l.kt)(c.Eh,{mdxType:"Correct"},(0,l.kt)("p",null,"2. \uc7a5\uc560\uc778 \uc0ac\uc6a9\uc790\uac00 \ub9e4\uc6b0 \uc801\ub2e4\ud558\ub354\ub77c\ub3c4 \uc811\uadfc\uc131\uc740 \uc5ec\uc804\ud788 \uc81c\uacf5\ub418\uc5b4\uc57c \ud558\uba70, \uc811\uadfc\uc131\uc774 \uc694\uad6c\ub418\ub294 \uc0ac\uc6a9\uc790\uac00 \uc801\uae30 \ub54c\ubb38\uc5d0 \uc811\uadfc\uc131\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4\ub294 \uac83\uc740 \uc758\ub3c4\uc801\uc778 \ucc28\ubcc4 \ud589\uc704\uc5d0 \ud574\ub2f9\ud558\uac8c \ub429\ub2c8\ub2e4. \ud83d\ude45\u200d\u2642\ufe0f\ud83d\ude45\u200d\u2640\ufe0f"),(0,l.kt)("p",null,"3. \uc7a5\uc560\uc778 \uc0ac\uc6a9\uc790\uac00 \uc5c6\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \uc7a5\uc560\uc778\uc774 \uc0ac\uc6a9\ud558\uae30\uc5d0 \ub9e4\uc6b0 \ubd88\ud3b8\ud558\uac70\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\uc11c \uc0ac\uc6a9\uc790\uac00 \uc5c6\ub294 \uac83\uc740 \uc544\ub2d0\uae4c\uc694? \ud83d\ude44 ",(0,l.kt)("br",null),"\uc811\uadfc\uc131\uc740 \uc601\uad6c \uc7a5\uc560\ub97c \uac00\uc9c4 \uc7a5\uc560\uc778 \ubfd0 \uc544\ub2c8\ub77c \uc0ac\uace0 \ub4f1\uc73c\ub85c \uc778\ud55c \uc77c\uc2dc\uc801 \uc7a5\uc560\ub97c \uac00\uc9c0\ub294 \uc0ac\uc6a9\uc790, \ub178\ud654, \ud658\uacbd\uc801 \uc694\uc778\uc73c\ub85c \uc778\ud574 \uacaa\ub294 \uc7a5\uc560 \ub4f1\uae4c\uc9c0\ub3c4 \ubaa8\ub450 \ud3ec\ud568\ud558\ubbc0\ub85c \uacb0\uad6d \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uac00 \uc811\uadfc\uc131\uc744 \uc81c\uacf5 \ubc1b\uc544\uc57c \ud558\ub294 \ub300\uc0c1\uc774 \ub429\ub2c8\ub2e4. ",(0,l.kt)("br",null),"\uc811\uadfc\uc131\uc774 \uc798 \uace0\ub824\ub41c \uc11c\ube44\uc2a4\uc77c \uc218\ub85d \uc7a5\uc560\uc778 \ubfd0 \uc544\ub2c8\ub77c \uc7a5\uc560\ub97c \uacaa\uc9c0 \uc54a\ub294 \ubaa8\ub4e0 \uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc811\uadfc\ud558\uace0 \uc774\ud574\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc811\uadfc\uc131\uc740 '\uc7a5\uc560\uc778\ucc28\ubcc4\uae08\uc9c0 \ubc0f \uad8c\ub9ac\uad6c\uc81c \ub4f1\uc5d0 \uad00\ud55c \ubc95\ub960' \ubc0f '\uc9c0\ub2a5\uc815\ubcf4\ud654 \uae30\ubcf8\ubc95' \ub4f1\uc5d0 \uc758\ud574 \ubcf4\uc7a5\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc811\uadfc \uac00\ub2a5\ud55c \uae30\uc220 \uc81c\uacf5\uc744 \uc704\ud574 \ud55c\uad6d \ud45c\uc900\uc778 '\ud55c\uad6d\ud615 \uc6f9 \ucf58\ud150\uce20 \uc811\uadfc\uc131 \uc9c0\uce68', '\ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf58\ud150\uce20 \uc811\uadfc\uc131 \uc9c0\uce68', '\uacf5\uacf5\ub2e8\ub9d0\uae30 \uc811\uadfc\uc131 \uac00\uc774\ub4dc\ub77c\uc778' \ub4f1\uc774 \uad6d\uac00\ud45c\uc900\uc73c\ub85c \uc81c\uacf5\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("a",{href:"https://sri-fe1.notion.site/1-2-cdd5fb99e685404b86ff2a2c04f62e99"},"\ud83d\udd0e \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74?")))}m.isMDXComponent=!0}}]);