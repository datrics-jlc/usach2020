define(["require","exports","tslib","external/lodash","rondo/v1/index"],(function(e,t,i,r,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=i.__importStar(r),t.selectedCategoriesActivities=function(e){return e.reduce((function(e,t){return e.push.apply(e,t.activities),e}),Array())},t.selectedActivities=function(e,i){var r=t.selectedCategoriesActivities(e);return i.filter((function(e){return!r.find((function(t){return e.id===t.id}))}))};var s=(function(){function e(){this.activitiesFilter=c.createSelector((function(e){return e.filters&&e.filters.activity?e.filters.activity.fieldValue:[]})),this.activityCategories=c.createSelector((function(e){return e.categories})),this.activities=c.createSelector(this.activityCategories,(function(e){return t.selectedCategoriesActivities(e)})),this.selectedCategories=c.createSelector(this.activityCategories,this.activitiesFilter,(function(e,t){return e.reduce((function(e,i){return 0===r.differenceWith(i.activities,t,(function(e,t){return e.id===t.id})).length&&e.push(i),e}),[])})),this.selectedCategoryIds=c.createSelector(this.selectedCategories,(function(e){return e.map((function(e){return e.id}))})),this.selectedActivities=c.createSelector(this.selectedCategories,this.activitiesFilter,(function(e,i){return t.selectedActivities(e,i)})),this.selectedActivityIds=c.createSelector(this.selectedActivities,(function(e){return e.map((function(e){return e.id}))})),this.selectedItems=c.createSelector(this.selectedCategories,this.selectedActivities,(function(e,t){return i.__spreadArrays(e,t)})),this.fileOpsCategory=c.createSelector(this.activityCategories,(function(e){return e.find((function(e){return"file_operations"===e.id}))})),this.hasFileEvents=c.createSelector(this.fileOpsCategory,this.activitiesFilter,(function(e,t){return!!e&&!!t.find((function(t){return!!e.activities.find((function(e){return e.id===t.id}))}))}))}return e.displayName="ActivityPicker",e})();t.ActivityCategoriesBehavior=s}));
//# sourceMappingURL=activity_categories_behavior.min.js-vflvMzCm4.map