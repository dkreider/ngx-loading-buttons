import { NgModule } from '@angular/core';
import { MatBasicSpinnerDirective } from './mat-basic-spinner.directive';
import { MatGlowDirective } from './mat-glow/mat-glow.directive';

@NgModule({
  imports: [
    MatGlowDirective,
    MatBasicSpinnerDirective
  ],
  exports: [
    MatBasicSpinnerDirective,
    MatGlowDirective
  ]
})
export class NgxLoadingButtonsModule { }
