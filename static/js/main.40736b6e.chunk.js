(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=c(4),j=c(2),i=(c(14),c(15),c(16),c(0)),b=c(6),r=c.n(b),l=c(1),o=Object(i.memo)((function(e){var t=e.to,c=e.text;return Object(l.jsx)(a.b,{to:t,className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:c})})),x=Object(i.memo)((function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",text:"Home"}),Object(l.jsx)(o,{to:"tabs",text:"Tabs"})]})})})})),d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(j.b,{})})})]})},O=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},m=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=Object(i.memo)((function(e){var t=e.tabId;return Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:h.map((function(e){var c=e.id,n=e.title,s=t===c;return Object(l.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":s}),children:Object(l.jsx)(a.b,{to:"/tabs/".concat(c),children:n})})}))})})})),v=function(e){var t=e.text;return Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:t})},f=function(){var e=Object(j.i)().tabId,t=void 0===e?"":e,c=Object(i.useMemo)((function(){return h.find((function(e){return e.id===t}))||null}),[t]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(u,{tabId:t}),c?Object(l.jsx)(v,{text:c.content}):Object(l.jsx)(v,{text:"Please select a tab"})]})};s.a.render(Object(l.jsxs)(a.a,{children:[Object(l.jsx)(j.e,{children:Object(l.jsxs)(j.c,{path:"/",element:Object(l.jsx)(d,{}),children:[Object(l.jsx)(j.c,{index:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(j.c,{path:"/home",element:Object(l.jsx)(j.a,{to:"/",replace:!0})}),Object(l.jsx)(j.c,{path:"*",element:Object(l.jsx)(m,{})}),Object(l.jsxs)(j.c,{path:"tabs",children:[Object(l.jsx)(j.c,{index:!0,element:Object(l.jsx)(f,{})}),Object(l.jsx)(j.c,{path:":tabId",element:Object(l.jsx)(f,{})})]})]})}),Object(l.jsx)(d,{})]}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.40736b6e.chunk.js.map