import{s as se,f as S,n as Y}from"./scheduler.RmCaX0Zm.js";import{S as re,i as le,g as f,m as R,s as C,h,j as _,n as U,f as o,c as H,k as a,l as oe,a as O,y as d,o as F,B as ie}from"./index.mSofBvwl.js";import{e as Z}from"./each.-oqiv04n.js";import{b as $}from"./paths.Gc45-h2A.js";function x(l,e,s){const t=l.slice();return t[1]=e[s],t[3]=s,t}function ce(l){let e,s;return{c(){e=f("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,class:!0}),this.h()},h(){S(e.src,s=j+"/"+l[1].src)||a(e,"src",s),a(e,"class","card-img-top rounded-0")},m(t,r){O(t,e,r)},p(t,r){r&1&&!S(e.src,s=j+"/"+t[1].src)&&a(e,"src",s)},d(t){t&&o(e)}}}function de(l){let e,s;return{c(){e=f("iframe"),this.h()},l(t){e=h(t,"IFRAME",{id:!0,type:!0,width:!0,height:!0,src:!0,frameborder:!0});var r=_(e);r.forEach(o),this.h()},h(){a(e,"id","ytplayer"),a(e,"type","text/html"),a(e,"width","auto"),a(e,"height","300"),S(e.src,s=ae+"/"+l[1].src+"?autoplay=1&origin=http://example.com")||a(e,"src",s),a(e,"frameborder","0")},m(t,r){O(t,e,r)},p(t,r){r&1&&!S(e.src,s=ae+"/"+t[1].src+"?autoplay=1&origin=http://example.com")&&a(e,"src",s)},d(t){t&&o(e)}}}function ne(l){let e,s,t;return{c(){e=f("video"),s=f("source"),this.h()},l(r){e=h(r,"VIDEO",{class:!0,width:!0,height:!0,preload:!0,poster:!0});var n=_(e);s=h(n,"SOURCE",{src:!0,type:!0}),n.forEach(o),this.h()},h(){S(s.src,t=j+"/"+l[1].src)||a(s,"src",t),a(s,"type","video/mp4"),a(e,"class","card-img-top rounded-0 video-js"),e.controls=!0,a(e,"width","100%"),a(e,"height","300"),a(e,"preload","auto"),a(e,"poster","fafo/IMG_0461.png")},m(r,n){O(r,e,n),d(e,s)},p(r,n){n&1&&!S(s.src,t=j+"/"+r[1].src)&&a(s,"src",t)},d(r){r&&o(e)}}}function ee(l){let e,s,t,r=l[3]+1+"",n,D,w=l[1].title+"",V,k,m,b;function T(i,p){return i[1].video=="filebase"?ne:i[1].video=="youtube"?de:ce}let B=T(l),g=B(l);return{c(){e=f("div"),s=f("h2"),t=f("button"),n=R(r),D=R(` -
          `),V=R(w),k=C(),m=f("div"),b=f("div"),g.c(),this.h()},l(i){e=h(i,"DIV",{class:!0});var p=_(e);s=h(p,"H2",{class:!0});var G=_(s);t=h(G,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var I=_(t);n=U(I,r),D=U(I,` -
          `),V=U(I,w),I.forEach(o),G.forEach(o),p.forEach(o),k=H(i),m=h(i,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var N=_(m);b=h(N,"DIV",{class:!0});var M=_(b);g.l(M),M.forEach(o),N.forEach(o),this.h()},h(){a(t,"class","accordion-button text-capitalize fw-light fs-6"),a(t,"type","button"),a(t,"data-bs-toggle","collapse"),a(t,"data-bs-target","#collapse-"+l[3]),a(t,"aria-expanded","false"),a(t,"aria-controls","collapse-"+l[3]),a(s,"class","accordion-header"),a(e,"class","accordion-item"),a(b,"class","accordion-body"),a(m,"id","collapse-"+l[3]),a(m,"class","accordion-collapse collapse"),a(m,"data-bs-parent","#accordionExample")},m(i,p){O(i,e,p),d(e,s),d(s,t),d(t,n),d(t,D),d(t,V),O(i,k,p),O(i,m,p),d(m,b),g.m(b,null)},p(i,p){p&1&&w!==(w=i[1].title+"")&&F(V,w),B===(B=T(i))&&g?g.p(i,p):(g.d(1),g=B(i),g&&(g.c(),g.m(b,null)))},d(i){i&&(o(e),o(k),o(m)),g.d()}}}function te(l){let e,s=l[0].upload_date+"",t;return{c(){e=f("span"),t=R(s),this.h()},l(r){e=h(r,"SPAN",{class:!0});var n=_(e);t=U(n,s),n.forEach(o),this.h()},h(){a(e,"class","me-2 text-bg-secondary badge")},m(r,n){O(r,e,n),d(e,t)},p(r,n){n&1&&s!==(s=r[0].upload_date+"")&&F(t,s)},d(r){r&&o(e)}}}function ue(l){let e,s,t,r,n,D=l[0].title+"",w,V,k,m,b,T,B,g,i,p,G,I,N,M,A=Z(l[0].dots),v=[];for(let c=0;c<A.length;c+=1)v[c]=ee(x(l,A,c));let y=l[0].upload_date!==void 0&&te(l);return{c(){e=f("div"),s=f("div"),t=f("h2"),r=f("button"),n=f("strong"),w=R(D),V=C(),k=f("div"),m=f("div"),b=f("img"),B=C();for(let c=0;c<v.length;c+=1)v[c].c();g=C(),i=f("div"),p=f("p"),y&&y.c(),G=C(),I=f("a"),N=R("link"),this.h()},l(c){e=h(c,"DIV",{class:!0,style:!0,id:!0});var E=_(e);s=h(E,"DIV",{class:!0});var u=_(s);t=h(u,"H2",{class:!0});var q=_(t);r=h(q,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-expanded":!0,"aria-controls":!0});var J=_(r);n=h(J,"STRONG",{});var K=_(n);w=U(K,D),K.forEach(o),J.forEach(o),q.forEach(o),V=H(u),k=h(u,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var L=_(k);m=h(L,"DIV",{class:!0});var Q=_(m);b=h(Q,"IMG",{src:!0,class:!0}),Q.forEach(o),L.forEach(o),u.forEach(o),B=H(E);for(let z=0;z<v.length;z+=1)v[z].l(E);g=H(E),i=h(E,"DIV",{class:!0});var W=_(i);p=h(W,"P",{class:!0});var P=_(p);y&&y.l(P),G=H(P),I=h(P,"A",{href:!0,class:!0});var X=_(I);N=U(X,"link"),X.forEach(o),P.forEach(o),W.forEach(o),E.forEach(o),this.h()},h(){a(r,"class","accordion-button"),a(r,"type","button"),a(r,"data-bs-toggle","collapse"),a(r,"data-bs-target","#collapse-title"),a(r,"aria-expanded","true"),a(r,"aria-controls","collapse-title"),a(t,"class","accordion-header shadow"),S(b.src,T=j+"/"+l[0].poster)||a(b,"src",T),a(b,"class","card-img-top rounded-0"),a(m,"class","accordion-body"),a(k,"id","collapse-title"),a(k,"class","accordion-collapse collapse show"),a(k,"data-bs-parent","#accordion"),a(s,"class","accordion-item"),a(I,"href",M=$+"/dots/"+l[0].uid),a(I,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),a(p,"class","card-text"),a(i,"class","card-body ps-2 pt-2 pb-2 bg-light"),a(e,"class","accordion border-light bg-light mx-auto mt-4"),oe(e,"max-width","540px"),a(e,"id","accordion")},m(c,E){O(c,e,E),d(e,s),d(s,t),d(t,r),d(r,n),d(n,w),d(s,V),d(s,k),d(k,m),d(m,b),d(e,B);for(let u=0;u<v.length;u+=1)v[u]&&v[u].m(e,null);d(e,g),d(e,i),d(i,p),y&&y.m(p,null),d(p,G),d(p,I),d(I,N)},p(c,[E]){if(E&1&&D!==(D=c[0].title+"")&&F(w,D),E&1&&!S(b.src,T=j+"/"+c[0].poster)&&a(b,"src",T),E&1){A=Z(c[0].dots);let u;for(u=0;u<A.length;u+=1){const q=x(c,A,u);v[u]?v[u].p(q,E):(v[u]=ee(q),v[u].c(),v[u].m(e,g))}for(;u<v.length;u+=1)v[u].d(1);v.length=A.length}c[0].upload_date!==void 0?y?y.p(c,E):(y=te(c),y.c(),y.m(p,G)):y&&(y.d(1),y=null),E&1&&M!==(M=$+"/dots/"+c[0].uid)&&a(I,"href",M)},i:Y,o:Y,d(c){c&&o(e),ie(v,c),y&&y.d()}}}const j="https://ipfs.filebase.io/ipfs",ae="https://www.youtube.com/embed";function fe(l,e,s){let{dots:t}=e;return l.$$set=r=>{"dots"in r&&s(0,t=r.dots)},[t]}class me extends re{constructor(e){super(),le(this,e,fe,ue,se,{dots:0})}}export{me as D};
