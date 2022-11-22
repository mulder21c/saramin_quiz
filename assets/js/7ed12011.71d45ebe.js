"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.d(t,{Eh:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("div",{className:"feedback__correct"},(0,n.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},5264:(e,t,r)=>{r.d(t,{Tg:()=>i});r(7462),r(3366);var n=r(7294),a=r(3905),i=function(e){var t=e.term,r=e.children;return(0,a.kt)(n.Fragment,null,(0,a.kt)("dt",null," ",t," "),(0,a.kt)("dd",null," ",r," "))}},8182:(e,t,r)=>{r.d(t,{AY:()=>p});r(7462),r(3366);var n=r(7294),a=r(3905);function i(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}function l(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}var o=function(e){var t=e.option,r=e.setCheckedList,n=t.label,i=t.image,o=t.value,c=l();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:c,type:"checkbox",value:o,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:c,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),i&&(0,a.kt)("img",{src:i,alt:""}))))};var c=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var u=function(e){var t=e.feedback,r=e.answer,i=e.children,l=void 0===i?[]:i;r=Array.isArray(r)?r:[String(r)],l=l.length?l:[l];var o=null===t,c=[].concat(l).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),u=c?[].concat(l).splice(1):l,s=(0,n.useRef)();return void 0!==typeof window&&(0,n.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(s.current,{attributes:!0}),function(){e.disconnect(s.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:s,hidden:o,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&c?(0,a.kt)("div",{className:"feedback__correct"},c):"",u?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),u):"")};var s=r(5264),p=function(e){var t=e.options,r=e.answer,l=e.column,p=void 0===l?2:l,d=e.children;d=d.length?d:[d];var f=(0,n.useState)(null),m=f[0],k=f[1],v=(0,n.useState)(new Set),b=v[0],g=v[1],y=[].concat(d).filter((function(e){var t;return"Glossary"===(null==e||null==(t=e.props)?void 0:t.mdxType)}));d=[].concat(d).filter((function(e){var t;return"Glossary"!==(null==e||null==(t=e.props)?void 0:t.mdxType)}));var h=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),g(b)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+p},t.map((function(e,t){return(0,a.kt)(o,{key:t,option:e,setCheckedList:h,mdxType:"Checkbox"})}))),y.length?(0,a.kt)("dl",{className:"glossary"},y.map((function(e,t){return(0,a.kt)(s.Tg,{key:t,term:e.props.term,children:e.props.children,mdxType:"Glossary"})}))):"",(0,a.kt)(c,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(r)?r:[String(r)]);k(i(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:m,mdxType:"VerifyButton"}),(0,a.kt)(u,{feedback:m,answer:r,mdxType:"Feedback"},d))}},6665:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>d,toc:()=>f,default:()=>v});var n,a=r(7462),i=r(3366),l=(r(7294),r(3905)),o=r(8182),c=(r(5264),r(2952)),u=["components"],s={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"7\ubc88 \ubb38\uc81c",id:"quiz-7",slug:"/quiz/7",hide_table_of_contents:!0},p=void 0,d={unversionedId:"quiz/quiz-7",id:"quiz/quiz-7",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q7. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/7.mdx",sourceDirName:"quiz",slug:"/quiz/7",permalink:"/saramin_quiz/quiz/7",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"7\ubc88 \ubb38\uc81c",id:"quiz-7",slug:"/quiz/7",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"6\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/6"},next:{title:"8\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/8"}},f=[{value:"Q7. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694.",id:"q7-\ub2e4\uc74c-\uc911-\uc6b4\ub3d9-\uc7a5\uc560-\uc0ac\uc6a9\uc790\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\uace0\ub974\uc138\uc694",children:[],level:2}],m=(n="FigureBox",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),k={toc:f};function v(e){var t=e.components,r=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"q7-\ub2e4\uc74c-\uc911-\uc6b4\ub3d9-\uc7a5\uc560-\uc0ac\uc6a9\uc790\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\uace0\ub974\uc138\uc694"},"Q7. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694."),(0,l.kt)(o.AY,{column:1,options:[{label:"\uc0c1\uc9c0 \uc9c8\ud658\uc73c\ub85c \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc7a5\uc560 \uc0ac\uc6a9\uc790\ub294 \ub9c8\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:1},{label:"\uc0c1\uc9c0 \uc9c8\ud658\uc73c\ub85c \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc7a5\uc560 \uc0ac\uc6a9\uc790\ub294 \ud0a4\ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:2},{label:"\uc218\uc804\uc99d\uc774 \uc2ec\ud55c \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc6b0 \uc791\uc740 \ucee8\ud2b8\ub864\uc744 \ub2e4\ub8e8\uae30 \uc5b4\ub824\uc6b0\ubbc0\ub85c \ucda9\ubd84\ud55c \uc870\uc791 \uc601\uc5ed\uc744 \uc81c\uacf5\ud558\uba74 \ubb38\uc81c\uac00 \ub2e4\uc18c \ud574\uacb0\ub420 \uc218 \uc788\ub2e4.",value:3},{label:"\uc218\uc804\uc99d\uc774 \uc2ec\ud55c \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc6b0 \uc791\uc740 \ucee8\ud2b8\ub864\uc744 \ub2e4\ub8e8\uae30 \uc5b4\ub824\uc6b0\ubbc0\ub85c \ud0a4\ubcf4\ub4dc\ub85c \uc870\uc791 \ud560 \uc218 \uc788\uac8c \uc81c\uacf5\ud558\uba74 \ubb38\uc81c\uac00 \ub2e4\uc18c \ud574\uacb0\ub420 \uc218 \uc788\ub2e4.",value:4},{label:"\uc804\uc2e0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc0ac\uc6a9\uc790\ub294 \ucef4\ud4e8\ud130\ub97c \uc870\uc791\ud558\uae30 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 \uc6f9\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:5}],answer:[1,2,5],mdxType:"ObjectiveQuiz"},(0,l.kt)(c.Eh,{mdxType:"Correct"},(0,l.kt)("p",null,"1. \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\ub3c4 \ubc1c\uc744 \uc774\uc6a9\ud558\ub294 \ud2b8\ub799\ubcfc\uc744 \uc774\uc6a9\ud574\uc11c \ub9c8\uc6b0\uc2a4\ub97c \ub300\uccb4\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"2. \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\ub3c4 \ud5e4\ub4dc \uc2a4\ud2f1\uc774\ub098 \ub9c8\uc6b0\uc2a4 \uc2a4\ud2f1\uc744 \uc774\uc6a9\ud574\uc11c \ud0a4\ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"5. \uc804\uc2e0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc5b4\ub3c4 \uc74c\uc131 \uba85\ub839\uc774\ub098 eye-tracking \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc11c \ub208\uc758 \uc6c0\uc9c1\uc784\uacfc \uae5c\ubc15\uc784\uc73c\ub85c \ub9c8\uc6b0\uc2a4\ub098 \ud0a4\ubcf4\ub4dc \ub4f1\uc758 \uc785\ub825 \uc7a5\uce58\ub97c \ub300\uccb4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc6b4\ub3d9 \uc7a5\uc560\uac00 \uc788\ub294 \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 \uc791\uc740 \ucee8\ud2b8\ub864\uc744 \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub835\uac70\ub098 \uc804\ud1b5\uc801\uc778 \uc785\ub825 \uc7a5\uce58(e.g, \ub9c8\uc6b0\uc2a4, \ud0a4\ubcf4\ub4dc \ub4f1)\ub97c \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub824\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc138\ubc00\ud55c \uc870\uc791\uc774 \uc5b4\ub824\uc6b4 \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 \uc870\uc791 \uac00\ub2a5\ud55c \ucee8\ud2b8\ub864\uc758 \ud06c\uae30\ub97c \ucda9\ubd84\ud788 \ud06c\uac8c \uc81c\uacf5\ud558\uba74 \ubb38\uc81c\ub97c \ub2e4\uc18c \ud574\uacb0\ud560 \uc218 \uc788\uace0, \ud3ec\uc778\ud130 \uc785\ub825 \uc7a5\uce58 \uc0ac\uc6a9\uc774 \uc5b4\ub824\uc6b4 \uc218\uc900\uc77c \uacbd\uc6b0 \ud0a4\ubcf4\ub4dc \uc811\uadfc\uc744 \ud1b5\ud574 \ubb38\uc81c \ud574\uacb0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc2e0\uccb4 \uc77c\ubd80\ub97c \uc0ac\uc6a9\ud558\uae30 \uc5b4\ub835\uac70\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0\ub77c\ub3c4, \ub2e4\uc74c\uacfc \uac19\uc740 \ubcf4\uc870 \uae30\uc220\ub4e4\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6f9\uc744 \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ub7ec\ud55c \uae30\uae30\ub85c\ub3c4 \ucda9\ubd84\ud788 \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc124\uacc4 \ubc0f \uad6c\ud604\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("div",{className:"flex-column-4"},(0,l.kt)(m,{mdxType:"FigureBox"},(0,l.kt)("img",{src:"../img/a11y/quiz4/head-stick.webp",alt:""}),(0,l.kt)("figcaption",null,"\ud5e4\ub4dc \uc2a4\ud2f1")),(0,l.kt)(m,{mdxType:"FigureBox"},(0,l.kt)("img",{src:"../img/a11y/quiz4/mouse-stick.webp",alt:""}),(0,l.kt)("figcaption",null,"\ub9c8\uc6b0\uc2a4 \uc2a4\ud2f1")),(0,l.kt)(m,{mdxType:"FigureBox"},(0,l.kt)("img",{src:"../img/a11y/quiz4/hand-stick.webp",alt:""}),(0,l.kt)("figcaption",null,"\ud578\ub4dc \uc2a4\ud2f1")),(0,l.kt)(m,{mdxType:"FigureBox"},(0,l.kt)("img",{src:"../img/a11y/quiz4/eye-tracker.webp",alt:""}),(0,l.kt)("figcaption",null,"\uc544\uc774 \ud2b8\ub798\ucee4"))),(0,l.kt)("a",{href:"https://sri-fe1.notion.site/2-3-c7b10021f627447eb34d485770b08b1e"},"\ud83d\udd0e \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74?")))}v.isMDXComponent=!0}}]);