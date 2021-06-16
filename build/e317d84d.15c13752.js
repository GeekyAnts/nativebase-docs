(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{672:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(742)),c=n(748),i=n(749),s={},u={unversionedId:"migration/Footer Tab",id:"version-3.0.0-next.36/migration/Footer Tab",isDocsHomePage:!1,title:"Footer Tab",description:"With NativeBase v3 we have removed FooterTab components because as it's very simple to create using Tabs components. Here an example to show the code comparison.",source:"@site/versioned_docs/version-3.0.0-next.36/migration/Footer Tab.md",slug:"/migration/Footer Tab",permalink:"/3.0.0-next.36/migration/Footer Tab",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.36/migration/Footer Tab.md",version:"3.0.0-next.36",sidebar:"version-3.0.0-next.36/componentsSidebar",previous:{title:"FABs",permalink:"/3.0.0-next.36/migration/FABs"},next:{title:"Header",permalink:"/3.0.0-next.36/migration/Header"}},l=[{value:"Code Comparison",id:"code-comparison",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With NativeBase v3 we have removed FooterTab components because as it's very simple to create using Tabs components. Here an example to show the code comparison."),Object(o.b)("h2",{id:"code-comparison"},"Code Comparison"),Object(o.b)(c.a,{defaultValue:"v2",values:[{label:"v2",value:"v2"},{label:"v3",value:"v3"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"v2",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Footer>\n  <FooterTab>\n    <Button>\n      <Icon name='apps' />\n    </Button>\n    <Button>\n      <Icon name='camera' />\n    </Button>\n    <Button active>\n      <Icon active name='navigate' />\n    </Button>\n    <Button>\n      <Icon name='person' />\n    </Button>\n  </FooterTab>\n</Footer>\n"))),Object(o.b)(i.a,{value:"v3",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"<Tabs isFitted variant='solid-rounded'>\n  <TabBar>\n    <Tab borderRadius='md' px={4} ml={4}>\n      <Icon name='apps' />\n    </Tab>\n    <Tab borderRadius='md' px={4}>\n      <Icon name='camera' />\n    </Tab>\n    <Tab borderRadius='md' px={4}>\n      <Icon name='navigation' />\n    </Tab>\n    <Tab borderRadius='md' px={4} mr={4}>\n      <Icon name='person' />\n    </Tab>\n  </TabBar>\n</Tabs>\n")))))}p.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},743:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},744:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},746:function(e,t,n){"use strict";var r=n(0),a=n(747);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},747:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},748:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(746),c=n(744),i=n(56),s=n.n(i);const u=37,l=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:m}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(o.a)(),[v,y]=Object(r.useState)(i),O=r.Children.toArray(e.children);if(null!=p){const e=d[p];null!=e&&e!==v&&b.some(t=>t.value===e)&&y(e)}const g=e=>{y(e),null!=p&&f(p,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},b.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case l:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t))),t?Object(r.cloneElement)(O.filter(e=>e.props.value===v)[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v}))))}},749:function(e,t,n){"use strict";var r=n(743),a=n(0),o=n.n(a);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);