import{s as z,n as R,f as I}from"./scheduler.RmCaX0Zm.js";import{S as B,i as H,g as h,m as P,s as D,h as p,j as m,n as j,f as c,c as x,k as s,l as J,a as V,y as u,o as U}from"./index.mSofBvwl.js";import{b as F}from"./paths.0KUeWGJF.js";function K(d){let e,a,r;return{c(){e=h("video"),a=h("source"),this.h()},l(t){e=p(t,"VIDEO",{class:!0,width:!0,height:!0,preload:!0,poster:!0});var i=m(e);a=p(i,"SOURCE",{src:!0,type:!0}),i.forEach(c),this.h()},h(){I(a.src,r=d[0].url)||s(a,"src",r),s(a,"type","video/mp4"),s(e,"class","card-img-top rounded-0 video-js"),e.controls=!0,s(e,"width","100%"),s(e,"height","300"),s(e,"preload","auto"),s(e,"poster","fafo/IMG_0461.png")},m(t,i){V(t,e,i),u(e,a)},p(t,i){i&1&&!I(a.src,r=t[0].url)&&s(a,"src",r)},d(t){t&&c(e)}}}function L(d){let e,a;return{c(){e=h("iframe"),this.h()},l(r){e=p(r,"IFRAME",{id:!0,type:!0,width:!0,height:!0,src:!0,frameborder:!0});var t=m(e);t.forEach(c),this.h()},h(){s(e,"id","ytplayer"),s(e,"type","text/html"),s(e,"width","auto"),s(e,"height","300"),I(e.src,a=d[0].url+"?autoplay=1&origin=http://example.com")||s(e,"src",a),s(e,"frameborder","0")},m(r,t){V(r,e,t)},p(r,t){t&1&&!I(e.src,a=r[0].url+"?autoplay=1&origin=http://example.com")&&s(e,"src",a)},d(r){r&&c(e)}}}function G(d){let e,a=d[0].upload_date+"",r;return{c(){e=h("span"),r=P(a),this.h()},l(t){e=p(t,"SPAN",{class:!0});var i=m(e);r=j(i,a),i.forEach(c),this.h()},h(){s(e,"class","me-2 text-bg-secondary badge")},m(t,i){V(t,e,i),u(e,r)},p(t,i){i&1&&a!==(a=t[0].upload_date+"")&&U(r,a)},d(t){t&&c(e)}}}function Q(d){let e,a,r,t=d[0].title+"",i,S,y,b,_,g,v,A,k;function q(o,n){return o[0].youtube=="true"?L:K}let E=q(d),f=E(d),l=d[0].upload_date!==void 0&&G(d);return{c(){e=h("div"),a=h("div"),r=h("span"),i=P(t),S=D(),f.c(),y=D(),b=h("div"),_=h("p"),l&&l.c(),g=D(),v=h("a"),A=P("link"),this.h()},l(o){e=p(o,"DIV",{class:!0,style:!0});var n=m(e);a=p(n,"DIV",{class:!0});var C=m(a);r=p(C,"SPAN",{class:!0});var M=m(r);i=j(M,t),M.forEach(c),C.forEach(c),S=x(n),f.l(n),y=x(n),b=p(n,"DIV",{class:!0});var N=m(b);_=p(N,"P",{class:!0});var w=m(_);l&&l.l(w),g=x(w),v=p(w,"A",{href:!0,class:!0});var O=m(v);A=j(O,"link"),O.forEach(c),w.forEach(c),N.forEach(c),n.forEach(c),this.h()},h(){s(r,"class","me-2 badge text-lowercase text-wrap float-end"),s(a,"class","card-header text-bg-danger"),s(v,"href",k=F+"/videos/"+d[0].uid),s(v,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),s(_,"class","card-text"),s(b,"class","card-body bg-light"),s(e,"class","card mx-auto border-danger mt-4"),J(e,"max-width","540px")},m(o,n){V(o,e,n),u(e,a),u(a,r),u(r,i),u(e,S),f.m(e,null),u(e,y),u(e,b),u(b,_),l&&l.m(_,null),u(_,g),u(_,v),u(v,A)},p(o,[n]){n&1&&t!==(t=o[0].title+"")&&U(i,t),E===(E=q(o))&&f?f.p(o,n):(f.d(1),f=E(o),f&&(f.c(),f.m(e,y))),o[0].upload_date!==void 0?l?l.p(o,n):(l=G(o),l.c(),l.m(_,g)):l&&(l.d(1),l=null),n&1&&k!==(k=F+"/videos/"+o[0].uid)&&s(v,"href",k)},i:R,o:R,d(o){o&&c(e),f.d(),l&&l.d()}}}function T(d,e,a){let{video:r}=e;return d.$$set=t=>{"video"in t&&a(0,r=t.video)},[r]}class Z extends B{constructor(e){super(),H(this,e,T,Q,z,{video:0})}}export{Z as V};
