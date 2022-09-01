import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      creditCard: ['', [CreditCardValidators.validateCCNumber]],
      expirationDate: ['', [CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });
  }

  onSubmit(form) {
    this.submitted = true;
    console.log(form);
  }
}