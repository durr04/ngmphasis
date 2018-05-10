import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    selectedCourse:string;

    courseName:string = "Angular 4"

    onCourseSelected($event){
      console.log($event)
      this.selectedCourse = $event;
    }

  }
