import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : '[appToggleHighlight]'
})
export class ToggleHighlightDirective {


  private colors: string[] = ['red', 'green'];
  private currentColorIndex: number = 0;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.toggleBackgroundColor();
  }

  private toggleBackgroundColor() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.el.nativeElement.style.backgroundColor = this.colors[this.currentColorIndex];
  }
}