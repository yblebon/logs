import{g as E}from"../chunks/dataloader.6573a2c5.js";import{s as M}from"../chunks/scheduler.ef979ab2.js";import{S as w,i as P,e as _,s as A,v as S,p as j,c as g,d,f as O,w as q,g as o,k as h,j as C,x as L,q as X,u as k,y as B}from"../chunks/index.a54da72a.js";import{C as Y}from"../chunks/code.69fc77ed.js";function z({params:c}){let r=E().filter(e=>e.section=="card").find(e=>c.slug==e.uid);return console.log(r),{card:r}}function D(){return E().filter(r=>r.section=="card").map(r=>({slug:r.uid.toString()}))}const I=Object.freeze(Object.defineProperty({__proto__:null,entries:D,load:z},Symbol.toStringTag,{value:"Module"}));function G(c){let i,r,e,n,m,u,y,p,b,f,v,T,l,s;return document.title=i=c[0].card.title,l=new Y({props:{card:c[0].card}}),{c(){r=_("meta"),e=_("meta"),n=_("meta"),u=_("meta"),p=_("meta"),f=_("meta"),T=A(),S(l.$$.fragment),this.h()},l(t){const a=j("svelte-ynwjyi",document.head);r=g(a,"META",{name:!0,content:!0}),e=g(a,"META",{name:!0,content:!0}),n=g(a,"META",{property:!0,content:!0}),u=g(a,"META",{property:!0,content:!0}),p=g(a,"META",{property:!0,content:!0}),f=g(a,"META",{property:!0,content:!0}),a.forEach(d),T=O(t),q(l.$$.fragment,t),this.h()},h(){o(r,"name","twitter:card"),o(r,"content","summary"),o(e,"name","twitter:creator"),o(e,"content","@YasserLebon"),o(n,"property","og:url"),o(n,"content",m=c[1].url),o(u,"property","og:title"),o(u,"content",y=c[1].title),o(p,"property","og:description"),o(p,"content",b=c[1].description),o(f,"property","og:image"),o(f,"content",v=c[1].image)},m(t,a){h(document.head,r),h(document.head,e),h(document.head,n),h(document.head,u),h(document.head,p),h(document.head,f),C(t,T,a),L(l,t,a),s=!0},p(t,[a]){(!s||a&1)&&i!==(i=t[0].card.title)&&(document.title=i),(!s||a&2&&m!==(m=t[1].url))&&o(n,"content",m),(!s||a&2&&y!==(y=t[1].title))&&o(u,"content",y),(!s||a&2&&b!==(b=t[1].description))&&o(p,"content",b),(!s||a&2&&v!==(v=t[1].image))&&o(f,"content",v);const $={};a&1&&($.card=t[0].card),l.$set($)},i(t){s||(X(l.$$.fragment,t),s=!0)},o(t){k(l.$$.fragment,t),s=!1},d(t){t&&d(T),d(r),d(e),d(n),d(u),d(p),d(f),B(l,t)}}}function Q(c,i,r){let{data:e}=i,n={};return e.card.hasOwnProperty("code_title")?n.title=e.card.code_title:n.title=e.card.title,e.card.hasOwnProperty("code_description")?n.description=e.card.code_description:n.description=e.card.text,n.domain="yblebon.github.io",n.url="https://yblebon.github.io/logs/cards/"+e.card.uid,n.audio=e.card.url,n.image="https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmdeUdbq7B5mbnvYbXTGxrpB52P7PSEMPXv2yTXV9nkbr6",c.$$set=m=>{"data"in m&&r(0,e=m.data)},[e,n]}class J extends w{constructor(i){super(),P(this,i,Q,G,M,{data:0})}}export{J as component,I as universal};
