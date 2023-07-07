(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(2),i=c(1),l=(c(13),c(14),c(15),c(3)),r=c.n(l),o=c(0),d=function(e){var t=e.posts,c=e.postSelected,s=Object(i.useState)(null),n=Object(a.a)(s,2),l=n[0],d=n[1];return Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.id,s=e.title;return Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:t}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:s}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button is-link",{"is-light":l!==t}),onClick:function(){c(e),d(l!==t?t:null)},children:l===t?"Close":"Open"})})]},t)}))})]})]})},j=c(8),u=(c(17),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.commentLoading,c=e.commentAdd,s=Object(i.useState)(""),n=Object(a.a)(s,2),l=n[0],d=n[1],j=Object(i.useState)(""),u=Object(a.a)(j,2),m=u[0],b=u[1],h=Object(i.useState)(""),O=Object(a.a)(h,2),x=O[0],f=O[1],N=Object(i.useState)(!1),p=Object(a.a)(N,2),v=p[0],y=p[1],g=function(e){return v&&!e};return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault(),l&&m&&x?(c(l,m,x),y(!1),f("")):y(!0)},children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":g(l)}),value:l,onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),g(l)&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g(l)&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":g(m)}),value:m,onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),g(m)&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g(m)&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":g(x)}),value:x,onChange:function(e){return f(e.target.value)}})}),g(x)&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:r()("button","is-link",{"is-loading":t}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){d(""),b(""),f(""),y(!1)},children:"Clear"})})]})]})},b="https://mate.academy/students-api";function h(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),h(300).then((function(){return fetch(b+e,s)})).then((function(e){return e.json()}))}var x=function(e){return O(e)},f=function(e,t){return O(e,"POST",t)},N=function(e){return O(e,"DELETE")},p=function(e){var t=e.selectedPost,c=Object(i.useState)(!1),s=Object(a.a)(c,2),n=s[0],l=s[1],r=Object(i.useState)(!1),d=Object(a.a)(r,2),b=d[0],h=d[1],O=Object(i.useState)(!1),p=Object(a.a)(O,2),v=p[0],y=p[1],g=Object(i.useState)(!1),S=Object(a.a)(g,2),C=S[0],E=S[1],w=Object(i.useState)([]),k=Object(a.a)(w,2),P=k[0],F=k[1],T=function(e){F(P.filter((function(t){return t.id!==e}))),function(e){N("/comments/".concat(e))}(e)};Object(i.useEffect)((function(){var e;l(!1),y(!0),h(!1),(e=t.id,x("/comments?postId=".concat(e))).then((function(e){F(e)})).catch((function(){return l(!0)})).finally((function(){return y(!1)}))}),[t]);var L=Object(i.useCallback)((function(){h(!0)}),[]);return Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(o.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(o.jsxs)("div",{className:"block",children:[v?Object(o.jsx)(u,{}):Object(o.jsx)(o.Fragment,{children:n&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"})}),!v&&Object(o.jsxs)(o.Fragment,{children:[P.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}),P.map((function(e){var t=e.name,c=e.email,s=e.body,n=e.id;return Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:".concat(c),"data-cy":"CommentAuthor",children:t}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return T(n)},children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:s})]},n)}))]}):Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),b?Object(o.jsx)(m,{commentLoading:C,commentAdd:function(e,c,s){E(!0),function(e,t,c,s){return f("/comments",{postId:e,name:t,email:c,body:s})}(t.id,e,c,s).then((function(e){F([].concat(Object(j.a)(P),[e]))})).catch((function(){return l(!0)})).finally((function(){return E(!1)}))}}):Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return L()},children:"Write a comment"})]})]})]})},v=function(e){var t=e.users,c=e.selectedUser,s=e.userSelectedId,n=Object(i.useState)(!1),l=Object(a.a)(n,2),d=l[0],j=l[1],u=Object(i.useRef)(null),m=function(e){u.current&&!u.current.contains(e.target)&&j(!1)};return Object(i.useEffect)((function(){return document.addEventListener("mousedown",m),function(){document.removeEventListener("mousedown",m)}}),[]),Object(o.jsxs)("div",{"data-cy":"UserSelector",className:r()("dropdown",{"is-active":d}),ref:u,children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!d)},children:[Object(o.jsx)("span",{children:c?null===c||void 0===c?void 0:c.name:"Choose a user"}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var t=e.id,n=e.name;return Object(o.jsx)("a",{href:"#user-".concat(t),className:r()("dropdown-item",{"is-active":t===(null===c||void 0===c?void 0:c.id)}),onClick:function(){s(e),j(!1)},children:n},t)}))})})]})},y=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),l=Object(a.a)(n,2),j=l[0],m=l[1],b=Object(i.useState)(null),h=Object(a.a)(b,2),O=h[0],f=h[1],N=Object(i.useState)(null),y=Object(a.a)(N,2),g=y[0],S=y[1],C=Object(i.useState)(!1),E=Object(a.a)(C,2),w=E[0],k=E[1],P=Object(i.useState)(!1),F=Object(a.a)(P,2),T=F[0],L=F[1];Object(i.useEffect)((function(){var e;(e="/users",x(e)).then(s)}),[]),Object(i.useEffect)((function(){if(O){var e="/posts?userId=".concat(O.id);k(!0),(t=e,x(t)).then((function(e){m(e),L(!1)})).catch((function(){return L(!0)})).finally((function(){return k(!1)}))}var t}),[O]);var I=j.find((function(e){return e===g}))||null;return Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(v,{users:c,selectedUser:O,userSelectedId:function(e){S(null),f(null),f(e)}})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!O&&Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),w?Object(o.jsx)(u,{}):Object(o.jsxs)(o.Fragment,{children:[T&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),j.length>0&&Object(o.jsx)(d,{posts:j,postSelected:function(e){(null===g||void 0===g?void 0:g.id)!==(null===e||void 0===e?void 0:e.id)?S(e):S(null)}}),!j.length&&O&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})]})]})]})}),Object(o.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":g}),children:Object(o.jsx)("div",{className:"tile is-child box is-success ",children:I&&Object(o.jsx)(p,{selectedPost:I})})})]})})})};n.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dc77f404.chunk.js.map