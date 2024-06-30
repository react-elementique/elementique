import{j as n}from"./styled-components.browser.esm-nkDTgOUP.js";import{useMDXComponents as i}from"./index-BwF_zu8I.js";import{M as o,C as r}from"./index-D6wDVYFb.js";import{I as l,P as h,F as d}from"./Input.stories-CoRQ1t-L.js";import"./index-CEThVCg_.js";import"./tslib.es6-CvpyDmub.js";import"./iframe-DkNY5gSq.js";import"../sb-preview/runtime.js";import"./index-xnkZ--kd.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";function s(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l,title:"Input"}),`
`,n.jsx(e.h1,{id:"input",children:"Input"}),`
`,n.jsx(e.p,{children:"Input component with different props."}),`
`,n.jsx(e.h3,{id:"primary",children:"Primary"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Input} from "elementique";

const Example = () => {
  return (
      <Input placeholder="Enter text" variant={"primary"} />
  );
};

export default Example;
`})}),`
`,n.jsx(e.h3,{id:"float",children:"Float"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h2,{id:"usage-1",children:"Usage"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": You need to wrap the float input inside a div to handle it's width."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Input} from "elementique";

const Example = () => {
  return (
    <div style={{ width: "400px" }}>
      <Input placeholder="Enter text" variant={"float"} />
    </div>
  );
};

export default Example;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"variant"})," - ",n.jsx("em",{children:"primary"})," or ",n.jsx("em",{children:"float"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"name"})," - This value will be passed to the id and name tags of input"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"type"})," - This prop accepts the type of input ex: ",n.jsx("em",{children:"text"}),", ",n.jsx("em",{children:"email"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"width"})," - Custom width of the input"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"maxWidth"})," - Maximum width of the input"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"p"})," - Custom padding for the input as number"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"placeholder"})," - This props accepts the prop to be displayed as the placeholder for the input"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"setValue"})," - This prop is for the React useState ",n.jsx("em",{children:"setValue"})," function to change the ",n.jsx("em",{children:"value"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"value"})," - The value entered inside the input can be accessed using this prop"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"border"})," - Custom border for the input box"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"fontsProperty"})," - Custom fontsProperty is to be entered here in the form of an object: { size: string, weight: number, family: string }"]}),`
`]})]})}function b(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{b as default};
