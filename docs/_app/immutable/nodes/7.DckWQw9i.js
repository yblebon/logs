import{g as q}from"../chunks/dataloader.BmIJ7JIX.js";import{s as E}from"../chunks/scheduler.DEf5evaE.js";import{S as L,i as O,e as P,s as $,v as S,n as v,p as T,c as Y,d as h,f as b,w as j,g as y,k as A,j as p,x as w,q as d,r as D,u as _,y as x,o as N,z as F}from"../chunks/index.hqP8tfOH.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import"../chunks/paths.FmLZpXPv.js";import{C as G}from"../chunks/card.B0PJ8qHa.js";import{C as H}from"../chunks/card_nav.D_ovd-kz.js";const I=()=>{let c=q(),n=c.filter(t=>t.section=="card"),o=c.filter(t=>t.highlight==!0);return{cards:n,highlights:o}},ee=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"}));function k(c,n,o){const t=c.slice();return t[1]=n[o],t}function z(c){let n,o;return n=new G({props:{card:c[1]}}),{c(){S(n.$$.fragment)},l(t){j(n.$$.fragment,t)},m(t,l){w(n,t,l),o=!0},p(t,l){const m={};l&1&&(m.card=t[1]),n.$set(m)},i(t){o||(d(n.$$.fragment,t),o=!0)},o(t){_(n.$$.fragment,t),o=!1},d(t){x(n,t)}}}function J(c){let n,o,t,l,m,u;t=new H({props:{size:Math.ceil(c[0].cards.length/M)}});let f=C(c[0].cards),a=[];for(let e=0;e<f.length;e+=1)a[e]=z(k(c,f,e));const B=e=>_(a[e],1,1,()=>{a[e]=null});return{c(){n=P("meta"),o=$(),S(t.$$.fragment),l=$();for(let e=0;e<a.length;e+=1)a[e].c();m=v(),this.h()},l(e){const r=T("svelte-x7sb51",document.head);n=Y(r,"META",{name:!0,content:!0}),r.forEach(h),o=b(e),j(t.$$.fragment,e),l=b(e);for(let i=0;i<a.length;i+=1)a[i].l(e);m=v(),this.h()},h(){document.title="Yasser B. Lebon Cards",y(n,"name","description"),y(n,"content","Yasser B. Lebon card records")},m(e,r){A(document.head,n),p(e,o,r),w(t,e,r),p(e,l,r);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(e,r);p(e,m,r),u=!0},p(e,[r]){const i={};if(r&1&&(i.size=Math.ceil(e[0].cards.length/M)),t.$set(i),r&1){f=C(e[0].cards);let s;for(s=0;s<f.length;s+=1){const g=k(e,f,s);a[s]?(a[s].p(g,r),d(a[s],1)):(a[s]=z(g),a[s].c(),d(a[s],1),a[s].m(m.parentNode,m))}for(F(),s=f.length;s<a.length;s+=1)B(s);D()}},i(e){if(!u){d(t.$$.fragment,e);for(let r=0;r<f.length;r+=1)d(a[r]);u=!0}},o(e){_(t.$$.fragment,e),a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)_(a[r]);u=!1},d(e){e&&(h(o),h(l),h(m)),h(n),x(t,e),N(a,e)}}}let M=20;function K(c,n,o){let{data:t}=n;return c.$$set=l=>{"data"in l&&o(0,t=l.data)},[t]}class te extends L{constructor(n){super(),O(this,n,K,J,E,{data:0})}}export{te as component,ee as universal};
