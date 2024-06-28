import{j as n}from"./styled-components.browser.esm-nkDTgOUP.js";import{useMDXComponents as r}from"./index-BwF_zu8I.js";import{M as s,C as o}from"./index-COItK2Oo.js";import{B as l,P as a,O as h}from"./Button.stories-Czq3gSI_.js";import"./index-CEThVCg_.js";import"./tslib.es6-CvpyDmub.js";import"./iframe-BQ0xVcUi.js";import"../sb-preview/runtime.js";import"./index-xnkZ--kd.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";function i(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:l,title:"Button"}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"Button component with different props."}),`
`,n.jsx(e.h4,{id:"primary",children:"Primary"}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Button} from "elementique";

const Example = () => {
  return (
      <Button
        size={"small"}
        text={"Button"}
        onClick={()=> console.log("Clicked")}
        primary={true}
      />
  );
};

export default Example;
`})}),`
`,n.jsx(e.h4,{id:"outline",children:"Outline"}),`
`,n.jsx(o,{of:h}),`
`,n.jsx(e.h2,{id:"usage-1",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import {Button} from "elementique";

const Example = () => {
  return (
      <Button
        size={"small"}
        text={"Button"}
        onClick={()=> console.log("Clicked")}
        outline={true}
      />
  );
};

export default Example;
`})}),`
`,n.jsx(e.h4,{id:"arguments",children:"Arguments"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"text"})," ",n.jsx(e.em,{children:n.jsx(e.code,{children:"() => void"})})," - A string that represents the text content of the button."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"primary"})," - A boolean indicating whether the button should have a primary styling or not. Typically, a primary button stands out as the main action in a user interface."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"outline"})," - A boolean indicating whether the button should have an outline styling or not."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"disabled"})," - A boolean indicating whether the button should be disabled or not. When disabled, the button cannot be clicked or interacted with."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"size"}),' - A string with one of three possible values: "small," "medium," or "large." It defines the size or dimensions of the button.']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"onClick"})," - A function that is called when the button is clicked. It receives a MouseEventHandler for handling the click event on the button element."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"bg"})," - The background color of the button can be passed to this prop"]}),`
`]})]})}function B(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{B as default};
