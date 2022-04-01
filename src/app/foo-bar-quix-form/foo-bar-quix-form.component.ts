import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {
  @Output()
  submitNumberOutput = new EventEmitter<number>();

  inputNumberForm: FormGroup;

  public inputNumber: number;
  numberRegEx = /^[0-9]*$/;

  constructor() {
    this.inputNumberForm = new FormGroup({
      inputNumber: new FormControl('', {
        validators: [Validators.required, Validators.pattern(this.numberRegEx)],
        updateOn: 'blur'
      })
    });
  }

  ngOnInit(): void {
  }

  submitNumber(): void {
    console.log('Convert button is clicked, the inputnumber is : ' + this.inputNumber);
    this.submitNumberOutput.emit(this.inputNumber);
  }

}
