import{g as v}from"../chunks/dataloader.dwxj5rkD.js";import{s as k}from"../chunks/scheduler.RmCaX0Zm.js";import{S as P,i as x,g as B,s as S,e as f,A as j,h as w,f as d,c as A,k as _,y as E,a as h,d as m,b as L,t as p,B as M,r as O,u as T,v as Y,w as q,p as z}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{P as C}from"../chunks/podcast.6QyFBe9Y.js";const D=()=>({podcasts:v().filter(r=>r.section=="podcast")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function $(l,n,r){const e=l.slice();return e[1]=n[r],e}function b(l){let n,r;return n=new C({props:{podcast:l[1]}}),{c(){O(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,c){Y(n,e,c),r=!0},p(e,c){const i={};c&1&&(i.podcast=e[1]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){p(n.$$.fragment,e),r=!1},d(e){q(n,e)}}}function N(l){let n,r,e,c,i=g(l[0].podcasts),a=[];for(let t=0;t<i.length;t+=1)a[t]=b($(l,i,t));const y=t=>p(a[t],1,1,()=>{a[t]=null});return{c(){n=B("meta"),r=S();for(let t=0;t<a.length;t+=1)a[t].c();e=f(),this.h()},l(t){const s=j("svelte-tjuxrh",document.head);n=w(s,"META",{name:!0,content:!0}),s.forEach(d),r=A(t);for(let o=0;o<a.length;o+=1)a[o].l(t);e=f(),this.h()},h(){document.title="Yasser B. Lebon Podcasts",_(n,"name","description"),_(n,"content","Yasser B. Lebon podcast records")},m(t,s){E(document.head,n),h(t,r,s);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(t,s);h(t,e,s),c=!0},p(t,[s]){if(s&1){i=g(t[0].podcasts);let o;for(o=0;o<i.length;o+=1){const u=$(t,i,o);a[o]?(a[o].p(u,s),m(a[o],1)):(a[o]=b(u),a[o].c(),m(a[o],1),a[o].m(e.parentNode,e))}for(z(),o=i.length;o<a.length;o+=1)y(o);L()}},i(t){if(!c){for(let s=0;s<i.length;s+=1)m(a[s]);c=!0}},o(t){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)p(a[s]);c=!1},d(t){t&&(d(r),d(e)),d(n),M(a,t)}}}function F(l,n,r){let{data:e}=n;return l.$$set=c=>{"data"in c&&r(0,e=c.data)},[e]}class R extends P{constructor(n){super(),x(this,n,F,N,k,{data:0})}}export{R as component,Q as universal};
