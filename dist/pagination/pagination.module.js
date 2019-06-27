import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from './pagination';
import { NgbPaginationConfig } from './pagination-config';
export { NgbPagination } from './pagination';
export { NgbPaginationConfig } from './pagination-config';
var NgbPaginationModule = /** @class */ (function () {
    function NgbPaginationModule() {
    }
    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [NgbPaginationConfig] }; };
    NgbPaginationModule.decorators = [
        { type: NgModule, args: [{ declarations: [NgbPagination], exports: [NgbPagination], imports: [CommonModule] },] },
    ];
    return NgbPaginationModule;
}());
export { NgbPaginationModule };
//# sourceMappingURL=pagination.module.js.map