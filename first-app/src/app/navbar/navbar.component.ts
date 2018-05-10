import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sendData = new EventEmitter();

  onClickListItem(){
    this.sendData.emit("Some Course is Selected");
  }

  constructor() { }

  ngOnInit() {
  }

}
