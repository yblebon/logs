import{g as S}from"../chunks/dataloader.bba90a12.js";import{s as L}from"../chunks/scheduler.ef979ab2.js";import{S as O,i as P,e as s,s as j,v as F,p as Y,c as u,d as l,f as q,w as D,g as t,k as p,j as K,x as Q,q as U,u as k,y as z}from"../chunks/index.a54da72a.js";import{C as G}from"../chunks/card.a0bc7d69.js";function R({params:c}){let r=S().filter(n=>n.section=="card").find(n=>c.slug==n.uid);return console.log(r),{card:r}}function W(){return S().filter(r=>r.section=="card").map(r=>({slug:r.uid.toString()}))}const X=Object.freeze(Object.defineProperty({__proto__:null,entries:W,load:R},Symbol.toStringTag,{value:"Module"}));function B(c){let i,r,n,o,_,f,M,g,T,h,y,v,E,b,$,w,A,d,m;return document.title=i=c[0].card.title,d=new G({props:{card:c[0].card}}),{c(){r=s("meta"),o=s("meta"),f=s("meta"),g=s("meta"),h=s("meta"),v=s("meta"),b=s("meta"),w=s("meta"),A=j(),F(d.$$.fragment),this.h()},l(e){const a=Y("svelte-1ggg8eb",document.head);r=u(a,"META",{name:!0,content:!0}),o=u(a,"META",{name:!0,content:!0}),f=u(a,"META",{property:!0,content:!0}),g=u(a,"META",{property:!0,content:!0}),h=u(a,"META",{name:!0,content:!0}),v=u(a,"META",{name:!0,content:!0}),b=u(a,"META",{name:!0,content:!0}),w=u(a,"META",{name:!0,content:!0}),a.forEach(l),A=q(e),D(d.$$.fragment,e),this.h()},h(){t(r,"name","description"),t(r,"content",n=c[0].card.text),t(o,"name","twitter:card"),t(o,"content",_=c[1].card),t(f,"property","twitter:domain"),t(f,"content",M=c[1].domain),t(g,"property","twitter:url"),t(g,"content",T=c[1].url),t(h,"name","twitter:title"),t(h,"content",y=c[1].title),t(v,"name","twitter:description"),t(v,"content",E=c[1].description),t(b,"name","twitter:image"),t(b,"content",$=c[1].image),t(w,"name","twitter:creator"),t(w,"content","@YasserLebon")},m(e,a){p(document.head,r),p(document.head,o),p(document.head,f),p(document.head,g),p(document.head,h),p(document.head,v),p(document.head,b),p(document.head,w),K(e,A,a),Q(d,e,a),m=!0},p(e,[a]){(!m||a&1)&&i!==(i=e[0].card.title)&&(document.title=i),(!m||a&1&&n!==(n=e[0].card.text))&&t(r,"content",n),(!m||a&2&&_!==(_=e[1].card))&&t(o,"content",_),(!m||a&2&&M!==(M=e[1].domain))&&t(f,"content",M),(!m||a&2&&T!==(T=e[1].url))&&t(g,"content",T),(!m||a&2&&y!==(y=e[1].title))&&t(h,"content",y),(!m||a&2&&E!==(E=e[1].description))&&t(v,"content",E),(!m||a&2&&$!==($=e[1].image))&&t(b,"content",$);const C={};a&1&&(C.card=e[0].card),d.$set(C)},i(e){m||(U(d.$$.fragment,e),m=!0)},o(e){k(d.$$.fragment,e),m=!1},d(e){e&&l(A),l(r),l(o),l(f),l(g),l(h),l(v),l(b),l(w),z(d,e)}}}function H(c,i,r){let{data:n}=i,o={};return o.title=n.card.title,o.description=n.card.text,o.domain="yblebon.github.io",o.card="summary",n.card.hasOwnProperty("og_card")&&(o.card=n.card.og_card),o.url="https://yblebon.github.io/logs/cards/"+n.card.uid,o.image="https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmQCcGKUCYm56duhMvUS2S9CKfFmLi2bcFTWYmRDw2FLvC",n.card.hasOwnProperty("og_image")&&(o.image=n.card.og_image),c.$$set=_=>{"data"in _&&r(0,n=_.data)},[n,o]}class Z extends O{constructor(i){super(),P(this,i,H,B,L,{data:0})}}export{Z as component,X as universal};
