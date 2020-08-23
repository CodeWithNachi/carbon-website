(window.webpackJsonp=window.webpackJsonp||[]).push([[1871],{gQkd:function(e,t,c){"use strict";c.r(t),c.d(t,"_frontmatter",(function(){return d})),c.d(t,"default",(function(){return j}));c("3bBZ"),c("q1tI");var n=c("7ljp"),b=c("013z"),s=c("CpY+"),r=c("5sAZ"),o=c("EQQr");c("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var c,n,b=function(e,t){if(null==e)return{};var c,n,b={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(b[c]=e[c]);return b}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(b[c]=e[c])}return b}const d={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)},h=l("AnchorLinks"),u=l("AnchorLink"),m=l("Row"),p=l("Column"),O={_frontmatter:d},x=b.a;function j(e){let{components:t}=e,c=a(e,["components"]);return Object(n.b)(x,i({},O,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)(h,{mdxType:"AnchorLinks"},Object(n.b)(u,{mdxType:"AnchorLink"},"How it works"),Object(n.b)(u,{mdxType:"AnchorLink"},"Accessibility considerations"),Object(n.b)(u,{mdxType:"AnchorLink"},"Resources"),Object(n.b)(u,{mdxType:"AnchorLink"},"Accessibility testing")),Object(n.b)("h2",null,"How it works"),Object(n.b)("p",null,"The Checkbox component is used to provide a list of options where the user can\nselect multiple options, including all or none. A checkbox control has three\npossible states indicated by the value of its ",Object(n.b)("inlineCode",{parentName:"p"},"aria-checked")," attribute, “true”\nwhen selected, “false” when unselected and “mixed” when in the indeterminate\nstate. The indeterminate state comes into play when the checkbox contains a\nsublist of selections, some of which are selected, and some unselected."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"Tab")," key is used to move focus to each checkbox. Checkboxes identified as\ndisabled are ignored in the tab order. The ",Object(n.b)("inlineCode",{parentName:"p"},"Space")," key is used to select and\ndeselect each checkbox when the checkbox has focus. When the checkbox is\nselected the ARIA state is set to ",Object(n.b)("inlineCode",{parentName:"p"},'aria-checked="true"')," and when it is\ndeselected ",Object(n.b)("inlineCode",{parentName:"p"},'aria-checked="false"'),". An indeterminable checkbox has an ARIA state\nthat is set to ",Object(n.b)("inlineCode",{parentName:"p"},'aria-checked="mixed"')," until it is selected or deselected by the\nuser. Fieldset and Legend elements are used for labeling the checkbox group."),Object(n.b)("h2",null,"Accessibility considerations"),Object(n.b)("p",null,"This component has been validated to meet the\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.w3.org/TR/WCAG20/"}),"WCAG 2.0 AA")," and\n",Object(n.b)("a",i({parentName:"p"},{href:"http://www.section508.gov/"}),"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Checkboxes must have a clear and concise label."),Object(n.b)("li",{parentName:"ol"},"Users should be warned if selecting a checkbox will cause a change in\ncontext."),Object(n.b)("li",{parentName:"ol"},"If the checkbox is a required field include the\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/WCAG20-TECHS/ARIA2.html"}),"aria-required property")," and\nindicate that it is a required field and use the validation message for input\nerrors.")),Object(n.b)("h2",null,"Resources"),Object(n.b)("h4",null,"Helpful resources for creating customized accessible implementations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/checkbox-1.html"}),"W3C WAI-ARIA Authoring Practices Checkbox Design Pattern"),"\ncovers the usage of ARIA names, state and roles, as well as the expected\nkeyboard intractions."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html"}),"IBM Accessibility Checklist Checkpoint:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html"}),"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/content-structure-separation-programmatic.html"}),"1.3.1"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/labels_or_instructions.html"}),"3.3.2 Labels and Instructions"),"\n(WCAG Success Criteria\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"}),"3.3.2"),")"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/able/guidelines/ci162/name_role_value.html"}),"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",Object(n.b)("a",i({parentName:"li"},{href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"}),"4.2.1"),")")))),Object(n.b)("h2",null,"Accessibility testing"),Object(n.b)("p",null,"Accessibility issues are tracked in the\n",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/carbon-design-system/carbon/milestones"}),"Carbon Component GitHub repository"),"."),Object(n.b)("h3",null,"Automated test"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(s.f,{mdxType:"StructuredListWrapper"},Object(n.b)(s.c,{mdxType:"StructuredListHead"},Object(n.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(s.a,{mdxType:"StructuredListBody"},Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome Version 77.0.3865.90",Object(n.b)("br",null),"- Dynamic Assessment Plugin Version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"DAP Test"),Object(n.b)("br",null),"- Violations")))))),Object(n.b)("h3",null,"macOS Screen reader tests"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(s.f,{mdxType:"StructuredListWrapper"},Object(n.b)(s.c,{mdxType:"StructuredListHead"},Object(n.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(s.a,{mdxType:"StructuredListBody"},Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Chrome Version 77.0.3865.90",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) Test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the first checkbox. VO announces the label, the state as checked, that it is a checkbox input and the label group."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the indeterminable checkbox. VO announces the label, and the state as mixed."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key and the disabled checkbox is skipped."),Object(n.b)(o.a,{mdxType:"ListItem"},'Control-Option-Left Arrow key to read the disabled field. VO announces, "Disabled checkbox, dimmed unchecked checkbox".'),Object(n.b)(o.a,{mdxType:"ListItem"},"Tab to the next group of checkboxes with the same results.")))),Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",Object(n.b)("br",null),"- Safari Version 13.0.2",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver(VO) Test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the first checkbox. VO announces the label, the state as checked, the checkbox legend and the group."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key to navigate to the indeterminable checkbox. VO announces the label, and the state as unchecked (Note: The mixed state is not announced)."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Tab key and the disabled checkbox is skipped."),Object(n.b)(o.a,{mdxType:"ListItem"},'Control-Option-Left Arrow key to read the disabled field. VO announces, "Off off dimmed unchecked checkbox".'),Object(n.b)(o.a,{mdxType:"ListItem"},"Tab to the next group of checkboxes with the same results.")))))))),Object(n.b)("h3",null,"Windows screen reader tests"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(s.f,{mdxType:"StructuredListWrapper"},Object(n.b)(s.c,{mdxType:"StructuredListHead"},Object(n.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Environment"),Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(s.a,{mdxType:"StructuredListBody"},Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Firefox Version 67",Object(n.b)("br",null),"- JAWS 19.1810.64",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(n.b)(o.a,{mdxType:"ListItem"},"When navigating to a checkbox, JAWS announces the label, checkbox, and the status of the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"Disabled checkboxes can only be found by using the Up and Down Arrow keys, when JAWS."),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox. JAWS announces the status of checked or unchecked.")))),Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- JAWS Version 19.1810.64",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"JAWS test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(n.b)(o.a,{mdxType:"ListItem"},"When navigating to a checkbox, JAWS announces the label, checkbox, and the status of the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},'Disabled checkboxes can only be found by using the Up and Down Arrow keys, when JAWS announces "disabled checkbox checkbox unchecked unavailable".'),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space key to select or deselect the checkbox. JAWS announces the status of checked or unchecked.")))),Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",Object(n.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- NVDA Version 2018.4.1",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"NVDA test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Navigate among check boxes by pressing the Tab and Shift-Tab keys, or X and Shift+X keys to jump to next or previous checkboxes."),Object(n.b)(o.a,{mdxType:"ListItem"},"When navigating to a checkbox, NVDA announces the label, checkbox, and the status of the checkbox, but repeats the information twice."),Object(n.b)(o.a,{mdxType:"ListItem"},'When navigating to an indeterminable checkbox NVDA announces, "indeterminate checkbox indeterminate checkbox checkbox half checked".'),Object(n.b)(o.a,{mdxType:"ListItem"},'Disabled checkboxes can only be found by using the Up and Down Arrow keys, or the the X and Shift+X keys. NVDA announces "checkbox unavailable not checked disabled checkbox".'),Object(n.b)(o.a,{mdxType:"ListItem"},"Press the Space or Enter key to select or deselect the checkbox. NVDA announces the status of checked or unchecked.")))))))),Object(n.b)("h3",null,"Android screen reader tests"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(s.f,{mdxType:"StructuredListWrapper"},Object(n.b)(s.c,{mdxType:"StructuredListHead"},Object(n.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results"))),Object(n.b)(s.a,{mdxType:"StructuredListBody"},Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- Android Version 9 with Talkback",Object(n.b)("br",null),"- Chrome Version 73.0.3683.103 (Official Build) (64-bit)",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"Talkback Test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Navigate to the checkbox by swiping left or right, or press the Left or Right Arrow keys. Talkback announces,the label, field type, and the status of the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"The status of indeterminate checkboxes is not announced properly, Talkback only announces checked or unchecked."),Object(n.b)(o.a,{mdxType:"ListItem"},"When tapping on a checkbox, or pressing the Alt-Enter keys, Talkback announces the new status of the checkbox as checked or not checked.")))))))),Object(n.b)("h3",null,"iOS screen reader tests"),Object(n.b)(m,{mdxType:"Row"},Object(n.b)(p,{noGutterSm:!0,mdxType:"Column"},Object(n.b)(s.f,{mdxType:"StructuredListWrapper"},Object(n.b)(s.e,{head:!0,mdxType:"StructuredListRow"},Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Environment "),Object(n.b)(s.b,{head:!0,mdxType:"StructuredListCell"},"Results")),Object(n.b)(s.a,{mdxType:"StructuredListBody"},Object(n.b)(s.e,{mdxType:"StructuredListRow"},Object(n.b)(s.b,{mdxType:"StructuredListCell"},"- iOS Version 13.1.3 with VoiceOver",Object(n.b)("br",null),"- Safari Version 13.1.3",Object(n.b)("br",null),"- Carbon React Version 7.7.1"),Object(n.b)(s.b,{mdxType:"StructuredListCell"},Object(n.b)("strong",null,"VoiceOver Test:"),Object(n.b)(r.a,{mdxType:"OrderedList"},Object(n.b)(o.a,{mdxType:"ListItem"},"Navigate to the checkbox by swiping left or right, or press the Left-Arrow or Right-Arrow keys when quick navigation is turned on. VO announces,the label, field type, and the status of the checkbox."),Object(n.b)(o.a,{mdxType:"ListItem"},"The status of indeterminate checkboxes is not announced properly, VoiceOver only announces checked or unchecked."),Object(n.b)(o.a,{mdxType:"ListItem"},"VoiceOver announces the beginning of the list, nesting level, content of the list item, the end of the list."),Object(n.b)(o.a,{mdxType:"ListItem"},"When tapping on a checkbox, or pressing VO+Space, VoiceOver announces the new status of the checkbox as checked or unchecked.")))))))))}j.isMDXComponent=!0}}]);