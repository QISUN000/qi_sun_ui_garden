"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[747],{"./src/components/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Label_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledLabel=styled_components_browser_esm.Ay.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${p=>p.disabled?"#E5E7EB":p.color||"#000"};
  cursor: ${p=>p.disabled?"not-allowed":"pointer"};
  opacity: ${p=>p.disabled?.6:1};
  padding: 0.2rem 0.4rem;
  background-color: ${p=>p.disabled?"#F3F4F6":"transparent"};
  border-radius: 4px;
  border: 1px solid;
  display: inline-block;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${p=>p.disabled?"#F3F4F6":"#F9FAFB"};
  }

  &:focus-visible {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
  }
`,Label=_ref=>{let{children,disabled,color,htmlFor}=_ref;return(0,jsx_runtime.jsx)(StyledLabel,{disabled,color,htmlFor,children})};Label.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}}};const Label_stories={component:Label,title:"Components/Label",argTypes:{disabled:{control:"boolean"},color:{control:"color"}}},Default={args:{children:"This is a label",disabled:!1,color:"#000"}},Disabled={args:{children:"This is a disabled label",disabled:!0,color:"#E5E7EB"}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'This is a label',\n    disabled: false,\n    color: '#000'\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'This is a disabled label',\n    disabled: true,\n    color: '#E5E7EB'\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Label-Label-stories.37241b7f.iframe.bundle.js.map