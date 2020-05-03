define("modules/clean/animation",["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.quadraticBezierPointsAtPercent=function(e,t,a,n){return{x:Math.pow(1-n,2)*e.x+2*(1-n)*n*t.x+Math.pow(n,2)*a.x,y:Math.pow(1-n,2)*e.y+2*(1-n)*n*t.y+Math.pow(n,2)*a.y}};var a=function(e,t){var a=this;this.start=function(){a.isRunning=!0;var e,t=a.thunk,n=a.fps,r=-1,s=1e3/n,i=function(e,t){var a=Date.now(),n=a-(t||0);return n>s&&(e(),t=a-n%s),r=requestAnimationFrame((function(){return i(e,t)}))};e=requestAnimationFrame((function(){return i(t)})),a.cleanup=function(){cancelAnimationFrame(e),cancelAnimationFrame(r)}},this.stop=function(){a.isRunning=!1,a.cleanup()},this.thunk=e,this.fps=t,this.cleanup=function(){},this.isRunning=!1};t.RenderAtFps=a})),define("modules/clean/invitations",["require","exports","tslib","modules/core/notify","modules/clean/ajax","modules/core/exception","modules/core/i18n"],(function(e,t,a,n,r,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),s=a.__importStar(s),t.SendInvitations=function(e,t,a,o,c){if(e.trim().split("/[;,s]+/").length&&""!==e.trim()||t&&""!==t.trim()){var l={emails:e,referral_src:o};null!=t&&t&&null!=a&&(l.fb_ids=t,l.fb_link=a);var u="/send_invite";return r.WebRequest({url:u,type:"POST",data:l,success:function(e){c?c(e.substr(5)):n.Notify.success(e.substr(5))},error:function(e){if(200!==e.status)return n.Notify.error(i.intl.formatMessage({defaultMessage:"There was a problem completing this request."})),s.reportStack("The server communicated a status of "+e.status+" when posting to "+u+" with an\n          error message of "+e.statusText,{severity:s.SEVERITY.CRITICAL,tags:[""+e.status]})}}),!1}n.Notify.error(i.intl.formatMessage({defaultMessage:"Please choose at least one contact."}))}})),define("modules/clean/react/referrals/referrals_hero",["require","exports","tslib","react","modules/clean/animation"],(function(e,t,a,n,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(function(e){function t(t){var n=e.call(this,t)||this;return n.state=a.__assign({actors:[],canvas:null,ctx:null,end:0,fps:60,id:""},n.state),n.drawImage=function(e,t,a,n){void 0===a&&(a=0),void 0===n&&(n=0);var r=new Image;e&&r.addEventListener("load",(function(){e.drawImage(r,a,n)}),!1),r.src=t},n.rocket=function(e){var t=0,a={x:e.start.x,y:e.start.y},s=new Image,i=0,o="up",c=function(){if(n.state.ctx&&n.state.canvas){n.state.ctx.clearRect(0,0,n.state.canvas.width,n.state.canvas.height);var e=a.x,t=a.y;i===2*n.state.fps&&(o="down"),0===i&&(o="up"),"down"===o?i--:i++,t+=.1*i,n.state.ctx.drawImage(s,e-75,t-75),setTimeout((function(){requestAnimationFrame(c)}),1e3/n.state.fps)}},l=function(){var i;(t+=1.2)>=n.state.end?setTimeout((function(){return c(),!1}),750):(i=t,n.state.ctx&&n.state.canvas&&(n.state.ctx.clearRect(0,0,n.state.canvas.width,n.state.canvas.height),i<=n.state.end&&((a=r.quadraticBezierPointsAtPercent({x:e.start.x,y:e.start.y},{x:e.mid.x,y:e.mid.y},{x:e.end.x,y:e.end.y},i/100)).x=a.x+(2*Math.random()+1),n.state.ctx.drawImage(s,a.x-75,a.y-75))),setTimeout((function(){requestAnimationFrame(l)}),1e3/n.state.fps))};s.addEventListener("load",(function(){l()}),!1),s.src=e.path},n}return a.__extends(t,e),t.prototype.componentDidMount=function(){var e=this,t={_rocket:this.rocket},a=document.getElementById(this.props.id),n=a&&a.getContext("2d")||null,r=this.props.actors.map((function(e){return JSON.parse(e)}));this.setState({actors:r,currentBonus:this.props.currentBonus,maxBonus:this.props.maxBonus,canvas:a,ctx:n,end:this.props.currentBonus/this.props.maxBonus*100,fps:this.props.fps,id:this.props.id,static:this.props.static,staticHero:this.props.staticHero,endState:this.props.endState}),this.props.static?this.drawImage(n,this.props.staticHero,0,0):this.props.currentBonus<this.props.maxBonus?r.map((function(a){t[a.animationFunction]?t[a.animationFunction](a):e.drawImage(n,a.path,a.start.x,a.start.y)})):this.drawImage(n,this.props.endState,0,0)},t.prototype.render=function(){var e={};return!this.state.static&&this.state.currentBonus<this.state.maxBonus&&(e.backgroundImage="url("+this.props.stage+")"),n.default.createElement("canvas",{className:this.props.className,id:this.props.id,height:this.props.height,width:this.props.width,style:e})},t.defaultProps={actors:[],currentBonus:0,maxBonus:32,fps:60,id:"",height:313,width:864},t})((n=a.__importDefault(n)).default.Component);t.ReferralsHero=s})),define("modules/clean/react/referrals/referrals_tokenizer",["require","exports","tslib","modules/core/i18n","modules/clean/react/button","modules/clean/account/email","modules/clean/web_timing_logger","modules/clean/contacts/tokenizer","modules/clean/account/email_verify_reasons","modules/clean/invitations","modules/core/notify","react","modules/clean/viewer","modules/clean/analytics"],(function(e,t,a,n,r,s,i,o,c,l,u,f,d,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),s=a.__importStar(s),i=a.__importStar(i),c=a.__importStar(c),f=a.__importDefault(f);var p=d.Viewer.get_viewer().get_users()[0],_=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getTokenizerReference=function(e){t.tokenizerReference=e},t._onClick=function(){var e=t.tokenizerReference.getContacts().filter((function(e){return!e.invalid})).map((function(e){return e.email}));return m.WebMiscActivityLogger.log("refer_click_send_emails",{num_recipients:e.length}),s.EmailVerification.get_for_user(p).verified_or_send_and_show(c.REFER_FRIENDS,l.SendInvitations(e.join(";"),"","","referrals_bulk9",(function(e){u.Notify.success(e)})))},t}return a.__extends(t,e),t.prototype.componentDidMount=function(){i.mark_time_to_interactive()},t.prototype.render=function(){return f.default.createElement("div",{className:"tokenizer-container"},f.default.createElement("div",{className:"tokenizer-object"},f.default.createElement(o.ContactsTokenizer,{placeholder:n.intl.formatMessage({defaultMessage:"Names or email addresses"}),ref:this.getTokenizerReference,user:p,showContactImport:!0,shouldLogContactSearch:!0,context:"referrals"})),f.default.createElement(r.Button,{className:"tokenizer-button",onClick:this._onClick},n.intl.formatMessage({defaultMessage:"Send"})))},t})(f.default.Component);t.ReferralsTokenizer=_})),define("modules/clean/referral_contact_refresh",["require","exports","tslib","jquery","nouislider","modules/clean/ajax","modules/clean/dbmodal","modules/core/exception","modules/core/notify","modules/clean/viewer","modules/core/i18n","modules/clean/invitations","modules/clean/analytics"],(function(e,t,a,n,r,s,i,o,c,l,u,f,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n),r=a.__importStar(r),s=a.__importStar(s),i=a.__importStar(i),o=a.__importStar(o);var m=function(e,t,a,m){var p=this;this.get_selected_emails=function(){var e=n.default("#contact-list input:checked.email"),t=[];return e&&(t=n.default.map(e,(function(e){return n.default(e).val()}))),t},this.get_selected_fb_contacts=function(){var e=n.default("#contact-list input:checked.fb"),t=[];return e&&(t=n.default.map(e,(function(e){return n.default(e).val()}))),t},this.show_contact_list_modal=function(){n.default("#contact-list").empty(),n.default("#free-space-slider").hide(),n.default("#select-contacts-submit-button").text(u.intl.formatMessage({defaultMessage:"Invite friends"})),n.default("#contact-import-spinner").show(),new i.DBModal({element_id:"select-contacts-modal",title:u.intl.formatMessage({defaultMessage:"Invite friends and family to Dropbox!"})}).show();var e="/contacts/get_imported_checklist";return s.WebProgressRequest({url:e,subject_user:l.Viewer.get_viewer().personal_user,success:function(e,t){n.default("#contact-list").html(e),p.show_contacts(),p.eventHandlers(),p.spaceSlider()},error:function(t){o.reportStack("The server communicated a status of "+t.status+" when retrieving data from "+e,{severity:o.SEVERITY.CRITICAL,tags:[""+t.status]}),p.show_contacts()}})},this.show_contacts=function(){n.default("#contact-import-spinner").hide(),0===n.default(".contact-row").length&&new i.DBModal({element_id:"no-contact-list-modal",title:u.intl.formatMessage({defaultMessage:"Oops! No contacts here."})}).show(),l.Viewer.get_viewer().team_id||n.default("#free-space-slider").show(),p.contactRows=n.default("#contact-list .contact-row");for(var e=0,t=p.contactRows.length;e<t;e++){var a=p.contactRows[e];a.search_text=n.default(a).find(".contact-name").first().html()+n.default(a).find(".contact-email").first().html()}p.update_invite_count(),p.select_all(!0),p.select_first(24)},this.select_first=function(e){n.default("#contact-list input.email").not(":disabled").slice(0,e).prop("checked",!0),p.update_invite_count()},this.select_all=function(e){p.selectAllActive=!e&&!p.selectAllActive;var t=p.selectAllActive?u.intl.formatMessage({defaultMessage:"Select None"}):u.intl.formatMessage({defaultMessage:"Select All"});if(n.default("#contact-select-all").text(t),!e){var a=n.default("#contact-list input.email:visible").not(":disabled");p.selectAllActive&&(a=a.slice(0,450)),a.each((function(e,t){n.default(t).prop("checked",p.selectAllActive)})),p.update_invite_count()}},this.update_invite_count=function(){var e,t=n.default(".contact-row").removeClass("selected").has("input:checked").addClass("selected").length,a=Math.min(t*p.bonusPerReferral,p.maxReferralBonus),r=document.getElementById("free-space-slider-track");if(r&&r.noUiSlider){var s=a||0;r.noUiSlider.set(s);var i=n.default("#free-space-slider-track .noUi-handle");i.css("margin-left",-i.outerWidth()*s/p.maxReferralBonus+"px");var o=s/p.maxReferralBonus*100+"%";i.css("left",o)}n.default("#free-space-slider-track .noUi-handle").text(u.intl.formatMessage({defaultMessage:"{potential_gb} GB"},{potential_gb:a})),e=t?u.intl.formatMessage({defaultMessage:"{count, plural, one{Invite {count} friend} other{Invite {count} friends}}"},{count:t}):u.intl.formatMessage({defaultMessage:"Invite friends",description:"Button"}),n.default("#select-contacts-submit-button").text(e)},this.filter=function(e){if(e!==p.lastSearch&&(null!=p.lastSearch||""!==e)){p.lastSearch=e,(null!=p.lastSearch?p.lastSearch.length:void 0)?n.default("#contact-list .contact-header").hide():n.default("#contact-list .contact-header").show();for(var t=0,a=new RegExp(e.trim().split(/[;,\s]+/).join(".*"),"i"),r=0,s=p.contactRows.length;r<s;r++){var i=p.contactRows[r],o=i.style;i.search_text&&(a.test(i.search_text)?(t+=1,o.display=""):o.display="none")}p.select_all(!0),setTimeout((function(){if(p.lastSearch===e)return d.WebMiscActivityLogger.log("contact_list_search",{search_string:e,rows_shown:t})}),500),p.update_invite_count()}},this.eventHandlers=function(){return n.default("#contact-filter").on("change",(function(e){return p.filter(n.default("#contact-filter").val())})),n.default("#select-contacts-submit-button").on("click",(function(){var e=p.get_selected_emails().join(";"),t=p.get_selected_fb_contacts().join(";");f.SendInvitations(e,t,p.fbUrl,p.referralTypeBulk,(function(e){c.Notify.success(e)}))})),p.selectAllActive=!1,n.default("#contact-select-all").on("click",(function(e){e.preventDefault(),p.select_all(!1)})),n.default("#contact-list").on("change",(function(){if(p.update_invite_count(),null!=p.lastSearch?p.lastSearch.length:void 0)return d.WebMiscActivityLogger.log("contact_list_search",{search_string:p.lastSearch,clicked:1})}))},this.spaceSlider=function(){var e=document.getElementById("free-space-slider-track"),t=p.maxReferralBonus,a=p.bonusPerReferral;e&&(r.create(e,{start:[0],range:{min:[0],max:[t]},step:a,connect:!0}),e.setAttribute("disabled","true")),p.update_invite_count()},this.bonusPerReferral=e,this.maxReferralBonus=t,this.referralTypeBulk=a,this.fbUrl=m};t.ReferralContactList=m})),define("modules/clean/referral_refresh",["require","exports","tslib","jquery","modules/clean/dbmodal","modules/clean/account/email","modules/clean/account/email_verify_reasons","modules/core/exception","modules/core/notify","modules/clean/profile_services/profile_services_constants","modules/clean/social_share_dialog","modules/clean/viewer","modules/core/i18n","modules/clean/analytics","modules/clean/profile_services/profile_services_link","modules/clean/referral_contact_refresh"],(function(e,t,a,n,r,s,i,o,c,l,u,f,d,m,p,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n),r=a.__importStar(r),s=a.__importStar(s),i=a.__importStar(i),o=a.__importStar(o),l=a.__importDefault(l),u=a.__importDefault(u);var h=function(e,t,a,h){var v=this;this.fbURL=e,this.referralTypeBulk=t,this.bonusPerReferral=a,this.maxReferralBonus=h,this.eventHandlers=function(){var e=new r.DBModal({element_id:"copy-link-modal"});n.default("#copy-link--button").on("click",(function(t){t.preventDefault(),m.WebMiscActivityLogger.log("refer_click_copy_link"),e.show(),n.default("#global-referral-link").select()}))},this.facebookShare=function(){new u.default(".facebook-button",(function(){m.WebMiscActivityLogger.log("refer_click_facebook_button")}))},this.initBulkInvite=function(){var e=new p.ProfileServicesLinkingHandler,t=new _.ReferralContactList(v.bonusPerReferral,v.maxReferralBonus,v.referralTypeBulk,v.fbURL);n.default(".import-gmail-contacts").on("click",(function(){return m.WebMiscActivityLogger.log("refer_click_import_gmail"),v.user?e.auth_service_with_user(l.default.GOOGLE,v.user.id,(function(e){return(function(e){if(p.ProfileServicesLinkingHandler.show_import_notifications(e),e.success)return e.verified_profile_email?t.show_contact_list_modal():s.EmailVerification.get_for_user(v.user).verified_or_send_and_show(i.REFER_FRIENDS,t.show_contact_list_modal);o.reportStack("There has been an error connecting to "+v.referralTypeBulk+" from /referrals and\n          retrieving contact information.",{severity:o.SEVERITY.NONCRITICAL,tags:[v.referralTypeBulk+" import error"]});var a=d.intl.formatMessage({defaultMessage:"There has been an error connecting to {referral_type}"},{referral_type:v.referralTypeBulk});c.Notify.error(a)})(e)}),"contact-import-modal"):void 0}))},this.user=f.Viewer.get_viewer().personal_user,this.eventHandlers(),this.facebookShare(),this.initBulkInvite()};t.ReferralsPage=h})),define("modules/clean/social_share_dialog",["require","exports","tslib","jquery"],(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a.__importDefault(n);var r=function(e,t){n.default(e).on("click",(function(e){e.preventDefault(),t&&t(),window.open(n.default(this).data("social-href")||n.default(this).attr("href"),"db_share_modal","width=600,height=440,top=400,left=400,resizable,scrollbars=yes,status=1")}))};t.default=r}));
//# sourceMappingURL=pkg-legacy-bg.min.js-vfltllDHd.map