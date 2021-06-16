(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{360:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(3),i=t(7),a=(t(0),t(742)),r=(t(774),{id:"customizingTheme",title:"Customising Theme"}),s={unversionedId:"customizingTheme",id:"customizingTheme",isDocsHomePage:!1,title:"Customising Theme",description:"Theme is one core elements of NativeBase. You can customize NativeBase's theme as per your liking. NativeBase theme is complex object which looks like",source:"@site/docs/customizingTheme.md",slug:"/customizingTheme",permalink:"/next/customizingTheme",editUrl:"https://github.com/nativebase/website/tree/main/docs/customizingTheme.md",version:"current",sidebar:"componentsSidebar",previous:{title:"Default Theme",permalink:"/next/default-theme"},next:{title:"Customising Fonts",permalink:"/next/customizingFonts"}},c=[{value:"Using the new tokens in components",id:"using-the-new-tokens-in-components",children:[]}],m={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Theme is one core elements of NativeBase. You can customize NativeBase's theme as per your liking. NativeBase theme is complex object which looks like"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"// theme\n{\n    colors: {...},\n    fontSizes: {...},\n    fonts: {...},\n    .\n    .\n    .\n    config: {...},\n}\n")),Object(a.b)("p",null,"It has many ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"default-theme"}),"other properties")," but in this recipe, we'll only update few of them (namely colors, fonts, and config) using NativeBase's ",Object(a.b)("inlineCode",{parentName:"p"},"extendTheme")," function."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, extendTheme } from 'native-base';\nimport { Content } from './Content';\n\nexport default function () {\n  const theme = extendTheme({\n    colors: {\n      // Add new color\n      primary: {\n        50: '#E3F2F9',\n        100: '#C5E4F3',\n        200: '#A2D4EC',\n        300: '#7AC1E4',\n        400: '#47A9DA',\n        500: '#0088CC',\n        600: '#007AB8',\n        700: '#006BA1',\n        800: '#005885',\n        900: '#003F5E',\n      },\n      // Redefinig only one shade, rest of the color will remain same.\n      amber: {\n        400: '#d97706',\n      },\n    },\n    config: {\n      // Changing initialColorMode to 'dark'\n      initialColorMode: 'dark',\n    },\n  });\n\n  return (\n    <NativeBaseProvider theme={theme}>\n      <Content />\n    </NativeBaseProvider>\n  );\n}\n")),Object(a.b)("p",null,"In the above example, the following changes have been made:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Added a new color named ",Object(a.b)("strong",{parentName:"li"},"primary"),"."),Object(a.b)("li",{parentName:"ul"},"Updated one of the shade of ",Object(a.b)("strong",{parentName:"li"},"amber")," color."),Object(a.b)("li",{parentName:"ul"},"Updated the initial color mode to ",Object(a.b)("strong",{parentName:"li"},"dark"),". Default is ",Object(a.b)("strong",{parentName:"li"},"light"),"."),Object(a.b)("li",{parentName:"ul"},"Finally passed the new ",Object(a.b)("strong",{parentName:"li"},"theme")," object to the ",Object(a.b)("strong",{parentName:"li"},"NativeBaseProvider"),".")),Object(a.b)("h3",{id:"using-the-new-tokens-in-components"},"Using the new tokens in components"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function App() {\n  const theme = extendTheme({\n    colors: {\n      // Add new color\n      primary: {\n        50: '#E3F2F9',\n        100: '#C5E4F3',\n        200: '#A2D4EC',\n        300: '#7AC1E4',\n        400: '#47A9DA',\n        500: '#0088CC',\n        600: '#007AB8',\n        700: '#006BA1',\n        800: '#005885',\n        900: '#003F5E',\n      },\n      // Redefinig only one shade, rest of the color will remain same.\n      amber: {\n        400: '#d97706',\n      },\n    },\n    config: {\n      // Changing initialColorMode to 'dark'\n      initialColorMode: 'dark',\n    },\n  });\n\n  return (\n    <NativeBaseProvider theme={theme}>\n      <Box bg=\"primary.500\" p={4} />\n    </NativeBaseProvider>\n  );\n}\n")))}l.isMDXComponent=!0},775:function(e,n){}}]);