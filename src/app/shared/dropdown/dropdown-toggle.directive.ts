import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Renderer2
} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {
  constructor(
    @Inject(DropdownDirective) public dropdown: any,
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  @HostListener('click') onClick() {
    this.dropdown.toggle();
  }

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
