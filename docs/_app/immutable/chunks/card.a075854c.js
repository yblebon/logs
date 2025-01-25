import{s as Pe,n as ce,a as V}from"./scheduler.ef979ab2.js";import{S as ye,i as Oe,e as h,t as M,s as C,H as Te,c as _,a as p,b as R,d as n,f as H,B as qe,g as o,h as Ie,j as D,k as f,l as W,n as ne,o as Ce,m as ue}from"./index.a54da72a.js";import{e as de}from"./each.e59479a4.js";import{b as he}from"./paths.e9a68417.js";function _e(i,e,a){const t=i.slice();return t[1]=e[a],t}function pe(i){let e,a=de(i[0].tags),t=[];for(let l=0;l<a.length;l+=1)t[l]=me(_e(i,a,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=ne()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=ne()},m(l,s){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(l,s);D(l,e,s)},p(l,s){if(s&1){a=de(l[0].tags);let r;for(r=0;r<a.length;r+=1){const q=_e(l,a,r);t[r]?t[r].p(q,s):(t[r]=me(q),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=a.length}},d(l){l&&n(e),Ce(t,l)}}}function me(i){let e,a=i[1]+"",t;return{c(){e=h("span"),t=M(a),this.h()},l(l){e=_(l,"SPAN",{class:!0});var s=p(e);t=R(s,a),s.forEach(n),this.h()},h(){o(e,"class","mx-2 mt-0 badge bg-info text-dark float-start")},m(l,s){D(l,e,s),f(e,t)},p(l,s){s&1&&a!==(a=l[1]+"")&&W(t,a)},d(l){l&&n(e)}}}function ve(i){let e,a,t=i[0].source+"",l;return{c(){e=h("figcaption"),a=h("cite"),l=M(t),this.h()},l(s){e=_(s,"FIGCAPTION",{class:!0});var r=p(e);a=_(r,"CITE",{class:!0,title:!0});var q=p(a);l=R(q,t),q.forEach(n),r.forEach(n),this.h()},h(){o(a,"class","text-capitalize"),o(a,"title","Source Title"),o(e,"class","blockquote-footer ps-2")},m(s,r){D(s,e,r),f(e,a),f(a,l)},p(s,r){r&1&&t!==(t=s[0].source+"")&&W(l,t)},d(s){s&&n(e)}}}function ge(i){let e,a;return{c(){e=h("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,class:!0}),this.h()},h(){V(e.src,a=i[0].image)||o(e,"src",a),o(e,"class","card-img-top")},m(t,l){D(t,e,l)},p(t,l){l&1&&!V(e.src,a=t[0].image)&&o(e,"src",a)},d(t){t&&n(e)}}}function be(i){let e,a,t;return{c(){e=h("div"),a=h("iframe"),this.h()},l(l){e=_(l,"DIV",{class:!0});var s=p(e);a=_(s,"IFRAME",{src:!0,title:!0}),p(a).forEach(n),s.forEach(n),this.h()},h(){V(a.src,t=i[0].youtube)||o(a,"src",t),o(a,"title","YouTube video"),a.allowFullscreen=!0,o(e,"class","ratio ratio-16x9")},m(l,s){D(l,e,s),f(e,a)},p(l,s){s&1&&!V(a.src,t=l[0].youtube)&&o(a,"src",t)},d(l){l&&n(e)}}}function ke(i){let e,a,t,l='Sept 2023, Réunion. &quot;Why fight the time if we can rewind the time&quot; <a href="https://t.co/HhzmqdONHJ">pic.twitter.com/HhzmqdONHJ</a>',s,r,q,d,P,y,N="",L;return{c(){e=h("div"),a=h("blockquote"),t=h("p"),t.innerHTML=l,s=M("— Tea Lemon Ginger (@TeaLemonGinger) "),r=h("a"),q=M("January 24, 2025"),P=C(),y=h("script"),y.innerHTML=N,this.h()},l(O){e=_(O,"DIV",{class:!0});var T=p(e);a=_(T,"BLOCKQUOTE",{class:!0,"data-media-max-width":!0});var S=p(a);t=_(S,"P",{lang:!0,dir:!0,["data-svelte-h"]:!0}),ue(t)!=="svelte-1140crn"&&(t.innerHTML=l),s=R(S,"— Tea Lemon Ginger (@TeaLemonGinger) "),r=_(S,"A",{href:!0});var F=p(r);q=R(F,"January 24, 2025"),F.forEach(n),S.forEach(n),P=H(T),y=_(T,"SCRIPT",{src:!0,charset:!0,["data-svelte-h"]:!0}),ue(y)!=="svelte-s7rlcr"&&(y.innerHTML=N),T.forEach(n),this.h()},h(){o(t,"lang","en"),o(t,"dir","ltr"),o(r,"href",d=i[0].x_video),o(a,"class","twitter-tweet"),o(a,"data-media-max-width","560"),y.async=!0,V(y.src,L="https://platform.twitter.com/widgets.js")||o(y,"src",L),o(y,"charset","utf-8"),o(e,"class","ratio ratio-16x9")},m(O,T){D(O,e,T),f(e,a),f(a,t),f(a,s),f(a,r),f(r,q),f(e,P),f(e,y)},p(O,T){T&1&&d!==(d=O[0].x_video)&&o(r,"href",d)},d(O){O&&n(e)}}}function we(i){let e,a;return{c(){e=h("script"),this.h()},l(t){e=_(t,"SCRIPT",{src:!0});var l=p(e);l.forEach(n),this.h()},h(){V(e.src,a=i[0].code)||o(e,"src",a)},m(t,l){D(t,e,l)},p(t,l){l&1&&!V(e.src,a=t[0].code)&&o(e,"src",a)},d(t){t&&n(e)}}}function Ee(i){let e,a=i[0].upload_date+"",t;return{c(){e=h("span"),t=M(a),this.h()},l(l){e=_(l,"SPAN",{class:!0});var s=p(e);t=R(s,a),s.forEach(n),this.h()},h(){o(e,"class","me-2 badge text-bg-secondary float-start")},m(l,s){D(l,e,s),f(e,t)},p(l,s){s&1&&a!==(a=l[0].upload_date+"")&&W(t,a)},d(l){l&&n(e)}}}function He(i){let e,a,t,l,s=i[0].title+"",r,q,d,P,y=i[0].hasOwnProperty("tags"),N,L,O,T,S=i[0].text+"",F,Y=i[0].hasOwnProperty("source"),X,z,Z=i[0].hasOwnProperty("youtube"),B,$=i[0].hasOwnProperty("x_video"),U,x=i[0].hasOwnProperty("code"),ee,A,te=i[0].hasOwnProperty("upload_date"),j,G,le,K,m=y&&pe(i),v=Y&&ve(i),g=i[0].image!==void 0&&ge(i),b=Z&&be(i),k=$&&ke(i),w=x&&we(i),E=te&&Ee(i);return{c(){e=h("div"),a=h("div"),t=h("div"),l=h("span"),r=M(s),q=C(),d=h("div"),P=h("figure"),m&&m.c(),N=C(),L=h("blockquote"),O=h("p"),T=new Te(!1),F=C(),v&&v.c(),X=C(),g&&g.c(),z=C(),b&&b.c(),B=C(),k&&k.c(),U=C(),w&&w.c(),ee=C(),A=h("div"),E&&E.c(),j=C(),G=h("a"),le=M("link"),this.h()},l(c){e=_(c,"DIV",{class:!0,style:!0});var u=p(e);a=_(u,"DIV",{class:!0});var ae=p(a);t=_(ae,"DIV",{});var se=p(t);l=_(se,"SPAN",{class:!0});var ie=p(l);r=R(ie,s),ie.forEach(n),se.forEach(n),ae.forEach(n),q=H(u),d=_(u,"DIV",{class:!0});var I=p(d);P=_(I,"FIGURE",{});var J=p(P);m&&m.l(J),N=H(J),L=_(J,"BLOCKQUOTE",{class:!0});var re=p(L);O=_(re,"P",{class:!0});var oe=p(O);T=qe(oe,!1),oe.forEach(n),re.forEach(n),F=H(J),v&&v.l(J),J.forEach(n),X=H(I),g&&g.l(I),z=H(I),b&&b.l(I),B=H(I),k&&k.l(I),U=H(I),w&&w.l(I),I.forEach(n),ee=H(u),A=_(u,"DIV",{class:!0});var Q=p(A);E&&E.l(Q),j=H(Q),G=_(Q,"A",{href:!0,class:!0});var fe=p(G);le=R(fe,"link"),fe.forEach(n),Q.forEach(n),u.forEach(n),this.h()},h(){o(l,"class","outfit-variable me-2 fw-bolder fs-6 text-lowercase text-wrap float-start svelte-t87adm"),o(a,"class","card-header text-bg-dark"),T.a=null,o(O,"class","quicksand-400 fs-6"),o(L,"class","blockquote ps-2 pt-0"),o(d,"class","card-body"),o(G,"href",K=he+"/card/"+i[0].uid),o(G,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),o(A,"class","card-footer"),o(e,"class","card shadow-sm mx-auto rounded-3 border-dark mt-4 h-100"),Ie(e,"max-width","540px")},m(c,u){D(c,e,u),f(e,a),f(a,t),f(t,l),f(l,r),f(e,q),f(e,d),f(d,P),m&&m.m(P,null),f(P,N),f(P,L),f(L,O),T.m(S,O),f(P,F),v&&v.m(P,null),f(d,X),g&&g.m(d,null),f(d,z),b&&b.m(d,null),f(d,B),k&&k.m(d,null),f(d,U),w&&w.m(d,null),f(e,ee),f(e,A),E&&E.m(A,null),f(A,j),f(A,G),f(G,le)},p(c,[u]){u&1&&s!==(s=c[0].title+"")&&W(r,s),u&1&&(y=c[0].hasOwnProperty("tags")),y?m?m.p(c,u):(m=pe(c),m.c(),m.m(P,N)):m&&(m.d(1),m=null),u&1&&S!==(S=c[0].text+"")&&T.p(S),u&1&&(Y=c[0].hasOwnProperty("source")),Y?v?v.p(c,u):(v=ve(c),v.c(),v.m(P,null)):v&&(v.d(1),v=null),c[0].image!==void 0?g?g.p(c,u):(g=ge(c),g.c(),g.m(d,z)):g&&(g.d(1),g=null),u&1&&(Z=c[0].hasOwnProperty("youtube")),Z?b?b.p(c,u):(b=be(c),b.c(),b.m(d,B)):b&&(b.d(1),b=null),u&1&&($=c[0].hasOwnProperty("x_video")),$?k?k.p(c,u):(k=ke(c),k.c(),k.m(d,U)):k&&(k.d(1),k=null),u&1&&(x=c[0].hasOwnProperty("code")),x?w?w.p(c,u):(w=we(c),w.c(),w.m(d,null)):w&&(w.d(1),w=null),u&1&&(te=c[0].hasOwnProperty("upload_date")),te?E?E.p(c,u):(E=Ee(c),E.c(),E.m(A,j)):E&&(E.d(1),E=null),u&1&&K!==(K=he+"/card/"+c[0].uid)&&o(G,"href",K)},i:ce,o:ce,d(c){c&&n(e),m&&m.d(),v&&v.d(),g&&g.d(),b&&b.d(),k&&k.d(),w&&w.d(),E&&E.d()}}}function Le(i,e,a){let{card:t}=e;return i.$$set=l=>{"card"in l&&a(0,t=l.card)},[t]}class Ne extends ye{constructor(e){super(),Oe(this,e,Le,He,Pe,{card:0})}}export{Ne as C};
