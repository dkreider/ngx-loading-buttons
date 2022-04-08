import { NgModule } from '@angular/core';
import { SpinnerDirective } from './spinner.directive';

@NgModule({
  declarations: [
    SpinnerDirective
  ],
  exports: [
    SpinnerDirective
  ]
})
export class NgxLoadingButtonsModule { }
