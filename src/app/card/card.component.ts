import { Component, OnInit, Inject, Input } from '@angular/core';

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
  hovered: boolean; // The variable that is used when the var.Movephase is true and the user hovers over a card
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
    for (let i = 0; i < 16; i++) {
      this.gameArray[i].MovePhase = !this.gameArray[i].MovePhase;
    }
    alert('you can move a card!'); }
    , 4000);
    // after the click is finished, each card gets its Move Phase(boolean) reversed.
    }
  }
  constructor(public cardService:  CardService) {
  }
  ngOnInit() { }
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
