import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'projects/ngx-loading-buttons-playground/src/app/app.component';
import { MatBasicSpinnerDirective } from './mat-basic-spinner.directive';

describe('MatBasicSpinnerDirective', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AppComponent, MatBasicSpinnerDirective]
    })
    .createComponent(AppComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const directive = new MatBasicSpinnerDirective();
    expect(directive).toBeTruthy();
  });

  it('should show spinner and text when loading is true', () => {
    fixture.componentInstance.saving = true;
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#spinnerWithText");
    expect(element.className).toEqual("mat-spinner");
  });

  it('should show spinner and hide text when loading is true', () => {
    fixture.componentInstance.saving = true;
    fixture.detectChanges();

    var element: HTMLElement = fixture.nativeElement.querySelector("#spinnerWithoutText");
    expect(element.className).toContain("mat-spinner");
    expect(element.className).toContain("hide-btn-text");
  });

});
