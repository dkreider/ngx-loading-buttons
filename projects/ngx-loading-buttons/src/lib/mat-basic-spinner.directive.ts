import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mtBasicSpinner]'
})
export class MatBasicSpinnerDirective {

  @Input() mtBasicSpinner = false;

  @Input("class")  
  @HostBinding('class')
  get elementClass(): string {
    if (this.mtBasicSpinner) {
      return 'spinner';
    } 
    return '';
  }

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtBasicSpinner;
  }

}
