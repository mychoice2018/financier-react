(this.webpackJsonpmaterialpro=this.webpackJsonpmaterialpro||[]).push([[43],{204:function(e,a,t){"use strict";var n=t(66),s=t(69),l=t(1),o=t.n(l),r=t(65),c=t.n(r),i=t(67),m=t.n(i),d=t(68),p={tag:d.t,wrapTag:d.t,toggle:c.a.func,className:c.a.string,cssModule:c.a.object,children:c.a.node,closeAriaLabel:c.a.string,charCode:c.a.oneOfType([c.a.string,c.a.number]),close:c.a.object},u=function(e){var a,t=e.className,l=e.cssModule,r=e.children,c=e.toggle,i=e.tag,p=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(s.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(d.p)(m()(t,"modal-header"),l);if(!b&&c){var E="number"===typeof h?String.fromCharCode(h):h;a=o.a.createElement("button",{type:"button",onClick:c,className:Object(d.p)("close",l),"aria-label":u},o.a.createElement("span",{"aria-hidden":"true"},E))}return o.a.createElement(p,Object(n.a)({},f,{className:g}),o.a.createElement(i,{className:Object(d.p)("modal-title",l)},r),b||a)};u.propTypes=p,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},a.a=u},212:function(e,a,t){"use strict";var n=t(80),s=t(66),l=t(72),o=t(71),r=t(1),c=t.n(r),i=t(65),m=t.n(i),d=t(67),p=t.n(d),u=t(21),h=t.n(u),b=t(68),f={children:m.a.node.isRequired,node:m.a.any},g=function(e){function a(){return e.apply(this,arguments)||this}Object(o.a)(a,e);var t=a.prototype;return t.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},t.render=function(){return b.g?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},a}(c.a.Component);g.propTypes=f;var E=g,O=t(82);function N(){}var C=m.a.shape(O.a.propTypes),j={isOpen:m.a.bool,autoFocus:m.a.bool,centered:m.a.bool,scrollable:m.a.bool,size:m.a.string,toggle:m.a.func,keyboard:m.a.bool,role:m.a.string,labelledBy:m.a.string,backdrop:m.a.oneOfType([m.a.bool,m.a.oneOf(["static"])]),onEnter:m.a.func,onExit:m.a.func,onOpened:m.a.func,onClosed:m.a.func,children:m.a.node,className:m.a.string,wrapClassName:m.a.string,modalClassName:m.a.string,backdropClassName:m.a.string,contentClassName:m.a.string,external:m.a.node,fade:m.a.bool,cssModule:m.a.object,zIndex:m.a.oneOfType([m.a.number,m.a.string]),backdropTransition:C,modalTransition:C,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func]),unmountOnClose:m.a.bool,returnFocusAfterClose:m.a.bool},v=Object.keys(j),k={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:N,onClosed:N,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},y=function(e){function a(a){var t;return(t=e.call(this,a)||this)._element=null,t._originalBodyPadding=null,t.getFocusableChildren=t.getFocusableChildren.bind(Object(l.a)(t)),t.handleBackdropClick=t.handleBackdropClick.bind(Object(l.a)(t)),t.handleBackdropMouseDown=t.handleBackdropMouseDown.bind(Object(l.a)(t)),t.handleEscape=t.handleEscape.bind(Object(l.a)(t)),t.handleStaticBackdropAnimation=t.handleStaticBackdropAnimation.bind(Object(l.a)(t)),t.handleTab=t.handleTab.bind(Object(l.a)(t)),t.onOpened=t.onOpened.bind(Object(l.a)(t)),t.onClosed=t.onClosed.bind(Object(l.a)(t)),t.manageFocusAfterClose=t.manageFocusAfterClose.bind(Object(l.a)(t)),t.clearBackdropAnimationTimeout=t.clearBackdropAnimationTimeout.bind(Object(l.a)(t)),t.state={isOpen:!1,showStaticBackdropAnimation:!1},t}Object(o.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this.props,a=e.isOpen,t=e.autoFocus,n=e.onEnter;a&&(this.init(),this.setState({isOpen:!0}),t&&this.setFocus()),n&&n(),this._isMounted=!0},t.componentDidUpdate=function(e,a){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!a.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},t.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},t.onOpened=function(e,a){this.props.onOpened(),(this.props.modalTransition.onEntered||N)(e,a)},t.onClosed=function(e){var a=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||N)(e),a&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},t.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},t.getFocusableChildren=function(){return this._element.querySelectorAll(b.k.join(", "))},t.getFocusedChild=function(){var e,a=this.getFocusableChildren();try{e=document.activeElement}catch(t){e=a[0]}return e},t.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var a=this._dialog?this._dialog.parentNode:null;if(a&&e.target===a&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;a&&e.target===a&&this.props.toggle&&this.props.toggle(e)}},t.handleTab=function(e){if(9===e.which){var a=this.getFocusableChildren(),t=a.length;if(0!==t){for(var n=this.getFocusedChild(),s=0,l=0;l<t;l+=1)if(a[l]===n){s=l;break}e.shiftKey&&0===s?(e.preventDefault(),a[t-1].focus()):e.shiftKey||s!==t-1||(e.preventDefault(),a[0].focus())}}},t.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},t.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.o.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},t.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},t.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(b.l)(),Object(b.h)(),0===a.openCount&&(document.body.className=p()(document.body.className,Object(b.p)("modal-open",this.props.cssModule))),a.openCount+=1},t.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},t.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},t.close=function(){if(a.openCount<=1){var e=Object(b.p)("modal-open",this.props.cssModule),t=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(t," ").trim()}this.manageFocusAfterClose(),a.openCount=Math.max(0,a.openCount-1),Object(b.s)(this._originalBodyPadding)},t.renderModalDialog=function(){var e,a=this,t=Object(b.q)(this.props,v);return c.a.createElement("div",Object(s.a)({},t,{className:Object(b.p)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){a._dialog=e}}),c.a.createElement("div",{className:Object(b.p)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},t.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var a=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=a?"none":"block";var t=this.props,l=t.wrapClassName,o=t.modalClassName,r=t.backdropClassName,i=t.cssModule,m=t.isOpen,d=t.backdrop,u=t.role,h=t.labelledBy,f=t.external,g=t.innerRef,N={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:u,tabIndex:"-1"},C=this.props.fade,j=Object(n.a)({},O.a.defaultProps,{},this.props.modalTransition,{baseClass:C?this.props.modalTransition.baseClass:"",timeout:C?this.props.modalTransition.timeout:0}),v=Object(n.a)({},O.a.defaultProps,{},this.props.backdropTransition,{baseClass:C?this.props.backdropTransition.baseClass:"",timeout:C?this.props.backdropTransition.timeout:0}),k=d&&(C?c.a.createElement(O.a,Object(s.a)({},v,{in:m&&!!d,cssModule:i,className:Object(b.p)(p()("modal-backdrop",r),i)})):c.a.createElement("div",{className:Object(b.p)(p()("modal-backdrop","show",r),i)}));return c.a.createElement(E,{node:this._element},c.a.createElement("div",{className:Object(b.p)(l)},c.a.createElement(O.a,Object(s.a)({},N,j,{in:m,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.p)(p()("modal",o,this.state.showStaticBackdropAnimation&&"modal-static"),i),innerRef:g}),f,this.renderModalDialog()),k))}return null},t.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},a}(c.a.Component);y.propTypes=j,y.defaultProps=k,y.openCount=0;a.a=y},234:function(e,a,t){"use strict";var n=t(66),s=t(69),l=t(1),o=t.n(l),r=t(65),c=t.n(r),i=t(67),m=t.n(i),d=t(68),p={tag:d.t,className:c.a.string,cssModule:c.a.object},u=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.p)(m()(a,"modal-body"),t);return o.a.createElement(l,Object(n.a)({},r,{className:c}))};u.propTypes=p,u.defaultProps={tag:"div"},a.a=u},269:function(e,a,t){"use strict";var n=t(66),s=t(69),l=t(1),o=t.n(l),r=t(65),c=t.n(r),i=t(67),m=t.n(i),d=t(68),p={tag:d.t,className:c.a.string,cssModule:c.a.object},u=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),c=Object(d.p)(m()(a,"modal-footer"),t);return o.a.createElement(l,Object(n.a)({},r,{className:c}))};u.propTypes=p,u.defaultProps={tag:"div"},a.a=u},786:function(e,a,t){"use strict";t.r(a);var n=t(73),s=t(1),l=t.n(s),o=t(217),r=t(218);var c=({id:e,active:a,onClick:t,onChange:n,onStar:s,onImportant:c,from:i,emailExcerpt:m,time:d,label:p,starred:u,important:h})=>l.a.createElement("li",{className:"list-group-item p-3 border-bottom "+(a===e?"bg-light":"")},l.a.createElement(o.a,null,l.a.createElement(r.a,{xs:1},l.a.createElement("div",{className:"custom-control custom-checkbox"},l.a.createElement("input",{type:"checkbox",id:"check"+e,className:"custom-control-input",onChange:n}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"check"+e}," "))),l.a.createElement(r.a,{xs:10,onClick:t},l.a.createElement("h6",{className:"font-bold mb-1 mt-1"},i),l.a.createElement("div",null,l.a.createElement("p",{className:"text-truncate w-100 mb-0"},m),l.a.createElement("div",{className:"mt-2 d-flex align-items-center"},l.a.createElement("div",{className:"mr-2"},l.a.createElement("span",{className:"badge "+("Promotional"===p?"badge-warning":"")+("Social"===p?"badge-success":"")+("Health"===p?"badge-danger":"")},p)),l.a.createElement("div",{className:""},l.a.createElement("span",{className:"d-flex "},l.a.createElement("i",{onClick:s,className:"font-14 mr-2 "+(u?"fas fa-star":"far fa-star"),style:{color:u?"#FFC107":"#495057"}}),l.a.createElement("i",{onClick:c,className:"font-14 "+(h?"fas fa-bookmark":"far fa-bookmark"),style:{color:h?"#FFC107":"#495057"}}))),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("span",{className:"text-muted font-12"},d))))))),i=t(186),m=t(85);var d=({showRightPart:e})=>{const a=((e,a,t)=>{switch(a){case i.a.SHOW_INBOX:return e.filter(e=>e.inbox&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_SENT:return e.filter(e=>e.sent&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_DRAFTS:return e.filter(e=>e.draft&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_SPAM:return e.filter(e=>e.spam&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_TRASH:return e.filter(e=>e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_STARRED:return e.filter(e=>e.starred&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_IMPORTANT:return e.filter(e=>e.important&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_PROMOTIONAL:return e.filter(e=>"Promotional"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_SOCIAL:return e.filter(e=>"Social"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));case i.a.SHOW_HEALTH:return e.filter(e=>"Health"===e.label&&!e.trash&&e.from.toLocaleLowerCase().includes(t.toLocaleLowerCase()));default:throw new Error("Unknown filter: "+a)}})(Object(m.c)(e=>e.emailReducer.emails),Object(m.c)(e=>e.emailReducer.visibilityFilter),Object(m.c)(e=>e.emailReducer.emailSearch)),t=Object(m.c)(e=>e.emailReducer.emailContent),n=Object(m.b)();return l.a.createElement("ul",{className:"list-group listing-email-over"},a.map(a=>l.a.createElement(c,Object.assign({key:a.id,active:t},a,{onClick:()=>{n(Object(i.f)(a.id)),e()},onStar:()=>n(Object(i.i)(a.id)),onImportant:()=>n(Object(i.e)(a.id)),onChange:e=>{!0===e.target.checked?n(Object(i.h)(a.id,"checked")):n(Object(i.h)(a.id,"unchecked"))}}))))},p=t(738),u=t(739),h=t(212),b=t(204),f=t(234),g=t(219),E=t(220),O=t(97),N=t(221),C=t(269),j=t(187);var v=e=>{const a=Object(m.c)(a=>e.filter===a.emailReducer.visibilityFilter),t=Object(m.b)();return l.a.createElement("li",{className:"list-group-item",onClick:()=>t(Object(i.g)(e.filter)),disabled:a},l.a.createElement("span",{className:"list-group-item-action "+(a?"active":"")},e.children))};var k=()=>{const e=Object(s.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1],m=()=>{c(!t)};return l.a.createElement("div",null,l.a.createElement("div",{className:"p-3"},l.a.createElement("span",{onClick:m.bind(null),className:"btn btn-danger d-block text-white"},"Compose")),l.a.createElement("div",{className:"divider"}),l.a.createElement(p.a,{className:"filter-listing"},l.a.createElement(v,{filter:i.a.SHOW_INBOX},l.a.createElement("i",{className:"fas fa-inbox mr-2"})," Inbox"),l.a.createElement(v,{filter:i.a.SHOW_SENT},l.a.createElement("i",{className:"fas fa-paper-plane mr-2"})," Sent"),l.a.createElement(v,{filter:i.a.SHOW_DRAFTS},l.a.createElement("i",{className:"fas fa-file mr-2"})," Drafts"),l.a.createElement(v,{filter:i.a.SHOW_SPAM},l.a.createElement("i",{className:"fas fa-exclamation-circle mr-2"})," Spam"),l.a.createElement(v,{filter:i.a.SHOW_TRASH},l.a.createElement("i",{className:"fas fa-trash mr-2"})," Trash"),l.a.createElement(u.a,null,l.a.createElement("hr",null)),l.a.createElement(v,{filter:i.a.SHOW_STARRED},l.a.createElement("i",{className:"fas fa-star mr-2"})," Starred"),l.a.createElement(v,{filter:i.a.SHOW_IMPORTANT},l.a.createElement("i",{className:"fas fa-bookmark mr-2"})," Important"),l.a.createElement(u.a,null,l.a.createElement("hr",null)),l.a.createElement(v,{filter:i.a.SHOW_PROMOTIONAL},l.a.createElement("i",{className:"fas fa-tags mr-2"})," Promotional"),l.a.createElement(v,{filter:i.a.SHOW_SOCIAL},l.a.createElement("i",{className:"fas fa-tags mr-2"})," Social"),l.a.createElement(v,{filter:i.a.SHOW_HEALTH},l.a.createElement("i",{className:"fas fa-tags mr-2"})," Health")),l.a.createElement(h.a,{isOpen:t,toggle:m.bind(null),size:"lg"},l.a.createElement(b.a,{toggle:m.bind(null)},"Compose New Message"),l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement("div",{className:"form-body"},l.a.createElement(o.a,null,l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(E.a,null,l.a.createElement(O.a,{for:"to"},"To"),l.a.createElement(N.a,{type:"text",id:"to",name:"to"}))),l.a.createElement(r.a,{md:"6",sm:"12"},l.a.createElement(E.a,null,l.a.createElement(O.a,{for:"cc"},"CC"),l.a.createElement(N.a,{type:"text",id:"cc",name:"cc"}))),l.a.createElement(r.a,{sm:"12"},l.a.createElement(E.a,null,l.a.createElement(O.a,{for:"subject"},"Subject"),l.a.createElement(N.a,{type:"text",id:"subject",name:"subject"}))),l.a.createElement(r.a,{sm:"12"},l.a.createElement(E.a,null,l.a.createElement(O.a,{for:"msg"},"Email Message"),l.a.createElement(N.a,{type:"textarea",name:"msg",id:"msg"})))),l.a.createElement(E.a,null,l.a.createElement(O.a,null,"Attachment"),l.a.createElement(N.a,{type:"file",className:"form-control-file",id:"projectinput8"}))))),l.a.createElement(C.a,null,l.a.createElement(j.a,{color:"primary",onClick:m.bind(null)},"Send")," ",l.a.createElement(j.a,{color:"secondary",onClick:m.bind(null)},"Cancel"))))},y=t(199),w=t(806),S=t(734),T=t(740);var _=()=>{const e=Object(s.useState)(!1),a=Object(n.a)(e,2),t=a[0],o=a[1],r=Object(s.useState)(!1),c=Object(n.a)(r,2),d=c[0],p=c[1],u=Object(m.c)(e=>e.emailReducer.selectedEmail),h=Object(m.b)();return l.a.createElement("div",{className:"bg-light px-3 pb-3 border-bottom"},l.a.createElement("div",{className:"d-flex",role:"group"},l.a.createElement("button",{type:"button",className:"btn btn-outline-secondary w-100",onClick:()=>h(Object(i.j)(u))},l.a.createElement("i",{className:"fas fa-trash-alt"})),l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"btn-group w-100",role:"group"},l.a.createElement(y.a,{className:"w-100",isOpen:t,toggle:(()=>{o(!t)}).bind(null)},l.a.createElement(w.a,{outline:!0,color:"secondary",className:"w-100"},l.a.createElement("i",{className:"fas fa-folder"})),l.a.createElement(S.a,null,l.a.createElement(T.a,{onClick:()=>h(Object(i.b)(u,"inbox"))},"Inbox"),l.a.createElement(T.a,{onClick:()=>h(Object(i.b)(u,"sent"))},"Sent"),l.a.createElement(T.a,{onClick:()=>h(Object(i.b)(u,"draft"))},"Draft"),l.a.createElement(T.a,{onClick:()=>h(Object(i.b)(u,"spam"))},"Spam"),l.a.createElement(T.a,{onClick:()=>h(Object(i.b)(u,"trash"))},"Trash"))))),l.a.createElement("div",{className:"w-100"},l.a.createElement("div",{className:"btn-group w-100",role:"group"},l.a.createElement(y.a,{className:"w-100",isOpen:d,toggle:(()=>{p(!d)}).bind(null)},l.a.createElement(w.a,{outline:!0,color:"secondary",className:"w-100"},l.a.createElement("i",{className:"fas fa-tags"})),l.a.createElement(S.a,null,l.a.createElement(T.a,{onClick:()=>h(Object(i.c)(u,"Promotional"))},"Promotional"),l.a.createElement(T.a,{onClick:()=>h(Object(i.c)(u,"Social"))},"Social"),l.a.createElement(T.a,{onClick:()=>h(Object(i.c)(u,"Health"))},"Health")))))))};var A=()=>{const e=Object(m.c)(e=>e.emailReducer.emailSearch),a=Object(m.b)();return l.a.createElement("div",{className:"bg-light p-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search emails",onChange:e=>a(Object(i.d)(e.target.value)),value:e}))};var x=()=>{const e=Object(m.c)(e=>e.emailReducer.emails[e.emailReducer.emailContent-1]);return e?l.a.createElement("div",null,l.a.createElement("div",{className:"card-body border-bottom"},l.a.createElement("h4",{className:"mb-0"},e.subject,l.a.createElement("span",{className:"ml-1 badge "+("Promotional"===e.label?"badge-warning":"")+("Social"===e.label?"badge-success":"")+("Health"===e.label?"badge-danger":"")},e.label))),l.a.createElement("div",{className:"card-body border-bottom"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{src:e.thumbnail,alt:"user",className:"rounded-circle",width:"45"}),l.a.createElement("div",{className:"ml-2"},l.a.createElement("h5",{className:"mb-0 font-16 font-medium"},e.from),l.a.createElement("span",null,"to me")),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("span",null,e.time)))),l.a.createElement("div",{className:"card-body",dangerouslySetInnerHTML:{__html:e.emailContent}})):l.a.createElement("div",{className:"d-flex h-100 p-4 flex-column align-items-center justify-content-center"},l.a.createElement("i",{className:"far fa-envelope display-5"}),l.a.createElement("h4",{className:"mt-2"},"Please select an email to show details."))};a.default=()=>{const e=Object(s.useState)(!1),a=Object(n.a)(e,2),t=a[0],o=a[1],r=Object(s.useState)(!1),c=Object(n.a)(r,2),i=c[0],m=c[1],p=()=>{m(!i)};return l.a.createElement(s.Fragment,null,l.a.createElement("div",{className:"app-drawer"},l.a.createElement("div",{className:"left-part bg-white "+(!0===t?"show-panel":"")},l.a.createElement(k,null)),l.a.createElement("div",{className:"right-part bg-white app-drawer-content"},l.a.createElement("div",{className:"right-left-part "+(!0===i?"show-right-left-panel":"")},l.a.createElement("span",{onClick:(()=>{o(!t)}).bind(null),className:"bg-primary show-left-part text-white d-block d-lg-none "+(!0===t?"left-part-open":"")},l.a.createElement("i",{className:!0===t?"fas fa-chevron-left":"fas fa-chevron-right"})),l.a.createElement(A,null),l.a.createElement(_,null),l.a.createElement(d,{showRightPart:p.bind(null)})),l.a.createElement("div",{className:"right-right-part "+(!0===i?"show-right-right-panel":"hide-right-right-part")},l.a.createElement("span",{onClick:()=>{p()},className:"hide-right-right-part d-block d-md-none "+(!0===i?"right-right-part-open":"")},l.a.createElement("i",{className:"fas fa-times"})),l.a.createElement(x,null)))))}},82:function(e,a,t){"use strict";var n=t(66),s=t(69),l=t(80),o=t(1),r=t.n(o),c=t(65),i=t.n(c),m=t(67),d=t.n(m),p=t(91),u=t(68),h=Object(l.a)({},p.Transition.propTypes,{children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),tag:u.t,baseClass:i.a.string,baseClassActive:i.a.string,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])}),b=Object(l.a)({},p.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var a=e.tag,t=e.baseClass,l=e.baseClassActive,o=e.className,c=e.cssModule,i=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(u.r)(h,u.c),f=Object(u.q)(h,u.c);return r.a.createElement(p.Transition,b,(function(e){var s="entered"===e,p=Object(u.p)(d()(o,t,s&&l),c);return r.a.createElement(a,Object(n.a)({className:p},f,{ref:m}),i)}))}f.propTypes=h,f.defaultProps=b,a.a=f},97:function(e,a,t){"use strict";var n=t(66),s=t(69),l=t(1),o=t.n(l),r=t(65),c=t.n(r),i=t(67),m=t.n(i),d=t(68),p=c.a.oneOfType([c.a.number,c.a.string]),u=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.t,className:c.a.string,cssModule:c.a.object,xs:u,sm:u,md:u,lg:u,xl:u,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,l=e.hidden,r=e.widths,c=e.tag,i=e.check,p=e.size,u=e.for,h=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];r.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var l,o=!n;if(Object(d.n)(s)){var r,c=o?"-":"-"+a+"-";l=f(o,a,s.size),b.push(Object(d.p)(m()(((r={})[l]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r))),t)}else l=f(o,a,s),b.push(l)}}));var g=Object(d.p)(m()(a,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:u},h,{className:g}))};g.propTypes=h,g.defaultProps=b,a.a=g}}]);
//# sourceMappingURL=43.870c245e.chunk.js.map