import{p as f,j as n}from"./styled-components.browser.esm-nkDTgOUP.js";const h=f.input`
    padding: ${e=>e.p?e.p:"10px 14px"};
    width: ${e=>e.width};
    max-width: ${e=>e.maxWidth};
    outline: none;
    border: ${e=>e.border?e.border.width:"1px"} solid
        ${e=>e.border?e.border.color:"#eee"};
    border-radius: ${e=>e.border?e.border.radius:"4px"};
    font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
    font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"500"};
`,p=({type:e,value:c,placeholder:g,setValue:i})=>n.jsx(h,{placeholder:g,type:e,value:c,onChange:y=>i&&i(y.target.value)});p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{required:!1,tsType:{name:"union",raw:'string | "text"',elements:[{name:"string"},{name:"literal",value:'"text"'}]},description:""},width:{required:!1,tsType:{name:"union",raw:'string | "100%"',elements:[{name:"string"},{name:"literal",value:'"100%"'}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:'string | "640px"',elements:[{name:"string"},{name:"literal",value:'"640px"'}]},description:""},p:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string>",elements:[{name:"string"}]}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    color: string;
    width: string;
    radius: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"width",value:{name:"string",required:!0}},{key:"radius",value:{name:"string",required:!0}}]}},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size: string;
    weight: number;
    family: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!0}},{key:"weight",value:{name:"number",required:!0}},{key:"family",value:{name:"string",required:!0}}]}},description:""}}};const m=()=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:n.jsx(p,{placeholder:"Enter text"})});m.__docgenInfo={description:"",methods:[],displayName:"Example",props:{type:{required:!1,tsType:{name:"union",raw:'string | "text"',elements:[{name:"string"},{name:"literal",value:'"text"'}]},description:""},width:{required:!1,tsType:{name:"union",raw:'string | "100%"',elements:[{name:"string"},{name:"literal",value:'"100%"'}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:'string | "640px"',elements:[{name:"string"},{name:"literal",value:'"640px"'}]},description:""},p:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string>",elements:[{name:"string"}]}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    color: string;
    width: string;
    radius: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"width",value:{name:"string",required:!0}},{key:"radius",value:{name:"string",required:!0}}]}},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size: string;
    weight: number;
    family: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!0}},{key:"weight",value:{name:"number",required:!0}},{key:"family",value:{name:"string",required:!0}}]}},description:""}}};const q={title:"Input",component:m},t={args:{}},r={args:{}};var a,s,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {}
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var u,d,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const w=["Primary","Custom"],v=Object.freeze(Object.defineProperty({__proto__:null,Custom:r,Primary:t,__namedExportsOrder:w,default:q},Symbol.toStringTag,{value:"Module"}));export{v as I,t as P};
