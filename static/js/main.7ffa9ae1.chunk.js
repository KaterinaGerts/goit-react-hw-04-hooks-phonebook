(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"Container_container__2FUX6"}},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(11),s=n(2),u=function(t){var e=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]),[c,r]},l=n(10),b=n.n(l),m=n(0),d=function(t){var e=t.children;return Object(m.jsx)("div",{className:b.a.container,children:e})},j=n(3),f=n.n(j),O=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],d=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":return o(a);case"number":return b(a);default:return}},j=function(){o(""),b("")};return Object(m.jsxs)("form",{className:f.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),j()},children:[Object(m.jsxs)("label",{className:f.a.label,children:["Name",Object(m.jsx)("input",{className:f.a.input,type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{className:f.a.label,children:["Number",Object(m.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:l,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})},h=n(5),p=n.n(h);function _(t){var e=t.contacts,n=t.onDeleteContact;return Object(m.jsx)("ul",{className:p.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(m.jsxs)("li",{className:p.a.name,children:[e,": ",Object(m.jsx)("span",{className:p.a.number,children:a}),Object(m.jsx)("button",{type:"button",className:p.a.button,onClick:function(){return n(c)},children:"Delete"})]},c)}))})}var x=n(8),v=n.n(x),C=function(t){var e=t.value,n=t.onChange;return Object(m.jsxs)("label",{className:v.a.label,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:e,onChange:n,className:v.a.input})]})},N=n(19);var g=function(){var t=u("contacts"),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(s.a)(r,2),l=o[0],b=o[1],j=function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(m.jsx)(d,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(O,{onSubmit:function(t){var e=t.name,a=t.number,r={id:Object(N.a)(),name:e,number:a},o=e.toLowerCase();n.find((function(t){return o===t.name.toLowerCase()}))?alert("".concat(e," is already in contacts!")):c((function(t){return[].concat(Object(i.a)(t),[r])}))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:l,onChange:function(t){b(t.currentTarget.value)}}),Object(m.jsx)(_,{contacts:j,onDeleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__wm42t",label:"ContactForm_label__TqI3V",input:"ContactForm_input__3T5Tp",button:"ContactForm_button__3nHux"}},5:function(t,e,n){t.exports={contactList:"ContactList_contactList__SQ2mz",name:"ContactList_name__11vQT",number:"ContactList_number__3G2AP",button:"ContactList_button__3l1R7"}},8:function(t,e,n){t.exports={label:"Filter_label__6I1nZ",input:"Filter_input__1-Xr3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.7ffa9ae1.chunk.js.map