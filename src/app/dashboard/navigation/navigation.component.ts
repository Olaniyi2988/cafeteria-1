import { Component, OnInit } from '@angular/core';
import { faWallet,faCog,faThLarge } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faWallet = faWallet;
  faThLarge = faThLarge
  faCog = faCog
  constructor() { }

  ngOnInit(): void {
  }

}
