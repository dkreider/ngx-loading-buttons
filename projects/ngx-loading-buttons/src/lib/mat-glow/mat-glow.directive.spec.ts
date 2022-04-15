import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'projects/ngx-loading-buttons-playground/src/app/app.component';
import { MatGlowDirective } from './mat-glow.directive';

describe('MatGlowDirective', () => {
  
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, MatGlowDirective]
    })
    .createComponent(AppComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const directive = new MatGlowDirective();
    expect(directive).toBeTruthy();
  });

  it('should show glow and text when loading is true', () => {
    fixture.componentInstance.saving = true;
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#glowWithText");
    expect(element.className).toEqual("mat-glow");
  });

  it('should show glow and hide text when loading is true', () => {
    fixture.componentInstance.saving = true;
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#glowWithoutText");
    expect(element.className).toContain("mat-glow");
    expect(element.className).toContain("hide-btn-text");
  });
});
