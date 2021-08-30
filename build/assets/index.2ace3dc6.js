import{r as e,c as t,a as o,b as s,d as a,e as i,F as n,o as r,p as c,f as l,g as p,w as m,h as d,i as u,t as h,n as g,j as f,k as v,l as b,m as k}from"./vendor.1017fe79.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class _{constructor(e={}){this.id=e.id||e._id||"MISSING id-"+1e6*Math.random(),this.projectName=e.projectName||"MISSING Name",this.isFeatured=e.isFeatured||!1,this.type=e.type||"MISSING Type",this.heroImage=e.heroImage||"https://picsum.photos/500",this.images=e.images||["https://picsum.photos/400","https://picsum.photos/800","https://picsum.photos/200"],this.shortDescription=e.shortDescription||"MISSING Short Description",this.description=e.description||"MISSING Long Description",this.skillsUsed=e.skillsUsed||["MISSING","Skills Used","JavaScript"],this.projectLink=e.projectLink||"/#/",this.sourceLink=e.sourceLink||"https://github.com/NathanMQuam"}}class w{constructor(e={}){this.id=e.id||e._id||"ID-"+1e6*Math.random(),this.name=e.name||"MISSING skill name",this.image=e.image||""}}const j=e({user:{},account:{},activeProject:new _,projects:[new _({id:"prompetition",projectName:"Prompetition",isFeatured:!0,type:"Web Application",heroImage:"../src/assets/img/Prompetition-Front-Page.jpg",images:[""],shortDescription:"My capstone project during my time at Boise CodeWorks. It's a competitive creative writing web application.",description:'This is Prompetition, a competitive creative writing application. There is one writing prompt that everyone can see, and everyone can submit their written work once. During that day, a user can only see their own submission. The next day everyone can vote on yesterday\'s entries for the one they like the most. At the end of that day, a winner is permanently decided, and this is displayed on their account profile.\n\n    At any point afterwards, users can still enter submissions to previous writing prompts, but these post-contest submissions are only for artistic writing, there will not be a new winner. But, users can still "like" these post-contest submissions, and the highest scoring submission is put on display underneath the contest-period winner.\n\n    There is also an alternative head-to-head mode where two users are put together and are given the same writing prompt, and a short period of time to write. Once this time is up, the two submissions are voted on by other users.',skillsUsed:["HTML","CSS","JavaScript","Vue 3","Mongo DB","Node JS"],projectLink:"https://prompetition-1.herokuapp.com/",sourceLink:"https://github.com/NathanMQuam/Prompetition"}),new _({projectName:"Project 2",isFeatured:!0,type:"Web Application",heroImage:"https://picsum.photos/id/1002/800/600",images:["https://picsum.photos/id/1003/400/300","https://picsum.photos/id/1004/400/300"],shortDescription:"The second placeholder project",description:"This is the long description of the second placeholder project.",skillsUsed:["HTML","CSS","JavaScript","Vue 3"]}),new _({projectName:"Project 3",isFeatured:!1,type:"Web Server",heroImage:"https://picsum.photos/id/1033/800/600",images:["https://picsum.photos/id/1040/400/300","https://picsum.photos/id/1042/400/300"],shortDescription:"Just a placeholder for a web server project",description:"The long description of the web server project",skillsUsed:["C#","SQL"]})],skills:[new w({name:"HTML 5",image:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"}),new w({name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}),new w({name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"}),new w({name:"Vue 3",image:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"}),new w({name:"Node JS",image:"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"}),new w({name:"MongoDB",image:"https://webimages.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"}),new w({name:"C#",image:"https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"}),new w({name:"SQL",image:""}),new w({name:"Bootstrap",image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"})]});const y={name:"App",setup:()=>({appState:t((()=>j))})},P={class:"text-light"};y.render=function(e,t,c,l,p,m){const d=o("Navbar"),u=o("router-view"),h=o("Footer");return r(),s(n,null,[a("header",null,[i(d)]),a("main",P,[i(u)]),a("footer",null,[i(h)])],64)};const S={name:"ContactForm",setup:()=>({}),components:{}};c("data-v-6497a4d0");const x={class:"contactForm text-center"},M=[a("iframe",{class:"contact-form w-100",src:"https://form.jotform.com/212384494808161",frameborder:"0"},null,-1)];l(),S.render=function(e,t,o,a,i,n){return r(),s("div",x,M)},S.__scopeId="data-v-6497a4d0";var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const L={name:"Footer",setup:()=>({state:e({projects:t((()=>j.projects.filter((e=>e.isFeatured))))})}),components:{}},N={class:"footer mt-4"},T={class:"bg-dark text-light text-center p-4 mt-auto container-fluid px-5"},D=a("div",{class:"row mb-3"},[a("div",{class:"col"},[a("b",null,"Nathan Quam's"),d(" Portfolio ")])],-1),C=a("div",{class:"row"},[a("div",{class:"col"}," This is my personal website for showcasing my skills and projects. Here are some of my highlights: ")],-1),A={class:"row justify-content-center"},E=u('<div class="row mt-3 justify-content-center"><a class="col-auto mx-2 px-2" title="My LinkedIn" href="https://www.linkedin.com/in/nathan-q-9baaa3132/"><i class="fab fa-linkedin text-light"></i></a><a class="col-auto mx-2 px-2" title="My GitHub" href="https://github.com/NathanMQuam"><i class="fab fa-github text-light"></i></a><a class="col-auto mx-2 px-2" title="My Résumé" href="https://github.com/NathanMQuam/nathan-quam-career/blob/main/Nathan%20M%20Quam%20-%20Resume.pdf"><i class="fas fa-file text-light" aria-hidden="true"></i></a></div>',1);L.render=function(e,t,c,l,u,g){const f=o("router-link");return r(),s("div",N,[a("div",T,[D,C,a("div",A,[(r(!0),s(n,null,p(l.state.projects,(e=>(r(),s("b",{class:"col-auto mx-2 px-2",key:e.id},[i(f,{class:"text-light",to:{name:"ProjectDetailsPage",params:{id:e.id}}},{default:m((()=>[d(h(e.projectName),1)])),_:2},1032,["to"])])))),128))]),E])])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const F={setup:()=>({state:e({dropOpen:!1}),user:t((()=>j.user)),async login(){},async logout(){}})};c("data-v-33c05473");const H={class:"navbar navbar-expand-lg navbar-dark bg-dark"},V=a("div",{class:"d-flex flex-column align-items-center"},[a("span",null,[a("img",{src:"/Landing-Page/assets/NathanQuam-Signature-White.d478d8f5.png",class:"nav-icon mr-2"}),a("b",null,"Nathan Quam's"),d(" Portfolio ")])],-1),Q=a("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[a("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse",id:"navbarText"},G={class:"navbar-nav ml-auto"},R={class:"nav-item"},J=d(" Home "),z={class:"nav-item"},U=d(" Projects "),$={class:"nav-item"},q=d(" Contact Me ");l(),F.render=function(e,t,n,c,l,p){const d=o("router-link");return r(),s("nav",H,[i(d,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:m((()=>[V])),_:1}),Q,a("div",B,[a("ul",G,[a("li",R,[i(d,{to:{name:"Home"},class:"nav-link"},{default:m((()=>[J])),_:1})]),a("li",z,[i(d,{to:{name:"Projects"},class:"nav-link"},{default:m((()=>[U])),_:1})]),a("li",$,[i(d,{to:{name:"Contact"},class:"nav-link btn btn-outline-primary"},{default:m((()=>[q])),_:1})])])])])},F.__scopeId="data-v-33c05473";var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const K={name:"ProjectComponent",props:{project:{type:_,default:()=>new _}}};c("data-v-22a623d6");const X={class:"projectComponent row highlighted-project bg-dark no-gutters mb-4"},Y={class:"col-5 p-4"},Z={class:"row flex-column h-100"},ee={class:"col-auto mb-2 project-type"},te={class:"col-auto project-title"},oe={class:"col-auto project-description mb-3"},se={class:"col-auto mt-auto project-link"},ae=d(" View Project -> "),ie={class:"col"};l(),K.render=function(e,t,n,c,l,p){const d=o("router-link");return r(),s("div",X,[a("div",Y,[a("div",Z,[a("div",ee,[a("small",null,h(n.project.type),1)]),a("div",te,[a("h3",null,h(n.project.projectName),1)]),a("div",oe,h(n.project.shortDescription),1),a("div",se,[i(d,{to:{name:"ProjectDetailsPage",params:{id:n.project.id}}},{default:m((()=>[ae])),_:1},8,["to"])])])]),a("div",ie,[a("div",{class:"highlighted-project-hero",style:g(`background-image: url('${n.project.heroImage}');`)},null,4)])])},K.__scopeId="data-v-22a623d6";var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});const re={name:"Skill",setup:()=>({}),components:{},props:{skill:{type:w,default:()=>new w}}},ce={class:"skill col-2 p-2"},le={class:"h-100 w-100 d-flex flex-column justify-content-center"};re.render=function(e,t,o,i,n,c){return r(),s("div",ce,[a("div",le,[a("div",{class:"flex-grow-1 skill-img",style:g(`background-image: url(${o.skill.image});`)},null,4),a("div",null,h(o.skill.name),1)])])};var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re});const me={name:"SkillsList",setup:()=>({state:e({skills:t((()=>j.skills.filter((e=>""!==e.image))))})}),components:{}},de={class:"skillsList"},ue=a("div",{class:"col-2 p-2 skill-box"},[a("div",{class:"h-100 w-100 d-flex flex-column justify-content-center"},[a("div",{class:"flex-grow-1 skill-img"}),d(" And more... ")])],-1);me.render=function(e,t,a,i,c,l){const m=o("Skill");return r(),s("div",de,[(r(!0),s(n,null,p(i.state.skills,(e=>(r(),f(m,{class:"skill-box col-2 p-2",key:e.id,skill:e},null,8,["skill"])))),128)),ue])};var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const ge={},fe=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/Landing-Page/${e}`)in ge)return;ge[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};function ve(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return fe((()=>import("./AboutPage.fcb3c49f.js")),["assets/AboutPage.fcb3c49f.js","assets/vendor.1017fe79.js"]);case"./pages/AccountPage.vue":return fe((()=>import("./AccountPage.2bcceb79.js")),["assets/AccountPage.2bcceb79.js","assets/AccountPage.68e73645.css","assets/vendor.1017fe79.js"]);case"./pages/ContactPage.vue":return fe((()=>import("./ContactPage.b7ff61fe.js")),["assets/ContactPage.b7ff61fe.js","assets/ContactPage.35d16b6e.css","assets/vendor.1017fe79.js"]);case"./pages/HomePage.vue":return fe((()=>import("./HomePage.cb6e8e20.js")),["assets/HomePage.cb6e8e20.js","assets/HomePage.a2411831.css","assets/vendor.1017fe79.js"]);case"./pages/ProjectDetailsPage.vue":return fe((()=>import("./ProjectDetailsPage.6cab7911.js")),["assets/ProjectDetailsPage.6cab7911.js","assets/ProjectDetailsPage.a525b27e.css","assets/vendor.1017fe79.js"]);case"./pages/ProjectsPage.vue":return fe((()=>import("./ProjectsPage.f814f8f3.js")),["assets/ProjectsPage.f814f8f3.js","assets/vendor.1017fe79.js"]);default:return new Promise((function(t,o){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./pages/${e}.vue`)}const be=[{path:"/",name:"Home",component:ve("HomePage")},{path:"/about",name:"About",component:ve("AboutPage")},{path:"/projects",name:"Projects",component:ve("ProjectsPage")},{path:"/projectDetails/:id",name:"ProjectDetailsPage",component:ve("ProjectDetailsPage")},{path:"/contact",name:"Contact",component:ve("ContactPage")}],ke=v({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:b(),routes:be}),_e=k(y);!function(e){const t={"./components/ContactForm.vue":I,"./components/Footer.vue":O,"./components/Navbar.vue":W,"./components/ProjectComponent.vue":ne,"./components/Skill.vue":pe,"./components/SkillsList.vue":he};Object.entries(t).forEach((([t,o])=>{const s=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,o.default)}))}(_e),_e.use(ke).mount("#app");export{j as A,_ as P};
