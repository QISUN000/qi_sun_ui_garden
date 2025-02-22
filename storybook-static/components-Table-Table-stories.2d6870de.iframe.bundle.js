"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[623],{"./src/components/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Empty:()=>Empty,SingleRow:()=>SingleRow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TableContainer=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  opacity: ${props=>props.disabled?.5:1};
  pointer-events: ${props=>props.disabled?"none":"auto"};
  background-color: ${props=>props.disabled?"#F3F4F6":"transparent"};
`,TableHeader=styled_components_browser_esm.Ay.thead`
  background-color: #3B82F6;
  color: white;
`,TableHeaderCell=styled_components_browser_esm.Ay.th`
  padding: 1rem;
  text-align: left;
`,TableRow=styled_components_browser_esm.Ay.tr`
  &:nth-child(even) {
    background-color: #F3F4F6;
  }

  &:hover {
    background-color: #E5E7EB;
  }
`,TableCell=styled_components_browser_esm.Ay.td`
  padding: 1rem;
  border: 1px solid #E5E7EB;
`,Table=_ref=>{let{headers,rows,disabled=!1}=_ref;return(0,jsx_runtime.jsxs)(TableContainer,{disabled,"data-testid":"table",children:[(0,jsx_runtime.jsx)(TableHeader,{children:(0,jsx_runtime.jsx)("tr",{children:headers.map(((header,index)=>(0,jsx_runtime.jsx)(TableHeaderCell,{children:header},index)))})}),(0,jsx_runtime.jsx)("tbody",{children:rows.map(((row,rowIndex)=>(0,jsx_runtime.jsx)(TableRow,{children:row.map(((cell,cellIndex)=>(0,jsx_runtime.jsx)(TableCell,{children:cell},cellIndex)))},rowIndex)))})]})};Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{headers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Table_stories={title:"Components/Table",component:Table},mockHeaders=["Name","Age","City"],mockRows=[["John Doe","30","New York"],["Jane Smith","25","Los Angeles"],["Bob Johnson","35","Chicago"],["Alice Brown","28","San Francisco"]],Default={args:{headers:mockHeaders,rows:mockRows}},Disabled={args:{headers:mockHeaders,rows:mockRows,disabled:!0}},Empty={args:{headers:[],rows:[]}},SingleRow={args:{headers:mockHeaders,rows:[["John Doe","30","New York"]]}},__namedExportsOrder=["Default","Disabled","Empty","SingleRow"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    headers: mockHeaders,\n    rows: mockRows\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    headers: mockHeaders,\n    rows: mockRows,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  args: {\n    headers: [],\n    rows: []\n  }\n}",...Empty.parameters?.docs?.source}}},SingleRow.parameters={...SingleRow.parameters,docs:{...SingleRow.parameters?.docs,source:{originalSource:"{\n  args: {\n    headers: mockHeaders,\n    rows: [['John Doe', '30', 'New York']]\n  }\n}",...SingleRow.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Table-Table-stories.2d6870de.iframe.bundle.js.map