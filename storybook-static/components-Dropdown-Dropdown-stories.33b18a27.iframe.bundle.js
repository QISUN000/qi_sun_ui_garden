"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[215],{"./src/components/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DropdownContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  display: inline-block;
  cursor: ${p=>p.$disabled?"not-allowed":"pointer"};
  opacity: ${p=>p.$disabled?.6:1};
  padding: 0.75rem 1.25rem;
  background-color: ${p=>p.$disabled?"#E5E7EB":"#3B82F6"};
  color: white;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background: ${"#2563EB"}; 
  }
`,DropdownList=styled_components_browser_esm.Ay.ul`
  display: ${p=>p.$isOpen?"block":"none"};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  top: 100%;
  left: 0;
`,DropdownItem=styled_components_browser_esm.Ay.li`
  padding: 0.75rem 1rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
  }
`,Dropdown=_ref=>{let{options,disabled,onSelect}=_ref;const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(DropdownContainer,{$disabled:disabled,onClick:()=>{disabled||setIsOpen(!isOpen)},children:["Select an option",(0,jsx_runtime.jsx)(DropdownList,{$isOpen:isOpen,children:options.map(((option,index)=>(0,jsx_runtime.jsx)(DropdownItem,{onClick:e=>{e.stopPropagation(),(option=>{disabled||(onSelect(option),setIsOpen(!1))})(option)},children:option},index)))})]})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""}}};const Dropdown_stories={component:Dropdown,title:"Components/Dropdown",argTypes:{disabled:{control:"boolean"},onSelect:{action:"selected"}}},Default={args:{options:["Option 1","Option 2","Option 3"],disabled:!1}},Disabled={args:{options:["Option 1","Option 2","Option 3"],disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: ['Option 1', 'Option 2', 'Option 3'],\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: ['Option 1', 'Option 2', 'Option 3'],\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Dropdown-Dropdown-stories.33b18a27.iframe.bundle.js.map