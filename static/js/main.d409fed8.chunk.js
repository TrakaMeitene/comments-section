(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},52:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=52},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(19),r=n.n(o),s=(n(27),n(3)),i=(n(28),n(0)),u=n(7).default;function l(e){var t=e.deletemodal,n=e.commentid,c=e.getalldata;return Object(i.jsx)("div",{className:"mask",children:Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("h3",{children:"Delete comment"}),Object(i.jsx)("p",{children:"Are you sure you want to delete this comment? This will remove the comment and can't be undone"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("button",{className:"cancel",onClick:function(){t(!1)},children:"NO,CANCEL"}),Object(i.jsx)("button",{className:"accept",onClick:function(){u.delete("https://nodeprojectreact.herokuapp.com/delete/${commentid}",{data:{id:n}}).then((function(e){return console.log(e.data)})).catch((function(e){console.error("Error:",e)})).then((function(){t(!1),c()}))},children:"YES, DELETE"})]})]})})}var d=n.p+"static/media/icon-plus.0037a825.svg",j=n.p+"static/media/icon-minus.4aa6933c.svg",m=n(7).default;function h(e){var t=e.comment,n=e.id,a=e.getAllData,o=e.currentuser,r=e.comments,u=e.deletemodal,l=e.deletefromdb,p=Object(c.useState)(!1),b=Object(s.a)(p,2),f=b[0],O=b[1],g=Object(c.useState)(),v=Object(s.a)(g,2),x=v[0],w=v[1],y=Object(c.useState)(!1),D=Object(s.a)(y,2),N=D[0],k=D[1],E=Object(c.useState)(),C=Object(s.a)(E,2),S=C[0],M=C[1],A=[];Object(c.useEffect)((function(){if(void 0===t||null===t)return""}),[t]);for(var T=0;T<r.length;T++)"0"!==r[T].replyTo&&A.push(r[T]);var F=new Date,_=new Date(t.createdAt),L=F.getFullYear()-_.getFullYear(),P=F.getMonth()-_.getMonth(),Y=Math.abs(new Date(t.createdAt).getDate()-(new Date).getDate()),R=Math.abs(new Date(t.createdAt).getHours()-(new Date).getHours()),U=F.getMinutes()-_.getMinutes(),B=F.getSeconds()-_.getSeconds(),H="";L>0&&L<2?H+=L+"year ago":L>=2?H=L+" years ago":P>0&&P>1?H=P+" months ago":1===P?H=P+" month ago":Y>0&&Y>1&&Math.floor(Y)<7?H=Math.floor(Y)+" days ago":1===Math.floor(Y)?H=Y+" day ago":1===Math.floor(Y/7)?H="1 week ago":Math.floor(Y/7)>1?H=Math.floor(Y/7)+" weeks ago":U>0&&1===R?H="1 hour ago":R>1&&R<12?H=R+" hours ago":1===R&&U<0?H=(U=F.getMinutes()+60-_.getMinutes())+" minutes ago":U>0&&U>1?H=U+" minutes ago":1===U?H=U+" minute ago":B>0&&B>1?H=B+" seconds ago":1===B?H=B+" second ago":0===B&&(H="just now");for(var I=function(e){var c=e.target.getAttribute("value");m.put("https://nodeprojectreact.herokuapp.com/score",{id:n,comment:t,type:c}).catch((function(e){alert(e)})).then((function(){a()}))},J=t.user.image.png,V=o[0].username,$=o[0].image.png,q=Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{alt:"avatar",src:$})}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=[],c=(r.map((function(e){n.push(e.id)})),n.sort((function(e,t){return e-t}))),s={id:c[c.length-1]+1,content:x,createdAt:new Date,score:0,user:o[0],replyTo:t._id,type:"reply"};m.post("https://nodeprojectreact.herokuapp.com/addcomment",{newcomment:s}).catch((function(e){alert("Error:",e)})).then((function(){O(!1),w(""),a()}))},children:[Object(i.jsx)("textarea",{rows:"3",cols:"12",wrap:"hard",defaultValue:"@"+t.user.username+" ",onChange:function(e){w(e.target.value),e.preventDefault()}}),Object(i.jsx)("input",{type:"submit",value:"REPLY"})]})]}),z=t.content,G=z.split(" "),K="@"===z.split("")[0]?Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:G[0]+" "}),z.substring(z.indexOf(" ")+1)]}):Object(i.jsx)("p",{children:t.content}),Q=[],W=0;W<A.length;W++)for(var X=W+1;X<r.length;X++)A[W]._id===r[X].replyTo&&Q.push(r[X]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsxs)("div",{className:"vote-count",children:[Object(i.jsx)("img",{alt:"plus",src:d,onClick:I,value:"plus"}),Object(i.jsx)("p",{children:t.score}),Object(i.jsx)("img",{alt:"minus",src:j,onClick:I,value:"minus"})]}),Object(i.jsxs)("div",{className:"comment-column",children:[Object(i.jsxs)("div",{className:"comment-header",children:[Object(i.jsx)("img",{alt:"avatar",src:J}),Object(i.jsx)("p",{children:t.user.username}),Object(i.jsx)("span",{className:t.user.username===V?"you":"nodisplay",children:"you"}),Object(i.jsx)("p",{className:"cooment-date",children:H}),t.user.username===V?Object(i.jsxs)("div",{className:"delete",children:[Object(i.jsx)("p",{onClick:function(){u(!0),l(n)},children:"Delete"}),Object(i.jsx)("p",{onClick:function(){k(!0)},children:"Edit"})]}):Object(i.jsx)("p",{className:"reply",onClick:function(e){O(!0)},children:" Reply"})]}),Object(i.jsx)("div",{className:"content",children:N?Object(i.jsxs)("form",{className:"update",onSubmit:function(e){e.preventDefault();var c={_id:n,id:t.id,content:S,createdAt:t.createdAt,score:t.score,user:t.user,replyTo:t.replyTo};m.put("https://nodeprojectreact.herokuapp.com/edit",{params:c}).catch((function(e){alert(e)})).then((function(){a(),k(!1)}))},children:[Object(i.jsx)("textarea",{className:"editable",rows:"2",cols:"10",wrap:"hard",onChange:function(e){e.preventDefault(),M(e.target.value)},defaultValue:t.content}),Object(i.jsx)("input",{type:"submit",value:"UPDATE"})]}):K})]})]}),f?q:"",A.map((function(e){return t._id===e.replyTo?Object(i.jsx)("div",{className:Q.includes(e)?"jauna":"repliedTo",children:Object(i.jsx)(h,{comment:e,id:e._id,getAllData:a,currentuser:o,comments:r,deletemodal:u,deletefromdb:l},e.id)},e.id):""}))]})}var p=n(7).default;function b(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)(),u=Object(s.a)(r,2),d=u[0],j=u[1],m=Object(c.useState)(),b=Object(s.a)(m,2),f=b[0],O=b[1],g=Object(c.useState)(!1),v=Object(s.a)(g,2),x=v[0],w=v[1],y=Object(c.useState)(),D=Object(s.a)(y,2),N=D[0],k=D[1];Object(c.useEffect)((function(){E(),C()}),[]);var E=function(){p.get("https://nodeprojectreact.herokuapp.com").then((function(e){return j(e.data)})).catch((function(e){console.error("Error:",e)}))},C=function(){p.get("https://nodeprojectreact.herokuapp.com/user",{params:{name:"juliusomo"}}).then((function(e){return o(e.data)})).catch((function(e){console.error("Error:",e)}))},S=Object(c.useCallback)((function(e){w(e)}),[]),M=Object(c.useCallback)((function(e){k(e)}),[]);return void 0===d||null===d||void 0===a[0]||null===a[0]?"":Object(i.jsxs)(i.Fragment,{children:[d.map((function(e){return"0"===e.replyTo?Object(i.jsx)("div",{children:Object(i.jsx)(h,{comment:e,id:e._id,getAllData:E,currentuser:a,comments:d,deletemodal:S,deletefromdb:M},e.id)},e.id):""})),Object(i.jsxs)("div",{className:"comment-window",children:[Object(i.jsx)("div",{className:"avatar",children:Object(i.jsx)("img",{alt:"avatar",src:n(52)(a[0].image.png)})}),Object(i.jsxs)("form",{onSubmit:function(e){var t=e.target[0].value;e.preventDefault();var n=[],c=(d.map((function(e){n.push(e.id)})),n.sort((function(e,t){return e-t}))),o={id:c[c.length-1]+1,content:t,createdAt:new Date,score:0,user:a[0],replyTo:"0"};p.post("https://nodeprojectreact.herokuapp.com/addcomment",{newcomment:o}).catch((function(e){alert("Error:",e)})).then((function(){O(""),E()}))},children:[Object(i.jsx)("textarea",{rows:"3",cols:"10",wrap:"hard",placeholder:"Add a comment...",onChange:function(e){O(e.target.value),e.preventDefault()},value:f}),Object(i.jsx)("input",{type:"submit",value:"SEND"})]})]}),x?Object(i.jsx)(l,{deletemodal:S,commentid:N,getalldata:E}):""]})}n(53);function f(){return Object(i.jsx)(b,{})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})})),O()}},[[54,1,2]]]);
//# sourceMappingURL=main.d409fed8.chunk.js.map