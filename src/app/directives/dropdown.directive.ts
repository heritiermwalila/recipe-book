import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') target = false;

  @HostListener('click') toggle(){
    this.target = !this.target;
  }

}
