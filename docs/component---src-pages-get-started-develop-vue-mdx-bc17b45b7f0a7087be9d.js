(window.webpackJsonp=window.webpackJsonp||[]).push([[2015],{yV0P:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return O}));t("3bBZ"),t("q1tI");var o=t("7ljp"),a=t("013z");t("qKvR");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={},l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)},b=l("PageDescription"),i=l("InlineNotification"),p=l("Row"),u=l("Column"),m=l("ResourceCard"),d=l("MdxIcon"),h={_frontmatter:c},j=a.a;function O(e){let{components:n}=e,t=s(e,["components"]);return Object(o.b)(j,r({},h,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"The library provides front-end developers & engineers a collection of reusable\nVue components to build websites and user interfaces. Adopting the library\nenables developers to use consistent markup, styles, and behavior in prototype\nand production work.")),Object(o.b)(i,{mdxType:"InlineNotification"},Object(o.b)("p",null,"The Vue library is maintained by members of the Carbon community. For support,\ncontact the\n",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-components-vue/issues/new/choose"}),"Carbon Vue team"),".")),Object(o.b)("h2",null,"Resources"),Object(o.b)(p,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(m,{subTitle:"Carbon Components Vue",href:"https://vue.carbondesignsystem.com",mdxType:"ResourceCard"},Object(o.b)("img",{src:"/6bb010137a452235973d3a00782b8150/storybook.svg",alt:"Storybook icon"}))),Object(o.b)(u,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(m,{subTitle:"Try Vue components with CodeSandbox",href:"https://codesandbox.io/s/5zk452o9jp",mdxType:"ResourceCard"},Object(o.b)(d,{name:"codesandbox",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Getting started"),Object(o.b)("p",null,"Assuming we’re starting with a new Vue CLI project:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"vue create --default my-project\ncd my-project\n")),Object(o.b)("p",null,"Using Yarn"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn add @carbon/vue\n")),Object(o.b)("p",null,"Or npm"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm install @carbon/vue\n")),Object(o.b)("p",null,"In src/main.js, after “import Vue from ‘vue’”, add the following to include the\ncarbon styles and components."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"import 'carbon-components/css/carbon-components.css';\nimport CarbonComponentsVue from '@carbon/vue/src/index';\nVue.use(CarbonComponentsVue);\n")),Object(o.b)("p",null,"Replace the contents of src/components/HelloWorld.vue with the following"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-html"}),'<template>\n  <div class="sample">\n    <h1>Example use of @carbon/vue</h1>\n    <cv-text-input\n      label="Who are you?"\n      v-model="yourName"\n      placeholder="your name"\n    />\n    <cv-button @click="onClick">Hello {{yourName}}</cv-button>\n    <cv-modal :visible="visible" @modal-hidden="modalClosed">\n      <template slot="title">Welcome to @carbon/vue {{yourName}}</template>\n      <template slot="content">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, seed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat.\n        </p>\n      </template>\n    </cv-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \'HelloWorld\',\n    data() {\n      return {\n        yourName: \'\',\n        visible: false,\n      };\n    },\n    methods: {\n      onClick() {\n        this.visible = true;\n      },\n      modalClosed() {\n        this.visible = false;\n      },\n    },\n  };\n<\/script>\n\n<style>\n  .sample {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 600px;\n    margin: 5% auto;\n  }\n\n  .cv-text-input {\n    margin: 30px 0;\n  }\n</style>\n')),Object(o.b)("p",null,"That’s it! Now start the server and start building."),Object(o.b)("p",null,"Using Yarn"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"yarn serve\n")),Object(o.b)("p",null,"Or npm"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"npm serve\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: This isn’t the only way to bootstrap a")," ",Object(o.b)("inlineCode",{parentName:"p"},"carbon-components-vue"),"\n",Object(o.b)("em",{parentName:"p"},"application, but the combination of")," ",Object(o.b)("inlineCode",{parentName:"p"},"Vue CLI")," ",Object(o.b)("em",{parentName:"p"},"and the")," ",Object(o.b)("inlineCode",{parentName:"p"},"carbon-components"),"\n",Object(o.b)("em",{parentName:"p"},"scss is our recommended setup.")),Object(o.b)("h3",null,"List of available components"),Object(o.b)("p",null,"View available Vue Components ",Object(o.b)("a",r({parentName:"p"},{href:"http://vue.carbondesignsystem.com"}),"here"),". Usage\ninformation is available in the notes provided with each story."),Object(o.b)("h2",null,"Troubleshooting"),Object(o.b)("p",null,"If you experience any issues while getting set up with Carbon Components Vue,\nplease head over to the\n",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-components-vue"}),"GitHub repo")," for\nmore guidelines and support. Please\n",Object(o.b)("a",r({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-components-vue/issues"}),"create an issue"),"\nif your issue does not already exist."))}O.isMDXComponent=!0}}]);