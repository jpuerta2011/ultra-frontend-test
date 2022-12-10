import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/common/form-validation';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent extends FormValidation implements OnInit {

  showSuccessPurchase = false;

  constructor() {
    super();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showSuccessPurchase = true;
  }

}
