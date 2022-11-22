"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.d(t,{Eh:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("div",{className:"feedback__correct"},(0,n.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},6656:(e,t,r)=>{r.d(t,{EQ:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("figure",{className:"figurebox"},t)}},5264:(e,t,r)=>{r.d(t,{Tg:()=>i});r(7462),r(3366);var n=r(7294),a=r(3905),i=function(e){var t=e.term,r=e.children;return(0,a.kt)(n.Fragment,null,(0,a.kt)("dt",null," ",t," "),(0,a.kt)("dd",null," ",r," "))}},8182:(e,t,r)=>{r.d(t,{AY:()=>f});r(7462),r(3366);var n=r(7294),a=r(3905);function i(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}function l(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}var c=function(e){var t=e.option,r=e.setCheckedList,n=t.label,i=t.image,c=t.value,o=l();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:o,type:"checkbox",value:c,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:o,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),i&&(0,a.kt)("img",{src:i,alt:""}))))};var o=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var u=function(e){var t=e.feedback,r=e.answer,i=e.children,l=void 0===i?[]:i;r=Array.isArray(r)?r:[String(r)],l=l.length?l:[l];var c=null===t,o=[].concat(l).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),u=o?[].concat(l).splice(1):l,s=(0,n.useRef)();return void 0!==typeof window&&(0,n.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(s.current,{attributes:!0}),function(){e.disconnect(s.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:s,hidden:c,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&o?(0,a.kt)("div",{className:"feedback__correct"},o):"",u?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),u):"")};var s=r(5264),f=function(e){var t=e.options,r=e.answer,l=e.column,f=void 0===l?2:l,d=e.children;d=d.length?d:[d];var p=(0,n.useState)(null),m=p[0],v=p[1],k=(0,n.useState)(new Set),b=k[0],h=k[1],y=[].concat(d).filter((function(e){var t;return"Glossary"===(null==e||null==(t=e.props)?void 0:t.mdxType)}));d=[].concat(d).filter((function(e){var t;return"Glossary"!==(null==e||null==(t=e.props)?void 0:t.mdxType)}));var g=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),h(b)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+f},t.map((function(e,t){return(0,a.kt)(c,{key:t,option:e,setCheckedList:g,mdxType:"Checkbox"})}))),y.length?(0,a.kt)("dl",{className:"glossary"},y.map((function(e,t){return(0,a.kt)(s.Tg,{key:t,term:e.props.term,children:e.props.children,mdxType:"Glossary"})}))):"",(0,a.kt)(o,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(r)?r:[String(r)]);v(i(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:m,mdxType:"VerifyButton"}),(0,a.kt)(u,{feedback:m,answer:r,mdxType:"Feedback"},d))}},5722:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>f,metadata:()=>d,toc:()=>p,default:()=>v});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(8182),c=(r(5264),r(2952)),o=r(6656),u=["components"],s={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"11\ubc88 \ubb38\uc81c",id:"quiz-11",slug:"/quiz/11",hide_table_of_contents:!0},f=void 0,d={unversionedId:"quiz/quiz-11",id:"quiz/quiz-11",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q11. \uc0c9\uac01 \uc774\uc0c1 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc778\uc2dd\ud558\uae30 \uc5b4\ub824\uc6b4 \ud654\uba74\uc785\ub2c8\ub2e4. \uc774\uc720\ub85c \uc62c\ubc14\ub978 \uac83\uc744 \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/11.mdx",sourceDirName:"quiz",slug:"/quiz/11",permalink:"/saramin_quiz/quiz/11",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"11\ubc88 \ubb38\uc81c",id:"quiz-11",slug:"/quiz/11",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"10\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/10"},next:{title:"12\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/12"}},p=[{value:"Q11. \uc0c9\uac01 \uc774\uc0c1 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc778\uc2dd\ud558\uae30 \uc5b4\ub824\uc6b4 \ud654\uba74\uc785\ub2c8\ub2e4. \uc774\uc720\ub85c \uc62c\ubc14\ub978 \uac83\uc744 \uace0\ub974\uc138\uc694.",id:"q11-\uc0c9\uac01-\uc774\uc0c1-\uc7a5\uc560\ub97c-\uac00\uc9c4-\uc0ac\uc6a9\uc790\uac00-\uc778\uc2dd\ud558\uae30-\uc5b4\ub824\uc6b4-\ud654\uba74\uc785\ub2c8\ub2e4-\uc774\uc720\ub85c-\uc62c\ubc14\ub978-\uac83\uc744-\uace0\ub974\uc138\uc694",children:[],level:2}],m={toc:p};function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"q11-\uc0c9\uac01-\uc774\uc0c1-\uc7a5\uc560\ub97c-\uac00\uc9c4-\uc0ac\uc6a9\uc790\uac00-\uc778\uc2dd\ud558\uae30-\uc5b4\ub824\uc6b4-\ud654\uba74\uc785\ub2c8\ub2e4-\uc774\uc720\ub85c-\uc62c\ubc14\ub978-\uac83\uc744-\uace0\ub974\uc138\uc694"},"Q11. \uc0c9\uac01 \uc774\uc0c1 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\uac00 \uc778\uc2dd\ud558\uae30 \uc5b4\ub824\uc6b4 \ud654\uba74\uc785\ub2c8\ub2e4. \uc774\uc720\ub85c \uc62c\ubc14\ub978 \uac83\uc744 \uace0\ub974\uc138\uc694."),(0,i.kt)(o.EQ,{mdxType:"FigureBox"},(0,i.kt)("img",{src:"../img/a11y/quiz-color.png",alt:""})),(0,i.kt)(l.AY,{options:[{label:"\ubc30\uacbd\uc0c9\uacfc \uae00\uc790\uc0c9\uc758 \uba85\ub3c4 \ub300\ube44\uac00 \ub0ae\ub2e4.",value:1},{label:"\uc544\uc774\ucf58\uacfc \ubc30\uacbd\uc0c9\uacfc\uc758 \uba85\ub3c4 \ub300\ube44\uac00 \ub0ae\ub2e4.",value:2},{label:"\ud14d\uc2a4\ud2b8 \ud589 \uac04\uaca9\uc774 \ud14d\uc2a4\ud2b8 \uc0ac\uc774\uc988 \ub300\ube44 \uc881\ub2e4.",value:3},{label:"\uccb4\ud06c \uc0c1\ud0dc\uac00 \uc0c9\uc0c1\uc73c\ub85c\ub9cc \uad6c\ubd84\ub418\uc5b4 \uc788\ub2e4.",value:4}],answer:[4],mdxType:"ObjectiveQuiz"},(0,i.kt)(c.Eh,{mdxType:"Correct"},(0,i.kt)("ul",null,(0,i.kt)("li",null,"\uc2dc\uac01 \ud639\uc740 \uc0c9\uac01 \uc774\uc0c1 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\ub294 \uc0c9\uc0c1\ub9cc\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc815\ubcf4\ub97c \uc774\ud574\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,i.kt)("li",null,"\uc800\uc2dc\ub825 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc77c\ubd80 \uc0ac\uc6a9\uc790\ub294 \uc81c\ud55c\ub41c \uc0c9\uac01\uc73c\ub85c \uc778\ud574 \uc0c9\uc0c1\ub9cc\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uc815\ubcf4\ub97c \uc774\ud574\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("p",null,"\uc0c9\uc0c1\uc744 \ud1b5\ud574 \uc815\ubcf4\ub97c \uc804\ub2ec \ud558\ub294 \uacbd\uc6b0 \uc0c9\uc0c1 \uc778\uc2dd\uc774 \uc5b4\ub824\uc6b4 \uc0c9\ub9f9, \uc0c9\uc57d\ub4f1\uc758 \uc7a5\uc560\ub97c \uac00\uc9c4 \uc0ac\uc6a9\uc790\ub294 \uc815\ubcf4\ub97c \uc778\uc2dd\ud558\uae30 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 \uc0c9\uc0c1 \uc678 \ub2e4\ub978 \uc218\ub2e8\uc744 \ud1b5\ud574 \ub3d9\uc77c\ud55c \uc815\ubcf4\ub97c \uc778\uc2dd\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("a",{href:"https://sri-fe1.notion.site/398b09b86a8440c9b918d50bbea82b74"},"\ud83d\udd0e \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30")))}v.isMDXComponent=!0}}]);