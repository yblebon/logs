import{g as h}from"../chunks/dataloader.hwhFQoBS.js";import{s as d}from"../chunks/scheduler.RmCaX0Zm.js";import{S as x,i as $,e as m,a as P,d as i,b,t as f,f as y,A as v,r as k,u as S,v as j,w,p as O}from"../chunks/index.6mm3ru-L.js";import{e as p}from"../chunks/each.-oqiv04n.js";import{X}from"../chunks/xpost.etOA28Rx.js";const q=()=>({xPosts:h().filter(s=>s.section=="xpost")}),T=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function _(l,n,s){const e=l.slice();return e[1]=n[s],e}function g(l){let n,s;return n=new X({props:{xpost:l[1]}}),{c(){k(n.$$.fragment)},l(e){S(n.$$.fragment,e)},m(e,t){j(n,e,t),s=!0},p(e,t){const c={};t&1&&(c.xpost=e[1]),n.$set(c)},i(e){s||(i(n.$$.fragment,e),s=!0)},o(e){f(n.$$.fragment,e),s=!1},d(e){w(n,e)}}}function z(l){let n,s,e=p(l[0].xPosts),t=[];for(let o=0;o<e.length;o+=1)t[o]=g(_(l,e,o));const c=o=>f(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();n=m()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);n=m()},m(o,r){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(o,r);P(o,n,r),s=!0},p(o,[r]){if(r&1){e=p(o[0].xPosts);let a;for(a=0;a<e.length;a+=1){const u=_(o,e,a);t[a]?(t[a].p(u,r),i(t[a],1)):(t[a]=g(u),t[a].c(),i(t[a],1),t[a].m(n.parentNode,n))}for(O(),a=e.length;a<t.length;a+=1)c(a);b()}},i(o){if(!s){for(let r=0;r<e.length;r+=1)i(t[r]);s=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)f(t[r]);s=!1},d(o){o&&y(n),v(t,o)}}}function A(l,n,s){let{data:e}=n;return l.$$set=t=>{"data"in t&&s(0,e=t.data)},[e]}class E extends x{constructor(n){super(),$(this,n,A,z,d,{data:0})}}export{E as component,T as universal};
