define(["require","exports","tslib","redux-saga","external/lodash","rondo/v1/behavior"],(function(e,t,r,n,o,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=r.__importStar(o),t.AsyncBehavior=function(e){var t=e.resolve,s=e.fetchActionPattern,a=e.replaceExistingReducer;return(function(){function e(){}return e.prototype.newBehavior=function(e){return o.isFunction(e)?c.createBehavior(e):e},e.prototype.composeBehavior=function(e){c.composeBehaviors([e])(this.composerBehavior)},e.prototype.sagaFetch=function(){var e,o,i;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,n.effects.take(s)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,6,,8]),[4,n.effects.call(t)];case 3:return e=r.sent(),o=this.newBehavior(e),[4,n.effects.put(c.createActionBehaviorFetched(o))];case 4:return r.sent(),this.composeBehavior(o),[4,n.effects.put(c.createActionBehaviorRefresh(o,a,!0))];case 5:return r.sent(),[3,8];case 6:return i=r.sent(),[4,n.effects.put(c.createActionBehaviorFetched(i))];case 7:return r.sent(),[3,8];case 8:return[2]}}))},e.displayName="AsyncBehavior",e})()}}));
//# sourceMappingURL=async_behavior.min.js-vflgrwxzf.map