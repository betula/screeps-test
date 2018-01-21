import {Directive, ElementRef, Input, Renderer} from '@angular/core';
import * as tippy from 'tippy.js';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(
    private hostElement: ElementRef,
    private renderer : Renderer
  ) {
    tippy(hostElement.nativeElement, {
      dynamicTitle: true
    });
  }

  @Input('appTooltip')
  set title(title: string) {
    this.renderer.setElementAttribute(this.hostElement.nativeElement, 'title', title);
  }

}
