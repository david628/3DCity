(this["webpackJsonpfar-seer"]=this["webpackJsonpfar-seer"]||[]).push([[8],{101:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},189:function(e,t,n){"use strict";n.r(t);var a,r=n(101),o=n(19),i=n(20),c=n(21),s=n(22),u=n(0),l=n.n(u),p=n(25),f=n(7),d=n(329),m=n(229),b=n(230),h=(n(231),Object(p.b)((function(e){return e.
}),(function(e){return Object(f.b)({login:function(e){return function(t){Object(b.a)("data/login.json",{method:"GET",body:JSON.stringify(e)}).then((function(e){0===e.code?(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("token",e.token),t({type:"login",user:e.data}),m.a.push("/")):d.e.warning({msg:l.a.createElement("div",null,"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff01")})}))}}},e)}))(a=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.preventDefault(),a.setState(Object(r.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),""!=a.state.userName&&""!=a.state.password?a.props.login(a.state):d.e.warning({msg:l.a.createElement("div",null,"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff01")})},a.state={userName:"",password:""},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"login",onSubmit:this.submit},l.a.createElement(d.c,{onSubmit:this.handleSubmit,className:"login-form"},l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(d.d,{type:"text",name:"userName",value:this.state.userName,onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165admin"})),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(d.d,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange,placeholder:"\u8bf7\u8f93\u5165admin"})),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement(d.a,{type:"submit"},"Login In"))))}}]),n}(u.Component))||a);t.default=h},229:function(e,t,n){"use strict";var a=(0,n(6).createHashHistory)();t.a=a},230:function(e,t,n){"use strict";var a=n(84);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,Object(a.a)({cache:"no-cache",headers:{"content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")||!1},method:"GET"},t)).then((function(e){return e.json()}))}},231:function(e,t,n){},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(101);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=8.1b046bda.chunk.js.map
