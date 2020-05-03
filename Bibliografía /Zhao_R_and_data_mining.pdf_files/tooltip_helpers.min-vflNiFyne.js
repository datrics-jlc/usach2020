define(["require","exports","react-intl","modules/core/i18n","modules/clean/datetime","modules/clean/previews/util","modules/clean/react/pass/constants","modules/constants/file_viewer"],(function(e,s,t,a,n,i,o,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.buildSeenStateMessage=function(e){return e.isActive?a.intl.formatMessage({defaultMessage:"Viewing now",description:'Format like "Viewing now"'}):null!=e.whenLastSeen?(function(e){var s=n.ago(1e3*e.whenLastSeen,!1,!0,!0),t=a.intl.formatMessage({defaultMessage:"Viewed {timeAgo}",description:'Format like "userName <newline> Viewed 5 days ago'},{timeAgo:s});if(i.shouldShowPlatformInfo()){var r=e.platformType;r===o.PassPlatform.DESKTOP?t=a.intl.formatMessage({defaultMessage:"Viewed {timeAgo} on desktop",description:'Format like "Viewed 5 days ago on desktop'},{timeAgo:s}):r===o.PassPlatform.WEB?t=a.intl.formatMessage({defaultMessage:"Viewed {timeAgo} on web",description:'Format like "userName <newline> Viewed 5 days ago <newline> on web'},{timeAgo:s}):r===o.PassPlatform.MOBILE&&(t=a.intl.formatMessage({defaultMessage:"Viewed {timeAgo} on mobile",description:'Format like "userName <newline> Viewed 5 days ago <newline> on mobile'},{timeAgo:s}))}return t})(e):(function(e){switch(e){case"owner":return a.intl.formatMessage({defaultMessage:"Owner",description:'Format like "Owner"'});case"writer":return a.intl.formatMessage({defaultMessage:"Can edit",description:'Format like "Can edit"'});case"reader":return a.intl.formatMessage({defaultMessage:"Can comment",description:'Format like "Can comment"'});case"reader_no_comment":case void 0:return a.intl.formatMessage({defaultMessage:"Can view",description:'Format like "Can view"'})}})(e.accessLevel)},s.getOnVsOffTeamExperiment=function(){return["ON","LIMITED"].includes(r.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT)},s.getOnVsOffTeamLimitedVariant=function(){return"LIMITED"===r.ON_VS_OFF_TEAM_PREVIEWS_EXPERIMENT},s.notOnTeamLabel=t.defineMessage({defaultMessage:"Outside {teamname}"}),s.inviteToTeamLabel=a.intl.formatMessage({defaultMessage:"Invite to team"}),s.joinTeamLabel=a.intl.formatMessage({defaultMessage:"Join team"}),s.onTeamLabel=t.defineMessage({defaultMessage:"Member of {teamname}"}),s.buildTeamExpandReasons=function(e){var s=[];return e&&(s.push(a.intl.formatMessage({defaultMessage:"Content stays within the team",description:"refers to benefits when users join a Dropbox Business Team"})),s.push(a.intl.formatMessage({defaultMessage:"They’ll get instant access to files",description:"refers to benefits when users join a Dropbox Business Team"})),s.push(a.intl.formatMessage({defaultMessage:"Enough space to do their work",description:"refers to benefits when users join a Dropbox Business Team"}))),s}}));
//# sourceMappingURL=tooltip_helpers.min.js-vflGrVZP4.map