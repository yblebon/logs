import{g as y}from"../chunks/dataloader.2oAbdwY4.js";import{s as P}from"../chunks/scheduler.RmCaX0Zm.js";import{S as k,i as v,g as B,s as S,e as _,A as X,h as w,f as m,c as j,k as h,y as A,a as d,d as f,b as E,t as u,B as L,r as M,u as O,v as T,w as Y,p as q}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{X as z}from"../chunks/xpost.tf85_xbZ.js";const C=()=>({xPosts:y().filter(r=>r.section=="xpost")}),K=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function x(c,n,r){const e=c.slice();return e[1]=n[r],e}function $(c){let n,r;return n=new z({props:{xpost:c[1]}}),{c(){M(n.$$.fragment)},l(e){O(n.$$.fragment,e)},m(e,l){T(n,e,l),r=!0},p(e,l){const i={};l&1&&(i.xpost=e[1]),n.$set(i)},i(e){r||(f(n.$$.fragment,e),r=!0)},o(e){u(n.$$.fragment,e),r=!1},d(e){Y(n,e)}}}function D(c){let n,r,e,l,i=g(c[0].xPosts),o=[];for(let t=0;t<i.length;t+=1)o[t]=$(x(c,i,t));const b=t=>u(o[t],1,1,()=>{o[t]=null});return{c(){n=B("meta"),r=S();for(let t=0;t<o.length;t+=1)o[t].c();e=_(),this.h()},l(t){const s=X("svelte-1kh1kcw",document.head);n=w(s,"META",{name:!0,content:!0}),s.forEach(m),r=j(t);for(let a=0;a<o.length;a+=1)o[a].l(t);e=_(),this.h()},h(){document.title="Yasser B. Lebon X-Posts",h(n,"name","description"),h(n,"content","Yasser B. Lebon post records from X")},m(t,s){A(document.head,n),d(t,r,s);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(t,s);d(t,e,s),l=!0},p(t,[s]){if(s&1){i=g(t[0].xPosts);let a;for(a=0;a<i.length;a+=1){const p=x(t,i,a);o[a]?(o[a].p(p,s),f(o[a],1)):(o[a]=$(p),o[a].c(),f(o[a],1),o[a].m(e.parentNode,e))}for(q(),a=i.length;a<o.length;a+=1)b(a);E()}},i(t){if(!l){for(let s=0;s<i.length;s+=1)f(o[s]);l=!0}},o(t){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)u(o[s]);l=!1},d(t){t&&(m(r),m(e)),m(n),L(o,t)}}}function N(c,n,r){let{data:e}=n;return c.$$set=l=>{"data"in l&&r(0,e=l.data)},[e]}class Q extends k{constructor(n){super(),v(this,n,N,D,P,{data:0})}}export{Q as component,K as universal};
