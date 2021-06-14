import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  vm = this;

  options = [
    { text: 'Ukraine' ,children: [{ text: 'Kyiv' },{text: 'Vinnytsia'},{text: 'Lemberg'}] },
    { text: 'Belarus', children: [{ text: 'Minsk' },{ text: 'Brest' }, { text: 'Gomel' }] },
  ];
}
