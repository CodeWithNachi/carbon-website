(window.webpackJsonp=window.webpackJsonp||[]).push([[1858],{HYxi:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return f}));a("3bBZ"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},b=l("PageDescription"),m=l("AnchorLinks"),r=l("AnchorLink"),d=l("Row"),p=l("Column"),g=l("Caption"),A={_frontmatter:s},u=i.a;function f(e){let{components:t}=e,a=c(e,["components"]);return Object(n.b)(u,o({},A,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h4",null,"Maintainer:"),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/vikkipaterson"}),"Vikki Paterson")),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"“Removing” is an action that moves information from one location to another.\nRemoval can be both destructive and non-destructive. “Deletion” is the most\ncommon type of removal and is destructive.")),Object(n.b)(m,{mdxType:"AnchorLinks"},Object(n.b)(r,{mdxType:"AnchorLink"},"High-impact deletion"),Object(n.b)(r,{mdxType:"AnchorLink"},"Medium-impact deletion"),Object(n.b)(r,{mdxType:"AnchorLink"},"Low-impact deletion"),Object(n.b)(r,{mdxType:"AnchorLink"},"Medium-impact removal"),Object(n.b)(r,{mdxType:"AnchorLink"},"Low-impact removal"),Object(n.b)(r,{mdxType:"AnchorLink"},"Anatomy")),Object(n.b)("h3",null,"Delete / Remove variations"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Action"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Variation"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Delete"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"High impact")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Action can’t be reversed and causes significant loss. The user types the resource name into the modal to confim deletion.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Medium impact")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Action can’t be reversed and causes some loss. The user sees a modal and confirms the consequence of deletion.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Low impact")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Action is reversible or very low impact. A confirmation modal may not be required.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Remove"),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Medium impact")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Action can’t be reversed and causes some loss. The user sees a modal and confirms the consequence of removal.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Low impact")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Action is reversible or very low impact. A confirmation modal may not be required.")))),Object(n.b)("h2",null,"High-impact deletion"),Object(n.b)("p",null,"A high-impact deletion cannot be reversed. The action would result in a\nsignificant loss for a user if done accidentally."),Object(n.b)("p",null,"When deleting is high-impact, a confirmation dialog should be presented to the\nuser which displays:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The name of the resource"),Object(n.b)("li",{parentName:"ul"},"Consequences of the deletion"),Object(n.b)("li",{parentName:"ul"},"This action cannot be undone."),Object(n.b)("li",{parentName:"ul"},"An editable text field for the name of the resource to be entered")),Object(n.b)("p",null,"For high-impact scenarios, a user should confirm the action by manually entering\nthe name of the resource. The ‘Delete’ button is enabled when the text entered\nperfectly matches the resource name."),Object(n.b)("p",null,"Optionally a ",Object(n.b)("a",o({parentName:"p"},{href:"#done-modal"}),"Done modal"),", ",Object(n.b)("a",o({parentName:"p"},{href:"#requested-modal"}),"Requested modal")," or\n",Object(n.b)("a",o({parentName:"p"},{href:"#notification"}),"Notification")," can be used to confirm the action (or a\ncombination of one modal and a notification)."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABOElEQVQoz42T3aqCQBSFu+8mewSfwJcSxduuez7fQPIHJMwyf1JLBaFa56yBEcsKBz72jM6svfZsXeB/PJ9PyPjO3CH3LsZi3zY+Ho8hyvmnxIyL8YPL5YI4jnE+n5EkCfI8x+12Q9u2aJpGRMJn5Hq9oqqq74LH4xGO48D3fbiuK4SZpCgKAROQuq4HQcavgnRHoSAIBBTe7XZiTsd8T+hKCtL5RFAuuKEsywEe5AHSdd2kZPJTkKWkaYosy0RkebJkivd9P4GJ2KhB8FeHx0M6fYeOPzpkpu12C8uyYJomDMMQUdd1bDYbcZe8xyiKcDgcBJyfTqdXh3LBcjVNw3q9xmq1EiiKguVyCVVVYds29vs9PM8TzSKch2GI+/0+dUhhdpOfDTstkV1maZ/ukLyUPPcO5/56f000g9dFzJdzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"The user enters the resource name in order to confirm deletion.",title:"The user enters the resource name in order to confirm deletion.",src:"/static/94e3e3991cb5ce4152271245cad4f4a7/3cbba/2.png",srcSet:["/static/94e3e3991cb5ce4152271245cad4f4a7/7fc1e/2.png 288w","/static/94e3e3991cb5ce4152271245cad4f4a7/a5df1/2.png 576w","/static/94e3e3991cb5ce4152271245cad4f4a7/3cbba/2.png 1152w","/static/94e3e3991cb5ce4152271245cad4f4a7/392b1/2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," ","The user needs to enter the resource name in order to confirm deletion."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABZElEQVQoz5WTzU7CQBRGWbpou1EXapSFictufSgTGjRGXOhCFj6ZL0AoTKW6IVQgtPxNG4yln3MvDlQMBCc5ue309szXTluAGlmWQdd1dh26t5CXbWrcBd1byE9EUYQgCNDv99HtdjEYDDCdThHH8S+klAxdG41Gm4Ukc10XrVYLnueh1+vxImEYMrQAMR6PWTaZTLhuFHY6HRaR0Pd9rkIIPqbEtCD1UCotpKR/hPqEGobDId9AlaAb1x9bzxFbhSSiFATJqDlJEmam+MxVTaJ65vP5Srhth/MjUUhFnEP+zGcLCddlQkpRrVZRLpfhOA5KpRJzpagoxN0DPiqPaF9XFtzco+3cInh6RirjVUIdl3bOtm1YlgXTNGEYBizFnqJomHg5Psf7yQWa+6fwDs7gHRYhrCO82ZdIw2ghVK5lwjRNeUdrtRp/Opq6QihkvYEZ0RAr3CZmrz6yr/T/73DXX+8bCUJyLzbDanoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"When the resource name is entered the Delete button is enabled.",title:"When the resource name is entered the Delete button is enabled.",src:"/static/64648892df210451d60afc6bb54511e4/3cbba/3.png",srcSet:["/static/64648892df210451d60afc6bb54511e4/7fc1e/3.png 288w","/static/64648892df210451d60afc6bb54511e4/a5df1/3.png 576w","/static/64648892df210451d60afc6bb54511e4/3cbba/3.png 1152w","/static/64648892df210451d60afc6bb54511e4/392b1/3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," ","When the resource name is entered the Delete button is enabled."))),Object(n.b)("h2",null,"Medium-impact deletion"),Object(n.b)("p",null,"A medium-impact deletion is one that cannot be reversed, but would not be\ncatastrophic if done accidentally. When deleting is medium-impact, a\nconfirmation dialog should be presented to the user which displays:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The name of the resource"),Object(n.b)("li",{parentName:"ul"},"Consequences of the deletion"),Object(n.b)("li",{parentName:"ul"},"The action cannot be undone.")),Object(n.b)("p",null,"Optionally an ",Object(n.b)("a",o({parentName:"p"},{href:"#optional-passive-modal"}),"Optional passive modal")," or\n",Object(n.b)("a",o({parentName:"p"},{href:"#notification"}),"Notification")," can be used to confirm the action (or a\ncombination of one modal and a notification)."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABZUlEQVQoz6WS3UoCQRiG96TQQJA6S4LOuwUvJyQ0UojqCryOILqVotPWHXdBUMLcTWN33T/d/7eZsTGjrQP74OEbPvZ7eJkdKc9zMFiJ8zaIfQmfJYbbltiXNu1hGCIIAiwWCyyXS/i+vz4XIb5PkuQr4Wbk2WwGVVUxHA6haRoMw4DneXyJdYHrunAch3fTNLm4UKjrOhRF4bJ+v4/BYMDlrL+Ox5yX0Qjv0yl8KnOp1KPEUVQsZEls28Z8PudYlsVhMy8K4dBFh6Zx4wh+EnO8OEacZd+FrDI6ZElkWQYhhCdlndDeo7z1FDgUWyGwewyFd+tZRmhaP4Xskuv1OiqVCsrlMkqlEmePIu3u4u6ghsnxCUj1ECqnBm3/CGSnCvv2fiWkP2ctjGn0breLRqOBVquFZrPJOaecUh4vLmF1bjBpX8EQdK6hn7URPDythGm2eof/fYO/vkN2j2maFpL/xYbjAxC1ImXWoXgIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a medium impact delete modal",title:"Example of a medium impact delete modal",src:"/static/194e3f245e69d90655331a2f7e8d45f6/3cbba/6.png",srcSet:["/static/194e3f245e69d90655331a2f7e8d45f6/7fc1e/6.png 288w","/static/194e3f245e69d90655331a2f7e8d45f6/a5df1/6.png 576w","/static/194e3f245e69d90655331a2f7e8d45f6/3cbba/6.png 1152w","/static/194e3f245e69d90655331a2f7e8d45f6/392b1/6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"},"An example of a standard delete modal"))),Object(n.b)("h2",null,"Low-impact deletion"),Object(n.b)("p",null,"Requiring the user to confirm deletion is generally recommended. However, in low\nimpact situations, or when an ‘undo’ option is available, user confirmation may\nnot be required."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVQoz52STQrCMBCFewvXLgVdiR7FnbjS07lwJf4ieAP/BUUqWsEKtrXFaJrmGVuUWlolDjwmZOYNH8koiAnO+Ttzz/tUqBYXChIiyfCrpnwzsLMBMp7iNp3jNluAjCZgliVPyBnzs1VvYJ0tYJ0rYpXJY5lKw262gx7XlSek2gF2pw+7NwjU6sI9nf4ndAZDaJWar12pDK1cBVW3QY/4IGlCj1LcLzaIaYI6Dq4iM3H33oAYyq8Dj/oRG1XFXdBcdR3GXoMbXinZgY6gesqnfWZC/lubqOn1Xjy69LKEYVP0nBQPQO5W9OSE4WQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of delete options in context without warnings for low impact delete actions",title:"Example of delete options in context without warnings for low impact delete actions",src:"/static/eebf37fae5d13eebdfc6117ea672d0c5/807f9/LowImpactDelete.png",srcSet:["/static/eebf37fae5d13eebdfc6117ea672d0c5/7fc1e/LowImpactDelete.png 288w","/static/eebf37fae5d13eebdfc6117ea672d0c5/a5df1/LowImpactDelete.png 576w","/static/eebf37fae5d13eebdfc6117ea672d0c5/807f9/LowImpactDelete.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," Low impact delete options"))),Object(n.b)("h2",null,"Medium-impact removal"),Object(n.b)("p",null,"Removing has a medium impact when the action can’t be reversed, and could have\nsome impact if done accidentally."),Object(n.b)("p",null,"Text should tell the user the consequences of the removal and that the action\ncannot be undone."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABYUlEQVQoz6WSzU7CQBDHe1EhhkjwJnrx7CPwOIYYMEJilCfgOUyMr6LxSmnTJiSEj1AFaYGuhX7/3d1SrKF6wEl+yWQ7+8vMdoQwDMFgEee7EN8XsI74cNeI7wtJu23bWC6XGyzL4qxWq1RYPfvued53h8mWJ5MJVFVFt9tFp9NBv9/HfD4HIYRjmuYWuq5zcapQ0zRIkgRFUbi41+thOBxGDAb4GI9BmGixAEngOk66kI05nU5hGAbvzHVdOLSYXSCODdN18Om5IGt4TmvcIPgpZBHQQzamKIqQZZl3yvI2pUV5b0tYiBJm7SQyjJYIWze2heyRS6UScrkcstksMpkM55DmwsE+Ho+LGJ1fQC6cQjk6gZIvQi2cQd7LY/bwFAnpz9kI2XjNZhPlchnVahWVSoVzTbmkvNzcwqg3MKrd4S2mfg/tqgbr+TUS+kG0h//dwV/3kL2j7/uphH+RcHwBoDwjOLWhaS8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a medium impact remove modal",title:"Example of a medium impact remove modal",src:"/static/0e3553c5966d9ce052e440a3cc7796c3/3cbba/first-view.png",srcSet:["/static/0e3553c5966d9ce052e440a3cc7796c3/7fc1e/first-view.png 288w","/static/0e3553c5966d9ce052e440a3cc7796c3/a5df1/first-view.png 576w","/static/0e3553c5966d9ce052e440a3cc7796c3/3cbba/first-view.png 1152w","/static/0e3553c5966d9ce052e440a3cc7796c3/392b1/first-view.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," ",'Removal modals should include consequences of removal, and "This action cannot be undone" statement.'))),Object(n.b)("h2",null,"Low-impact removal"),Object(n.b)("p",null,"As removing does not destroy an asset, typically user confirmation is not\nrequired."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA7ElEQVQoz51SOwrCQBTMYbSwSWHjUewsBAshnRex8RYWVuIHTyC2IialJkFXMCZs/juucdUYEiUZWObB++zsvJWQA8bYm1kcf59ULg8SClDU8C8n/WoIyQXedgd/r8FXtYRj6pZXyMIwYTIcQW00ocktqHUZak0GXW+eNVFUYiD36gGPq7pN57AXK9izZcLR1fr4m6Myf6C43RpPoHf70HsKDu0OTGWA2LpVeLIojiiFx32kp/OTzwRhEFRQKAoN08TRMOByxTaPLULgC38rDXQcB54rtspjpNSV+jbZpteSWPbTl1WYbsrGRbgDubRXKJoWX1UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of remove options in context without warnings for low impact remove actions.",title:"Example of remove options in context without warnings for low impact remove actions.",src:"/static/fc0ad9f02e6e111a53a1e38c56a829f2/807f9/LowImpactRemove.png",srcSet:["/static/fc0ad9f02e6e111a53a1e38c56a829f2/7fc1e/LowImpactRemove.png 288w","/static/fc0ad9f02e6e111a53a1e38c56a829f2/a5df1/LowImpactRemove.png 576w","/static/fc0ad9f02e6e111a53a1e38c56a829f2/807f9/LowImpactRemove.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," Example low impact remove options"))),Object(n.b)("h2",null,"Anatomy"),Object(n.b)("h3",null,"Optional passive modal"),Object(n.b)("p",null,"In high or medium impact flows, an optional passive modal can be used to signify\nthe state at the end of a remove or delete action. Some deletion or removal\nactions don’t happen immediately, in these situations it’s recommended to inform\nthe user through the optional passive modal."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAx0lEQVQoz62S2QqEMAxF/f/fcyn2yRUUKeLy4H6HBCJ1ZhwGbOGQpLQ3l6YeHC/vOA5OKD5BNDxb7MmS+xeH8zxjmiaG8nVdsW3bCdXLslygcxeHtruqqpAkCcqyRJZlXNd1jaZpzjiOI/q+Z7quQ9u22Pf9u2Ce5wjDEFprBEHAeRRFHH3fh1KKmwzDwJAoNbgVJGdxHCNNU3ZIUF4UBTeTPXL2U1AKYww7oINyweZ9T4RvBeWhZTD/8DEUe+TOv42Tj+1a8AUNUKrU+W1a4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a delete successful modal",title:"Example of a delete successful modal",src:"/static/730a9e351e7f814753698ebe7a0eb75b/807f9/Requested.png",srcSet:["/static/730a9e351e7f814753698ebe7a0eb75b/7fc1e/Requested.png 288w","/static/730a9e351e7f814753698ebe7a0eb75b/a5df1/Requested.png 576w","/static/730a9e351e7f814753698ebe7a0eb75b/807f9/Requested.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," ","Use a success modal to show that a delete request has been made / is in progress."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAsElEQVQoz62SywqFMAxE/f8/rMWV1CeKVl2VOpcpBBStyLWBIU1JTmaRDIkj2/c9PJi/SBiZPGLQtyG9J4dvhrz3J10cHj+6rkNZlqjrGlVVwRiDvu8xjiOGYYC1Ftu2YVmWoHmeMU1TAN8CCVNKoSiKkLXWyPM8ZNZcRDhBBHIBcxRIRxxs2xZN04R8lDinKwGu63oFSsEGbmfTkwQWdSiFc+4vRc/mS9yeTbLDThk/35+t+yCJMFMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a remove successful modal",title:"Example of a remove successful modal",src:"/static/3da478e89555d7a2758668276bd4ac91/807f9/DoneMedium.png",srcSet:["/static/3da478e89555d7a2758668276bd4ac91/7fc1e/DoneMedium.png 288w","/static/3da478e89555d7a2758668276bd4ac91/a5df1/DoneMedium.png 576w","/static/3da478e89555d7a2758668276bd4ac91/807f9/DoneMedium.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," Use a success modal to show that removing is complete."))),Object(n.b)("h3",null,"Notification"),Object(n.b)("p",null,"An optional notification can be used to confirm a delete or remove action has\ncompleted. This is useful when the action takes more than a few moments."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(p,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyklEQVQoz5VSXQuCQBD0//+k6KUiCh/qzPw4yQ+6UpNSpCzMuik0Q83IFoaD22F2hl0BleKcv99vQI46v1pC86ON9MFpDP8qeH81rdMGk1CGejAx91QQX4O005+gMJI1WBoUJkvXvwTp0cEoIhhaIvp0jJ42wsAWMXUlyIkJ8+o+BYvo3Ryet1BSBySimEc6ZqEOEhugVwY9Y7Ayr1vksskuPoyUQYttKJGJZbjCYm/kce2bD5YF/wnmG0X7cspeJ8Eagbefz6+LeADq7W/b2oCAnQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a successful delete notification",title:"Example of a successful delete notification",src:"/static/6ec5f0cc990e4db7ea03993fd77fdb9d/3cbba/7_updated.png",srcSet:["/static/6ec5f0cc990e4db7ea03993fd77fdb9d/7fc1e/7_updated.png 288w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/a5df1/7_updated.png 576w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/3cbba/7_updated.png 1152w","/static/6ec5f0cc990e4db7ea03993fd77fdb9d/392b1/7_updated.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(g,{mdxType:"Caption"}," ","An optional notification can be used to confirm the delete or remove action with medium or high impact actions."))))}f.isMDXComponent=!0}}]);