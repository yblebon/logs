import{g as y}from"../chunks/dataloader.RC53J_ry.js";import{s as k}from"../chunks/scheduler.RmCaX0Zm.js";import{S as x,i as B,g as S,s as V,e as _,A as j,h as w,f as d,c as A,k as h,y as E,a as p,d as m,b as L,t as f,B as M,r as O,u as P,v as T,w as Y,p as q}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{V as z}from"../chunks/video.5eUcPi0F.js";const C=()=>({videos:y().filter(s=>s.section=="video")}),K=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function v(l,n,s){const t=l.slice();return t[1]=n[s],t}function $(l){let n,s;return n=new z({props:{video:l[1]}}),{c(){O(n.$$.fragment)},l(t){P(n.$$.fragment,t)},m(t,i){T(n,t,i),s=!0},p(t,i){const c={};i&1&&(c.video=t[1]),n.$set(c)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){f(n.$$.fragment,t),s=!1},d(t){Y(n,t)}}}function D(l){let n,s,t,i,c=g(l[0].videos),o=[];for(let e=0;e<c.length;e+=1)o[e]=$(v(l,c,e));const b=e=>f(o[e],1,1,()=>{o[e]=null});return{c(){n=S("meta"),s=V();for(let e=0;e<o.length;e+=1)o[e].c();t=_(),this.h()},l(e){const r=j("svelte-1alx04r",document.head);n=w(r,"META",{name:!0,content:!0}),r.forEach(d),s=A(e);for(let a=0;a<o.length;a+=1)o[a].l(e);t=_(),this.h()},h(){document.title="Yasser B. Lebon Videos",h(n,"name","description"),h(n,"content","Yasser B. Lebon video records")},m(e,r){E(document.head,n),p(e,s,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,r);p(e,t,r),i=!0},p(e,[r]){if(r&1){c=g(e[0].videos);let a;for(a=0;a<c.length;a+=1){const u=v(e,c,a);o[a]?(o[a].p(u,r),m(o[a],1)):(o[a]=$(u),o[a].c(),m(o[a],1),o[a].m(t.parentNode,t))}for(q(),a=c.length;a<o.length;a+=1)b(a);L()}},i(e){if(!i){for(let r=0;r<c.length;r+=1)m(o[r]);i=!0}},o(e){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)f(o[r]);i=!1},d(e){e&&(d(s),d(t)),d(n),M(o,e)}}}function N(l,n,s){let{data:t}=n;return l.$$set=i=>{"data"in i&&s(0,t=i.data)},[t]}class Q extends x{constructor(n){super(),B(this,n,N,D,k,{data:0})}}export{Q as component,K as universal};
