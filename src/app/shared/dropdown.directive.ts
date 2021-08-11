import {
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  @ContentChild(DropdownMenuDirective, { static: false })
  private _menu!: DropdownMenuDirective;
  @ContentChild(DropdownToggleDirective, { static: false })
  private _toggle!: DropdownToggleDirective;

  private isOpen$ = new BehaviorSubject(false);

  ngAfterViewInit() {
    this._menu.listen(this.isOpen$.asObservable());
    this._toggle.listen(this.isOpen$.asObservable());
  }

  toggle() {
    this.isOpen$.next(!this.isOpen$.value);
  }
}
