import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[appDropdownMenu]'
})
export class DropdownMenuDirective {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  listen(isOpen$: Observable<boolean>) {
    isOpen$.pipe(tap((isOpen) => this.toggle(isOpen))).subscribe();
  }

  private toggle(isOpen: boolean) {
    if (isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'show');
    }
  }
}
