import{s as K,n as B}from"./scheduler.RmCaX0Zm.js";import{S as O,i as Q,g as _,m as I,s as w,h as m,j as v,n as N,f as h,c as D,k as c,l as R,a as M,y as d,o as L,x as U}from"./index.mSofBvwl.js";import{b as F}from"./paths.KBqxzxq-.js";function G(o){let e,t=o[0].date+"",l;return{c(){e=_("span"),l=I(t),this.h()},l(a){e=m(a,"SPAN",{class:!0});var s=v(e);l=N(s,t),s.forEach(h),this.h()},h(){c(e,"class","me-2 text-bg-secondary badge")},m(a,s){M(a,e,s),d(e,l)},p(a,s){s&1&&t!==(t=a[0].date+"")&&L(l,t)},d(a){a&&h(e)}}}function J(o){let e,t,l='<i class="gg-readme"></i>',a;return{c(){e=_("a"),t=_("span"),t.innerHTML=l,this.h()},l(s){e=m(s,"A",{href:!0,class:!0});var p=v(e);t=m(p,"SPAN",{"data-svelte-h":!0}),U(t)!=="svelte-14s08wz"&&(t.innerHTML=l),p.forEach(h),this.h()},h(){c(e,"href",a=o[0].url),c(e,"class","btn btn-outline-secondary float-end")},m(s,p){M(s,e,p),d(e,t)},p(s,p){p&1&&a!==(a=s[0].url)&&c(e,"href",a)},d(s){s&&h(e)}}}function W(o){let e,t,l,a=o[0].title+"",s,p,b,k,j=o[0].description+"",y,V,f,P,g,C,A,H,r=o[0].date!==void 0&&G(o),i=o[0].url!==void 0&&J(o);return{c(){e=_("div"),t=_("div"),l=_("span"),s=I(a),p=w(),b=_("div"),k=_("p"),y=I(j),V=w(),f=_("p"),r&&r.c(),P=w(),g=_("a"),C=I("link"),H=w(),i&&i.c(),this.h()},l(n){e=m(n,"DIV",{class:!0,style:!0});var u=v(e);t=m(u,"DIV",{class:!0});var T=v(t);l=m(T,"SPAN",{class:!0});var q=v(l);s=N(q,a),q.forEach(h),T.forEach(h),p=D(u),b=m(u,"DIV",{class:!0});var S=v(b);k=m(S,"P",{class:!0});var x=v(k);y=N(x,j),x.forEach(h),V=D(S),f=m(S,"P",{class:!0});var E=v(f);r&&r.l(E),P=D(E),g=m(E,"A",{href:!0,class:!0});var z=v(g);C=N(z,"link"),z.forEach(h),H=D(E),i&&i.l(E),E.forEach(h),S.forEach(h),u.forEach(h),this.h()},h(){c(l,"class","me-2 badge text-lowercase text-wrap float-end"),c(t,"class","card-header text-bg-danger"),c(k,"class","card-text"),c(g,"href",A=F+"/projects/"+o[0].uid),c(g,"class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"),c(f,"class","card-text"),c(b,"class","card-body bg-light"),c(e,"class","card mx-auto border-danger mt-4"),R(e,"max-width","540px")},m(n,u){M(n,e,u),d(e,t),d(t,l),d(l,s),d(e,p),d(e,b),d(b,k),d(k,y),d(b,V),d(b,f),r&&r.m(f,null),d(f,P),d(f,g),d(g,C),d(f,H),i&&i.m(f,null)},p(n,[u]){u&1&&a!==(a=n[0].title+"")&&L(s,a),u&1&&j!==(j=n[0].description+"")&&L(y,j),n[0].date!==void 0?r?r.p(n,u):(r=G(n),r.c(),r.m(f,P)):r&&(r.d(1),r=null),u&1&&A!==(A=F+"/projects/"+n[0].uid)&&c(g,"href",A),n[0].url!==void 0?i?i.p(n,u):(i=J(n),i.c(),i.m(f,null)):i&&(i.d(1),i=null)},i:B,o:B,d(n){n&&h(e),r&&r.d(),i&&i.d()}}}function X(o,e,t){let{project:l}=e;return o.$$set=a=>{"project"in a&&t(0,l=a.project)},[l]}class ee extends O{constructor(e){super(),Q(this,e,X,W,K,{project:0})}}export{ee as P};
