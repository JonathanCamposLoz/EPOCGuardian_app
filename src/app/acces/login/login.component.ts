import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  options: string[] = ['C.C', 'T.I', 'C.E'];
  selectedOption: string = '';

  constructor() { }

  ngOnInit() {}

  selectOption(event: any) {
    console.log('Selected option:', this.selectedOption);
  }

}
