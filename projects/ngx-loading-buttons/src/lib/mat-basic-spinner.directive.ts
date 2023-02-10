import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mtBasicSpinner]'
})
export class MatBasicSpinnerDirective {
  @Input() hideText = false
  @Input() set mtBasicSpinner(loading: boolean) {
    this.loading = loading
    if (this.hideText) this.textHidden = loading
  }

  @HostBinding('class.mat-spinner')
  loading = false

  @HostBinding('class.hide-btn-text')
  textHidden = false
}
