import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';

  import {Card} from './card.model';
 import {CardService} from './card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //  providers: [Card, CardService]
})
export class CardComponent implements OnInit {
  @Input() var: Card; // Each respective card object
  @Input() gameArray: Card[]; // Game array is binded to main array (one way bind!!)
  @Output() passWin = new EventEmitter<Array<any>>();
  hovered: boolean; // The variable that is used when the var.Movephase is true and the user hovers over a card
  constructor(public cardService:  CardService) {
  }
  ngOnInit() { }
  Reveal() { // Reveal function. Checks if the card is on the reveal phase
    // and this card in not revealed by the move Phase
    if (this.var.revealPhase && !this.var.revealed) {
    this.var.revealed = !this.var.revealed;
    // This loop makes sure that no other card can be revealed when a card is clicked
    for ( let i = 1; i < 16; i++) {
      this.gameArray[i].revealPhase = false;
    }
    setTimeout(() => {
      this.var.revealed = !this.var.revealed;
    // for (let i = 0; i < 16; i++) {
    //   this.gameArray[i].MovePhase = !this.gameArray[i].MovePhase;
    // }
    this.gameArray.forEach(( el: Card) => { el.MovePhase = !el.MovePhase; } );
    alert('you can move a card!'); }
    , 4000);
    // after the click is finished, each card gets its Move Phase(boolean) reversed.
    }
  }
  WinArray() {
    if (this.var.winPhase === true) {
      // this.gameArray.forEach( (el: Card) => { el.hovered = true; } );
    const popup = prompt('Do you want to win via row or column?', 'Type "row" for row and "column" for column');
    this.passWin.emit([this.gameArray.indexOf(this.var), popup]);
    this.gameArray.forEach((el: Card) => {el.winPhase = false;
    el.revealPhase = false;
    el.MovePhase = false;
    } );
    }
  }
  ShowArrows() { // these are the hover functions. They depend upon the local variable of hovered.
    if (this.var.MovePhase) {
      this.var.hovered = true;
    }
  }
  HideArrows() {
    if (this.var.MovePhase) {
      this.var.hovered = false;
    }
  }
}
