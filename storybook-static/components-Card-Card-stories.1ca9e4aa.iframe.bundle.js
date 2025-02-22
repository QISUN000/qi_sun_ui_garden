"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[513],{"./src/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Card_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledCard=styled_components_browser_esm.Ay.div`
  background: ${p=>p.disabled?"#E5E7EB":p.backgroundColor||"#FFFFFF"};
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: ${p=>p.disabled?"not-allowed":"pointer"};
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 249, 4, 0.1);

  &:hover:not(:disabled) {
    box-shadow: 0 6px 8px rgba(255, 0, 0, 0.15);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Card=_ref=>{let{disabled,backgroundColor,children}=_ref;return(0,jsx_runtime.jsx)(StyledCard,{disabled,backgroundColor,children})};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Card_stories={component:Card,title:"Components/Card",argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"}}},Default={args:{children:"This is a default card.",backgroundColor:"#FFFFFF",disabled:!1}},Disabled={args:{children:"This card is disabled.",disabled:!0,backgroundColor:"#E5E7EB"}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'This is a default card.',\n    backgroundColor: '#FFFFFF',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'This card is disabled.',\n    disabled: true,\n    backgroundColor: '#E5E7EB'\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Card-Card-stories.1ca9e4aa.iframe.bundle.js.map