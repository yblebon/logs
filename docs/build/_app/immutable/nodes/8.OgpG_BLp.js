import{g}from"../chunks/dataloader.6M4VCJud.js";import{s as h}from"../chunks/scheduler.RmCaX0Zm.js";import{S as $,i as b,e as u,a as y,d as i,b as v,t as f,f as k,A as P,r as S,u as x,v as j,w,p as O}from"../chunks/index.6mm3ru-L.js";import{e as m}from"../chunks/each.-oqiv04n.js";import{P as q}from"../chunks/podcast.iSM6v5pH.js";const z=()=>({podcasts:g().filter(s=>s.section=="podcast")}),E=Object.freeze(Object.defineProperty({__proto__:null,load:z},Symbol.toStringTag,{value:"Module"}));function _(c,a,s){const e=c.slice();return e[1]=a[s],e}function d(c){let a,s;return a=new q({props:{podcast:c[1]}}),{c(){S(a.$$.fragment)},l(e){x(a.$$.fragment,e)},m(e,t){j(a,e,t),s=!0},p(e,t){const l={};t&1&&(l.podcast=e[1]),a.$set(l)},i(e){s||(i(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){w(a,e)}}}function A(c){let a,s,e=m(c[0].podcasts),t=[];for(let o=0;o<e.length;o+=1)t[o]=d(_(c,e,o));const l=o=>f(t[o],1,1,()=>{t[o]=null});return{c(){for(let o=0;o<t.length;o+=1)t[o].c();a=u()},l(o){for(let r=0;r<t.length;r+=1)t[r].l(o);a=u()},m(o,r){for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(o,r);y(o,a,r),s=!0},p(o,[r]){if(r&1){e=m(o[0].podcasts);let n;for(n=0;n<e.length;n+=1){const p=_(o,e,n);t[n]?(t[n].p(p,r),i(t[n],1)):(t[n]=d(p),t[n].c(),i(t[n],1),t[n].m(a.parentNode,a))}for(O(),n=e.length;n<t.length;n+=1)l(n);v()}},i(o){if(!s){for(let r=0;r<e.length;r+=1)i(t[r]);s=!0}},o(o){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)f(t[r]);s=!1},d(o){o&&k(a),P(t,o)}}}function B(c,a,s){let{data:e}=a;return c.$$set=t=>{"data"in t&&s(0,e=t.data)},[e]}class F extends ${constructor(a){super(),b(this,a,B,A,h,{data:0})}}export{F as component,E as universal};
