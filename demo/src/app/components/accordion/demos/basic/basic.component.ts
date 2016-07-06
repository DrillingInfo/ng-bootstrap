import { Component } from '@angular/core';

import { NgbAccordion, NgbPanel } from '@ng-bootstrap/accordion';

@Component({
  selector: 'ngbd-accordion-basic',
  template: require('./basic.component.html'),
  directives: [NgbAccordion, NgbPanel]
})
export class AccordionBasicComponent {
}
