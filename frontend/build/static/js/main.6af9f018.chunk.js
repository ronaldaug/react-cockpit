(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{117:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(14),c=a.n(r),i=a(18),s=(a(117),a(9)),o=a.n(s),l=a(12),u=a(7),j=a(15),d=a(189),b=a(184),h=a(172),p=a(166),m=a(190),x=a(163),O=a(168),f=a(183),g=a(72),v=a.n(g),y=a(80),w=a(164),S=a(165),C=function(e,t){return{status:e,message:t}},k=function(e,t){if(!e)return C(!1,"Please fill out email");return/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?t?C(!0,"Validation passed!"):C(!1,"Please fill out password"):C(!1,"Invalid email format")},q=function(e,t,a){if(!e)return C(!1,"Please fill out username");if(!a)return C(!1,"Please fill out password");if(!t)return C(!1,"Please fill out email");return/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?C(!0,"Validation passed!"):C(!1,"Invalid email format")},z=a(2);function N(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var T=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function W(){var e=T(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),g=s[0],w=s[1],C=Object(n.useState)(""),k=Object(u.a)(C,2),W=k[0],I=k[1],A=Object(n.useState)(""),P=Object(u.a)(A,2),D=P[0],B=P[1],E=Object(j.f)(),J=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c,i,s,l,u,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=q(r,W,g),n=a.status,c=a.message,n){e.next=5;break}return B(c),e.abrupt("return");case 5:return i={name:r,email:W,password:g},s={method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}},e.prev=7,l="".concat("https://reactquiz.glitch.me",":").concat("","/admin/auth/register"),e.next=11,fetch(l,s);case 11:return u=e.sent,e.next=14,u.json();case 14:if(j=e.sent,200===u.status){e.next=18;break}return B("Register Failed, try again."),e.abrupt("return");case 18:console.log(j),alert("Register Success"),E.push("/"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),B(e.t0);case 26:case"end":return e.stop()}}),e,null,[[7,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(p.a,{}),Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(d.a,{className:e.avatar,children:Object(z.jsx)(v.a,{})}),Object(z.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign up"}),D&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:D}),Object(z.jsxs)("form",{onSubmit:J,className:e.form,noValidate:!0,children:[Object(z.jsxs)(O.a,{container:!0,spacing:2,children:[Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"uname",onChange:function(e){return c(e.target.value)}})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:function(e){return I(e.target.value)}})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return w(e.target.value)}})})]}),Object(z.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(z.jsx)(O.a,{container:!0,justify:"flex-end",children:Object(z.jsx)(O.a,{item:!0,children:Object(z.jsx)(x.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(z.jsx)(f.a,{mt:5,children:Object(z.jsx)(N,{})})]})}var I=a(173),A=a(187),P=a(94),D=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("jwt_auth");case 2:if(!e.sent){e.next=6;break}e.t0=JSON.parse(localStorage.getItem("jwt_auth")),e.next=7;break;case 6:e.t0={auth:!1,token:null};case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("jwt_auth");case 2:if(!e.sent){e.next=6;break}e.t0=JSON.parse(localStorage.getItem("jwt_auth")),e.next=7;break;case 6:e.t0={auth:!1,token:null};case 7:return t=e.t0,e.abrupt("return",t.token);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function E(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var J=Object(w.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(u.a)(c,2),s=i[0],g=i[1],w=Object(n.useState)(""),S=Object(u.a)(w,2),C=S[0],q=S[1],N=Object(j.f)(),T=J(),W=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,c,i,l,u,j,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=k(a,s),r=n.status,c=n.message,r){e.next=5;break}return q(c),e.abrupt("return");case 5:return i={email:a,password:s},l={method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}},e.prev=7,u="".concat("https://reactquiz.glitch.me",":").concat("","/admin/auth/login"),e.next=11,fetch(u,l);case 11:return j=e.sent,e.next=14,j.json();case 14:if(d=e.sent,200===j.status){e.next=18;break}return q("Invalid email or password."),e.abrupt("return");case 18:o={auth:!0,token:d.token},localStorage.setItem("jwt_auth",JSON.stringify(o)),N.push("/dashboard"),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),q(String(e.t0));case 25:case"end":return e.stop()}var o}),e,null,[[7,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(O.a,{container:!0,component:"main",className:T.root,children:[Object(z.jsx)(p.a,{}),Object(z.jsx)(O.a,{item:!0,xs:!1,sm:4,md:7,className:T.image}),Object(z.jsx)(O.a,{item:!0,xs:12,sm:8,md:5,component:P.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:T.paper,children:[Object(z.jsx)(d.a,{className:T.avatar,children:Object(z.jsx)(v.a,{})}),Object(z.jsx)(y.a,{component:"h1",variant:"h5",children:"Sign in"}),C&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:C}),Object(z.jsxs)("form",{onSubmit:W,className:T.form,noValidate:!0,children:[Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return r(e.target.value)}}),Object(z.jsx)(m.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return g(e.target.value)}}),Object(z.jsx)(I.a,{control:Object(z.jsx)(A.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(z.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:T.submit,children:"Sign In"}),Object(z.jsxs)(O.a,{container:!0,children:[Object(z.jsx)(O.a,{item:!0,xs:!0,children:Object(z.jsx)(x.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(z.jsx)(O.a,{item:!0,children:Object(z.jsx)(x.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})]}),Object(z.jsx)(f.a,{mt:5,children:Object(z.jsx)(E,{})})]})]})})]})}var Y=function(){var e=Object(l.a)(o.a.mark((function e(t,a,r,c){var i,s,j,d,b,h,p,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(n.useState)(null),s=Object(u.a)(i,2),j=s[0],d=s[1],b=Object(n.useState)(!1),h=Object(u.a)(b,2),p=h[0],m=h[1],Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var a,n,i,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,e.next=3,B();case 3:return n=e.sent,e.prev=4,m(!0),e.next=8,fetch(t,{signal:a.signal,headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}});case 8:return i=e.sent,e.next=11,i.json();case 11:s=e.sent,r&&(l="quiz"===c?s.quizzes:s,r(l)),m(!1),e.next=23;break;case 16:if(e.prev=16,e.t0=e.catch(4),"AbortError"!==e.t0.name){e.next=21;break}return a.abort(),e.abrupt("return");case 21:d(String(e.t0)),m(!1);case 23:case"end":return e.stop()}}),e,null,[[4,16]])})))()}),a?[a.length]:[]),e.abrupt("return",{error:j,loading:p});case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),G=a(174),L=a(177),Q=a(176),V=a(175),_=a(90),R=a.n(_),M=a(89),U=a.n(M),Z=a(188),$=a(180),H=a(179),K=a(178),X=a(88),ee=a.n(X),te=a(87),ae=a.n(te),ne=Object(w.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(2,0,2)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}}}));function re(){var e=ne(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),j=Object(u.a)(s,2),d=j[0],m=j[1],x=Object(n.useState)([]),f=Object(u.a)(x,2),g=f[0],v=f[1],w=Object(n.useState)(""),C=Object(u.a)(w,2),k=C[0],q=C[1],N=Object(n.useState)(!1),T=Object(u.a)(N,2),W=T[0],I=T[1],A=Object(n.useState)(!1),P=Object(u.a)(A,2),D=P[0],E=P[1],J=Object(n.useState)(""),F=Object(u.a)(J,2),_=F[0],M=F[1],X=Object(n.useState)("copy"),te=Object(u.a)(X,2),re=te[0],ce=te[1],ie=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,e.prev=3,r="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/").concat(a),e.next=7,fetch(r,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify({quizid:a})});case 7:return i=e.sent,e.next=10,i.json();case 10:s=t.filter((function(e){return e.id!==a})),v(s),c(!1),m("Successfully deleted a quiz"),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(3);case 18:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,a){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return n=e.sent,r="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/").concat(t),e.prev=4,e.next=7,fetch("".concat(r,"start"===a?"/start":"/end"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify({quizid:t})});case 7:return c=e.sent,e.next=10,c.json();case 10:i=e.sent,q(i.sessionId),"start"===a?I(!0):E(!0),[],s=g,v([]),v(s),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t,a){return e.apply(this,arguments)}}(),oe=function(){var e=Object(l.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=3;break}return se(t,"end"),e.abrupt("return");case 3:se(t,"start");case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),le=Y("".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz"),g,v,"quiz"),ue=le.error,je=le.loading;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(p.a,{}),Object(z.jsx)("main",{children:Object(z.jsxs)(S.a,{className:e.cardGrid,maxWidth:"md",children:[Object(z.jsxs)(O.a,{container:!0,spacing:4,children:[je&&Object(z.jsx)(y.a,{children:"Loading..."}),ue&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:ue}),d&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"success",children:d}),g&&g.map((function(t){var a=t.active&&"number"===typeof t.active;return Object(z.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(z.jsxs)(G.a,{className:e.card,children:[Object(z.jsx)(i.b,{to:"quiz/"+t.id,children:t.thumbnail?Object(z.jsx)(V.a,{className:e.cardMedia,image:t.thumbnail,title:t.name}):Object(z.jsx)(V.a,{className:e.cardMedia,image:"https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081",title:t.name})}),Object(z.jsx)(Q.a,{className:e.cardContent,children:Object(z.jsx)(i.b,{to:"quiz/"+t.id,children:Object(z.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name})})}),Object(z.jsxs)(L.a,{children:[Object(z.jsx)(h.a,{onClick:function(){return oe(t.id,a)},size:"small",color:"primary",startIcon:t.active&&"number"===typeof t.active?Object(z.jsx)(ae.a,{}):Object(z.jsx)(ee.a,{}),children:t.active&&"number"===typeof t.active?"stop":"start"}),Object(z.jsx)(h.a,{component:i.b,to:"quiz/edit/"+t.id,size:"small",color:"primary",startIcon:Object(z.jsx)(U.a,{}),children:"Edit"}),Object(z.jsx)(h.a,{size:"small",color:"secondary",startIcon:Object(z.jsx)(R.a,{}),onClick:function(){c(!0),M(t.id)},children:"Delete"})]})]})},t.id)}))]}),Object(z.jsxs)(Z.a,{open:r,onClose:function(){return c(!1)},"aria-labelledby":"form-dialog-title",children:[Object(z.jsx)(K.a,{id:"form-dialog-title",children:"Confirm"}),Object(z.jsx)(H.a,{children:"Are you sure you want to delete this quiz?"}),Object(z.jsxs)($.a,{children:[Object(z.jsx)(h.a,{onClick:function(){return c(!1)},color:"primary",children:"Cancel"}),Object(z.jsx)(h.a,{onClick:function(){return ie(g,_)},color:"primary",children:"Delete"})]})]}),Object(z.jsxs)(Z.a,{open:W,onClose:function(){return I(!1)},"aria-labelledby":"form-dialog-title",children:[Object(z.jsxs)(K.a,{id:"form-dialog-title",children:["Session ",k," started!"]}),Object(z.jsxs)(H.a,{children:["".concat("https://reactquiz.glitch.me",":").concat("","/#/game/join/").concat(k),Object(z.jsx)(h.a,{size:"small",color:"primary",onClick:function(){return ce("copied!"),navigator.clipboard.writeText("".concat("https://reactquiz.glitch.me",":").concat("","/#/game/join/").concat(k))},children:re})]}),Object(z.jsx)($.a,{children:Object(z.jsx)(h.a,{onClick:function(){return I(!1)},color:"primary",children:"Close"})})]}),Object(z.jsxs)(Z.a,{open:D,onClose:function(){return E(!1)},"aria-labelledby":"form-dialog-title",children:[Object(z.jsxs)(K.a,{id:"form-dialog-title",children:["Session ",k," started!"]}),Object(z.jsx)(H.a,{children:"Would you like to view the results?"}),Object(z.jsxs)($.a,{children:[Object(z.jsx)(h.a,{onClick:function(){return E(!1)},color:"primary",children:"Close"}),Object(z.jsx)(h.a,{component:i.b,to:"/results/"+k,color:"primary",children:"Yes"})]})]})]})})]})}function ce(){function e(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}return Object(z.jsxs)("footer",{children:[Object(z.jsx)(y.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(z.jsx)(y.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(z.jsx)(e,{})]})}var ie=a(55),se=a.n(ie);function oe(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var le=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ue(){var e=le(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),x=s[0],g=s[1],v=Object(n.useState)(""),w=Object(u.a)(v,2),C=w[0],k=w[1],q=Object(j.f)(),N=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B();case 3:return a=e.sent,n={method:"POST",body:JSON.stringify({name:r}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}},e.prev=5,c="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/new"),e.next=9,fetch(c,n);case 9:return i=e.sent,e.next=12,i.json();case 12:if(!(s=e.sent).hasOwnProperty("error")){e.next=16;break}return g(s.error),e.abrupt("return");case 16:k("Successfully added, redirecting to quizzes.."),setTimeout((function(){q.push("/dashboard")}),1e3),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(z.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(p.a,{}),Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(d.a,{className:e.avatar,children:Object(z.jsx)(se.a,{})}),Object(z.jsx)(y.a,{component:"h1",variant:"h5",children:"Add new quiz"}),x&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:x}),C&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"success",children:C}),Object(z.jsxs)("form",{onSubmit:N,className:e.form,noValidate:!0,children:[Object(z.jsx)(O.a,{container:!0,spacing:2,children:Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"quiz",label:"Quiz Name",name:"quiz",autoComplete:"qname",onChange:function(e){return c(e.target.value)}})})}),Object(z.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Add"})]})]}),Object(z.jsx)(f.a,{mt:5,children:Object(z.jsx)(oe,{})})]})}function je(){return Object(z.jsx)("div",{className:"not-found",children:Object(z.jsx)("h1",{children:"404 Not Found"})})}function de(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var be=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function he(){var e=be(),t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),x=s[0],g=s[1],v=Object(n.useState)(""),w=Object(u.a)(v,2),C=w[0],k=w[1],q=Object(j.f)(),N=Object(j.h)().sid,T=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,c,i,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B();case 3:return n=e.sent,c={method:"POST",body:JSON.stringify({name:r}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}},console.log(c),e.prev=6,i="".concat("https://reactquiz.glitch.me",":").concat("","/play/join/").concat(a),console.log(i),e.next=11,fetch(i,c);case 11:return s=e.sent,e.next=14,s.json();case 14:if(!(l=e.sent).hasOwnProperty("error")){e.next=18;break}return g(l.error),e.abrupt("return");case 18:console.log(l),k("Successfully added, redirecting to quizzes.."),setTimeout((function(){q.push("/dashboard")}),1e3),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(6),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[6,23]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(z.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(p.a,{}),Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(d.a,{className:e.avatar,children:Object(z.jsx)(se.a,{})}),Object(z.jsx)(y.a,{component:"h1",variant:"h5",children:"Join the Game"}),x&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:x}),C&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"success",children:C}),Object(z.jsxs)("form",{onSubmit:function(e){return T(e,N)},className:e.form,noValidate:!0,children:[Object(z.jsxs)(O.a,{container:!0,spacing:2,children:[Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"sessionid",label:"Session Id",name:"sessionid",value:N,autoComplete:"sessionid",disabled:!0})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"playername",label:"Player name",name:"playername",autoComplete:"playername",onChange:function(e){return c(e.target.value)}})})]}),Object(z.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Join Now"})]})]}),Object(z.jsx)(f.a,{mt:5,children:Object(z.jsx)(de,{})})]})}var pe=a(181),me=a(182),xe=a(167),Oe=a(74),fe=a.n(Oe),ge=a(91),ve=a.n(ge),ye=a(92),we=a(192),Se=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"#ffffff"}}}));function Ce(){var e=Se(),t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],s=Boolean(r),o=Object(j.f)(),l=function(){c(null)};return Object(z.jsx)("div",{className:e.root,children:Object(z.jsx)(pe.a,{position:"static",children:Object(z.jsxs)(me.a,{children:[Object(z.jsx)(y.a,{component:i.b,variant:"h6",to:"/dashboard",className:e.title,children:"Game Board"}),Object(z.jsx)(h.a,{component:i.b,color:"inherit",to:"/quiz/new",startIcon:Object(z.jsx)(fe.a,{}),children:"Add New Game"}),Object(z.jsxs)("div",{children:[Object(z.jsx)(xe.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(z.jsx)(ve.a,{})}),Object(z.jsxs)(ye.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:l,children:[Object(z.jsx)(we.a,{onClick:l,children:"Profile"}),Object(z.jsx)(we.a,{onClick:function(){localStorage.removeItem("jwt_auth"),o.push("/")},children:"Logout"})]})]})]})})})}function ke(){var e=Object(j.h)().id,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],h=s[1];Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function t(){var a,n,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:return a=t.sent,t.prev=3,n="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/").concat(e),t.next=7,fetch(n,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}});case 7:return r=t.sent,t.next=10,r.json();case 10:if(i=t.sent,200===r.status){t.next=14;break}return h("Something went wrong with server."),t.abrupt("return");case 14:c(i),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),h(t.t0);case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()}),[]);var p=r.name,m=r.questions,x=r.thumbnail;return Object(z.jsxs)(S.a,{maxWidth:"md",style:{padding:"1.2rem"},children:[d&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:d}),x&&Object(z.jsx)(V.a,{component:"img",alt:p,height:"200",image:x,title:p}),Object(z.jsx)(y.a,{variant:"h6",color:"textSecondary",children:p}),Object(z.jsx)("ul",{className:"questions",children:m&&m.map((function(e,t){return Object(z.jsx)("li",{children:e.question},t)}))})]})}var qe=a(171),ze=a(186),Ne=a(191);function Te(){return Object(z.jsxs)(y.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(z.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var We=Object(w.a)((function(e){return{formControl:{margin:e.spacing(1),width:"100%"},selectEmpty:{marginTop:e.spacing(2)},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Ie(){var e=We(),t=Object(n.useState)(!1),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),x=s[0],g=s[1],v=Object(n.useState)(20),w=Object(u.a)(v,2),C=w[0],k=w[1],q=Object(n.useState)(5),N=Object(u.a)(q,2),T=N[0],W=N[1],I=Object(n.useState)(""),A=Object(u.a)(I,2),P=A[0],D=A[1],E=Object(n.useState)(""),J=Object(u.a)(E,2),F=J[0],Y=J[1],G=Object(n.useState)(""),L=Object(u.a)(G,2),Q=L[0],V=L[1],_=Object(n.useState)(""),R=Object(u.a)(_,2),M=R[0],U=R[1],X=Object(j.f)(),ee=Object(j.h)().id,te=function(e){U(e.target.value)},ae=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,B();case 3:return n=e.sent,x.time=C,x.point=T,r={method:"PUT",body:JSON.stringify(x),headers:{"Content-Type":"application/json",Authorization:"Bearer "+n}},e.prev=7,c="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/").concat(a),e.next=11,fetch(c,r);case 11:return i=e.sent,e.next=14,i.json();case 14:if(!(s=e.sent).hasOwnProperty("error")){e.next=18;break}return Y(s.error),e.abrupt("return");case 18:V("Successfully added, redirecting to quizzes.."),setTimeout((function(){X.push("/dashboard")}),1e3),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[7,22]])})));return function(t,a){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return t=e.sent,e.prev=3,a="".concat("https://reactquiz.glitch.me",":").concat("","/admin/quiz/").concat(ee),e.next=7,fetch(a,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+t}});case 7:return n=e.sent,e.next=10,n.json();case 10:if(r=e.sent,200===n.status){e.next=14;break}return Y("Something went wrong with server."),e.abrupt("return");case 14:g(r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),Y(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))()}),[]);var ne=x.name,re=x.questions;return Object(z.jsxs)(S.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(p.a,{}),Object(z.jsxs)("div",{className:e.paper,children:[Object(z.jsx)(d.a,{className:e.avatar,children:Object(z.jsx)(se.a,{})}),Object(z.jsx)(y.a,{component:"h1",variant:"h5",children:"Edit quiz"}),F&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:F}),Q&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"success",children:Q}),Object(z.jsxs)("form",{onSubmit:function(e){return ae(e,ee)},className:e.form,noValidate:!0,children:[Object(z.jsxs)(O.a,{container:!0,spacing:2,children:[Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"quiz",label:"Quiz Name",name:"quiz",value:ne||"",autoComplete:"qname",InputLabelProps:{shrink:!0},onChange:function(e){return g(e.target.value)}})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"time",label:"Time Limit",name:"time",value:C,autoComplete:"time",InputLabelProps:{shrink:!0},onChange:function(e){return k(e.target.value)}})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsx)(m.a,{variant:"outlined",required:!0,fullWidth:!0,id:"point",label:"Point for a single question",name:"point",value:T,autoComplete:"point",InputLabelProps:{shrink:!0},onChange:function(e){return W(e.target.value)}})}),Object(z.jsx)(O.a,{item:!0,xs:12,children:Object(z.jsxs)(qe.a,{className:e.formControl,children:[Object(z.jsx)(Ne.a,{id:"q-type",children:"Question Type"}),Object(z.jsxs)(ze.a,{labelId:"qtype",id:"qtype",value:"0",onChange:te,children:[Object(z.jsx)(we.a,{value:"0",children:"Single Choice"}),Object(z.jsx)(we.a,{value:"1",children:"Multiple Choice"})]})]})}),Object(z.jsxs)(O.a,{item:!0,xs:12,children:[Object(z.jsx)(y.a,{variant:"h6",children:"Questions"}),Object(z.jsx)(y.a,{align:"right",variant:"body2",children:Object(z.jsx)(h.a,{size:"small",onClick:function(){return c(!0)},color:"inherit",startIcon:Object(z.jsx)(fe.a,{}),children:"Add New Question"})}),re&&Object(z.jsxs)(qe.a,{className:e.formControl,children:[Object(z.jsx)(Ne.a,{id:"demo-simple-select-label",children:"Pick a question to edit"}),Object(z.jsx)(ze.a,{labelId:"questions",id:"questions",value:M,onChange:te,children:re.map((function(e,t){return Object(z.jsx)(we.a,{value:t,children:e.question},t)}))})]})]})]}),Object(z.jsx)(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Update"})]})]}),Object(z.jsx)(f.a,{mt:5,children:Object(z.jsx)(Te,{})}),Object(z.jsxs)(Z.a,{open:r,onClose:function(){return c(!1)},"aria-labelledby":"form-dialog-title",children:[Object(z.jsx)(K.a,{id:"form-dialog-title",children:"Add New Question"}),Object(z.jsx)(H.a,{children:Object(z.jsx)(m.a,{autoFocus:!0,margin:"dense",id:"question",onChange:function(e){return D(e.target.value)},label:"Question",type:"text",fullWidth:!0})}),Object(z.jsxs)($.a,{children:[Object(z.jsx)(h.a,{onClick:function(){return c(!1)},color:"primary",children:"Cancel"}),Object(z.jsx)(h.a,{onClick:function(){return function(e){var t=e||[],a={question:P,answers:["Answer one","Answer two","Answer three"],correct:1};t.push(a),x.questions=t,g(x),c(!1)}(re)},color:"primary",children:"Add"})]})]})]})}var Ae=function(){var e=Object(j.h)().sid,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),d=s[0],h=s[1];return Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function t(){var a,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B();case 2:return a=t.sent,t.next=5,fetch("".concat("https://reactquiz.glitch.me",":").concat("","/admin/session/").concat(e,"/results"),{headers:{"Content-Type":"application/json",Authorization:"Bearer "+a}});case 5:return n=t.sent,t.next=8,n.json();case 8:(r=t.sent).hasOwnProperty("error")&&h(r.error),c(r.results);case 11:case"end":return t.stop()}}),t)})))()}),[]),Object(z.jsxs)(S.a,{maxWidth:"md",style:{padding:"1.2rem"},children:[d&&Object(z.jsx)(b.a,{style:{width:"100%"},severity:"error",children:d}),0!==r.length?Object(z.jsx)("h4",{children:"Joined Players"}):"No Players!",Object(z.jsx)("ul",{children:r&&r.map((function(e,t){return Object(z.jsx)("li",{children:e.name},t)}))})]})};var Pe=function(){var e=Object(j.g)(),t=Object(j.f)(),a=Object(n.useState)(!1),r=Object(u.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function a(){var n,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,D();case 2:n=a.sent,r=n.auth,i(r),r&&"/dashboard"!==e.pathname&&"/quiz/new"!==e.pathname&&"/"===e.pathname&&t.push("/dashboard"),r||"/"===e.pathname||"/register"===e.pathname||t.push("/");case 7:case"end":return a.stop()}}),a)})))()}),[e.pathname]),Object(z.jsxs)("div",{children:[c&&Object(z.jsx)(Ce,{}),Object(z.jsxs)(j.c,{children:[Object(z.jsx)(j.a,{path:"/register",exact:!0,component:W}),Object(z.jsx)(j.a,{path:"/",exact:!0,component:F}),Object(z.jsx)(j.a,{path:"/dashboard",exact:!0,component:re}),Object(z.jsx)(j.a,{path:"/quiz/new",exact:!0,component:ue}),Object(z.jsx)(j.a,{path:"/quiz/edit/:id",exact:!0,component:Ie}),Object(z.jsx)(j.a,{path:"/quiz/:id",exact:!0,component:ke}),Object(z.jsx)(j.a,{path:"/game/join/:sid",exact:!0,component:he}),Object(z.jsx)(j.a,{path:"/results/:sid",exact:!0,component:Ae}),Object(z.jsx)(j.a,{children:Object(z.jsx)(je,{})})]}),c&&Object(z.jsx)(ce,{})]})};c.a.render(Object(z.jsx)(i.a,{children:Object(z.jsx)(Pe,{})}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.6af9f018.chunk.js.map