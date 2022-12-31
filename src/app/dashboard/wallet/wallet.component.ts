import { Component, OnInit } from '@angular/core';
import { faSignOutAlt,faCog,faThLarge } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faThLarge = faThLarge
  faCog = faCog

  constructor() { }

  ngOnInit(): void {
  }

}
