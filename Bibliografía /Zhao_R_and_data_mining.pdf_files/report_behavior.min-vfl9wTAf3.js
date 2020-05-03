define(["require","exports","tslib","rondo/v1/index","rondo-modal-spectrum/v1","modules/clean/rondo/modal/modal_notifications_behavior","modules/core/html","modules/core/i18n","modules/clean/teams/admin/pages/activity/report/error_messages"],(function(e,t,r,a,i,o,n,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReportBehavior=function(e){var t=e.createReport,l=e.paramsFromFields;return(function(){function e(){var e=this;this.initialState=function(){return{excludeFileEvents:!0}},this.actionReportGenerated=a.createAction(),this.actionCreateReport=a.createAction().watch((function(i,o){var n=o.fields,s=o.excludeFileEvents;return r.__awaiter(e,void 0,void 0,(function(){var e,i,o,d;return r.__generator(this,(function(r){switch(r.label){case 0:e=l(n),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t(e,s)];case 2:return r.sent(),this.actionReportGenerated(),[3,4];case 3:switch(i=r.sent(),o=i.error?i.error[".tag"]:null,d=null,o){case"generic_error":d=c.ErrorMessages.generic_error;break;case"rate_limit":d=c.ErrorMessages.rate_limit;break;case"bad_params":default:d=c.ErrorMessages.default}return this.actionReportGenerated(a.ensureError(d)),[3,4];case 4:return[2]}}))}))})),this.actionExcludeFileEvents=a.createAction().handle((function(e){return{excludeFileEvents:!e.excludeFileEvents}})),a.extendBehavior(this,i.UtilityModalBehavior({closeAction:this.actionReportGenerated})),a.extendBehavior(this,i.ResetStateBehavior({})),a.extendBehavior(this,o.ModalNotificationsBehavior({closeAction:this.actionReportGenerated,defaultSuccessMessage:new n.HTML("<div>"+s.intl.formatMessage({defaultMessage:"Creating report. We’ll email you when it’s ready."})+"</div>"),defaultErrorMessage:s.intl.formatMessage({defaultMessage:"Error creating report."})}))}return e.displayName="Report",e})()}}));
//# sourceMappingURL=report_behavior.min.js-vflUEPCiP.map