/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./alert";
import * as i3 from "./alert-config";
var styles_NgbAlert = [];
var RenderType_NgbAlert = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbAlert, data: {} });
export { RenderType_NgbAlert as RenderType_NgbAlert };
function View_NgbAlert_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeHandler() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00D7"]))], null, null); }
export function View_NgbAlert_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["role", "alert"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbAlert_1)), i0.ɵdid(2, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.dismissible; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (("alert alert-" + _co.type) + (_co.dismissible ? " alert-dismissible" : "")); _ck(_v, 0, 0, currVal_0); }); }
export function View_NgbAlert_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-alert", [], null, null, null, View_NgbAlert_0, RenderType_NgbAlert)), i0.ɵdid(1, 49152, null, 0, i2.NgbAlert, [i3.NgbAlertConfig], null, null)], null, null); }
var NgbAlertNgFactory = i0.ɵccf("ngb-alert", i2.NgbAlert, View_NgbAlert_Host_0, { dismissible: "dismissible", type: "type" }, { close: "close" }, ["*"]);
export { NgbAlertNgFactory as NgbAlertNgFactory };
//# sourceMappingURL=alert.ngfactory.js.map