(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),s=n.n(a),r=n(2),i=(n(9),n(0));var l=function(){var e=Object(c.useState)("0"),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),l=Object(r.a)(s,2),b=l[0],o=l[1],j=Object(c.useState)(null),d=Object(r.a)(j,2),u=d[0],m=d[1],O=Object(c.useState)(""),x=Object(r.a)(O,2),p=x[0],h=x[1],k=Object(c.useState)(!1),v=Object(r.a)(k,2),N=v[0],C=v[1],f=function(e){e.persist(),p.includes(".")&&"."===e.target.innerText||(N&&o(""),h(p?function(t){return"0"===t&&"."!==e.target.innerText?e.target.innerText:t+e.target.innerText}:"."===e.target.innerText?"0"+e.target.innerText:e.target.innerText),C(!1))};Object(c.useEffect)((function(){a(p)}),[p]),Object(c.useEffect)((function(){a("0")}),[]);var g=function(e){""===p&&""===b||(m(e.target.innerText),""!==b?F():(o(p),h("")),C(!1))},F=function(){if(""!==p&&""!==b){var e;switch(C(!0),u){case"+":e=Math.round(1e6*(parseFloat(b)+parseFloat(p)))/1e6;break;case"-":e=parseFloat(b)-parseFloat(p);break;case"\xd7":e=parseFloat(b)*parseFloat(p);break;case"\xf7":e=parseFloat(b)/parseFloat(p)}o(e),h("")}};return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("div",{className:"screen",children:n||b}),Object(i.jsx)("div",{onClick:function(){h("0"),o("")},className:"btn gray",children:"AC"}),Object(i.jsx)("div",{onClick:function(){""===p&&""===b||(""===p&&""!==b&&o(-1*parseFloat(b)),""!==p&&h((-1*parseFloat(p)).toString()))},className:"btn gray",children:"+/-"}),Object(i.jsx)("div",{onClick:function(){""===p&&""===b||(""===p&&""!==b&&o(parseFloat(b)/100),p&&h((parseFloat(p)/100).toString()))},className:"btn gray",children:"%"}),Object(i.jsx)("button",{onClick:g,className:"btn operator",children:"\xf7"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"7"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"8"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"9"}),Object(i.jsx)("button",{onClick:g,className:"btn operator",children:"\xd7"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"4"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"5"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"6"}),Object(i.jsx)("button",{onClick:g,className:"btn operator",children:"-"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"1"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"2"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"3"}),Object(i.jsx)("button",{onClick:g,className:"btn operator",children:"+"}),Object(i.jsx)("div",{onClick:f,className:"btn number zero",children:"0"}),Object(i.jsx)("div",{onClick:f,className:"btn number",children:"."}),Object(i.jsx)("div",{onClick:F,className:"btn orange",children:"="})]})})};s.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.1efdde89.chunk.js.map