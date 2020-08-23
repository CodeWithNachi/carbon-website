(window.webpackJsonp=window.webpackJsonp||[]).push([[1975],{A08m:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return f}));a("3bBZ"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},c=r("PageDescription"),p=r("AnchorLinks"),b=r("AnchorLink"),d=r("ComponentDemo"),u=r("ComponentVariant"),m=r("Row"),g=r("Column"),A={_frontmatter:l},h=i.a;function f(e){let{components:t}=e,a=o(e,["components"]);return Object(n.b)(h,s({},A,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Text inputs enable the user to interact with and input content and data. This\ncomponent can be used for long and short form entries.")),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(b,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(b,{mdxType:"AnchorLink"},"Formatting"),Object(n.b)(b,{mdxType:"AnchorLink"},"Content"),Object(n.b)(b,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"There are instances, sometimes in the same form, where you need users to enter\nboth short and long form content. Allow the size of the text input box to\nreflect the length of the content you expect the user to enter."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",s({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",s({parentName:"tr"},{align:null}),"Purpose"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Text input"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"When the expected user input is a single line of text, as opposed to a paragraph.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",s({parentName:"tr"},{align:null}),"Text area"),Object(n.b)("td",s({parentName:"tr"},{align:null}),"When the expected user input is more than one sentence.")))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(d,{components:[{id:"text-input",label:"Text input"},{id:"password-input",label:"Password input"},{id:"text-area",label:"Text area"}],mdxType:"ComponentDemo"},Object(n.b)(u,{id:"text-input",knobs:{TextInput:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/textinput--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=text-input"},mdxType:"ComponentVariant"},'\n    <FormGroup>\n      <TextInput\n        helperText="Optional helper text"\n        id="test2"\n        invalidText="A valid value is required"\n        labelText="Text input label"\n        placeholder="Placeholder text"\n      />\n    </FormGroup>\n  '),Object(n.b)(u,{id:"password-input",links:{React:"https://react.carbondesignsystem.com/?path=/story/textinput--toggle-password-visibility",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--label",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextinput--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=text-input"},mdxType:"ComponentVariant"},'\n    <FormGroup>\n    <TextInput.PasswordInput\n      helperText="Optional helper text"\n      hidePasswordLabel="Hide password"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text input label"\n      placeholder="Placeholder text"\n      showPasswordLabel="Show password"\n    />\n    </FormGroup>\n  '),Object(n.b)(u,{id:"text-area",knobs:{TextArea:["disabled","invalid","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/textarea--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-input--textarea",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtextarea--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=text-input"},mdxType:"ComponentVariant"},'\n    <FormGroup>\n    <TextArea\n      cols={50}\n      helperText="Optional helper text"\n      id="test2"\n      invalidText="A valid value is required"\n      labelText="Text area label"\n      placeholder="Placeholder text"\n      rows={4}\n    />\n    </FormGroup>\n  ')),Object(n.b)("h2",null,"Formatting"),Object(n.b)("h3",null,"Default values"),Object(n.b)("p",null,"Where possible, add programmatic assistance. Detect and pre-fill inputs to\nreduce errors and save time. When the software can’t determine the value that\nbelongs in an input, use type-ahead to make suggestions. Use sentence-case for\ndefault values, detected values, and auto-completion text."),Object(n.b)("h3",null,"Validation and errors"),Object(n.b)("p",null,"Real time validation helps to streamline the process and keep data clean when\nthe user is filling out forms. For full guidelines, refer to the\n",Object(n.b)("a",s({parentName:"p"},{href:"/components/form/usage"}),"forms")," usage page."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABHElEQVQoz2NgQAJHV60B00eWLmc4uXU749WDhxg/XL/B+P7adQgGsa9cY3x34hRY3f///xluyakz4AXn16xjIAaADCMI1k6aAqZXdPcK71i4SOn0ho3SP89fFHp96KjQ26PHhd4ePioEdKXw+ytXeWGG3sTnwscnTzOD6GfHTtTfv3jpx/1Ll5++vnf/2acnT599ePz42cdnz568v3rt69tDR8Fh8+//f8Zbchq4DXwyYw4j2MCpM1UfLVjs8WDeQpdnS1e4vl65xvXl0hXub/YdtHl77ITl683bNEHqfoNdqIHf20+fPiUqDH8SE4Zv37wB0++ePGF4/f0b4+u/fxg/Ab31FYo/3L3H9PbQEaY3O3aDffIXHMuoLgQAIauktX2vSC8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Validation text example",title:"Validation text example",src:"/static/7fee1596477d1540645bea1ac9ed55c5/3cbba/text-input-usage-2.png",srcSet:["/static/7fee1596477d1540645bea1ac9ed55c5/7fc1e/text-input-usage-2.png 288w","/static/7fee1596477d1540645bea1ac9ed55c5/a5df1/text-input-usage-2.png 576w","/static/7fee1596477d1540645bea1ac9ed55c5/3cbba/text-input-usage-2.png 1152w","/static/7fee1596477d1540645bea1ac9ed55c5/392b1/text-input-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Character count"),Object(n.b)("p",null,"Text fields and text areas may have a character limit and counter. Use the\ncharacter limit and counter to let users know how long their entry can be before\nthey begin typing."),Object(n.b)("p",null,"While useful for data collection, character count is not an intuitive way to\ncommunicate content length to users. Character count allows a user to understand\nan input error if they surpass the character limit."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABCElEQVQoz5VSTWuDQBSM25s0PyK9pLnl0OaW/vi2IQctFiGBKErEL0jwY1W8JO7rrE2LJTFtB4aR9+a9ZWcdDDogom8FlS9mWcaiKGJhGLKyLNmp/mOmF78a/uPVdb1VTdMYvh9N03wyDGPu+/5DmqbTOI6njuPM0JvZtn0jvej3LyyKQjmdrOJ6a8/zCINHy7KE67oCtWOSJJTn+aZpmmF35iKQT9uEWUVum7quCSoXEOecqqoiIQTB54DD7sxFYKhtYomKk99gPkA5WEryTxw4z9/3+92t9CKK/oW4UqvISgmCYITsJtAxeC+J/hiceNvt3eLlmUnverW6/jD4Pf78ysvF61ntA64T6qCec5SyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"An example of a text area.",title:"An example of a text area.",src:"/static/1e4ee34a654d1a89746846a9f266900e/3cbba/text-area-usage-1.png",srcSet:["/static/1e4ee34a654d1a89746846a9f266900e/7fc1e/text-area-usage-1.png 288w","/static/1e4ee34a654d1a89746846a9f266900e/a5df1/text-area-usage-1.png 576w","/static/1e4ee34a654d1a89746846a9f266900e/3cbba/text-area-usage-1.png 1152w","/static/1e4ee34a654d1a89746846a9f266900e/392b1/text-area-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Content"),Object(n.b)("h3",null,"Labels"),Object(n.b)("p",null,"Effective form labeling helps users understand what information to enter into a\ntext input. Using placeholder text in lieu of a label is sometimes employed as a\nspace-saving method. However, this is not recommended because it hides context\nand presents accessibility issues."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABMUlEQVQoz42Sy0rDQBSGM/gE7gQ3UnwBFxURQUUEEVy4cdWNLSqCLly4VihpsQjFF/DFciPkfpnJlRCy0X9ksilp7cDPucw5XyaHI0kLR9M0ad1TluXqghamquomdJrn+SGajqqq6iuKsue67kld1wdFURxDOy10KdiyLCJsT9f1SZIk79A4y7JXxCPkPxC/QTPonNfCEqgbaJpmC9zGC5/xojvA7tM0Hdi2fY37F+gR8RPy+7wWlkDdQM/z/oBhGG4ZhjEE+BbNQzTcMMbOkB/FcTyA/wC/z2ujKCLwVwN93991HGcO4CcaZGgK0AySAecj+AqC4Ep8nMDvBmLQG2LQlz//HNR+tz1QN5APWNgeNMXvTiBZ2FZj3M0ppRe8ljFKGKXLV6dpmrX3ECtEFnO/O3Inkkoo9wQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"An example of a text input.",title:"An example of a text input.",src:"/static/7f8884f598f41b58d770cbdfdaf76b2e/3cbba/text-input-header-usage.png",srcSet:["/static/7f8884f598f41b58d770cbdfdaf76b2e/7fc1e/text-input-header-usage.png 288w","/static/7f8884f598f41b58d770cbdfdaf76b2e/a5df1/text-input-header-usage.png 576w","/static/7f8884f598f41b58d770cbdfdaf76b2e/3cbba/text-input-header-usage.png 1152w","/static/7f8884f598f41b58d770cbdfdaf76b2e/0b124/text-input-header-usage.png 1728w","/static/7f8884f598f41b58d770cbdfdaf76b2e/99571/text-input-header-usage.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h4",null,"Accessibility best practices for labels"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Labels must be visible when an input gets focus."),Object(n.b)("li",{parentName:"ul"},"Labels must be announced to the screen reader on focus."),Object(n.b)("li",{parentName:"ul"},"Ensure the helper text that appears under an input is read when an assistive\ntechnology user stops at an input using ARIA.")),Object(n.b)("h3",null,"Placeholder text"),Object(n.b)("p",null,"Placeholder text provides hints or examples of what to enter. Placeholder text\ndisappears after the user begins entering data into the input and should not\ncontain crucial information. Use sentence-style capitalization, and in most\ncases, write the text as a direct statement without punctuation."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQY042QyQqDMBRFNVmV/kx3dtj3twv9ATWOuFIDgo2ocQB39hpIKRSrFw4nhJvHI4bxlXmePwbmwjiORAhBpJSk73vSdd2CibPqaq9GD92TYRj+FzzPU47jmDDGbr7v34uiuDZNY2GrMwZY4AJOgGwOxUPlaZoOVVU9yrIUIAe8rmvetm2Ozgt+guPShc3NDV3XNaIoomEY0iRJaJZlNAgCats2dRxHo7raq+Gc7/7DNE1/7t4ASJaOXlM0sQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Placeholder text example",title:"Placeholder text example",src:"/static/bd93103e22b2d470a35ac6a0f9b70c57/3cbba/text-input-usage-1.png",srcSet:["/static/bd93103e22b2d470a35ac6a0f9b70c57/7fc1e/text-input-usage-1.png 288w","/static/bd93103e22b2d470a35ac6a0f9b70c57/a5df1/text-input-usage-1.png 576w","/static/bd93103e22b2d470a35ac6a0f9b70c57/3cbba/text-input-usage-1.png 1152w","/static/bd93103e22b2d470a35ac6a0f9b70c57/392b1/text-input-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Helper text"),Object(n.b)("p",null,"Helper text is pertinent information that assists the user in completing a\nfield. Helper text is always available when the input is focused and appears\nunderneath the label. Use sentence-style capitalization, and in most cases,\nwrite the text as full sentences with punctuation."),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAmElEQVQoz5WR2w7CIBBE+/+f54OJ0ScvaISoKLcW2JE0VSo0qZ3kZLKwmSxLg5GI6Ovz9J2DZzUoRGUHyjqf08RVMxVmrMPzpZO3CBHoPKELGR/GE9J84JE7rDYM6y3Dbi/AhMWJmwGNw9XCdQsCpWpx5hKXBL8piIfpnd81pPZQNiL+M2HeC9VQejvi0h3mxopPdPXLv6lvqpYpBjlBiA8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Helper text example",title:"Helper text example",src:"/static/8d2f16aacef7d83f3efeb71b50ce7925/3cbba/text-input-usage-3.png",srcSet:["/static/8d2f16aacef7d83f3efeb71b50ce7925/7fc1e/text-input-usage-3.png 288w","/static/8d2f16aacef7d83f3efeb71b50ce7925/a5df1/text-input-usage-3.png 576w","/static/8d2f16aacef7d83f3efeb71b50ce7925/3cbba/text-input-usage-3.png 1152w","/static/8d2f16aacef7d83f3efeb71b50ce7925/392b1/text-input-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}f.isMDXComponent=!0}}]);