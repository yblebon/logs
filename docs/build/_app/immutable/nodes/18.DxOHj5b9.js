import{g as b}from"../chunks/dataloader.B2g2ImtO.js";import{s as k}from"../chunks/scheduler.DEf5evaE.js";import{S as v,i as P,e as x,s as S,n as _,p as B,c as q,d as m,f as w,g as h,k as z,j as d,q as p,r as E,u as f,o as L,v as M,w as O,x as T,y as Y,z as A}from"../chunks/index.hqP8tfOH.js";import{e as g}from"../chunks/each.D6YF6ztN.js";import{P as C}from"../chunks/project.Bvmiqqs7.js";const D=()=>({projects:b().filter(s=>s.section=="project")}),Q=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function j(l,a,s){const t=l.slice();return t[1]=a[s],t}function $(l){let a,s;return a=new C({props:{project:l[1]}}),{c(){M(a.$$.fragment)},l(t){O(a.$$.fragment,t)},m(t,c){T(a,t,c),s=!0},p(t,c){const i={};c&1&&(i.project=t[1]),a.$set(i)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){f(a.$$.fragment,t),s=!1},d(t){Y(a,t)}}}function N(l){let a,s,t,c,i=g(l[0].projects),o=[];for(let e=0;e<i.length;e+=1)o[e]=$(j(l,i,e));const y=e=>f(o[e],1,1,()=>{o[e]=null});return{c(){a=x("meta"),s=S();for(let e=0;e<o.length;e+=1)o[e].c();t=_(),this.h()},l(e){const r=B("svelte-k3mpd3",document.head);a=q(r,"META",{name:!0,content:!0}),r.forEach(m),s=w(e);for(let n=0;n<o.length;n+=1)o[n].l(e);t=_(),this.h()},h(){document.title="Yasser B. Lebon Projects",h(a,"name","description"),h(a,"content","Yasser B. Lebon project records")},m(e,r){z(document.head,a),d(e,s,r);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(e,r);d(e,t,r),c=!0},p(e,[r]){if(r&1){i=g(e[0].projects);let n;for(n=0;n<i.length;n+=1){const u=j(e,i,n);o[n]?(o[n].p(u,r),p(o[n],1)):(o[n]=$(u),o[n].c(),p(o[n],1),o[n].m(t.parentNode,t))}for(A(),n=i.length;n<o.length;n+=1)y(n);E()}},i(e){if(!c){for(let r=0;r<i.length;r+=1)p(o[r]);c=!0}},o(e){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)f(o[r]);c=!1},d(e){e&&(m(s),m(t)),m(a),L(o,e)}}}function F(l,a,s){let{data:t}=a;return l.$$set=c=>{"data"in c&&s(0,t=c.data)},[t]}class R extends v{constructor(a){super(),P(this,a,F,N,k,{data:0})}}export{R as component,Q as universal};
