import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionalDisplay]'
})
export class ConditionalDisplayDirective {
  @Input('appConditionalDisplay') isVisible: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.toggleVisibility();
  }

  toggleVisibility() {
    const displayStyle = this.isVisible ? 'block' : 'none';
    this.renderer.setStyle(this.el.nativeElement, 'display', displayStyle);
  }
}
