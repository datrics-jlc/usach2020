define(["require","exports","tslib","react","react-redux","modules/clean/react/file_viewer/more_dropdown/more_option_registry","modules/clean/react/file_action_button_type","modules/clean/react/file_action_button_group","modules/clean/react/file_viewer/more_dropdown/models","modules/clean/react/comments2/data/actions","modules/clean/react/comments2/data/logger","modules/clean/react/comments2/data/selectors"],(function(e,t,o,n,i,r,s,p,u,l,c,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),c=o.__importStar(c),a=o.__importStar(a);var m=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.toggleShowResolved=function(){var e=t.props,o=e.dispatch,n=e.showResolved,i=e.stream,r=n?"hide_resolved_threads":"show_resolved_threads";o(l.Actions.toggleShowResolved()),c.logEvent(r,{stream:i})},t.setCommentsEnabled=function(){t.props.dispatch(l.Actions.enableCommenting())},t.setCommentsDisabled=function(){t.props.dispatch(l.Actions.disableCommenting())},t}return o.__extends(t,e),t.prototype.buildResolveOption=function(){var e=this.props.showResolved?s.FileActionButtonType.HIDE_RESOLVED_COMMENTS:s.FileActionButtonType.SHOW_RESOLVED_COMMENTS;return new u.MoreOption({className:"comments-options-item__show-resolved",fileActionButtonType:e,component:function(e){return n.default.createElement("span",null,e.buttonText)},handler:this.toggleShowResolved})},t.prototype.buildEnableOption=function(){var e,t;return this.props.isEnabled?(e=s.FileActionButtonType.DISABLE_COMMENTS,t=this.setCommentsDisabled):(e=s.FileActionButtonType.ENABLE_COMMENTS,t=this.setCommentsEnabled),new u.MoreOption({className:"comments-options-item__disable",fileActionButtonType:e,component:function(e){return n.default.createElement("span",null,e.buttonText)},handler:t})},t.prototype.buildSubscribeOption=function(){var e,t,o=this;return this.props.isSubscribed?(e=s.FileActionButtonType.UNSUBSCRIBE,t=function(){return o.props.dispatch(l.Actions.unsubscribe(void 0))}):(e=s.FileActionButtonType.SUBSCRIBE,t=function(){return o.props.dispatch(l.Actions.subscribe(void 0))}),new u.MoreOption({className:"comments-options-item__subscribe",fileActionButtonType:e,component:function(e){return n.default.createElement("span",null,e.buttonText)},handler:t})},t.prototype.updateCommentsMoreOptionGroup=function(){var e=[],t=this.props,o=t.isEnabled,n=t.canEnable,i=t.canSubscribe;if(n&&e.push(this.buildEnableOption()),o&&(e.push(this.buildResolveOption()),i&&e.push(this.buildSubscribeOption())),e.length){var s=new u.MoreOptionGroup({fileActionButtonGroup:p.FileActionButtonGroup.COMMENTS,options:e});this.moreOptionGroup?r.moreOptionRegistry.replaceOption(this.moreOptionGroup,s):r.moreOptionRegistry.addOption(s),this.moreOptionGroup=s}else this.moreOptionGroup&&(r.moreOptionRegistry.removeOption(this.moreOptionGroup),this.moreOptionGroup=void 0)},t.prototype.componentDidMount=function(){this.updateCommentsMoreOptionGroup()},t.prototype.componentDidUpdate=function(){this.updateCommentsMoreOptionGroup()},t.prototype.componentWillUnmount=function(){this.moreOptionGroup&&(r.moreOptionRegistry.removeOption(this.moreOptionGroup),this.moreOptionGroup=void 0)},t.prototype.render=function(){return null},t})(n.default.PureComponent);t.UnconnectedCommentsMoreOptionManager=m,t.CommentsMoreOptionManager=i.connect((function(e){return{showResolved:a.getShowResolved(e),canEnable:a.getCanEnable(e),isEnabled:a.isEnabled(e),canSubscribe:a.getCanSubscribe(e),isSubscribed:a.getIsSubscribed(e),stream:a.getStream(e)}}))(m)}));
//# sourceMappingURL=comments_more_option_manager.min.js-vflOHS5TU.map