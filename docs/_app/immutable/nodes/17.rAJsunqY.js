import{g as S}from"../chunks/dataloader.dwxj5rkD.js";import{s as L}from"../chunks/scheduler.RmCaX0Zm.js";import{S as j,i as O,g as c,s as P,r as V,A as k,h as f,f as d,c as q,u as z,k as e,y as p,a as B,v as C,d as D,t as Y,w as F}from"../chunks/index.mSofBvwl.js";import{V as G}from"../chunks/video.Z3h9WJSp.js";function H({params:a}){return{video:S().filter(o=>o.section=="video").find(o=>a.slug==o.uid)}}function I(){return S().filter(i=>i.section=="video").map(i=>({slug:i.uid.toString()}))}const X=Object.freeze(Object.defineProperty({__proto__:null,entries:I,load:H},Symbol.toStringTag,{value:"Module"}));function J(a){let s,i,o,r,l,$,v,w,_,A,h,E,g,M,b,T,u,m;return document.title=s=a[0].video.title,u=new G({props:{video:a[0].video}}),{c(){i=c("meta"),r=c("meta"),l=c("meta"),v=c("meta"),_=c("meta"),h=c("meta"),g=c("meta"),b=c("meta"),T=P(),V(u.$$.fragment),this.h()},l(t){const n=k("svelte-d63cmg",document.head);i=f(n,"META",{name:!0,content:!0}),r=f(n,"META",{name:!0,content:!0}),l=f(n,"META",{property:!0,content:!0}),v=f(n,"META",{property:!0,content:!0}),_=f(n,"META",{name:!0,content:!0}),h=f(n,"META",{name:!0,content:!0}),g=f(n,"META",{name:!0,content:!0}),b=f(n,"META",{name:!0,content:!0}),n.forEach(d),T=q(t),z(u.$$.fragment,t),this.h()},h(){e(i,"name","description"),e(i,"content",o=a[0].video.title),e(r,"name","twitter:card"),e(r,"content","summary"),e(l,"property","twitter:domain"),e(l,"content",$=a[1].domain),e(v,"property","twitter:url"),e(v,"content",w=a[1].url),e(_,"name","twitter:title"),e(_,"content",A=a[1].title),e(h,"name","twitter:description"),e(h,"content",E=a[1].description),e(g,"name","twitter:image"),e(g,"content",M=a[1].image),e(b,"name","twitter:creator"),e(b,"content","@YasserLebon")},m(t,n){p(document.head,i),p(document.head,r),p(document.head,l),p(document.head,v),p(document.head,_),p(document.head,h),p(document.head,g),p(document.head,b),B(t,T,n),C(u,t,n),m=!0},p(t,[n]){(!m||n&1)&&s!==(s=t[0].video.title)&&(document.title=s),(!m||n&1&&o!==(o=t[0].video.title))&&e(i,"content",o),(!m||n&2&&$!==($=t[1].domain))&&e(l,"content",$),(!m||n&2&&w!==(w=t[1].url))&&e(v,"content",w),(!m||n&2&&A!==(A=t[1].title))&&e(_,"content",A),(!m||n&2&&E!==(E=t[1].description))&&e(h,"content",E),(!m||n&2&&M!==(M=t[1].image))&&e(g,"content",M);const y={};n&1&&(y.video=t[0].video),u.$set(y)},i(t){m||(D(u.$$.fragment,t),m=!0)},o(t){Y(u.$$.fragment,t),m=!1},d(t){t&&d(T),d(i),d(r),d(l),d(v),d(_),d(h),d(g),d(b),F(u,t)}}}const K="https://ipfs.filebase.io/ipfs";function N(a,s,i){let{data:o}=s,r={};return r.title=o.video.title,r.description=o.video.title,r.domain="yblebon.github.io",r.url="https://yblebon.github.io/logs/videos/"+o.video.uid,o.video.src=="filebase"?r.video=`${K}/${o.video.id}`:r.video=o.video.src,o.video.poster==null,a.$$set=l=>{"data"in l&&i(0,o=l.data)},[o,r]}class Z extends j{constructor(s){super(),O(this,s,N,J,L,{data:0})}}export{Z as component,X as universal};
