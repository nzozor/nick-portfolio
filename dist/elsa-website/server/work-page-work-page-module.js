exports.ids=[7],exports.modules={"6yri":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PortfolioSectionComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tyNb"),src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("iiaH"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ofXK"),_shared_directives_enter_viewport_directive__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("kRW8");const _c0=function(a1){return["/project/",a1]};function PortfolioSectionComponent_div_2_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](0,"div",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](1,"a",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](2,"div",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](3,"picture"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](4,"source",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](5,"source",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](6,"img",8),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](7,"div",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](8,"div",10),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](9,"h3",11),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](10),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"]()),2&rf){const thumbnail_r1=ctx.$implicit,ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275nextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275property"]("routerLink",_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pureFunction1"](7,_c0,thumbnail_r1.projectId)),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275propertyInterpolate"]("srcset",ctx_r0.assetsUrl+thumbnail_r1.thumbnailUrlSmall,_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275sanitizeUrl"]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275propertyInterpolate"]("srcset",ctx_r0.assetsUrl+thumbnail_r1.thumbnailUrlLarge,_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275sanitizeUrl"]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275propertyInterpolate"]("src",ctx_r0.assetsUrl+thumbnail_r1.thumbnailUrlLarge,_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275sanitizeUrl"]),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275propertyInterpolate"]("alt",thumbnail_r1.imgAlt),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275attribute"]("loading",ctx_r0.loading),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](4),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275textInterpolate"](thumbnail_r1.projectName)}}class PortfolioSectionComponent{constructor(router,dataService){this.router=router,this.dataService=dataService}get assetsUrl(){return this.dataService.getAssetsUrl()}ngOnInit(){}}PortfolioSectionComponent.\u0275fac=function PortfolioSectionComponent_Factory(t){return new(t||PortfolioSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.b),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275directiveInject"](src_app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_2__.a))},PortfolioSectionComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineComponent"]({type:PortfolioSectionComponent,selectors:[["benoldi-portfolio-section"]],inputs:{thumbnails:"thumbnails",loading:"loading"},decls:3,vars:1,consts:[[1,"portfolio-container"],[1,"row","portfolio-grid","portfolio-title-overlay"],["class","portfolio-item","benoldiEnterViewport","",4,"ngFor","ngForOf"],["benoldiEnterViewport","",1,"portfolio-item"],[3,"routerLink"],[1,"portfolio-img"],["media","(max-width: 599px)",3,"srcset"],["media","(min-width: 600px)",3,"srcset"],[3,"src","alt"],[1,"portfolio-hover"],[1,"portfolio-hover-box"],[1,"font-weight-normal"]],template:function PortfolioSectionComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](1,"div",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275template"](2,PortfolioSectionComponent_div_2_Template,11,9,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"]()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275property"]("ngForOf",ctx.thumbnails))},directives:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.j,_shared_directives_enter_viewport_directive__WEBPACK_IMPORTED_MODULE_4__.a,_angular_router__WEBPACK_IMPORTED_MODULE_1__.c],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.portfolio-container[_ngcontent-%COMP%]{padding:0}@media (min-width:768px){.portfolio-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}@media (min-width:576px){.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]{padding:15px}}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]{cursor:pointer;padding:0 25px 25px}@media (min-width:576px){.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]{padding:15px;max-width:50%}}@media (min-width:768px){.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]{padding:15px;max-width:33.3%}}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;display:block;color:hsla(0,0%,100%,.7)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#fff;line-height:1.3}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5em}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-img[_ngcontent-%COMP%]{position:relative;overflow:hidden}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-img[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{line-height:0;font-size:0}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1.04);vertical-align:bottom;width:100%;transition:transform .46s cubic-bezier(.165,.84,.44,1)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;visibility:hidden;opacity:0;background:rgba(20,22,24,.3);text-align:center;transition:.16s ease-out}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%);padding:20px 30px;color:hsla(0,0%,100%,.7)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-family:degular;transform:translateY(10px);opacity:0;transition:.14s ease-out;font-weight:100}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child{transition-delay:.06s}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2){transition-delay:.12s}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3){transition-delay:.18s}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .portfolio-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(1)}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .portfolio-hover[_ngcontent-%COMP%]{visibility:visible;opacity:1}.portfolio-container[_ngcontent-%COMP%]   .portfolio-title-overlay[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .portfolio-hover[_ngcontent-%COMP%]   .portfolio-hover-box[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}"]})},"9oYK":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CallToActionComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ofXK"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("tyNb");const _c0=function(){return["/contact"]};class CallToActionComponent{constructor(viewportScroller){this.viewportScroller=viewportScroller}ngOnInit(){}scrollTop(){this.viewportScroller.scrollToAnchor("scroll-top-anchor")}}CallToActionComponent.\u0275fac=function CallToActionComponent_Factory(t){return new(t||CallToActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.s))},CallToActionComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineComponent"]({type:CallToActionComponent,selectors:[["benoldi-call-to-action"]],decls:7,vars:2,consts:[["title","Let's Talk",1,"button","button-lg",3,"routerLink","click"]],template:function CallToActionComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](0,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](1,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](2,"I look forward to "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](3,"br"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](4," hearing from you!"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](5,"a",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275listener"]("click",function CallToActionComponent_Template_a_click_5_listener(){return ctx.scrollTop()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](6,"Let's Talk"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"]()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](5),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275property"]("routerLink",_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pureFunction0"](1,_c0)))},directives:[_angular_router__WEBPACK_IMPORTED_MODULE_2__.c],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:center;min-height:500px;background-color:initial;color:#000;flex-direction:column;text-align:center;font-weight:100;line-height:38px;font-family:degular;font-weight:200;line-height:1.2;font-size:2.7em}@media (max-width:767.98px){[_nghost-%COMP%] > div[_ngcontent-%COMP%]{margin-top:0}}.button[_ngcontent-%COMP%]{max-width:300px;margin:30px auto;font-size:inherit;font-size:18px;font-weight:500;text-decoration:none;background-color:#000;border:1px solid #000;color:#fff;font-family:degular;padding-top:12px;display:flex;align-items:center;transition:all .3s}@media (hover:hover){.button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}}.button[_ngcontent-%COMP%]:hover{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(0,-1px,0)}20%,80%{transform:translate3d(0,2px,0)}30%,50%,70%{transform:translate3d(0,-4px,0)}40%,60%{transform:translate3d(0,4px,0)}}"]})},IW3K:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WorkPageModule",function(){return WorkPageModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),data_service=__webpack_require__("iiaH"),call_to_action_component=__webpack_require__("9oYK"),portfolio_section_component=__webpack_require__("6yri");function WorkPageComponent_ng_container_3_Template(rf,ctx){if(1&rf&&(core["\u0275\u0275elementContainerStart"](0),core["\u0275\u0275element"](1,"benoldi-portfolio-section",3),core["\u0275\u0275elementContainerEnd"]()),2&rf){const thumbnails_r1=ctx.ngIf;core["\u0275\u0275advance"](1),core["\u0275\u0275property"]("thumbnails",thumbnails_r1)("loading","lazy")}}class WorkPageComponent{constructor(dataService){this.dataService=dataService}ngOnInit(){this.$thumbnails=this.dataService.fetchThumbnailsWorkPage()}}WorkPageComponent.\u0275fac=function WorkPageComponent_Factory(t){return new(t||WorkPageComponent)(core["\u0275\u0275directiveInject"](data_service.a))},WorkPageComponent.\u0275cmp=core["\u0275\u0275defineComponent"]({type:WorkPageComponent,selectors:[["benoldi-work-page"]],decls:6,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"call-action"],["id","work",3,"thumbnails","loading"]],template:function WorkPageComponent_Template(rf,ctx){1&rf&&(core["\u0275\u0275elementStart"](0,"div",0),core["\u0275\u0275elementStart"](1,"h1"),core["\u0275\u0275text"](2,"Work"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275template"](3,WorkPageComponent_ng_container_3_Template,2,2,"ng-container",1),core["\u0275\u0275pipe"](4,"async"),core["\u0275\u0275element"](5,"benoldi-call-to-action",2),core["\u0275\u0275elementEnd"]()),2&rf&&(core["\u0275\u0275advance"](3),core["\u0275\u0275property"]("ngIf",core["\u0275\u0275pipeBind1"](4,1,ctx.$thumbnails)))},directives:[common.k,call_to_action_component.a,portfolio_section_component.a],pipes:[common.b],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}h1[_ngcontent-%COMP%]{margin-top:117px;margin-left:15px;margin-right:15px}@media (max-width:767.98px){h1[_ngcontent-%COMP%]{margin-top:35px;margin-left:12.5px}}@media (min-width:992px){.container[_ngcontent-%COMP%]{padding:15px}}@media (max-width:1199.98px){.container[_ngcontent-%COMP%]{max-width:100%;padding:15px}}@media (max-width:767.98px){.container[_ngcontent-%COMP%]{max-width:100%;padding:15px}}.container[_ngcontent-%COMP%]   benoldi-portfolio-section[_ngcontent-%COMP%]     .portfolio-container .portfolio-title-overlay{padding:0}@media (max-width:767.98px){.container[_ngcontent-%COMP%]   benoldi-portfolio-section[_ngcontent-%COMP%]     .portfolio-container .portfolio-title-overlay .portfolio-item{padding:0 10px 25px}}"]});const routes=[{path:"",component:WorkPageComponent}];class WorkPageRoutingModule{}WorkPageRoutingModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:WorkPageRoutingModule}),WorkPageRoutingModule.\u0275inj=core["\u0275\u0275defineInjector"]({factory:function WorkPageRoutingModule_Factory(t){return new(t||WorkPageRoutingModule)},imports:[[router.d.forChild(routes)],router.d]});var portfolio_section_module=__webpack_require__("vu6w"),call_to_action_module=__webpack_require__("d0zJ");class WorkPageModule{}WorkPageModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:WorkPageModule}),WorkPageModule.\u0275inj=core["\u0275\u0275defineInjector"]({factory:function WorkPageModule_Factory(t){return new(t||WorkPageModule)},imports:[[common.c,WorkPageRoutingModule,portfolio_section_module.a,call_to_action_module.a]]})},d0zJ:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CallToActionModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tyNb"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fXoL");class CallToActionModule{}CallToActionModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275defineNgModule"]({type:CallToActionModule}),CallToActionModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275defineInjector"]({factory:function CallToActionModule_Factory(t){return new(t||CallToActionModule)},imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.c,_angular_router__WEBPACK_IMPORTED_MODULE_1__.d]]})},iiaH:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return data_service_DataService});var catchError=__webpack_require__("JIr8"),map=__webpack_require__("lJxs"),environment=__webpack_require__("AytR"),core=__webpack_require__("fXoL"),http=__webpack_require__("tk/3");const httpOptions={headers:new http.HttpHeaders({"Content-Type":"application/json"})};class ApiService{constructor(http){this.http=http}get(apiUrl,path,options={}){return this.http.get(`${apiUrl}/${path}`,options)}put(apiUrl,path,body={}){return this.http.put(`${apiUrl}/${path}`,body,httpOptions)}post(apiUrl,path,body={}){return this.http.post(`${apiUrl}/${path}`,body,httpOptions)}delete(apiUrl,path){return this.http.delete(`${apiUrl}/${path}`,httpOptions)}}ApiService.\u0275fac=function ApiService_Factory(t){return new(t||ApiService)(core["\u0275\u0275inject"](http.HttpClient))},ApiService.\u0275prov=core["\u0275\u0275defineInjectable"]({token:ApiService,factory:ApiService.\u0275fac,providedIn:"root"});var empty=__webpack_require__("EY2u"),router=__webpack_require__("tyNb");class handle_service_ErrorHandleService{constructor(router){this.router=router}handleError(error){console.log(error);let errorMessage="Unknown error!";return error.status&&(errorMessage=`Error Code: ${error.status}\nMessage: ${error.message}`,console.warn(errorMessage),401===error.status||403===error.status||503===error.status||console.warn("Unable to perform this operation, please try later.",0,"report_problem",!0,"error")),empty.a}}handle_service_ErrorHandleService.\u0275fac=function ErrorHandleService_Factory(t){return new(t||handle_service_ErrorHandleService)(core["\u0275\u0275inject"](router.b))},handle_service_ErrorHandleService.\u0275prov=core["\u0275\u0275defineInjectable"]({token:handle_service_ErrorHandleService,factory:handle_service_ErrorHandleService.\u0275fac,providedIn:"root"});class data_service_DataService{constructor(apiService,errorHandleService){this.apiService=apiService,this.errorHandleService=errorHandleService}getAssetsUrl(){return environment.a.mockdata?"":environment.a.endpoints.express.url}fetchThumbnailsHomePage(){return this.apiService.get(environment.a.endpoints.express.url,"thumbnails/homepage").pipe(Object(catchError.a)(err=>this.errorHandleService.handleError(err)))}fetchThumbnailsWorkPage(){return this.apiService.get(environment.a.endpoints.express.url,"thumbnails/workpage").pipe(Object(catchError.a)(err=>this.errorHandleService.handleError(err)),Object(map.a)(data=>data.thumbnails))}fetchProjectDetails(projectId){return this.apiService.get(environment.a.endpoints.express.url,"projectDetails/"+projectId).pipe(Object(catchError.a)(err=>this.errorHandleService.handleError(err)))}fetchPreviousProjectDetails(projectId){return this.apiService.get(environment.a.endpoints.express.url,"projectDetails/prev/"+projectId).pipe(Object(catchError.a)(err=>this.errorHandleService.handleError(err)))}fetchNextProjectDetails(projectId){return this.apiService.get(environment.a.endpoints.express.url,"projectDetails/next/"+projectId).pipe(Object(catchError.a)(err=>this.errorHandleService.handleError(err)))}}data_service_DataService.\u0275fac=function DataService_Factory(t){return new(t||data_service_DataService)(core["\u0275\u0275inject"](ApiService),core["\u0275\u0275inject"](handle_service_ErrorHandleService))},data_service_DataService.\u0275prov=core["\u0275\u0275defineInjectable"]({token:data_service_DataService,factory:data_service_DataService.\u0275fac,providedIn:"root"})},kRW8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return EnterViewportDirective});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL");class EnterViewportDirective{constructor(_elementRef,plateformId){this._elementRef=_elementRef,this.plateformId=plateformId,this.visibilityChange=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this._callback=entries=>{entries.forEach(entry=>{this.visibilityChange.emit(entry.isIntersecting?"enter-view-port visible":"enter-view-port hidden"),this.elementVisibilityClass=entry.isIntersecting?"enter-view-port visible":" enter-view-port hidden"})}}ngAfterContentInit(){if(Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__.t)(this.plateformId)){const options={root:null,rootMargin:"0px",threshold:0};this._observer=new IntersectionObserver(this._callback,options),this._observer.observe(this._elementRef.nativeElement),this.elementVisibilityClass="enter-view-port hidden"}}ngOnDestroy(){Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__.t)(this.plateformId)&&this._observer.disconnect()}}EnterViewportDirective.\u0275fac=function EnterViewportDirective_Factory(t){return new(t||EnterViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef,1),_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID))},EnterViewportDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineDirective"]({type:EnterViewportDirective,selectors:[["","benoldiEnterViewport",""]],hostVars:2,hostBindings:function EnterViewportDirective_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275classMap"](ctx.elementVisibilityClass)},outputs:{visibilityChange:"visibilityChange"}})},miag:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return EnterViewportModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("fXoL");class EnterViewportModule{}EnterViewportModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineNgModule"]({type:EnterViewportModule}),EnterViewportModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_1__["\u0275\u0275defineInjector"]({factory:function EnterViewportModule_Factory(t){return new(t||EnterViewportModule)},imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.c]]})},vu6w:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return PortfolioSectionModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tyNb"),_enter_viewport_enter_viewport_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("miag"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("fXoL");class PortfolioSectionModule{}PortfolioSectionModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_3__["\u0275\u0275defineNgModule"]({type:PortfolioSectionModule}),PortfolioSectionModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_3__["\u0275\u0275defineInjector"]({factory:function PortfolioSectionModule_Factory(t){return new(t||PortfolioSectionModule)},imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.c,_angular_router__WEBPACK_IMPORTED_MODULE_1__.d,_enter_viewport_enter_viewport_module__WEBPACK_IMPORTED_MODULE_2__.a]]})}};