import{g as S}from"../chunks/dataloader.CzMOc8pl.js";import{s as C}from"../chunks/scheduler.C3f_taFb.js";import{S as L,i as Y,e as d,s as j,v as q,p as P,c as p,d as s,f as k,w as D,g as t,k as f,j as O,x as z,q as J,u as Q,y as R}from"../chunks/index.FmdhhjWK.js";import{C as U}from"../chunks/card.Brb-pQoZ.js";function W({params:r}){let a=S().filter(o=>o.section=="card").find(o=>r.slug==o.uid);return console.log(a),{card:a}}function X(){return S().filter(a=>a.section=="card").map(a=>({slug:a.uid.toString()}))}const N=Object.freeze(Object.defineProperty({__proto__:null,entries:X,load:W},Symbol.toStringTag,{value:"Module"}));function B(r){let c,a,o,i,l,w,_,M,g,E,h,T,v,$,b,A,u,m;return document.title=c=r[0].card.title,u=new U({props:{card:r[0].card}}),{c(){a=d("meta"),i=d("meta"),l=d("meta"),_=d("meta"),g=d("meta"),h=d("meta"),v=d("meta"),b=d("meta"),A=j(),q(u.$$.fragment),this.h()},l(e){const n=P("svelte-mc5ai8",document.head);a=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),l=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{property:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),b=p(n,"META",{name:!0,content:!0}),n.forEach(s),A=k(e),D(u.$$.fragment,e),this.h()},h(){t(a,"name","description"),t(a,"content",o=r[0].card.title),t(i,"name","twitter:card"),t(i,"content","summary"),t(l,"property","twitter:domain"),t(l,"content",w=r[1].domain),t(_,"property","twitter:url"),t(_,"content",M=r[1].url),t(g,"name","twitter:title"),t(g,"content",E=r[1].title),t(h,"name","twitter:description"),t(h,"content",T=r[1].description),t(v,"name","twitter:image"),t(v,"content",$=r[1].image),t(b,"name","twitter:creator"),t(b,"content","@YasserLebon")},m(e,n){f(document.head,a),f(document.head,i),f(document.head,l),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,v),f(document.head,b),O(e,A,n),z(u,e,n),m=!0},p(e,[n]){(!m||n&1)&&c!==(c=e[0].card.title)&&(document.title=c),(!m||n&1&&o!==(o=e[0].card.title))&&t(a,"content",o),(!m||n&2&&w!==(w=e[1].domain))&&t(l,"content",w),(!m||n&2&&M!==(M=e[1].url))&&t(_,"content",M),(!m||n&2&&E!==(E=e[1].title))&&t(g,"content",E),(!m||n&2&&T!==(T=e[1].description))&&t(h,"content",T),(!m||n&2&&$!==($=e[1].image))&&t(v,"content",$);const y={};n&1&&(y.card=e[0].card),u.$set(y)},i(e){m||(J(u.$$.fragment,e),m=!0)},o(e){Q(u.$$.fragment,e),m=!1},d(e){e&&s(A),s(a),s(i),s(l),s(_),s(g),s(h),s(v),s(b),R(u,e)}}}function F(r,c,a){let{data:o}=c,i={};return i.title=o.card.title,i.description=o.card.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/cards/"+o.card.uid,i.audio=o.card.url,i.image="https://ipfs.filebase.io/ipfs/QmaxYnmU94P9J785MYkm28LpnYX5vtxuSC8tRewDn4qdCW",r.$$set=l=>{"data"in l&&a(0,o=l.data)},[o,i]}class V extends L{constructor(c){super(),Y(this,c,F,B,C,{data:0})}}export{V as component,N as universal};