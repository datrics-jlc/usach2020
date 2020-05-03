define(["require","exports","tslib","react","modules/clean/payments/cash","modules/core/i18n","modules/clean/payments/skus/constants","modules/constants/trademark"],(function(e,t,a,n,l,r,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=(function(e){function t(t){var a=e.call(this,t)||this;if(t.localeNumberFormat){var n=t.localeNumberFormat;l.CashUtil.set_locale_number_format(n.group_symbol,n.decimal_symbol)}return a}return a.__extends(t,e),t.prototype.getInviteAndBuyText=function(){var e,t,l=this.props,o=l.additionalLicenses,u=l.isTrial,d=l.nextBillingDate,_=l.subChangePlan;return _?(e=_.finalSubState.billingSchedule.id===i.ScheduleId.YEARLY?r.intl.formatMessage({defaultMessage:"per year"}):r.intl.formatMessage({defaultMessage:"per month"}),t={tax_rate_text:"",new_amount:_.tvm.getBilledPrice().formatCurrency(),next_billing_date_string:d,additional_licenses:o,per_period_text:e,recurring_amount:_.nextBillingSummary.total.formatCurrency(),trademark_business:s.TRADEMARK_BUSINESS,total_licenses:_.nextBillingSummary.totalLicenses,white_space:" "},_.nextBillingSummary.doesTaxApply&&(t.tax_rate_text=r.intl.formatMessage({defaultMessage:"(including {tax_rate, number, ::percent .##} tax)"},{tax_rate:_.nextBillingSummary.taxRate/100})),u?n.default.createElement("span",null,r.intl.formatMessage({defaultMessage:"You won’t be charged now for adding new licenses. If you don’t cancel before your {trademark_business} trial ends, your new total cost of {recurring_amount} {tax_rate_text} {per_period_text} will be applied on {next_billing_date_string}."},t)):n.default.createElement("span",null,r.intl.formatMessage({defaultMessage:"{count, plural, one{You’ll be charged an additional {new_amount} {tax_rate_text} for adding <qty>{additional_licenses}</qty> license prorated for the current billing period.{white_space}} other{You’ll be charged an additional {new_amount} {tax_rate_text} for adding <qty>{additional_licenses}</qty> licenses prorated for the current billing period.{white_space}}}"},a.__assign(a.__assign({count:t.additional_licenses},t),{qty:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("span",{className:"add-qty"},e)}})),r.intl.formatMessage({defaultMessage:"{count, plural, one{Your new total will be {recurring_amount} {tax_rate_text} {per_period_text} for all {total_licenses} license going forward. These changes will be applied to your next billing date on <span>{next_billing_date_string}</span>.} other{Your new total will be {recurring_amount} {tax_rate_text} {per_period_text} for all {total_licenses} licenses going forward. These changes will be applied to your next billing date on <span>{next_billing_date_string}</span>.}}"},a.__assign(a.__assign({count:t.total_licenses},t),{span:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.default.createElement("span",{className:"multifield-invite-reminder-modal__next-billing-date"},e)}})))):null},t.prototype.render=function(){return n.default.createElement("div",{className:this.props.className},this.getInviteAndBuyText())},t})((n=a.__importDefault(n)).default.Component);t.InviteAndBuyText=o}));
//# sourceMappingURL=invite_and_buy_text.min.js-vflJw_QlB.map