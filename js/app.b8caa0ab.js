(function(e){function t(t){for(var o,u,l=t[0],a=t[1],i=t[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/pd-work/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["e"])("h1",null,"ToDo App",-1),c=Object(o["e"])("label",null,"New ToDo ",-1),u=Object(o["e"])("button",null,"Add ToDo",-1),l=Object(o["e"])("h2",null,"ToDo List",-1),a={key:0};function i(e,t,n,i,d,f){return Object(o["f"])(),Object(o["c"])(o["a"],null,[r,Object(o["e"])("form",{onSubmit:t[2]||(t[2]=Object(o["l"])((function(e){return i.addTodo()}),["prevent"]))},[c,Object(o["k"])(Object(o["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.newTodo=e}),name:"newTodo",autocomplete:"off"},null,512),[[o["j"],i.newTodo]]),u],32),l,Object(o["e"])("ul",null,[(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["h"])(i.todos,(function(e,t){return Object(o["f"])(),Object(o["c"])("li",{key:t},[Object(o["e"])("span",{class:{done:e.done},onClick:function(t){return i.doneTodo(e)}},Object(o["i"])(e.content),11,["onClick"]),Object(o["e"])("button",{onClick:function(e){return i.removeTodo(t)}},"Remove",8,["onClick"])])})),128))]),0===i.todos.length?(Object(o["f"])(),Object(o["c"])("h4",a,"Empty list.")):Object(o["d"])("",!0)],64)}n("a434");var d={name:"App",setup:function(){var e=Object(o["g"])(""),t=[{done:!1,content:"Write a blog post"}],n=JSON.parse(localStorage.getItem("todos"))||t,r=Object(o["g"])(n);function c(){e.value&&(r.value.push({done:!1,content:e.value}),e.value=""),a()}function u(e){e.done=!e.done,a()}function l(e){r.value.splice(e,1),a()}function a(){var e=JSON.stringify(r.value);localStorage.setItem("todos",e)}return{todos:r,newTodo:e,addTodo:c,doneTodo:u,removeTodo:l,saveData:a}}},f=(n("b037"),n("d959")),p=n.n(f);const b=p()(d,[["render",i]]);var s=b;Object(o["b"])(s).mount("#app")},b037:function(e,t,n){"use strict";n("d2e3")},d2e3:function(e,t,n){}});
//# sourceMappingURL=app.b8caa0ab.js.map