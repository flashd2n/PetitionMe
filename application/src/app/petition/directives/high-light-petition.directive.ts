import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  background = '#e0e0e0';
  color = '#4E5D6C';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.background, this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null, null);
  }

  private highlight(background: string, color: string) {
    this.el.nativeElement.style.backgroundColor = background;
    this.el.nativeElement.style.color = color;
  }
}
