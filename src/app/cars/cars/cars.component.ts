import { Component, OnInit } from '@angular/core';
import { Cars } from '../model/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars: Cars[] = [
    {
      '_id': '5f4d7b7a7c7c2f0f4c0a0b0f',
      'manufacturer': 'BMW',
      'model': 'X5',
      'version': 'E36',
    },
  ];
  displayedColumns = ['manufacturer', 'model', 'version'];

  constructor() {
    //
  }

  ngOnInit(): void {}
}
