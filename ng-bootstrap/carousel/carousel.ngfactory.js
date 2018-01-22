/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./carousel";
import * as i3 from "./carousel-config";
var styles_NgbCarousel = [];
var RenderType_NgbCarousel = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbCarousel, data: {} });
export { RenderType_NgbCarousel as RenderType_NgbCarousel };
function View_NgbCarousel_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "li", [], [[8, "id", 0], [2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cycleToSelected(_v.context.$implicit.id, _co.getSlideEventDirection(_co.activeId, _v.context.$implicit.id)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit.id; var currVal_1 = (_v.context.$implicit.id === _co.activeId); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_NgbCarousel_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbCarousel_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "carousel-item"]], [[2, "active", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbCarousel_3)), i0.ɵdid(3, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) { var currVal_1 = _v.context.$implicit.tplRef; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id === _co.activeId); _ck(_v, 0, 0, currVal_0); }); }
export function View_NgbCarousel_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 4, "ol", [["class", "carousel-indicators"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbCarousel_1)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, null, 4, "div", [["class", "carousel-inner"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbCarousel_2)), i0.ɵdid(10, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(13, 0, null, null, 6, "a", [["class", "carousel-control-prev"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cycleToPrev() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(15, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-prev-icon"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Previous"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(21, 0, null, null, 6, "a", [["class", "carousel-control-next"], ["role", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.cycleToNext() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(23, 0, null, null, 0, "span", [["aria-hidden", "true"], ["class", "carousel-control-next-icon"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Next"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.slides; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.slides; _ck(_v, 10, 0, currVal_1); }, null); }
export function View_NgbCarousel_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-carousel", [["class", "carousel slide"], ["tabIndex", "0"]], [[4, "display", null]], [[null, "mouseenter"], [null, "mouseleave"], [null, "keydown.arrowLeft"], [null, "keydown.arrowRight"]], function (_v, en, $event) { var ad = true; if (("mouseenter" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).pause() !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1).cycle() !== false);
        ad = (pd_1 && ad);
    } if (("keydown.arrowLeft" === en)) {
        var pd_2 = (i0.ɵnov(_v, 1).keyPrev() !== false);
        ad = (pd_2 && ad);
    } if (("keydown.arrowRight" === en)) {
        var pd_3 = (i0.ɵnov(_v, 1).keyNext() !== false);
        ad = (pd_3 && ad);
    } return ad; }, View_NgbCarousel_0, RenderType_NgbCarousel)), i0.ɵdid(1, 2867200, null, 1, i2.NgbCarousel, [i3.NgbCarouselConfig], null, null), i0.ɵqud(603979776, 1, { slides: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = "block"; _ck(_v, 0, 0, currVal_0); }); }
var NgbCarouselNgFactory = i0.ɵccf("ngb-carousel", i2.NgbCarousel, View_NgbCarousel_Host_0, { interval: "interval", wrap: "wrap", keyboard: "keyboard", activeId: "activeId" }, { slide: "slide" }, []);
export { NgbCarouselNgFactory as NgbCarouselNgFactory };
//# sourceMappingURL=carousel.ngfactory.js.map