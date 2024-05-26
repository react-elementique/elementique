import{p as x,j as n}from"./styled-components.browser.esm-nkDTgOUP.js";import{R as s}from"./index-CEThVCg_.js";function P(){const e=window.scrollX,l=window.scrollY;window.onscroll=function(){window.scrollTo(e,l)}}function $(){window.onscroll=function(){}}const E=x.nav`
    z-index: 999;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #000;
    font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
    font-family: ${e=>e.fontsProperty?e.fontsProperty.family:"system-ui"};
    font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"500"};
    padding: 10px 30px;
    background: ${e=>e.bgColor?e.bgColor:"#fff"};
    .nav-logo__container {
        display: flex;
        gap: 10px;
    }
    .nav-links__container {
        display: flex;
        gap: 10px;
    }
    a {
        text-decoration: none;
        color: #000;
        font-size: ${e=>e.fontsProperty?e.fontsProperty.size:"16px"};
        font-family: ${e=>e.fontsProperty?e.fontsProperty.size:"system-ui"};
        font-weight: ${e=>e.fontsProperty?e.fontsProperty.weight:"system-ui"};
    }
    .hamburger-open .line1 {
        transform: rotate(45deg);
    }
    .hamburger-open .line2 {
        transform: scaleY(0);
    }
    .hamburger-open .line3 {
        transform: rotate(-45deg);
    }
    .nav-phone__toggle {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
`,C=x.div`
    display: block;
    height: 26px;
    width: 32px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    .line {
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: #0e2431;
    }
    .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.3s ease-in-out;
    }
    .line2 {
        transition: transform 0.1s ease-in-out;
    }
    .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.3s ease-in-out;
    }
`,v=({type:e,logo:l,title:c,links:t,fontsProperty:N,className:q,bgColor:_})=>{console.log(e),console.log(N),console.log(_);const[a,S]=s.useState(!1),[u,m]=s.useState(!1),[d,z]=s.useState(p());function p(){const{innerWidth:r,innerHeight:T}=window;return{innerWidth:r,innerHeight:T}}return s.useEffect(()=>{function r(){z(p())}return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),s.useEffect(()=>{d.innerWidth<540?m(!0):m(!1)},[d]),s.useEffect(()=>{a?P():$()},[a]),n.jsxs(E,{className:q||"",children:[n.jsxs("a",{href:t?t[0].href:"#",className:"nav-logo__container",children:[l&&n.jsx("img",{src:l,alt:c||"logo"}),c]}),!u&&n.jsx("div",{className:"nav-links__container",children:t==null?void 0:t.map(r=>n.jsx("a",{href:r.href,children:r.label},`nav-${r.label}`))}),u&&n.jsxs(C,{onClick:()=>S(!a),className:a?"hamburger-open":"",children:[n.jsx("span",{className:"line line1"}),n.jsx("span",{className:"line line2"}),n.jsx("span",{className:"line line3"})]}),u&&a&&n.jsx("div",{className:"nav-phone__toggle",children:t==null?void 0:t.map(r=>n.jsx("a",{href:r.href,children:r.label},`nav-${r.label}`))})]})};v.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{type:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`{
    label: string;
    href: string;
}[]`},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size: string;
    weight: number;
    family: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!0}},{key:"weight",value:{name:"number",required:!0}},{key:"family",value:{name:"string",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""}}};const j=()=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:n.jsx(v,{type:"normal",logo:null,title:"Navbar",links:[{label:"Home",href:"/home"},{label:"About",href:"/about"}],className:null})});j.__docgenInfo={description:"",methods:[],displayName:"Example",props:{type:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`{
    label: string;
    href: string;
}[]`},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size: string;
    weight: number;
    family: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!0}},{key:"weight",value:{name:"number",required:!0}},{key:"family",value:{name:"string",required:!0}}]}},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},bgColor:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Navbar",component:j},i={args:{type:"normal",logo:null,title:"Navbar",links:[{label:"Home",href:"/home"},{label:"About",href:"/about"}],className:null}},o={args:{}};var g,f,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "normal",
    logo: null,
    title: "Navbar",
    links: [{
      label: "Home",
      href: "/home"
    }, {
      label: "About",
      href: "/about"
    }],
    className: null
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,b,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const A=["Standard","Custom"],I=Object.freeze(Object.defineProperty({__proto__:null,Custom:o,Standard:i,__namedExportsOrder:A,default:k},Symbol.toStringTag,{value:"Module"}));export{I as N,i as S};
