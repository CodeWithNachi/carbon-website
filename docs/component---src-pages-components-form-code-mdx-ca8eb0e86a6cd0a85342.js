(window.webpackJsonp=window.webpackJsonp||[]).push([[1900],{A0Bx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return f}));n("3bBZ"),n("q1tI");var o=n("7ljp"),r=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},m=i("PageDescription"),p=i("Row"),s=i("Column"),u=i("ResourceCard"),d=i("MdxIcon"),b=i("ComponentDemo"),h=i("ComponentVariant"),x={_frontmatter:c},y=r.a;function f(e){let{components:t}=e,n=l(e,["components"]);return Object(o.b)(y,a({},x,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(m,{mdxType:"PageDescription"},Object(o.b)("p",null,"Preview the form component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),Object(o.b)("h2",null,"Documentation"),Object(o.b)(p,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(s,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/form--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"react",mdxType:"MdxIcon"}))),Object(o.b)(s,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",mdxType:"ResourceCard"},Object(o.b)(d,{name:"angular",mdxType:"MdxIcon"}))),Object(o.b)(s,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvform--default",mdxType:"ResourceCard"},Object(o.b)(d,{name:"vue",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Live demo"),Object(o.b)(b,{components:[{id:"form",label:"Form"}],mdxType:"ComponentDemo"},Object(o.b)(h,{id:"form",knobs:{TextInput:["disabled","invalid","light","type"],TextArea:["disabled","invalid","light"],Select:["disabled","invalid","light","inline"],SelectItem:["disabled","hidden"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/form--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvform--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=form"},mdxType:"ComponentVariant"},'\n  <Form>\n  <FormGroup>\n    <TextInput\n      helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"\n      id="test2"\n      invalidText="Invalid error message."\n      labelText="Text input label"\n      placeholder="Placeholder text"\n    />\n  </FormGroup>\n  <FormGroup>\n  <TextArea\n    cols={50}\n    helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"\n    id="test5"\n    invalidText="Invalid error message."\n    labelText="Text area label"\n    placeholder="Placeholder text"\n    rows={4}\n  />\n  </FormGroup>\n  <FormGroup>\n    <Select\n      defaultValue="placeholder-item"\n      id="select-1"\n      invalidText="This is an invalid error message."\n      labelText="Select"\n    >\n      <SelectItem\n        text="Option 1"\n        value="option-1"\n      />\n      <SelectItem\n        text="Option 2"\n        value="option-2"\n      />\n      <SelectItem\n        text="Option 3"\n        value="option-3"\n      />\n    </Select>\n  </FormGroup>\n  <Button\n    kind="primary"\n    tabIndex={0}\n    type="submit"\n  >\n    Submit\n  </Button>\n</Form>\n  ')))}f.isMDXComponent=!0}}]);