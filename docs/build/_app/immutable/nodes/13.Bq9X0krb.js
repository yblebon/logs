import{g as v}from"../chunks/dataloader.CYEaSxnY.js";import{s as k}from"../chunks/scheduler.DEf5evaE.js";import{S as x,i as S,e as j,s as q,n as g,p as B,c as I,d as m,f as w,g as h,k as z,j as p,q as u,r as E,u as f,o as L,v as M,w as O,x as P,y as T,z as Y}from"../chunks/index.hqP8tfOH.js";import{e as d}from"../chunks/each.D6YF6ztN.js";import{I as A}from"../chunks/image.CnHw2k06.js";const C=()=>({images:v().filter(s=>s.section=="image")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function $(i,o,s){const t=i.slice();return t[1]=o[s],t}function y(i){let o,s;return o=new A({props:{image:i[1]}}),{c(){M(o.$$.fragment)},l(t){O(o.$$.fragment,t)},m(t,l){P(o,t,l),s=!0},p(t,l){const c={};l&1&&(c.image=t[1]),o.$set(c)},i(t){s||(u(o.$$.fragment,t),s=!0)},o(t){f(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function D(i){let o,s,t,l,c=d(i[0].images),a=[];for(let e=0;e<c.length;e+=1)a[e]=y($(i,c,e));const b=e=>f(a[e],1,1,()=>{a[e]=null});return{c(){o=j("meta"),s=q();for(let e=0;e<a.length;e+=1)a[e].c();t=g(),this.h()},l(e){const r=B("svelte-14upq5n",document.head);o=I(r,"META",{name:!0,content:!0}),r.forEach(m),s=w(e);for(let n=0;n<a.length;n+=1)a[n].l(e);t=g(),this.h()},h(){document.title="Yasser B. Lebon Images",h(o,"name","description"),h(o,"content","Yasser B. Lebon image records")},m(e,r){z(document.head,o),p(e,s,r);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,r);p(e,t,r),l=!0},p(e,[r]){if(r&1){c=d(e[0].images);let n;for(n=0;n<c.length;n+=1){const _=$(e,c,n);a[n]?(a[n].p(_,r),u(a[n],1)):(a[n]=y(_),a[n].c(),u(a[n],1),a[n].m(t.parentNode,t))}for(Y(),n=c.length;n<a.length;n+=1)b(n);E()}},i(e){if(!l){for(let r=0;r<c.length;r+=1)u(a[r]);l=!0}},o(e){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)f(a[r]);l=!1},d(e){e&&(m(s),m(t)),m(o),L(a,e)}}}function N(i,o,s){let{data:t}=o;return i.$$set=l=>{"data"in l&&s(0,t=l.data)},[t]}class R extends x{constructor(o){super(),S(this,o,N,D,k,{data:0})}}export{R as component,Q as universal};
