import { Component, OnInit } from '@angular/core';
import { TestCase } from '../model/test-case';

@Component({
  selector: 'app-back-end-instruction',
  templateUrl: './back-end-instruction.component.html'
})
export class BackEndInstructionComponent implements OnInit {

  testCases: TestCase[] = [
    { input: 1, output: '1' },
    { input: 3, output: 'FooFoo' },
    { input: 5, output: 'BarBar' },
    { input: 7, output: 'Quix' },
    { input: 9, output: 'Foo' },
    { input: 51, output: 'FooBar' },
    { input: 53, output: 'BarFoo' },
    { input: 33, output: 'FooFooFoo' },
    { input: 27, output: 'FooQuix' },
    { input: 15, output: 'FooBarBar' }];

  constructor() { }

  ngOnInit(): void {
  }

}
