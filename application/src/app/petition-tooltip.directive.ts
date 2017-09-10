import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPetitionTooltip]'
})

export class PetitionTooltipDirective {
  @Input('tooltipContent') tooltipContent: string;
  element: any;
  tooltip: any;

  constructor(private el: ElementRef, private r: Renderer2) {
    this.element = this.el.nativeElement;
   }

  @HostListener('mouseenter')
  onMouseEnter() {
    const tooltip = this.getTooltip();
    this.r.appendChild(this.element, tooltip);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.r.removeChild(this.element, this.tooltip);
    this.removeTooltip();
  }

  private getTooltip() {
    if (this.tooltip === null || this.tooltip === undefined) {
      this.tooltip = this.r.createElement('span');

      const content = this.r.createText(this.tooltipContent);

      this.r.addClass(this.tooltip, 'petition-tooltip');
      this.r.appendChild(this.tooltip, content);
    }

    return this.tooltip;
  }

  private removeTooltip() {
    this.tooltip = null;
  }
}
