(this.webpackJsonptodoapp2=this.webpackJsonptodoapp2||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(3),c=n.n(s),r=n(6),o=n(4),u=n(5),l=n(8),h=n(7),j=(n(13),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={input:"",items:[]},t.handleChange=function(e){t.setState({input:e.target.value})},t.storeItems=function(e){e.preventDefault();var n=t.state.input;t.setState({items:[].concat(Object(r.a)(t.state.items),[n]),input:""})},t.deleteItem=function(e){t.setState({items:t.state.items.filter((function(t,n){return n!==e}))})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.input,a=e.items;return Object(j.jsxs)("div",{className:"todo-container",children:[Object(j.jsxs)("form",{className:"input-section",onSubmit:this.storeItems,children:[Object(j.jsx)("h1",{children:"Todo App"}),Object(j.jsx)("input",{type:"text",value:n,onChange:this.handleChange,placeholder:"Eneter items..."})]}),Object(j.jsx)("ul",{children:a.map((function(e,n){return Object(j.jsxs)("li",{children:[e," ",Object(j.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return t.deleteItem(n)}})]},n)}))})]})}}]),n}(a.Component),d=function(){return Object(j.jsx)(p,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),s(t),c(t)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.f98a7cf5.chunk.js.map