import {Injectable} from '@angular/core';
// Each card has these properties.
// Reveal Phase is true when the player can reveal a card
// Move Phase is true when the player can move a card.
// hovered is true when a player is above a card
// value is the number of the card
// revealed is true when a card is revealed (either perma or temp)
// text is the color of the card (examples: S = Spade, H = Heart etc.)
@Injectable()
export class Card {
  public revealPhase: boolean;
  public MovePhase: boolean;
  public hovered: boolean;
  public winPhase: boolean;
  public value: number;
  public revealed: boolean;
  public text: string;
  constructor(movephase: boolean , hovered: boolean, revealphase: boolean,
     winPhase: boolean, value: number, revealed: boolean, text: string) {
    this.MovePhase = movephase;
    this.revealPhase = revealphase;
    this.winPhase = winPhase;
    this.hovered = hovered;
    this.value = value;
    this.revealed = revealed;
    this.text = text;
  }
}
