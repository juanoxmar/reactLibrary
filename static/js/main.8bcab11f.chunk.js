(this.webpackJsonprlib=this.webpackJsonprlib||[]).push([[0],{119:function(e,a,t){e.exports=t(132)},124:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a),t.d(a,"App",(function(){return V}));var n=t(0),r=t.n(n),l=t(9),i=t.n(l),c=(t(124),t(125),t(72)),o=t(96),u=t(90),m=t(110),s=t(65),d=t(183),p=t(187),E=t(64),b=t(178),h=t(109),g=t.n(h),y=t(175),f=t(108),v=t.n(f),k=t(185),R=t(177),j=t(176),O=t(133),q=t(186),w=t(180),x=t(179),C=[{title:"Harry Potter",author:"J.K. Rowling",pages:300,reads:!0},{title:"The Hobbit",author:"J.R.R. Tolkien",pages:600,reads:!1}],S={title:"",author:"",pages:"",reads:""},I=E.c({title:E.d().required("Required"),author:E.d().required("Required"),pages:E.b().required("Required"),reads:E.a().required("Required")}),P={fab:{position:"absolute",bottom:20,right:20},select:{width:210},number:{inputProps:{min:1}},paper:{width:225,margin:8,padding:8,textAlign:"center"}},T=function(e){var a=e.label,t=(e.type,Object(m.a)(e,["label","type"])),n=Object(s.d)(t),l=Object(u.a)(n,2),i=l[0],c=l[1],o=c.error&&c.touched?c.error:"";return r.a.createElement(d.a,Object.assign({label:a},i,{helperText:o,error:!!o,margin:"dense",fullWidth:!0}))},B=function(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(y.a,{color:"primary","aria-label":"add",onClick:function(){n(!0)},style:P.fab},r.a.createElement(v.a,null)),r.a.createElement(k.a,{open:t,onClose:l},r.a.createElement(s.c,{initialValues:S,validationSchema:I,onSubmit:function(e){C.push(e),J(),i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},(function(e){var a=e.errors,t=e.isValid,n=e.dirty,i=e.touched;return r.a.createElement(s.b,null,r.a.createElement(j.a,null,r.a.createElement("h2",null,"Submit a New Book to Library"),r.a.createElement(T,{label:"Title",name:"title",id:"title",type:"text"}),r.a.createElement(T,{label:"Author",name:"author",id:"author",type:"text"}),r.a.createElement(s.a,{as:d.a,label:"Pages",name:"pages",id:"pages",InputProps:P.number,type:"number",margin:"dense",fullWidth:!0,error:i.pages&&Boolean(a.pages),helperText:a.pages&&i.pages?a.pages:""}),r.a.createElement(s.a,{as:d.a,label:"Have you read the book?",name:"reads",id:"reads",style:P.select,select:!0,margin:"dense",fullWidth:!0},r.a.createElement(p.a,{value:!0},"Read"),r.a.createElement(p.a,{value:!1},"Not Read"))),r.a.createElement(R.a,null,r.a.createElement(b.a,{color:"primary",onClick:l},"Cancel"),r.a.createElement(b.a,{color:"primary",type:"submit",disabled:!t||!n,onClick:l,startIcon:r.a.createElement(g.a,null)},"Save")))}))))},H={},J=function(){var e=0;C.map((function(a){H["check"+e]=a.reads,e++}))},N=function(e){J();var a=r.a.useState(H),t=Object(u.a)(a,2),n=t[0],l=t[1],i=function(e){l(Object(o.a)(Object(o.a)({},n),{},Object(c.a)({},e.target.name,e.target.checked)))};return r.a.createElement("div",{className:"library"},e.item.map((function(e,a){return r.a.createElement(O.a,{elevation:3,style:P.paper,id:e.title,key:e.title},r.a.createElement("h1",null,e.title),r.a.createElement("h4",null,e.author),r.a.createElement("h4",null,e.pages," Pages"),r.a.createElement(x.a,{component:"div"},r.a.createElement(w.a,{component:"label",container:!0,alignItems:"center",spacing:1},r.a.createElement(w.a,{item:!0},"Not Read"),r.a.createElement(w.a,{item:!0},r.a.createElement(q.a,{checked:n["check"+a],name:"check"+a,color:"primary",onChange:i})),r.a.createElement(w.a,{item:!0},"Have Read"))))})))},A=t(181),W=t(182),L=function(){return r.a.createElement("div",null,r.a.createElement(A.a,{position:"static"},r.a.createElement(W.a,{variant:"dense"},r.a.createElement(x.a,{variant:"h4"},"My Library"))))},V=function(){return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(N,{item:C}),r.a.createElement(B,{item:C}))};i.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.8bcab11f.chunk.js.map