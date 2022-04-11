import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mtBasicSpinner]'
})
export class MatBasicSpinnerDirective {

  @Input() mtBasicSpinner = false;
  @Input() hideText = false;

  @Input("class")  
  @HostBinding('class')
  get elementClass(): string {
    if (this.mtBasicSpinner && this.hideText) {
      return 'mat-spinner hide-btn-text';
    } else if (this.mtBasicSpinner) {
      return 'mat-spinner';
    }
    return '';
  }

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtBasicSpinner;
  }

}
