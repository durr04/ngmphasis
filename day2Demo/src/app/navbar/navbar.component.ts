import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() selectCourse = new EventEmitter();


  @Input() courses:string[];

  ngOnInit() {
  }

    onSelectCourse(){
      this.selectCourse.emit("Course Name")
    }

}
