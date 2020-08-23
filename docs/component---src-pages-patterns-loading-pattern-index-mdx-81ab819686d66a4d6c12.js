(window.webpackJsonp=window.webpackJsonp||[]).push([[2067],{Hcd8:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return A}));t("3bBZ"),t("q1tI");var n=t("7ljp"),o=t("013z");t("qKvR");function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const l={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)},c=r("PageDescription"),b=r("AnchorLinks"),p=r("AnchorLink"),d=r("Row"),g=r("Column"),m=r("Caption"),u={_frontmatter:l},f=o.a;function A(e){let{components:a}=e,t=s(e,["components"]);return Object(n.b)(f,i({},u,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Loading patterns are used when information takes an extended amount of time to\nprocess and appear on-screen. Skeleton states and the loading component are two\nvisual indicators that communicate that data is loading and that the screen is\nnot frozen.")),Object(n.b)(b,{mdxType:"AnchorLinks"},Object(n.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(n.b)(p,{mdxType:"AnchorLink"},"Skeleton states"),Object(n.b)(p,{mdxType:"AnchorLink"},"Loading indicators"),Object(n.b)(p,{mdxType:"AnchorLink"},"Progressive loading"),Object(n.b)(p,{mdxType:"AnchorLink"},"Load more options"),Object(n.b)(p,{mdxType:"AnchorLink"},"Accessibility"),Object(n.b)(p,{mdxType:"AnchorLink"},"Related"),Object(n.b)(p,{mdxType:"AnchorLink"},"References"),Object(n.b)(p,{mdxType:"AnchorLink"},"Feedback")),Object(n.b)("h2",null,"Overview"),Object(n.b)("p",null,"Loading strategies assure users that their request is in progress and can create\nthe illusion of shorter load times in apps. According to\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.nngroup.com/articles/progress-indicators/"}),"research")," conducted by\nthe Nielsen Norman Group, skeleton states and other loading indicators improve\nuser satisfaction."),Object(n.b)("p",null,"In this pattern, we will look at skeleton states, loading indicators, and\nprogressive loading."),Object(n.b)("h2",null,"Skeleton states"),Object(n.b)("p",null,"Skeleton states are simplified versions of components used on an initial page\nload to indicate that the information on the page has not fully loaded yet. They\nshould only appear for only a few seconds, disappearing once components and\ncontent populate the page."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVQoz62QSw6CMBCG66m8hF7EuNO91JWPpcatiVfizQVgTaBAW1r/NmgIcQMyyZdOpzNfJiVkxojjeEF831+5rnsBB0CDIKCoUTzSKIqo53n27Of9HtScMAxPSZIsrTVN05dGFEWh67rWTdNYOOcWUxvm/R7GmBnXWZbtrRCimymUZckAx30slZTSLLSxwjzPH0aIkwM1AamUMvPbX0I9Eivs5ucTDje8d8IKiAnUQggz//3DpxG2bav/CXh2H+EaXIEDjhOg4AyWZO6AlLwB04N5J+1UL5IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a text skeleton state in a data table",title:"Example of a text skeleton state in a data table",src:"/static/ec100e031656d56f575259c0711c1973/3cbba/skeleton.png",srcSet:["/static/ec100e031656d56f575259c0711c1973/7fc1e/skeleton.png 288w","/static/ec100e031656d56f575259c0711c1973/a5df1/skeleton.png 576w","/static/ec100e031656d56f575259c0711c1973/3cbba/skeleton.png 1152w","/static/ec100e031656d56f575259c0711c1973/0b124/skeleton.png 1728w","/static/ec100e031656d56f575259c0711c1973/99571/skeleton.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Example of a skeleton state"))),Object(n.b)("p",null,"Skeleton states use motion to convey that the page is not stuck and that data is\nstill being loaded. This can help to\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.nngroup.com/articles/progress-indicators/"}),"reduce user uncertainty"),"."),Object(n.b)("p",null,"Only use skeleton states on container-based components like tiles and structured\nlists or data-based components like data tables and cards. In most cases, action\ncomponents (e.g. buttons, input fields, checkboxes, toggles) do not need to have\na skeleton state."),Object(n.b)("p",null,"Never represent toast notifications, overflow menus, dropdown items, modals, and\nloaders with skeleton states. Elements inside a modal may have a skeleton state,\nbut the modal itself should not."),Object(n.b)("h2",null,"Loading indicators"),Object(n.b)("p",null,"Loading indicators signal a user action is processing. Unlike progress bars,\nloading indicators only signal that loading is occurring and do not give any\nindication of progress. If a process will take more than a moment or two to\ncomplete, use a progress indicator instead."),Object(n.b)("p",null,"Full-screen loading indicators tell a user the entire application is processing,\nwhile inline indicators show that a specific selection or action is processing."),Object(n.b)("h3",null,"Full-screen loading"),Object(n.b)("p",null,"The ",Object(n.b)("a",i({parentName:"p"},{href:"/components/loading/usage"}),"loading component")," should be used when the\nentire page is processing. This is often applied after data is submitted or\nsaved by the user."),Object(n.b)("p",null,"If the process is going to take more than a few minutes, consider including a\n",Object(n.b)("a",i({parentName:"p"},{href:"/patterns/notification-pattern"}),"notification"),"."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB30lEQVQ4y62T24oTQRCGs/NGCQm5yVtIDhfxLkQUvFN2ZeNkTt09x7g5QBZUnGz2YvHCfY6FeQGv1WdYdhIo/+qMQwiKWbHhoyp1+DtVzVQqOK1Wq99sNi9rtVpSrVbfPZKk0Whc1uv1fuXX6XQ6t8PhkHq9HsGnbrd7NO12mwaDAfu3pWAcx6vZbEaTyeQ+SZJcqiAPwjiP4kkeRglsknOcQc0h9/P5nFijFHQc5zqKInJddwOf3ppjGls2rEUj0ybLBpalQc0hG+5ljVLQ87xr3E5CiA0XOY5NSkmgtEUeCJJSAcl1OlbYDfeyxm8Fd82eFmMrpSDBzZ6r/X8W5GIhYCFwas/olTUn1xO0ny/8vwuapsk7wW9JEqKn9gW9HH8gT2BkfdGR/5CTomjY7W+3Q8dT5ELML/b66JH5YXYNUuNhf57r6v0du8MrfnrYBxRtlfK3ge9v41ABuUUcMVXCNRxjCx6K3qt9wc/T6ZSCIND7e9rv0/DZC3ryPAExKT+gMAx0/hBeAX8UrFEK4hYXo3wFd3iM7M3ZWXZ+PspejxSQGcbOkIMVGvb3uONe1igF0zQ9Wa/XxmKxMH58/2YQUUEILowvN5+M9x9TY7VKDdT+iRMttlwuK//rsNZPK/tRA301G9UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of a progress indicator in an application",title:"Example of a progress indicator in an application",src:"/static/b0657cce1eef0389ace2ae0afb6df9e9/3cbba/larger-loader.png",srcSet:["/static/b0657cce1eef0389ace2ae0afb6df9e9/7fc1e/larger-loader.png 288w","/static/b0657cce1eef0389ace2ae0afb6df9e9/a5df1/larger-loader.png 576w","/static/b0657cce1eef0389ace2ae0afb6df9e9/3cbba/larger-loader.png 1152w","/static/b0657cce1eef0389ace2ae0afb6df9e9/0b124/larger-loader.png 1728w","/static/b0657cce1eef0389ace2ae0afb6df9e9/99571/larger-loader.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Example of a progress indicator in an application"))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"When to use"),Object(n.b)("th",i({parentName:"tr"},{align:null})))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"An action temporarily disables the application")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"If a user’s action temporarily disables the application while processing occurs, use a loading indicator and a full-screen overlay.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Processing takes more than a few seconds")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"If a loading process will require the application’s full resources and will take longer than a moment or two, use a full-screen loading indicator.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"Data from user input is being saved or submitted")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Saving data following with user input often takes a few moments. Using a loading indicator allows the application to finish processing before allowing the user to continue.")))),Object(n.b)("h3",null,"Inline loading"),Object(n.b)("p",null,"Use the inline loading component when a single component is processing. For\nexample, when an administrator invites a user, an inline loading component\nindicates the system is processing the invite request."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("img",{src:"/a12da714d1543a1ebf216983682adb8d/inline-loading-animated.gif",alt:"Example of an inline loading indicator"}),Object(n.b)(m,{mdxType:"Caption"},"Example of an inline loading indicator"))),Object(n.b)("h2",null,"Progressive loading"),Object(n.b)("p",null,"Progressive loading is a technique that loads pages in batches. The simplest\nview of the page loads first, followed by progressively more detailed batches\nuntil the entire viewport has loaded."),Object(n.b)("p",null,"The primary batch should show a page’s basic structure (the skeleton state\nversions of the container-based components), data-based text (the skeleton state\nversion of text) and non-data text. Following batches can include images,\ncontent outside of the viewport, interactive (action-based) components, and\ndata-based text."),Object(n.b)("p",null,"Not all items need a skeleton state and instead can be expressed as negative or\nwhite space until they load. For example, a 600 x 600px image can be shown as a\n600 x 600px area of white space until the full image loads."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQ4y62Tz0rDQBCHI75Dbt1EairkjQRPgk/iRWyDtNAlTUCppyKoeBYED158DE1CzSnZ/MUlGSdp3AbtwWAHPmbJ7nz8lrCSLMvStmpXknbqha7rh5qmUVVVh4ihKIpR9QpCyEZ6PYLniDHok+FBn9DB/t6xME8mk9vFYgGUUrAsC2zbFpimuZEZMqUmnJ5TMKbXcDYaPwkhAFzCqlLk868UiPEM2egF4NWFOyH0fX8exzF4nsdd14VvHMcRvU177+3d4SyKYbn8eBDCMAznVbwoijhSdWCM1bTXP7+tzjJezTIWroVpms6bK3PoXvVMluVrYZIktbAoCo5AR2ohhvotLMuSI9CRjcKrRpg30i7kqytn923hDfyzMOGjEAZBcIR/zEIukHFHqhkLHSe1DCNv7S1jSukLrRqx3amEWQwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"First phase of a dashboard using skeleton states to demonstrate progressive loading",title:"First phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/7a6a74b4dd24381bd15edbea45d54fe8/3cbba/prog-loading-1.png",srcSet:["/static/7a6a74b4dd24381bd15edbea45d54fe8/7fc1e/prog-loading-1.png 288w","/static/7a6a74b4dd24381bd15edbea45d54fe8/a5df1/prog-loading-1.png 576w","/static/7a6a74b4dd24381bd15edbea45d54fe8/3cbba/prog-loading-1.png 1152w","/static/7a6a74b4dd24381bd15edbea45d54fe8/0b124/prog-loading-1.png 1728w","/static/7a6a74b4dd24381bd15edbea45d54fe8/99571/prog-loading-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Phases of progressive loading")),Object(n.b)(g,{colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABW0lEQVQ4y62TUUvCUBTHF30H37wapoHfKOgp6JP0EukKhY01oVgvQlDRcxD00Evfos3ppmyKy02a89+5tzEjjJQ88OOce7jnx7mwSblcTtpUbEvSliiq1ep+uVxWi8VijZALhYLMM4cxtpR8ntE9JldKrLZXYmpld+cwMzebzdt2uw1FUaDrOlqtVoamaUu5IBRVw/GpClm5xkm98ZQJAVziK0LiY1US4uwZUf0FeLVxlwld1zWCIEC3240J2LaNTqcj4GeeLcuCaZpZn5/5vTfTisfBOxzXfciEvu8bk8kEJI77/T48z8NgMBADPFMfvV5PwGvecxwHvu/BdZx4NosxHA4XwjAMjfTJMX7EfD7HHyFmoihaCGk7Ix2OuSBJEgGvV0AIaanfhWuyVHiVCqepdB2m6ZPvvwtv8M+gDR8z4Wg0OqDPRifOicaa8BmdHEdCRitv7F+mLaVPi0GwL3/1LoIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Second phase of a dashboard using skeleton states to demonstrate progressive loading",title:"Second phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/9a230a4bba16bef5fa9fff55c0702f5a/3cbba/prog-loading-2.png",srcSet:["/static/9a230a4bba16bef5fa9fff55c0702f5a/7fc1e/prog-loading-2.png 288w","/static/9a230a4bba16bef5fa9fff55c0702f5a/a5df1/prog-loading-2.png 576w","/static/9a230a4bba16bef5fa9fff55c0702f5a/3cbba/prog-loading-2.png 1152w","/static/9a230a4bba16bef5fa9fff55c0702f5a/0b124/prog-loading-2.png 1728w","/static/9a230a4bba16bef5fa9fff55c0702f5a/99571/prog-loading-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)(g,{colLg:4,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABc0lEQVQ4y62TwUrDQBBAI/5Db91Waiv0jwRPgl/iRWxjsZAQU1DqpSCoeBYED178C5OmTVqSFpMmIdt0nFk1LdpD0A68zO6w+5jdJVKhUJA2FduStCUG9Xp9v1qtquVyuYHIpVJJpkwwxtZSLDJcx+RahTX2Kkyt7e4cZuZ2u33b6/VAURTQdR06nU6GpmlruUAUVYPjUxVk5RpOmudPmRAALuEzQiTJS4qcPUPUfAF4teAuEzqO0/V9HwaDAUfAsizo9/sCmlM2TRMMw8jqNKd1b4bJ3/0AbMd5yISe53WDIAAU89FoBK7rwng8FhsoYx2Gw6GAxlSzbRs8zwXHtvl8zmEymSyFYRh26bxJkvDFYgGr8XO+Jjh9oihaCmezmRDisTlKhSRNU5FzIITY1G9hHMecRN+d/Ud4JXrnPJ7jhRC0MCfx15HvV4U3VEQR/DWww8dMOJ1OD/D+dKSFr31O4DgvLdqLjiMhw5Y39i9jl9IH1iGvxokfE1IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Third phase of a dashboard using skeleton states to demonstrate progressive loading",title:"Third phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/46c774ab268cba8b512d2f0d7261446c/3cbba/prog-loading-3.png",srcSet:["/static/46c774ab268cba8b512d2f0d7261446c/7fc1e/prog-loading-3.png 288w","/static/46c774ab268cba8b512d2f0d7261446c/a5df1/prog-loading-3.png 576w","/static/46c774ab268cba8b512d2f0d7261446c/3cbba/prog-loading-3.png 1152w","/static/46c774ab268cba8b512d2f0d7261446c/0b124/prog-loading-3.png 1728w","/static/46c774ab268cba8b512d2f0d7261446c/99571/prog-loading-3.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("br",null),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",i({parentName:"tr"},{align:null}),"When to use"),Object(n.b)("th",i({parentName:"tr"},{align:null})))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"A page view is slow to load")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Pages that source data from multiple sources, such as dashboards, and can be slow to load.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",i({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"A user changes filters or facets in a table view")),Object(n.b)("td",i({parentName:"tr"},{align:null}),"Tables may be sourcing information from large data sets and so processing may take a few moments.")))),Object(n.b)("h2",null,"Load more options"),Object(n.b)("p",null,"A Load more option can be used to extend a list where only a small fraction of\noptions are displayed. It can also be used in cases where the list of options is\npopulated via a database. Using Load more allows the data to load in progressive\nbatches."),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colLg:8,mdxType:"Column"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB+klEQVQoz4VTyY7aQBA1zZFI+YLco9yjHLKgIRnNB02UHyLKd6BcBggSYLMZEDjGBi94Y5HHhqTyqmGQRpFmWipVu/v51fZaabfbCq/BYFDAXnQ6HaGqqphOp2I8HrMV+D4IAqXX64kHTL/flxhd19lLjslkIr1Sq9WUp9ZoNFKeWxdMvV6XXtO0N81m8wZ21Wq1Koh8haxvhsPhK76P45gze4f760ajUcGeMRVgrlHFywspp84fOPxu2zYBQEidDMOgJEloNpt9PZdcwg8DPkcQPifTNMl1Xd6/Z8x8PhfK4XCQhOv1uprnOW02m3y32/1lT1hhGN7yPYKVfN/X9vs9bbfbI4wxf/gfkH5gTBRFQgFAEnqeVwWAwijK4S+EyOz2BA5LjuNoQRhy5gcmgx2zLHtMeH+fSkLf96r7/Y7Qq/wc/VGG/jooua6jxXGEKpLjOejxvwzjlCThyg1+bDKipZcQSmZi5iOU+U2WPOu+mMwWQ2OZkGGuyPNcsiyb0CpC7z4yBj0F4SaVUzZ+m68Nc/nZMO1PlmWVYey/YAhyys27n6Kr9t521EFF1fplDK8MTZYx9Qp0K6cMf5JOmKRPasy2rWd1CJWcNmmaSW/ZdmG5coqrlSPQ/AcrLhYL+VJ+NevQmS708aTILwjSEshSdLvdImR0Efc/7svqtT0k7MIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Example of Load more",title:"Example of Load more",src:"/static/2222cb53459d13f190a04782ab1c1d4e/3cbba/load-more.png",srcSet:["/static/2222cb53459d13f190a04782ab1c1d4e/7fc1e/load-more.png 288w","/static/2222cb53459d13f190a04782ab1c1d4e/a5df1/load-more.png 576w","/static/2222cb53459d13f190a04782ab1c1d4e/3cbba/load-more.png 1152w","/static/2222cb53459d13f190a04782ab1c1d4e/392b1/load-more.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)(m,{mdxType:"Caption"},"Example of Load more"))),Object(n.b)("h2",null,"Accessibility"),Object(n.b)("p",null,"A screen reader should\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"}),"notify a user")," if\nan application is loading, busy, gets stuck, or if a process fails."),Object(n.b)("p",null,"For specific loading accessibility concerns, see the WCAG documentation for\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"}),"Notification of Loading/Busy"),"\nand adhere to accessibility guidelines for the\n",Object(n.b)("a",i({parentName:"p"},{href:"/components/loading/accessibility"}),"loading component"),"."),Object(n.b)("h2",null,"Related"),Object(n.b)(d,{mdxType:"Row"},Object(n.b)(g,{colSm:2,colMd:2,colLg:3,mdxType:"Column"},Object(n.b)("h4",null,"Components"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/components/data-table/usage"}),"Data table")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/components/loading/usage"}),"Loading")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/components/pagination/usage"}),"Pagination")))),Object(n.b)(g,{colSm:2,colMd:2,colLg:3,mdxType:"Column"},Object(n.b)("h4",null,"Patterns"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/patterns/empty-states-pattern"}),"Empty states")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/patterns/forms-pattern"}),"Forms")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"/patterns/notification-pattern"}),"Notifications"))))),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bill Chung,\n",Object(n.b)("a",i({parentName:"li"},{href:"https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a"}),"Everything you need to know about skeleton states"),"\n(Medium UX Collective, 2018)"),Object(n.b)("li",{parentName:"ul"},"Jakob Nielsen,\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.nngroup.com/articles/progress-indicators/"}),"Progress Indicators Make a Slow System Less Insufferable"),"\n(Nielsen Norman Group, 2001)"),Object(n.b)("li",{parentName:"ul"},"Web Content Accessibility Guidelines,\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"}),"Notification of Loading/Busy"),"\n(W3C, 2016)")),Object(n.b)("h2",null,"Feedback"),Object(n.b)("p",null,"Help us improve this pattern by providing feedback, asking questions, and\nleaving any other comments\n",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"}),"on GitHub"),"."))}A.isMDXComponent=!0}}]);