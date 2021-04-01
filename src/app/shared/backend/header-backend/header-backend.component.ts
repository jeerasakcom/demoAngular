import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header-backend',
  templateUrl: './header-backend.component.html',
  styleUrls: ['./header-backend.component.css']
})
export class HeaderBackendComponent implements OnInit {

  @Output() navTaggle = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  ngClickNavTaggle() {

    this.navTaggle.emit();
  }

}
