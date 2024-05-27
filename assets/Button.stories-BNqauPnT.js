import{p as b,j as i}from"./styled-components.browser.esm-nkDTgOUP.js";const B=b.button`
    line-height: 1;
    cursor: pointer;
    font-weight: 700;
    font-size: ${e=>e.size==="small"||e.size==="medium"?"16px":"20px"};
    border-radius: 10px;
    display: inline-block;
    color: ${e=>e.primary?"#fff":"#000"};
    background-color: ${e=>e.primary?"#FF5655":"transparent"};
    border: ${e=>e.outline?"2px solid":"none"};
    border-color: ${e=>e.outline?"#000":"transparent"};
    padding: ${e=>e.size==="small"?"10px 18px":e.size==="medium"?"14px 20px":"14px 24px"};
`,y=({size:e,primary:l,outline:n,disabled:s,text:r,onClick:o,...g})=>i.jsx(B,{type:"button",onClick:o,primary:l,outline:n,disabled:s,size:e,...g,children:r});y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!1,tsType:{name:"string"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const x=({disabled:e=!1,onClick:l=()=>{},primary:n=!0,size:s="small",text:r="Button",outline:o=!1})=>i.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:i.jsx(y,{size:s,text:r,disabled:e,onClick:l,primary:n,outline:o})});x.__docgenInfo={description:"",methods:[],displayName:"Example",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Button"',computed:!1}},primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const v={title:"Button",component:x},t={args:{text:"Button",primary:!0,outline:!1,disabled:!1,size:"small",onClick:()=>console.log("Button")}},a={args:{text:"Button",outline:!0,primary:!1,disabled:!1,size:"small",onClick:()=>console.log("Button")}};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: true,
    outline: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,c,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: "Button",
    outline: true,
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const T=["Primary","Outline"],z=Object.freeze(Object.defineProperty({__proto__:null,Outline:a,Primary:t,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{z as B,t as P};
