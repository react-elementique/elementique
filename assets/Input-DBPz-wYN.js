import{j as e}from"./styled-components.browser.esm-nkDTgOUP.js";import{useMDXComponents as i}from"./index-BwF_zu8I.js";import{M as o,C as r}from"./index-COItK2Oo.js";import{I as l,P as h,F as a}from"./Input.stories-0j1bZ2sv.js";import"./index-CEThVCg_.js";import"./tslib.es6-CvpyDmub.js";import"./iframe-BQ0xVcUi.js";import"../sb-preview/runtime.js";import"./index-xnkZ--kd.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:l,title:"Input"}),`
`,e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsx(n.p,{children:"Input component with different props."}),`
`,e.jsx(n.h4,{id:"primary",children:"Primary"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {Input} from "elementique";

const Example = () => {
  return (
      <Input placeholder="Enter text" variant={"primary"} />
  );
};

export default Example;
`})}),`
`,e.jsx(n.h4,{id:"float",children:"Float"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h2,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import {Input} from "elementique";

const Example = () => {
  return (
      <Input placeholder="Enter text" variant={"float"} />
  );
};

export default Example;
`})}),`
`,e.jsx(n.h4,{id:"arguments",children:"Arguments"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"variant"})," - ",e.jsx("em",{children:"primary"})," or ",e.jsx("em",{children:"float"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"name"})," - This value will be passed to the id and name tags of input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"type"})," - This prop accepts the type of input ex: ",e.jsx("em",{children:"text"}),", ",e.jsx("em",{children:"email"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"width"})," - Custom width of the input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"maxWidth"})," - Maximum width of the input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"p"})," - Custom padding for the input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"placeholder"})," - This props accepts the prop to be displayed as the placeholder for the input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"setValue"})," - This prop is for the React useState ",e.jsx("em",{children:"setValue"})," function to change the ",e.jsx("em",{children:"value"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"value"})," - The value entered inside the input can be accessed using this prop"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"border"})," - Custom border for the input box"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"fontsProperty"})," - Custom fontsProperty is to be entered here in the form of an object: { size: string, weight: number, family: string }"]}),`
`]})]})}function C(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{C as default};
