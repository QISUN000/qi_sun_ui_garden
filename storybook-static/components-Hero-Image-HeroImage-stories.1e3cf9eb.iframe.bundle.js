"use strict";(self.webpackChunkqi_sun_ui_garden=self.webpackChunkqi_sun_ui_garden||[]).push([[136],{"./src/components/Hero Image/HeroImage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HeroImage_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HeroImageContainer=styled_components_browser_esm.Ay.div`
  background-image: url(${p=>p.imageUrl});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  opacity: ${p=>p.disabled?.6:1};
  cursor: ${p=>p.disabled?"not-allowed":"pointer"};
`,HeroImageContent=styled_components_browser_esm.Ay.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
`,HeroImage=_ref=>{let{imageUrl,title,subtitle,disabled,onClick}=_ref;return(0,jsx_runtime.jsx)(HeroImageContainer,{imageUrl,disabled,onClick:disabled?void 0:onClick,children:(0,jsx_runtime.jsxs)(HeroImageContent,{children:[(0,jsx_runtime.jsx)("h1",{children:title}),(0,jsx_runtime.jsx)("p",{children:subtitle})]})})};HeroImage.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{imageUrl:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const HeroImage_stories={component:HeroImage,title:"Components/HeroImage",argTypes:{disabled:{control:"boolean"},onClick:{action:"clicked"}}},Default={args:{imageUrl:"https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png",title:"title",subtitle:"meme",disabled:!1}},Disabled={args:{imageUrl:"https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png",title:"title",subtitle:"meme",disabled:!0}},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    imageUrl: 'https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png',\n    title: 'title',\n    subtitle: 'meme',\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    imageUrl: 'https://cdn.indiabioscience.org/imager/articles/411714/Aniruddha_feature-image_4b32b63c5c28c858e051e9d1a2a717a1.png',\n    title: 'title',\n    subtitle: 'meme',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Hero-Image-HeroImage-stories.1e3cf9eb.iframe.bundle.js.map