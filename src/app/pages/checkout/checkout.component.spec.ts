import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutComponent, ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form with 4 controls', () => {
    expect(component.checkoutForm.contains('name')).toBeTruthy();
    expect(component.checkoutForm.contains('email')).toBeTruthy();
    expect(component.checkoutForm.contains('phone')).toBeTruthy();
    expect(component.checkoutForm.contains('address')).toBeTruthy();
  });

  it('should make the name control required', () => {
    const control = component.checkoutForm.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the email control required and validate email format', () => {
    const control = component.checkoutForm.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('teste');
    expect(control?.valid).toBeFalsy();

    control?.setValue('teste@teste.com');
    expect(control?.valid).toBeTruthy();
  });

  it('should make the phone control required', () => {
    const control = component.checkoutForm.get('phone');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the address control required', () => {
    const control = component.checkoutForm.get('address');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should disable the submit button if the form is invalid', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable the submit button if the form is valid', () => {
    component.checkoutForm.get('name')?.setValue('Fulano da Silva');
    component.checkoutForm.get('email')?.setValue('fulano@teste.com');
    component.checkoutForm.get('phone')?.setValue('5555 - 1234');
    component.checkoutForm.get('address')?.setValue('Av. Brasil 123');
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeFalsy();
  });
});
