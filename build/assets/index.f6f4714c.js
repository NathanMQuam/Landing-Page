import{r as e,c as t,o as a,a as o,b as n,F as r,d as s,e as i,f as c,C as l,i as u,S as d,g as p,p as g,h as m,t as h,w as b,j as v,k as f}from"./vendor.7088e066.js";const w=e({user:{},account:{}});const E={name:"App",setup:()=>({appState:t((()=>w))})},A=n("footer",null,[n("div",{class:"bg-dark text-light text-center p-4"}," Made with 💖 by CodeWorks ")],-1);E.render=function(e,t,i,c,l,u){const d=s("Navbar"),p=s("router-view");return a(),o(r,null,[n("header",null,[n(d)]),n("main",null,[n(p)]),A],64)};const T=window.location.origin.includes("localhost"),_=T?"http://localhost:3000":"";let k;const C={},y=function(e,t){if(!t||0===t.length)return e();if(void 0===k){const e=document.createElement("link").relList;k=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in C)return;C[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":k,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};function O(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return y((()=>import("./AboutPage.0b1fea38.js")),["/landing-page/assets/AboutPage.0b1fea38.js","/landing-page/assets/vendor.7088e066.js"]);case"./pages/AccountPage.vue":return y((()=>import("./AccountPage.0c6e6ab1.js")),["/landing-page/assets/AccountPage.0c6e6ab1.js","/landing-page/assets/AccountPage.f3fa63f7.css","/landing-page/assets/vendor.7088e066.js"]);case"./pages/HomePage.vue":return y((()=>import("./HomePage.27e143e8.js")),["/landing-page/assets/HomePage.27e143e8.js","/landing-page/assets/HomePage.c342d46c.css","/landing-page/assets/vendor.7088e066.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}(`./pages/${e}.vue`)}const x=[{path:"/",name:"Home",component:O("HomePage")},{path:"/about",name:"About",component:O("AboutPage")}],P=i({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:c(),routes:x});function R(e,t){if(T)console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t);else{switch(e){case"log":case"assert":return}console[e](`[${e}] :: ${(new Date).toLocaleTimeString()} :: `,...t)}}const S={log(){R("log",arguments)},error(){R("error",arguments)},warn(){R("warn",arguments)},assert(){R("assert",arguments)},trace(){R("trace",arguments)}},H=l.create({baseURL:_,timeout:8e3});const I=new class{async getAccount(){try{const e=await H.get("/account");w.account=e.data}catch(e){S.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}};let N=!1,D=[];const L="connected",U="authenticate",j="authenticated",$="error";const B=new class extends class{constructor(e=_){this.socket=u(e||_),this.on(L,this.onConnected).on(j,this.onAuthenticated).on($,this.onError)}on(e,t){return this.socket.on(e,t.bind(this)),this}onConnected(e){S.log("[SOCKET_CONNECTION]",e),N=!0}onAuthenticated(e){S.log("[SOCKET_AUTHENTICATED]",e);const t=[...D];D=[],t.forEach((e=>{this.emit(e.action,e.payload)}))}authenticate(e){this.socket.emit(U,e)}onError(e){S.error("[SOCKET_ERROR]",e)}emit(e,t){if(!N)return S.log("[ENQUEING_ACTION]",{action:e,payload:t}),D.push({action:e,payload:t});this.socket.emit(e,t)}}{constructor(){super(),this.on("error",this.onError)}onError(e){S.error("[SOCKET_ERROR]",e),class{static async confirm(e="Are you sure?",t="You won't be able to revert this!",a="warning",o="Yes, delete it!"){try{return!!(await d.fire({title:e,text:t,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:o})).isConfirmed}catch(n){return!1}}static toast(e="Warning!",t="warning",a="top-end",o=3e3,n=!0){d.fire({title:e,icon:t,position:a,timer:o,timerProgressBar:n,toast:!0,showConfirmButton:!1})}}.toast(e.message,"error")}},V=p({domain:"",clientId:"",audience:"",useRefreshTokens:!0,onRedirectCallback:e=>{P.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});async function W(e){if(!V.isAuthenticated)return e;const t=1e3*V.identity.exp,a=t<Date.now(),o=t<Date.now()+432e5;return a?await V.loginWithPopup():o&&(await V.getTokenSilently(),H.defaults.headers.authorization=V.bearer,B.authenticate(V.bearer)),e}V.on(V.AUTH_EVENTS.AUTHENTICATED,(async function(){H.defaults.headers.authorization=V.bearer,H.interceptors.request.use(W),w.user=V.user,await I.getAccount(),B.authenticate(V.bearer)}));const Y={setup:()=>({state:e({dropOpen:!1}),user:t((()=>w.user)),async login(){V.loginWithPopup()},async logout(){V.logout({returnTo:window.location.origin})}})},K=b("data-v-1fe0b358");g("data-v-1fe0b358");const z={class:"navbar navbar-expand-lg navbar-dark bg-dark"},q=n("div",{class:"d-flex flex-column align-items-center"},[n("img",{alt:"logo",src:"/landing-page/assets/cw-logo.71baeadb.png",height:"45"})],-1),M=n("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[n("span",{class:"navbar-toggler-icon"})],-1),F={class:"collapse navbar-collapse",id:"navbarText"},G={class:"navbar-nav mr-auto"},Q={class:"nav-item"},J=v(" Home "),X={class:"nav-item"},Z=v(" About "),ee={class:"navbar-text"},te={key:1,class:"dropdown"},ae={class:"mx-3"},oe=n("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);m();const ne=K(((e,t,r,i,c,l)=>{const u=s("router-link");return a(),o("nav",z,[n(u,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:K((()=>[q])),_:1}),M,n("div",F,[n("ul",G,[n("li",Q,[n(u,{to:{name:"Home"},class:"nav-link"},{default:K((()=>[J])),_:1})]),n("li",X,[n(u,{to:{name:"About"},class:"nav-link"},{default:K((()=>[Z])),_:1})])]),n("span",ee,[i.user.isAuthenticated?(a(),o("div",te,[n("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>i.state.dropOpen=!i.state.dropOpen)},[n("img",{src:i.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),n("span",ae,h(i.user.name),1)]),n("div",{class:["dropdown-menu p-0 list-group w-100",{show:i.state.dropOpen}],onClick:t[4]||(t[4]=e=>i.state.dropOpen=!1)},[n(u,{to:{name:"Account"}},{default:K((()=>[oe])),_:1}),n("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>i.logout&&i.logout(...e))}," logout ")],2)])):(a(),o("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>i.login&&i.login(...e))}," Login "))])])])}));Y.render=ne,Y.__scopeId="data-v-1fe0b358";var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const se=f(E);!function(e){const t={"./components/Navbar.vue":re};Object.entries(t).forEach((([t,a])=>{const o=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,a.default)}))}(se),se.use(P).mount("#app");export{w as A};