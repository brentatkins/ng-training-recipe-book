import { AfterViewInit, ContentChild, Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';

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
