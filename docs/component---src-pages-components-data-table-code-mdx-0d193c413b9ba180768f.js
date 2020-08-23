(window.webpackJsonp=window.webpackJsonp||[]).push([[1884],{tBjn:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return p})),a.d(n,"default",(function(){return P}));a("3bBZ");var t=a("q1tI"),o=a("7ljp"),l=a("013z"),r=a("embT"),c=a("ldPN"),s=a("EubG"),b=a("aqye");a("qKvR");function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const p={},h=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",n)},T=h("PageDescription"),m=h("Row"),u=h("Column"),w=h("ResourceCard"),g=h("MdxIcon"),y=h("ComponentDemo"),R=h("ComponentVariant"),A={_frontmatter:p},C=l.a;function P(e){let{components:n}=e,a=i(e,["components"]);return Object(o.b)(C,d({},A,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)(T,{mdxType:"PageDescription"},Object(o.b)("p",null,"Preview the data table component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),Object(o.b)("h2",null,"Documentation"),Object(o.b)(m,{className:"resource-card-group",mdxType:"Row"},Object(o.b)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(w,{subTitle:"React",href:"http://react.carbondesignsystem.com/?path=/story/datatable--default",mdxType:"ResourceCard"},Object(o.b)(g,{name:"react",mdxType:"MdxIcon"}))),Object(o.b)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(w,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-data-table--basic",mdxType:"ResourceCard"},Object(o.b)(g,{name:"angular",mdxType:"MdxIcon"}))),Object(o.b)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},Object(o.b)(w,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--minimal",mdxType:"ResourceCard"},Object(o.b)(g,{name:"vue",mdxType:"MdxIcon"})))),Object(o.b)("h2",null,"Live demo"),Object(o.b)(y,{components:[{id:"default-table",label:"Default"},{id:"with-selection",label:"With selection"},{id:"with-expansion",label:"With expansion"},{id:"with-batch-actions",label:"With batch actions"}],scope:{rowData:r.b,headerData:r.a,React:t,Delete:c.b,Save:s.a,Download:b.a},mdxType:"ComponentDemo"},Object(o.b)(R,{id:"default-table",knobs:{DataTable:["isSortable"],Table:["size","useZebraStyles"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/datatable--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--minimal",Vanilla:"https://the-carbon-components.netlify.com/?nav=data-table"},mdxType:"ComponentVariant"},'<DataTable\n    rows={rowData}\n    headers={headerData}\n    render={({ rows, headers, getHeaderProps }) => (\n    <TableContainer title="DataTable">\n      <Table>\n        <TableHead>\n          <TableRow>\n            {headers.map(header => (\n              <TableHeader {...getHeaderProps({ header })}>\n                {header.header}\n              </TableHeader>\n            ))}\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {rows.map(row => (\n            <TableRow key={row.id}>\n              {row.cells.map(cell => (\n                <TableCell key={cell.id}>{cell.value}</TableCell>\n              ))}\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </TableContainer>)}\n    />'),Object(o.b)(R,{id:"with-selection",knobs:{DataTable:["isSortable"],Table:["size","useZebraStyles"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/datatable--with-selection",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=data-table"},mdxType:"ComponentVariant"},'<DataTable\n  rows={rowData}\n  headers={headerData}\n  render={({ rows, headers, getHeaderProps, getSelectionProps, getRowProps }) => (\n  <TableContainer title="DataTable with selection">\n    <Table>\n      <TableHead>\n        <TableRow>\n          <TableSelectAll {...getSelectionProps()} />\n          {headers.map(header => (\n            <TableHeader {...getHeaderProps({ header })}>\n              {header.header}\n            </TableHeader>\n          ))}\n        </TableRow>\n      </TableHead>\n      <TableBody>\n        {rows.map(row => (\n          <TableRow {...getRowProps({ row })}>\n            <TableSelectRow {...getSelectionProps({ row })} />\n            {row.cells.map(cell => (\n              <TableCell key={cell.id}>{cell.value}</TableCell>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>)}\n/>'),Object(o.b)(R,{id:"with-expansion",knobs:{DataTable:["isSortable"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/datatable--with-expansion",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--with-expansion",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--slotted-expanding-data",Vanilla:"https://the-carbon-components.netlify.com/?nav=data-table"},mdxType:"ComponentVariant"},'<DataTable\n  rows={rowData}\n  headers={headerData}\n  render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (\n  <TableContainer title="DataTable with expansion">\n    <Table {...getTableProps()}>\n      <TableHead>\n        <TableRow>\n          <TableExpandHeader />\n          {headers.map(header => (\n            <TableHeader {...getHeaderProps({ header })}>\n              {header.header}\n            </TableHeader>\n          ))}\n        </TableRow>\n      </TableHead>\n      <TableBody>\n        {rows.map(row => (\n          <React.Fragment key={row.id}>\n            <TableExpandRow {...getRowProps({ row })}>\n              {row.cells.map(cell => (\n                <TableCell key={cell.id}>{cell.value}</TableCell>\n              ))}\n            </TableExpandRow>\n            {row.isExpanded && (\n              <TableExpandedRow colSpan={headers.length + 1}>\n                <p>Aux squad rules</p>\n              </TableExpandedRow>\n            )}\n          </React.Fragment>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n)}/>'),Object(o.b)(R,{id:"with-batch-actions",links:{React:"https://react.carbondesignsystem.com/?path=/story/datatable--with-batch-actions",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-table--with-toolbar",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdatatable--default",Vanilla:"https://the-carbon-components.netlify.com/?nav=data-table"},mdxType:"ComponentVariant"},"<DataTable\n  rows={rowData}\n  headers={headerData}\n  render={({ rows,\n      headers,\n      getHeaderProps,\n      getRowProps,\n      getSelectionProps,\n      getBatchActionProps,\n      onInputChange,\n      selectedRows,}) => (\n  <TableContainer title=\"DataTable with batch actions\">\n    <TableToolbar>\n          <TableBatchActions {...getBatchActionProps()}>\n            <TableBatchAction\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n              renderIcon={Delete}\n              onClick={()=>console.log('clicked')}>\n              Delete\n            </TableBatchAction>\n            <TableBatchAction\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n              renderIcon={Save}\n              onClick={()=>console.log('clicked')}>\n              Save\n            </TableBatchAction>\n            <TableBatchAction\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}\n              renderIcon={Download}\n              onClick={()=>console.log('clicked')}>\n              Download\n            </TableBatchAction>\n          </TableBatchActions>\n          <TableToolbarContent>\n            <TableToolbarSearch\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}\n              onChange={onInputChange}\n            />\n            <TableToolbarMenu\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}>\n              <TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>\n                Action 1\n              </TableToolbarAction>\n              <TableToolbarAction onClick={() => alert('Alert 2')}>\n                Action 2\n              </TableToolbarAction>\n              <TableToolbarAction onClick={() => alert('Alert 3')}>\n                Action 3\n              </TableToolbarAction>\n            </TableToolbarMenu>\n            <Button\n              tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}\n              onClick={()=> console.log('clicked')}\n              size=\"small\"\n              kind=\"primary\">\n              Add new\n            </Button>\n          </TableToolbarContent>\n        </TableToolbar>\n    <Table>\n      <TableHead>\n        <TableRow>\n          <TableSelectAll {...getSelectionProps()} />\n          {headers.map(header => (\n            <TableHeader {...getHeaderProps({ header })}>\n              {header.header}\n            </TableHeader>\n          ))}\n        </TableRow>\n      </TableHead>\n      <TableBody>\n        {rows.map(row => (\n          <TableRow {...getRowProps({ row })}>\n            <TableSelectRow {...getSelectionProps({ row })} />\n            {row.cells.map(cell => (\n              <TableCell key={cell.id}>{cell.value}</TableCell>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>)}\n/>")),Object(o.b)("h2",null,"Sample data"),Object(o.b)("pre",null,Object(o.b)("code",d({parentName:"pre"},{className:"language-javascript"}),"const headerData = [\n  {\n    header: 'Name',\n    key: 'name',\n  },\n  {\n    header: 'Protocol',\n    key: 'protocol',\n  },\n  {\n    header: 'Port',\n    key: 'port',\n  },\n  {\n    header: 'Rule',\n    key: 'rule',\n  },\n  {\n    header: 'Attached Groups',\n    key: 'attached_groups',\n  },\n  {\n    header: 'Status',\n    key: 'status',\n  },\n];\n\nconst rowData = [\n  {\n    attached_groups: 'Kevins VM Groups',\n    id: 'a',\n    name: 'Load Balancer 3',\n    port: 3000,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Disabled',\n  },\n  {\n    attached_groups: 'Maureens VM Groups',\n    id: 'b',\n    name: 'Load Balancer 1',\n    port: 443,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Starting',\n  },\n  {\n    attached_groups: 'Andrews VM Groups',\n    id: 'c',\n    name: 'Load Balancer 2',\n    port: 80,\n    protocol: 'HTTP',\n    rule: 'DNS delegation',\n    status: 'Active',\n  },\n  {\n    attached_groups: 'Marcs VM Groups',\n    id: 'd',\n    name: 'Load Balancer 6',\n    port: 3000,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Disabled',\n  },\n  {\n    attached_groups: 'Mels VM Groups',\n    id: 'e',\n    name: 'Load Balancer 4',\n    port: 443,\n    protocol: 'HTTP',\n    rule: 'Round robin',\n    status: 'Starting',\n  },\n  {\n    attached_groups: 'Ronjas VM Groups',\n    id: 'f',\n    name: 'Load Balancer 5',\n    port: 80,\n    protocol: 'HTTP',\n    rule: 'DNS delegation',\n    status: 'Active',\n  },\n];\n")))}P.isMDXComponent=!0}}]);