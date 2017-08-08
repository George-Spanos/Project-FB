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
  Reveal() {
    this.var.revealed = !this.var.revealed;
    setTimeout(() => {this.var.revealed = !this.var.revealed; }, 4000);
  }
  constructor(public cardService:  CardService) {
  }
  ngOnInit() { }
}
