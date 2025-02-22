"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[340],{"./src/components/Radio button/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioButton_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioButtonContainer=styled_components_browser_esm.Ay.label`
  display: inline-flex;
  align-items: center;
  cursor: ${p=>p.disabled?"not-allowed":"pointer"};
  opacity: ${p=>p.disabled?.6:1};
`,HiddenInput=styled_components_browser_esm.Ay.input`
  opacity: 0;
  position: absolute;
`,CustomRadio=styled_components_browser_esm.Ay.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${p=>p.disabled?"#E5E7EB":"#3B82F6"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  &:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${p=>p.disabled?"#E5E7EB":"#3B82F6"};
    display: ${p=>p.checked?"block":"none"};
  }
`,LabelText=styled_components_browser_esm.Ay.span`
  margin-left: 4px;
`,RadioButton=_ref=>{let{id,name,checked=!1,disabled=!1,onChange,label}=_ref;return(0,jsx_runtime.jsxs)(RadioButtonContainer,{disabled,children:[(0,jsx_runtime.jsx)(HiddenInput,{type:"radio",id,name,checked,disabled,onChange}),(0,jsx_runtime.jsx)(CustomRadio,{checked,disabled}),(0,jsx_runtime.jsx)(LabelText,{children:label})]})};RadioButton.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const RadioButton_stories={component:RadioButton,title:"Components/RadioButton"},Default={render:()=>{const[isChecked,setIsChecked]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)(RadioButton,{id:"radio1",name:"radioGroup",label:"Click me",checked:isChecked,onChange:e=>setIsChecked(e.target.checked)})}},Disabled={render:()=>(0,jsx_runtime.jsx)(RadioButton,{id:"radio2",name:"radioGroup",label:"Disabled",disabled:!0})},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [isChecked, setIsChecked] = useState(false);\n    return <RadioButton id="radio1" name="radioGroup" label="Click me" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />;\n  }\n}',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  render: () => <RadioButton id="radio2" name="radioGroup" label="Disabled" disabled />\n}',...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Radio-button-RadioButton-stories.97881f25.iframe.bundle.js.map