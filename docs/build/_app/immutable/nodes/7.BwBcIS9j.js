import{g as v}from"../chunks/dataloader.B2g2ImtO.js";import{s as k}from"../chunks/scheduler.DEf5evaE.js";import{S as x,i as C,e as S,s as j,n as u,p as z,c as B,d as m,f as q,g as _,k as w,j as p,q as f,r as E,u as d,o as L,v as M,w as O,x as P,y as T,z as Y}from"../chunks/index.hqP8tfOH.js";import{e as g}from"../chunks/each.D6YF6ztN.js";import{C as A}from"../chunks/card.CtCmM9Ho.js";const D=()=>{let c=v(),r=c.filter(e=>e.section=="card"),s=c.filter(e=>e.highlight==!0);return{cards:r,highlights:s}},Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function $(c,r,s){const e=c.slice();return e[1]=r[s],e}function y(c){let r,s;return r=new A({props:{card:c[1]}}),{c(){M(r.$$.fragment)},l(e){O(r.$$.fragment,e)},m(e,l){P(r,e,l),s=!0},p(e,l){const i={};l&1&&(i.card=e[1]),r.$set(i)},i(e){s||(f(r.$$.fragment,e),s=!0)},o(e){d(r.$$.fragment,e),s=!1},d(e){T(r,e)}}}function N(c){let r,s,e,l,i=g(c[0].cards),a=[];for(let t=0;t<i.length;t+=1)a[t]=y($(c,i,t));const b=t=>d(a[t],1,1,()=>{a[t]=null});return{c(){r=S("meta"),s=j();for(let t=0;t<a.length;t+=1)a[t].c();e=u(),this.h()},l(t){const o=z("svelte-xsszfp",document.head);r=B(o,"META",{name:!0,content:!0}),o.forEach(m),s=q(t);for(let n=0;n<a.length;n+=1)a[n].l(t);e=u(),this.h()},h(){document.title="Yasser B. Lebon Cards",_(r,"name","description"),_(r,"content","Yasser B. Lebon card records")},m(t,o){w(document.head,r),p(t,s,o);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,o);p(t,e,o),l=!0},p(t,[o]){if(o&1){i=g(t[0].cards);let n;for(n=0;n<i.length;n+=1){const h=$(t,i,n);a[n]?(a[n].p(h,o),f(a[n],1)):(a[n]=y(h),a[n].c(),f(a[n],1),a[n].m(e.parentNode,e))}for(Y(),n=i.length;n<a.length;n+=1)b(n);E()}},i(t){if(!l){for(let o=0;o<i.length;o+=1)f(a[o]);l=!0}},o(t){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)d(a[o]);l=!1},d(t){t&&(m(s),m(e)),m(r),L(a,t)}}}function F(c,r,s){let{data:e}=r;return c.$$set=l=>{"data"in l&&s(0,e=l.data)},[e]}class R extends x{constructor(r){super(),C(this,r,F,N,k,{data:0})}}export{R as component,Q as universal};
