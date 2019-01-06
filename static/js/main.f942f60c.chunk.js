(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var o,a=n(11),c=n(0),r=n.n(c),l=n(19),i=n(4),u=n(8),s=n(9),d=n(12),m=n(10),p=n(13),f=n(5),h=n.n(f),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={text:n.props.text||""},n.handleSubmit=function(e){var t=e.currentTarget.value.trim();13===e.which&&(n.props.onSave(t),n.props.newTodo&&n.setState({text:""}))},n.handleChange=function(e){n.setState({text:e.target.value})},n.handleBlur=function(e){n.props.newTodo||n.props.onSave(e.target.value)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{className:h()({edit:this.props.editing,"new-todo":this.props.newTodo}),type:"text",placeholder:this.props.placeholder,autoFocus:!0,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})}}]),t}(c.Component),v=function(e){var t=e.addTodo;return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement(b,{newTodo:!0,onSave:function(e){0!==e.length&&t(e)},placeholder:"What needs to be done?"}))},E=n(1),g=Object(E.d)({slice:"todos",cases:{addTodo:function(e,t,n){e.push({id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,completed:!1,text:t})},deleteTodo:function(e,t){return e.filter(function(e){return e.id!==t})},editTodo:function(e,t){var n=Object(a.a)(t,2),o=n[0],c=n[1];e.forEach(function(e){return e.id===o&&(e.text=c)})},completeTodo:function(e,t){e.forEach(function(e){return e.id===t&&(e.completed=!e.completed)})},completeAllTodos:function(e,t){var n=e.every(function(e){return e.completed});e.forEach(function(e){e.completed=!n})},clearCompleted:function(e,t){return e.filter(function(e){return!1===e.completed})}},initialState:[{text:"Use Redux",completed:!1,id:0}]}),O=g.reducer,j=g.actions,C=g.selectors.getSlice,w=Object(E.d)({slice:"visibilityFilter",cases:{setVisibilityFilter:function(e,t,n){return t}},initialState:"show_all"}),y=w.actions.setVisibilityFilter,T=w.reducer,k=w.selectors.getSlice,x={addTodo:j.addTodo},S=Object(i.b)(null,x)(v),N=n(14),F=function(e){var t=e.active,n=e.children,o=e.setFilter;return r.a.createElement("a",{className:h()({selected:t}),style:{cursor:"pointer"},onClick:function(){return o()}},n)},_=Object(i.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{setFilter:function(){e(y(t.filter))}}})(F),A=(o={},Object(N.a)(o,"show_all","All"),Object(N.a)(o,"show_active","Active"),Object(N.a)(o,"show_completed","Completed"),o),B=function(e){var t=e.activeCount,n=e.completedCount,o=e.onClearCompleted,a=1===t?"item":"items";return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"todo-count"},r.a.createElement("strong",null,t||"No")," ",a," left"),r.a.createElement("ul",{className:"filters"},Object.keys(A).map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(_,{filter:e},A[e]))})),!!n&&r.a.createElement("button",{className:"clear-completed",onClick:o},"Clear completed"))},D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={editing:!1},n.handleDoubleClick=function(){n.setState({editing:!0})},n.handleSave=function(e,t){0===t.length?n.props.deleteTodo(e):n.props.editTodo([e,t]),n.setState({editing:!1})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.todo,a=n.completeTodo,c=n.deleteTodo;return e=this.state.editing?r.a.createElement(b,{text:o.text,editing:this.state.editing,onSave:function(e){return t.handleSave(o.id,e)}}):r.a.createElement("div",{className:"view"},r.a.createElement("input",{className:"toggle",type:"checkbox",checked:o.completed,onChange:function(){return a(o.id)}}),r.a.createElement("label",{onDoubleClick:this.handleDoubleClick},o.text),r.a.createElement("button",{className:"destroy",onClick:function(){return c(o.id)}})),r.a.createElement("li",{className:h()({completed:o.completed,editing:this.state.editing})},e)}}]),t}(c.Component),J=function(e){var t=e.filteredTodos,n=e.actions;return r.a.createElement("ul",{className:"todo-list"},t.map(function(e){return r.a.createElement(D,Object.assign({key:e.id,todo:e},n))}))},U=Object(E.c)([k,C],function(e,t){switch(e){case"show_all":return t;case"show_completed":return t.filter(function(e){return e.completed});case"show_active":return t.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+e)}}),V=Object(E.c)([C],function(e){return e.reduce(function(e,t){return t.completed?e+1:e},0)}),I=Object(i.b)(function(e){return{filteredTodos:U(e)}},function(e){return{actions:Object(E.a)(j,e)}})(J),K=function(e){var t=e.todosCount,n=e.completedCount,o=e.actions;return r.a.createElement("section",{className:"main"},!!t&&r.a.createElement("span",null,r.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:n===t,readOnly:!0}),r.a.createElement("label",{onClick:o.completeAllTodos})),r.a.createElement(I,null),!!t&&r.a.createElement(B,{completedCount:n,activeCount:t-n,onClearCompleted:o.clearCompleted}))},M=Object(i.b)(function(e){return{todosCount:e.todos.length,completedCount:V(e)}},function(e){return{actions:Object(E.a)(j,e)}})(K),R=function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(M,null))},W=(n(37),Object(E.b)({reducer:{todos:O,visibilityFilter:T}})),q=Object(a.a)(W,1)[0];Object(l.render)(r.a.createElement(i.a,{store:q},r.a.createElement(R,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.f942f60c.chunk.js.map