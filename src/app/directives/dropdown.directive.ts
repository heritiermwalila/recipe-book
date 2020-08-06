import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {


  @HostBinding('class.open') el = false;

  @HostListener('click') toggle(){
    this.el = !this.el;
  }

  constructor() { }

}
