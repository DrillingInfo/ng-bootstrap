import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { getValueInRange } from '../util/util';
import { NgbProgressbarConfig } from './progressbar-config';
/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = /** @class */ (function () {
    function NgbProgressbar(config) {
        /**
           * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
           */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    NgbProgressbar.prototype.getValue = function () { return getValueInRange(this.value, this.max); };
    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
    NgbProgressbar.decorators = [
        { type: Component, args: [{
                    selector: 'ngb-progressbar',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    NgbProgressbar.ctorParameters = function () { return [
        { type: NgbProgressbarConfig, },
    ]; };
    NgbProgressbar.propDecorators = {
        "max": [{ type: Input },],
        "animated": [{ type: Input },],
        "striped": [{ type: Input },],
        "showValue": [{ type: Input },],
        "type": [{ type: Input },],
        "value": [{ type: Input },],
        "height": [{ type: Input },],
    };
    return NgbProgressbar;
}());
export { NgbProgressbar };
//# sourceMappingURL=progressbar.js.map