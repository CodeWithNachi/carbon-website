(window.webpackJsonp=window.webpackJsonp||[]).push([[1952],{jzL0:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return y}));n("3bBZ"),n("q1tI");var r=n("7ljp"),i=n("013z"),b=n("CpY+"),o=n("5sAZ"),a=n("EQQr");n("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)},d=u("AnchorLinks"),p=u("AnchorLink"),m=u("Row"),h=u("Column"),O={_frontmatter:l},j=i.a;function y(e){let{components:t}=e,n=s(e,["components"]);return Object(r.b)(j,c({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d,{mdxType:"AnchorLinks"},Object(r.b)(p,{mdxType:"AnchorLink"},"How it works"),Object(r.b)(p,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(r.b)(p,{mdxType:"AnchorLink"},"Resources"),Object(r.b)(p,{mdxType:"AnchorLink"},"Accessibility testing")),Object(r.b)("h2",null,"How it works"),Object(r.b)("p",null,"The select Carbon component is a form input field, where a user is submitting\ndata and chooses a single option from a list of options. The label element is\nused to explicitly associate a form control with a label. A label is attached to\na specific form control through the use of the ",Object(r.b)("inlineCode",{parentName:"p"},"for")," attribute. The value of the\n",Object(r.b)("inlineCode",{parentName:"p"},"for")," attribute must be the same as the value of the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," attribute of the form\ncontrol. Also note that the ",Object(r.b)("inlineCode",{parentName:"p"},"id")," attribute may have the same value as the name\nattribute, but both must be provided, and the id must be unique in the Web page."),Object(r.b)("h2",null,"Accessibility considerations"),Object(r.b)("p",null,"This component has been validated to meet the\n",Object(r.b)("a",c({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(r.b)("a",c({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Avoid very long option names to facilitate understandability and\nperceivability."),Object(r.b)("li",{parentName:"ol"},"Do not use the same word or phrase at the beginning of a set of options."),Object(r.b)("li",{parentName:"ol"},"Use a unique id for each option."),Object(r.b)("li",{parentName:"ol"},"If the select field is required include the\n",Object(r.b)("a",c({parentName:"li"},{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"}),"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",Object(r.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships"}),"1.3.1"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/on_input.html"}),"3.2.2 On Input"),"\n(WCAG Success Criteria\n",Object(r.b)("a",c({parentName:"li"},{href:"http://www.w3.org/TR/2008/REC-WCAG20-20081211/#content-structure-separation-programmatic"}),"3.2.2"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/error_id.html"}),"3.3.1 Error Identification"),"\n(WCAG Success Criteria\n",Object(r.b)("a",c({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/error-identification"}),"3.3.1"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",c({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/labels_or_instructions.html"}),"3.3.2 Labels or Instructions"),"\n(WCAG Success Criteria\n",Object(r.b)("a",c({parentName:"li"},{href:"http://www.w3.org/TR/2008/REC-WCAG20-20081211/#minimize-error-cues"}),"3.3.2"),")")))),Object(r.b)("h2",null,"Accessibility testing"),Object(r.b)("p",null,"Accessibility issues are tracked in the\n",Object(r.b)("a",c({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(r.b)("h3",null,"Automated test"),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(r.b)("br",null),"- Chrome version 77.0.3865.90",Object(r.b)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"DAP test:"),Object(r.b)("br",null),"- No violations")))))),Object(r.b)("h3",null,"macOS screen reader tests"),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(r.b)("br",null),"- Chrome version 77.0.3865.90",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"VoiceOver(VO) Test:"),Object(r.b)(o.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},'Control-Option-Right arrow to the "Select" text. VO announces the label and that it is a text element.'),Object(r.b)(a.a,{mdxType:"ListItem"},'Control-Option-Right arrow to the "Optional helper text". VO announces the label and that it is a text element.'),Object(r.b)(a.a,{mdxType:"ListItem"},'Control-Option-Right arrow to the select box. VO announces the label, "Choose an Option" and that it is a select pop-up button.'),Object(r.b)(a.a,{mdxType:"ListItem"},"Press the Space key. VO announces that you are on a dimmed menu item."),Object(r.b)(a.a,{mdxType:"ListItem"},"Navigate up and down the menu using the arrow keys. VO announces each menu item."),Object(r.b)(a.a,{mdxType:"ListItem"},"Press the Space key to make a selection."),Object(r.b)(a.a,{mdxType:"ListItem"},"Tab away from the select box and then back. VO announces the selected option."),Object(r.b)(a.a,{mdxType:"ListItem"},"Press Space to open the menu and then press Esc to close the menu.")))))))),Object(r.b)("h3",null,"Windows screen reader tests"),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.c,{mdxType:"StructuredListHead"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(r.b)("br",null),"- JAWS 18",Object(r.b)("br",null),"- Firefox version 68",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"JAWS test:"),Object(r.b)(o.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},'Press Alt-Down arrow . JAWS announces the text, "Select, optional helper text".'),Object(r.b)(a.a,{mdxType:"ListItem"},"Tab to the select box. JAWS announces the main region, the select combo box and and that the arrow keys should be used to make a selection."),Object(r.b)(a.a,{mdxType:"ListItem"},"Use the Up and Down arrow keys to navigate through the list. JAWS announces each option."),Object(r.b)(a.a,{mdxType:"ListItem"},"Tab away from the select box and then back. JAWS announces the selected option.")))))))),Object(r.b)("h3",null,"iOS screen reader tests"),Object(r.b)(m,{mdxType:"Row"},Object(r.b)(h,{noGutterSm:!0,mdxType:"Column"},Object(r.b)(b.f,{mdxType:"StructuredListWrapper"},Object(r.b)(b.e,{head:!0,mdxType:"StructuredListRow"},Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(r.b)(b.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(r.b)(b.a,{mdxType:"StructuredListBody"},Object(r.b)(b.e,{mdxType:"StructuredListRow"},Object(r.b)(b.b,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",Object(r.b)("br",null),"- Safari version 13.1.3",Object(r.b)("br",null),"- Carbon React version 7.7.1"),Object(r.b)(b.b,{mdxType:"StructuredListCell"},Object(r.b)("strong",null,"VoiceOver test:"),Object(r.b)(o.a,{mdxType:"OrderedList"},Object(r.b)(a.a,{mdxType:"ListItem"},'Swipe right, VO announces "Select main landmark".'),Object(r.b)(a.a,{mdxType:"ListItem"},'Swipe right, VO announces "Optional helper text".'),Object(r.b)(a.a,{mdxType:"ListItem"},'Swipe right to navigate to the select box. VO announces "Select. Choose an option pop-up button, double tap to activate the picker."'),Object(r.b)(a.a,{mdxType:"ListItem"},"Double tap to open the menu, VO does not announce anything. (Note: There is an open issue for VoiceOver on iOS.)")))))))))}y.isMDXComponent=!0}}]);