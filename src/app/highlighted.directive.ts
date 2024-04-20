import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
})
export class HighlightedDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter')
  addColor() {
    this.elementRef.nativeElement.style.backgroundColor = 'orange';
    this.elementRef.nativeElement.style.color = '#ffffff';
  }
  @HostListener('mouseleave')
  removeColor() {
    this.elementRef.nativeElement.style.backgroundColor = '#ffffff';
    this.elementRef.nativeElement.style.color = '#000000';
  }
}
