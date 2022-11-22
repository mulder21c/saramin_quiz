"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.d(t,{Eh:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("div",{className:"feedback__correct"},(0,n.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},6656:(e,t,r)=>{r.d(t,{EQ:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("figure",{className:"figurebox"},t)}},5264:(e,t,r)=>{r.d(t,{Tg:()=>i});r(7462),r(3366);var n=r(7294),a=r(3905),i=function(e){var t=e.term,r=e.children;return(0,a.kt)(n.Fragment,null,(0,a.kt)("dt",null," ",t," "),(0,a.kt)("dd",null," ",r," "))}},8182:(e,t,r)=>{r.d(t,{AY:()=>f});r(7462),r(3366);var n=r(7294),a=r(3905);function i(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}function l(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}var c=function(e){var t=e.option,r=e.setCheckedList,n=t.label,i=t.image,c=t.value,o=l();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:o,type:"checkbox",value:c,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:o,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),i&&(0,a.kt)("img",{src:i,alt:""}))))};var o=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var s=function(e){var t=e.feedback,r=e.answer,i=e.children,l=void 0===i?[]:i;r=Array.isArray(r)?r:[String(r)],l=l.length?l:[l];var c=null===t,o=[].concat(l).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),s=o?[].concat(l).splice(1):l,u=(0,n.useRef)();return void 0!==typeof window&&(0,n.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(u.current,{attributes:!0}),function(){e.disconnect(u.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:u,hidden:c,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&o?(0,a.kt)("div",{className:"feedback__correct"},o):"",s?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),s):"")};var u=r(5264),f=function(e){var t=e.options,r=e.answer,l=e.column,f=void 0===l?2:l,d=e.children;d=d.length?d:[d];var p=(0,n.useState)(null),m=p[0],v=p[1],k=(0,n.useState)(new Set),b=k[0],h=k[1],y=[].concat(d).filter((function(e){var t;return"Glossary"===(null==e||null==(t=e.props)?void 0:t.mdxType)}));d=[].concat(d).filter((function(e){var t;return"Glossary"!==(null==e||null==(t=e.props)?void 0:t.mdxType)}));var g=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),h(b)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+f},t.map((function(e,t){return(0,a.kt)(c,{key:t,option:e,setCheckedList:g,mdxType:"Checkbox"})}))),y.length?(0,a.kt)("dl",{className:"glossary"},y.map((function(e,t){return(0,a.kt)(u.Tg,{key:t,term:e.props.term,children:e.props.children,mdxType:"Glossary"})}))):"",(0,a.kt)(o,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(r)?r:[String(r)]);v(i(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:m,mdxType:"VerifyButton"}),(0,a.kt)(s,{feedback:m,answer:r,mdxType:"Feedback"},d))}},3978:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>f,metadata:()=>d,toc:()=>p,default:()=>v});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(8182),c=(r(5264),r(2952)),o=r(6656),s=["components"],u={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"10\ubc88 \ubb38\uc81c",id:"quiz-10",slug:"/quiz/10",hide_table_of_contents:!0},f=void 0,d={unversionedId:"quiz/quiz-10",id:"quiz/quiz-10",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q10. \ub2e4\uc74c \ud654\uba74\uc758 \uc801\uc808\ud55c \uc77d\uae30 \uc21c\uc11c\ub97c \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/10.mdx",sourceDirName:"quiz",slug:"/quiz/10",permalink:"/saramin_quiz/quiz/10",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"10\ubc88 \ubb38\uc81c",id:"quiz-10",slug:"/quiz/10",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"9\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/9"},next:{title:"11\ubc88 \ubb38\uc81c",permalink:"/saramin_quiz/quiz/11"}},p=[{value:"Q10. \ub2e4\uc74c \ud654\uba74\uc758 \uc801\uc808\ud55c \uc77d\uae30 \uc21c\uc11c\ub97c \uace0\ub974\uc138\uc694.",id:"q10-\ub2e4\uc74c-\ud654\uba74\uc758-\uc801\uc808\ud55c-\uc77d\uae30-\uc21c\uc11c\ub97c-\uace0\ub974\uc138\uc694",children:[],level:2}],m={toc:p};function v(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"q10-\ub2e4\uc74c-\ud654\uba74\uc758-\uc801\uc808\ud55c-\uc77d\uae30-\uc21c\uc11c\ub97c-\uace0\ub974\uc138\uc694"},"Q10. \ub2e4\uc74c \ud654\uba74\uc758 \uc801\uc808\ud55c \uc77d\uae30 \uc21c\uc11c\ub97c \uace0\ub974\uc138\uc694."),(0,i.kt)(o.EQ,{mdxType:"FigureBox"},(0,i.kt)("img",{src:"../img/a11y/quiz-dir.jpg",alt:""})),(0,i.kt)(l.AY,{options:[{label:"1 \u2192 2 \u2192 3 \u2192 4",value:1},{label:"1 \u2192 3 \u2192 2 \u2192 4",value:2},{label:"1 \u2192 3 \u2192 4 \u2192 2",value:3},{label:"1 \u2192 4 \u2192 3 \u2192 2",value:4}],answer:3,mdxType:"ObjectiveQuiz"},(0,i.kt)(c.Eh,{mdxType:"Correct"},(0,i.kt)("p",null,"\uc815\uc0c1 \uc2dc\ub825\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\ub294 \uc704 \ucf58\ud150\uce20\ub97c \uc774\uc6a9\ud560 \ub54c 1 \u2192 3 \u2192 4 \u2192 2\uc758 \uc21c\uc11c\ub85c \uc77d\uc5b4 \uac00\uc9c0\ub9cc, \ub9c8\ud06c\uc5c5\uc5d0\uc11c\ub294 1 \u2192 2 \u2192 3 \u2192 4\uc758 \uc21c\uc11c\ub85c \uc81c\uacf5\ub418\uc5b4 \uc2a4\ud06c\ub9b0\ub9ac\ub354 \uc0ac\uc6a9\uc790\uc640 \uac19\uc774 \ud654\uba74\uc744 \ubcfc \uc218 \uc5c6\ub294 \uc0ac\uc6a9\uc790\ub294 \ucf58\ud150\uce20\ub97c \uc798\ubabb \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,i.kt)("br",null),'"\ud68c\uc6d0\ub2d8\uaed8 \ub3c4\uc6c0\uc774 \ub420 \ub9cc\ud55c \ud569\uaca9\uc790 \uc778\ud130\ubdf0 \ubcf4\uc2e4\ub798\uc694? \ud5e4\ub529 \ub808\ubca8 3 \ud604\uc9c1\uc790 \uc778\ud130\ubdf0 \ub354\ubcf4\uae30 \ub9c1\ud06c" \ub77c\uace0 \uba3c\uc800 \uc778\uc2dd \ub418\uae30 \ub54c\ubb38\uc5d0 \ud569\uaca9\uc790 \uc778\ud130\ubdf0\ub97c \ubcf4\uae30 \uc704\ud574\uc11c\ub294 \ub9c1\ud06c\ub97c \ub20c\ub7ec\uc57c \ud558\ub294 \ucf58\ud150\uce20\ub85c \uc774\ud574\ud560 \uc18c\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.')),"\ub17c\ub9ac\uc801 \uc77d\uae30 \uc21c\uc11c \ubcf4\uc7a5(\uc6f9 \ud398\uc774\uc9c0\uc758 \ubaa8\ub4e0 \ucf58\ud150\uce20\ub97c \uc758\ubbf8\uc788\ub294 \uc21c\uc11c\ub85c \ub9c8\ud06c\uc5c5\ud574 \uc8fc\uc138\uc694)",(0,i.kt)("a",{href:"https://sri-fe1.notion.site/f6b99493d397429b8ab64e4aca5189f4"},"\ud83d\udd0e \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74?")))}v.isMDXComponent=!0}}]);