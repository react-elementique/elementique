import{p as i,j as t}from"./styled-components.browser.esm-nkDTgOUP.js";const g=({type:e,name:l,variant:b,value:s,placeholder:d,setValue:a})=>t.jsx(t.Fragment,{children:b==="primary"?t.jsx(w,{placeholder:d,type:e,value:s,onChange:o=>a&&a(o.target.value)}):t.jsxs(v,{children:[t.jsx(h,{type:e,name:l,id:l,value:s,onChange:o=>a&&a(o.target.value),hasValue:!!s}),t.jsx(q,{children:d})]})}),w=i.input`
    padding: ${e=>e.p?e.p:"10px 14px"};
    width: ${e=>e.width||"100%"};
    max-width: ${e=>e.maxWidth};
    outline: none;
    border: ${e=>e.border?e.border.width:"1px"} solid
        ${e=>e.border?e.border.color:"#eee"};
    border-radius: ${e=>e.border?e.border.radius:"4px"};
    font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
    font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"500"};
`,v=i.div`
    position: relative;
    width: ${e=>e.width?e.width:"100%"};
    max-width: ${e=>e.maxWidth||"100%"};
    margin-bottom: 1.5rem;
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
`,h=i.input`
    padding: ${e=>e.p?e.p:"10px 14px"};
    width: ${e=>e.p?`calc(100% - ${2*e.p}px)`:"calc(100% - 28px)"};
    outline: none;
    border: ${e=>e.border?e.border.width:"1px"} solid
        ${e=>e.border?e.border.color:"#eee"};
    border-radius: ${e=>e.border?e.border.radius:"4px"};
    font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
    font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"500"};
    transition: border-color 0.3s;
    &:focus {
        border-color: #007bff;
    }
    &:
        focus + label,
        ${({hasValue:e})=>e&&`
            & + label {
                top: -0.75rem;
                font-size: 0.75rem;
                color: #007bff;
            }
        `};
`,q=i.label`
    position: absolute;
    padding: ${e=>e.p?e.p:"10px 14px"};
    transform: translateY(-50%);
    transition: all 0.3s;
    pointer-events: none;
    font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
    font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"500"};
    ${h}:focus + & {
        top: -0.75rem;
        left: -14px;
        font-size: 0.75rem;
        color: #007bff;
    }
    ${({hasValue:e})=>e?`
        top: -0.75rem;
        left: -14px;
        font-size: 0.75rem;
        color: #007bff;
    `:`
        top: 50%;
        left: 0;
        color: #999;
    `};
`;g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "float"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"float"'}]},description:""},name:{required:!1,tsType:{name:"union",raw:'string | "float_input"',elements:[{name:"string"},{name:"literal",value:'"float_input"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'string | "text"',elements:[{name:"string"},{name:"literal",value:'"text"'}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:'string | "640px"',elements:[{name:"string"},{name:"literal",value:'"640px"'}]},description:""},p:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string>",elements:[{name:"string"}]}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    color: string;
    width: string;
    radius: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"width",value:{name:"string",required:!0}},{key:"radius",value:{name:"string",required:!0}}]}},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size?: string;
    weight?: number;
    family?: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"family",value:{name:"string",required:!1}}]}},description:""},hasValue:{required:!1,tsType:{name:"boolean"},description:""}}};const x=({...e})=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:t.jsx(g,{placeholder:"Enter text",variant:e.variant,fontsProperty:e.fontsProperty,name:e.name,type:e.type,width:e.width,maxWidth:e.maxWidth,p:e.p,setValue:e.setValue,value:e.value,border:e.border})});x.__docgenInfo={description:"",methods:[],displayName:"Example",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "float"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"float"'}]},description:""},name:{required:!1,tsType:{name:"union",raw:'string | "float_input"',elements:[{name:"string"},{name:"literal",value:'"float_input"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'string | "text"',elements:[{name:"string"},{name:"literal",value:'"text"'}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:'string | "640px"',elements:[{name:"string"},{name:"literal",value:'"640px"'}]},description:""},p:{required:!1,tsType:{name:"number"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},setValue:{required:!1,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string>",elements:[{name:"string"}]}]},description:""},value:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    color: string;
    width: string;
    radius: string;
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0}},{key:"width",value:{name:"string",required:!0}},{key:"radius",value:{name:"string",required:!0}}]}},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size?: string;
    weight?: number;
    family?: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"family",value:{name:"string",required:!1}}]}},description:""},hasValue:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"Input",component:x},r={args:{placeholder:"Enter text",type:"text",variant:"primary"}},n={args:{placeholder:"Enter text",type:"text",variant:"float"}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text",
    type: "text",
    variant: "primary"
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,c,y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text",
    type: "text",
    variant: "float"
  }
}`,...(y=(c=n.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const P=["Primary","Float"],S=Object.freeze(Object.defineProperty({__proto__:null,Float:n,Primary:r,__namedExportsOrder:P,default:$},Symbol.toStringTag,{value:"Module"}));export{n as F,S as I,r as P};
