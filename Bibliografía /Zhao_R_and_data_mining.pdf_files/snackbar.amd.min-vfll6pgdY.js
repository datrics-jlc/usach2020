define(["require","exports","tslib","classnames","react","react-transition-group","dig-components/_motion","dig-components/snackbar/actions","dig-components/snackbar/message","focus-visible"],(function(e,t,n,a,o,i,r,s,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),o=n.__importStar(o);var u={transitions:[{property:"up",value:10},{property:"opacity",value:1}],easing:"out",duration:"faster",origin:[.5,1]},l={transitions:[{property:"opacity",value:0}],easing:"out",duration:"faster",origin:[.5,1]};t.Snackbar=function(e){var t=e.className,s=e.children,c=e.onRequestClose,p=e.open,m=e.timeout,d=void 0===m?5e3:m,f=n.__rest(e,["className","children","onRequestClose","open","timeout"]),g=a.default("dig-Snackbar",t),b=function(){c&&c()};return d&&o.useEffect((function(){var e=null;if(p)return e=window.setTimeout(b,d),function(){e&&clearTimeout(e)};e&&clearTimeout(e)}),[p]),o.createElement(i.TransitionGroup,{component:null},p&&o.createElement(r.Motion,{transitionIn:u,transitionOut:l},(function(e){var t=e.style;return o.createElement("div",Object.assign({className:g,style:t,role:"alert"},f),s)})))},t.Snackbar.displayName="Snackbar",t.Snackbar.Actions=s.Actions,t.Snackbar.Message=c.Message}));
//# sourceMappingURL=snackbar.amd.min.js-vflBF583s.map