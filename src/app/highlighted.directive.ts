import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
})
export class HighlightedDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  addColor() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  removeColor() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
