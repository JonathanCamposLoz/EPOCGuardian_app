import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chek-in',
  templateUrl: './chek-in.component.html',
  styleUrls: ['./chek-in.component.scss'],
})
export class ChekInComponent  implements OnInit {


  options: string[] = ['C.C', 'T.I', 'C.E'];
  selectedOption: string = '';

  constructor() { }

  ngOnInit() {}

  selectOption(event: any) {
    console.log('Selected option:', this.selectedOption);
  }


}
