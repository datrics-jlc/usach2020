define(["require","exports","tslib","react","spectrum/dropdown_menu","modules/clean/react/css"],(function(e,t,n,u,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),u=n.__importDefault(u);t.DropdownMenu=a.requireCssWithComponent((function(e){var t=e.dropDownItems,n=e.className,a=e.menuClassName,l=e.actionFieldChange,s=e.fieldValue,i=e.disabled,o=void 0!==i&&i,c=e.id,d=t.map((function(e){var t=e.item,n=e.value;return u.default.createElement(r.MenuItem,{key:String(n),value:n,selected:n===s},t)})),m=t.filter((function(e){return e.value===s}))[0];return u.default.createElement(r.DropdownMenu,{className:n,disabled:o,onSelection:function(e){return l(e)},id:c},u.default.createElement(r.DropdownMenuButton,null,m&&(m.buttonItem||m.item)),u.default.createElement(r.Menu,{className:a},d))}),["/static/css/spectrum/index.web-vfl_-DzRS.css"])}));
//# sourceMappingURL=dropdown_menu.min.js-vflN4Y-nM.map