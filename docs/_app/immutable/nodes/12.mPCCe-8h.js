import{g as S}from"../chunks/dataloader.MsrbZREo.js";import{s as P}from"../chunks/scheduler.RmCaX0Zm.js";import{S as L,i as Y,g as d,s as C,r as j,A as k,h as p,f as l,c as q,u as D,k as t,y as f,a as O,v as z,d as J,t as Q,w as R}from"../chunks/index.mSofBvwl.js";import{P as U}from"../chunks/podcast.gIAt6Y57.js";function W({params:s}){let a=S().filter(o=>o.section=="podcast").find(o=>s.slug==o.uid);return console.log(a),{podcast:a}}function X(){return S().filter(a=>a.section=="podcast").map(a=>({slug:a.uid.toString()}))}const N=Object.freeze(Object.defineProperty({__proto__:null,entries:X,load:W},Symbol.toStringTag,{value:"Module"}));function B(s){let m,a,o,i,c,w,_,M,g,A,h,E,v,T,b,$,u,r;return document.title=m=s[0].podcast.title,u=new U({props:{podcast:s[0].podcast}}),{c(){a=d("meta"),i=d("meta"),c=d("meta"),_=d("meta"),g=d("meta"),h=d("meta"),v=d("meta"),b=d("meta"),$=C(),j(u.$$.fragment),this.h()},l(e){const n=k("svelte-1dlweva",document.head);a=p(n,"META",{name:!0,content:!0}),i=p(n,"META",{name:!0,content:!0}),c=p(n,"META",{property:!0,content:!0}),_=p(n,"META",{property:!0,content:!0}),g=p(n,"META",{name:!0,content:!0}),h=p(n,"META",{name:!0,content:!0}),v=p(n,"META",{name:!0,content:!0}),b=p(n,"META",{name:!0,content:!0}),n.forEach(l),$=q(e),D(u.$$.fragment,e),this.h()},h(){t(a,"name","description"),t(a,"content",o=s[0].podcast.title),t(i,"name","twitter:card"),t(i,"content","summary"),t(c,"property","twitter:domain"),t(c,"content",w=s[1].domain),t(_,"property","twitter:url"),t(_,"content",M=s[1].url),t(g,"name","twitter:title"),t(g,"content",A=s[1].title),t(h,"name","twitter:description"),t(h,"content",E=s[1].description),t(v,"name","twitter:image"),t(v,"content",T=s[1].image),t(b,"name","twitter:creator"),t(b,"content","@YasserLebon")},m(e,n){f(document.head,a),f(document.head,i),f(document.head,c),f(document.head,_),f(document.head,g),f(document.head,h),f(document.head,v),f(document.head,b),O(e,$,n),z(u,e,n),r=!0},p(e,[n]){(!r||n&1)&&m!==(m=e[0].podcast.title)&&(document.title=m),(!r||n&1&&o!==(o=e[0].podcast.title))&&t(a,"content",o),(!r||n&2&&w!==(w=e[1].domain))&&t(c,"content",w),(!r||n&2&&M!==(M=e[1].url))&&t(_,"content",M),(!r||n&2&&A!==(A=e[1].title))&&t(g,"content",A),(!r||n&2&&E!==(E=e[1].description))&&t(h,"content",E),(!r||n&2&&T!==(T=e[1].image))&&t(v,"content",T);const y={};n&1&&(y.podcast=e[0].podcast),u.$set(y)},i(e){r||(J(u.$$.fragment,e),r=!0)},o(e){Q(u.$$.fragment,e),r=!1},d(e){e&&l($),l(a),l(i),l(c),l(_),l(g),l(h),l(v),l(b),R(u,e)}}}function F(s,m,a){let{data:o}=m,i={};return i.title=o.podcast.title,i.description=o.podcast.title,i.domain="yblebon.github.io",i.url="https://yblebon.github.io/logs/podcasts/"+o.podcast.uid,i.audio=o.podcast.url,i.image="https://ipfs.filebase.io/ipfs/QmaxYnmU94P9J785MYkm28LpnYX5vtxuSC8tRewDn4qdCW",s.$$set=c=>{"data"in c&&a(0,o=c.data)},[o,i]}class V extends L{constructor(m){super(),Y(this,m,F,B,P,{data:0})}}export{V as component,N as universal};
