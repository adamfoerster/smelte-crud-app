import{S as e,i as t,s as n,H as s,b as i,r as o,h as r,u as l,f as a,j as c,A as u,y as d,z as f,F as m,K as h,L as g,m as p,k as $,M as v,e as w,n as b,a as _,p as y,q as k,t as x,g as M,d as L,C as I,G as B,B as N,J as C,T as P,c as R,I as j,v as z,O as q,l as T,x as S,Z as O}from"./chunk-2012ee68.js";import{g as D,h as H,M as E,i as V,C as A,j as G,s as J,I as F,P as K,k as U,l as Z,m as Q,o as W,D as X,B as Y,n as ee}from"./chunk-88b37ae3.js";import{_ as te,a as ne}from"./chunk-3259a9e2.js";function se(e){var t,n=re(e.source,e.settings.field);return{c(){t=d(n)},m(e,n){i(e,t,n)},p(e,s){(e.source||e.settings)&&n!==(n=re(s.source,s.settings.field))&&f(t,n)},i:m,o:m,d(e){e&&c(t)}}}function ie(e){var t,n,u;function d(n){e.switch_instance_value_binding.call(null,n),t=!0,v(()=>t=!1)}var f=e.fieldtype;function m(e){let t={label:e.settings.label};return void 0!==e.source[e.settings.field]&&(t.value=e.source[e.settings.field]),{props:t}}if(f){var w=new f(m(e));h.push(()=>g(w,"value",d)),w.$on("change",e.change_handler),w.$on("click",e.click_handler),w.$on("keydown",e.keydown_handler),w.$on("focus",e.focus_handler)}return{c(){w&&w.$$.fragment.c(),n=s()},m(e,t){w&&p(w,e,t),i(e,n,t),u=!0},p(e,s){var i={};if(e.settings&&(i.label=s.settings.label),(!t&&e.source||e.settings)&&(i.value=s.source[s.settings.field]),f!==(f=s.fieldtype)){if(w){o();const e=w;r(e.$$.fragment,1,0,()=>{$(e,1)}),l()}f?(w=new f(m(s)),h.push(()=>g(w,"value",d)),w.$on("change",s.change_handler),w.$on("click",s.click_handler),w.$on("keydown",s.keydown_handler),w.$on("focus",s.focus_handler),w.$$.fragment.c(),a(w.$$.fragment,1),p(w,n.parentNode,n)):w=null}else f&&w.$set(i)},i(e){u||(w&&a(w.$$.fragment,e),u=!0)},o(e){w&&r(w.$$.fragment,e),u=!1},d(e){e&&c(n),w&&$(w,e)}}}function oe(e){var t,n,u,d,f=[ie,se],m=[];function h(e){return e.edit||e.settings.action?0:1}return t=h(e),n=m[t]=f[t](e),{c(){n.c(),u=s()},m(e,n){m[t].m(e,n),i(e,u,n),d=!0},p(e,s){var i=t;(t=h(s))===i?m[t].p(e,s):(o(),r(m[i],1,1,()=>{m[i]=null}),l(),(n=m[t])||(n=m[t]=f[t](s)).c(),a(n,1),n.m(u.parentNode,u))},i(e){d||(a(n),d=!0)},o(e){r(n),d=!1},d(e){m[t].d(e),e&&c(u)}}}function re(e,t){return"function"==typeof t?t(e):"string"==typeof t?e[t]:void 0}function le(e,t,n){let{settings:s,edit:i,source:o={},fieldtype:r}=t;return e.$set=(e=>{"settings"in e&&n("settings",s=e.settings),"edit"in e&&n("edit",i=e.edit),"source"in e&&n("source",o=e.source),"fieldtype"in e&&n("fieldtype",r=e.fieldtype)}),e.$$.update=((e={settings:1})=>{if(e.settings){let e=D;if(s.component)switch(s.component.toLowerCase()){case"text":e=D;break;case"number":e=H;break;case"date":e=E;break;case"select":e=V;break;case"checkbox":e=A;break;case"action":e=G}n("fieldtype",r=e)}}),{settings:s,edit:i,source:o,fieldtype:r,change_handler:function(t){u(e,t)},click_handler:function(t){u(e,t)},keydown_handler:function(t){u(e,t)},focus_handler:function(t){u(e,t)},switch_instance_value_binding:function(e){o[s.field]=e,n("source",o)}}}class ae extends e{constructor(e){super(),t(this,e,le,oe,n,["settings","edit","source","fieldtype"])}}function ce(e,t,n){const s=Object.create(e);return s.column=t[n],s.j=n,s}function ue(e,t,n){const s=Object.create(e);return s.row=t[n],s.each_value=t,s.i=n,s}const de=()=>({}),fe=()=>({});function me(e,t,n){const s=Object.create(e);return s.column=t[n],s.i=n,s}function he(e){var t,n,s=new F({props:{small:!0,color:"text-gray-400",$$slots:{default:[ge]},$$scope:{ctx:e}}});return{c(){t=w("span"),s.$$.fragment.c(),_(t,"class","sort svelte-1b0gqhw"),x(t,"asc",!e.asc&&e.sortBy===e.column)},m(e,o){i(e,t,o),p(s,t,null),n=!0},p(e,n){var i={};e.$$scope&&(i.$$scope={changed:e,ctx:n}),s.$set(i),(e.asc||e.sortBy||e.columns)&&x(t,"asc",!n.asc&&n.sortBy===n.column)},i(e){n||(a(s.$$.fragment,e),n=!0)},o(e){r(s.$$.fragment,e),n=!1},d(e){e&&c(t),$(s)}}}function ge(e){var t;return{c(){t=d("arrow_downward")},m(e,n){i(e,t,n)},d(e){e&&c(t)}}}function pe(e){var t,n,s,u,m,h,g,p,$=e.column.label||e.column.field;const v=e.$$slots.header,x=R(v,e,fe);var I=!1!==e.column.sortable&&he(e);function B(){return e.click_handler(e)}return{c(){x||(t=w("th"),n=w("div"),I&&I.c(),s=b(),u=w("span"),m=d($),h=b()),x&&x.c(),x||(_(n,"class","sort-wrapper svelte-1b0gqhw"),_(t,"class","capitalize svelte-1b0gqhw"),g=y(t,"click",B))},l(e){x&&x.l(e)},m(e,o){x?x.m(e,o):(i(e,t,o),k(t,n),I&&I.m(n,null),k(n,s),k(n,u),k(u,m),i(e,h,o)),p=!0},p(t,i){e=i,x||(!1!==e.column.sortable?I?(I.p(t,e),a(I,1)):((I=he(e)).c(),a(I,1),I.m(n,s)):I&&(o(),r(I,1,1,()=>{I=null}),l()),p&&!t.columns||$===($=e.column.label||e.column.field)||f(m,$)),x&&x.p&&t.$$scope&&x.p(M(v,e,t,de),L(v,e,fe))},i(e){p||(a(I),a(x,e),p=!0)},o(e){r(I),r(x,e),p=!1},d(e){x||(e&&c(t),I&&I.d(),e&&c(h),g()),x&&x.d(e)}}}function $e(e){var t,n,s,o=new K({});return{c(){t=w("div"),o.$$.fragment.c(),_(t,"class","absolute w-full")},m(e,n){i(e,t,n),p(o,t,null),s=!0},i(e){s||(a(o.$$.fragment,e),I(()=>{n||(n=B(t,J,{},!0)),n.run(1)}),s=!0)},o(e){r(o.$$.fragment,e),n||(n=B(t,J,{},!1)),n.run(0),s=!1},d(e){e&&c(t),$(o),e&&n&&n.end()}}}function ve(e){var t,n,s,o;function l(t){e.datacol_source_binding.call(null,t,e),n=!0,v(()=>n=!1)}let u={edit:e.edit,settings:_e(e.column,e.i,e.j)};void 0!==e.row&&(u.source=e.row);var d=new ae({props:u});return h.push(()=>g(d,"source",l)),d.$on("change",e.change_handler),d.$on("click",function(...t){return e.click_handler_1(e,...t)}),d.$on("keydown",e.arrow),d.$on("focus",function(){return e.focus_handler(e)}),{c(){t=w("td"),d.$$.fragment.c(),_(t,"class",s=(e.column.class||"")+" "+(!e.edit&&e.column.action||e.edit?"nopadding":"")+" "+(e.column.numeric?"numeric":"")+" "+(e.column.truncate?" truncate":"")+" svelte-1b0gqhw"),N(t,"width",e.column.width?e.column.width:"auto")},m(e,n){i(e,t,n),p(d,t,null),o=!0},p(i,r){e=r;var l={};i.edit&&(l.edit=e.edit),(i.setRowCol||i.columns)&&(l.settings=_e(e.column,e.i,e.j)),!n&&i.rows&&(l.source=e.row),d.$set(l),o&&!i.columns&&!i.edit||s===(s=(e.column.class||"")+" "+(!e.edit&&e.column.action||e.edit?"nopadding":"")+" "+(e.column.numeric?"numeric":"")+" "+(e.column.truncate?" truncate":"")+" svelte-1b0gqhw")||_(t,"class",s),o&&!i.columns||N(t,"width",e.column.width?e.column.width:"auto")},i(e){o||(a(d.$$.fragment,e),o=!0)},o(e){r(d.$$.fragment,e),o=!1},d(e){e&&c(t),$(d)}}}function we(e){for(var t,n,s,u=e.columns,d=[],f=0;f<u.length;f+=1)d[f]=ve(ce(e,u,f));const m=e=>r(d[e],1,1,()=>{d[e]=null});return{c(){t=w("tr");for(var e=0;e<d.length;e+=1)d[e].c();n=b(),_(t,"class","svelte-1b0gqhw")},m(e,o){i(e,t,o);for(var r=0;r<d.length;r+=1)d[r].m(t,null);k(t,n),s=!0},p(e,s){if(e.columns||e.edit||e.setRowCol||e.rows){u=s.columns;for(var i=0;i<u.length;i+=1){const o=ce(s,u,i);d[i]?(d[i].p(e,o),a(d[i],1)):(d[i]=ve(o),d[i].c(),a(d[i],1),d[i].m(t,n))}for(o(),i=u.length;i<d.length;i+=1)m(i);l()}},i(e){if(!s){for(var t=0;t<u.length;t+=1)a(d[t]);s=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)r(d[e]);s=!1},d(e){e&&c(t),C(d,e)}}}function be(e){for(var t,n,s,u,d,f,m,h=e.columns,g=[],p=0;p<h.length;p+=1)g[p]=pe(me(e,h,p));const $=e=>r(g[e],1,1,()=>{g[e]=null});var v=e.loading&&!e.hideProgress&&$e(),y=e.rows,x=[];for(p=0;p<y.length;p+=1)x[p]=we(ue(e,y,p));const M=e=>r(x[e],1,1,()=>{x[e]=null});return{c(){t=w("table"),n=w("thead"),s=w("tr");for(var i=0;i<g.length;i+=1)g[i].c();u=b(),v&&v.c(),d=b(),f=w("tbody");for(i=0;i<x.length;i+=1)x[i].c();_(s,"class","svelte-1b0gqhw"),_(n,"class","items-center"),_(t,"class",e.wrapperClasses)},m(e,o){i(e,t,o),k(t,n),k(n,s);for(var r=0;r<g.length;r+=1)g[r].m(s,null);k(t,u),v&&v.m(t,null),k(t,d),k(t,f);for(r=0;r<x.length;r+=1)x[r].m(f,null);m=!0},p(e,n){if(e.columns||e.asc||e.sortBy||e.$$scope){h=n.columns;for(var i=0;i<h.length;i+=1){const t=me(n,h,i);g[i]?(g[i].p(e,t),a(g[i],1)):(g[i]=pe(t),g[i].c(),a(g[i],1),g[i].m(s,null))}for(o(),i=h.length;i<g.length;i+=1)$(i);l()}if(n.loading&&!n.hideProgress?v?a(v,1):((v=$e()).c(),a(v,1),v.m(t,d)):v&&(o(),r(v,1,1,()=>{v=null}),l()),e.columns||e.edit||e.setRowCol||e.rows){y=n.rows;for(i=0;i<y.length;i+=1){const t=ue(n,y,i);x[i]?(x[i].p(e,t),a(x[i],1)):(x[i]=we(t),x[i].c(),a(x[i],1),x[i].m(f,null))}for(o(),i=y.length;i<x.length;i+=1)M(i);l()}m&&!e.wrapperClasses||_(t,"class",n.wrapperClasses)},i(e){if(!m){for(var t=0;t<h.length;t+=1)a(g[t]);a(v);for(t=0;t<y.length;t+=1)a(x[t]);m=!0}},o(e){g=g.filter(Boolean);for(let e=0;e<g.length;e+=1)r(g[e]);r(v),x=x.filter(Boolean);for(let e=0;e<x.length;e+=1)r(x[e]);m=!1},d(e){e&&c(t),C(g,e),v&&v.d(),C(x,e)}}}function _e(e,t,n){return e.dataset={row:t,col:n},e}function ye(e,t,n){const s=j();let{edit:i=!0,columns:o=[],rows:r=[],selected:l=null,loading:a=!1,hideProgress:c=!1,wrapperClasses:u="rounded elevation-3 relative text-sm overflow-x-auto"}=t;P(()=>{});let{asc:d=!1}=t,f=null;let m,{$$slots:h={},$$scope:g}=t;return e.$set=(e=>{"edit"in e&&n("edit",i=e.edit),"columns"in e&&n("columns",o=e.columns),"rows"in e&&n("rows",r=e.rows),"selected"in e&&n("selected",l=e.selected),"loading"in e&&n("loading",a=e.loading),"hideProgress"in e&&n("hideProgress",c=e.hideProgress),"wrapperClasses"in e&&n("wrapperClasses",u=e.wrapperClasses),"asc"in e&&n("asc",d=e.asc),"$$scope"in e&&n("$$scope",g=e.$$scope)}),e.$$.update=((e={sortBy:1})=>{e.sortBy&&(m=function(e){if(!e)return r;if(e.sort)return e.sort(r);const t=r.sort((t,n)=>{const s=e.value?e.value(t):t[e.field],i=e.value?e.value(n):n[e.field],o=d?s:i,r=d?i:s;return"number"==typeof s?o-r:(""+o).localeCompare(r)});return console.log(t),t}(f))}),{dispatch:s,edit:i,columns:o,rows:r,selected:l,loading:a,hideProgress:c,wrapperClasses:u,arrow:function(e){const{target:t,keyCode:s}=e;if(s<37||s>40)return;let i=+t.dataset.row,a=+t.dataset.col;37===s&&(a=Math.max(0,a-1)),39===s&&(a=Math.min(a+1,o.length-1)),38===s&&(i=Math.max(0,i-1)),40===s&&(i=Math.min(i+1,r.length-1)),n("selected",l=[i,a])},asc:d,sortBy:f,click_handler:function({column:e}){!1!==e.sortable&&(n("asc",d=f===e&&!d),n("sortBy",f=e))},datacol_source_binding:function(e,{row:t,each_value:s,i:i}){s[i]=e,n("rows",r)},change_handler:function(e){return s("update",{event:e})},click_handler_1:function({row:e,column:t},n){return function(e,t,n){e&&e.preventDefault(),n&&n(t)}(n,e,t.action)},focus_handler:function({i:e,j:t}){const s=l=[e,t];return n("selected",l),s},$$slots:h,$$scope:g}}class ke extends e{constructor(e){super(),t(this,e,ye,be,n,["edit","columns","rows","selected","loading","hideProgress","wrapperClasses","asc"])}}function xe(e){var t,n,s,u,d,f=[e.props,e.settings];function m(t){e.switch_instance_value_binding.call(null,t),n=!0,v(()=>n=!1)}function b(t){e.switch_instance_submit_binding.call(null,t),s=!0,v(()=>s=!1)}function _(t){e.switch_instance_error_binding.call(null,t),u=!0,v(()=>u=!1)}var y=e.fieldtype;function k(e){let t={};for(var n=0;n<f.length;n+=1)t=T(t,f[n]);return void 0!==e.value&&(t.value=e.value),void 0!==e.submit&&(t.submit=e.submit),void 0!==e.error&&(t.error=e.error),{props:t}}if(y){var x=new y(k(e));h.push(()=>g(x,"value",m)),h.push(()=>g(x,"submit",b)),h.push(()=>g(x,"error",_))}return{c(){t=w("div"),x&&x.$$.fragment.c()},m(n,s){i(n,t,s),x&&p(x,t,null),e.div_binding(t),d=!0},p(e,i){var c=e.props||e.settings?z(f,[e.props&&i.props,e.settings&&i.settings]):{};if(!n&&e.value&&(c.value=i.value),!s&&e.submit&&(c.submit=i.submit),!u&&e.error&&(c.error=i.error),y!==(y=i.fieldtype)){if(x){o();const e=x;r(e.$$.fragment,1,0,()=>{$(e,1)}),l()}y?(x=new y(k(i)),h.push(()=>g(x,"value",m)),h.push(()=>g(x,"submit",b)),h.push(()=>g(x,"error",_)),x.$$.fragment.c(),a(x.$$.fragment,1),p(x,t,null)):x=null}else y&&x.$set(c)},i(e){d||(x&&a(x.$$.fragment,e),d=!0)},o(e){x&&r(x.$$.fragment,e),d=!1},d(n){n&&c(t),x&&$(x),e.div_binding(null)}}}const Me="input, select, textarea";function Le(e,t,n){let s,{settings:i={},component:o=null,value:r="",fieldtype:l}=t,a=!1,c="",u=t;function d(e,t){n("error",c=e),null!=t&&n("submit",a=t)}function f(e){a&&n("error",c=e.target.checkValidity()?"":e.target.validationMessage)}return q(()=>{const e=s.querySelector(Me);e&&(e.setError=d,e.onkeyup=f)}),e.$set=(e=>{n("$$props",t=T(T({},t),e)),"settings"in e&&n("settings",i=e.settings),"component"in e&&n("component",o=e.component),"value"in e&&n("value",r=e.value),"fieldtype"in e&&n("fieldtype",l=e.fieldtype)}),e.$$.update=((e={component:1})=>{if(e.component){let e=U;if(o)switch(o.toLowerCase()){case"currency":e=Z;break;case"masked":e=E;break;case"number":e=H;break;case"select":e=Q}n("fieldtype",l=e)}}),{settings:i,component:o,value:r,fieldtype:l,self:s,submit:a,error:c,props:u,switch_instance_value_binding:function(e){n("value",r=e)},switch_instance_submit_binding:function(e){n("submit",a=e)},switch_instance_error_binding:function(e){n("error",c=e)},div_binding:function(e){h[e?"unshift":"push"](()=>{n("self",s=e)})},$$props:t=S(t)}}class Ie extends e{constructor(e){super(),t(this,e,Le,xe,n,["settings","component","value","fieldtype"])}}function Be(e){var t,n=e.source[e.field];return{c(){t=d(n)},m(e,n){i(e,t,n)},p(e,s){(e.source||e.field)&&n!==(n=s.source[s.field])&&f(t,n)},i:m,o:m,d(e){e&&c(t)}}}function Ne(e){var t,n;function s(n){e.formfield_value_binding.call(null,n),t=!0,v(()=>t=!1)}let i={settings:e.fieldProps,component:e.component};void 0!==e.source[e.field]&&(i.value=e.source[e.field]);var o=new Ie({props:i});return h.push(()=>g(o,"value",s)),{c(){o.$$.fragment.c()},m(e,t){p(o,e,t),n=!0},p(e,n){var s={};e.fieldProps&&(s.settings=n.fieldProps),e.component&&(s.component=n.component),(!t&&e.source||e.field)&&(s.value=n.source[n.field]),o.$set(s)},i(e){n||(a(o.$$.fragment,e),n=!0)},o(e){r(o.$$.fragment,e),n=!1},d(e){$(o,e)}}}function Ce(e){var t,n,s,u,d=[Ne,Be],f=[];function m(e){return e.edit?0:e.displayable?1:-1}return~(n=m(e))&&(s=f[n]=d[n](e)),{c(){t=w("div"),s&&s.c(),_(t,"class",e.classes)},m(e,s){i(e,t,s),~n&&f[n].m(t,null),u=!0},p(e,i){var c=n;(n=m(i))===c?~n&&f[n].p(e,i):(s&&(o(),r(f[c],1,1,()=>{f[c]=null}),l()),~n?((s=f[n])||(s=f[n]=d[n](i)).c(),a(s,1),s.m(t,null)):s=null),u&&!e.classes||_(t,"class",i.classes)},i(e){u||(a(s),u=!0)},o(e){r(s),u=!1},d(e){e&&c(t),~n&&f[n].d()}}}function Pe(e,t,n){let s,i,o,r,{settings:l={},source:a={},edit:c,classes:u}=t;return e.$set=(e=>{"settings"in e&&n("settings",l=e.settings),"source"in e&&n("source",a=e.source),"edit"in e&&n("edit",c=e.edit),"classes"in e&&n("classes",u=e.classes)}),e.$$.update=((e={settings:1,source:1,field:1})=>{if(e.settings&&l.col){let e=l.col.split(" ");e=e.filter(e=>e&&e.trim()).map(e=>"col-"+e),n("classes",u=e.join(" ").trim())}e.settings&&n("field",s=l.field),e.settings&&n("component",i=l.component),(e.source||e.field)&&n("displayable",o=a&&a.hasOwnProperty(s)&&null!=a[s]),e.settings&&n("fieldProps",r=W(l,"field","component","row","col","settings","withSettings","fieldtype"))}),{settings:l,source:a,edit:c,classes:u,field:s,component:i,displayable:o,fieldProps:r,formfield_value_binding:function(e){a[s]=e,n("source",a)}}}class Re extends e{constructor(e){super(),t(this,e,Pe,Ce,n,["settings","source","edit","classes"])}}function je(e,t,n){const s=Object.create(e);return s.col=t[n],s}function ze(e,t,n){const s=Object.create(e);return s.row=t[n],s}function qe(e){var t,n,s=e.row.subtitle;return{c(){t=w("div"),n=d(s),_(t,"class","row subtitle svelte-zafge4")},m(e,s){i(e,t,s),k(t,n)},p(e,t){e.fieldRows&&s!==(s=t.row.subtitle)&&f(n,s)},d(e){e&&c(t)}}}function Te(e){var t,n;function s(n){e.formcol_source_binding.call(null,n),t=!0,v(()=>t=!1)}let i={settings:e.col,edit:e.edit};void 0!==e.item&&(i.source=e.item);var o=new Re({props:i});return h.push(()=>g(o,"source",s)),{c(){o.$$.fragment.c()},m(e,t){p(o,e,t),n=!0},p(e,n){var s={};e.fieldRows&&(s.settings=n.col),e.edit&&(s.edit=n.edit),!t&&e.item&&(s.source=n.item),o.$set(s)},i(e){n||(a(o.$$.fragment,e),n=!0)},o(e){r(o.$$.fragment,e),n=!1},d(e){$(o,e)}}}function Se(e){for(var t,n,s,u,d,f=e.row.subtitle&&qe(e),m=e.row.columns,h=[],g=0;g<m.length;g+=1)h[g]=Te(je(e,m,g));const p=e=>r(h[e],1,1,()=>{h[e]=null});return{c(){f&&f.c(),t=b(),n=w("div");for(var i=0;i<h.length;i+=1)h[i].c();s=b(),_(n,"class",u="row "+e.className+" svelte-zafge4")},m(e,o){f&&f.m(e,o),i(e,t,o),i(e,n,o);for(var r=0;r<h.length;r+=1)h[r].m(n,null);k(n,s),d=!0},p(e,i){if(i.row.subtitle?f?f.p(e,i):((f=qe(i)).c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null),e.fieldRows||e.edit||e.item){m=i.row.columns;for(var r=0;r<m.length;r+=1){const t=je(i,m,r);h[r]?(h[r].p(e,t),a(h[r],1)):(h[r]=Te(t),h[r].c(),a(h[r],1),h[r].m(n,s))}for(o(),r=m.length;r<h.length;r+=1)p(r);l()}d&&!e.className||u===(u="row "+i.className+" svelte-zafge4")||_(n,"class",u)},i(e){if(!d){for(var t=0;t<m.length;t+=1)a(h[t]);d=!0}},o(e){h=h.filter(Boolean);for(let e=0;e<h.length;e+=1)r(h[e]);d=!1},d(e){f&&f.d(e),e&&(c(t),c(n)),C(h,e)}}}function Oe(e){for(var t,n,s=e.fieldRows,u=[],d=0;d<s.length;d+=1)u[d]=Se(ze(e,s,d));const f=e=>r(u[e],1,1,()=>{u[e]=null});return{c(){t=w("form");for(var e=0;e<u.length;e+=1)u[e].c();_(t,"class","form-horizontal")},m(s,o){i(s,t,o);for(var r=0;r<u.length;r+=1)u[r].m(t,null);e.form_1_binding(t),n=!0},p(e,n){if(e.className||e.fieldRows||e.edit||e.item){s=n.fieldRows;for(var i=0;i<s.length;i+=1){const o=ze(n,s,i);u[i]?(u[i].p(e,o),a(u[i],1)):(u[i]=Se(o),u[i].c(),a(u[i],1),u[i].m(t,null))}for(o(),i=s.length;i<u.length;i+=1)f(i);l()}},i(e){if(!n){for(var t=0;t<s.length;t+=1)a(u[t]);n=!0}},o(e){u=u.filter(Boolean);for(let e=0;e<u.length;e+=1)r(u[e]);n=!1},d(n){n&&c(t),C(u,n),e.form_1_binding(null)}}}function De(e,t,n){let{form:s=null,item:i={},columns:o=[],className:r="",edit:l=!0,fieldRows:a}=t;return e.$set=(e=>{"form"in e&&n("form",s=e.form),"item"in e&&n("item",i=e.item),"columns"in e&&n("columns",o=e.columns),"className"in e&&n("className",r=e.className),"edit"in e&&n("edit",l=e.edit),"fieldRows"in e&&n("fieldRows",a=e.fieldRows)}),e.$$.update=((e={columns:1})=>{if(e.columns){const e=Math.max.apply(Math,o.map(e=>e.row)),t=[];for(let n=0;n<=e;n++)t.push({columns:[]});o.forEach(e=>{const n=t[e.row];n&&n.columns&&(n.columns.push(e),e.subtitle&&(n.subtitle=e.subtitle))}),console.log("computed - rows",t),n("fieldRows",a=t)}}),{form:s,item:i,columns:o,className:r,edit:l,fieldRows:a,formcol_source_binding:function(e){n("item",i=e)},form_1_binding:function(e){h[e?"unshift":"push"](()=>{n("form",s=e)})}}}class He extends e{constructor(e){super(),t(this,e,De,Oe,n,["form","item","columns","className","edit","fieldRows"])}}function Ee(e){var t;return{c(){t=w("h5"),_(t,"slot","title")},m(n,s){i(n,t,s),t.innerHTML=e.formTitle},p(e,n){e.formTitle&&(t.innerHTML=n.formTitle)},d(e){e&&c(t)}}}function Ve(e){var t;return{c(){t=d("Close")},m(e,n){i(e,t,n)},d(e){e&&c(t)}}}function Ae(e){var t;return{c(){t=d("Save Changes")},m(e,n){i(e,t,n)},d(e){e&&c(t)}}}function Ge(e){var t,n,s,o=new Y({props:{$$slots:{default:[Ve]},$$scope:{ctx:e}}});o.$on("click",e.click_handler);var l=new Y({props:{$$slots:{default:[Ae]},$$scope:{ctx:e}}});return l.$on("click",e.click_handler_1),{c(){t=w("div"),o.$$.fragment.c(),n=b(),l.$$.fragment.c(),_(t,"slot","actions")},m(e,r){i(e,t,r),p(o,t,null),k(t,n),p(l,t,null),s=!0},p(e,t){var n={};e.$$scope&&(n.$$scope={changed:e,ctx:t}),o.$set(n);var s={};e.$$scope&&(s.$$scope={changed:e,ctx:t}),l.$set(s)},i(e){s||(a(o.$$.fragment,e),a(l.$$.fragment,e),s=!0)},o(e){r(o.$$.fragment,e),r(l.$$.fragment,e),s=!1},d(e){e&&c(t),$(o),$(l)}}}function Je(e){var t,n,s,o;const l=e.$$slots.default,u=R(l,e,null);return{c(){t=b(),n=w("div"),u&&u.c(),s=b(),_(n,"class","tall-dialog svelte-15r4t6p")},l(e){u&&u.l(div_nodes)},m(e,r){i(e,t,r),i(e,n,r),u&&u.m(n,null),i(e,s,r),o=!0},p(e,t){u&&u.p&&e.$$scope&&u.p(M(l,t,e,null),L(l,t,null))},i(e){o||(a(u,e),o=!0)},o(e){r(u,e),o=!1},d(e){e&&(c(t),c(n)),u&&u.d(e),e&&c(s)}}}function Fe(e){var t,n;function s(n){e.dialog_value_binding.call(null,n),t=!0,v(()=>t=!1)}let i={$$slots:{default:[Je],actions:[Ge],title:[Ee]},$$scope:{ctx:e}};void 0!==e.showModal&&(i.value=e.showModal);var o=new X({props:i});return h.push(()=>g(o,"value",s)),{c(){o.$$.fragment.c()},m(e,t){p(o,e,t),n=!0},p(e,n){var s={};(e.$$scope||e.formTitle)&&(s.$$scope={changed:e,ctx:n}),!t&&e.showModal&&(s.value=n.showModal),o.$set(s)},i(e){n||(a(o.$$.fragment,e),n=!0)},o(e){r(o.$$.fragment,e),n=!1},d(e){$(o,e)}}}function Ke(e,t,n){let{showModal:s=!1}=t;const i=j();let o,{modalSize:r="default",title:l=""}=t,{$$slots:a={},$$scope:c}=t;return e.$set=(e=>{"showModal"in e&&n("showModal",s=e.showModal),"modalSize"in e&&n("modalSize",r=e.modalSize),"title"in e&&n("title",l=e.title),"$$scope"in e&&n("$$scope",c=e.$$scope)}),e.$$.update=((e={title:1})=>{e.title&&n("formTitle",o=l||"&nbsp")}),{showModal:s,dispatch:i,modalSize:r,title:l,formTitle:o,click_handler:function(){return i("close")},click_handler_1:function(){return i("save")},dialog_value_binding:function(e){n("showModal",s=e)},$$slots:a,$$scope:c}}class Ue extends e{constructor(e){super(),t(this,e,Ke,Fe,n,["showModal","modalSize","title"])}}var Ze=function(){function e(){}return e.makeRequest=function(e,t,n,s){return te(this,void 0,void 0,function(){var i,o,r;return ne(this,function(l){switch(l.label){case 0:return i={mode:"cors",method:t,headers:n},s&&(i.body=JSON.stringify(s)),[4,fetch("https://safe-springs-35306.herokuapp.com/"+e,i)];case 1:return o=l.sent(),(r=o.headers.get("content-type"))&&-1!==r.indexOf("application/json")?[2,o.json()]:[2,o.text()]}})})},e.makeHeaders=function(){var e=new Headers;return e.append("Content-Type","application/json"),e},e.get=function(t){return te(this,void 0,void 0,function(){var n=this;return ne(this,function(s){return[2,new Promise(function(s,i){return te(n,void 0,void 0,function(){var n,o,r;return ne(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),n=e.makeHeaders(),[4,e.makeRequest(t,"GET",n)];case 1:return o=l.sent(),s(o),[3,3];case 2:return r=l.sent(),i(r),[3,3];case 3:return[2]}})})})]})})},e.post=function(t,n){return te(this,void 0,void 0,function(){var s=this;return ne(this,function(i){return[2,new Promise(function(i,o){return te(s,void 0,void 0,function(){var s,r,l;return ne(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),s=e.makeHeaders(),[4,e.makeRequest(t,"POST",s,n)];case 1:return r=a.sent(),i(r),[3,3];case 2:return l=a.sent(),o(l),[3,3];case 3:return[2]}})})})]})})},e.put=function(t,n){return te(this,void 0,void 0,function(){var s=this;return ne(this,function(i){return[2,new Promise(function(i,o){return te(s,void 0,void 0,function(){var s,r,l;return ne(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),s=e.makeHeaders(),[4,e.makeRequest(t,"PUT",s,n)];case 1:return r=a.sent(),i(r),[3,3];case 2:return l=a.sent(),o(l),[3,3];case 3:return[2]}})})})]})})},e.delete=function(t){return te(this,void 0,void 0,function(){var n=this;return ne(this,function(s){return[2,new Promise(function(s,i){return te(n,void 0,void 0,function(){var n,o,r;return ne(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),n=e.makeHeaders(),[4,e.makeRequest(t,"DELETE",n)];case 1:return o=l.sent(),s(o),[3,3];case 2:return r=l.sent(),i(r),[3,3];case 3:return[2]}})})})]})})},e}(),Qe=function(){function e(){}return e.getListByName=function(t,n){return te(this,void 0,void 0,function(){var s,i,o;return ne(this,function(r){switch(r.label){case 0:s=e.setLoading(t),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e.getList(n)];case 2:return i=r.sent(),s(),[2,i];case 3:return o=r.sent(),console.error("getListByName:",o),[3,4];case 4:return[2,null]}})})},e.getList=function(e){return te(this,void 0,void 0,function(){return ne(this,function(t){return[2,Ze.get("api/"+e)]})})},e.save=function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){return t.id?[2,Ze.put("api/"+e,t)]:[2,Ze.post("api/"+e,t)]})})},e.remove=function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){return[2,Ze.delete("api/"+e+"/"+t)]})})},e.setLoading=function(e){var t=Date.now();return e.$set({loading:!0}),function(){Date.now()-t<500?setTimeout(function(){e.$set({loading:!1})},500):e.$set({loading:!1})}},e}(),We={getListByName:function(e){return te(this,void 0,void 0,function(){return ne(this,function(t){return[2,Qe.getListByName(this,e)]})})},getList:function(){return te(this,void 0,void 0,function(){var e;return ne(this,function(t){switch(t.label){case 0:return[4,this.getListByName(this.path)];case 1:return e=t.sent(),this.$set({list:e}),[2]}})})},add:function(e){e&&e.preventDefault(),this.$set({showModal:!0,selectedItem:{}})},edit:function(e,t){t&&t.preventDefault(),this.$set({showModal:!0,selectedItem:Object.assign({},e)})},save:function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return t&&t.preventDefault(),function(e){var t=e.checkValidity();if(!t)for(var n=0;n<e.length;n++){var s=e[n];s.checkValidity&&(s.checkValidity()||console.log(s.validationMessage),s.setError&&s.setError(s.validationMessage,!0))}return t}(this.form.querySelector("form"))?[4,Qe.save(this.path,e)]:[2];case 1:return n.sent(),this.close(),this.getList(),[2]}})})},remove:function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return t&&t.preventDefault(),e&&e.id?[4,ee("Are you sure to delete this record?")]:[2];case 1:return n.sent()?[4,Qe.remove(this.path,e)]:[3,3];case 2:n.sent(),this.getList(),n.label=3;case 3:return[2]}})})},close:function(){this.$set({showModal:!1,selectedItem:null})}};function Xe(e){var t;return{c(){t=d("Add New")},m(e,n){i(e,t,n)},d(e){e&&c(t)}}}function Ye(e){var t,n;function s(n){e.formgrid_item_binding.call(null,n),t=!0,v(()=>t=!1)}let i={columns:e.fielddata};void 0!==e.selectedItem&&(i.item=e.selectedItem);var o=new He({props:i});return h.push(()=>g(o,"item",s)),{c(){o.$$.fragment.c()},m(e,t){p(o,e,t),n=!0},p(e,n){var s={};e.fielddata&&(s.columns=n.fielddata),!t&&e.selectedItem&&(s.item=n.selectedItem),o.$set(s)},i(e){n||(a(o.$$.fragment,e),n=!0)},o(e){r(o.$$.fragment,e),n=!1},d(e){$(o,e)}}}function et(e){var t,n,s,o,l,u,m,y,x,M,L,I,B,N;function C(t){e.datagrid_rows_binding.call(null,t),u=!0,v(()=>u=!1)}function P(t){e.datagrid_columns_binding.call(null,t),m=!0,v(()=>m=!1)}let R={edit:!1,loading:e.loading};void 0!==e.list&&(R.rows=e.list),void 0!==e.columndata&&(R.columns=e.columndata);var j=new ke({props:R});h.push(()=>g(j,"rows",C)),h.push(()=>g(j,"columns",P));var z=new Y({props:{$$slots:{default:[Xe]},$$scope:{ctx:e}}});function q(t){e.modal_showModal_binding.call(null,t),B=!0,v(()=>B=!1)}z.$on("click",e.add);let T={title:e.selectedItem?e.selectedItem.name:"",$$slots:{default:[Ye]},$$scope:{ctx:e}};void 0!==e.showModal&&(T.showModal=e.showModal);var S=new Ue({props:T});return h.push(()=>g(S,"showModal",q)),S.$on("close",e.close),S.$on("save",e.save_handler),{c(){t=w("div"),n=w("h4"),s=d(e.title),o=b(),l=w("div"),j.$$.fragment.c(),y=b(),x=w("div"),z.$$.fragment.c(),M=b(),L=w("div"),I=w("div"),S.$$.fragment.c(),_(n,"class","capitalize pb-8"),_(l,"class","py-2"),_(x,"class","py-2"),_(I,"class","form-group")},m(r,a){i(r,t,a),k(t,n),k(n,s),k(t,o),k(t,l),p(j,l,null),k(t,y),k(t,x),p(z,x,null),k(t,M),k(t,L),k(L,I),p(S,I,null),e.div2_binding(I),N=!0},p(e,t){N&&!e.title||f(s,t.title);var n={};e.loading&&(n.loading=t.loading),!u&&e.list&&(n.rows=t.list),!m&&e.columndata&&(n.columns=t.columndata),j.$set(n);var i={};e.$$scope&&(i.$$scope={changed:e,ctx:t}),z.$set(i);var o={};e.selectedItem&&(o.title=t.selectedItem?t.selectedItem.name:""),(e.$$scope||e.fielddata||e.selectedItem)&&(o.$$scope={changed:e,ctx:t}),!B&&e.showModal&&(o.showModal=t.showModal),S.$set(o)},i(e){N||(a(j.$$.fragment,e),a(z.$$.fragment,e),a(S.$$.fragment,e),N=!0)},o(e){r(j.$$.fragment,e),r(z.$$.fragment,e),r(S.$$.fragment,e),N=!1},d(n){n&&c(t),$(j),$(z),$(S),e.div2_binding(null)}}}function tt(e,t,n){let{title:s="",columndata:i=[],partial:o=null,instance:r=null,list:l=[],showModal:a=!1,selectedItem:c={},path:u="",fielddata:d=[],form:f=null,loading:m=!1}=t,g=!1;const p=Object.assign({},We);function $(e,t){p.save.call(r,e,t)}function v(){p.getList.call(r)}return e.$set=(e=>{"title"in e&&n("title",s=e.title),"columndata"in e&&n("columndata",i=e.columndata),"partial"in e&&n("partial",o=e.partial),"instance"in e&&n("instance",r=e.instance),"list"in e&&n("list",l=e.list),"showModal"in e&&n("showModal",a=e.showModal),"selectedItem"in e&&n("selectedItem",c=e.selectedItem),"path"in e&&n("path",u=e.path),"fielddata"in e&&n("fielddata",d=e.fielddata),"form"in e&&n("form",f=e.form),"loading"in e&&n("loading",m=e.loading)}),e.$$.update=((e={path:1,instance:1,initialized:1,partial:1})=>{(e.path||e.instance||e.initialized)&&u&&r&&(g||n("initialized",g=!0)),(e.initialized||e.partial||e.instance)&&g&&o.oncreate(r).then(v)}),{title:s,columndata:i,partial:o,instance:r,list:l,showModal:a,selectedItem:c,path:u,fielddata:d,form:f,loading:m,close:function(){p.close.call(r)},add:function(e){p.add.call(r,e)},save:$,remove:function(e,t){p.remove.call(r,e,t)},edit:function(e,t){p.edit.call(r,e,t)},getList:v,getListByName:function(e){return p.getListByName.call(r,e)},datagrid_rows_binding:function(e){n("list",l=e)},datagrid_columns_binding:function(e){n("columndata",i=e)},formgrid_item_binding:function(e){n("selectedItem",c=e)},modal_showModal_binding:function(e){n("showModal",a=e)},save_handler:function(e){return $(c,e)},div2_binding:function(e){h[e?"unshift":"push"](()=>{n("form",f=e)})}}}export default class extends e{constructor(e){super(),t(this,e,tt,et,n,["title","columndata","partial","instance","list","showModal","selectedItem","path","fielddata","form","loading","close","remove","edit","getList","getListByName"])}get title(){return this.$$.ctx.title}set title(e){this.$set({title:e}),O()}get columndata(){return this.$$.ctx.columndata}set columndata(e){this.$set({columndata:e}),O()}get partial(){return this.$$.ctx.partial}set partial(e){this.$set({partial:e}),O()}get instance(){return this.$$.ctx.instance}set instance(e){this.$set({instance:e}),O()}get list(){return this.$$.ctx.list}set list(e){this.$set({list:e}),O()}get showModal(){return this.$$.ctx.showModal}set showModal(e){this.$set({showModal:e}),O()}get selectedItem(){return this.$$.ctx.selectedItem}set selectedItem(e){this.$set({selectedItem:e}),O()}get path(){return this.$$.ctx.path}set path(e){this.$set({path:e}),O()}get fielddata(){return this.$$.ctx.fielddata}set fielddata(e){this.$set({fielddata:e}),O()}get form(){return this.$$.ctx.form}set form(e){this.$set({form:e}),O()}get loading(){return this.$$.ctx.loading}set loading(e){this.$set({loading:e}),O()}get close(){return this.$$.ctx.close}get remove(){return this.$$.ctx.remove}get edit(){return this.$$.ctx.edit}get getList(){return this.$$.ctx.getList}get getListByName(){return this.$$.ctx.getListByName}}