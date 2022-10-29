(this.webpackJsonpmaterialpro=this.webpackJsonpmaterialpro||[]).push([[28],{146:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={tag:d.t,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),o=Object(d.p)(i()(a,"input-group-text"),t);return c.a.createElement(r,Object(l.a)({},m,{className:o}))};u.propTypes=E,u.defaultProps={tag:"span"},a.a=u},211:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E=t(72),u=t(71),p={className:o.a.string,id:o.a.oneOfType([o.a.string,o.a.number]).isRequired,label:o.a.node,valid:o.a.bool,invalid:o.a.bool,bsSize:o.a.string,htmlFor:o.a.string,cssModule:o.a.object,onChange:o.a.func,children:o.a.oneOfType([o.a.node,o.a.array,o.a.func]),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={files:null},t.onChange=t.onChange.bind(Object(E.a)(t)),t}Object(u.a)(a,e);var t=a.prototype;return t.onChange=function(e){var a=e.target,t=this.props.onChange,l=this.getSelectedFiles(a);"function"===typeof t&&t.apply(void 0,arguments),this.setState({files:l})},t.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var a=e.value.split("\\");return a[a.length-1]}return e.value},t.render=function(){var e=this.props,a=e.className,t=e.label,r=e.valid,m=e.invalid,o=e.cssModule,s=e.children,E=(e.bsSize,e.innerRef),u=e.htmlFor,p=(e.type,e.onChange,e.dataBrowse),b=Object(n.a)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse"]),h=Object(d.p)(i()(a,"custom-file"),o),y=Object(d.p)(i()(m&&"is-invalid",r&&"is-valid"),o),f=u||b.id,g=this.state.files;return c.a.createElement("div",{className:h},c.a.createElement("input",Object(l.a)({type:"file"},b,{ref:E,className:i()(y,Object(d.p)("custom-file-input",o)),onChange:this.onChange})),c.a.createElement("label",{className:Object(d.p)("custom-file-label",o),htmlFor:f,"data-browse":p},g||t||"Choose file"),s)},a}(c.a.Component);b.propTypes=p;var h=b,y={className:o.a.string,id:o.a.oneOfType([o.a.string,o.a.number]).isRequired,type:o.a.string.isRequired,label:o.a.node,inline:o.a.bool,valid:o.a.bool,invalid:o.a.bool,bsSize:o.a.string,htmlFor:o.a.string,cssModule:o.a.object,children:o.a.oneOfType([o.a.node,o.a.array,o.a.func]),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])};function f(e){var a=e.className,t=e.label,r=e.inline,m=e.valid,o=e.invalid,s=e.cssModule,E=e.children,u=e.bsSize,p=e.innerRef,b=e.htmlFor,y=Object(n.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),f=y.type,g=Object(d.p)(i()(a,"custom-"+f,!!u&&"custom-"+f+"-"+u),s),N=Object(d.p)(i()(o&&"is-invalid",m&&"is-valid"),s),x=b||y.id;if("select"===f){y.type;var v=Object(n.a)(y,["type"]);return c.a.createElement("select",Object(l.a)({},v,{ref:p,className:i()(N,g)}),E)}if("file"===f)return c.a.createElement(h,e);if("checkbox"!==f&&"radio"!==f&&"switch"!==f)return c.a.createElement("input",Object(l.a)({},y,{ref:p,className:i()(N,g)}));var O=i()(g,Object(d.p)(i()("custom-control",{"custom-control-inline":r}),s));return c.a.createElement("div",{className:O},c.a.createElement("input",Object(l.a)({},y,{type:"switch"===f?"checkbox":f,ref:p,className:i()(N,Object(d.p)("custom-control-input",s))})),c.a.createElement("label",{className:Object(d.p)("custom-control-label",s),htmlFor:x},t),E)}f.propTypes=y;a.a=f},222:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={tag:d.t,size:o.a.string,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=e.size,o=Object(n.a)(e,["className","cssModule","tag","size"]),s=Object(d.p)(i()(a,"input-group",m?"input-group-"+m:null),t);return c.a.createElement(r,Object(l.a)({},o,{className:s}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},223:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E=t(146),u={tag:d.t,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=e.addonType,o=e.children,s=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),u=Object(d.p)(i()(a,"input-group-"+m),t);return"string"===typeof o?c.a.createElement(r,Object(l.a)({},s,{className:u}),c.a.createElement(E.a,{children:o})):c.a.createElement(r,Object(l.a)({},s,{className:u,children:o}))};p.propTypes=u,p.defaultProps={tag:"div"},a.a=p},346:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={children:o.a.node,inline:o.a.bool,tag:d.t,color:o.a.string,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.inline,m=e.color,o=e.tag,s=Object(n.a)(e,["className","cssModule","inline","color","tag"]),E=Object(d.p)(i()(a,!r&&"form-text",!!m&&"text-"+m),t);return c.a.createElement(o,Object(l.a)({},s,{className:E}))};u.propTypes=E,u.defaultProps={tag:"small",color:"muted"},a.a=u},639:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(65),c=t.n(r),m=t(199),o={addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node},s=function(e){return n.a.createElement(m.a,e)};s.propTypes=o,a.a=s},640:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={children:o.a.node,tag:d.t,className:o.a.string,cssModule:o.a.object,valid:o.a.bool,tooltip:o.a.bool},u={tag:"div",valid:void 0},p=function(e){var a=e.className,t=e.cssModule,r=e.valid,m=e.tooltip,o=e.tag,s=Object(n.a)(e,["className","cssModule","valid","tooltip","tag"]),E=m?"tooltip":"feedback",u=Object(d.p)(i()(a,r?"valid-"+E:"invalid-"+E),t);return c.a.createElement(o,Object(l.a)({},s,{className:u}))};p.propTypes=E,p.defaultProps=u,a.a=p},76:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={tag:d.t,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.color,m=e.body,o=e.inverse,s=e.outline,E=e.tag,u=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.p)(i()(a,"card",!!o&&"text-white",!!m&&"card-body",!!r&&(s?"border":"bg")+"-"+r),t);return c.a.createElement(E,Object(l.a)({},p,{className:b,ref:u}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},77:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={tag:d.t,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},u=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,m=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.p)(i()(a,"card-body"),t);return c.a.createElement(m,Object(l.a)({},o,{className:s,ref:r}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},774:function(e,a,t){"use strict";t.r(a);var l=t(73),n=t(1),r=t.n(n),c=t(217),m=t(218),o=t(76),s=t(79),i=t(77),d=t(219),E=t(220),u=t(97),p=t(221),b=t(346),h=t(211),y=t(187),f=t(222),g=t(223),N=t(146),x=t(639),v=t(806),O=t(734),T=t(740),j=t(640);a.default=()=>{const e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],k=a[1],w=Object(n.useState)(!1),C=Object(l.a)(w,2),F=C[0],S=C[1];return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Ordinary Form"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"exampleEmail12"},"Email Address"),r.a.createElement(p.a,{type:"email",name:"email",id:"exampleEmail12",placeholder:"Email address Here"}),r.a.createElement(b.a,{color:"muted"},"We'll never share your email with anyone else.")),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"examplePassword2"},"Password"),r.a.createElement(p.a,{type:"password",name:"password",id:"examplePassword2",placeholder:"Password Here"})),r.a.createElement(E.a,null,r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox",label:"Check Me Out!"})),r.a.createElement(y.a,{color:"primary"},"Submit"))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Default Form"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Default Text ",r.a.createElement("span",{className:"help"},' e.g. "George deo"')),r.a.createElement(p.a,{type:"text",defaultValue:"George deo..."})),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"example-email"},"Email ",r.a.createElement("span",{className:"help"},' e.g. "example@gmail.com"')),r.a.createElement(p.a,{type:"email",id:"example-email",name:"example-email",placeholder:"Email"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Password"),r.a.createElement(p.a,{type:"password",defaultValue:"password"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Placeholder"),r.a.createElement(p.a,{type:"text",placeholder:"placeholder"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Text area"),r.a.createElement(p.a,{type:"textarea",rows:"5"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Read only input"),r.a.createElement(p.a,{type:"text",placeholder:"Readonly input here\u2026",readOnly:!0})),r.a.createElement(E.a,null,r.a.createElement("fieldset",{disabled:!0},r.a.createElement(u.a,{htmlFor:"disabledTextInput"},"Disabled input"),r.a.createElement(p.a,{type:"text",id:"disabledTextInput",placeholder:"Disabled input"}))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"4"},r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox1",label:"Check this custom checkbox"}),r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox2",label:"Check this custom checkbox"}),r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox3",label:"Check this custom checkbox"})),r.a.createElement(m.a,{md:"4"},r.a.createElement(h.a,{type:"radio",id:"exampleCustomRadio1",name:"customRadio",label:"Toggle this custom radio"}),r.a.createElement(h.a,{type:"radio",id:"exampleCustomRadio2",name:"customRadio",label:"Toggle this custom radio"})))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Select Years"),r.a.createElement(p.a,{type:"select"},r.a.createElement("option",null,"Choose here..."),r.a.createElement("option",null,"One"),r.a.createElement("option",null,"Two"),r.a.createElement("option",null,"Three"),r.a.createElement("option",null,"Four"),r.a.createElement("option",null,"Five"))),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"exampleFile"},"Default File"),r.a.createElement(p.a,{type:"file",placeholder:""})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Custom File upload"),r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,"Upload")),r.a.createElement("div",{className:"custom-file"},r.a.createElement(p.a,{type:"file",className:"custom-file-input",id:"inputGroupFile01"}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"inputGroupFile01"},"Choose file")))),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"helptext"},"Help Text"),r.a.createElement(p.a,{type:"text",name:"help",id:"helptext",placeholder:"Helping Text Here"}),r.a.createElement(b.a,{color:"muted"},"A block of help text that breaks onto a new line and may extend beyond one line.")))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0 text-white"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Highlighted Header Form"),r.a.createElement(i.a,{className:"bg-light"},r.a.createElement(s.a,{className:"mb-0"},"Person Info")),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"First Name"),r.a.createElement(p.a,{type:"text",placeholder:"Shaina nehwal"}),r.a.createElement(b.a,{className:"muted"},"This is inline help"))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Last Name"),r.a.createElement(p.a,{type:"text",placeholder:"12n"}),r.a.createElement(b.a,{className:"muted"},"This field has error.")))),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Select Gender"),r.a.createElement(p.a,{type:"select",name:"Select Gender"},r.a.createElement("option",null,"Female"),r.a.createElement("option",null,"Male")),r.a.createElement(b.a,{className:"muted"},"Select your gender"))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Date of Birth"),r.a.createElement(p.a,{type:"date",placeholder:"DOB Here"})))),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Category"),r.a.createElement(p.a,{type:"select",name:"Select Category"},r.a.createElement("option",null,"Category1"),r.a.createElement("option",null,"Category2"),r.a.createElement("option",null,"Category3"),r.a.createElement("option",null,"Category4"),r.a.createElement("option",null,"Category5")))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Membership"),r.a.createElement(h.a,{type:"radio",id:"exampleCustomRadio3",name:"customRadio",label:"Free"}),r.a.createElement(h.a,{type:"radio",id:"exampleCustomRadio4",name:"customRadio",label:"Paid"})))))),r.a.createElement(i.a,{className:"bg-light"},r.a.createElement(s.a,{className:"mb-0"},"Address")),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"12"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Street"),r.a.createElement(p.a,{type:"text",placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"City"),r.a.createElement(p.a,{type:"text",placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"State"),r.a.createElement(p.a,{type:"text",placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Post Code"),r.a.createElement(p.a,{type:"text",placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Country"),r.a.createElement(p.a,{type:"select",name:"Select Category"},r.a.createElement("option",null,"--Select your Country--"),r.a.createElement("option",null,"India"),r.a.createElement("option",null,"Sri Lanka"),r.a.createElement("option",null,"USA")))))),r.a.createElement(i.a,{className:"border-top"},r.a.createElement(y.a,{type:"submit",className:"btn btn-success"}," ",r.a.createElement("i",{className:"fa fa-check"})," Save"),r.a.createElement(y.a,{type:"button",className:"btn btn-dark ml-2"},"Cancel")))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Horizontal Form"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Text"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"text",defaultValue:"Akhsay Kumar"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Search"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"text",defaultValue:"How do I shoot web"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Email"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"email",defaultValue:"react@example.com"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"URL"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"url",defaultValue:"http://wrappixel.com"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Telephone"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"tel",defaultValue:"1-(555)-555-5555"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Password"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"password",defaultValue:"hunter2"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Number"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"number",defaultValue:"6029"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Date and time"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"datetime-local",defaultValue:"2011-08-19T13:45:00"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Date"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"date",defaultValue:"2011-08-19"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Month"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"month",defaultValue:"2011-08"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Week"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"week",defaultValue:"2011-W33"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Time"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"time",defaultValue:"13:45:00"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Select"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"select",name:"Select Category"},r.a.createElement("option",null,"Choose..."),r.a.createElement("option",null,"One"),r.a.createElement("option",null,"Two"),r.a.createElement("option",null,"Three"))))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Color"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"color",defaultValue:"#563d7c"})))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Input Range"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{type:"range",defaultValue:"50"}))))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Input Groups"),r.a.createElement(i.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},"@"),r.a.createElement(p.a,{placeholder:"Username"}))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{placeholder:"Recipient's username"}),r.a.createElement(g.a,{addonType:"append"},"@example.com"))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},"https://example.com/users"),r.a.createElement(p.a,{type:"text"}))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},"$"),r.a.createElement(p.a,{placeholder:"",type:"text"}),r.a.createElement(g.a,{addonType:"append"},".00"))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,"$"),r.a.createElement(N.a,null,"0.00")),r.a.createElement(p.a,{placeholder:"",type:"text"}))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Checkboxes and radio addons"),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement(p.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"}))),r.a.createElement(p.a,{placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement(p.a,{addon:!0,type:"radio","aria-label":"Checkbox for following text input"}))),r.a.createElement(p.a,{placeholder:""}))))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Multiple addons"),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement(p.a,{addon:!0,type:"checkbox","aria-label":"Checkbox for following text input"})),r.a.createElement(N.a,null,"0.00")),r.a.createElement(p.a,{placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,"$"),r.a.createElement(N.a,null,"0.00")),r.a.createElement(p.a,{placeholder:""}))))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Button addons"),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(y.a,{color:"primary"},"Go!")),r.a.createElement(p.a,{placeholder:""}))),r.a.createElement(m.a,{md:"6"},r.a.createElement(f.a,null,r.a.createElement(p.a,{placeholder:""}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(y.a,{color:"primary"},"Go!")))))),r.a.createElement(E.a,null,r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(y.a,{color:"danger"},"Hate It")),r.a.createElement(p.a,{placeholder:""}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(y.a,{color:"success"},"Love It")))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Dropdown addons"),r.a.createElement(f.a,null,r.a.createElement(x.a,{addonType:"prepend",isOpen:t,toggle:(()=>{k(!t)}).bind(null)},r.a.createElement(v.a,{caret:!0},"Dropdown"),r.a.createElement(O.a,null,r.a.createElement(T.a,{header:!0},"Header"),r.a.createElement(T.a,{disabled:!0},"Action"),r.a.createElement(T.a,null,"Another Action"),r.a.createElement(T.a,{divider:!0}),r.a.createElement(T.a,null,"Another Action"))),r.a.createElement(p.a,{placeholder:""}),r.a.createElement(x.a,{addonType:"append",isOpen:F,toggle:(()=>{S(!F)}).bind(null)},r.a.createElement(v.a,{caret:!0},"Dropdown"),r.a.createElement(O.a,null,r.a.createElement(T.a,{header:!0},"Header"),r.a.createElement(T.a,{disabled:!0},"Action"),r.a.createElement(T.a,null,"Another Action"),r.a.createElement(T.a,{divider:!0}),r.a.createElement(T.a,null,"Another Action")))))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Input States"),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"exampleEmail"},"Input with success"),r.a.createElement(p.a,{valid:!0}),r.a.createElement(j.a,{valid:!0},"Success! You've done it.")),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"examplePassword"},"Input with danger"),r.a.createElement(p.a,{invalid:!0}),r.a.createElement(j.a,null,"Sorry, that username's taken. Try another?")),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Email"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{valid:!0,placeholder:"name@example.com"}),r.a.createElement(j.a,{valid:!0},"Success! You've done it.")))),r.a.createElement(E.a,null,r.a.createElement(c.a,null,r.a.createElement(u.a,{sm:"2"},"Email"),r.a.createElement(m.a,{sm:"10"},r.a.createElement(p.a,{invalid:!0,placeholder:"name@example.com"}),r.a.createElement(j.a,null,"Sorry, that username's taken. Try another?")))),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"exampleEmail"},"Valid input"),r.a.createElement(p.a,{valid:!0}),r.a.createElement(j.a,{valid:!0,tooltip:!0},"Sweet! that name is available"),r.a.createElement(b.a,null,"Example help text that remains unchanged.")),r.a.createElement(E.a,null,r.a.createElement(u.a,{className:"mt-3",htmlFor:"examplePassword"},"Invalid input"),r.a.createElement(p.a,{invalid:!0}),r.a.createElement(j.a,{tooltip:!0},"Oh noes! that name is already taken"),r.a.createElement(b.a,null,"Example help text that remains unchanged."))),r.a.createElement(m.a,{md:"6"},r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Large"),r.a.createElement(p.a,{placeholder:"lg size",bsSize:"lg"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Default"),r.a.createElement(p.a,{placeholder:"default size"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Small"),r.a.createElement(p.a,{placeholder:"sm size",bsSize:"sm"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Grid Size"),r.a.createElement(c.a,null,r.a.createElement(m.a,{md:"4"},r.a.createElement(p.a,{placeholder:"Col-4"})),r.a.createElement(m.a,{md:"8"},r.a.createElement(p.a,{placeholder:"Col-8"}))))))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Disabled Form"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"exampleEmail1"},"Disabled input"),r.a.createElement(p.a,{type:"email",name:"email",id:"exampleEmail1",placeholder:"Email address Here",disabled:!0}),r.a.createElement(b.a,{color:"muted"},"We'll never share your email with anyone else.")),r.a.createElement(E.a,null,r.a.createElement(u.a,{htmlFor:"examplePassword"},"Disabled Password"),r.a.createElement(p.a,{type:"password",name:"password",id:"examplePassword",placeholder:"Password Here",disabled:!0})),r.a.createElement(E.a,{className:"mb-3",check:!0,disabled:!0},r.a.createElement(u.a,{check:!0},r.a.createElement(p.a,{type:"checkbox",name:"check1",disabled:!0})," ","Check Me Out !")),r.a.createElement(y.a,{color:"primary",disabled:!0},"Submit"))))),r.a.createElement(m.a,{md:"12"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Readonly Form"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Name"),r.a.createElement(p.a,{type:"text",placeholder:"Full Name Here",readOnly:!0})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Email"),r.a.createElement(p.a,{type:"email",readOnly:!0,id:"staticEmail",defaultValue:"email@example.com"})),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Password"),r.a.createElement(p.a,{type:"password",defaultValue:"ilikeios",readOnly:!0})),r.a.createElement(y.a,{color:"primary",disabled:!0},"Submit"))))),r.a.createElement(m.a,{md:"6"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Form with Left Icon"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Username"),r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-user"}))),r.a.createElement(p.a,{type:"text",placeholder:"Username"}))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Email"),r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-email"}))),r.a.createElement(p.a,{type:"email",placeholder:"Email"}))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Password"),r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-lock"}))),r.a.createElement(p.a,{type:"password",placeholder:"Password"}))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Confirm Password"),r.a.createElement(f.a,null,r.a.createElement(g.a,{addonType:"prepend"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-lock"}))),r.a.createElement(p.a,{type:"password",placeholder:"Confirm Password"}))),r.a.createElement(E.a,null,r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox11",label:"Remember Me!"})),r.a.createElement("div",{className:"border-top pt-3 mt-3"},r.a.createElement(y.a,{type:"submit",className:"btn btn-success mr-2"},"Submit"),r.a.createElement(y.a,{type:"submit",className:"btn btn-dark"},"Cancel")))))),r.a.createElement(m.a,{md:"6"},r.a.createElement(o.a,null,r.a.createElement(s.a,{className:"bg-light border-bottom p-3 mb-0"},r.a.createElement("i",{className:"mdi mdi-book mr-2"}),"Form with Right Icon"),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Username"),r.a.createElement(f.a,null,r.a.createElement(p.a,{type:"text",placeholder:"Username"}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-user"}))))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Email"),r.a.createElement(f.a,null,r.a.createElement(p.a,{type:"email",placeholder:"Email"}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-email"}))))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Password"),r.a.createElement(f.a,null,r.a.createElement(p.a,{type:"password",placeholder:"Password"}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-lock"}))))),r.a.createElement(E.a,null,r.a.createElement(u.a,null,"Confirm Password"),r.a.createElement(f.a,null,r.a.createElement(p.a,{type:"password",placeholder:"Confirm Password"}),r.a.createElement(g.a,{addonType:"append"},r.a.createElement(N.a,null,r.a.createElement("i",{className:"ti-lock"}))))),r.a.createElement(E.a,null,r.a.createElement(h.a,{type:"checkbox",id:"exampleCustomCheckbox12",label:"Remember Me!"})),r.a.createElement("div",{className:"border-top pt-3 mt-3"},r.a.createElement(y.a,{type:"submit",className:"btn btn-success mr-2"},"Submit"),r.a.createElement(y.a,{type:"submit",className:"btn btn-dark"},"Cancel"))))))))}},79:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E={tag:d.t,className:o.a.string,cssModule:o.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),o=Object(d.p)(i()(a,"card-title"),t);return c.a.createElement(r,Object(l.a)({},m,{className:o}))};u.propTypes=E,u.defaultProps={tag:"div"},a.a=u},97:function(e,a,t){"use strict";var l=t(66),n=t(69),r=t(1),c=t.n(r),m=t(65),o=t.n(m),s=t(67),i=t.n(s),d=t(68),E=o.a.oneOfType([o.a.number,o.a.string]),u=o.a.oneOfType([o.a.string,o.a.number,o.a.shape({size:E,order:E,offset:E})]),p={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.t,className:o.a.string,cssModule:o.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,m=e.widths,o=e.tag,s=e.check,E=e.size,u=e.for,p=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];m.forEach((function(a,l){var n=e[a];if(delete p[a],n||""===n){var r,c=!l;if(Object(d.n)(n)){var m,o=c?"-":"-"+a+"-";r=h(c,a,n.size),b.push(Object(d.p)(i()(((m={})[r]=n.size||""===n.size,m["order"+o+n.order]=n.order||0===n.order,m["offset"+o+n.offset]=n.offset||0===n.offset,m))),t)}else r=h(c,a,n),b.push(r)}}));var y=Object(d.p)(i()(a,!!r&&"sr-only",!!s&&"form-check-label",!!E&&"col-form-label-"+E,b,!!b.length&&"col-form-label"),t);return c.a.createElement(o,Object(l.a)({htmlFor:u},p,{className:y}))};y.propTypes=p,y.defaultProps=b,a.a=y}}]);
//# sourceMappingURL=28.a85055a8.chunk.js.map