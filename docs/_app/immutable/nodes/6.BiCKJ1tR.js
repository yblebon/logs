import{g as S}from"../chunks/dataloader.Dt4mCi5P.js";import{s as L}from"../chunks/scheduler.DEf5evaE.js";import{S as j,i as F,e as u,s as O,v as P,p as Y,c as d,d as l,f as q,w as D,g as t,k as p,j as K,x as Q,q as U,u as k,y as z}from"../chunks/index.hqP8tfOH.js";import{C as G}from"../chunks/card.Cpa7eG5I.js";function R({params:c}){let n=S().filter(o=>o.section=="card").find(o=>c.slug==o.uid);return console.log(n),{card:n}}function W(){return S().filter(n=>n.section=="card").map(n=>({slug:n.uid.toString()}))}const X=Object.freeze(Object.defineProperty({__proto__:null,entries:W,load:R},Symbol.toStringTag,{value:"Module"}));function B(c){let i,n,o,r,f,_,M,g,T,h,E,v,$,b,y,w,A,s,m;return document.title=i=c[0].card.title,s=new G({props:{card:c[0].card}}),{c(){n=u("meta"),r=u("meta"),_=u("meta"),g=u("meta"),h=u("meta"),v=u("meta"),b=u("meta"),w=u("meta"),A=O(),P(s.$$.fragment),this.h()},l(e){const a=Y("svelte-1ggg8eb",document.head);n=d(a,"META",{name:!0,content:!0}),r=d(a,"META",{name:!0,content:!0}),_=d(a,"META",{property:!0,content:!0}),g=d(a,"META",{property:!0,content:!0}),h=d(a,"META",{name:!0,content:!0}),v=d(a,"META",{name:!0,content:!0}),b=d(a,"META",{name:!0,content:!0}),w=d(a,"META",{name:!0,content:!0}),a.forEach(l),A=q(e),D(s.$$.fragment,e),this.h()},h(){t(n,"name","description"),t(n,"content",o=c[0].card.text),t(r,"name","twitter:card"),t(r,"content",f=c[1].card),t(_,"property","twitter:domain"),t(_,"content",M=c[1].domain),t(g,"property","twitter:url"),t(g,"content",T=c[1].url),t(h,"name","twitter:title"),t(h,"content",E=c[1].title),t(v,"name","twitter:description"),t(v,"content",$=c[1].description),t(b,"name","twitter:image"),t(b,"content",y=c[1].image),t(w,"name","twitter:creator"),t(w,"content","@YasserLebon")},m(e,a){p(document.head,n),p(document.head,r),p(document.head,_),p(document.head,g),p(document.head,h),p(document.head,v),p(document.head,b),p(document.head,w),K(e,A,a),Q(s,e,a),m=!0},p(e,[a]){(!m||a&1)&&i!==(i=e[0].card.title)&&(document.title=i),(!m||a&1&&o!==(o=e[0].card.text))&&t(n,"content",o),(!m||a&2&&f!==(f=e[1].card))&&t(r,"content",f),(!m||a&2&&M!==(M=e[1].domain))&&t(_,"content",M),(!m||a&2&&T!==(T=e[1].url))&&t(g,"content",T),(!m||a&2&&E!==(E=e[1].title))&&t(h,"content",E),(!m||a&2&&$!==($=e[1].description))&&t(v,"content",$),(!m||a&2&&y!==(y=e[1].image))&&t(b,"content",y);const C={};a&1&&(C.card=e[0].card),s.$set(C)},i(e){m||(U(s.$$.fragment,e),m=!0)},o(e){k(s.$$.fragment,e),m=!1},d(e){e&&l(A),l(n),l(r),l(_),l(g),l(h),l(v),l(b),l(w),z(s,e)}}}function H(c,i,n){let{data:o}=i,r={};return r.title=o.card.title,r.description=o.card.text,r.domain="yblebon.github.io",r.card="summary",r.url="https://yblebon.github.io/logs/cards/"+o.card.uid,r.image="https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmQCcGKUCYm56duhMvUS2S9CKfFmLi2bcFTWYmRDw2FLvC",o.card.hasOwnProperty("image_og")&&(r.image_og=o.card.image),c.$$set=f=>{"data"in f&&n(0,o=f.data)},[o,r]}class Z extends j{constructor(i){super(),F(this,i,H,B,L,{data:0})}}export{Z as component,X as universal};
