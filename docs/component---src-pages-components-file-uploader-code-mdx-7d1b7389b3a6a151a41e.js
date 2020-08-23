(window.webpackJsonp=window.webpackJsonp||[]).push([[1896],{cXLj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return h}));n("3bBZ"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},p=c("PageDescription"),s=c("Row"),d=c("Column"),m=c("ResourceCard"),u=c("MdxIcon"),b=c("ComponentDemo"),f=c("ComponentVariant"),y={_frontmatter:i},g=a.a;function h(e){let{components:t}=e,n=l(e,["components"]);return Object(o.b)(g,r({},y,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(p,{mdxType:"PageDescription"},Object(o.b)("p",null,"Preview the file uploader component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),Object(o.b)("h2",null,"Documentation"),Object(o.b)(s,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(m,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/fileuploader--fileuploader",mdxType:"ResourceCard"},Object(o.b)(u,{name:"react",mdxType:"MdxIcon"}))),Object(o.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(m,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--basic",mdxType:"ResourceCard"},Object(o.b)(u,{name:"angular",mdxType:"MdxIcon"}))),Object(o.b)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(m,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default",mdxType:"ResourceCard"},Object(o.b)(u,{name:"vue",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Live demo"),Object(o.b)(b,{components:[{id:"file-uploader",label:"File uploader"},{id:"drag-and-drop",label:"Drag and drop"},{id:"upload-states",label:"Upload states"}],mdxType:"ComponentDemo"},Object(o.b)(f,{id:"file-uploader",knobs:{FileUploader:["multiple"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/fileuploader--fileuploader",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=file-uploader"},mdxType:"ComponentVariant"},'\n      <div className="bx--file__container">\n        <FileUploader\n          accept={[\n            \'.jpg\',\n            \'.png\'\n          ]}\n          buttonKind="primary"\n          buttonLabel="Add files"\n          filenameStatus="edit"\n          iconDescription="Clear file"\n          labelDescription="only .jpg files at 500mb or less"\n          labelTitle="Upload"\n        />\n      </div>\n    '),Object(o.b)(f,{id:"drag-and-drop",knobs:{FileUploaderDropContainer:["multiple","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/fileuploader--drag-and-drop-upload-container-example-application",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--drag-and-drop",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=file-uploader"},mdxType:"ComponentVariant"},"\n      <div className=\"bx--file__container\">\n        <strong className='bx--file--label'>Account photo</strong>\n        <p className='bx--label-description'>\n          Only .jpg and .png files. 500kb max file size\n        </p>\n        <FileUploaderDropContainer\n          accept={[\n            'image/jpeg',\n            'image/png'\n          ]}\n          labelText=\"Drag and drop files here or click to upload\"\n          tabIndex={0}\n        />\n      </div>\n    "),Object(o.b)(f,{id:"upload-states",knobs:{FileUploaderItem:["status","invalid"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/fileuploader--fileuploaderitem",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=file-uploader"},mdxType:"ComponentVariant"},"\n      <div className=\"bx--file__container\">\n        <FileUploaderItem name='color.jpg' errorSubject='File size exceeds limits' errorBody='500 kb max file size. Select a new file and try again.'/>\n      </div>\n    ")))}h.isMDXComponent=!0}}]);