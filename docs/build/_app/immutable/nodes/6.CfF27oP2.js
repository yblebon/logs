import{g as S}from"../chunks/dataloader.D6h41bAH.js";import{s as L}from"../chunks/scheduler.DEf5evaE.js";import{S as j,i as F,e as u,s as Y,v as q,p as D,c as d,d as l,f as K,w as O,g as t,k as p,j as P,x as Q,q as U,u as k,y as z}from"../chunks/index.hqP8tfOH.js";import{C as G}from"../chunks/card.Bcw4ogbF.js";function R({params:o}){let a=S().filter(c=>c.section=="card").find(c=>o.slug==c.uid);return console.log(a),{card:a}}function W(){return S().filter(a=>a.section=="card").map(a=>({slug:a.uid.toString()}))}const X=Object.freeze(Object.defineProperty({__proto__:null,entries:W,load:R},Symbol.toStringTag,{value:"Module"}));function B(o){let i,a,c,r,f,_,M,g,T,h,E,v,$,b,A,w,y,s,m;return document.title=i=o[0].card.title,s=new G({props:{card:o[0].card}}),{c(){a=u("meta"),r=u("meta"),_=u("meta"),g=u("meta"),h=u("meta"),v=u("meta"),b=u("meta"),w=u("meta"),y=Y(),q(s.$$.fragment),this.h()},l(e){const n=D("svelte-1ggg8eb",document.head);a=d(n,"META",{name:!0,content:!0}),r=d(n,"META",{name:!0,content:!0}),_=d(n,"META",{property:!0,content:!0}),g=d(n,"META",{property:!0,content:!0}),h=d(n,"META",{name:!0,content:!0}),v=d(n,"META",{name:!0,content:!0}),b=d(n,"META",{name:!0,content:!0}),w=d(n,"META",{name:!0,content:!0}),n.forEach(l),y=K(e),O(s.$$.fragment,e),this.h()},h(){t(a,"name","description"),t(a,"content",c=o[0].card.text),t(r,"name","twitter:card"),t(r,"content",f=o[1].card),t(_,"property","twitter:domain"),t(_,"content",M=o[1].domain),t(g,"property","twitter:url"),t(g,"content",T=o[1].url),t(h,"name","twitter:title"),t(h,"content",E=o[1].title),t(v,"name","twitter:description"),t(v,"content",$=o[1].description),t(b,"name","twitter:image"),t(b,"content",A=o[1].image),t(w,"name","twitter:creator"),t(w,"content","@YasserLebon")},m(e,n){p(document.head,a),p(document.head,r),p(document.head,_),p(document.head,g),p(document.head,h),p(document.head,v),p(document.head,b),p(document.head,w),P(e,y,n),Q(s,e,n),m=!0},p(e,[n]){(!m||n&1)&&i!==(i=e[0].card.title)&&(document.title=i),(!m||n&1&&c!==(c=e[0].card.text))&&t(a,"content",c),(!m||n&2&&f!==(f=e[1].card))&&t(r,"content",f),(!m||n&2&&M!==(M=e[1].domain))&&t(_,"content",M),(!m||n&2&&T!==(T=e[1].url))&&t(g,"content",T),(!m||n&2&&E!==(E=e[1].title))&&t(h,"content",E),(!m||n&2&&$!==($=e[1].description))&&t(v,"content",$),(!m||n&2&&A!==(A=e[1].image))&&t(b,"content",A);const C={};n&1&&(C.card=e[0].card),s.$set(C)},i(e){m||(U(s.$$.fragment,e),m=!0)},o(e){k(s.$$.fragment,e),m=!1},d(e){e&&l(y),l(a),l(r),l(_),l(g),l(h),l(v),l(b),l(w),z(s,e)}}}function H(o,i,a){let{data:c}=i,r={};return r.title=c.card.title,r.description=c.card.text,r.domain="yblebon.github.io",r.card="summary",r.url="https://yblebon.github.io/logs/cards/"+c.card.uid,r.image="https://xenogeneic-cyan-boar.myfilebase.com/ipfs/QmQCcGKUCYm56duhMvUS2S9CKfFmLi2bcFTWYmRDw2FLvC",o.$$set=f=>{"data"in f&&a(0,c=f.data)},[c,r]}class Z extends j{constructor(i){super(),F(this,i,H,B,L,{data:0})}}export{Z as component,X as universal};
