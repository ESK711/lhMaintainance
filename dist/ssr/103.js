"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=103,exports.ids=[103],exports.modules={63103:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompanyModule:()=>CompanyModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305);class CompanyComponent{}__name(CompanyComponent,"CompanyComponent"),CompanyComponent.\u0275fac=__name(function(t){return new(t||CompanyComponent)},"CompanyComponent_Factory"),CompanyComponent.\u0275cmp=core.Xpm({type:CompanyComponent,selectors:[["app-company"]],decls:2,vars:0,template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"p"),core._uU(1,"company works!"),core.qZA())},"CompanyComponent_Template")});const routes=[{path:"",component:CompanyComponent,pathMatch:"full"},{path:"privacy-policy",loadChildren:()=>__webpack_require__.e(623).then(__webpack_require__.bind(__webpack_require__,96623)).then(m=>m.PrivacyModule)},{path:"terms-&-conditions",loadChildren:()=>__webpack_require__.e(35).then(__webpack_require__.bind(__webpack_require__,68035)).then(m=>m.TermsConditionsModule)}];class CompanyRoutingModule{}__name(CompanyRoutingModule,"CompanyRoutingModule"),CompanyRoutingModule.\u0275fac=__name(function(t){return new(t||CompanyRoutingModule)},"CompanyRoutingModule_Factory"),CompanyRoutingModule.\u0275mod=core.oAB({type:CompanyRoutingModule}),CompanyRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});class CompanyModule{}__name(CompanyModule,"CompanyModule"),CompanyModule.\u0275fac=__name(function(t){return new(t||CompanyModule)},"CompanyModule_Factory"),CompanyModule.\u0275mod=core.oAB({type:CompanyModule}),CompanyModule.\u0275inj=core.cJS({imports:[common.ez,CompanyRoutingModule]})}};