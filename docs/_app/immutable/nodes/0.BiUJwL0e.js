import{i as oe}from"../chunks/dataloader.BjvAHSnM.js";import{s as ne,n as U,r as ie,b as ce,u as ue,g as de,d as fe}from"../chunks/scheduler.DEf5evaE.js";import{S as le,i as re,e as i,s as $,c,a as b,m as H,f as y,d as u,g as e,j as V,k as r,A as Y,v as ve,w as me,x as be,q as ae,u as se,y as _e}from"../chunks/index.hqP8tfOH.js";import{b as D}from"../chunks/paths.C76a0j11.js";const pe=!0;oe();const Ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:pe},Symbol.toStringTag,{value:"Module"}));function he(m){let s,a,o,d='<strong>Log</strong> <small class="text-body-warning">Y.B</small> <small class="text-body-danger">Lebon</small>',v,n,f='<span class="navbar-toggler-icon"></span>',t,l,_,L,S,h,F="Home",P,A,E,g,G="Cards",q,I,k,x,J="Sources",O,p,K="Contact",j,w,z,Q;return{c(){s=i("nav"),a=i("div"),o=i("a"),o.innerHTML=d,v=$(),n=i("button"),n.innerHTML=f,t=$(),l=i("div"),_=i("ul"),L=i("li"),S=i("a"),h=i("span"),h.textContent=F,P=$(),A=i("li"),E=i("a"),g=i("span"),g.textContent=G,q=$(),I=i("li"),k=i("a"),x=i("span"),x.textContent=J,O=$(),p=i("a"),p.textContent=K,j=$(),w=i("div"),this.h()},l(C){s=c(C,"NAV",{class:!0});var N=b(s);a=c(N,"DIV",{class:!0});var T=b(a);o=c(T,"A",{class:!0,href:!0,"data-svelte-h":!0}),H(o)!=="svelte-ed6nvz"&&(o.innerHTML=d),v=y(T),n=c(T,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),H(n)!=="svelte-1eytg9k"&&(n.innerHTML=f),t=y(T),l=c(T,"DIV",{class:!0,id:!0});var B=b(l);_=c(B,"UL",{class:!0});var M=b(_);L=c(M,"LI",{class:!0});var R=b(L);S=c(R,"A",{class:!0,href:!0});var W=b(S);h=c(W,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),H(h)!=="svelte-19p81j0"&&(h.textContent=F),W.forEach(u),R.forEach(u),P=y(M),A=c(M,"LI",{class:!0});var X=b(A);E=c(X,"A",{class:!0,href:!0});var Z=b(E);g=c(Z,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),H(g)!=="svelte-nc6iod"&&(g.textContent=G),Z.forEach(u),X.forEach(u),q=y(M),I=c(M,"LI",{class:!0});var ee=b(I);k=c(ee,"A",{class:!0,href:!0});var te=b(k);x=c(te,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),H(x)!=="svelte-anxcev"&&(x.textContent=J),te.forEach(u),ee.forEach(u),M.forEach(u),O=y(B),p=c(B,"A",{class:!0,href:!0,tabindex:!0,"aria-disabled":!0,"data-svelte-h":!0}),H(p)!=="svelte-1o2rrwq"&&(p.textContent=K),B.forEach(u),T.forEach(u),N.forEach(u),j=y(C),w=c(C,"DIV",{class:!0}),b(w).forEach(u),this.h()},h(){e(o,"class","navbar-brand fs-2"),e(o,"href","#"),e(n,"class","navbar-toggler"),e(n,"type","button"),e(n,"data-bs-toggle","collapse"),e(n,"data-bs-target","#navbarNav"),e(n,"aria-controls","navbarNav"),e(n,"aria-expanded","false"),e(n,"aria-label","Toggle navigation"),e(h,"id","home"),e(h,"class","fw-bolder text-decoration-underline text-black"),e(S,"class","nav-link"),e(S,"href",D+"/"),e(L,"class","nav-item"),e(g,"id","cards"),e(g,"class","fw-bolder text-black"),e(E,"class","nav-link"),e(E,"href",D+"/cards"),e(A,"class","nav-item"),e(x,"id","sources"),e(x,"class","fw-bolder text-black"),e(k,"class","nav-link"),e(k,"href",D+"/sources"),e(I,"class","nav-item"),e(_,"class","navbar-nav"),e(p,"class","ms-3 fw-bolder nav-link float-end"),e(p,"href",D+"/contact"),e(p,"tabindex","-1"),e(p,"aria-disabled","true"),e(l,"class","collapse navbar-collapse"),e(l,"id","navbarNav"),e(a,"class","container-fluid"),e(s,"class","navbar navbar-expand-lg navbar-light bg-light"),e(w,"class","border-bottom border-2 border-black")},m(C,N){V(C,s,N),r(s,a),r(a,o),r(a,v),r(a,n),r(a,t),r(a,l),r(l,_),r(_,L),r(L,S),r(S,h),r(_,P),r(_,A),r(A,E),r(E,g),r(_,q),r(_,I),r(I,k),r(k,x),r(l,O),r(l,p),V(C,j,N),V(C,w,N),z||(Q=[Y(h,"click",m[0]),Y(g,"click",onChange),Y(x,"click",m[0])],z=!0)},p:U,i:U,o:U,d(C){C&&(u(s),u(j),u(w)),z=!1,ie(Q)}}}function ge(m,s,a){let o="home",{onSubmit:d}=s;function v(){document.getElementById(o).classList.remove("text-decoration-underline"),o=this.id,document.getElementById(o).classList.add("text-decoration-underline")}return m.$$set=n=>{"onSubmit"in n&&a(1,d=n.onSubmit)},[v,d]}class xe extends le{constructor(s){super(),re(this,s,ge,he,ne,{onSubmit:1})}}function Ce(m){let s,a,o,d,v;a=new xe({props:{onSubmit:$e}});const n=m[1].default,f=ce(n,m,m[0],null);return{c(){s=$(),ve(a.$$.fragment),o=$(),d=i("div"),f&&f.c(),this.h()},l(t){s=y(t),me(a.$$.fragment,t),o=y(t),d=c(t,"DIV",{class:!0});var l=b(d);f&&f.l(l),l.forEach(u),this.h()},h(){e(d,"class","container-sm")},m(t,l){V(t,s,l),be(a,t,l),V(t,o,l),V(t,d,l),f&&f.m(d,null),v=!0},p(t,[l]){f&&f.p&&(!v||l&1)&&ue(f,n,t,t[0],v?fe(n,t[0],l,null):de(t[0]),null)},i(t){v||(ae(a.$$.fragment,t),ae(f,t),v=!0)},o(t){se(a.$$.fragment,t),se(f,t),v=!1},d(t){t&&(u(s),u(o),u(d)),_e(a,t),f&&f.d(t)}}}function $e(m){console.log(m)}function ye(m,s,a){let{$$slots:o={},$$scope:d}=s;return m.$$set=v=>{"$$scope"in v&&a(0,d=v.$$scope)},[d,o]}class Ie extends le{constructor(s){super(),re(this,s,ye,Ce,ne,{})}}export{Ie as component,Ae as universal};
