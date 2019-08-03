import{s as e,B as t,T as n,S as r,i as a,e as o,b as s,j as i,J as l,K as c,n as u,a as h,m as f,q as p,f as d,h as m,k as v,L as g,F as $,G as b,u as w,U as x,N as y,C as P,r as _,l as k,p as M,v as j}from"./chunk-dd27efbb.js";import{c as N,a as E,T as A,N as H,A as O,S,b as L,B as X,d as Y,f as C,L as D,e as q}from"./chunk-63f83b24.js";import{_ as T,a as F}from"./chunk-3259a9e2.js";function I(n,r=t){let a;const o=[];function s(t){if(e(n,t)){if(n=t,!a)return;o.forEach(e=>e[1]()),o.forEach(e=>e[0](n))}}return{set:s,update:function(e){s(e(n))},subscribe:function(e,i=t){const l=[e,i];return o.push(l),1===o.length&&(a=r(s)||t),e(n),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&(a(),a=null)}}}}const U=I(!1),G=I(!0),K=I(!1),z=I(!0),B=I(!1);function V(e){return e>1279?"xl":e>1023?"lg":e>767?"md":"sm"}function W(e){var t=this;return new Promise(function(n,r){return T(t,void 0,void 0,function(){var t,a,o,s,i,l,c,u,h,f=this;return F(this,function(p){switch(p.label){case 0:t=Object.keys(e),a=t.map(function(t){return e[t]}),o=[],s={},i=0,l=a.map(Promise.resolve,Promise),p.label=1;case 1:return i<l.length?(c=l[i],u=s,h=t[o.length],[4,c.then(function(e){return T(f,void 0,void 0,function(){return F(this,function(t){switch(t.label){case 0:return[4,e];case 1:return[2,t.sent()]}})})},r)]):[3,4];case 2:u[h]=p.sent(),o.push(s[t[o.length]]),o.length===t.length&&n(s),p.label=3;case 3:return i++,[3,1];case 4:return[2]}})})})}var Z,J=function(){function e(e,t,n){this.ctor=e,this.target=t,this.module=n,this.beforeenter=this.beforeenter.bind(this)}return e.prototype.importModules=function(){return T(this,void 0,void 0,function(){var e;return F(this,function(t){switch(t.label){case 0:return e={},[4,import("./page-f890b168.js")];case 1:return e.template=t.sent(),[4,this.module];case 2:return e.data=t.sent(),[2,W(e)]}})})},e.prototype.beforeenter=function(e,t){return T(this,void 0,void 0,function(){var t,n;return F(this,function(r){switch(r.label){case 0:return this.ctor?(t=this.ctor).then?[4,this.ctor]:[3,2]:[3,3];case 1:t=r.sent().default,r.label=2;case 2:return this.component=new t({target:this.target}),[3,5];case 3:return n=e,[4,this.importModules()];case 4:n.data=r.sent(),r.label=5;case 5:return[2]}})})},Object.defineProperty(e.prototype,"route",{get:function(){var t=this;return{beforeenter:this.beforeenter,enter:function(n,r){if(n.data){var a={target:t.target},o=void 0;n.data.data&&(o=Object.assign({},n.data.data.initialData,{partial:n.data.data[n.pathname],instance:null}),a.props=o),t.component=new n.data.template.default(a),o&&t.component.$set({instance:t.component}),console.log("Async Entered!",n),e.notify(n)}else console.log("Entered!",n),e.notify(n)},leave:function(e,n){e.data=null,t.component.$destroy(),console.log("Left!",e)}}},enumerable:!0,configurable:!0}),e}(),R=N(function(e,t){e.exports=function(){var e="undefined"!=typeof document&&document.createElement("a"),t=/^([\w\-]+)(?:=([^&]*))?$/,n=["beforeenter","enter","leave","update"],r=!0;function a(e){var t=e.route,n=e.pathname,a=e.params,o=e.query,s=e.hash,i=e.scrollX,l=e.scrollY;this.pathname=n,this.params=a,this.query=o,this.hash=s,this.isInitial=r,this.scrollX=i,this.scrollY=l,this._route=t,r=!1}function o(e,t){var r=this;"/"===e[0]&&(e=e.slice(1)),this.path=e,this.segments=e.split("/"),"function"==typeof t&&(t={enter:t}),this.updateable="function"==typeof t.update,n.forEach(function(e){r[e]=function(n,r){var a;return t[e]&&(a=t[e](n,r)),w.Promise.resolve(a)}})}a.prototype={matches:function(e){return this._route.matches(e)}},o.prototype={matches:function(t){e.href=t;var n=0===e.pathname.indexOf("/")?e.pathname.slice(1):e.pathname,r=n.split("/");return function(e,t){if(e.length===t.length){for(var n=e.length;n--;)if(e[n]!==t[n]&&":"!==t[n][0])return!1;return!0}}(r,this.segments)},exec:function(n){e.href=n.href;var r=0===e.pathname.indexOf("/")?e.pathname.slice(1):e.pathname,o=e.search.slice(1),s=r.split("/");if(s.length!==this.segments.length)return!1;for(var i={},l=0;l<s.length;l+=1){var c=s[l],u=this.segments[l];if(":"===u[0])i[u.slice(1)]=c;else if(c!==u)return!1}for(var h={},f=o.split("&"),p=0;p<f.length;p+=1){var d=t.exec(f[p]);if(d){var m=d[1],v=decodeURIComponent(d[2]);h.hasOwnProperty(m)?("object"!=typeof h[m]&&(h[m]=[h[m]]),h[m].push(v)):h[m]=v}}return new a({route:this,pathname:r,params:i,query:h,hash:e.hash.slice(1),scrollX:n.scrollX,scrollY:n.scrollY})}};var s="undefined"!=typeof window?window:null,i=[];function l(e,t){if(null===e&&null===t)return!0;if(u(e)&&u(t)){var n=e.length;if(t.length!==n)return!1;for(;n--;)if(!l(e[n],t[n]))return!1;return!0}if("object"==typeof e&&"object"==typeof t){var r=Object.keys(e),a=Object.keys(t),o=r.length;if(a.length!==o)return!1;for(;o--;){var s=r[o];if(!t.hasOwnProperty(s)||!l(t[s],e[s]))return!1}return!0}return e===t}var c=Object.prototype.toString;function u(e){return"[object Array]"===c.call(e)}var h=s&&(s.history.location||s.location);function f(){}var p,d={},m={enter:function(){return w.Promise.resolve()},leave:function(){return w.Promise.resolve()}},v=!1,g={},$=1,b=$,w={base:"",Promise:Promise,add:function(e,t){return i.push(new o(e,t)),w},start:function(e){var t;void 0===e&&(e={}),e.renamePopstateEvent&&(t=e.renamePopstateEvent,s.removeEventListener("popstate",x,!1),s.addEventListener(t,x,!1));var n=i.some(function(e){return e.matches(h.href)})?h.href:e.fallback;return w.goto(n,{replaceState:!0,scrollX:s.scrollX,scrollY:s.scrollY})},goto:function(e,t){var n;void 0===t&&(t={}),g[b]={x:s.scrollX,y:s.scrollY};var r=new w.Promise(function(r,a){n=p={href:e,scrollX:t.scrollX||0,scrollY:t.scrollY||0,options:t,fulfil:r,reject:a}});return p.promise=r,v?r:(y(n),r)},getCurrentID:function(){return b}};function x(e){if((e=e.detail||e).state){var t=g[e.state.uid];y(p={href:h.href,scrollX:t?t.x:0,scrollY:t?t.y:0,popstate:!0,fulfil:f,reject:f}),b=e.state.uid}}function y(e){for(var t,n,r=0;r<i.length;r+=1){var a=i[r];if(n=a.exec(e)){t=a;break}}if(!t||(f=n,x=d,t===m&&f.hash===x.hash&&l(f.params,x.params)&&l(f.query,x.query)))e.fulfil();else if(g[b]={x:d.scrollX=s.scrollX,y:d.scrollY=s.scrollY},v=!0,(t===m&&t.updateable?t.update(n):w.Promise.all([m.leave(d,n),t.beforeenter(n,d)]).then(function(){return t.enter(n,d)})).then(function(){m=t,d=n,v=!1,p!==e?(y(p),p.promise.then(e.fulfil,e.reject)):e.fulfil()}).catch(e.reject),!e.popstate){var o=e.options,c=o.replaceState,u=o.invisible;if(!u){var h=c?b:++$;history[c?"replaceState":"pushState"]({uid:h},"",e.href),g[b=h]={x:e.scrollX,y:e.scrollY}}}var f,x}return s&&(function(e){function t(t){if(1===function(e){return null===(e=e||s.event).which?e.button:e.which}(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var n=t.target;n&&"A"!==n.nodeName.toUpperCase();)n=n.parentNode;if(n&&"A"===n.nodeName.toUpperCase()){var r="object"==typeof n.href&&"SVGAnimatedString"===n.href.constructor.name;if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!~n.href.indexOf("mailto:")&&(r?!n.target.baseVal:!n.target)&&(r||(l=n.href,c=location.protocol+"//"+location.hostname,location.port&&(c+=":"+location.port),l&&0===l.indexOf(c)))){var a=r?n.href.baseVal:n.pathname+n.search+(n.hash||"");"undefined"!=typeof process&&a.match(/^\/[a-zA-Z]:\//)&&(a=a.replace(/^\/[a-zA-Z]:\//,"/"));var o=a;0===a.indexOf(w.base)&&(a=a.substr(w.base.length)),w.base&&o===a||i.some(function(e){return e.matches(o)})&&(t.preventDefault(),e(o))}}}var l,c}s.addEventListener("click",t,!1),s.addEventListener("touchstart",t,!1)}(function(e){return w.goto(e)}),s.addEventListener("popstate",x,!1)),w}()});function Q(e){var n;return{c(){(n=o("h1")).textContent="Home"},m(e,t){s(e,n,t)},p:t,i:t,o:t,d(e){e&&i(n)}}}class ee extends r{constructor(t){super(),a(this,t,null,Q,e,[])}}function te(e){var t,n,r,a,$,b,w,x,y;function P(t){e.textfield_value_binding.call(null,t),n=!0,g(()=>n=!1)}let _={label:"Indivisual TextField",placeholder:"Text"};void 0!==e.text&&(_.value=e.text);var k=new A({props:_});function M(t){e.numberfield_value_binding.call(null,t),a=!0,g(()=>a=!1)}l.push(()=>c(k,"value",P));let j={label:"Indivisual NumberField",placeholder:"Number"};void 0!==e.text&&(j.value=e.text);var N=new H({props:j});return l.push(()=>c(N,"value",M)),{c(){t=o("div"),k.$$.fragment.c(),r=u(),N.$$.fragment.c(),$=u(),(b=o("div")).textContent="FormConfig",w=u(),(x=o("div")).textContent="FormGen",h(b,"class","formcfg"),h(x,"class","formgen"),h(t,"class","wrapper")},m(e,n){s(e,t,n),f(k,t,null),p(t,r),f(N,t,null),p(t,$),p(t,b),p(t,w),p(t,x),y=!0},p(e,t){var r={};!n&&e.text&&(r.value=t.text),k.$set(r);var o={};!a&&e.text&&(o.value=t.text),N.$set(o)},i(e){y||(d(k.$$.fragment,e),d(N.$$.fragment,e),y=!0)},o(e){m(k.$$.fragment,e),m(N.$$.fragment,e),y=!1},d(e){e&&i(t),v(k),v(N)}}}function ne(e,t,n){let r="12345";return{text:r,textfield_value_binding:function(e){n("text",r=e)},numberfield_value_binding:function(e){n("text",r=e)}}}class re extends r{constructor(t){super(),a(this,t,ne,te,e,[])}}var ae=function(){function e(e){this.router=R,this.init(e)}return e.prototype.init=function(e){this.indexHandler=new J(ee,e),this.aboutHandler=new J(import("./About-35cfa6c5.js"),e),this.employeeHandler=new J(null,e,import("./employee-290b4a79.js")),this.departmentHandler=new J(null,e,import("./department-e52454b3.js")),this.formgridHandler=new J(re,e),this.router.add(Z+"/",this.indexHandler.route).add(Z+"/formgrid",this.formgridHandler.route).add(Z+"/about",this.aboutHandler.route).add(Z+"/employee",this.employeeHandler.route).add(Z+"/department",this.departmentHandler.route).start({fallback:Z+"/"})},e}();function oe(e){var t,n,r,a,p,$,b,w,x,y=new S({});function P(t){e.tabs_selected_binding.call(null,t),a=!0,g(()=>a=!1)}let _={navigation:!0,items:e.topMenu};void 0!==e.currentPath&&(_.selected=e.currentPath);var k=new L({props:_});l.push(()=>c(k,"selected",P));var M=new X({props:{icon:"menu",small:!0,text:!0}});return M.$on("click",e.click_handler),{c(){(t=o("a")).innerHTML='<img src="/smelte-crud-app/logo.png" alt="Smelte logo" width="44"> <h6 class="pl-3 text-white tracking-widest font-thin text-lg">SMELTE</h6>',n=u(),y.$$.fragment.c(),r=u(),k.$$.fragment.c(),p=u(),$=o("div"),M.$$.fragment.c(),b=u(),(w=o("a")).innerHTML='<img src="/smelte-crud-app/github.png" alt="Github Smelte" width="24" height="24">',h(t,"href","."),h(t,"class","px-2 md:px-8 flex items-center"),h($,"class","md:hidden"),h(w,"href","https://github.com/matyunya/smelte"),h(w,"class","px-4")},m(e,a){s(e,t,a),s(e,n,a),f(y,e,a),s(e,r,a),f(k,e,a),s(e,p,a),s(e,$,a),f(M,$,null),s(e,b,a),s(e,w,a),x=!0},p(e,t){var n={};e.topMenu&&(n.items=t.topMenu),!a&&e.currentPath&&(n.selected=t.currentPath),k.$set(n)},i(e){x||(d(y.$$.fragment,e),d(k.$$.fragment,e),d(M.$$.fragment,e),x=!0)},o(e){m(y.$$.fragment,e),m(k.$$.fragment,e),m(M.$$.fragment,e),x=!1},d(e){e&&(i(t),i(n)),v(y,e),e&&i(r),v(k,e),e&&(i(p),i($)),v(M),e&&(i(b),i(w))}}}function se(e){var t,n,r,a,b,w,x;function y(t){e.navigationdrawer_showDesktop_binding.call(null,t),n=!0,g(()=>n=!1)}function _(t){e.navigationdrawer_showMobile_binding.call(null,t),r=!0,g(()=>r=!1)}let k={right:e.$right,persistent:e.$persistent,elevation:e.$elevation,breakpoint:e.$bp,$$slots:{default:[ue]},$$scope:{ctx:e}};void 0!==e.$showNav&&(k.showDesktop=e.$showNav),void 0!==e.$showNavMobile&&(k.showMobile=e.$showNavMobile);var M=new Y({props:k});return l.push(()=>c(M,"showDesktop",y)),l.push(()=>c(M,"showMobile",_)),{c(){t=o("main"),M.$$.fragment.c(),a=u(),b=o("div"),h(b,"id","app"),h(t,"class","container relative p-8 lg:max-w-3xl lg:ml-64 mx-auto mb-10 mt-24\n    md:ml-56 md:max-w-md md:px-3")},m(e,n){s(e,t,n),f(M,t,null),p(t,a),p(t,b),x=!0},p(e,t){var a={};e.$right&&(a.right=t.$right),e.$persistent&&(a.persistent=t.$persistent),e.$elevation&&(a.elevation=t.$elevation),e.$bp&&(a.breakpoint=t.$bp),(e.$$scope||e.currentPath)&&(a.$$scope={changed:e,ctx:t}),!n&&e.$showNav&&(a.showDesktop=t.$showNav),!r&&e.$showNavMobile&&(a.showMobile=t.$showNavMobile),M.$set(a)},i(e){x||(d(M.$$.fragment,e),P(()=>{w||(w=$(t,C,{duration:300},!0)),w.run(1)}),x=!0)},o(e){m(M.$$.fragment,e),w||(w=$(t,C,{duration:300},!1)),w.run(0),x=!1},d(e){e&&i(t),v(M),e&&w&&w.end()}}}function ie(e){var t,n,r;return{c(){t=o("hr"),n=u(),(r=o("h6")).textContent="Utilities",h(r,"class","p-6 ml-1 py-2 text-xs text-gray-900")},m(e,a){s(e,t,a),s(e,n,a),s(e,r,a)},d(e){e&&(i(t),i(n),i(r))}}}function le(e){var t,n,r,a,l,c,g="/typography"===e.item.to&&ie(),$=[{selected:e.currentPath==e.item.to},e.item,{dense:!0},{navigation:!0}];let b={};for(var w=0;w<$.length;w+=1)b=k(b,$[w]);var x=new q({props:b});function y(...t){return e.click_handler_1(e,...t)}return{c(){t=o("span"),g&&g.c(),n=u(),r=o("a"),x.$$.fragment.c(),h(r,"href",a=e.item.to),h(t,"slot","item"),h(t,"class","cursor-pointer"),c=M(r,"click",y)},m(e,a){s(e,t,a),g&&g.m(t,null),p(t,n),p(t,r),f(x,r,null),l=!0},p(o,s){"/typography"===(e=s).item.to?g||((g=ie()).c(),g.m(t,n)):g&&(g.d(1),g=null);var i=o.currentPath||o.item?j($,[{selected:e.currentPath==e.item.to},o.item&&e.item,{dense:!0},{navigation:!0}]):{};x.$set(i),l&&!o.item||a===(a=e.item.to)||h(r,"href",a)},i(e){l||(d(x.$$.fragment,e),l=!0)},o(e){m(x.$$.fragment,e),l=!1},d(e){e&&i(t),g&&g.d(),v(x),c()}}}function ce(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function ue(e){var t,n,r,a,l,c=new D({props:{items:e.menu,$$slots:{default:[ce],item:[le,({item:e})=>({item:e})]},$$scope:{ctx:e}}});return{c(){(t=o("h6")).textContent="Components",n=u(),c.$$.fragment.c(),r=u(),a=o("hr"),h(t,"class","p-6 ml-1 pb-2 text-xs text-gray-900")},m(e,o){s(e,t,o),s(e,n,o),f(c,e,o),s(e,r,o),s(e,a,o),l=!0},p(e,t){var n={};e.menu&&(n.items=t.menu),(e.$$scope||e.currentPath||e.item)&&(n.$$scope={changed:e,ctx:t}),c.$set(n)},i(e){l||(d(c.$$.fragment,e),l=!0)},o(e){m(c.$$.fragment,e),l=!1},d(e){e&&(i(t),i(n)),v(c,e),e&&(i(r),i(a))}}}function he(e){var t,n,r,a=new O({props:{$$slots:{default:[oe]},$$scope:{ctx:e}}}),o=e.$bp&&se(e);return{c(){a.$$.fragment.c(),t=u(),o&&o.c(),n=b()},m(e,i){f(a,e,i),s(e,t,i),o&&o.m(e,i),s(e,n,i),r=!0},p(e,t){var r={};(e.$$scope||e.currentPath)&&(r.$$scope={changed:e,ctx:t}),a.$set(r),t.$bp?o?(o.p(e,t),d(o,1)):((o=se(t)).c(),d(o,1),o.m(n.parentNode,n)):o&&(_(),m(o,1,1,()=>{o=null}),w())},i(e){r||(d(a.$$.fragment,e),d(o),r=!0)},o(e){m(a.$$.fragment,e),m(o),r=!1},d(e){v(a,e),e&&i(t),o&&o.d(e),e&&i(n)}}}function fe(e,t,r){let a,o,s,i,l,c;x(e,B,e=>{r("$showNavMobile",a=e)}),x(e,z,e=>{r("$showNav",s=e)}),x(e,U,e=>{r("$right",i=e)}),x(e,G,e=>{r("$persistent",l=e)}),x(e,K,e=>{r("$elevation",c=e)});const u=function(){if("undefined"==typeof window)return I(!1);const e=I(V(window.innerWidth)),t=({target:t})=>e.set(V(t.innerWidth));return window.addEventListener("resize",t),n(()=>window.removeListener(t)),{subscribe:e.subscribe}}();let h;x(e,u,e=>{r("$bp",o=e)});let{currentPath:f=""}=t;y(()=>{const e=document.querySelector("#app");h=new ae(e),J.notify=(e=>{const t=e?e.pathname:"";r("currentPath",f="/"+t),console.log("NavMenu : routeData",e,t)})}),n(()=>{});return e.$set=(e=>{"currentPath"in e&&r("currentPath",f=e.currentPath)}),{bp:u,currentPath:f,menu:[{to:"/",text:"Home"},{to:"/employee",text:"Employee"},{to:"/department",text:"Department"},{to:"/about",text:"About"}],topMenu:[{to:"/about",text:"About"}],$showNavMobile:a,$bp:o,$showNav:s,$right:i,$persistent:l,$elevation:c,tabs_selected_binding:function(e){r("currentPath",f=e)},click_handler:function(){return B.set(!a)},click_handler_1:function({item:e},t){return n=t,r=e.to,n&&n.preventDefault&&n.preventDefault(),void R.goto(Z+r);var n,r},navigationdrawer_showDesktop_binding:function(e){s=e,z.set(s)},navigationdrawer_showMobile_binding:function(e){a=e,B.set(a)}}}(Z=document.getElementsByTagName("base")[0].getAttribute("href"))&&Z.length>0&&"/"===Z[Z.length-1]&&(Z=Z.substring(0,Z.length-1)),console.log("basePath: ",Z);new class extends r{constructor(t){super(),a(this,t,fe,he,e,["currentPath","menu","topMenu"])}get menu(){return this.$$.ctx.menu}get topMenu(){return this.$$.ctx.topMenu}}({target:document.querySelector("#app-root")});
//# sourceMappingURL=main.js.map
