(this.webpackJsonpmaterialpro=this.webpackJsonpmaterialpro||[]).push([[41],{168:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"d",(function(){return l})),a.d(t,"h",(function(){return m})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return h}));var n=a(87),r=a(7),i=a.n(r);const o=(e,t,a,r,o,s,c,u,d)=>({type:n.a,id:e++,firstname:t||"",lastname:a||"",image:i.a,department:r||"",company:o||"",phone:s||"",email:c||"",address:u||"",notes:d||""}),s=(e,t,a)=>({type:n.S,id:e,field:t,value:a}),c=e=>({type:n.g,id:e}),u=e=>({type:n.l,flag:e}),d=e=>({type:n.H,filter:e}),l=e=>({type:n.r,payload:e}),m=e=>({type:n.P,id:e}),p=e=>({type:n.h,id:e}),h={SHOW_ALL:"SHOW_ALL",FREQUENT_CONTACT:"FREQUENT_CONTACT",STARRED_CONTACT:"STARRED_CONTACT",ENGINEERING_DEPARTMENT_CONTACT:"ENGINEERING_DEPARTMENT_CONTACT",SALES_DEPARTMENT_CONTACT:"Sales",SUPPORT_DEPARTMENT_CONTACT:"SUPPORT_DEPARTMENT_CONTACT",SEARCH_CONTACT:"SEARCH_CONTACT",DELETED_CONTACT:"DELETED_CONTACT"}},169:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return l})),a.d(t,"i",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"f",(function(){return h})),a.d(t,"g",(function(){return f})),a.d(t,"e",(function(){return b})),a.d(t,"j",(function(){return T})),a.d(t,"a",(function(){return O})),a.d(t,"h",(function(){return y}));var n=a(18),r=a.n(n),i=a(87),o=a(6);const s=()=>e=>{e(c()),r.a.get("api/data/todo/todoData").then(t=>{const a=t.data.slice(0,10);e(u(a))}).catch(t=>{e(d(t.message))})},c=()=>({type:i.p}),u=e=>({type:i.q,payload:e}),d=e=>({type:i.o,payload:e}),l=e=>t=>{t({type:i.I,filter:e}),o.d.push("/todos/".concat(e))},m=e=>({type:i.Q,id:e}),p=e=>({type:i.j,id:e}),h=e=>({type:i.O,id:e}),f=e=>({type:i.t,payload:e}),b=e=>({type:i.f,id:e}),T=(e,t,a)=>({type:i.U,id:e,field:t,value:a}),O=(e,t,a)=>({type:i.c,id:e++,title:t||"",desc:a||""}),y={SHOW_ALL_TODO:"all",STARRED_TODO:"starred",DELETED_TODO:"deleted",COMPLETED_TODO:"completed"}},186:function(e,t,a){"use strict";a.d(t,"i",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"j",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"h",(function(){return d})),a.d(t,"d",(function(){return l})),a.d(t,"g",(function(){return m})),a.d(t,"a",(function(){return p}));var n=a(87);const r=e=>({type:n.M,id:e}),i=e=>({type:n.v,id:e}),o=e=>({type:n.A,id:e}),s=e=>({type:n.R,id:e}),c=(e,t)=>({type:n.d,id:e,folder:t}),u=(e,t)=>({type:n.e,id:e,label:t}),d=(e,t)=>({type:n.G,id:e,checkStatus:t}),l=e=>({type:n.s,searchTerm:e}),m=e=>({type:n.F,filter:e}),p={SHOW_INBOX:"SHOW_INBOX",SHOW_SENT:"SHOW_SENT",SHOW_DRAFTS:"SHOW_DRAFTS",SHOW_SPAM:"SHOW_SPAM",SHOW_TRASH:"SHOW_TRASH",SHOW_STARRED:"SHOW_STARRED",SHOW_IMPORTANT:"SHOW_IMPORTANT",SHOW_PROMOTIONAL:"SHOW_PROMOTIONAL",SHOW_SOCIAL:"SHOW_SOCIAL",SHOW_HEALTH:"SHOW_HEALTH"}},278:function(e,t,a){"use strict";var n=a(1);const r=Object(n.lazy)(()=>Promise.all([a.e(6),a.e(42)]).then(a.bind(null,415))),i=Object(n.lazy)(()=>Promise.all([a.e(32),a.e(80)]).then(a.bind(null,422))),o=Object(n.lazy)(()=>Promise.all([a.e(6),a.e(55)]).then(a.bind(null,423))),s=Object(n.lazy)(()=>a.e(30).then(a.bind(null,424))),c=Object(n.lazy)(()=>a.e(27).then(a.bind(null,425))),u=Object(n.lazy)(()=>a.e(49).then(a.bind(null,426)));var d=[{path:"/authentication/login",name:"Login",icon:"mdi mdi-account-key",component:Object(n.lazy)(()=>Promise.all([a.e(1),a.e(5),a.e(4),a.e(9),a.e(79)]).then(a.bind(null,427)))},{path:"/authentication/login2",name:"Login with Firebase",icon:"mdi mdi-account-key",component:r},{path:"/authentication/register",name:"Register",icon:"mdi mdi-account-plus",component:i},{path:"/authentication/register2",name:"Register with Firebase",icon:"mdi mdi-account-plus",component:o},{path:"/authentication/lockscreen",name:"Lockscreen",icon:"mdi mdi-account-off",component:s},{path:"/authentication/recover-pwd",name:"Recover Password",icon:"mdi mdi-account-convert",component:c},{path:"/authentication/maintanance",name:"Maintanance",icon:"mdi mdi-pencil-box-outline",component:u}];t.a=d},382:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(101),o=a(278);t.default=()=>r.a.createElement("div",{className:"authentications"},r.a.createElement(i.d,null,o.a.map((e,t)=>e.redirect?r.a.createElement(i.a,{from:e.path,to:e.pathTo,key:t}):r.a.createElement(i.b,{path:e.path,component:e.component,key:t}))))},783:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n);const i=Object(n.lazy)(()=>Promise.all([a.e(5),a.e(18),a.e(37)]).then(a.bind(null,785)));var o=[{path:"/authentication",name:"Athentication",component:Object(n.lazy)(()=>Promise.resolve().then(a.bind(null,382)))},{path:"/",name:"Dashboard",component:i}],s=a(101),c=a(85),u=a(167),d=a(376),l=a(377),m=a(139),p=a(87);const h={activeDir:"ltr",activeThemeLayout:"vertical",activeTheme:"light",activeSidebarType:"full",activeLogoBg:"skin4",activeNavbarBg:"skin4",activeSidebarBg:"skin6",activeSidebarPos:"fixed",activeHeaderPos:"fixed",activeLayout:"full"};const f={chatContent:1,chatSearch:"",chats:[]};const b={notes:[],notesContent:0,noteSearch:""};var T=a(35);var O=(e=T.a,t)=>{switch(t.type){case p.a:return[...e,{id:t.id,firstname:t.firstname,lastname:t.lastname,image:t.image,department:t.department,company:t.company,phone:t.phone,email:t.email,address:t.address,notes:t.notes,frequentlycontacted:!1,starred:!1,deleted:!1}];case p.S:return e.map(e=>e.id===t.id?Object(m.a)({},e,{[t.field]:t.value}):e);case p.P:return e.map(e=>e.id===t.id?Object(m.a)({},e,{starred:!e.starred}):e);case p.h:return e.map(e=>e.id===t.id?Object(m.a)({},e,{deleted:!e.deleted}):e);default:return e}};var y=(e="",t)=>{switch(t.type){case p.g:return t.id;default:return e}},E=a(168);var S=(e=E.c.SHOW_ALL,t)=>{switch(t.type){case p.H:return t.filter;default:return e}};var g=(e="",t)=>{switch(t.type){case p.r:return t.payload;case p.H:return"";default:return e}};var v=(e=!1,t)=>{switch(t.type){case p.l:return!e;case p.g:return!1;default:return e}},C=Object(u.combineReducers)({contacts:O,contactsDetails:y,contactsVisibilityFilter:S,contactsSearch:g,editContact:v}),A=a(7),_=a.n(A),L=a(8),I=a.n(L),x=a(9),j=a.n(x),D=a(5),R=a.n(D),M=a(10),H=a.n(M),w=a(11),N=a.n(w),P=a(12),k=a.n(P),W=a(13),B=a.n(W),F=a(14),q=a.n(F),G=a(15),U=a.n(G),z=a(19),J=a.n(z);var V=[{id:1,from:"James Smith",thumbnail:_.a,subject:"It is a long established.",time:"3:45 PM",emailExcerpt:"Contrary to popular belief, Lorem Ipsum is not simply random text. ",emailContent:"<p>Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with. </p>",unread:!0,attachment:!1,starred:!0,important:!1,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:"Promotional"},{id:2,from:"Michael Smith",thumbnail:I.a,subject:"fact that a reader will be distracted.",time:"6:01 PM",emailExcerpt:"It has roots in a piece of classical Latin literature from 45 BC",emailContent:"<p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. ",unread:!0,attachment:!1,starred:!0,important:!1,inbox:!1,sent:!1,draft:!0,spam:!1,trash:!1,label:"Social"},{id:3,from:"Robert Smith",thumbnail:j.a,subject:"The point of using Lorem Ipsum is that it has a more-or-less normal",time:"7:10 AM",emailExcerpt:"Richard McClintock, a Latin professor at Hampden-Sydney",emailContent:"<p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. ",unread:!1,attachment:!1,starred:!1,important:!0,inbox:!1,sent:!0,draft:!1,spam:!1,trash:!1,label:"Promotional"},{id:4,from:"Maria Garcia",thumbnail:R.a,subject:"Contrary to popular belief, Lorem Ipsum is.",time:"8:21 PM",emailExcerpt:"Lorem Ipsum passage, and going through",emailContent:"<p>Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>",unread:!1,attachment:!0,starred:!0,important:!1,inbox:!1,sent:!1,draft:!0,spam:!1,trash:!1,label:"Social"},{id:5,from:"David Smith",thumbnail:H.a,subject:"literature from 45 BC, making",time:"5:45 PM",emailExcerpt:"The standard chunk of Lorem Ipsum used since the 1500s",emailContent:"<p>One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others which creates a distinct visual impression.</p>",unread:!1,attachment:!1,starred:!1,important:!0,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:"Social"},{id:6,from:"Maria Rodriguez",thumbnail:N.a,subject:"a Latin professor at Hampden-Sydney College.",time:"11:32 AM",emailExcerpt:"Cicero are also reproduced in their exact original form",emailContent:"<p>Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>",unread:!1,attachment:!0,starred:!1,important:!0,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:"Health"},{id:7,from:"Mary Smith",thumbnail:k.a,subject:"the cites of the word in classical.",time:"12:11 PM",emailExcerpt:"There are many variations of passages of Lorem Ipsum available",emailContent:"<p>There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>",unread:!0,attachment:!0,starred:!1,important:!1,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:""},{id:8,from:"Maria Hernandez",thumbnail:B.a,subject:" This book is a treatise on the theory of ethics.",time:"11:55 AM",emailExcerpt:"the majority have suffered alteration in some form, by injected ",emailContent:"<p>According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text.</p>",unread:!1,attachment:!0,starred:!1,important:!0,inbox:!1,sent:!1,draft:!1,spam:!0,trash:!1,label:""},{id:9,from:"Maria Martinez",thumbnail:q.a,subject:"Lorem Ipsum used since the 1500s is reproduced.",time:"10:23 AM",emailExcerpt:"If you are going to use a passage of Lorem Ipsum",emailContent:"<p>It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters.</p>",unread:!1,attachment:!0,starred:!1,important:!1,inbox:!1,sent:!1,draft:!1,spam:!1,trash:!0,label:"Promotional"},{id:10,from:"James Johnson",thumbnail:U.a,subject:"accompanied by English versions from the 1914 translation.",time:"6:40 AM",emailExcerpt:"you need to be sure there isn't anything",emailContent:"<p>This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>",unread:!1,attachment:!0,starred:!0,important:!1,inbox:!1,sent:!0,draft:!1,spam:!1,trash:!1,label:"Health"},{id:11,from:"James Smith",thumbnail:J.a,subject:"All the Lorem Ipsum generators on the Internet.",time:"9:44 AM",emailExcerpt:"All the Lorem Ipsum generators on the Internet tend to repeat predefined",emailContent:"<p>The spread of computers and layout programmes thus made dummy text better known. While in earlier times several lines of the Lorem Ipsum text were repeated in the creation of dummy texts.</p>",unread:!1,attachment:!1,starred:!0,important:!1,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:"Promotional"},{id:12,from:"Michael Smith",thumbnail:_.a,subject:"Latin words, combined with a handful.",time:"12:10 PM",emailExcerpt:"combined with a handful of model sentence structures",emailContent:"<p>basis for many dummy text or Lorem Ipsum generators. Based on 'De finibus', these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.</p>",unread:!1,attachment:!1,starred:!1,important:!1,inbox:!0,sent:!1,draft:!0,spam:!1,trash:!0,label:"Social"},{id:13,from:"Robert Smith",thumbnail:I.a,subject:"If you are going to use a passage.",time:"6:58 PM",emailExcerpt:"Lorem Ipsum is therefore always free from repetition, injected humour",emailContent:"<p>The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence.</p>",unread:!1,attachment:!0,starred:!0,important:!0,inbox:!1,sent:!0,draft:!1,spam:!1,trash:!1,label:"Health"},{id:14,from:"Maria Garcia",thumbnail:j.a,subject:"piece of classical Latin literature.",time:"3:46 AM",emailExcerpt:"Lorem Ipsum passage, and going through the cites",emailContent:"<p>now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>",unread:!1,attachment:!1,starred:!0,important:!1,inbox:!1,sent:!1,draft:!1,spam:!1,trash:!0,label:"Social"},{id:15,from:"David Smith",thumbnail:R.a,subject:"first true generator on the Internet.",time:"5:47 PM",emailExcerpt:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",emailContent:"<p>Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>",unread:!1,attachment:!0,starred:!1,important:!1,inbox:!1,sent:!1,draft:!1,spam:!1,trash:!0,label:"Promotional"},{id:16,from:"Maria Rodriguez",thumbnail:H.a,subject:"combined with a handful of model sentence structure.",time:"1:54 PM",emailExcerpt:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",emailContent:"<p>Target-generated dummy text mixed with a certain combination of search terms can lead to an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.</p>",unread:!0,attachment:!1,starred:!1,important:!0,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!0,label:"Social"},{id:17,from:"Mary Smith",thumbnail:N.a,subject:"randomised words which don't look even.",time:"2:30 PM",emailExcerpt:"when an unknown printer took a galley of type",emailContent:"<p>Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet nisl suscipit adipiscing bibendum est ultricies integer.</p>",unread:!0,attachment:!1,starred:!1,important:!1,inbox:!1,sent:!1,draft:!1,spam:!0,trash:!1,label:"Health"},{id:18,from:"Maria Hernandez",thumbnail:k.a,subject:"Lorem Ipsum generators on the Internet tend.",time:"7:03 AM",emailExcerpt:"scrambled it to make a type specimen book",emailContent:"<p>Volutpat diam ut venenatis tellus in metus vulputate eu. Id aliquet lectus proin nibh nisl condimentum id venenatis. Risus quis varius quam quisque id diam vel. Pulvinar pellentesque habitant morbi tristique senectus et netus et.</p>",unread:!1,attachment:!1,starred:!1,important:!0,inbox:!1,sent:!0,draft:!1,spam:!1,trash:!1,label:"Promotional"},{id:19,from:"Maria Martinez",thumbnail:B.a,subject:"combined with a handful of model.",time:"6:24 PM",emailExcerpt:"It has survived not only five centuries",emailContent:"<p>Scelerisque purus semper eget duis at. Tempus imperdiet nulla malesuada pellentesque elit. Vitae semper quis lectus nulla at volutpat. Ac tortor vitae purus faucibus ornare suspendisse.</p>",unread:!0,attachment:!1,starred:!1,important:!1,inbox:!1,sent:!1,draft:!0,spam:!1,trash:!1,label:"Health"},{id:20,from:"James Johnson",thumbnail:q.a,subject:"The Extremes of Good and Evil.",time:"9:11 PM",emailExcerpt:"the 1960s with the release of Letraset sheets containings",emailContent:"<p>Ultrices in iaculis nunc sed augue lacus viverra. Tellus cras adipiscing enim eu turpis egestas. Libero enim sed faucibus turpis in eu mi bibendum neque. Consectetur adipiscing elit ut aliquam. Mattis nunc sed blandit libero volutpat sed cras. </p>",unread:!1,attachment:!0,starred:!0,important:!0,inbox:!0,sent:!1,draft:!1,spam:!1,trash:!1,label:"Social"}];var Q=(e=V,t)=>{switch(t.type){case p.M:return e.map(e=>e.id===t.id?Object(m.a)({},e,{starred:!e.starred}):e);case p.v:return e.map(e=>e.id===t.id?Object(m.a)({},e,{important:!e.important}):e);case p.R:let a=[];for(let i=0;i<e.length;i++){a.push(e[i]);for(let n=0;n<t.id.length;n++)e[i].id===t.id[n]&&(a[i].trash=!0)}return a;case p.d:let n=[];for(let i=0;i<e.length;i++){n.push(e[i]);for(let a=0;a<t.id.length;a++)if(e[i].id===t.id[a])switch(t.folder){case"inbox":n[i].inbox=!0,n[i].sent=!1,n[i].draft=!1,n[i].spam=!1,n[i].trash=!1;break;case"sent":n[i].inbox=!1,n[i].sent=!0,n[i].draft=!1,n[i].spam=!1,n[i].trash=!1;break;case"draft":n[i].inbox=!1,n[i].sent=!1,n[i].draft=!0,n[i].spam=!1,n[i].trash=!1;break;case"spam":n[i].inbox=!1,n[i].sent=!1,n[i].draft=!1,n[i].spam=!0,n[i].trash=!1;break;case"trash":n[i].inbox=!1,n[i].sent=!1,n[i].draft=!1,n[i].spam=!1,n[i].trash=!0;break;default:n[i].inbox=!0,n[i].sent=!1,n[i].draft=!1,n[i].spam=!1,n[i].trash=!1}}return n;case p.e:let r=[];for(let i=0;i<e.length;i++){r.push(e[i]);for(let a=0;a<t.id.length;a++)e[i].id===t.id[a]&&(r[i].label=t.label)}return r;default:return e}},Y=a(186);var X=(e=Y.a.SHOW_INBOX,t)=>{switch(t.type){case p.F:return t.filter;default:return e}};var K=(e=[],t)=>{switch(t.type){case p.G:return"checked"===t.checkStatus?e.concat(t.id):e.filter(e=>e!==t.id);case p.R:case p.d:case p.e:return[];default:return e}};var Z=(e="",t)=>{switch(t.type){case p.s:return t.searchTerm;case p.F:return"";default:return e}};var $=(e="",t)=>{switch(t.type){case p.A:return t.id;default:return e}};var ee=Object(u.combineReducers)({emails:Q,visibilityFilter:X,selectedEmail:K,emailSearch:Z,emailContent:$});const te={loading:!1,todos:[],error:"",todoDetails:""};var ae=a(169);var ne=(e=ae.h.SHOW_ALL_TODO,t)=>{switch(t.type){case p.I:return t.filter;default:return e}};var re=(e="",t)=>{switch(t.type){case p.t:return t.payload;case p.I:return"";default:return e}};var ie=Object(u.combineReducers)({todosVisibilityFilter:ne,todoSearch:re});var oe=Object(u.combineReducers)({settings:(e=h,t)=>{switch(t.type){case p.x:return Object(m.a)({},e,{activeLogoBg:t.payload});case p.z:return Object(m.a)({},e,{activeNavbarBg:t.payload});case p.J:return Object(m.a)({},e,{activeSidebarBg:t.payload});case p.N:return Object(m.a)({},e,{activeTheme:t.payload});case p.k:return Object(m.a)({},e,{activeDir:t.payload});case p.K:return Object(m.a)({},e,{activeSidebarPos:t.payload});case p.u:return Object(m.a)({},e,{activeHeaderPos:t.payload});case p.w:return Object(m.a)({},e,{activeLayout:t.payload});case p.L:return Object(m.a)({},e,{activeSidebarType:t.payload});default:return e}},chatReducer:(e=f,t)=>{switch(t.type){case p.m:return Object(m.a)({},e,{chats:t.chats});case p.D:return Object(m.a)({},e,{chatContent:t.id});case p.y:return Object(m.a)({},e,{chats:e.chats.map(e=>e.id===t.id?Object.assign({},e,e.chatHistory[0][1].to.push(t.chatMsg)):e)});case p.C:return Object(m.a)({},e,{chatSearch:t.searchTerm});default:return e}},contactReducer:C,emailReducer:ee,notesReducer:(e=b,t)=>{switch(t.type){case p.n:return Object(m.a)({},e,{notes:t.notes});case p.E:return Object(m.a)({},e,{notesContent:t.id});case p.B:return Object(m.a)({},e,{noteSearch:t.searchTerm});case p.T:return Object(m.a)({},e,{notes:e.notes.map(e=>e.id===t.id?Object(m.a)({},e,{[t.field]:t.value}):e)});case p.i:return Object(m.a)({},e,{notes:e.notes.map(e=>e.id===t.id?Object(m.a)({},e,{deleted:!e.deleted}):e)});case p.b:return Object(m.a)({},e,{notes:[...e.notes,{id:t.id++,title:t.title,color:t.color,datef:new Date,deleted:!1}]});default:return e}},todoReducer:ie,maintodoReducer:(e=te,t)=>{switch(t.type){case p.p:return{loading:!0,todos:[],error:t.payload};case p.q:return{loading:!1,todos:t.payload,error:""};case p.o:return{loading:!1,todos:[],error:t.payload};case p.Q:return Object(m.a)({},e,{todos:e.todos.map(e=>e.id===t.id?Object(m.a)({},e,{starred:!e.starred}):e)});case p.j:return Object(m.a)({},e,{todos:e.todos.map(e=>e.id===t.id?Object(m.a)({},e,{deleted:!e.deleted}):e)});case p.f:return Object(m.a)({},e,{todos:e.todos.map(e=>e.id===t.id?Object(m.a)({},e,{isCompleted:!e.isCompleted}):e)});case p.U:return Object(m.a)({},e,{todos:e.todos.map(e=>e.id===t.id?Object(m.a)({},e,{[t.field]:t.value}):e)});case p.O:return Object(m.a)({},e,{todoDetails:t.id});case p.c:return Object(m.a)({},e,{todos:[...e.todos,{id:t.id,title:t.title,desc:t.desc,starred:!1,isCompleted:!1,deleted:!1}]});default:return e}},maincontactReducer:O});var se=a(6),ce=a(367),ue=a(17);const de=e=>{let t=e.component,a=Object(ce.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:e=>ue.a.currentUserValue?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/authentication/login",state:{from:e.location}}})}))};var le=a(382);t.default=()=>{return r.a.createElement(c.a,{store:Object(u.createStore)(oe,e,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(d.a)))},r.a.createElement(s.c,{history:se.d},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/authentication/Login",component:le.default}),";",o.map((e,t)=>r.a.createElement(de,{path:e.path,key:t,component:e.component})))));var e}},87:function(e,t,a){"use strict";a.d(t,"x",(function(){return n})),a.d(t,"z",(function(){return r})),a.d(t,"J",(function(){return i})),a.d(t,"N",(function(){return o})),a.d(t,"k",(function(){return s})),a.d(t,"K",(function(){return c})),a.d(t,"u",(function(){return u})),a.d(t,"w",(function(){return d})),a.d(t,"L",(function(){return l})),a.d(t,"m",(function(){return m})),a.d(t,"D",(function(){return p})),a.d(t,"C",(function(){return h})),a.d(t,"y",(function(){return f})),a.d(t,"p",(function(){return b})),a.d(t,"q",(function(){return T})),a.d(t,"o",(function(){return O})),a.d(t,"Q",(function(){return y})),a.d(t,"I",(function(){return E})),a.d(t,"j",(function(){return S})),a.d(t,"O",(function(){return g})),a.d(t,"t",(function(){return v})),a.d(t,"f",(function(){return C})),a.d(t,"U",(function(){return A})),a.d(t,"c",(function(){return _})),a.d(t,"a",(function(){return L})),a.d(t,"S",(function(){return I})),a.d(t,"g",(function(){return x})),a.d(t,"l",(function(){return j})),a.d(t,"H",(function(){return D})),a.d(t,"r",(function(){return R})),a.d(t,"P",(function(){return M})),a.d(t,"h",(function(){return H})),a.d(t,"M",(function(){return w})),a.d(t,"v",(function(){return N})),a.d(t,"A",(function(){return P})),a.d(t,"R",(function(){return k})),a.d(t,"d",(function(){return W})),a.d(t,"e",(function(){return B})),a.d(t,"G",(function(){return F})),a.d(t,"s",(function(){return q})),a.d(t,"F",(function(){return G})),a.d(t,"E",(function(){return U})),a.d(t,"B",(function(){return z})),a.d(t,"T",(function(){return J})),a.d(t,"i",(function(){return V})),a.d(t,"b",(function(){return Q})),a.d(t,"n",(function(){return Y}));const n="LOGO_BG",r="NAVBAR_BG",i="SIDEBAR_BG",o="THEME",s="DIRECTION",c="SIDEBAR_POSITION",u="HEADER_POSITION",d="LAYOUT",l="SIDEBAR_TYPE",m="FETCH_CHAT_SUCCESS",p="SELECTED_CHAT",h="SEARCH_USER",f="MSG_SUBMIT",b="FETCH_TODO_REQUEST",T="FETCH_TODO_SUCCESS",O="FETCH_TODO_FAILURE",y="TOGGLE_STARRED_TODO",E="SET_VISIBILITY_FILTER_TODO",S="DELETE_TODO",g="TODO_DETAILS",v="FILTER_TODO",C="COMPLETE_TODO",A="UPDATE_TODO",_="ADD_TODO",L="ADD_CONTACT",I="UPDATE_CONTACT",x="CONTACT_DETAILS",j="EDIT_CONTACT",D="SET_VISIBILITY_FILTER",R="FILTER_CONTACT",M="TOGGLE_STARRED_CONTACT",H="DELETE_CONTACT",w="STAR_EMAIL",N="IMPORTANT_EMAIL",P="OPEN_EMAIL",k="TRASH_EMAIL",W="ASSIGN_FOLDER",B="ASSIGN_LABEL",F="SET_SELECTED_EMAIL",q="FILTER_EMAIL",G="SET_EMAIL_VISIBILITY_FILTER",U="SELECTED_NOTES",z="SEARCH_NOTES",J="UPDATE_NOTE",V="DELETE_NOTE",Q="ADD_NOTE",Y="FETCH_NOTES_SUCCESS"}}]);
//# sourceMappingURL=41.aed40660.chunk.js.map