define(["require","exports","tslib","classnames","modules/clean/analytics","react","modules/core/i18n","modules/clean/payments/validation","modules/clean/react/payments/checkout/components/payment_method_form/credit_card_frame","modules/clean/react/payments/checkout/components/payment_method_form/direct_debit_form","modules/clean/react/payments/common/form_value_helpers","modules/clean/react/payments/checkout/components/inputs/labeled_text_input","modules/clean/payments/payment_form/payment_form_spec","modules/clean/react/payments/checkout/components/payment_method_form/payment_method_selector","modules/clean/react/payments/checkout/components/payment_method_form/address_form","modules/clean/react/payments/checkout/components/payment_method_form/credit_card_purchase_full_name"],(function(e,t,a,o,r,s,n,i,p,l,m,d,u,c,f,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=a.__importDefault(o);var y=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onCpfChange=function(e){t.props.actions.updateCpf(e.value)},t.onCpfNameChange=function(e){t.props.actions.updateCpfName(e.value)},t}return a.__extends(t,e),t.prototype.componentDidMount=function(){var e=this.props.formData.countryCode.formattedValue;r.TeamsWebActionsLogger.log("uj-billing-country",{country:e}),"BR"===e&&this.props.showCpf&&r.TeamsWebActionsLogger.log("uj-cpf-viewed-field"),this.props.actions.updateHistory()},t.prototype.prepareForSubmission=function(){var e=this.props.formData.paymentMethod;return this.props.paymentIsDown||e.formattedValue!==u.PaymentMethod.CreditCard?Promise.resolve(!0):this.creditCardFrame.tokenize()},t.prototype.getCreditCardFrame=function(){return this.creditCardFrame},t.prototype.onVatChange=function(e){this.props.actions.updateVat(e.value||this.props.vat||"")},t.prototype.vatErrorString=function(){var e=this.props.formData.vat;return!m.FormValueHelper.isValid(e)&&e.showError?n.intl.formatMessage({defaultMessage:"Please enter a valid VAT number (ex: {examples})."},{examples:i.getVatExamples(this.props.formData.countryCode.formattedValue).join(", ")}):""},t.prototype.cpfErrorString=function(){var e=this.props.formData.cpf;return!m.FormValueHelper.isValid(e)&&e.showError?n.intl.formatMessage({defaultMessage:"Please enter a valid CPF number."}):""},t.prototype.renderLocationFields=function(){var e=this.props,t=e.paymentSpec,a=e.formData,r=null;if(t.should_show_vat_for_country(a.countryCode.formattedValue)){var p=i.getVatPrefix(a.countryCode.formattedValue),l=o.default({"billing-vat":!0,grid__item:!0,"grid__item--medium--1-2":Boolean(!this.props.isTeam)}),u=o.default({"billing-vat-input":!0,"billing-vat-input--valid":""!==a.vat.formattedValue&&m.FormValueHelper.isValid(a.vat)});r=s.default.createElement(d.BizLabeledTextInput,{className:l,inputClassName:u,name:"vat",labelText:n.intl.formatMessage({defaultMessage:"VAT number (optional)"}),errorText:this.vatErrorString(),placeholder:p,onChange:this.onVatChange.bind(this)})}var c=null;if(this.props.showCpf&&t.should_require_cpf(a.countryCode.formattedValue,a.paymentMethod.formattedValue)){var h=o.default({"billing-cpf":!0,grid__item:!0}),y=o.default({"payment-info__cpf-input":!0,"payment-info__cpf-input--valid":""!==a.cpf.formattedValue&&m.FormValueHelper.isValid(a.cpf)});c=s.default.createElement("div",{className:"grid__item"},s.default.createElement(d.BizLabeledTextInput,{className:h,inputClassName:y,name:"cpf",labelText:n.intl.formatMessage({defaultMessage:"CPF/CNPJ"}),errorText:this.cpfErrorString(),errorHTML:a.cpf.serverError,value:a.cpf.rawValue,onChange:this.onCpfChange}),this.props.showCpfName&&s.default.createElement(d.BizLabeledTextInput,{className:"billing-cpf grid__item",name:"cpf_name",labelText:n.intl.formatMessage({defaultMessage:"Name"}),value:a.cpfName.rawValue,onChange:this.onCpfNameChange}))}var _=null,g=n.intl.formatMessage({defaultMessage:"Please note: changing your billing location could impact your applicable tax rate."});return t.should_show_vat_for_country(a.countryCode.formattedValue)&&(g=n.intl.formatMessage({defaultMessage:"Please note: changing your billing location or VAT number could impact your applicable tax rate."})),this.props.isTeam||(_=s.default.createElement("div",{className:"disclaimer-message"},g)),s.default.createElement("div",{className:"location-info-fields grid__item grid--x-bookend"},s.default.createElement(f.AddressForms,{paymentSpec:this.props.paymentSpec,formData:this.props.formData,actions:this.props.actions,countryList:this.props.countryList,psd2AddressFields:this.props.psd2AddressFields,showCpf:this.props.showCpf,businessStyling:!0}),r,c,_)},t.prototype.render=function(){var e=this,t=this.props,r=t.paymentSpec,n=t.actions,i=t.formData,m=this.renderLocationFields(),d=m;i.paymentMethod.formattedValue===u.PaymentMethod.DirectDeposit&&(d=s.default.createElement(l.DirectDebitForm,{locationFields:m,formData:i,actions:n}));var f=o.default({grid__item:!0,"payment-form":!0,"payment-form--responsive":this.props.isResponsive});return s.default.createElement("div",{className:f},s.default.createElement(c.PaymentMethodSelector,{isTeam:this.props.isTeam,paymentSpec:r,paymentMethod:i.paymentMethod.rawValue,updatePaymentMethod:this.props.actions.updatePaymentMethod,countryCode:i.countryCode.rawValue,zipCode:i.zipCode.rawValue}),this.props.subPaymentMethodHeader,s.default.createElement(h.CreditCardPurchaseFullNameIfPsd2,a.__assign({},this.props,{businessStyling:!0})),s.default.createElement(p.CreditCardFrame,{getHeightFromIframe:!0,iframeUrl:this.props.iframeUrl,isResponsive:this.props.isResponsive,hidden:i.paymentMethod.formattedValue!==u.PaymentMethod.CreditCard,actions:this.props.actions,ref:function(t){e.creditCardFrame=t},nonce:i.nonce,bin:i.bin,submitForm:this.props.submitForm}),d)},t.defaultProps={isResponsive:!1},t})((s=a.__importDefault(s)).default.Component);t.BusinessPaymentMethodForm=y}));
//# sourceMappingURL=business_payment_method_form.min.js-vfl4gnqJ2.map