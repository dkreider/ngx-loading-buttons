import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mtBasicSpinner]',
  standalone: true,
})
export class MatBasicSpinnerDirective {
  @Input() hideText = false
  @Input() set mtBasicSpinner(loading: boolean) {
    this.loading = loading
    if (this.hideText) this.textHidden = loading

    this.elem.nativeElement.disabled = loading;
  }

  @HostBinding('class.mat-spinner')
  loading = false

  @HostBinding('class.hide-btn-text')
  textHidden = false

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtBasicSpinner;
  }

  constructor(private readonly elem: ElementRef<HTMLButtonElement>) {
  }
}
