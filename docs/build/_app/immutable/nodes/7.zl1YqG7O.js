import{g as k}from"../chunks/dataloader.wj2Pab6u.js";import{s as v}from"../chunks/scheduler.RmCaX0Zm.js";import{S as B,i as D,g as S,s as x,e as _,A as j,h as w,f as m,c as A,k as h,y as E,a as p,d,b as L,t as f,B as M,r as O,u as P,v as T,w as Y,p as q}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{D as z}from"../chunks/dots.dvU_XDwk.js";const C=()=>({dots:k().filter(r=>r.section=="dots")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function y(c,a,r){const e=c.slice();return e[1]=a[r],e}function $(c){let a,r;return a=new z({props:{dots:c[1]}}),{c(){O(a.$$.fragment)},l(e){P(a.$$.fragment,e)},m(e,l){T(a,e,l),r=!0},p(e,l){const i={};l&1&&(i.dots=e[1]),a.$set(i)},i(e){r||(d(a.$$.fragment,e),r=!0)},o(e){f(a.$$.fragment,e),r=!1},d(e){Y(a,e)}}}function N(c){let a,r,e,l,i=g(c[0].dots),o=[];for(let t=0;t<i.length;t+=1)o[t]=$(y(c,i,t));const b=t=>f(o[t],1,1,()=>{o[t]=null});return{c(){a=S("meta"),r=x();for(let t=0;t<o.length;t+=1)o[t].c();e=_(),this.h()},l(t){const s=j("svelte-oy7dek",document.head);a=w(s,"META",{name:!0,content:!0}),s.forEach(m),r=A(t);for(let n=0;n<o.length;n+=1)o[n].l(t);e=_(),this.h()},h(){document.title="Yasser B. Lebon Dots",h(a,"name","description"),h(a,"content","Yasser B. Lebon connecting the dots for a story")},m(t,s){E(document.head,a),p(t,r,s);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(t,s);p(t,e,s),l=!0},p(t,[s]){if(s&1){i=g(t[0].dots);let n;for(n=0;n<i.length;n+=1){const u=y(t,i,n);o[n]?(o[n].p(u,s),d(o[n],1)):(o[n]=$(u),o[n].c(),d(o[n],1),o[n].m(e.parentNode,e))}for(q(),n=i.length;n<o.length;n+=1)b(n);L()}},i(t){if(!l){for(let s=0;s<i.length;s+=1)d(o[s]);l=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)f(o[s]);l=!1},d(t){t&&(m(r),m(e)),m(a),M(o,t)}}}function F(c,a,r){let{data:e}=a;return c.$$set=l=>{"data"in l&&r(0,e=l.data)},[e]}class R extends B{constructor(a){super(),D(this,a,F,N,v,{data:0})}}export{R as component,Q as universal};
