define(["require","exports","tslib","protobufjs/minimal","dropbox/proto/js_init_data/web_timing_logger/web_timing_logger"],(function(e,t,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=(n=r.__importStar(n)).Reader,o=n.Writer,l=n.util,s=n.roots.default||(n.roots.default={});t.default=s,t.extensions=s.extensions=((i=s.extensions||{}).AuthPageProps=(function(e){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t,r;return e.prototype.pageType=0,e.prototype.actionId="",e.prototype.appName="",e.prototype.iconUrl="",e.prototype.userId=l.Long?l.Long.fromBits(0,0,!1):0,e.prototype.fileId="",e.prototype.fileName="",e.prototype.webTimingLoggerServerContext=null,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.pageType&&Object.hasOwnProperty.call(e,"pageType")&&t.uint32(8).int32(e.pageType),null!=e.actionId&&Object.hasOwnProperty.call(e,"actionId")&&t.uint32(18).string(e.actionId),null!=e.appName&&Object.hasOwnProperty.call(e,"appName")&&t.uint32(26).string(e.appName),null!=e.iconUrl&&Object.hasOwnProperty.call(e,"iconUrl")&&t.uint32(34).string(e.iconUrl),null!=e.userId&&Object.hasOwnProperty.call(e,"userId")&&t.uint32(40).int64(e.userId),null!=e.fileId&&Object.hasOwnProperty.call(e,"fileId")&&t.uint32(50).string(e.fileId),null!=e.fileName&&Object.hasOwnProperty.call(e,"fileName")&&t.uint32(58).string(e.fileName),null!=e.webTimingLoggerServerContext&&Object.hasOwnProperty.call(e,"webTimingLoggerServerContext")&&s.web_timing_logger.WebTimingLoggerServerContext.encode(e.webTimingLoggerServerContext,t.uint32(66).fork()).ldelim(),t},e.decode=function(e,t){e instanceof a||(e=a.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new s.extensions.AuthPageProps;e.pos<r;){var i=e.uint32();switch(i>>>3){case 1:n.pageType=e.int32();break;case 2:n.actionId=e.string();break;case 3:n.appName=e.string();break;case 4:n.iconUrl=e.string();break;case 5:n.userId=e.int64();break;case 6:n.fileId=e.string();break;case 7:n.fileName=e.string();break;case 8:n.webTimingLoggerServerContext=s.web_timing_logger.WebTimingLoggerServerContext.decode(e,e.uint32());break;default:e.skipType(7&i)}}return n},e.PageType=(t={},(r=Object.create(t))[t[0]="DEFAULT"]=0,r[t[1]="LINK_ONLY"]=1,r),e})(i.AuthPageProps||{}),i.StatusPageProps=(function(e){function e(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var t,r;return e.prototype.pageType=0,e.prototype.role="",e.prototype.fileName="",e.prototype.maxFileSize=l.Long?l.Long.fromBits(0,0,!1):0,e.prototype.isTeam=!1,e.create=function(t){return new e(t)},e.encode=function(e,t){return t||(t=o.create()),null!=e.pageType&&Object.hasOwnProperty.call(e,"pageType")&&t.uint32(8).int32(e.pageType),null!=e.role&&Object.hasOwnProperty.call(e,"role")&&t.uint32(18).string(e.role),null!=e.fileName&&Object.hasOwnProperty.call(e,"fileName")&&t.uint32(26).string(e.fileName),null!=e.maxFileSize&&Object.hasOwnProperty.call(e,"maxFileSize")&&t.uint32(32).int64(e.maxFileSize),null!=e.isTeam&&Object.hasOwnProperty.call(e,"isTeam")&&t.uint32(40).bool(e.isTeam),t},e.decode=function(e,t){e instanceof a||(e=a.create(e));for(var r=void 0===t?e.len:e.pos+t,n=new s.extensions.StatusPageProps;e.pos<r;){var i=e.uint32();switch(i>>>3){case 1:n.pageType=e.int32();break;case 2:n.role=e.string();break;case 3:n.fileName=e.string();break;case 4:n.maxFileSize=e.int64();break;case 5:n.isTeam=e.bool();break;default:e.skipType(7&i)}}return n},e.PageType=(t={},(r=Object.create(t))[t[0]="DEFAULT"]=0,r[t[1]="QUOTA"]=1,r[t[2]="DOCUSIGN"]=2,r[t[3]="ACCESS"]=3,r[t[4]="UNVERIFIED_EMAIL"]=4,r[t[5]="FILE_TOO_LARGE"]=5,r),e})(i.StatusPageProps||{}),i)}));
//# sourceMappingURL=extensions.min.js-vfl6MUdnJ.map