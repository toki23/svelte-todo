import{S as s,i as a,s as c,e,t,k as l,c as r,a as i,g as d,d as n,n as o,b as h,f,F as u,I as m,h as v,G as b}from"../../chunks/vendor-f4bbce36.js";function x(s){let a,c,x,p,E,I,k,y,D,N;return{c(){a=e("main"),c=e("div"),x=e("p"),p=t(s[0]),E=l(),I=e("div"),k=e("button"),y=t("delete"),this.h()},l(e){a=r(e,"MAIN",{class:!0});var t=i(a);c=r(t,"DIV",{class:!0});var l=i(c);x=r(l,"P",{class:!0});var h=i(x);p=d(h,s[0]),h.forEach(n),l.forEach(n),E=o(t),I=r(t,"DIV",{class:!0});var f=i(I);k=r(f,"BUTTON",{class:!0});var u=i(k);y=d(u,"delete"),u.forEach(n),f.forEach(n),t.forEach(n),this.h()},h(){h(x,"class","card-body col "),h(c,"class",""),h(k,"class","card-body col"),h(I,"class"," "),h(a,"class","card")},m(e,t){f(e,a,t),u(a,c),u(c,x),u(x,p),u(a,E),u(a,I),u(I,k),u(k,y),D||(N=m(k,"click",s[3]),D=!0)},p(s,[a]){1&a&&v(p,s[0])},i:b,o:b,d(s){s&&n(a),D=!1,N()}}}function p(s,a,c){let{item:e}=a,{del:t}=a,{index:l}=a;return s.$$set=s=>{"item"in s&&c(0,e=s.item),"del"in s&&c(1,t=s.del),"index"in s&&c(2,l=s.index)},[e,t,l,()=>{t(l)}]}export default class extends s{constructor(s){super(),a(this,s,p,x,c,{item:0,del:1,index:2})}}
