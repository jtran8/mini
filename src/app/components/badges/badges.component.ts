import { Component, OnInit } from '@angular/core';
import data from '../../../assets/dataStruct.json';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  badgeData: any;

  constructor() {
    this.badgeData = data;
  }

  ngOnInit(): void {
  }

}
