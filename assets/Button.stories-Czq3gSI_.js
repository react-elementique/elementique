import{p as x,j as u}from"./styled-components.browser.esm-nkDTgOUP.js";const B=x.button`
    line-height: 1;
    cursor: pointer;
    font-weight: 700;
    font-size: ${e=>e.size==="small"||e.size==="medium"?"16px":"20px"};
    border-radius: 10px;
    display: inline-block;
    color: ${e=>e.primary?"#fff":"#000"};
    ${e=>e.primary&&`background: ${e.bg?e.bg:"#FF5655"}`};
    ${e=>e.outline&&"background: transparent"};
    border: ${e=>e.outline?"2px solid":"none"};
    ${e=>e.outline&&`border-color: ${e.bg?e.bg:"#000"}`};
    padding: ${e=>e.size==="small"?"10px 18px":e.size==="medium"?"14px 20px":"14px 24px"};
`,y=({size:e,primary:a,outline:l,disabled:r,text:s,onClick:o,...i})=>u.jsx(B,{type:"button",onClick:o,primary:a,outline:l,disabled:r,size:e,...i,children:s});y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!1,tsType:{name:"string"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""},bg:{required:!1,tsType:{name:"string"},description:""}}};const b=({disabled:e,onClick:a=()=>{},primary:l,size:r="small",text:s="Button",outline:o,bg:i})=>u.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:u.jsx(y,{size:r,text:s,disabled:e,onClick:a,primary:l,outline:o,bg:i})});b.__docgenInfo={description:"",methods:[],displayName:"Example",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Button"',computed:!1}},primary:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"",defaultValue:{value:"() => {}",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Button",component:b},t={args:{text:"Button",primary:!0,disabled:!1,size:"small",onClick:()=>console.log("Button")}},n={args:{text:"Button",outline:!0,disabled:!1,size:"small",onClick:()=>console.log("Button")}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,f,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: "Button",
    outline: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const v=["Primary","Outline"],z=Object.freeze(Object.defineProperty({__proto__:null,Outline:n,Primary:t,__namedExportsOrder:v,default:T},Symbol.toStringTag,{value:"Module"}));export{z as B,n as O,t as P};
