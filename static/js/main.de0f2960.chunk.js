(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(19),r=n.n(o),s=(n(27),n(3)),i=(n(28),n(0)),l=n(7).default;function u(e){var t=e.deletemodal,n=e.commentid,c=e.getalldata;return Object(i.jsx)("div",{className:"mask",children:Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("h3",{children:"Delete comment"}),Object(i.jsx)("p",{children:"Are you sure you want to delete this comment? This will remove the comment and can't be undone"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("button",{className:"cancel",onClick:function(){t(!1)},children:"NO,CANCEL"}),Object(i.jsx)("button",{className:"accept",onClick:function(){l.delete("https://nodeprojectreact.herokuapp.com/delete/${commentid}",{data:{id:n}}).then((function(e){return console.log(e.data)})).catch((function(e){console.error("Error:",e)})).then((function(){t(!1),c()}))},children:"YES, DELETE"})]})]})})}var d=n.p+"static/media/icon-plus.0037a825.svg",j=n.p+"static/media/icon-minus.4aa6933c.svg",m=n(7).default;function h(e){var t=e.comment,n=e.id,a=e.getAllData,o=e.currentuser,r=e.comments,l=e.deletemodal,u=e.deletefromdb,p=Object(c.useState)(!1),b=Object(s.a)(p,2),f=b[0],O=b[1],g=Object(c.useState)(),v=Object(s.a)(g,2),x=v[0],w=v[1],y=Object(c.useState)(!1),D=Object(s.a)(y,2),N=D[0],k=D[1],S=Object(c.useState)(),C=Object(s.a)(S,2),E=C[0],A=C[1],M=[];Object(c.useEffect)((function(){if(void 0===t||null===t)return""}),[t]);for(var T=0;T<r.length;T++)"0"!==r[T].replyTo&&M.push(r[T]);var F=new Date,_=new Date(t.createdAt),L=F.getFullYear()-_.getFullYear(),P=F.getMonth()-_.getMonth(),Y=Math.abs(new Date(t.createdAt).getDate()-(new Date).getDate()),R=Math.abs(new Date(t.createdAt).getHours()-(new Date).getHours()),B=F.getMinutes()-_.getMinutes(),H=F.getSeconds()-_.getSeconds(),I="";L>0&&L<2?I+=L+"year ago":L>=2?I=L+" years ago":P>0&&P>1?I=P+" months ago":1===P?I=P+" month ago":Y>0&&Y>1&&Math.floor(Y)<7?I=Math.floor(Y)+" days ago":1===Math.floor(Y)?I=Y+" day ago":1===Math.floor(Y/7)?I="1 week ago":Math.floor(Y/7)>1?I=Math.floor(Y/7)+" weeks ago":B>0&&1===R?I="1 hour ago":R>1&&R<12?I=R+" hours ago":1===R&&B<0?I=(B=F.getMinutes()+60-_.getMinutes())+" minutes ago":B>0&&B>1?I=B+" minutes ago":1===B?I=B+" minute ago":H>0&&H>1?I=H+" seconds ago":1===H?I=H+" second ago":0===H&&(I="just now");for(var J=function(e){var c=e.target.getAttribute("value");m.put("https://nodeprojectreact.herokuapp.com/score",{id:n,comment:t,type:c}).catch((function(e){alert(e)})).then((function(){a()}))},V=t.user.image.png,U=o[0].username,$=o[0].image.png,q=Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{alt:"avatar",src:$})}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=[],c=(r.map((function(e){n.push(e.id)})),n.sort((function(e,t){return e-t}))),s={id:c[c.length-1]+1,content:x,createdAt:new Date,score:0,user:o[0],replyTo:t._id,type:"reply"};m.post("https://nodeprojectreact.herokuapp.com/addcomment",{newcomment:s}).catch((function(e){alert("Error:",e)})).then((function(){O(!1),w(""),a()}))},children:[Object(i.jsx)("textarea",{rows:"3",cols:"12",wrap:"hard",defaultValue:"@"+t.user.username+" ",onChange:function(e){w(e.target.value),e.preventDefault()}}),Object(i.jsx)("input",{type:"submit",value:"REPLY"})]})]}),z=t.content,G=z.split(" "),K="@"===z.split("")[0]?Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:G[0]+" "}),z.substring(z.indexOf(" ")+1)]}):Object(i.jsx)("p",{children:t.content}),Q=[],W=0;W<M.length;W++)for(var X=W+1;X<r.length;X++)M[W]._id===r[X].replyTo&&Q.push(r[X]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsxs)("div",{className:"vote-count",children:[Object(i.jsx)("img",{alt:"plus",src:d,onClick:J,value:"plus"}),Object(i.jsx)("p",{children:t.score}),Object(i.jsx)("img",{alt:"minus",src:j,onClick:J,value:"minus"})]}),Object(i.jsxs)("div",{className:"comment-column",children:[Object(i.jsxs)("div",{className:"comment-header",children:[Object(i.jsx)("img",{alt:"avatar",src:V}),Object(i.jsx)("p",{children:t.user.username}),Object(i.jsx)("span",{className:t.user.username===U?"you":"nodisplay",children:"you"}),Object(i.jsx)("p",{className:"cooment-date",children:I}),t.user.username===U?Object(i.jsxs)("div",{className:"delete",children:[Object(i.jsx)("p",{onClick:function(){l(!0),u(n)},children:"Delete"}),Object(i.jsx)("p",{onClick:function(){k(!0)},children:"Edit"})]}):Object(i.jsx)("p",{className:"reply",onClick:function(e){O(!0)},children:" Reply"})]}),Object(i.jsx)("div",{className:"content",children:N?Object(i.jsxs)("form",{className:"update",onSubmit:function(e){e.preventDefault();var c={_id:n,id:t.id,content:E,createdAt:t.createdAt,score:t.score,user:t.user,replyTo:t.replyTo};m.put("https://nodeprojectreact.herokuapp.com/edit",{params:c}).catch((function(e){alert(e)})).then((function(){a(),k(!1)}))},children:[Object(i.jsx)("textarea",{className:"editable",rows:"2",cols:"10",wrap:"hard",onChange:function(e){e.preventDefault(),A(e.target.value)},defaultValue:t.content}),Object(i.jsx)("input",{type:"submit",value:"UPDATE"})]}):K})]})]}),f?q:"",M.map((function(e){return t._id===e.replyTo?Object(i.jsx)("div",{className:Q.includes(e)?"jauna":"repliedTo",children:Object(i.jsx)(h,{comment:e,id:e._id,getAllData:a,currentuser:o,comments:r,deletemodal:l,deletefromdb:u},e.id)},e.id):""}))]})}var p=n(7).default;function b(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(),r=Object(s.a)(o,2),l=r[0],d=r[1],j=Object(c.useState)(),m=Object(s.a)(j,2),b=m[0],f=m[1],O=Object(c.useState)(!1),g=Object(s.a)(O,2),v=g[0],x=g[1],w=Object(c.useState)(),y=Object(s.a)(w,2),D=y[0],N=y[1],k=Object(c.useState)(""),S=Object(s.a)(k,2),C=S[0],E=S[1];Object(c.useEffect)((function(){A(),M()}),[]);var A=function(){p.get("https://nodeprojectreact.herokuapp.com").then((function(e){return d(e.data)})).catch((function(e){console.error("Error:",e)}))},M=function(){p.get("https://nodeprojectreact.herokuapp.com/user",{params:{name:"juliusomo"}}).then((function(e){return a(e.data)})).then(E(n[0].image.png)).catch((function(e){console.error("Error:",e)}))},T=Object(c.useCallback)((function(e){x(e)}),[]),F=Object(c.useCallback)((function(e){N(e)}),[]);return void 0===l||null===l||void 0===n[0]||null===n[0]?"":Object(i.jsxs)(i.Fragment,{children:[l.map((function(e){return"0"===e.replyTo?Object(i.jsx)("div",{children:Object(i.jsx)(h,{comment:e,id:e._id,getAllData:A,currentuser:n,comments:l,deletemodal:T,deletefromdb:F},e.id)},e.id):""})),Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{alt:"avatar",src:C})}),Object(i.jsxs)("form",{onSubmit:function(e){var t=e.target[0].value;e.preventDefault();var c=[],a=(l.map((function(e){c.push(e.id)})),c.sort((function(e,t){return e-t}))),o={id:a[a.length-1]+1,content:t,createdAt:new Date,score:0,user:n[0],replyTo:"0"};p.post("https://nodeprojectreact.herokuapp.com/addcomment",{newcomment:o}).catch((function(e){alert("Error:",e)})).then((function(){f(""),A()}))},children:[Object(i.jsx)("textarea",{rows:"3",cols:"10",wrap:"hard",placeholder:"Add a comment...",onChange:function(e){f(e.target.value),e.preventDefault()},value:b}),Object(i.jsx)("input",{type:"submit",value:"SEND"})]})]}),v?Object(i.jsx)(u,{deletemodal:T,commentid:D,getalldata:A}):""]})}n(52);function f(){return Object(i.jsx)(b,{})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})})),O()}},[[53,1,2]]]);
//# sourceMappingURL=main.de0f2960.chunk.js.map