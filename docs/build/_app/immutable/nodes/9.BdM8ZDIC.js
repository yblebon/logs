import{g as k}from"../chunks/dataloader.QVJUQxE-.js";import{s as v}from"../chunks/scheduler.C3f_taFb.js";import{S as x,i as D,e as S,s as j,n as _,p as B,c as q,d as m,f as w,g as h,k as z,j as p,q as d,r as E,u as f,o as L,v as M,w as O,x as P,y as T,z as Y}from"../chunks/index.FmdhhjWK.js";import{e as g}from"../chunks/each.D6YF6ztN.js";import{D as A}from"../chunks/dots.C00kvFvK.js";const C=()=>({dots:k().filter(r=>r.section=="dots")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function y(c,a,r){const e=c.slice();return e[1]=a[r],e}function $(c){let a,r;return a=new A({props:{dots:c[1]}}),{c(){M(a.$$.fragment)},l(e){O(a.$$.fragment,e)},m(e,l){P(a,e,l),r=!0},p(e,l){const i={};l&1&&(i.dots=e[1]),a.$set(i)},i(e){r||(d(a.$$.fragment,e),r=!0)},o(e){f(a.$$.fragment,e),r=!1},d(e){T(a,e)}}}function N(c){let a,r,e,l,i=g(c[0].dots),o=[];for(let t=0;t<i.length;t+=1)o[t]=$(y(c,i,t));const b=t=>f(o[t],1,1,()=>{o[t]=null});return{c(){a=S("meta"),r=j();for(let t=0;t<o.length;t+=1)o[t].c();e=_(),this.h()},l(t){const s=B("svelte-oy7dek",document.head);a=q(s,"META",{name:!0,content:!0}),s.forEach(m),r=w(t);for(let n=0;n<o.length;n+=1)o[n].l(t);e=_(),this.h()},h(){document.title="Yasser B. Lebon Dots",h(a,"name","description"),h(a,"content","Yasser B. Lebon connecting the dots for a story")},m(t,s){z(document.head,a),p(t,r,s);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(t,s);p(t,e,s),l=!0},p(t,[s]){if(s&1){i=g(t[0].dots);let n;for(n=0;n<i.length;n+=1){const u=y(t,i,n);o[n]?(o[n].p(u,s),d(o[n],1)):(o[n]=$(u),o[n].c(),d(o[n],1),o[n].m(e.parentNode,e))}for(Y(),n=i.length;n<o.length;n+=1)b(n);E()}},i(t){if(!l){for(let s=0;s<i.length;s+=1)d(o[s]);l=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)f(o[s]);l=!1},d(t){t&&(m(r),m(e)),m(a),L(o,t)}}}function F(c,a,r){let{data:e}=a;return c.$$set=l=>{"data"in l&&r(0,e=l.data)},[e]}class R extends x{constructor(a){super(),D(this,a,F,N,v,{data:0})}}export{R as component,Q as universal};
