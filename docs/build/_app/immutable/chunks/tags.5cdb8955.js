import{s as T,n as p}from"./scheduler.ef979ab2.js";import{S as E,i as S,e as m,c as u,a as d,d as h,g as c,h as f,j as k,o as j,t as q,s as w,b as z,f as A,k as _,l as B}from"./index.59e30afe.js";import{e as b}from"./each.e59479a4.js";import{b as v}from"./paths.11429a91.js";function y(i,s,n){const t=i.slice();return t[1]=s[n],t}function x(i){let s,n,t=i[1]+"",e,r,a;return{c(){s=m("a"),n=m("button"),e=q(t),r=w(),this.h()},l(l){s=u(l,"A",{href:!0});var o=d(s);n=u(o,"BUTTON",{type:!0,class:!0,style:!0});var g=d(n);e=z(g,t),g.forEach(h),r=A(o),o.forEach(h),this.h()},h(){c(n,"type","button"),c(n,"class","btn btn-primary me-1 mb-1"),f(n,"--bs-btn-padding-y",".25rem"),f(n,"--bs-btn-padding-x",".5rem"),f(n,"--bs-btn-font-size",".75rem"),c(s,"href",a=v+"/search/tag_"+i[1])},m(l,o){k(l,s,o),_(s,n),_(n,e),_(s,r)},p(l,o){o&1&&t!==(t=l[1]+"")&&B(e,t),o&1&&a!==(a=v+"/search/tag_"+l[1])&&c(s,"href",a)},d(l){l&&h(s)}}}function C(i){let s,n=b(i[0]),t=[];for(let e=0;e<n.length;e+=1)t[e]=x(y(i,n,e));return{c(){s=m("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=u(e,"DIV",{class:!0,style:!0});var r=d(s);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(h),this.h()},h(){c(s,"class","mx-auto mt-4 "),f(s,"max-width","540px")},m(e,r){k(e,s,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(s,null)},p(e,[r]){if(r&1){n=b(e[0]);let a;for(a=0;a<n.length;a+=1){const l=y(e,n,a);t[a]?t[a].p(l,r):(t[a]=x(l),t[a].c(),t[a].m(s,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:p,o:p,d(e){e&&h(s),j(t,e)}}}function D(i,s,n){let{tags:t=[]}=s;return i.$$set=e=>{"tags"in e&&n(0,t=e.tags)},[t]}class V extends E{constructor(s){super(),S(this,s,D,C,T,{tags:0})}}export{V as T};
