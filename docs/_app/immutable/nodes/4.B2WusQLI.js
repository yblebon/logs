import{g as v}from"../chunks/dataloader.CE27Wj21.js";import{s as k}from"../chunks/scheduler.DEf5evaE.js";import{S as j,i as x,e as A,s as S,n as h,p as B,c as q,d as m,f as w,g as p,k as z,j as d,q as f,r as E,u,o as L,v as M,w as O,x as P,y as T,z as Y}from"../chunks/index.hqP8tfOH.js";import{e as g}from"../chunks/each.D6YF6ztN.js";import{A as C}from"../chunks/article.CzvB2UGG.js";const D=()=>({articles:v().filter(l=>l.section=="article")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function $(c,r,l){const t=c.slice();return t[1]=r[l],t}function y(c){let r,l;return r=new C({props:{article:c[1]}}),{c(){M(r.$$.fragment)},l(t){O(r.$$.fragment,t)},m(t,s){P(r,t,s),l=!0},p(t,s){const i={};s&1&&(i.article=t[1]),r.$set(i)},i(t){l||(f(r.$$.fragment,t),l=!0)},o(t){u(r.$$.fragment,t),l=!1},d(t){T(r,t)}}}function N(c){let r,l,t,s,i=g(c[0].articles),a=[];for(let e=0;e<i.length;e+=1)a[e]=y($(c,i,e));const b=e=>u(a[e],1,1,()=>{a[e]=null});return{c(){r=A("meta"),l=S();for(let e=0;e<a.length;e+=1)a[e].c();t=h(),this.h()},l(e){const o=B("svelte-hno2jl",document.head);r=q(o,"META",{name:!0,content:!0}),o.forEach(m),l=w(e);for(let n=0;n<a.length;n+=1)a[n].l(e);t=h(),this.h()},h(){document.title="Yasser B. Lebon Articles",p(r,"name","description"),p(r,"content","Yasser B. Lebon article records")},m(e,o){z(document.head,r),d(e,l,o);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(e,o);d(e,t,o),s=!0},p(e,[o]){if(o&1){i=g(e[0].articles);let n;for(n=0;n<i.length;n+=1){const _=$(e,i,n);a[n]?(a[n].p(_,o),f(a[n],1)):(a[n]=y(_),a[n].c(),f(a[n],1),a[n].m(t.parentNode,t))}for(Y(),n=i.length;n<a.length;n+=1)b(n);E()}},i(e){if(!s){for(let o=0;o<i.length;o+=1)f(a[o]);s=!0}},o(e){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)u(a[o]);s=!1},d(e){e&&(m(l),m(t)),m(r),L(a,e)}}}function F(c,r,l){let{data:t}=r;return c.$$set=s=>{"data"in s&&l(0,t=s.data)},[t]}class R extends j{constructor(r){super(),x(this,r,F,N,k,{data:0})}}export{R as component,Q as universal};
