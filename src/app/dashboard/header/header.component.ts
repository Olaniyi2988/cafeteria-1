import { Component, OnInit } from '@angular/core';
import { faBell,faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = "Moyo"
  
  constructor() { }

  faBell = faBell;
  faBars = faBars

  ngOnInit(): void {
  }

}
