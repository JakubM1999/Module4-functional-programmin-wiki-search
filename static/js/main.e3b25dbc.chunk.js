(this["webpackJsonpwiki-search"]=this["webpackJsonpwiki-search"]||[]).push([[0],{11:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(5),s=r.n(c),i=(r(11),r(4)),o=r.n(i),u=r(6),h=r(2),j=r(0);var l=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)([]),s=Object(h.a)(c,2),i=s[0],l=s[1],p=Object(n.useState)({}),b=Object(h.a)(p,2),d=b[0],f=b[1],x=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:return n="https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=".concat(r),e.next=6,fetch(n);case 6:if((a=e.sent).ok){e.next=9;break}throw Error(a.statusText);case 9:return e.next=11,a.json();case 11:c=e.sent,l(c.query.search),f(c.query.searchinfo);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Wiki Search"}),Object(j.jsx)("form",{className:"search-box",onSubmit:x,children:Object(j.jsx)("input",{type:"search",placeholder:"Search for something...",value:r,onChange:function(e){return a(e.target.value)}})}),d.totalhits?Object(j.jsxs)("p",{children:["Search Results: ",d.totalhits]}):""]}),Object(j.jsx)("div",{className:"results",children:i.map((function(e,t){var r="https://en.wikipedia.org/?curid=".concat(e.pageid);return Object(j.jsxs)("div",{className:"result",children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.snippet}}),Object(j.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:"Read more"})]},t)}))})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e3b25dbc.chunk.js.map