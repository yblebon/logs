import{g as v}from"../chunks/dataloader.URRK8vL4.js";import{s as k}from"../chunks/scheduler.RmCaX0Zm.js";import{S as A,i as B,g as S,s as j,e as h,A as x,h as w,f as m,c as E,k as p,y as L,a as d,d as f,b as M,t as u,B as O,r as P,u as T,v as Y,w as q,p as z}from"../chunks/index.mSofBvwl.js";import{e as g}from"../chunks/each.-oqiv04n.js";import{A as C}from"../chunks/article.zcs5MHWw.js";const D=()=>({articles:v().filter(l=>l.section=="article")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function $(c,r,l){const t=c.slice();return t[1]=r[l],t}function b(c){let r,l;return r=new C({props:{article:c[1]}}),{c(){P(r.$$.fragment)},l(t){T(r.$$.fragment,t)},m(t,s){Y(r,t,s),l=!0},p(t,s){const i={};s&1&&(i.article=t[1]),r.$set(i)},i(t){l||(f(r.$$.fragment,t),l=!0)},o(t){u(r.$$.fragment,t),l=!1},d(t){q(r,t)}}}function N(c){let r,l,t,s,i=g(c[0].articles),a=[];for(let e=0;e<i.length;e+=1)a[e]=b($(c,i,e));const y=e=>u(a[e],1,1,()=>{a[e]=null});return{c(){r=S("meta"),l=j();for(let e=0;e<a.length;e+=1)a[e].c();t=h(),this.h()},l(e){const o=x("svelte-hno2jl",document.head);r=w(o,"META",{name:!0,content:!0}),o.forEach(m),l=E(e);for(let n=0;n<a.length;n+=1)a[n].l(e);t=h(),this.h()},h(){document.title="Yasser B. Lebon Articles",p(r,"name","description"),p(r,"content","Yasser B. Lebon article records")},m(e,o){L(document.head,r),d(e,l,o);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,o);d(e,t,o),s=!0},p(e,[o]){if(o&1){i=g(e[0].articles);let n;for(n=0;n<i.length;n+=1){const _=$(e,i,n);a[n]?(a[n].p(_,o),f(a[n],1)):(a[n]=b(_),a[n].c(),f(a[n],1),a[n].m(t.parentNode,t))}for(z(),n=i.length;n<a.length;n+=1)y(n);M()}},i(e){if(!s){for(let o=0;o<i.length;o+=1)f(a[o]);s=!0}},o(e){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)u(a[o]);s=!1},d(e){e&&(m(l),m(t)),m(r),O(a,e)}}}function F(c,r,l){let{data:t}=r;return c.$$set=s=>{"data"in s&&l(0,t=s.data)},[t]}class R extends A{constructor(r){super(),B(this,r,F,N,k,{data:0})}}export{R as component,Q as universal};
