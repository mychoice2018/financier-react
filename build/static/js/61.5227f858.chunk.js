(this.webpackJsonpmaterialpro=this.webpackJsonpmaterialpro||[]).push([[61],{76:function(e,a,t){"use strict";var l=t(66),n=t(69),s=t(1),r=t.n(s),i=t(65),c=t.n(i),o=t(67),m=t.n(o),u=t(68),d={tag:u.t,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.color,i=e.body,c=e.inverse,o=e.outline,d=e.tag,b=e.innerRef,p=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.p)(m()(a,"card",!!c&&"text-white",!!i&&"card-body",!!s&&(o?"border":"bg")+"-"+s),t);return r.a.createElement(d,Object(l.a)({},p,{className:g,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},77:function(e,a,t){"use strict";var l=t(66),n=t(69),s=t(1),r=t.n(s),i=t(65),c=t.n(i),o=t(67),m=t.n(o),u=t(68),d={tag:u.t,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.p)(m()(a,"card-body"),t);return r.a.createElement(i,Object(l.a)({},c,{className:o,ref:s}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},79:function(e,a,t){"use strict";var l=t(66),n=t(69),s=t(1),r=t.n(s),i=t(65),c=t.n(i),o=t(67),m=t.n(o),u=t(68),d={tag:u.t,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(u.p)(m()(a,"card-title"),t);return r.a.createElement(s,Object(l.a)({},i,{className:c}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},794:function(e,a,t){"use strict";t.r(a);var l=t(73),n=t(1),s=t.n(n),r=t(76),i=t(79),c=t(77),o=t(66),m=t(69),u=t(80),d=t(65),b=t.n(d),p=t(67),g=t.n(p),h=t(68),f=t(82),E={children:b.a.node,className:b.a.string,closeClassName:b.a.string,closeAriaLabel:b.a.string,cssModule:b.a.object,color:b.a.string,fade:b.a.bool,isOpen:b.a.bool,toggle:b.a.func,tag:h.t,transition:b.a.shape(f.a.propTypes),innerRef:b.a.oneOfType([b.a.object,b.a.string,b.a.func])},N={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(u.a)({},f.a.defaultProps,{unmountOnExit:!0})};function k(e){var a=e.className,t=e.closeClassName,l=e.closeAriaLabel,n=e.cssModule,r=e.tag,i=e.color,c=e.isOpen,d=e.toggle,b=e.children,p=e.transition,E=e.fade,N=e.innerRef,k=Object(m.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),O=Object(h.p)(g()(a,"alert","alert-"+i,{"alert-dismissible":d}),n),y=Object(h.p)(g()("close",t),n),v=Object(u.a)({},f.a.defaultProps,{},p,{baseClass:E?p.baseClass:"",timeout:E?p.timeout:0});return s.a.createElement(f.a,Object(o.a)({},k,v,{tag:r,className:O,in:c,role:"alert",innerRef:N}),d?s.a.createElement("button",{type:"button",className:y,"aria-label":l,onClick:d},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,b)}k.propTypes=E,k.defaultProps=N;var O=k,y=t(72),v=t(71),j=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpen:!0},t.toggle=t.toggle.bind(Object(y.a)(t)),t}Object(v.a)(a,e);var t=a.prototype;return t.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.render=function(){return s.a.createElement(O,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},a}(n.Component);a.default=()=>{const e=Object(n.useState)(!0),a=Object(l.a)(e,2),t=a[0],o=a[1],m=()=>{o(!1)};return s.a.createElement("div",null,s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}," "),"Alert"),s.a.createElement(c.a,{className:""},s.a.createElement("div",{className:"mt-3"},s.a.createElement(O,{color:"primary"},"This is a primary alert\u2014 check it out!"),s.a.createElement(O,{color:"secondary"},"This is a secondary alert\u2014 check it out!"),s.a.createElement(O,{color:"success"},"This is a success alert\u2014 check it out!"),s.a.createElement(O,{color:"danger"},"This is a danger alert\u2014 check it out!"),s.a.createElement(O,{color:"warning"},"This is a warning alert\u2014 check it out!"),s.a.createElement(O,{color:"info"},"This is a info alert\u2014 check it out!"),s.a.createElement(O,{color:"light"},"This is a light alert\u2014 check it out!"),s.a.createElement(O,{color:"dark"},"This is a dark alert")))),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}),"Alert with Links"),s.a.createElement(c.a,{className:""},s.a.createElement("div",null,s.a.createElement(O,{color:"primary"},"This is a primary alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"secondary"},"This is a secondary alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"success"},"This is a success alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"danger"},"This is a danger alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"warning"},"This is a warning alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"info"},"This is a info alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"light"},"This is a light alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like."),s.a.createElement(O,{color:"dark"},"This is a dark alert with",s.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),". Give it a click if you like.")))),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}),"Alert with Additional content"),s.a.createElement(c.a,{className:""},s.a.createElement("div",null,s.a.createElement(O,{color:"success"},s.a.createElement("h4",{className:"alert-heading"},"Well done!"),s.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),s.a.createElement("hr",null),s.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}),"Alert with Dissmissing"),s.a.createElement(c.a,{className:""},s.a.createElement("div",null,s.a.createElement(O,{color:"info",isOpen:t,toggle:m.bind(null)},"I am an alert and I can be dismissed!")))),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}),"Alert with Uncontrolled [disable] Alerts"),s.a.createElement(c.a,{className:""},s.a.createElement("div",null,s.a.createElement(j,{color:"info"},"I am an alert and I can be dismissed!")))),s.a.createElement(r.a,null,s.a.createElement(i.a,{className:"bg-light border-bottom p-3 mb-0"},s.a.createElement("i",{className:"mdi mdi-comment-processing-outline mr-2"}),"Alerts without fade"),s.a.createElement(c.a,{className:""},s.a.createElement("div",null,s.a.createElement(O,{color:"primary",isOpen:t,toggle:m.bind(null),fade:!1},"I am a primary alert and I can be dismissed without animating!"),s.a.createElement(j,{color:"warning",fade:!1},"I am an alert and I can be dismissed without animating!")))))}},82:function(e,a,t){"use strict";var l=t(66),n=t(69),s=t(80),r=t(1),i=t.n(r),c=t(65),o=t.n(c),m=t(67),u=t.n(m),d=t(91),b=t(68),p=Object(s.a)({},d.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:b.t,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),g=Object(s.a)({},d.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:b.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function h(e){var a=e.tag,t=e.baseClass,s=e.baseClassActive,r=e.className,c=e.cssModule,o=e.children,m=e.innerRef,p=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),g=Object(b.r)(p,b.c),h=Object(b.q)(p,b.c);return i.a.createElement(d.Transition,g,(function(e){var n="entered"===e,d=Object(b.p)(u()(r,t,n&&s),c);return i.a.createElement(a,Object(l.a)({className:d},h,{ref:m}),o)}))}h.propTypes=p,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=61.5227f858.chunk.js.map