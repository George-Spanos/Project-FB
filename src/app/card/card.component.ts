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
  @Input() var: Card;
  @Input() gameArray: Card[];
  hovered: boolean;
  Reveal() {
    if (this.var.revealPhase) {
    this.var.revealed = !this.var.revealed;
    setTimeout(() => {
      this.var.revealed = !this.var.revealed;
    for (let i = 0; i < 16; i++) {
      this.gameArray[i].MovePhase = !this.gameArray[i].MovePhase;
    }
    alert('you can move a card!'); }
    , 4000);
    }
  }
  constructor(public cardService:  CardService) {
  }
  ngOnInit() { }
  ShowArrows() {
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
