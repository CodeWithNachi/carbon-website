(window.webpackJsonp=window.webpackJsonp||[]).push([[2036],{wfwP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return f}));t("3bBZ"),t("q1tI");var a=t("7ljp"),r=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const l={},p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",n)},b=p("PageDescription"),i=p("AnchorLinks"),s=p("AnchorLink"),m=p("Row"),u=p("Column"),d=p("ResourceCard"),j=p("MdxIcon"),O={_frontmatter:l},g=r.a;function f(e){let{components:n}=e,t=c(e,["components"]);return Object(a.b)(g,o({},O,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)(b,{mdxType:"PageDescription"},Object(a.b)("p",null,"Carbon pictograms are provided through a set of packages allowing the use of\npictograms in multiple frameworks. Pictograms are supported in vanilla, React,\nAngular, and Vue.")),Object(a.b)(i,{mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Get started"),Object(a.b)(s,{mdxType:"AnchorLink"},"Usage"),Object(a.b)(s,{mdxType:"AnchorLink"},"Resources")),Object(a.b)("h2",null,"Get started"),Object(a.b)("p",null,"To install ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/pictograms-react")," in your project, you will need to run the\nfollowing command using ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/"}),"npm"),":"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm install -S @carbon/pictograms-react\n")),Object(a.b)("p",null,"If you prefer ",Object(a.b)("a",o({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"Yarn"),", use the following command\ninstead:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @carbon/pictograms-react\n")),Object(a.b)("h2",null,"Usage"),Object(a.b)("p",null,"You can import a pictogram component into your project by referring to its name:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Airplane } from '@carbon/pictograms-react';\n")),Object(a.b)("p",null,"We also provide CommonJS and UMD files in the ",Object(a.b)("inlineCode",{parentName:"p"},"lib")," and ",Object(a.b)("inlineCode",{parentName:"p"},"umd")," directories,\nrespectively."),Object(a.b)("p",null,"To import using CommonJS, you can do the following:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const { Airplane } = require('@carbon/pictograms-react');\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: if you would like to find the import path for a pictogram, you can\nreference our\n",Object(a.b)("a",o({parentName:"em"},{href:"https://www.carbondesignsystem.com/guidelines/pictograms/library"}),"Pictogram Library"))),Object(a.b)("h3",null,"Icon fill"),Object(a.b)("p",null,"All icons from the library support being styled by the ",Object(a.b)("inlineCode",{parentName:"p"},"fill")," property. You can\nchange the color of an icon by passing in a custom class name that sets this\nproperty (preferred), or by passing in an inline style. For example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-css"}),"// CSS custom class name to set the fill of the icon to `rebeccapurple`\nsvg.my-custom-class {\n  fill: rebeccapurple;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'import { Airplane } from \'@carbon/pictograms-react\';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Airplane aria-label="Add" className="my-custom-class" />\n    </button>\n  );\n}\n')),Object(a.b)("h3",null,"Focus and ",Object(a.b)("inlineCode",{parentName:"h3"},"aria-label")),Object(a.b)("p",null,"By default, the icon components from ",Object(a.b)("inlineCode",{parentName:"p"},"@carbon/pictograms-react")," are treated as\ndecorative content. This means that we set ",Object(a.b)("inlineCode",{parentName:"p"},'aria-hidden="true"')," unless certain\nprops are passed to the component."),Object(a.b)("p",null,"If you would like the icon to be announced by a screen reader, you can supply an\n",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," or ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),"import { Airplane } from '@carbon/pictograms-react';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Airplane aria-label=\"Add\" />\n    </button>\n  );\n}\n")),Object(a.b)("p",null,"Doing this will add the appropriate ",Object(a.b)("inlineCode",{parentName:"p"},"role")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," node, as well."),Object(a.b)("p",null,"If you would like the ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," to receive focus, you will need to pass in a\n",Object(a.b)("inlineCode",{parentName:"p"},"tabIndex")," value. For example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-jsx"}),'import { Airplane } from \'@carbon/pictograms-react\';\n\nfunction MyComponent() {\n  return <Airplane aria-label="Add" tabIndex="0" />;\n}\n')),Object(a.b)("p",null,"Including ",Object(a.b)("inlineCode",{parentName:"p"},"tabIndex")," and ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby"),") will set the\ncorresponding ",Object(a.b)("inlineCode",{parentName:"p"},"tabindex")," on the underlying ",Object(a.b)("inlineCode",{parentName:"p"},"<svg>")," and verify support in older\nbrowsers like Internet Explorer 11 by setting ",Object(a.b)("inlineCode",{parentName:"p"},"focusable")," to ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h2",null,"Resources"),Object(a.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(a.b)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(a.b)(d,{subTitle:"Carbon pictograms package",href:"https://github.com/carbon-design-system/carbon/blob/master/packages/pictograms-react",mdxType:"ResourceCard"},Object(a.b)(j,{name:"bee",mdxType:"MdxIcon"})))))}f.isMDXComponent=!0}}]);