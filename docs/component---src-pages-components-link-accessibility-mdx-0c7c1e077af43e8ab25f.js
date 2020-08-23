(window.webpackJsonp=window.webpackJsonp||[]).push([[1907],{gmQC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return y}));n("3bBZ"),n("q1tI");var i=n("7ljp"),b=n("013z"),r=n("CpY+"),c=n("5sAZ"),s=n("EQQr");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,b=function(e,t){if(null==e)return{};var n,i,b={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}const l={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)},u=d("AnchorLinks"),p=d("AnchorLink"),m=d("Row"),O=d("Column"),j={_frontmatter:l},h=b.a;function y(e){let{components:t}=e,n=o(e,["components"]);return Object(i.b)(h,a({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u,{mdxType:"AnchorLinks"},Object(i.b)(p,{mdxType:"AnchorLink"},"How it works"),Object(i.b)(p,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(i.b)(p,{mdxType:"AnchorLink"},"Resources"),Object(i.b)(p,{mdxType:"AnchorLink"},"Accessibility testing")),Object(i.b)("h2",null,"How it works"),Object(i.b)("p",null,"The link Carbon component is primarily a native HTML hyperlink navigational\nelement. The ",Object(i.b)("inlineCode",{parentName:"p"},"Enter")," key activates the link and causes the user agent to move\nfocus to the link destination. When you use the disabled link component the ARIA\nstate is set to ",Object(i.b)("inlineCode",{parentName:"p"},'aria-disabled="true"'),", which changes the appearance and the\n",Object(i.b)("inlineCode",{parentName:"p"},'tabindex="-1"')," which removes the link for the tab order. When the link becomes\nactive the ARIA state changes to ",Object(i.b)("inlineCode",{parentName:"p"},'aria-disabled="false"')," and the link is present\nin the tab order."),Object(i.b)("h2",null,"Accessibility considerations"),Object(i.b)("p",null,"This component has been validated to meet the\n",Object(i.b)("a",a({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(i.b)("a",a({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Link text is the visible label for the native HTML link and is used to\nprovide the purpose of the link which is clear and easy to understand for all\nusers."),Object(i.b)("li",{parentName:"ol"},"The alt attribute for the img element is used to describe the purpose of a\ngraphical link with an image inside the link."),Object(i.b)("li",{parentName:"ol"},"The title attribute can be used to supplement the link text with any\nadditional useful description.")),Object(i.b)("h2",null,"Resources"),Object(i.b)("h4",null,"Helpful resources for creating customized accessible implementations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",a({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices/#link"}),"W3C WAI-ARIA Authoring Practices Link Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard interactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",a({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/link_purpose.html"}),"IBM Accessibility Checklist - Checkpoint 2.4.4 Link Purpose (In Context)"),"(WCAG\nSuccess Criteria\n",Object(i.b)("a",a({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html"}),"2.4.4"),")")),Object(i.b)("h2",null,"Accessibility testing"),Object(i.b)("p",null,"Accessibility issues are tracked in the\n",Object(i.b)("a",a({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository")),Object(i.b)("h3",null,"Automated test"),Object(i.b)(m,{mdxType:"Row"},Object(i.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(i.b)(r.f,{mdxType:"StructuredListWrapper"},Object(i.b)(r.c,{mdxType:"StructuredListHead"},Object(i.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(i.b)(r.a,{mdxType:"StructuredListBody"},Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(i.b)("br",null),"- Chrome version 77.0.3865.90",Object(i.b)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"DAP test"),Object(i.b)("br",null),"- No violations")))))),Object(i.b)("h3",null,"macOS screen reader tests"),Object(i.b)(m,{mdxType:"Row"},Object(i.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(i.b)(r.f,{mdxType:"StructuredListWrapper"},Object(i.b)(r.c,{mdxType:"StructuredListHead"},Object(i.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(i.b)(r.a,{mdxType:"StructuredListBody"},Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(i.b)("br",null),"- Chrome version 77.0.3865.90",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"VoiceOver(VO) test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},"Tab to the link. VO announces, that you are on a link, and the link text."),Object(i.b)(s.a,{mdxType:"ListItem"},"Press Control-Option-Space (or Enter) to navigate to the link destination."),Object(i.b)(s.a,{mdxType:"ListItem"},"Note: Disabled link is not in the tab order as expected.")))),Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(i.b)("br",null),"- Safari version 13.0.2",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"VoiceOver(VO) test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},"Press Control-Option-Right Arrow to read all content."),Object(i.b)(s.a,{mdxType:"ListItem"},"Press Control-Option-Space to navigate to the link destination."),Object(i.b)(s.a,{mdxType:"ListItem"},"Note: The link is not in the tab order and the Enter key does not navigate to the link destination.")))))))),Object(i.b)("h3",null,"Windows screen reader tests"),Object(i.b)(m,{mdxType:"Row"},Object(i.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(i.b)(r.f,{mdxType:"StructuredListWrapper"},Object(i.b)(r.c,{mdxType:"StructuredListHead"},Object(i.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(i.b)(r.a,{mdxType:"StructuredListBody"},Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(i.b)("br",null),"- Firefox version 67",Object(i.b)("br",null),"- JAWS 19.1810.64",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"JAWS test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and JAWS announces, "Link example link".'),Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. JAWS announces, "Link link example".'),Object(i.b)(s.a,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))),Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(i.b)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",Object(i.b)("br",null),"- JAWS version 19.1810.64",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"JAWS test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and JAWS announces, "Link example link".'),Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. JAWS announces, "Link link example".'),Object(i.b)(s.a,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))),Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(i.b)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",Object(i.b)("br",null),"- NVDA version 2018.4.1",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"NVDA test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Tab key or Shift-Tab keys and NVDA announces, "Link example link".'),Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link using the Arrow keys. NVDA announces, "Link link example".'),Object(i.b)(s.a,{mdxType:"ListItem"},'It is not possible to Tab to the disabled link, but using the Arrow keys JAWS announces, "Unavailable disabled link".')))))))),Object(i.b)("h3",null,"Android screen reader tests"),Object(i.b)(m,{mdxType:"Row"},Object(i.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(i.b)(r.f,{mdxType:"StructuredListWrapper"},Object(i.b)(r.c,{mdxType:"StructuredListHead"},Object(i.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(i.b)(r.a,{mdxType:"StructuredListBody"},Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",Object(i.b)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"Talkback test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link by swiping left or right, or press the Alt-Leftor Alt-Right keys and Talkback announces, "Link example link".'),Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to the disabled link. Talkback announces, "Disabled link link disabled".')))))))),Object(i.b)("h3",null,"iOS screen reader tests"),Object(i.b)(m,{mdxType:"Row"},Object(i.b)(O,{noGutterSm:!0,mdxType:"Column"},Object(i.b)(r.f,{mdxType:"StructuredListWrapper"},Object(i.b)(r.e,{head:!0,mdxType:"StructuredListRow"},Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(i.b)(r.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(i.b)(r.a,{mdxType:"StructuredListBody"},Object(i.b)(r.e,{mdxType:"StructuredListRow"},Object(i.b)(r.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(i.b)("br",null),"- Safari version 13.1.3",Object(i.b)("br",null),"- Carbon React version 7.7.1"),Object(i.b)(r.b,{mdxType:"StructuredListCell"},Object(i.b)("strong",null,"VoiceOver test:"),Object(i.b)(c.a,{mdxType:"OrderedList"},Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to an active link by swiping left or right, or press the Left-Arrow or Right-Arrow keys and VO announces, "Link example link".'),Object(i.b)(s.a,{mdxType:"ListItem"},'Navigate to the disabled link. VO announces, "Disabled link dimmed link".')))))))))}y.isMDXComponent=!0}}]);