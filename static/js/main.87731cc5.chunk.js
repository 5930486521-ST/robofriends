(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},24:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(10),c=n.n(i),s=(n(24),n(11)),o=n(12),l=n(17),u=n(13),h=n(18),d=function(e){var t=e.id,n=e.name,r=e.username,i=e.email;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/"+t,alt:"not found"}),a.a.createElement("div",null,a.a.createElement("h2",null,r),a.a.createElement("h3",null,"Name: ",n),a.a.createElement("h4",null,"Email: ",i)))},m=function(e){var t=e.list;return a.a.createElement("div",null,t.map(function(e){return a.a.createElement(d,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})}))},g=function(e){var t=e.handler;return a.a.createElement("div",{className:"p2"},a.a.createElement("input",{onChange:t,className:"pa3 bs b--green bg-lightest-blue",type:"search",placeholder:"seach robots by name"}))},E=(n(26),n(4)),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getList()}},{key:"render",value:function(){var e=this;console.log(this.props.list);var t=this.props.list.filter(function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())});return a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(g,{handler:this.props.onsearchChange}),a.a.createElement(m,{list:t}))}}]),t}(r.Component),f=Object(E.b)(function(e){return{searchField:e.onSeachChangeReducer.searchField,list:e.getListReducer.list,isPending:e.getListReducer.isPending}},function(e){return{onsearchChange:function(t){return e({type:"SEARCHFIELD_CHANGED",searchField:t.target.value})},getList:function(){return e(function(e){e({type:"GET_LIST_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"GET_LIST_SUCCESSED",list:t})}).catch(function(t){return e({type:"GET_LIST_FAILED",error:t})})})}}})(p);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var b=n(1),v={searchField:""},w={list:[],isPending:!0},L=Object(b.c)({onSeachChangeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SEARCHFIELD_CHANGED":return Object.assign({},e,{searchField:t.searchField});default:return e}},getListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_LIST_PENDING":return Object.assign({},e,{isPending:!0});case"GET_LIST_SUCCESSED":return Object.assign({},e,{isPending:!1,list:t.list});case"GET_LIST_FAILED":return Object.assign({},e,{error:t.error});default:return e}}}),j=n(15),C=n(16),S=Object(C.createLogger)(),y=Object(b.d)(L,Object(b.a)(j.a,S));c.a.render(a.a.createElement(E.a,{store:y},a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.87731cc5.chunk.js.map