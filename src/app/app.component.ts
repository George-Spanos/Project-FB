import { Component, OnInit } from '@angular/core';

import {Card} from './card/card.model';
import {GameFunctions} from './game-functions.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GameFunctions, Card]
})
export class AppComponent implements OnInit {
mainArray: Card[];
  constructor( public gameFuntions: GameFunctions) { }
    ngOnInit() {
      this.mainArray = this.gameFuntions.InitializeArray();
      console.log(this.mainArray);
    }
  }
