(window.webpackJsonp=window.webpackJsonp||[]).push([[1937],{UdVB:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return h}));t("3bBZ"),t("q1tI");var o=t("7ljp"),a=t("013z");t("qKvR");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={},p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)},s=p("PageDescription"),m=p("Row"),b=p("Column"),u=p("ResourceCard"),d=p("MdxIcon"),l=p("ComponentDemo"),g=p("ComponentVariant"),y={_frontmatter:i},f=a.a;function h(e){let{components:n}=e,t=c(e,["components"]);return Object(o.b)(f,r({},y,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Preview the pagination component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),Object(o.b)("h2",null,"Documentation"),Object(o.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/pagination--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"react",mdxType:"MdxIcon"}))),Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-pagination--basic",mdxType:"ResourceCard"},Object(o.b)(d,{name:"angular",mdxType:"MdxIcon"}))),Object(o.b)(b,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvpagination--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"vue",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Live demo"),Object(o.b)(l,{components:[{id:"pagination",label:"Pagination"}],mdxType:"ComponentDemo"},Object(o.b)(g,{id:"pagination",knobs:{Pagination:["disabled","isLastPage","pageInputDisabled","pagesUnknown"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/pagination--pagination",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-pagination--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvpagination--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=pagination"},mdxType:"ComponentVariant"},'\n  <div style={{width: \'800px\'}}>\n    <Pagination\n      backwardText="Previous page"\n      forwardText="Next page"\n      itemsPerPageText="Items per page:"\n      page={1}\n      pageNumberText="Page Number"\n      pageSize={10}\n      pageSizes={[\n        10,\n        20,\n        30,\n        40,\n        50\n      ]}\n      totalItems={103}\n    />\n  </div>\n  ')))}h.isMDXComponent=!0}}]);