import{v as T}from"../chunks/videos.lsusPy0R.js";import{s as S}from"../chunks/scheduler.V7bLW0bx.js";import{S as L,i as j,g as u,s as z,r as B,B as O,h as d,f as l,c as P,u as U,k as e,y as p,a as V,v as Y,d as k,t as q,w as C}from"../chunks/index.XYr36C0K.js";import{V as F}from"../chunks/video.4CbPwB0R.js";function G({params:o}){return console.log(o),{video:T[o.slug]}}function H(){let o=Array.apply(null,Array(T.length)).map(function(r,m){return{slug:m.toString()}});return console.log(o),o}const K=Object.freeze(Object.defineProperty({__proto__:null,entries:H,load:G},Symbol.toStringTag,{value:"Module"}));function Q(o){let r,m,i,a,f,v,y,_,M,h,$,g,w,b,A,c,s;return document.title=r=o[0].video.title,c=new F({props:{video:o[0].video}}),{c(){m=u("meta"),i=u("meta"),a=u("meta"),v=u("meta"),_=u("meta"),h=u("meta"),g=u("meta"),b=u("meta"),A=z(),B(c.$$.fragment),this.h()},l(t){const n=O("svelte-ianao1",document.head);m=d(n,"META",{name:!0,content:!0}),i=d(n,"META",{name:!0,content:!0}),a=d(n,"META",{property:!0,content:!0}),v=d(n,"META",{property:!0,content:!0}),_=d(n,"META",{name:!0,content:!0}),h=d(n,"META",{name:!0,content:!0}),g=d(n,"META",{name:!0,content:!0}),b=d(n,"META",{name:!0,content:!0}),n.forEach(l),A=P(t),U(c.$$.fragment,t),this.h()},h(){e(m,"name","description"),e(m,"content",""),e(i,"name","twitter:card"),e(i,"content","summary"),e(a,"property","twitter:domain"),e(a,"content",f=o[1].domain),e(v,"property","twitter:url"),e(v,"content",y=o[1].url),e(_,"name","twitter:title"),e(_,"content",M=o[1].title),e(h,"name","twitter:description"),e(h,"content",$=o[1].description),e(g,"name","twitter:image"),e(g,"content",w=o[1].image),e(b,"name","twitter:creator"),e(b,"content","@YasserLebon")},m(t,n){p(document.head,m),p(document.head,i),p(document.head,a),p(document.head,v),p(document.head,_),p(document.head,h),p(document.head,g),p(document.head,b),V(t,A,n),Y(c,t,n),s=!0},p(t,[n]){(!s||n&1)&&r!==(r=t[0].video.title)&&(document.title=r),(!s||n&2&&f!==(f=t[1].domain))&&e(a,"content",f),(!s||n&2&&y!==(y=t[1].url))&&e(v,"content",y),(!s||n&2&&M!==(M=t[1].title))&&e(_,"content",M),(!s||n&2&&$!==($=t[1].description))&&e(h,"content",$),(!s||n&2&&w!==(w=t[1].image))&&e(g,"content",w);const E={};n&1&&(E.video=t[0].video),c.$set(E)},i(t){s||(k(c.$$.fragment,t),s=!0)},o(t){q(c.$$.fragment,t),s=!1},d(t){t&&l(A),l(m),l(i),l(a),l(v),l(_),l(h),l(g),l(b),C(c,t)}}}const R="https://ipfs.filebase.io/ipfs";function W(o,r,m){let{data:i}=r,a={};return a.title=i.video.title,a.description=i.video.title,a.domain="yblebon.github.io",a.url="https://yblebon.github.io/logs/videos/1",i.video.src=="filebase"?a.video=`${R}/${i.video.id}`:a.video=i.video.src,i.video.poster!=null&&(a.image="https://ipfs.filebase.io/ipfs/QmXUbu4HRotmzLtWbc41bMtf5yFYfh4Ma7twaxu2LjUSMG"),o.$$set=f=>{"data"in f&&m(0,i=f.data)},[i,a]}class N extends L{constructor(r){super(),j(this,r,W,Q,S,{data:0})}}export{N as component,K as universal};
