(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XXB3:function(t,n,e){"use strict";e.r(n),e.d(n,"ProjectPageModule",function(){return f});var i=e("ofXK"),o=e("tyNb"),c=e("fXoL"),r=e("iiaH"),a=e("vxAp"),s=e("kRW8");function l(t,n){if(1&t&&(c.Nb(0,"div"),c.Nb(1,"h3"),c.qc(2,"Project website"),c.Mb(),c.Nb(3,"p"),c.Nb(4,"a",16),c.qc(5,"visit"),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.Xb(2);c.xb(4),c.dc("href",t.assetsUrl+t.project.clientUrl,c.mc)}}function b(t,n){if(1&t&&(c.Nb(0,"div"),c.Nb(1,"h3"),c.qc(2,"Country"),c.Mb(),c.Nb(3,"p"),c.qc(4),c.Mb(),c.Mb()),2&t){const t=c.Xb(2);c.xb(4),c.sc(" ",t.project.country," ")}}function g(t,n){if(1&t&&(c.Nb(0,"div",17),c.Nb(1,"picture"),c.Jb(2,"source",3),c.Jb(3,"source",4),c.Jb(4,"img",5),c.Mb(),c.Mb()),2&t){const t=n.$implicit,e=c.Xb(2);c.cc("ngClass",e.imageTypeClass(t)),c.xb(2),c.dc("srcset",e.assetsUrl+t.smallImgUrl,c.mc),c.xb(1),c.dc("srcset",e.assetsUrl+t.largeImgUrl,c.mc),c.xb(1),c.dc("src",e.assetsUrl+t.largeImgUrl,c.mc),c.dc("alt",e.assetsUrl+t.imgAlt)}}function p(t,n){if(1&t){const t=c.Ob();c.Nb(0,"div"),c.Nb(1,"benoldi-hero-section",1),c.Nb(2,"h1"),c.qc(3),c.Mb(),c.Nb(4,"h2"),c.qc(5),c.Mb(),c.Mb(),c.Nb(6,"div",2),c.Nb(7,"picture"),c.Jb(8,"source",3),c.Jb(9,"source",4),c.Jb(10,"img",5),c.Mb(),c.Nb(11,"div",6),c.Nb(12,"div"),c.Nb(13,"h3"),c.qc(14,"Client"),c.Mb(),c.Nb(15,"p"),c.qc(16),c.Mb(),c.Mb(),c.Nb(17,"div"),c.Nb(18,"h3"),c.qc(19,"Services"),c.Mb(),c.Nb(20,"p"),c.qc(21),c.Mb(),c.Mb(),c.oc(22,l,6,1,"div",7),c.oc(23,b,5,1,"ng-template",null,8,c.pc),c.Mb(),c.Nb(25,"div",9),c.oc(26,g,5,5,"div",10),c.Mb(),c.Nb(27,"div",11),c.Nb(28,"button",12),c.Ub("click",function(){return c.kc(t),c.Xb().prev()}),c.Jb(29,"i",13),c.Nb(30,"span"),c.qc(31,"Previous project"),c.Mb(),c.Mb(),c.Nb(32,"button",14),c.Ub("click",function(){return c.kc(t),c.Xb().next()}),c.Nb(33,"span"),c.qc(34,"Next project"),c.Mb(),c.Jb(35,"i",15),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&t){const t=c.ic(24),n=c.Xb();c.xb(1),c.cc("initials",!1),c.xb(2),c.rc(n.project.projectName),c.xb(2),c.rc(n.project.projectDescription),c.xb(3),c.dc("srcset",n.assetsUrl+n.project.mainImgUrlSmall,c.mc),c.xb(1),c.dc("srcset",n.assetsUrl+n.project.mainImgUrlLarge,c.mc),c.xb(1),c.dc("src",n.assetsUrl+n.project.mainImgUrlLarge,c.mc),c.dc("alt",n.assetsUrl+n.project.imgAlt),c.xb(6),c.sc(" ",n.project.clientName," "),c.xb(5),c.sc(" ",n.project.services," "),c.xb(1),c.cc("ngIf",n.project.clientUrl)("ngIfElse",t),c.xb(4),c.cc("ngForOf",n.project.galleryImgs)}}const d=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.location=t,this.route=n,this.dataService=e,this.viewPortScroller=i}get assetsUrl(){return this.dataService.getAssetsUrl()}ngOnInit(){this.projSub=this.dataService.fetchProjectDetails(this.route.snapshot.params.id).subscribe(t=>{this.project=t})}ngOnDestroy(){this.projSub&&this.projSub.unsubscribe()}imageTypeClass(t){return{large:"full"===t.type,half:"half"===t.type}}next(){this.dataService.fetchNextProjectDetails(this.project.projectId).subscribe(t=>{this.project=t,this.location.go(`project/${t.projectId}`)}),this.scrollTop()}prev(){this.dataService.fetchPreviousProjectDetails(this.project.projectId).subscribe(t=>{this.project=t,this.location.go(`project/${t.projectId}`)}),this.scrollTop()}scrollTop(){this.viewPortScroller.scrollToPosition([0,0])}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(i.g),c.Ib(o.a),c.Ib(r.a),c.Ib(i.o))},t.\u0275cmp=c.Cb({type:t,selectors:[["benoldi-project-page"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"model-2",3,"initials"],["benoldiEnterViewport","",1,"container"],["media","(max-width: 599px)",3,"srcset"],["media","(min-width: 600px)",3,"srcset"],[3,"src","alt"],[1,"project-insights"],[4,"ngIf","ngIfElse"],["countryBlock",""],[1,"gallery"],["benoldiEnterViewport","","class","item",3,"ngClass",4,"ngFor","ngForOf"],[1,"navigation"],["aria-label","Previous project",1,"btn-prev",3,"click"],[1,"arrow","left"],["aria-label","Next project",1,"btn-next",3,"click"],[1,"arrow","right"],["target","_blank",3,"href"],["benoldiEnterViewport","",1,"item",3,"ngClass"]],template:function(t,n){1&t&&c.oc(0,p,36,12,"div",0),2&t&&c.cc("ngIf",n.project)},directives:[i.k,a.a,s.a,i.j,i.i],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.project-insights[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-bottom:70px;margin-top:40px}@media (max-width:767.98px){.project-insights[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:40px}}.project-insights[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:degular;font-weight:500;font-size:1.5em;margin-bottom:0;line-height:1.7}.project-insights[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Calibre-Light;font-size:1.2em;line-height:1.4em}.project-insights[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Calibre-Light;font-size:inherit;text-decoration:none}img[_ngcontent-%COMP%]{width:100%;vertical-align:top}.gallery[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -15px}.gallery[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:15px}.gallery[_ngcontent-%COMP%] > div.full[_ngcontent-%COMP%]{width:100%}.gallery[_ngcontent-%COMP%] > div.half[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%] > div.vertical[_ngcontent-%COMP%]{width:50%}@media (max-width:767.98px){.gallery[_ngcontent-%COMP%] > div.half[_ngcontent-%COMP%], .gallery[_ngcontent-%COMP%] > div.vertical[_ngcontent-%COMP%]{width:100%}}benoldi-hero-section[_ngcontent-%COMP%]     .hero-section{padding-bottom:60px}@media (max-width:767.98px){h2.hero[_ngcontent-%COMP%]{font-size:1.5em}}.navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px;margin-bottom:25px}.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:0;color:#bababa;font-family:Calibre-Light;font-weight:100;font-size:1.3em;transition:opacity .25s ease-in-out}@media (max-width:1199.98px){.navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{opacity:1}}.navigation[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]{margin:0;width:auto;display:inline-flex;justify-content:center;align-items:center}.navigation[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:0;margin:5px 0 0;padding:5px 10px;opacity:0}@media (max-width:767.98px){.navigation[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.navigation[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{opacity:1}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[o.d.forChild(d)],o.d]}),t})();var M=e("KKil"),h=e("miag");let f=(()=>{class t{}return t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({factory:function(n){return new(n||t)},imports:[[i.c,m,M.a,h.a]]}),t})()}}]);