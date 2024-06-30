import{p as v,j as r}from"./styled-components.browser.esm-nkDTgOUP.js";import{R as a}from"./index-CEThVCg_.js";function E(){const e=window.scrollX,n=window.scrollY;window.onscroll=function(){window.scrollTo(e,n)}}function P(){window.onscroll=function(){}}const q=({logo:e,title:n,links:s,className:j,bg:u,p:c,px:N,py:_})=>{const[i,$]=a.useState(!1),[p,d]=a.useState(!1),[m,S]=a.useState(f());function f(){const{innerWidth:t,innerHeight:z}=window;return{innerWidth:t,innerHeight:z}}return a.useEffect(()=>{function t(){S(f())}return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),a.useEffect(()=>{m.innerWidth<540?d(!0):d(!1)},[m]),a.useEffect(()=>{i?E():P()},[i]),r.jsxs(k,{style:{background:`${u}`,padding:c?`${c}px`:`${_||10}px ${N||30}px`},className:j||"",children:[r.jsxs("a",{href:s?s[0].href:"#",className:"nav-logo__container",children:[e&&r.jsx("img",{src:e,alt:n||"logo"}),n]}),!p&&r.jsx("div",{className:"nav-links__container",children:s==null?void 0:s.map(t=>r.jsx("a",{href:t.href,children:t.label},`nav-${t.label}`))}),p&&r.jsxs(A,{onClick:()=>$(!i),className:i?"hamburger-open":"",children:[r.jsx("span",{className:"line line1"}),r.jsx("span",{className:"line line2"}),r.jsx("span",{className:"line line3"})]}),p&&i&&r.jsx("div",{style:{background:`${u}`},className:"nav-phone__toggle",children:s==null?void 0:s.map(t=>r.jsx("a",{href:t.href,children:t.label},`nav-${t.label}`))})]})},k=v.nav`
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: ${e=>e.p?`${e.p}px`:`${e.py||10}px ${e.px||30}px`};
    width: calc(
        100% -
            ${e=>e.p?`${2*e.p}px`:e.px?`${2*e.px}px`:"60px"}
    );
    .nav-logo__container,
    .nav-links__container {
        display: flex;
        align-items: center;
        gap: 10px;
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
        height: 100%;
        width: 100%;
        top: calc(
            ${e=>e.fontsProperty&&e.fontsProperty.size?e.fontsProperty.size:`30px + ${e.p?2*e.p:e.py?2*e.py:20}px - 2px`}
        );
        left: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
        z-index: 990;
    }
    img {
        height: 30px;
    }
    a {
        text-decoration: none;
        color: ${e=>e.color||"#000"};
        font-size: ${e=>{var n;return((n=e.fontsProperty)==null?void 0:n.size)||"16px"}};
        font-family: ${e=>{var n;return((n=e.fontsProperty)==null?void 0:n.family)||"system-ui"}};
        font-weight: ${e=>{var n;return`${((n=e.fontsProperty)==null?void 0:n.weight)||500}`}};
    }
`,A=v.div`
    display: block;
    height: 20px;
    width: 25px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    .line {
        display: block;
        height: 3px;
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
`;q.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{p:{required:!1,tsType:{name:"number"},description:""},px:{required:!1,tsType:{name:"number"},description:""},py:{required:!1,tsType:{name:"number"},description:""},type:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`{
    label: string;
    href: string;
}[]`},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size?: string;
    weight?: number;
    family?: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"family",value:{name:"string",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},bg:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const T=()=>r.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:r.jsx(q,{type:"normal",logo:null,title:"Navbar",links:[{label:"Home",href:"/home"},{label:"About",href:"/about"}],className:null})});T.__docgenInfo={description:"",methods:[],displayName:"Example",props:{p:{required:!1,tsType:{name:"number"},description:""},px:{required:!1,tsType:{name:"number"},description:""},py:{required:!1,tsType:{name:"number"},description:""},type:{required:!1,tsType:{name:"string"},description:""},logo:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    href: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`{
    label: string;
    href: string;
}[]`},description:""},fontsProperty:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    size?: string;
    weight?: number;
    family?: string;
}`,signature:{properties:[{key:"size",value:{name:"string",required:!1}},{key:"weight",value:{name:"number",required:!1}},{key:"family",value:{name:"string",required:!1}}]}},description:""},className:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},bg:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""}}};const W={title:"Navbar",component:T},l={args:{type:"normal",logo:null,title:"Navbar",links:[{label:"Home",href:"/home"},{label:"About",href:"/about"}],className:null}},o={args:{}};var g,y,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,x,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const C=["Standard","Custom"],R=Object.freeze(Object.defineProperty({__proto__:null,Custom:o,Standard:l,__namedExportsOrder:C,default:W},Symbol.toStringTag,{value:"Module"}));export{R as N,l as S};
