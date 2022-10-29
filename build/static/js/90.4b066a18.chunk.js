(this.webpackJsonpmaterialpro=this.webpackJsonpmaterialpro||[]).push([[90],{803:function(e,a,t){"use strict";t.r(a);var l=t(73),r=t(367),c=t(139),o=t(1),m=t.n(o),n=t(217),s=t(218),i=t(76),d=t(79),u=t(77),b=t(655),E=t.n(b),p=t(656),g=t.n(p);const h=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",disabled:!0},{value:"purple",label:"Purple",color:"#5243AA"},{value:"red",label:"Red",color:"#FF5630",isFixed:!0},{value:"orange",label:"Orange",color:"#FF8B00"},{value:"yellow",label:"Yellow",color:"#FFC400"},{value:"green",label:"Green",color:"#36B37E"},{value:"forest",label:"Forest",color:"#00875A"},{value:"slate",label:"Slate",color:"#253858"},{value:"silver",label:"Silver",color:"#666666"}],N=[{label:"Colours",options:h},{label:"Flavours",options:[{value:"vanilla",label:"Vanilla",rating:"safe"},{value:"chocolate",label:"Chocolate",rating:"good"},{value:"strawberry",label:"Strawberry",rating:"wild"},{value:"salted-caramel",label:"Salted Caramel",rating:"crazy"}]}];var f=t(727),C=(t(657),t(658)),v=t.n(C);t(659);const w=(e="#ccc")=>({alignItems:"center",display:"flex",":before":{backgroundColor:e,borderRadius:10,content:'""',display:"block",marginRight:8,height:10,width:10}}),S={control:e=>Object(c.a)({},e,{backgroundColor:"white"}),option:(e,{data:a,isDisabled:t,isFocused:l,isSelected:r})=>{const o=g()(a.color);return Object(c.a)({},e,{backgroundColor:t?null:r?a.color:l?o.alpha(.1).css():null,color:t?"#ccc":r?g.a.contrast(o,"white")>2?"white":"black":a.color,cursor:t?"not-allowed":"default"})},multiValue:(e,{data:a})=>{const t=g()(a.color);return Object(c.a)({},e,{backgroundColor:t.alpha(.1).css()})},multiValueLabel:(e,{data:a})=>Object(c.a)({},e,{color:a.color}),multiValueRemove:(e,{data:a})=>Object(c.a)({},e,{color:a.color,":hover":{backgroundColor:a.color,color:"white"}}),input:e=>Object(c.a)({},e,{},w()),placeholder:e=>Object(c.a)({},e,{},w()),singleValue:(e,{data:a})=>Object(c.a)({},e,{},w(a.color))},x=()=>"clear all",O=e=>{const a=e.children,t=void 0===a?m.a.createElement(x,null):a,l=e.getStyles,c=e.innerProps,o=c.ref,n=Object(r.a)(c,["ref"]);return m.a.createElement("div",Object.assign({},n,{ref:o,style:l("clearIndicator",e)}),m.a.createElement("div",{style:{padding:"0px 5px"}},t))},k=(e,a)=>Object(c.a)({},e,{cursor:"pointer",color:a.isFocused?"blue":"black"}),y={border:"2px dotted ".concat(h[2].color),borderRadius:"5px",background:"#f2fcff"},V=e=>m.a.createElement("div",{style:y},m.a.createElement(f.a.Group,e)),j=e=>m.a.createElement("div",{style:{background:h[2].color}},m.a.createElement(f.a.IndicatorsContainer,e)),M={padding:"8px 12px",background:h[2].color,color:"white"},F=e=>m.a.createElement(f.a.MenuList,e,m.a.createElement("div",{style:M},"Custom Menu List"),e.children),T={borderRadius:"1px solid black",padding:"5px",background:h[1].color,color:"white"},I=e=>m.a.createElement("div",{style:T},m.a.createElement("p",null,"Custom Control"),m.a.createElement(f.a.Control,e));a.default=()=>{const e=Object(o.useState)(["MacOs","Windows","BeOS","Linux"]),a=Object(l.a)(e,2),t=a[0],r=a[1];return m.a.createElement("div",null,m.a.createElement("h4",{className:"mb-3"},"Tags"),m.a.createElement(n.a,null,m.a.createElement(s.a,{md:"12"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Tags"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(E.a,{value:t,onChange:e=>(e=>{r(e)})(e),tagProps:{className:"react-tagsinput-tag bg-info text-white rounded"}}))))),m.a.createElement("h4",{className:"mb-3"},"Select and Mutiple Select Options"),m.a.createElement(n.a,null,m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Customized Background Color Select"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{defaultValue:h[2],label:"Single select",options:h,styles:S})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Customized Background Color Multi-Select"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{closeMenuOnSelect:!1,defaultValue:[h[0],h[1]],isMulti:!0,options:h,styles:S})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Custom Clear Indicator"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{closeMenuOnSelect:!1,components:{ClearIndicator:O},styles:{clearIndicator:k},defaultValue:[h[4],h[5]],isMulti:!0,options:h})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Custom Group"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{defaultValue:h[1],options:N,components:{Group:V}})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Custom Indicators Container"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{closeMenuOnSelect:!1,components:{IndicatorsContainer:j},defaultValue:[h[4],h[5]],isMulti:!0,options:h})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Menus"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{defaultValue:h[1],options:N,components:{MenuList:F}})))),m.a.createElement(s.a,{md:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Custom Control"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(f.b,{defaultValue:h[0],isClearable:!0,components:{Control:I},isSearchable:!0,name:"color",options:h}))))),m.a.createElement("h4",{className:"mb-3"},"Switches"),m.a.createElement(n.a,null,m.a.createElement(s.a,{md:"4"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Default Switch"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(v.a,{defaultValue:!1})," ",m.a.createElement(v.a,null)))),m.a.createElement(s.a,{md:"4"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Simple Switch"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(v.a,{onText:"",offText:"",defaultValue:!1})," ",m.a.createElement(v.a,{onText:"",offText:""})))),m.a.createElement(s.a,{md:"4"},m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"bg-light border-bottom p-3 mb-0"},m.a.createElement("i",{className:"mdi mdi-tag-multiple mr-2"}),"Switch with Icons"),m.a.createElement(u.a,{className:"border-top"},m.a.createElement(v.a,{onText:m.a.createElement("i",{className:"ti-check"}),offText:m.a.createElement("i",{className:"ti-close"}),defaultValue:!1})," ",m.a.createElement(v.a,{onText:m.a.createElement("i",{className:"ti-close"}),offText:m.a.createElement("i",{className:"ti-check"})}))))))}}}]);
//# sourceMappingURL=90.4b066a18.chunk.js.map