import{s as ee,n as X,a as Y}from"./scheduler.C3f_taFb.js";import{S as ae,i as se,e as u,t as N,s as A,c as h,a as _,b as R,d as o,f as P,g as l,h as te,j as F,k as t,l as B,m as le}from"./index.CSMG_fls.js";import{b as Z}from"./paths.BLRi26f2.js";function $(f){let e,a,i;return{c(){e=u("div"),a=u("img"),this.h()},l(s){e=h(s,"DIV",{class:!0});var r=_(e);a=h(r,"IMG",{src:!0,class:!0,alt:!0}),r.forEach(o),this.h()},h(){Y(a.src,i=f[0].poster)||l(a,"src",i),l(a,"class","img-fluid"),l(a,"alt","..."),l(e,"class","col-md-4")},m(s,r){F(s,e,r),t(e,a)},p(s,r){r&1&&!Y(a.src,i=s[0].poster)&&l(a,"src",i)},d(s){s&&o(e)}}}function x(f){let e,a,i='<i class="gg-readme"></i>',s;return{c(){e=u("a"),a=u("span"),a.innerHTML=i,this.h()},l(r){e=h(r,"A",{href:!0,class:!0});var m=_(e);a=h(m,"SPAN",{"data-svelte-h":!0}),le(a)!=="svelte-1n7b9cz"&&(a.innerHTML=i),m.forEach(o),this.h()},h(){l(e,"href",s=f[0].url),l(e,"class","btn btn-outline-secondary float-end")},m(r,m){F(r,e,m),t(e,a)},p(r,m){m&1&&s!==(s=r[0].url)&&l(e,"href",s)},d(r){r&&o(e)}}}function re(f){let e,a,i,s=f[0].title+"",r,m,b,S,E,p,w,D=f[0].title+"",H,T,I,V=f[0].summary+"",M,j,k,g,z,q,G,n=f[0].poster!==void 0&&$(f),d=f[0].url!==void 0&&x(f);return{c(){e=u("div"),a=u("div"),i=u("span"),r=N(s),m=A(),b=u("div"),n&&n.c(),S=A(),E=u("div"),p=u("div"),w=u("h5"),H=N(D),T=A(),I=u("p"),M=N(V),j=A(),k=u("p"),g=u("a"),z=N("link"),G=A(),d&&d.c(),this.h()},l(c){e=h(c,"DIV",{class:!0,style:!0});var v=_(e);a=h(v,"DIV",{class:!0});var J=_(a);i=h(J,"SPAN",{class:!0});var K=_(i);r=R(K,s),K.forEach(o),J.forEach(o),m=P(v),b=h(v,"DIV",{class:!0});var C=_(b);n&&n.l(C),S=P(C),E=h(C,"DIV",{class:!0});var O=_(E);p=h(O,"DIV",{class:!0});var y=_(p);w=h(y,"H5",{class:!0});var Q=_(w);H=R(Q,D),Q.forEach(o),T=P(y),I=h(y,"P",{class:!0});var U=_(I);M=R(U,V),U.forEach(o),j=P(y),k=h(y,"P",{class:!0});var L=_(k);g=h(L,"A",{href:!0,class:!0});var W=_(g);z=R(W,"link"),W.forEach(o),G=P(L),d&&d.l(L),L.forEach(o),y.forEach(o),O.forEach(o),C.forEach(o),v.forEach(o),this.h()},h(){l(i,"class","me-2 badge text-lowercase text-wrap float-end"),l(a,"class","card-header text-bg-dark"),l(w,"class","card-title"),l(I,"class","card-text"),l(g,"href",q=Z+"/reviews/"+f[0].uid),l(g,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),l(k,"class","card-text"),l(p,"class","card-body"),l(E,"class","col-md-8"),l(b,"class","row g-0"),l(e,"class","card mx-auto border-dark mt-4"),te(e,"max-width","540px")},m(c,v){F(c,e,v),t(e,a),t(a,i),t(i,r),t(e,m),t(e,b),n&&n.m(b,null),t(b,S),t(b,E),t(E,p),t(p,w),t(w,H),t(p,T),t(p,I),t(I,M),t(p,j),t(p,k),t(k,g),t(g,z),t(k,G),d&&d.m(k,null)},p(c,[v]){v&1&&s!==(s=c[0].title+"")&&B(r,s),c[0].poster!==void 0?n?n.p(c,v):(n=$(c),n.c(),n.m(b,S)):n&&(n.d(1),n=null),v&1&&D!==(D=c[0].title+"")&&B(H,D),v&1&&V!==(V=c[0].summary+"")&&B(M,V),v&1&&q!==(q=Z+"/reviews/"+c[0].uid)&&l(g,"href",q),c[0].url!==void 0?d?d.p(c,v):(d=x(c),d.c(),d.m(k,null)):d&&(d.d(1),d=null)},i:X,o:X,d(c){c&&o(e),n&&n.d(),d&&d.d()}}}function ie(f,e,a){let{review:i}=e;return f.$$set=s=>{"review"in s&&a(0,i=s.review)},[i]}class fe extends ae{constructor(e){super(),se(this,e,ie,re,ee,{review:0})}}export{fe as R};
