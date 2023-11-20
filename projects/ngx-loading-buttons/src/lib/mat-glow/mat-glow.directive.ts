import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[mtGlow]',
  standalone: true,
})
export class MatGlowDirective {

  @Input() glowColor: string = "blue";
  @Input() mtGlow = false;
  @Input() hideText = false;

  @Input("class")
  @HostBinding('class')
  get elementClass(): string {
    document.documentElement.style.setProperty('--glow-color', this.glowColor);
    if (this.mtGlow && this.hideText) {
      return 'mat-glow hide-btn-text';
    } else if (this.mtGlow) {
      return 'mat-glow';
    }
    return '';
  }

  @HostBinding('disabled')
  get disabled(): boolean {
    return this.mtGlow;
  }
}
