(window.webpackJsonp=window.webpackJsonp||[]).push([[1866],{R6EW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return y}));a("3bBZ"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},o=s("PageDescription"),l=s("AnchorLinks"),p=s("AnchorLink"),d=s("ComponentDemo"),m=s("ComponentVariant"),u=s("Row"),g=s("Column"),h={_frontmatter:i},A=r.a;function y(e){let{components:t}=e,a=c(e,["components"]);return Object(n.b)(A,b({},h,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(o,{mdxType:"PageDescription"},Object(n.b)("p",null,"The breadcrumb is a secondary navigation pattern that helps a user understand\nthe hierarchy among levels and navigate back through them.")),Object(n.b)(l,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(p,{mdxType:"AnchorLink"},"Formatting"),Object(n.b)(p,{mdxType:"AnchorLink"},"Content"),Object(n.b)(p,{mdxType:"AnchorLink"},"Behaviors"),Object(n.b)(p,{mdxType:"AnchorLink"},"Modifiers"),Object(n.b)(p,{mdxType:"AnchorLink"},"Related"),Object(n.b)(p,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Breadcrumbs show users their current location relative to the information\narchitecture and enable them to quickly move up to a parent level or previous\nstep."),Object(n.b)("h3",null,"When to use"),Object(n.b)("p",null,"Breadcrumbs are effective in products and experiences that have a large amount\nof content organized in a hierarchy of more than two levels. They take up little\nspace but still provide context for the user’s place in the navigation\nhierarchy."),Object(n.b)("h3",null,"When not to use"),Object(n.b)("p",null,"Breadcrumbs are always treated as secondary and should never entirely replace\nthe primary navigation. They shouldn’t be used for products that have single\nlevel navigation because they create unnecessary clutter."),Object(n.b)("p",null,"If you are taking users through a multistep process use a\n",Object(n.b)("a",b({parentName:"p"},{href:"/components/progress-indicator/usage/"}),"progress indicator")," instead."),Object(n.b)("h3",null,"Types"),Object(n.b)("p",null,"Carbon supports two types of breadcrumbs. Both types are styled the same, but\nthe methods for populating the breadcrumb trail are different. The breadcrumb\ntype used should be consistent across a product."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",b({parentName:"tr"},{align:null}),"Breadcrumb type"),Object(n.b)("th",b({parentName:"tr"},{align:null}),"Purpose"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Location-based")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"These illustrate the site’s hierarchy and show the user where they are within that hierarchy.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",b({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Path-based")),Object(n.b)("td",b({parentName:"tr"},{align:null}),"These show the actual steps the user took to get to the current page, rather than reflecting the site’s information architecture. Path-based breadcrumbs are always dynamically generated.")))),Object(n.b)("h2",null,"Live demo"),Object(n.b)(d,{components:[{id:"breadcrumb",label:"Breadcrumb"}],mdxType:"ComponentDemo"},Object(n.b)(m,{id:"breadcrumb",knobs:{Breadcrumb:["noTrailingSlash"]},links:{React:"http://react.carbondesignsystem.com/?path=/story/breadcrumb--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-breadcrumb--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbreadcrumb--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=breadcrumb"},mdxType:"ComponentVariant"},'\n<Breadcrumb>\n  <BreadcrumbItem href="/">Breadcrumb 1</BreadcrumbItem>\n  <BreadcrumbItem href="/">Breadcrumb 2</BreadcrumbItem>\n  <BreadcrumbItem isCurrentPage href="/">Breadcrumb 3</BreadcrumbItem>\n</Breadcrumb>\n')),Object(n.b)("h2",null,"Formatting"),Object(n.b)("h3",null,"Anatomy"),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz2NgwAOumFWD6csmlYxXreoYQeyrtvUMF9ULGcgGVyxrGWFsoGGMRGu8alkLMcC2geEK0EX7VCsZNtpNYoS4sEr1inWdJoh9CmjofyDNeu4/g5iYGAFDgd7BBm4YlWnfsqgyBrH/2zUwqk76T4IL7Ro4gS60B7qQTSH2Iwdf+n8Ohoj/zLJ2hzg4cv5zSBhkM4HUsVwl4MIrljUQ2qae84pZlfNp9RIevcjn/Byp/wW1Qm9wawad4eFJ/S8gatvDAlLH3U+Ml23qiApv7t7/xMQm3IXA5FLFdEa9hEEv4jkDZ+p/BomIRwySwZcZ+IBsYds+uKEEXTgoAQCUYVWVkLUD7AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Breadcrumb anatomy example",title:"Breadcrumb anatomy example",src:"/static/740310aa757b0281b015f53fcd1d7d91/3cbba/breadcrumb-anatomy.png",srcSet:["/static/740310aa757b0281b015f53fcd1d7d91/7fc1e/breadcrumb-anatomy.png 288w","/static/740310aa757b0281b015f53fcd1d7d91/a5df1/breadcrumb-anatomy.png 576w","/static/740310aa757b0281b015f53fcd1d7d91/3cbba/breadcrumb-anatomy.png 1152w","/static/740310aa757b0281b015f53fcd1d7d91/92c65/breadcrumb-anatomy.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Page link:")," Directs users to the parent-level page."),Object(n.b)("li",{parentName:"ol"},Object(n.b)("strong",{parentName:"li"},"Separator:")," Clearly distinguishes between each page.")),Object(n.b)("h3",null,"Placement"),Object(n.b)("p",null,"Breadcrumbs are placed in the top left portion of the page. They sit underneath\nthe header and navigation, but above the page title."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.27777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABr0lEQVQ4y61Ty1LqQBT0I9XiUSArS+8nuPFftPwJ5HqBkk+45WMHpIAYkLwmyTCTtNNDJYC6cOGkuuakc06fx0yOiqLAby1qHdGYzWbo9/sYjUYYDofWHgwGFfj+HR7+cR+i9/cBjuNYUSvY7XZxclrDxcUlOp0Oms0mWq0W2u22RaPRQL1eP0CtVkenVcOf8zbOmsfo3Xd3gkoprHyBWCTYbKTBBlJKC9ol6EdIuUGRKzw7GoP/Go9PCoHQO0EhBF5fXzA3rS8WC1s+d2I6ndqRuK6L8XiMyWRieBfufIrb3huubt5xfbeC42U7wSzL4HkeoihGGAVYeHOEQWjeIyyXS7vHcYz1eg3f900BMTzDJ9HKnERkWgyhlTxsmQFsqzBPlAbI8+3pM9l3N4G+SZqBbkoXVuNAkFUwWBcaoQgMp60Qx2ETGVtrbRLl1k7TFEmSVPwXwTAMrRMFA7GuBJmEi0IMJPcjQVYoYgGdKyuo1fbUOAoGlqJl+0y0zx8IsiVWyOBMZghi3waQZyIGllepvEIcRTmO0rcSZMnlvbMf5daJ2Of38ZmvKvztf/kDHrDNHIFG/zsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Breadcrumb placement in a UI",title:"Breadcrumb placement in a UI",src:"/static/6a41dda2141b87090910d0f06f6a5078/3cbba/breadcrumb-placement.png",srcSet:["/static/6a41dda2141b87090910d0f06f6a5078/7fc1e/breadcrumb-placement.png 288w","/static/6a41dda2141b87090910d0f06f6a5078/a5df1/breadcrumb-placement.png 576w","/static/6a41dda2141b87090910d0f06f6a5078/3cbba/breadcrumb-placement.png 1152w","/static/6a41dda2141b87090910d0f06f6a5078/92c65/breadcrumb-placement.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Content"),Object(n.b)("h3",null,"Main elements"),Object(n.b)("h4",null,"Page link"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Each page link should be short and clearly reflect the location or entity it\nlinks to."),Object(n.b)("li",{parentName:"ul"},"Start with the highest level parent page and move deeper into the information\narchitecture as the breadcrumb trail progresses."),Object(n.b)("li",{parentName:"ul"},"By default, the current page is not listed in the breadcrumb trail.")),Object(n.b)("h3",null,"Overflow content"),Object(n.b)("p",null,"When space becomes limited, use an\n",Object(n.b)("a",b({parentName:"p"},{href:"/components/overflow-menu/usage"}),"overflow menu")," to truncate the breadcrumbs.\nThe first and last two page links should be shown, but the remaining breadcrumbs\nin between are condensed into an overflow menu. Breadcrumbs should never wrap\nonto a second line."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABjUlEQVQoz2NgoAlI+o+gk/4xMKT/Z2CMfc8gw8HAwOU0i4Ex/gsDw1SgXMp/BtagM0D+VwaGAiA74DiDFC9Eq7iEFJqByTBD/zGwAw1k0HvL8OjZW4Z3798zbj37hXHm3m+Muy99ZXz9/CEDg8d/iJr4bxA9//8zCOhEYnEpzFBSwP//eL3MBHShKFPqf2GG4HcCO/ef4N539olI8vx/8onz/yvkLPou41Jxip8h+o8oI1ANU9QzQTUGBkaQVlE5XSwGJgLDJfUvS8HSX+wg7tu373qfPn366dGTZ/ceP31x/+OnLx/fvvvgB5IrXP6HnTHmNbMB1AgRRVM0Vyb+R/LFTSYQ/ejRowVAA/9fu3btz+1bt35/+vjx/53btyMgaq4ywdTr4Yvl6iVPGV6+fscC4r569WrVfyB4//79/49Aw0Dg+fPncSC55y/fsgC9zKAFNUJUwRB7GF+6dInh06dPjBAvv3V5/PhxCRBnP3v2LBsoXgo0XBUk9+XLF0aSIu/79+84Nfz9+xenHADkrcg5uLaHaAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Truncated breadcrumbs",title:"Truncated breadcrumbs",src:"/static/4735924e9598893b927ef57255682ced/3cbba/breadcrumb-truncated.png",srcSet:["/static/4735924e9598893b927ef57255682ced/7fc1e/breadcrumb-truncated.png 288w","/static/4735924e9598893b927ef57255682ced/a5df1/breadcrumb-truncated.png 576w","/static/4735924e9598893b927ef57255682ced/3cbba/breadcrumb-truncated.png 1152w","/static/4735924e9598893b927ef57255682ced/92c65/breadcrumb-truncated.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h3",null,"Further guidance"),Object(n.b)("p",null,"For further content guidance, see Carbon’s\n",Object(n.b)("a",b({parentName:"p"},{href:"/guidelines/content/general"}),"content guidelines"),"."),Object(n.b)("h2",null,"Behaviors"),Object(n.b)("h3",null,"Interactions"),Object(n.b)("p",null,"All the page links in the breadcrumb component should be interactive and link to\ntheir respective pages."),Object(n.b)("h4",null,"Mouse"),Object(n.b)("p",null,"Users can trigger an item by clicking on a breadcrumb page link. The separators\nbetween page links are not interactive."),Object(n.b)("h4",null,"Keyboard"),Object(n.b)("p",null,"Users can trigger a breadcrumb link by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter")," while the link has\nfocus. For additional keyboard interactions, see\nthe ",Object(n.b)("a",b({parentName:"p"},{href:"https://www.carbondesignsystem.com/components/breadcrumb/accessibility"}),"accessibility tab"),"."),Object(n.b)("p",null,"Users can navigate between breadcrumb links by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Tab")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Shift-Tab"),"."),Object(n.b)("h4",null,"Screen readers"),Object(n.b)("p",null,"VoiceOver: Users can trigger a breadcrumb link by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter")," or\n",Object(n.b)("inlineCode",{parentName:"p"},"Control-Option-Space"),". Users can navigate between breadcrumb links by\npressing ",Object(n.b)("inlineCode",{parentName:"p"},"Tab")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Shift-Tab"),"."),Object(n.b)("p",null,"Jaws: Users can trigger a breadcrumb link by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter"),". Users can\nnavigate between breadcrumb links by pressing the ",Object(n.b)("inlineCode",{parentName:"p"},"Up")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Down")," arrow keys."),Object(n.b)("p",null,"NVDA: Users can trigger a breadcrumb link by pressing ",Object(n.b)("inlineCode",{parentName:"p"},"Enter"),". Users can\nnavigate between breadcrumb links by pressing the ",Object(n.b)("inlineCode",{parentName:"p"},"Up")," and ",Object(n.b)("inlineCode",{parentName:"p"},"Down")," arrow keys."),Object(n.b)("p",null,"For additional information, see\n",Object(n.b)("a",b({parentName:"p"},{href:"https://www.carbondesignsystem.com/components/breadcrumb/accessibility#macos-screen-reader-tests"}),"screen reader tests"),"."),Object(n.b)("h2",null,"Modifiers"),Object(n.b)("p",null,"By default, Carbon breadcrumb trails should not include the current page. If a\npage doesn’t have a title or the current page is not clear, it can be included\nin the breadcrumb trail. If the current page is included in a breadcrumb trail,\nit is always the last page link listed and is not an interactive link."),Object(n.b)(u,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",b({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAArklEQVQoz9WRQQrCMBBFZ5Wk2HZIA0m9R6GXqHco1tJ9l3qzbnosu9H4bRBFVHSlDoTMh/B54RH9xfD6OJ/rfiDeeNKrkbjeh9x5MuWWnBZk3ZKstfP7833ZHxZ/Mi+LbggliCIQKhAKECpklXZemnInQChBGKFMPCW8K1ygIOPGs64GyfWUImtufWyKXliTJNblGUrir305SGggpRogZQq5hZSiJxBCSv6elJ+cE4bRPm8NLRC4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",b({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Breadcrumb showing current page",title:"Breadcrumb showing current page",src:"/static/b524f0f715746e0b261d06faad3c0527/3cbba/breadcrumb-current-page.png",srcSet:["/static/b524f0f715746e0b261d06faad3c0527/7fc1e/breadcrumb-current-page.png 288w","/static/b524f0f715746e0b261d06faad3c0527/a5df1/breadcrumb-current-page.png 576w","/static/b524f0f715746e0b261d06faad3c0527/3cbba/breadcrumb-current-page.png 1152w","/static/b524f0f715746e0b261d06faad3c0527/92c65/breadcrumb-current-page.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Related"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"/patterns/global-header"}),"Global header")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"/components/progress-indicator/usage/"}),"Progress indicator")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",b({parentName:"li"},{href:"/components/UI-shell-header/usage"}),"UI shell header"))),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",b({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}y.isMDXComponent=!0}}]);