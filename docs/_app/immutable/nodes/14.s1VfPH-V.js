import{g as y}from"../chunks/dataloader.hwhFQoBS.js";import{s as S}from"../chunks/scheduler.RmCaX0Zm.js";import{S as L,i as j,g as u,s as B,r as O,B as P,h as c,f as l,c as V,u as k,k as e,y as p,a as q,v as z,d as C,t as D,w as Y}from"../chunks/index.6mm3ru-L.js";import{V as F}from"../chunks/video.PxRplJDw.js";function G({params:i}){return{video:y().filter(t=>t.section=="video").find(t=>i.slug==t.uid)}}function H(){return y().filter(r=>r.section=="video").map(r=>({slug:r.uid.toString()}))}const W=Object.freeze(Object.defineProperty({__proto__:null,entries:H,load:G},Symbol.toStringTag,{value:"Module"}));function I(i){let m,r,t,a,f,v,$,_,w,h,E,g,M,b,T,d,s;return document.title=m=i[0].video.title,d=new F({props:{video:i[0].video}}),{c(){r=u("meta"),t=u("meta"),a=u("meta"),v=u("meta"),_=u("meta"),h=u("meta"),g=u("meta"),b=u("meta"),T=B(),O(d.$$.fragment),this.h()},l(n){const o=P("svelte-ianao1",document.head);r=c(o,"META",{name:!0,content:!0}),t=c(o,"META",{name:!0,content:!0}),a=c(o,"META",{property:!0,content:!0}),v=c(o,"META",{property:!0,content:!0}),_=c(o,"META",{name:!0,content:!0}),h=c(o,"META",{name:!0,content:!0}),g=c(o,"META",{name:!0,content:!0}),b=c(o,"META",{name:!0,content:!0}),o.forEach(l),T=V(n),k(d.$$.fragment,n),this.h()},h(){e(r,"name","description"),e(r,"content",""),e(t,"name","twitter:card"),e(t,"content","summary"),e(a,"property","twitter:domain"),e(a,"content",f=i[1].domain),e(v,"property","twitter:url"),e(v,"content",$=i[1].url),e(_,"name","twitter:title"),e(_,"content",w=i[1].title),e(h,"name","twitter:description"),e(h,"content",E=i[1].description),e(g,"name","twitter:image"),e(g,"content",M=i[1].image),e(b,"name","twitter:creator"),e(b,"content","@YasserLebon")},m(n,o){p(document.head,r),p(document.head,t),p(document.head,a),p(document.head,v),p(document.head,_),p(document.head,h),p(document.head,g),p(document.head,b),q(n,T,o),z(d,n,o),s=!0},p(n,[o]){(!s||o&1)&&m!==(m=n[0].video.title)&&(document.title=m),(!s||o&2&&f!==(f=n[1].domain))&&e(a,"content",f),(!s||o&2&&$!==($=n[1].url))&&e(v,"content",$),(!s||o&2&&w!==(w=n[1].title))&&e(_,"content",w),(!s||o&2&&E!==(E=n[1].description))&&e(h,"content",E),(!s||o&2&&M!==(M=n[1].image))&&e(g,"content",M);const A={};o&1&&(A.video=n[0].video),d.$set(A)},i(n){s||(C(d.$$.fragment,n),s=!0)},o(n){D(d.$$.fragment,n),s=!1},d(n){n&&l(T),l(r),l(t),l(a),l(v),l(_),l(h),l(g),l(b),Y(d,n)}}}const J="https://ipfs.filebase.io/ipfs";function K(i,m,r){let{data:t}=m,a={};return a.title=t.video.title,a.description=t.video.title,a.domain="yblebon.github.io",a.url="https://yblebon.github.io/logs/videos/"+t.video.uid,t.video.src=="filebase"?a.video=`${J}/${t.video.id}`:a.video=t.video.src,t.video.poster==null,i.$$set=f=>{"data"in f&&r(0,t=f.data)},[t,a]}class X extends L{constructor(m){super(),j(this,m,K,I,S,{data:0})}}export{X as component,W as universal};
