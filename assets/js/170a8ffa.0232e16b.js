"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2952:(e,t,r)=>{r.d(t,{Eh:()=>a});r(7462),r(3366),r(7294);var n=r(3905),a=function(e){var t=e.children;return(0,n.kt)("div",{className:"feedback__correct"},(0,n.kt)("h3",{className:"feedback__correct__heading"},"\ud83d\udce2 \ubb38\uc81c \ud480\uc774"),t)}},8182:(e,t,r)=>{r.d(t,{AY:()=>u});r(7462),r(3366);var n=r(7294),a=r(3905);function i(){var e="abcdefghijklmnopqrstuvwxyz";return(""+e[Math.floor(46656*Math.random())%e.length]+(new Date).getTime().toString(36).slice(-5)+(46656*Math.random()).toString(32).slice(-5)).replace(/\./,"-")}function c(e,t){if(e&&t)return e.size===t.size&&Array.from(e).every((function(e){return t.has(e)||t.has(String(e))}))}var o=function(e){var t=e.option,r=e.setCheckedList,n=t.label,c=t.image,o=t.value,l=i();return(0,a.kt)("span",{className:"answer__item"},(0,a.kt)("input",{id:l,type:"checkbox",value:o,className:"answer__item__checkbox",onChange:function(e){return function(e){var t=e.target,n=t.checked,a=t.value;r({checked:n,value:a})}(e)}}),(0,a.kt)("label",{htmlFor:l,className:"answer__item__wrapper"},(0,a.kt)("span",{className:"answer__item__label"},(0,a.kt)("span",null,n||""),c&&(0,a.kt)("img",{src:c,alt:""}))))};var l=function(e){var t=e.checkExercise,r=e.feedback,n="verify-btn "+(null!==r?"verify-btn--"+(r?"success":"fail"):"");return(0,a.kt)("button",{type:"button",className:n,onClick:function(){return t()}},"\uc815\ub2f5 \ud655\uc778")};var s=function(e){var t=e.feedback,r=e.answer,i=e.children,c=void 0===i?[]:i;r=Array.isArray(r)?r:[String(r)],c=c.length?c:[c];var o=null===t,l=[].concat(c).find((function(e){var t;return"Correct"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),s=l?[].concat(c).splice(1):c,u=(0,n.useRef)();return void 0!==typeof window&&(0,n.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){var t=e.target;!1===t.hidden&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}))}));return e.observe(u.current,{attributes:!0}),function(){e.disconnect(u.current,{attributes:!0})}}),[]),(0,a.kt)("div",{ref:u,hidden:o,className:"feedback"},(0,a.kt)("h2",{className:"sr-only"},"\ud480\uc774 \uacb0\uacfc"),(0,a.kt)("div",{className:"feedback__result"},t?(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#4caf50",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#ccff90",d:"M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"})):(0,a.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"240px",height:"240px"},(0,a.kt)("path",{fill:"#f44336",d:"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"}),(0,a.kt)("path",{fill:"#fff",d:"M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"}),(0,a.kt)("path",{fill:"#fff",d:"M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"})),t?"\uc815\ub2f5\uc785\ub2c8\ub2e4!":"\uc544\uc27d\uc9c0\ub9cc \ud2c0\ub838\uc5b4\uc694 \u3160\u3160"),t?"":(0,a.kt)("p",{className:"feedback__answer"},"\uc815\ub2f5\uc740 ",(0,a.kt)("strong",null,r.join(", "))," \uc785\ub2c8\ub2e4."),!1===t&&l?(0,a.kt)("div",{className:"feedback__correct"},l):"",s?(0,a.kt)("div",{className:"feedback__desc"},(0,a.kt)("h3",{className:"feedback__desc__heading"},"\ud83d\udce2 \ub354 \uc54c\uc544\ubcf4\uae30"),s):"")};var u=function(e){var t=e.options,r=e.answer,i=e.column,u=void 0===i?2:i,f=e.children,d=(0,n.useState)(null),p=d[0],m=d[1],v=(0,n.useState)(new Set),b=v[0],k=v[1],h=function(e){var t=e.value;e.checked?b.add(t):b.delete(t),k(b)};return(0,a.kt)(n.Fragment,null,(0,a.kt)("div",{className:"answer answer--column-"+u},t.map((function(e,t){return(0,a.kt)(o,{key:t,option:e,setCheckedList:h,mdxType:"Checkbox"})}))),(0,a.kt)(l,{checkExercise:function(){if(0!==b.size){var e=new Set(Array.isArray(r)?r:[String(r)]);m(c(e,b))}else alert("\ub2f5\uc744 \uc120\ud0dd\ud558\uc138\uc694")},feedback:p,mdxType:"VerifyButton"}),(0,a.kt)(s,{feedback:p,answer:r,mdxType:"Feedback"},f))}},3789:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>f,toc:()=>d,default:()=>m});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=r(8182),o=r(2952),l=["components"],s={title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"Quiz 4",id:"quiz-4",slug:"/quiz/4",hide_table_of_contents:!0},u=void 0,f={unversionedId:"quiz/quiz-4",id:"quiz/quiz-4",isDocsHomePage:!1,title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",description:"Q4. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694.",source:"@site/../docs/quiz/4.mdx",sourceDirName:"quiz",slug:"/quiz/4",permalink:"/saramin_quiz/quiz/4",tags:[],version:"current",frontMatter:{title:"\uc0ac\ub78c\uc778 \uc6f9 \uc811\uadfc\uc131 \ud034\uc988",sidebar_label:"Quiz 4",id:"quiz-4",slug:"/quiz/4",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Quiz 3",permalink:"/saramin_quiz/quiz/3"},next:{title:"Quiz 5",permalink:"/saramin_quiz/quiz/5"}},d=[{value:"Q4. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694.",id:"q4-\ub2e4\uc74c-\uc911-\uc6b4\ub3d9-\uc7a5\uc560-\uc0ac\uc6a9\uc790\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\uace0\ub974\uc138\uc694",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"q4-\ub2e4\uc74c-\uc911-\uc6b4\ub3d9-\uc7a5\uc560-\uc0ac\uc6a9\uc790\uc5d0-\ub300\ud55c-\uc124\uba85-\uc911-\ud2c0\ub9b0-\uac83\uc744-\uace0\ub974\uc138\uc694"},"Q4. \ub2e4\uc74c \uc911 \uc6b4\ub3d9 \uc7a5\uc560 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uc124\uba85 \uc911 \ud2c0\ub9b0 \uac83\uc744 \uace0\ub974\uc138\uc694."),(0,i.kt)(c.AY,{column:1,options:[{label:"\uc0c1\uc9c0 \uc9c8\ud658\uc73c\ub85c \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc7a5\uc560 \uc0ac\uc6a9\uc790\ub294 \ub9c8\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:1},{label:"\uc0c1\uc9c0 \uc9c8\ud658\uc73c\ub85c \uc591 \uc190\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc7a5\uc560 \uc0ac\uc6a9\uc790\ub294 \ud0a4\ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:2},{label:"\uc218\uc804\uc99d\uc774 \uc2ec\ud55c \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc6b0 \uc791\uc740 \ucee8\ud2b8\ub864\uc744 \ub2e4\ub8e8\uae30 \uc5b4\ub824\uc6b0\ubbc0\ub85c \ucda9\ubd84\ud55c \uc870\uc791 \uc601\uc5ed\uc744 \uc81c\uacf5\ud558\uba74 \ubb38\uc81c\uac00 \ub2e4\uc18c \ud574\uacb0\ub420 \uc218 \uc788\ub2e4.",value:3},{label:"\uc218\uc804\uc99d\uc774 \uc2ec\ud55c \uc0ac\uc6a9\uc790\ub294 \ub9e4\uc6b0 \uc791\uc740 \ucee8\ud2b8\ub864\uc744 \ub2e4\ub8e8\uae30 \uc5b4\ub824\uc6b0\ubbc0\ub85c \ud0a4\ubcf4\ub4dc\ub85c \uc870\uc791 \ud560 \uc218 \uc788\uac8c \uc81c\uacf5\ud558\uba74 \ubb38\uc81c\uac00 \ub2e4\uc18c \ud574\uacb0\ub420 \uc218 \uc788\ub2e4.",value:4},{label:"\uc804\uc2e0\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc0ac\uc6a9\uc790\ub294 \ucef4\ud4e8\ud130\ub97c \uc870\uc791\ud558\uae30 \uc5b4\ub835\uae30 \ub54c\ubb38\uc5d0 \uc6f9\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",value:5}],answer:[1,2,4],mdxType:"ObjectiveQuiz"},(0,i.kt)(o.Eh,{mdxType:"Correct"}),"https://sri-fe1.notion.site/2-3-c7b10021f627447eb34d485770b08b1e"))}m.isMDXComponent=!0}}]);