import{g as b}from"../chunks/dataloader.QVJUQxE-.js";import{s as y}from"../chunks/scheduler.C3f_taFb.js";import{S as k,i as x,e as S,s as j,n as h,p as B,c as R,d as m,f as q,g as d,k as z,j as p,q as f,r as E,u,o as L,v as M,w as O,x as P,y as T,z as Y}from"../chunks/index.FmdhhjWK.js";import{e as g}from"../chunks/each.D6YF6ztN.js";import{R as A}from"../chunks/review.DkIx0SRL.js";const C=()=>({reviews:b().filter(s=>s.section=="review")}),K=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function v(l,o,s){const t=l.slice();return t[1]=o[s],t}function w(l){let o,s;return o=new A({props:{review:l[1]}}),{c(){M(o.$$.fragment)},l(t){O(o.$$.fragment,t)},m(t,i){P(o,t,i),s=!0},p(t,i){const c={};i&1&&(c.review=t[1]),o.$set(c)},i(t){s||(f(o.$$.fragment,t),s=!0)},o(t){u(o.$$.fragment,t),s=!1},d(t){T(o,t)}}}function D(l){let o,s,t,i,c=g(l[0].reviews),n=[];for(let e=0;e<c.length;e+=1)n[e]=w(v(l,c,e));const $=e=>u(n[e],1,1,()=>{n[e]=null});return{c(){o=S("meta"),s=j();for(let e=0;e<n.length;e+=1)n[e].c();t=h(),this.h()},l(e){const r=B("svelte-b2a8fd",document.head);o=R(r,"META",{name:!0,content:!0}),r.forEach(m),s=q(e);for(let a=0;a<n.length;a+=1)n[a].l(e);t=h(),this.h()},h(){document.title="Yasser B. Lebon Reviews",d(o,"name","description"),d(o,"content","Yasser B. Lebon review records")},m(e,r){z(document.head,o),p(e,s,r);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,r);p(e,t,r),i=!0},p(e,[r]){if(r&1){c=g(e[0].reviews);let a;for(a=0;a<c.length;a+=1){const _=v(e,c,a);n[a]?(n[a].p(_,r),f(n[a],1)):(n[a]=w(_),n[a].c(),f(n[a],1),n[a].m(t.parentNode,t))}for(Y(),a=c.length;a<n.length;a+=1)$(a);E()}},i(e){if(!i){for(let r=0;r<c.length;r+=1)f(n[r]);i=!0}},o(e){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)u(n[r]);i=!1},d(e){e&&(m(s),m(t)),m(o),L(n,e)}}}function N(l,o,s){let{data:t}=o;return l.$$set=i=>{"data"in i&&s(0,t=i.data)},[t]}class Q extends k{constructor(o){super(),x(this,o,N,D,y,{data:0})}}export{Q as component,K as universal};
