import {Injectable} from '@angular/core';
@Injectable()
export class Card {
  public revealPhase: boolean;
  public MovePhase: boolean;
  public hovered: boolean;
  public value: number;
  public revealed: boolean;
  public text: string;
  constructor(movephase: boolean , hovered: boolean, revealphase: boolean, value: number, revealed: boolean, text: string) {
    this.MovePhase = movephase;
    this.revealPhase = revealphase;
    this.hovered = hovered;
    this.value = value;
    this.revealed = revealed;
    this.text = text;
  }
}
