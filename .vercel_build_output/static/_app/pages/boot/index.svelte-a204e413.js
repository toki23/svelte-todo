import{S as t,i as s,s as a,j as e,m as n,o as l,x as r,u as o,v as c,e as f,t as i,k as h,c as u,a as m,g as p,d as g,n as d,b as v,f as $,F as b,H as x,I as D,w as E,U as I,J as O,r as T}from"../../chunks/vendor-f4bbce36.js";import j from"./todo.svelte-3a9fe2f6.js";function k(t,s,a){const e=t.slice();return e[5]=s[a],e[7]=a,e}function y(t){let s,a;return s=new j({props:{item:t[5],del:t[3],index:t[7]}}),{c(){e(s.$$.fragment)},l(t){n(s.$$.fragment,t)},m(t,e){l(s,t,e),a=!0},p(t,a){const e={};1&a&&(e.item=t[5]),s.$set(e)},i(t){a||(r(s.$$.fragment,t),a=!0)},o(t){o(s.$$.fragment,t),a=!1},d(t){c(s,t)}}}function U(t){let s,a,e,n,l,c,j,U,V,w,B,H,N,F=t[0],J=[];for(let r=0;r<F.length;r+=1)J[r]=y(k(t,F,r));const P=t=>o(J[t],1,1,(()=>{J[t]=null}));return{c(){s=f("div"),a=f("h1"),e=i("TODOリスト"),n=h(),l=f("div");for(let t=0;t<J.length;t+=1)J[t].c();c=h(),j=f("div"),U=f("input"),V=f("button"),w=i("追加"),this.h()},l(t){s=u(t,"DIV",{class:!0});var r=m(s);a=u(r,"H1",{});var o=m(a);e=p(o,"TODOリスト"),o.forEach(g),n=d(r),l=u(r,"DIV",{class:!0});var f=m(l);for(let s=0;s<J.length;s+=1)J[s].l(f);f.forEach(g),c=d(r),j=u(r,"DIV",{class:!0});var i=m(j);U=u(i,"INPUT",{type:!0,class:!0}),V=u(i,"BUTTON",{class:!0});var h=m(V);w=p(h,"追加"),h.forEach(g),i.forEach(g),r.forEach(g),this.h()},h(){v(l,"class","todo-list"),v(U,"type","text"),v(U,"class","form-control"),v(V,"class","btn btn-primary "),v(j,"class","create-container"),v(s,"class","container ")},m(r,o){$(r,s,o),b(s,a),b(a,e),b(s,n),b(s,l);for(let t=0;t<J.length;t+=1)J[t].m(l,null);b(s,c),b(s,j),b(j,U),x(U,t[1]),b(j,V),b(V,w),B=!0,H||(N=[D(U,"input",t[4]),D(V,"click",t[2])],H=!0)},p(t,[s]){if(9&s){let a;for(F=t[0],a=0;a<F.length;a+=1){const e=k(t,F,a);J[a]?(J[a].p(e,s),r(J[a],1)):(J[a]=y(e),J[a].c(),r(J[a],1),J[a].m(l,null))}for(T(),a=F.length;a<J.length;a+=1)P(a);E()}2&s&&U.value!==t[1]&&x(U,t[1])},i(t){if(!B){for(let t=0;t<F.length;t+=1)r(J[t]);B=!0}},o(t){J=J.filter(Boolean);for(let s=0;s<J.length;s+=1)o(J[s]);B=!1},d(t){t&&g(s),I(J,t),H=!1,O(N)}}}function V(t,s,a){let e=["頑張る","祈る"],n="";return[e,n,()=>{a(0,e=[...e,n]),a(1,n="")},t=>{e.splice(t,1),a(0,e)},function(){n=this.value,a(1,n)}]}export default class extends t{constructor(t){super(),s(this,t,V,U,a,{})}}