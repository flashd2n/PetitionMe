import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
 @Input('appHighlight') // tslint:disable-line no-input-rename
 background: string;
 color: string;

 constructor(private el: ElementRef) { }

 @HostListener('mouseenter')
 onMouseEnter() {
   this.highlight(this.background || 'white', this.color || '#4E5D6C');
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
