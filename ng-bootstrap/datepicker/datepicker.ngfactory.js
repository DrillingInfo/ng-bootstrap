/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./datepicker-day-view.ngfactory";
import * as i2 from "./datepicker-day-view";
import * as i3 from "./datepicker-navigation.ngfactory";
import * as i4 from "./datepicker-navigation";
import * as i5 from "./datepicker-i18n";
import * as i6 from "./ngb-calendar";
import * as i7 from "@angular/common";
import * as i8 from "./datepicker-month-view.ngfactory";
import * as i9 from "./datepicker-month-view";
import * as i10 from "@angular/forms";
import * as i11 from "./datepicker";
import * as i12 from "./datepicker-service";
import * as i13 from "./datepicker-keymap-service";
import * as i14 from "./datepicker-config";
import * as i15 from "./ngb-date-adapter";
var styles_NgbDatepicker = ["[_nghost-%COMP%] {\n      border: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0.25rem;\n      display: inline-block;\n    }\n    .ngb-dp-month[_ngcontent-%COMP%] {\n      pointer-events: none;\n    }\n    .ngb-dp-header[_ngcontent-%COMP%] {\n      border-bottom: 0px;\n      border-radius: .25rem 0.25rem 0rem 0rem;\n      padding-top: 0.25rem;\n    }\n    ngb-datepicker-month-view[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }\n    .ngb-dp-month-name[_ngcontent-%COMP%] {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n      .ngb-dp-month + .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month + .ngb-dp-month > .ngb-dp-month-name {\n      padding-left: 1rem;\n    }\n      .ngb-dp-month:last-child .ngb-dp-week {\n      padding-right: .25rem;\n    }\n      .ngb-dp-month:first-child .ngb-dp-week {\n      padding-left: .25rem;\n    }\n      .ngb-dp-month > ngb-datepicker-month-view > .ngb-dp-week:last-child {\n      padding-bottom: .25rem;\n    }\n    .ngb-dp-months[_ngcontent-%COMP%] {\n      display: flex;\n    }"];
var RenderType_NgbDatepicker = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbDatepicker, data: {} });
export { RenderType_NgbDatepicker as RenderType_NgbDatepicker };
function View_NgbDatepicker_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [["class", "btn-light"], ["ngbDatepickerDayView", ""]], [[2, "bg-primary", null], [2, "text-white", null], [2, "text-muted", null], [2, "outside", null], [2, "active", null]], null, null, i1.View_NgbDatepickerDayView_0, i1.RenderType_NgbDatepickerDayView)), i0.ɵdid(2, 49152, null, 0, i2.NgbDatepickerDayView, [], { currentMonth: [0, "currentMonth"], date: [1, "date"], disabled: [2, "disabled"], focused: [3, "focused"], selected: [4, "selected"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var currVal_5 = _v.context.currentMonth; var currVal_6 = _v.context.date; var currVal_7 = _v.context.disabled; var currVal_8 = _v.context.focused; var currVal_9 = _v.context.selected; _ck(_v, 2, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).selected; var currVal_1 = i0.ɵnov(_v, 2).selected; var currVal_2 = i0.ɵnov(_v, 2).isMuted(); var currVal_3 = i0.ɵnov(_v, 2).isMuted(); var currVal_4 = i0.ɵnov(_v, 2).focused; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_NgbDatepicker_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-datepicker-navigation", [], null, [[null, "navigate"], [null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("navigate" === en)) {
        var pd_0 = (_co.onNavigateEvent($event) !== false);
        ad = (pd_0 && ad);
    } if (("select" === en)) {
        var pd_1 = (_co.onNavigateDateSelect($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_NgbDatepickerNavigation_0, i3.RenderType_NgbDatepickerNavigation)), i0.ɵdid(1, 49152, null, 0, i4.NgbDatepickerNavigation, [i5.NgbDatepickerI18n, i6.NgbCalendar], { date: [0, "date"], disabled: [1, "disabled"], maxDate: [2, "maxDate"], minDate: [3, "minDate"], months: [4, "months"], showSelect: [5, "showSelect"], showWeekNumbers: [6, "showWeekNumbers"] }, { navigate: "navigate", select: "select" }), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.firstDate; var currVal_1 = _co.model.disabled; var currVal_2 = _co.model.maxDate; var currVal_3 = _co.model.minDate; var currVal_4 = _co.model.months; var currVal_5 = (_co.model.navigation === "select"); var currVal_6 = _co.showWeekNumbers; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_NgbDatepicker_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-dp-month-name bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["\n            ", " ", "\n          "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.i18n.getMonthFullName(_v.parent.context.$implicit.number); var currVal_1 = _v.parent.context.$implicit.year; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_NgbDatepicker_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(1, 0, null, null, 8, "div", [["class", "ngb-dp-month d-block"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_4)), i0.ɵdid(4, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(6, 0, null, null, 2, "ngb-datepicker-month-view", [["class", "d-block"]], null, [[null, "select"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("select" === en)) {
        var pd_0 = (_co.onDateSelect($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_NgbDatepickerMonthView_0, i8.RenderType_NgbDatepickerMonthView)), i0.ɵdid(7, 49152, null, 0, i9.NgbDatepickerMonthView, [i5.NgbDatepickerI18n], { dayTemplate: [0, "dayTemplate"], month: [1, "month"], outsideDays: [2, "outsideDays"], showWeekdays: [3, "showWeekdays"], showWeekNumbers: [4, "showWeekNumbers"] }, { select: "select" }), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.navigation === "none") || ((_co.displayMonths > 1) && (_co.navigation === "select"))); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.dayTemplate || i0.ɵnov(_v.parent, 1)); var currVal_2 = _v.context.$implicit; var currVal_3 = ((_co.displayMonths === 1) ? _co.outsideDays : "hidden"); var currVal_4 = _co.showWeekdays; var currVal_5 = _co.showWeekNumbers; _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
export function View_NgbDatepicker_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(0, [["dt", 2]], null, 0, null, View_NgbDatepicker_1)), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 4, "div", [["class", "ngb-dp-header bg-light"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_2)), i0.ɵdid(6, 16384, null, 0, i7.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(9, 0, null, null, 4, "div", [["class", "ngb-dp-months"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbDatepicker_3)), i0.ɵdid(12, 802816, null, 0, i7.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.navigation !== "none"); _ck(_v, 6, 0, currVal_0); var currVal_1 = _co.model.months; _ck(_v, 12, 0, currVal_1); }, null); }
export function View_NgbDatepicker_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "ngb-datepicker", [["tabindex", "0"]], [[1, "tabindex", 0]], [[null, "blur"], [null, "focus"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (i0.ɵnov(_v, 4).showFocus(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (i0.ɵnov(_v, 4).showFocus(true) !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (i0.ɵnov(_v, 4).onKeyDown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_NgbDatepicker_0, RenderType_NgbDatepicker)), i0.ɵprd(5120, null, i10.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i11.NgbDatepicker]), i0.ɵprd(512, null, i12.NgbDatepickerService, i12.NgbDatepickerService, [i6.NgbCalendar]), i0.ɵprd(512, null, i13.NgbDatepickerKeyMapService, i13.NgbDatepickerKeyMapService, [i12.NgbDatepickerService, i6.NgbCalendar]), i0.ɵdid(4, 770048, null, 0, i11.NgbDatepicker, [i13.NgbDatepickerKeyMapService, i12.NgbDatepickerService, i6.NgbCalendar, i5.NgbDatepickerI18n, i14.NgbDatepickerConfig, i0.ChangeDetectorRef, i0.ElementRef, i15.NgbDateAdapter], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 4).model.disabled ? undefined : "0"); _ck(_v, 0, 0, currVal_0); }); }
var NgbDatepickerNgFactory = i0.ɵccf("ngb-datepicker", i11.NgbDatepicker, View_NgbDatepicker_Host_0, { dayTemplate: "dayTemplate", displayMonths: "displayMonths", firstDayOfWeek: "firstDayOfWeek", markDisabled: "markDisabled", maxDate: "maxDate", minDate: "minDate", navigation: "navigation", outsideDays: "outsideDays", showWeekdays: "showWeekdays", showWeekNumbers: "showWeekNumbers", startDate: "startDate" }, { navigate: "navigate", select: "select" }, []);
export { NgbDatepickerNgFactory as NgbDatepickerNgFactory };
//# sourceMappingURL=datepicker.ngfactory.js.map