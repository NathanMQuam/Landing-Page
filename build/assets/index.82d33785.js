import{r as e,c as t,a,b as o,d as s,e as n,F as i,o as r,p as c,f as l,g as m,w as p,h as u,i as d,t as g,j as h,n as b,k as f,l as v,m as w}from"./vendor.1017fe79.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class k{constructor(e={}){this.id=e.id||e._id||"MISSING id-"+1e6*Math.random(),this.projectName=e.projectName||"MISSING Name",this.isFeatured=e.isFeatured||!1,this.type=e.type||"MISSING Type",this.heroImage=e.heroImage||"https://picsum.photos/500",this.images=e.images||["https://picsum.photos/400","https://picsum.photos/800","https://picsum.photos/200"],this.shortDescription=e.shortDescription||"MISSING Short Description",this.description=e.description||"MISSING Long Description",this.skillsUsed=e.skillsUsed||["MISSING","Skills Used","JavaScript"],this.projectLink=e.projectLink||"/#/",this.sourceLink=e.sourceLink||"https://github.com/NathanMQuam"}}class _{constructor(e={}){this.id=e.id||e._id||"ID-"+1e6*Math.random(),this.name=e.name||"MISSING skill name",this.image=e.image||""}}const j=e({user:{},account:{},activeProject:new k,projects:[new k({id:"prompetition",projectName:"Prompetition",isFeatured:!0,type:"Web Application",heroImage:"https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Prompetition-Front-Page.jpg",images:[""],shortDescription:"My capstone project during my time at Boise CodeWorks. It's a competitive creative writing web application.",description:'Prompetition is a competitive creative writing web application. Every day there is one writing prompt that everyone can see, and ever logged in user can submit their written work once. During that day, a user can only see their own submission. The next day everyone can vote on yesterday\'s entries for the one they like the most. At the end of that day, a winner is permanently decided, and this is displayed on their account profile.\n\n    At any point afterwards, users can still enter submissions to previous writing prompts, but these post-contest submissions are only for artistic writing, there will not be a new winner. But, users can still "like" these post-contest submissions, and the highest scoring submission is put on display underneath the contest-period winner.\n\n    There is also an alternative head-to-head mode where two users are put together and are given the same writing prompt, and a short period of time to write. Once this time is up, the two submissions are voted on by other users.',skillsUsed:["HTML","CSS","JavaScript","Vue 3","Mongo DB","Node JS","OAuth"],projectLink:"https://prompetition-1.herokuapp.com/",sourceLink:"https://github.com/NathanMQuam/Prompetition"}),new k({id:"bug-log",projectName:"Bug Log",isFeatured:!0,type:"Web Application",heroImage:"https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Bug-Log-Hero.jpg",images:["https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Bug-Log.jpg","https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/Open-Bug.jpg","https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/My-Bug.jpg"],shortDescription:"A standard web application for tracking bugs.",description:"Open a bug and give it a title and description to start tracking. Comment on a bug to note suggestions or it's current status. Close bugs to mark them as resolved.",skillsUsed:["HTML","CSS","JavaScript","Vue 3","Mongo DB","Node JS","OAuth"],sourceLink:"https://github.com/NathanMQuam/Bug-Log"}),new k({id:"step-ramp-tool",projectName:"Step Ramp Tool",isFeatured:!0,type:"Web Application",heroImage:"https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/StepRamp.png",images:["https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/StepRamp.png"],shortDescription:"A visual tool for estimating which ramp model would be best for your truck's bed height.",description:"A visual tool for estimating which ramp model would be best for your truck's bed height. Simply enter in your bed height, and the tool recommends one of the two available models. You can then preview what the angle or slope of the ramp will be for your bed height on level ground. You can also toggle the preview between the two models to compare them.",skillsUsed:["HTML","CSS","JavaScript","HTML 5 Canvas"],sourceLink:"https://github.com/NathanMQuam/StepRampTool",projectLink:"https://nathanmquam.github.io/StepRampTool/"}),new k({id:"gregs-vue-list",projectName:"GregsList",isFeatured:!1,type:"Web Application",heroImage:"https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/GregsList-Home.jpg",images:["https://raw.githubusercontent.com/NathanMQuam/Landing-Page/main/src/assets/img/GregsList-Cars.jpg"],shortDescription:"One of my applications I made at CodeWorks for learning how to GET, POST, PUT, and DELETE from a REST-compliant API.",description:"This was a graded application made to loosely resemble CraigsList. Utilizing GET, POST, PUT, and DELETE with a RESTful API, the application allows users to create listings for cars, jobs, or houses, and to edit or bid on these listings.",skillsUsed:["HTML","CSS","JavaScript","Vue 3","Mongo DB","Node JS"],sourceLink:"https://github.com/NathanMQuam/gregs-vue-list",projectLink:"https://nathanmquam.github.io/gregs-vue-list/#/"})],skills:[new _({name:"HTML 5",image:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"}),new _({name:"CSS",image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"}),new _({name:"JavaScript",image:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"}),new _({name:"Vue 3",image:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"}),new _({name:"Node JS",image:"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"}),new _({name:"MongoDB",image:"https://webimages.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png"}),new _({name:"C#",image:"https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg"}),new _({name:"SQL",image:""}),new _({name:"Bootstrap",image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"})]});const y={name:"App",setup:()=>({appState:t((()=>j))})},P={class:"text-light"};y.render=function(e,t,c,l,m,p){const u=a("Navbar"),d=a("router-view"),g=a("Footer");return r(),o(i,null,[s("header",null,[n(u)]),s("main",P,[n(d)]),s("footer",null,[n(g)])],64)};const S={name:"ContactForm",setup:()=>({}),components:{}};c("data-v-6497a4d0");const L={class:"contactForm text-center"},M=[s("iframe",{class:"contact-form w-100",src:"https://form.jotform.com/212384494808161",frameborder:"0"},null,-1)];l(),S.render=function(e,t,a,s,n,i){return r(),o("div",L,M)},S.__scopeId="data-v-6497a4d0";var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const T={name:"Footer",setup:()=>({state:e({projects:t((()=>j.projects.filter((e=>e.isFeatured))))})}),components:{}},x={class:"footer mt-4"},I={class:"bg-dark text-light text-center p-4 mt-auto container-fluid px-5"},D=s("div",{class:"row mb-3"},[s("div",{class:"col"},[s("b",null,"Nathan Quam's"),u(" Portfolio ")])],-1),A=s("div",{class:"row"},[s("div",{class:"col"}," This is my personal website for showcasing my skills and projects. Here are some of my highlights: ")],-1),C={class:"row justify-content-center"},E=d('<div class="row mt-3 justify-content-center"><a class="col-auto mx-2 px-2" title="My LinkedIn" href="https://www.linkedin.com/in/nathan-quam/"><i class="fab fa-linkedin text-light"></i></a><a class="col-auto mx-2 px-2" title="My GitHub" href="https://github.com/NathanMQuam"><i class="fab fa-github text-light"></i></a><a class="col-auto mx-2 px-2" title="My Résumé" href="https://github.com/NathanMQuam/nathan-quam-career/blob/main/Nathan%20M%20Quam%20-%20Resume.pdf"><i class="fas fa-file text-light" aria-hidden="true"></i></a></div>',1);T.render=function(e,t,c,l,d,h){const b=a("router-link");return r(),o("div",x,[s("div",I,[D,A,s("div",C,[(r(!0),o(i,null,m(l.state.projects,(e=>(r(),o("b",{class:"col-auto mx-2 px-2",key:e.id},[n(b,{class:"text-light",to:{name:"ProjectDetailsPage",params:{id:e.id}}},{default:p((()=>[u(g(e.projectName),1)])),_:2},1032,["to"])])))),128))]),E])])};var O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const Q={setup:()=>({state:e({dropOpen:!1}),user:t((()=>j.user)),async login(){},async logout(){}})};c("data-v-33c05473");const H={class:"navbar navbar-expand-lg navbar-dark bg-dark"},B=s("div",{class:"d-flex flex-column align-items-center"},[s("span",null,[s("img",{src:"/Landing-Page/assets/NathanQuam-Signature-White.d478d8f5.png",class:"nav-icon mr-2"}),s("b",null,"Nathan Quam's"),u(" Portfolio ")])],-1),F=s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),R={class:"collapse navbar-collapse",id:"navbarText"},G={class:"navbar-nav ml-auto"},V={class:"nav-item"},J=u(" Home "),U={class:"nav-item"},q=u(" Projects "),z={class:"nav-item"},W=u(" Contact Me ");l(),Q.render=function(e,t,i,c,l,m){const u=a("router-link");return r(),o("nav",H,[n(u,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:p((()=>[B])),_:1}),F,s("div",R,[s("ul",G,[s("li",V,[n(u,{to:{name:"Home"},class:"nav-link"},{default:p((()=>[J])),_:1})]),s("li",U,[n(u,{to:{name:"Projects"},class:"nav-link"},{default:p((()=>[q])),_:1})]),s("li",z,[n(u,{to:{name:"Contact"},class:"nav-link btn btn-outline-primary"},{default:p((()=>[W])),_:1})])])])])},Q.__scopeId="data-v-33c05473";var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const Y={name:"ProjectComponent",props:{project:{type:k,default:()=>new k}}};c("data-v-d25d4676");const K={class:"col-5 p-4"},X={class:"row flex-column h-100"},Z={class:"col-auto mb-2 project-type"},ee={class:"col-auto project-title"},te={class:"col-auto project-description mb-3"},ae={class:"col-auto mt-auto project-link"},oe=u(" View Project -> "),se={class:"col"};l(),Y.render=function(e,t,o,i,c,l){const m=a("router-link");return r(),h(m,{to:{name:"ProjectDetailsPage",params:{id:o.project.id}},class:"projectComponent row highlighted-project bg-dark no-gutters mb-4"},{default:p((()=>[s("div",K,[s("div",X,[s("div",Z,[s("small",null,g(o.project.type),1)]),s("div",ee,[s("h3",null,g(o.project.projectName),1)]),s("div",te,g(o.project.shortDescription),1),s("div",ae,[n(m,{to:{name:"ProjectDetailsPage",params:{id:o.project.id}}},{default:p((()=>[oe])),_:1},8,["to"])])])]),s("div",se,[s("div",{class:"highlighted-project-hero",style:b(`background-image: url('${o.project.heroImage}');`)},null,4)])])),_:1},8,["to"])},Y.__scopeId="data-v-d25d4676";var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Y});const ie={name:"Skill",setup:()=>({}),components:{},props:{skill:{type:_,default:()=>new _}}},re={class:"skill col-2 p-2"},ce={class:"h-100 w-100 d-flex flex-column justify-content-center"};ie.render=function(e,t,a,n,i,c){return r(),o("div",re,[s("div",ce,[s("div",{class:"flex-grow-1 skill-img",style:b(`background-image: url(${a.skill.image});`)},null,4),s("div",null,g(a.skill.name),1)])])};var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const me={name:"SkillsList",setup:()=>({state:e({skills:t((()=>j.skills.filter((e=>""!==e.image))))})}),components:{}},pe={class:"skillsList"},ue=s("div",{class:"col-2 p-2 skill-box"},[s("div",{class:"h-100 w-100 d-flex flex-column justify-content-center"},[s("div",{class:"flex-grow-1 skill-img"}),u(" And more... ")])],-1);me.render=function(e,t,s,n,c,l){const p=a("Skill");return r(),o("div",pe,[(r(!0),o(i,null,m(n.state.skills,(e=>(r(),h(p,{class:"skill-box col-2 p-2",key:e.id,skill:e},null,8,["skill"])))),128)),ue])};var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me});const ge={},he=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/Landing-Page/${e}`)in ge)return;ge[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};function be(e){return()=>function(e){switch(e){case"./pages/AboutPage.vue":return he((()=>import("./AboutPage.fcb3c49f.js")),["assets/AboutPage.fcb3c49f.js","assets/vendor.1017fe79.js"]);case"./pages/AccountPage.vue":return he((()=>import("./AccountPage.ae9ec70b.js")),["assets/AccountPage.ae9ec70b.js","assets/AccountPage.68e73645.css","assets/vendor.1017fe79.js"]);case"./pages/ContactPage.vue":return he((()=>import("./ContactPage.e0832f27.js")),["assets/ContactPage.e0832f27.js","assets/ContactPage.e5eb9f0b.css","assets/vendor.1017fe79.js"]);case"./pages/HomePage.vue":return he((()=>import("./HomePage.c21a076e.js")),["assets/HomePage.c21a076e.js","assets/HomePage.28021ab5.css","assets/vendor.1017fe79.js"]);case"./pages/ProjectDetailsPage.vue":return he((()=>import("./ProjectDetailsPage.b69afc5e.js")),["assets/ProjectDetailsPage.b69afc5e.js","assets/ProjectDetailsPage.ebe5d0d6.css","assets/vendor.1017fe79.js"]);case"./pages/ProjectsPage.vue":return he((()=>import("./ProjectsPage.451e4c49.js")),["assets/ProjectsPage.451e4c49.js","assets/vendor.1017fe79.js"]);default:return new Promise((function(t,a){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./pages/${e}.vue`)}const fe=[{path:"/",name:"Home",component:be("HomePage")},{path:"/about",name:"About",component:be("AboutPage")},{path:"/projects",name:"Projects",component:be("ProjectsPage")},{path:"/projectDetails/:id",name:"ProjectDetailsPage",component:be("ProjectDetailsPage")},{path:"/contact",name:"Contact",component:be("ContactPage")}],ve=f({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:v(),routes:fe}),we=w(y);!function(e){const t={"./components/ContactForm.vue":N,"./components/Footer.vue":O,"./components/Navbar.vue":$,"./components/ProjectComponent.vue":ne,"./components/Skill.vue":le,"./components/SkillsList.vue":de};Object.entries(t).forEach((([t,a])=>{const o=a.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,a.default)}))}(we),we.use(ve).mount("#app");export{j as A,k as P};