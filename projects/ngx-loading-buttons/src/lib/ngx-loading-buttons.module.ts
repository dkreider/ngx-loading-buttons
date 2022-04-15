import { NgModule } from '@angular/core';
import { MatBasicSpinnerDirective } from './mat-basic-spinner.directive';
import { MatGlowDirective } from './mat-glow/mat-glow.directive';

@NgModule({
  declarations: [
    MatBasicSpinnerDirective,
    MatGlowDirective
  ],
  exports: [
    MatBasicSpinnerDirective,
    MatGlowDirective
  ]
})
export class NgxLoadingButtonsModule { }
