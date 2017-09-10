import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appPetitionTooltip]'
})

export class PetitionTooltipDirective {
  @Input('signsCount') signsCount: number;
  @Input('petitionGoal') petitionGoal: number;
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
      this.tooltip = this.r.createElement('div');
      this.r.addClass(this.tooltip, 'progress-bar');
      this.r.addClass(this.tooltip, 'progress-bar-striped');
      this.r.addClass(this.tooltip, 'bg-danger');
      this.r.addClass(this.tooltip, 'signups');

      this.r.setStyle(this.tooltip, 'width', ((this.petitionGoal - this.signsCount) / this.petitionGoal) * 100 + '%');
    }

    return this.tooltip;
  }

  private removeTooltip() {
    this.tooltip = null;
  }
}
