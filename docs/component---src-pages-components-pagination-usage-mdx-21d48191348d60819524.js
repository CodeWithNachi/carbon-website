(window.webpackJsonp=window.webpackJsonp||[]).push([[1939],{ueBN:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return h}));t("3bBZ"),t("q1tI");var n=t("7ljp"),i=t("013z");t("qKvR");function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const p={},c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)},g=c("PageDescription"),r=c("AnchorLinks"),b=c("AnchorLink"),l=c("ComponentDemo"),m=c("ComponentVariant"),d=c("Row"),u=c("Column"),A={_frontmatter:p},f=i.a;function h(e){let{components:a}=e,t=s(e,["components"]);return Object(n.b)(f,o({},A,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(g,{mdxType:"PageDescription"},Object(n.b)("p",null,"Pagination is used for splitting up content or data into several pages, with a\ncontrol for navigating to the next or previous page.")),Object(n.b)(r,{mdxType:"AnchorLinks"},Object(n.b)(b,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(b,{mdxType:"AnchorLink"},"Live demo"),Object(n.b)(b,{mdxType:"AnchorLink"},"Best practices"),Object(n.b)(b,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Generally, pagination is used if there are more than 25 items displayed in one\nview."),Object(n.b)("p",null,"The default number displayed will vary depending on the context."),Object(n.b)("h2",null,"Live demo"),Object(n.b)(l,{components:[{id:"pagination",label:"Pagination"}],mdxType:"ComponentDemo"},Object(n.b)(m,{id:"pagination",knobs:{Pagination:["disabled","isLastPage","pageInputDisabled","pagesUnknown"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/pagination--pagination",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-pagination--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvpagination--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=pagination"},mdxType:"ComponentVariant"},'\n  <div style={{width: \'800px\'}}>\n    <Pagination\n      backwardText="Previous page"\n      forwardText="Next page"\n      itemsPerPageText="Items per page:"\n      page={1}\n      pageNumberText="Page Number"\n      pageSize={10}\n      pageSizes={[\n        10,\n        20,\n        30,\n        40,\n        50\n      ]}\n      totalItems={103}\n    />\n  </div>\n  ')),Object(n.b)("h2",null,"Best practices"),Object(n.b)("h4",null,"Identify the current page"),Object(n.b)("p",null,"Clearly identify which page the user is on by displaying the current page\nnumber. By providing context into how many pages there are in total (eg. 1 of 4\npages), you can help provide clarity around the data displayed."),Object(n.b)("h4",null,"Provide various options for navigating"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Previous")," and ",Object(n.b)("em",{parentName:"p"},"next")," chevrons or links are the most useful way for the user to\nmove forward or backward through pages of data. Provide an\n",Object(n.b)("a",o({parentName:"p"},{href:"/components/select/usage"}),"inline select")," in which users can choose the page\nthey wish to navigate to."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(u,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABS0lEQVQoz5WSS26DUAxFeWQXbVfTTSRSu6COWzGN0klV2mlXwQBWgIQEE/7fQvg9eu0GlEiJoli6Ms92Tu4DK8qZKMtSZFmmRlGk7vd7tWkazr7vq3meq23bcg0SNI/M4pim6Q66J0kpH+is3BALaA4AfkmAUa6HYcjh8CtJkm0cx+9FUexmwfEuTVN63kLf0JoYyAJagCcxjiNngCdc7aRHZ+rjz/kMyNsBuDoGUlfK/ynZ971Es4eTHg57ep4Fh1zHDRoaR+3lAFQvAruuYyDBwjBkEACsY+DB4VngQAKPMxzydYg/i2qkuq75VcwzgLwSA19+dfEd4gc1mjpcfFZVpWN9dKwLy7ZtPQgCqn3go/0A9EQMuBaYX4AbuNggr5GfkR9vWRvXda8P0WLTKsChgCNhmqYwDENomiYsy+Ka4ziUed7zPGW+8h/thfnkcbHepgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of pagination controls on data table",title:"Example of pagination controls on data table",src:"/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png",srcSet:["/static/e2310c818ec5ea1e488480e3f7471b58/7fc1e/pagination-usage-1.png 288w","/static/e2310c818ec5ea1e488480e3f7471b58/a5df1/pagination-usage-1.png 576w","/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png 1152w","/static/e2310c818ec5ea1e488480e3f7471b58/392b1/pagination-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(u,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABS0lEQVQoz5WSS26DUAxFeWQXbVfTTSRSu6COWzGN0klV2mlXwQBWgIQEE/7fQvg9eu0GlEiJoli6Ms92Tu4DK8qZKMtSZFmmRlGk7vd7tWkazr7vq3meq23bcg0SNI/M4pim6Q66J0kpH+is3BALaA4AfkmAUa6HYcjh8CtJkm0cx+9FUexmwfEuTVN63kLf0JoYyAJagCcxjiNngCdc7aRHZ+rjz/kMyNsBuDoGUlfK/ynZ971Es4eTHg57ep4Fh1zHDRoaR+3lAFQvAruuYyDBwjBkEACsY+DB4VngQAKPMxzydYg/i2qkuq75VcwzgLwSA19+dfEd4gc1mjpcfFZVpWN9dKwLy7ZtPQgCqn3go/0A9EQMuBaYX4AbuNggr5GfkR9vWRvXda8P0WLTKsChgCNhmqYwDENomiYsy+Ka4ziUed7zPGW+8h/thfnkcbHepgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of pagination controls on data table",title:"Example of pagination controls on data table",src:"/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png",srcSet:["/static/e2310c818ec5ea1e488480e3f7471b58/7fc1e/pagination-usage-1.png 288w","/static/e2310c818ec5ea1e488480e3f7471b58/a5df1/pagination-usage-1.png 576w","/static/e2310c818ec5ea1e488480e3f7471b58/3cbba/pagination-usage-1.png 1152w","/static/e2310c818ec5ea1e488480e3f7471b58/392b1/pagination-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h4",null,"Items per page"),Object(n.b)("p",null,"Use an inline select within the pagination bar so the user can change the amount\nof data displayed per page."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(u,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQoz5VSS0rEQBDN2F7AYwhewBFd5AS6ELyOuyCeJxuFycZ7ZBHy/39J0kn7qu3MBJxBp+DR9ePVq+7WtJWZpqn913Rd/7tJCKGdY+i/nuf5AecdAf52X8zz/ILOsizvgyD48jxv5/v+DrGFmoWcRT6hqiorjuNPnD6IBIhm8WPzmpApwudpmgSaRdu2gvxxHPf+gr7vZY5IxMqOET5lWSagaIyiiCPmqHHyi6KQoFySJJSflMBZqTwoRONC+EiEYRj2WGtAPKA2IB6gWqKu6yFNU8rzk4QgYYr4haQ3TSO6rpOrLcY5l6ArWNnJlTdK4Q3UvONBDNd1DaxuYIgEFBuoEd6g8BXDPtSjTL8UKtJzv82V+ja3wJawXllTCjdQxhzHYbZtM3wfRvdLVwJlMqY6cpfHhnwDLD7CS36054YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of items per page on data table",title:"Example of items per page on data table",src:"/static/7f594271b00c946397480bf0a4d2c832/3cbba/pagination-usage-2.png",srcSet:["/static/7f594271b00c946397480bf0a4d2c832/7fc1e/pagination-usage-2.png 288w","/static/7f594271b00c946397480bf0a4d2c832/a5df1/pagination-usage-2.png 576w","/static/7f594271b00c946397480bf0a4d2c832/3cbba/pagination-usage-2.png 1152w","/static/7f594271b00c946397480bf0a4d2c832/392b1/pagination-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"GitHub"),"."))}h.isMDXComponent=!0}}]);