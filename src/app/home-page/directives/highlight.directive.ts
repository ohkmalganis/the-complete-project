import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.elRef.nativeElement.style.backgroundColor = 'green';
    this.elRef.nativeElement.style.color = 'white';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
