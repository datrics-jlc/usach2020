define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react/css","spectrum/popover","modules/clean/static_urls","modules/clean/react/app_actions/redirect","modules/clean/react/file_viewer/unity/with_unity","modules/clean/react/file_viewer/constants","modules/clean/react/extensions/unity_and_cloud_editors","modules/clean/react/extensions/common","modules/clean/file_store/utils","modules/clean/react/extensions/data/helpers","modules/clean/react/extensions/extensions_scaling_modal","modules/clean/react/file_viewer/open_button/types","modules/clean/react/extensions/cloud_docs_compat","modules/clean/react/extensions/menu_content_item","modules/clean/react/extensions/menu_survey"],(function(e,t,n,o,s,i,r,a,c,l,u,p,d,m,f,_,g,v,A,y){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=(function(e){function t(t){var s=e.call(this,t)||this;return s.createAppActionClickHandler=function(e){return function(){var t=s.props,o=t.file,i=t.user,r=t.featureFlags,a=t.telemetryContext,l=t.updateLinkState;if(c.redirectToActionOrShowAuth(i,o,e,r,a,l),"redirect"===e.handler[".tag"]){var u=d.getAppActionExtras(e);d.logEvent(s.props.currentSession,"select_action",n.__assign({menu_version:2},u))}else if("cloud_editor"===e.handler[".tag"]){var p=v.isWopiAction(e)?g.OpenButtonAction.OPEN_WITH:g.OpenButtonAction.OPEN_WITH_CLOUD_DOC;d.logEvent(s.props.currentSession,"select_legacy_action",{type:p})}}},s.wrapperForAction=function(e){return{appAction:e,handler:s.createAppActionClickHandler(e),userAction:u.UserAction.OpenWithAppAction,actionName:e.description}},s.renderActionRow=function(e){var t,n=e.icon;t=n.is_static?a.static_url("/static/images/generic_app_icon-vflIPYT1H.png"):n.url;var i=e.description;return o.default.createElement(r.PopoverContentItem,{className:"app-action-row",key:e.id,value:s.wrapperForAction(e)},o.default.createElement(A.MenuContentElement,{text:i,iconUrl:t}))},s}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,i=t.user,c=t.file,l=t.appActions,u=t.openOptions,m=t.bylines,g=t.categoryIdToInfos,v=t.featureFlags,h=t.currentSession,E=t.telemetryContext,x=t.updateLinkState,O=d.getOpenOptionsWithLogging(u,h),w=f.partitionOptions(O),C=w.unityOptions,M=w.cloudEditorOptions,S=f.partitionActions(l),I=S.cloudEditors,P=S.installedActions,U=S.unpromotedActions,W=P.length>0,k=U.length>0;return o.default.createElement("div",null,o.default.createElement(p.UnityAndCloudEditors,{unityOptions:C,legacyCloudEditorOptions:M,cloudEditorAppActions:I.map((function(t){return e.wrapperForAction(t)})),bylines:m,currentSession:h}),W&&o.default.createElement(r.PopoverItemGroup,{className:"app-action-category-group",key:"installed-actions"},P.map((function(t){return e.renderActionRow(t)}))),k&&o.default.createElement(r.PopoverContentItem,{key:s.intl.formatMessage({defaultMessage:"Show more",description:"Show more"}),value:{handler:function(){var e=n.__spreadArrays(P,U);_.showExtensionsScalingModal(s.intl.formatMessage({defaultMessage:"Open or edit with these apps",description:"Open or edit with these apps"}),i,c,e,g,v,x,E,h),d.logEvent(h,W?"select_show_more":"select_add_app",{surface:E&&E.surface})}},className:"app-action-row"},o.default.createElement(A.MenuContentElement,{text:W?s.intl.formatMessage({defaultMessage:"Connect more apps",description:"Connect more apps"}):s.intl.formatMessage({defaultMessage:"Connect apps",description:"Connect apps"}),iconUrl:W?null:a.static_url("/static/images/extensions/circled_plus-vfl7N2-Lg.svg")})),o.default.createElement(y.OpenMenuSurvey,{userId:i.id,session:h}))},t})((o=n.__importDefault(o)).default.Component);t.ExtensionsPopoverV2WithUnity=function(e){return m.isBrowseFile(e.file)?o.default.createElement(l.WithUnity,{file:e.file,user:e.user,render:function(t){return o.default.createElement(h,n.__assign({},e,{unityInfo:t}))}}):null},t.ExtensionsPopoverV2NoUnity=i.requireCssWithComponent(h,["/static/css/app_actions/index-vfle4rJAa.css","/static/css/extensions/index-vflpbukXI.css"])}));
//# sourceMappingURL=extensions_popover_content_component_v2.min.js-vfltCR9AH.map