import{g as y}from"../chunks/dataloader.svs5BRiv.js";import{s as k}from"../chunks/scheduler.RmCaX0Zm.js";import{S as v,i as P,g as B,s as S,e as _,A as x,h as w,f as m,c as A,k as h,y as E,a as d,d as p,b as L,t as f,B as M,r as O,u as T,v as Y,w as q,p as z}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{P as C}from"../chunks/project.7eETjck0.js";const D=()=>({projects:y().filter(s=>s.section=="project")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function j(l,n,s){const t=l.slice();return t[1]=n[s],t}function $(l){let n,s;return n=new C({props:{project:l[1]}}),{c(){O(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,c){Y(n,t,c),s=!0},p(t,c){const i={};c&1&&(i.project=t[1]),n.$set(i)},i(t){s||(p(n.$$.fragment,t),s=!0)},o(t){f(n.$$.fragment,t),s=!1},d(t){q(n,t)}}}function N(l){let n,s,t,c,i=g(l[0].projects),o=[];for(let e=0;e<i.length;e+=1)o[e]=$(j(l,i,e));const b=e=>f(o[e],1,1,()=>{o[e]=null});return{c(){n=B("meta"),s=S();for(let e=0;e<o.length;e+=1)o[e].c();t=_(),this.h()},l(e){const r=x("svelte-k3mpd3",document.head);n=w(r,"META",{name:!0,content:!0}),r.forEach(m),s=A(e);for(let a=0;a<o.length;a+=1)o[a].l(e);t=_(),this.h()},h(){document.title="Yasser B. Lebon Projects",h(n,"name","description"),h(n,"content","Yasser B. Lebon project records")},m(e,r){E(document.head,n),d(e,s,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,r);d(e,t,r),c=!0},p(e,[r]){if(r&1){i=g(e[0].projects);let a;for(a=0;a<i.length;a+=1){const u=j(e,i,a);o[a]?(o[a].p(u,r),p(o[a],1)):(o[a]=$(u),o[a].c(),p(o[a],1),o[a].m(t.parentNode,t))}for(z(),a=i.length;a<o.length;a+=1)b(a);L()}},i(e){if(!c){for(let r=0;r<i.length;r+=1)p(o[r]);c=!0}},o(e){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)f(o[r]);c=!1},d(e){e&&(m(s),m(t)),m(n),M(o,e)}}}function F(l,n,s){let{data:t}=n;return l.$$set=c=>{"data"in c&&s(0,t=c.data)},[t]}class R extends v{constructor(n){super(),P(this,n,F,N,k,{data:0})}}export{R as component,Q as universal};
