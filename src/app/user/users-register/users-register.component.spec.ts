import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { UsersRegisterComponent } from './users-register.component';

describe('UsersRegisterComponent', () => {
  let component: UsersRegisterComponent;
  let fixture: ComponentFixture<UsersRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRegisterComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should have text Contact-form', async () => {
  //   expect(component.text).toEqual("Contact-form");
  // });

  // it('should set submitted to true', async () => {
  //   component.onSubmit();
  //   expect(component.isSubmitted).toBeTruthy();
  // });

  // it('should call the onSubmit method', async () => {
  //   spyOn(component, 'onSubmit');
  //   const el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(0);
  // });

  // it('form should be invalid', async () => {
  //   component.registerForm.controls['name'].setValue("");
  //   component.registerForm.controls['email'].setValue("");
  //   component.registerForm.controls['password'].setValue("");
  //   expect(component.registerForm.valid).toBeFalsy();
  // });

  // it('form should be valid', async () => {
  //   component.registerForm.controls['name'].setValue("abcd");
  //   component.registerForm.controls['email'].setValue("abcd@gmail.com");
  //   component.registerForm.controls['password'].setValue("abcd");
  //   expect(component.registerForm.valid).toBeTruthy();
  // });
});
