define(["require","exports","tslib","rondo/v1/index","rondo-modal/v1","modules/clean/teams/admin/pages/activity/behaviors/activity_categories_behavior","modules/core/i18n","modules/clean/teams/admin/pages/activity/activity_modal/data_parser","modules/clean/rondo/tti/fast_prefetch_behavior","modules/core/notify","modules/clean/rondo/router/router_behavior","modules/clean/teams/admin/pages/activity/filters/filters_url","modules/clean/teams/admin/pages/activity/behaviors/activity_logger","modules/clean/rondo/behavior/logger_behavior"],(function(e,t,i,r,a,o,n,c,s,h,l,u,d,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prefetchOnError=function(){return h.Notify.error(n.intl.formatMessage({defaultMessage:"Error occurred. Please refresh the page to try again."}))};var v=function(){this.actionCreateReport=r.createAction(),r.extendBehavior(this,a.UtilityModalBehavior({}))},g=function(){this.actionSetMemberFilter=r.createAction(),this.actionSetActivityFilter=r.createAction(),this.actionSetValues=r.createAction(),this.actionAllowSetFilters=r.createAction()},m=(function(){function e(){var e=this;this.actionFetch=r.createAction(),this.actionFetchNext=r.createAction(),this.actionResults=r.createAction().handle((function(e){return{lastUpdated:new Date}})),this.actionClear=r.createAction(),this.actionSubmit=r.createAction(),this.actionDirty=r.createAction(),this.actionSetCategories=r.createAction().handle((function(e,t){return{categories:t}})),this.report=r.createBehavior(v),this.initialState=function(){return{lastUpdated:void 0,categories:[]}},this.filters=r.createBehavior(g),this.canPage=r.createSelector((function(e){var t=e.cursor,i=e.hasMore;return!t||i})),this.actionSetActivityFilter=r.createAction().watch((function(t,i){var r=i,a=e.activities().find((function(e){return e.event_type[".tag"]===r}));a&&e.filters.actionSetActivityFilter(a)})),this.updateFromSearchParams=function(t,r,a,o){return i.__awaiter(e,void 0,void 0,(function(){var e,n;return i.__generator(this,(function(i){switch(i.label){case 0:return e=a.categories,[4,u.urlSearchToFilters(t,e)];case 1:return n=i.sent(),o&&(this.filters.actionSetValues({fieldsToValue:n,setAsInitial:r}),this.filters.actionAllowSetFilters()),[2]}}))}))},this.stateWatch=r.whenFieldDefined("categories",(function(t,i){var r=i.state.location.search;e.updateFromSearchParams(r,!1,i.state,!0)})),this.stateWatchLocation=r.whenFieldChanged(["location","search"],(function(t,i){var r=i.state.location.search;e.updateFromSearchParams(r,!1,i.state,!1)})),this.filterValues=r.createSelector((function(e){if(e.filters)return Object.keys(e.filters).reduce((function(t,i){var r=e.filters[i].fieldValue;return t[i]=r,t}),{})})),this.dateRange=r.createSelector(this.filterValues,(function(e){return e?e.date:void 0})),this.members=r.createSelector(this.filterValues,(function(e){return e?e.members:void 0})),this.content=r.createSelector(this.filterValues,(function(e){return e?e.file:void 0})),this.participants=r.createSelector(this.filterValues,(function(e){return e?e.participants:void 0})),r.extendBehavior(this,l.RouterBehavior({})),r.extendBehavior(this,o.ActivityCategoriesBehavior),r.extendBehavior(this,s.FastPrefetchBehavior({fastPrefetchName:"__REGISTER_TEAM_ADMIN_ACTIVITIES_PRELOAD_HANDLER",prefetchReadyAction:this.actionResults,onError:t.prefetchOnError})),r.extendBehavior(this,s.FastPrefetchBehavior({fastPrefetchName:"__REGISTER_TEAM_ADMIN_ACTIVITIES_EVENT_TYPES_PRELOAD_HANDLER",prefetchReadyAction:this.actionSetCategories,fallbackFetch:c.getCategories,parseFunction:c.createCategories,onError:t.prefetchOnError})),r.extendBehavior(this,f.LoggerBehavior({loggingFunction:d.logActivityPageEventToHive,actionsToLog:[{action:this.actionSubmit,parser:d.resultUpdatedEvent},{action:this.actionFetchNext,parser:d.getMoreResultsEvent},{action:this.report.actionCreateReport,parser:d.submitReportEvent}]}))}return e.displayName="ActivityPage",e})();t.ActivityPageCls=m,t.activityPage=r.createBehavior(m)}));
//# sourceMappingURL=activity_page.min.js-vflDviy0E.map