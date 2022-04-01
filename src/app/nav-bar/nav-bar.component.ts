import { Component, OnInit } from '@angular/core';
import { ItemWithPath } from '../model/nav-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  navItems: ItemWithPath[] = [{text: 'Accueil', path: 'home'}, {text: 'Foo Bar Quix', path: 'foo-bar-quix'}];

  constructor() { }

  ngOnInit(): void {
  }

}
