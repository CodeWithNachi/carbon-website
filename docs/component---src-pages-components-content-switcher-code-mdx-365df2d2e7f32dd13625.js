(window.webpackJsonp=window.webpackJsonp||[]).push([[1880],{aEMI:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return f}));n("3bBZ"),n("q1tI");var o=n("7ljp"),c=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}const a={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},m=i("PageDescription"),p=i("Row"),b=i("Column"),u=i("ResourceCard"),d=i("MdxIcon"),l=i("ComponentDemo"),h=i("ComponentVariant"),y={_frontmatter:a},w=c.a;function f(e){let{components:t}=e,n=s(e,["components"]);return Object(o.b)(w,r({},y,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(m,{mdxType:"PageDescription"},Object(o.b)("p",null,"Preview the content switcher component with the React live demo. For detailed\ncode usage documentation, see the Storybooks for each framework below.")),Object(o.b)("h2",null,"Documentation"),Object(o.b)(p,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/contentswitcher--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"react",mdxType:"MdxIcon"}))),Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",mdxType:"ResourceCard"},Object(o.b)(d,{name:"angular",mdxType:"MdxIcon"}))),Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"vue",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Live demo"),Object(o.b)(l,{components:[{id:"content-switcher",label:"Content switcher"}],mdxType:"ComponentDemo"},Object(o.b)(h,{id:"content-switcher",knobs:{Switch:["disabled"]},links:{React:"http://react.carbondesignsystem.com/?path=/story/contentswitcher--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=content-switcher"},mdxType:"ComponentVariant"},"\n<ContentSwitcher onChange={console.log}>\n  <Switch name={'first'} text='First section' />\n  <Switch name={'second'} text='Second section' />\n  <Switch name={'third'} text='Third section' />\n</ContentSwitcher>\n")))}f.isMDXComponent=!0}}]);