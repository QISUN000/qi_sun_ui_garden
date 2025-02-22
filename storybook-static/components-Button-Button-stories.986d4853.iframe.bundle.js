"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.Ay.button`
  padding: 0.75rem 1.25rem;
  background: ${p=>p.disabled?"#E5E7EB":p.backgroundColor||"#3B82F6"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${p=>p.disabled?"not-allowed":"pointer"};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${p=>p.backgroundColor?p.backgroundColor:"#2563EB"}; 
  }

  &:focus-visible {
    outline: 2px solid #2563EB;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`,Button=_ref=>{let{disabled=!1,onClick,children,backgroundColor}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{disabled,onClick,backgroundColor,children})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""}}};const Button_stories={component:Button,title:"Components/Button",argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},onClick:{action:"clicked"}}},Primary={args:{children:"Click Me",backgroundColor:"#3B82F6",disabled:!1}},Disabled={args:{children:"Cant Click",disabled:!0,backgroundColor:"#E5E7EB"}},__namedExportsOrder=["Primary","Disabled"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Click Me',\n    backgroundColor: '#3B82F6',\n    disabled: false\n  }\n}",...Primary.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Cant Click',\n    disabled: true,\n    backgroundColor: '#E5E7EB'\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Button-Button-stories.986d4853.iframe.bundle.js.map