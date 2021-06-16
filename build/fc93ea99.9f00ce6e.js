(window.webpackJsonp=window.webpackJsonp||[]).push([[658],{729:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(742)),s={id:"use-contrast-text",title:"useContrastText"},c={unversionedId:"use-contrast-text",id:"version-3.0.0-next.40/use-contrast-text",isDocsHomePage:!1,title:"useContrastText",description:"useContrastText is a custom hook used to get a contrasting color (either lightText or darkText) to the color passed as a parameter.",source:"@site/versioned_docs/version-3.0.0-next.40/useContrastText.md",slug:"/use-contrast-text",permalink:"/use-contrast-text",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/useContrastText.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"useColorModeValue",permalink:"/use-color-mode-value"},next:{title:"useAccessibleColors",permalink:"/use-accessible-colors"}},i=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Using Accessible Colors",id:"using-accessible-colors",children:[]}]},{value:"Return value",id:"return-value",children:[]}],l={toc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useContrastText")," is a custom hook used to get a contrasting color (either ",Object(o.b)("inlineCode",{parentName:"p"},"lightText")," or ",Object(o.b)("inlineCode",{parentName:"p"},"darkText"),") to the color passed as a parameter."),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useContrastText } from 'native-base';\n")),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("div",{className:"snack-player","data-snack-name":"useContrastText","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useContrastText%2C%20NativeBaseProvider%2C%20Center%20%7D%20from%20'native-base'%3B%0Afunction%20UseContrastingTextHook%20()%20%7B%0A%20%20const%20bgDark%20%3D%20'gray.900'%3B%0A%20%20const%20bgLight%20%3D%20'gray.50'%3B%0A%20%20const%20colorContrastDark%20%3D%20useContrastText(bgDark)%3B%0A%20%20const%20colorContrastLight%20%3D%20useContrastText(bgLight)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CButton%20bg%3D%7BbgDark%7D%20_text%3D%7B%7B%20color%3A%20colorContrastDark%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20bg%3D%7BbgLight%7D%20_text%3D%7B%7B%20color%3A%20colorContrastLight%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseContrastingTextHook%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h3",{id:"using-accessible-colors"},"Using Accessible Colors"),Object(o.b)("p",null,"By default, NativeBase provides contrasting color based on its theme. You can also choose to get color with better ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://web.dev/color-and-contrast-accessibility/"}),"color and contrast accessibility")," with the help of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/use-accessible-colors"}),Object(o.b)("inlineCode",{parentName:"a"},"useAccessibleColors"))," hook."),Object(o.b)("div",{className:"snack-player","data-snack-name":"usingAccessibleColors","data-snack-description":"Example usage","data-snack-code":"%0Aimport%20React%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20useContrastText%2C%20useTheme%2C%20NativeBaseProvider%2C%20Center%2C%20useAccessibleColors%20%7D%20from%20'native-base'%3B%0Afunction%20UseContrastingTextHook%20()%20%7B%0A%20%20let%20%5B%2C%20%2C%20toggleAccessibleColors%5D%20%3D%20useAccessibleColors()%3B%0A%20%20const%20%7B%20colors%20%7D%20%3D%20useTheme()%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%7BObject.keys(colors.teal).map((key)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20colorContrast%20%3D%20useContrastText(%60teal.%24%7Bkey%7D%60)%3B%0A%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60teal.%24%7Bkey%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20bg%3D%7B%60teal.%24%7Bkey%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%20color%3A%20colorContrast%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20mb%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20NativeBase%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D)%7D%0A%20%20%20%20%20%20%3CButton%20mt%3D%7B2%7D%20onPress%3D%7BtoggleAccessibleColors%7D%20bg%3D%7B'indigo.600'%7D%3E%0A%20%20%20%20%20%20%20%20Toggle%20Accessible%20Colors%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CUseContrastingTextHook%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(o.b)("h2",{id:"return-value"},"Return value"),Object(o.b)("p",null,"Accepts and returns a color defined in the theme."))}u.isMDXComponent=!0},742:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);