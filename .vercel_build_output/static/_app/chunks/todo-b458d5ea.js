import{C as s,S as a,i as e,s as r,e as t,t as o,k as l,c,a as d,g as i,d as n,n as h,b,f,F as u,I as m,h as p,G as v}from"./vendor-f4bbce36.js";const x=s([]),g=s([]),E=s=>{console.log("call delete:  "+s),x.update((a=>a.filter((a=>a.id!==s)))),g.update((a=>a.filter((a=>a.id!==s))))};function I(s){let a,e,r,x,g,E,I,k,T,y,D=s[0].text+"";return{c(){a=t("main"),e=t("div"),r=t("p"),x=o(D),g=l(),E=t("div"),I=t("button"),k=o("delete"),this.h()},l(s){a=c(s,"MAIN",{class:!0});var t=d(a);e=c(t,"DIV",{});var o=d(e);r=c(o,"P",{class:!0});var l=d(r);x=i(l,D),l.forEach(n),o.forEach(n),g=h(t),E=c(t,"DIV",{class:!0});var b=d(E);I=c(b,"BUTTON",{class:!0});var f=d(I);k=i(f,"delete"),f.forEach(n),b.forEach(n),t.forEach(n),this.h()},h(){b(r,"class",""),b(I,"class","border border-black py-1 px-3 rounded hover:text-white hover:bg-red-500 "),b(E,"class","ml-auto "),b(a,"class","box-border p-4 border-2 border-blue-500 bg-gray-100 flex rounded-full m-2")},m(t,o){f(t,a,o),u(a,e),u(e,r),u(r,x),u(a,g),u(a,E),u(E,I),u(I,k),T||(y=m(I,"click",s[1]),T=!0)},p(s,[a]){1&a&&D!==(D=s[0].text+"")&&p(x,D)},i:v,o:v,d(s){s&&n(a),T=!1,y()}}}function k(s,a,e){let{item:r}=a;return s.$$set=s=>{"item"in s&&e(0,r=s.item)},[r,()=>{E(r.id)}]}class T extends a{constructor(s){super(),e(this,s,k,I,r,{item:0})}}export{T,g as a,E as d,x as i};
