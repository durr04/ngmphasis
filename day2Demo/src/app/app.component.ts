import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedCourse:string;

  myCourses:string[] = ['Angular4','Node','MongoDB','Typescript']

  title = 'app';

  onCourseSelected($event){
    this.selectedCourse = $event;
  }
}
