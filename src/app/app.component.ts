import { Component } from '@angular/core';
import data from '../assets/dataStruct.json'; // Import the JSON from local dir

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Project';
  badgeData: any = data; // Assign the JSON to the badgeData property
}
