import{p as x,j as o}from"./styled-components.browser.esm-nkDTgOUP.js";const b=x.button`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 10px;
    display: inline-block;
    color: ${e=>e.primary?"#fff":"#000"};
    background-color: ${e=>e.primary?"#FF5655":"#f4c4c4"};
    padding: ${e=>e.size==="small"?"7px 25px 8px":e.size==="medium"?"9px 30px 11px":"14px 30px 16px"};
`,f=({size:e,primary:l,disabled:n,text:r,onClick:s,...g})=>o.jsx(b,{type:"button",onClick:s,primary:l,disabled:n,size:e,...g,children:r});f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!1,tsType:{name:"string"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const y=({disabled:e=!1,onClick:l=()=>{},primary:n=!0,size:r="small",text:s="Button"})=>o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:o.jsx(f,{size:r,text:s,disabled:e,onClick:l,primary:n})});y.__docgenInfo={description:"",methods:[],displayName:"Example",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Button"',computed:!1}},primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const B={title:"Button",component:y},t={args:{text:"Button",primary:!0,disabled:!1,size:"small",onClick:()=>console.log("Button")}},a={args:{text:"Button",primary:!1,disabled:!1,size:"small",onClick:()=>console.log("Button")}};var i,u,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: "Button",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button")
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Primary","Secondary"],E=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:a,__namedExportsOrder:v,default:B},Symbol.toStringTag,{value:"Module"}));export{E as B,t as P};
