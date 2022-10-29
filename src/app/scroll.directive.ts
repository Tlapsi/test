import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.menu-fixed') newNav:boolean = false;

  @HostListener('window:scroll') onScroll(){
    console.log(window.screenY);    
    (window.scrollY <= 15) ? (this.newNav = false) : (this.newNav = true);
  }

}
