(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{742:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=r,b=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return t?o.a.createElement(b,i(i({ref:n},s),{},{components:t})):o.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},743:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},744:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},746:function(e,n,t){"use strict";var r=t(0),o=t(747);n.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},747:function(e,n,t){"use strict";var r=t(0);const o=Object(r.createContext)(void 0);n.a=o},748:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(746),c=t(744),i=t(56),l=t.n(i);const s=37,d=39;n.a=function(e){const{lazy:n,block:t,defaultValue:i,values:u,groupId:m,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:f}=Object(a.a)(),[O,v]=Object(r.useState)(i),j=r.Children.toArray(e.children);if(null!=m){const e=b[m];null!=e&&e!==O&&u.some(n=>n.value===e)&&v(e)}const y=e=>{v(e),null!=m&&f(m,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},p)},u.map(({value:e,label:n})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case d:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(g,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},n))),n?Object(r.cloneElement)(j.filter(e=>e.props.value===O)[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((e,n)=>Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O}))))}},749:function(e,n,t){"use strict";var r=t(743),o=t(0),a=t.n(o);n.a=function({children:e,hidden:n,className:t}){return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:t}),e)}},89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(3),o=t(7),a=(t(0),t(742)),c=t(748),i=t(749),l={},s={unversionedId:"migration/Accordion",id:"migration/Accordion",isDocsHomePage:!1,title:"Accordion",description:"We have sliced Accordion into multiple smaller component which not only provides more control over the the code but also makes it more readable.",source:"@site/docs/migration/Accordion.md",slug:"/migration/Accordion",permalink:"/next/migration/Accordion",editUrl:"https://github.com/nativebase/website/tree/main/docs/migration/Accordion.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Footer",permalink:"/next/buildingFooterTabs"},next:{title:"Actionsheet",permalink:"/next/migration/Actionsheet"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Code Comparison",id:"code-comparison",children:[]}],u={toc:d};function m(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We have sliced Accordion into multiple smaller component which not only provides more control over the the code but also makes it more readable."),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"Migrating Checkbox components can broadly described in these points:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"dataArray")," is depreciated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"expanded")," \u2192 ",Object(a.b)("inlineCode",{parentName:"li"},"defaultIndex"),", and now accepts array of index."),Object(a.b)("li",{parentName:"ul"},"Pros like ",Object(a.b)("strong",{parentName:"li"},"headerStyle"),", ",Object(a.b)("strong",{parentName:"li"},"contentStyle"),", ",Object(a.b)("strong",{parentName:"li"},"icon"),", ",Object(a.b)("strong",{parentName:"li"},"expandedIcon"),", ",Object(a.b)("strong",{parentName:"li"},"iconStyle"),", ",Object(a.b)("strong",{parentName:"li"},"expandedIconStyle"),", ",Object(a.b)("strong",{parentName:"li"},"renderHeader"),", ",Object(a.b)("strong",{parentName:"li"},"renderContent")," are ",Object(a.b)("em",{parentName:"li"},"no longer required")," as components like ",Object(a.b)("inlineCode",{parentName:"li"},"Accordion.Button"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Accordion.Panel"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Accordion.Icon")," replaces them."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"onAccordionOpen,")," ",Object(a.b)("strong",{parentName:"li"},"onAccordionOpen")," \u2192 ",Object(a.b)("inlineCode",{parentName:"li"},"onChange"),", one callback instead of 2.")),Object(a.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(a.b)(c.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"v2",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React, { Component } from 'react';\nimport { Container, Header, Content, Accordion } from 'native-base';\nconst dataArray = [\n  {\n    title: 'First Element',\n    content: 'Lorem ipsum dolor sit amet',\n  },\n  { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },\n  {\n    title: 'Third Element',\n    content: 'Lorem ipsum dolor sit amet',\n  },\n];\nexport default class AccordionExample extends Component {\n  render() {\n    return (\n      <Container>\n        <Header />\n        <Content padder>\n          <Accordion dataArray={dataArray} expanded={0} />\n        </Content>\n      </Container>\n    );\n  }\n}\n"))),Object(a.b)(i.a,{value:"v3",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Accordion } from 'native-base';\nexport default function () {\n  return (\n    <Accordion index={[0]}>\n      <Accordion.Item>\n        <Accordion.Button>\n          First Element\n          <Accordion.Icon />\n        </Accordion.Button>\n        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>\n      </Accordion.Item>\n      <Accordion.Item>\n        <Accordion.Button>\n          Second Element\n          <Accordion.Icon />\n        </Accordion.Button>\n        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>\n      </Accordion.Item>\n      <Accordion.Item>\n        <Accordion.Button>\n          Third Element\n          <Accordion.Icon />\n        </Accordion.Button>\n        <Accordion.Panel>Lorem ipsum dolor sit amet</Accordion.Panel>\n      </Accordion.Item>\n    </Accordion>\n  );\n}\n")))))}m.isMDXComponent=!0}}]);