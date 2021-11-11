import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted: boolean =false;
  suscribe: boolean = false;
  contactForm: FormGroup;
  static readonly EMAIL = /^.+\@\S+\.\S+$/;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required] ),
      comment: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.initContact();
  }

  initContact() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required] ),
      comment: new FormControl(null, [Validators.required])
    })
  }

  submitForm() {
    console.log(this.contactForm.value)
    this.submitted = true

    if (this.contactForm.invalid)
      return
    this.showConfirmationMessage()
    this.suscribe = true;
  }

  private showConfirmationMessage() {
    console.log("function")
  }

  returnForm() {
    this.contactForm.reset()
    this.suscribe = false;
    this.submitted = false;

  }

}
