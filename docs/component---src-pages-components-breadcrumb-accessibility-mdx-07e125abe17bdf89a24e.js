(window.webpackJsonp=window.webpackJsonp||[]).push([[1863],{M0lu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return y}));n("3bBZ"),n("q1tI");var r=n("7ljp"),i=n("013z"),b=n("CpY+"),c=n("5sAZ"),a=n("EQQr");n("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)},u=d("AnchorLinks"),m=d("AnchorLink"),p=d("Row"),h=d("Column"),O={_frontmatter:l},j=i.a;function y(e){let{components:t}=e,n=o(e,["components"]);return Object(r.b)(j,s({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(u,{mdxType:"AnchorLinks"},Object(r.b)(m,{mdxType:"AnchorLink"},"How it works"),Object(r.b)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(r.b)(m,{mdxType:"AnchorLink"},"Resources"),Object(r.b)(m,{mdxType:"AnchorLink"},"Accessibility testing")),Object(r.b)("h2",null,"How it works"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Breadcrumb")," component implements the\n",Object(r.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb"}),"Breadcrumb design pattern from WAI ARIA"),"\nfor Carbon. It establishes a landmark on the page which assists the user in\nunderstanding where they currently are and which pages exist in the current\npage’s hierarchical order."),Object(r.b)("p",null,"The landmark is provided through the ",Object(r.b)("inlineCode",{parentName:"p"},"<nav>")," element which contains a list of\nlinks. The ",Object(r.b)("inlineCode",{parentName:"p"},"<nav>")," element is labeled by the ",Object(r.b)("inlineCode",{parentName:"p"},"aria-label"),"attribute, providing a\nchance to describe to the user the type of navigation provided by the list of\nlinks. The current page is identified with the ",Object(r.b)("inlineCode",{parentName:"p"},'aria-current="page"')," attribute\non the appropriate link."),Object(r.b)("h2",null,"Accessibility considerations"),Object(r.b)("p",null,"This component has been validated to meet the\n",Object(r.b)("a",s({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(r.b)("a",s({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The breadcrumb should remain in the same relative order and location on each\nweb page."),Object(r.b)("li",{parentName:"ol"},"The link text should be clear, reflect the breadcrumb location accurately and\neasy to understand for all users."),Object(r.b)("li",{parentName:"ol"},"The link to the current page element in the breadcrumb has the\n",Object(r.b)("inlineCode",{parentName:"li"},'aria-current="page"')," attribute.")),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb"}),"W3C WAI-ARIA Authoring Practices Breadcrumb Design Pattern"),"\ncovers the usage of ARIA names, state and roles."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/link_purpose.html"}),"2.4.4 Link Purpose (In Context)"),"\n(WCAG Success Criteria\n",Object(r.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"}),"2.4.4"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/consistent_navigation.html"}),"3.2.3 Consistent Navigation"),"\n(WCAG Success\nCriteria",Object(r.b)("a",s({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html"}),"3.2.3"),")")))),Object(r.b)("h2",null,"Accessibility testing"),Object(r.b)("p",null,"Accessibility issues are tracked in the\n",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/labels/type%3A%20a11y%20%E2%99%BF"}),"Carbon Design System GitHub repository"),"."),Object(r.b)("h3",null,"Automated test"),Object(r.b)(p,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Automated test Environment"),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(r.b)("br",null),"- Chrome version 77.0.3865.90",Object(r.b)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"DAP test:"),Object(r.b)("br",null),"- No violations")))))),Object(r.b)("h3",null,"macOS screen reader tests"),Object(r.b)(p,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(r.b)("br",null),"- Chrome version 77.0.3865.90",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"VoiceOver(VO) Test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},'Tab to the breadcrumb and VO announces, "Breadcrumb 1, breadcrumb navigation".'),Object(r.b)(a.a,{mdxType:"ListItem"},'The Tab key and shift-tab navigate between the links in the breadcrumb. VO announces, "Link Breadcrumb #. You are currently on a link to click this link press Control-Option-Space."')))),Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(r.b)("br",null),"- Safari version 12.14.6",Object(r.b)("br",null),"- Carbon React Version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"VoiceOver(VO) Test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},'Tab to the breadcrumb and VO announces, "Breadcrumb 1, breadcrumb navigation".'),Object(r.b)(a.a,{mdxType:"ListItem"},'The Tab key and shift-tab navigate between the links in the breadcrumb. VO announces, "Link Breadcrumb #. You are currently on a link to click this link press Control-Option-Space."'),Object(r.b)(a.a,{mdxType:"ListItem"},'Note: In Safari > Preferences > Advanced > ensure "Press Tab to highlight each item on a webpage" option is checked.')))))))),Object(r.b)("h3",null,"Windows screen reader tests"),Object(r.b)(p,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(r.b)("br",null),"- Chrome: 71.0.3578.98 (Official Build) (64-bit)",Object(r.b)("br",null),"- JAWS 19.1810.64",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"JAWS Test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},"Navigate the list with the Up and Down Arrow keys."),Object(r.b)(a.a,{mdxType:"ListItem"},"JAWS announces the beginning of the list, number of items in the list, nesting level, content of the list item and end of the list."),Object(r.b)(a.a,{mdxType:"ListItem"},"Information and the list item content are announced on two separate lines on the virtual viewer."),Object(r.b)(a.a,{mdxType:"ListItem"},"Bullets and item numbers are also placed on a separate line.")))),Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(r.b)("br",null),"- Chrome: 71.0.3578.98 (Official Build) (64-bit)",Object(r.b)("br",null),"- NVDA 2018.4.1",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"NVDA test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},"Navigate the list with the Up and Down Arrow keys."),Object(r.b)(a.a,{mdxType:"ListItem"},"NVDA announces the beginning of the list, number of items in the list, nesting level, content of the list item."),Object(r.b)(a.a,{mdxType:"ListItem"},"End of list, when exiting the list from the top or bottom."),Object(r.b)(a.a,{mdxType:"ListItem"},"List item parameters are announced together with the list item content.")))))))),Object(r.b)("h3",null,"Android screen reader tests"),Object(r.b)(p,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",Object(r.b)("br",null),"- Chrome: 71.0.3578.98 (Official Build) (64-bit)",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"Talkback Test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},"Navigate the list by swiping left or right or pressing the Alt key with the Left or Right Arrow key."),Object(r.b)(a.a,{mdxType:"ListItem"},'Talkback announces, "in list" when entering the list and "out of list" when exiting the list.'),Object(r.b)(a.a,{mdxType:"ListItem"},"Talkback also announces entering and exiting the nested lists, the number of list items, nesting level, and contnt of the list item."),Object(r.b)(a.a,{mdxType:"ListItem"},"Bullets and numbers are announced separately from the list item content.")))))))),Object(r.b)("h3",null,"iOS screen reader tests"),Object(r.b)(p,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(r.b)("br",null),"- Safari version 13.1.3",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"VoiceOver test:"),Object(r.b)(c.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},"Navigate list items by swiping left or right, or using the Left and Right Arrow keys on the keyboard when the quick navigation is turned on."),Object(r.b)(a.a,{mdxType:"ListItem"},"VoiceOver announces the beginning of the list, nesting level, content of the list item, the end of the list."),Object(r.b)(a.a,{mdxType:"ListItem"},"VoiceOver announces the beginning of the list, nesting level, content of the list item, the end of the list."),Object(r.b)(a.a,{mdxType:"ListItem"},"Information about the list, bullets and numbers and list item contents are pronounced separately, we have to navigate through these one by one.")))))))))}y.isMDXComponent=!0}}]);