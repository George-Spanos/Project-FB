import {Card} from './card.model';
import {Injectable} from '@angular/core';
@Injectable()
export class CardService {
row: number;
col: number;
  constructor() {}
  moveLeft(card: Card , array: Card[]) {
      for (let i = 0; i < 16 ; i++) {
        if (card.text === array[i].text && card.value === array[i].value) {
        this.row = Math.floor(i / 4) + 1;
        array[i].revealPhase = false;
      }
    }let tempEl: Card;
    if ( this.row === 1 ) {
      tempEl = array[0];
      array[0] = array[1];
      array[1] = array[2];
      array[2] = array[3];
      array[3] = tempEl;
      array[3].revealed = true;
      array[3].revealPhase = false;

    }else if (this.row === 2) {
      tempEl = array[4];
      array[4] = array[5];
      array[5] = array[6];
      array[6] = array[7];
      array[7] = tempEl;
      array[7].revealed = true;
      array[7].revealPhase = false;
    }else if (this.row === 3) {
      tempEl = array[8];
      array[8] = array[9];
      array[9] = array[10];
      array[10] = array[11];
      array[11] = tempEl;
      array[11].revealed = true;
      array[11].revealPhase = false;
    }else {
      tempEl = array[12];
      array[12] = array[13];
      array[13] = array[14];
      array[14] = array[15];
      array[15] = tempEl;
      array[15].revealed = true;
      array[15].revealPhase = false;
    }
    array.forEach( (el) => {
      { el.MovePhase = false;
        el.hovered = false;
        el.revealPhase = true;
      }
      } );
    alert('you can reveal a card!');
  }
  moveRight(card: Card, array: Card[]) {
     for (let i = 0; i < 16 ; i++) {
      if (card.text === array[i].text && card.value === array[i].value) {
        this.row = Math.floor(i / 4) + 1;
        array[i].revealPhase = false;
      }
    }let tempEl: Card;
    if ( this.row === 1 ) {
      tempEl = array[3];
      array[3] = array[2];
      array[2] = array[1];
      array[1] = array[0];
      array[0] = tempEl;
      array[0].revealed = true;
      array[0].revealPhase = false;

    }else if (this.row === 2) {
       tempEl = array[7];
       array[7] = array[6];
       array[6] = array[5];
       array[5] = array[4];
       array[4] = tempEl;
       array[4].revealed = true;
       array[4].revealPhase = false;
    }else if (this.row === 3) {
       tempEl = array[11];
       array[11] = array[10];
       array[10] = array[9];
       array[9] = array[8];
       array[8] = tempEl;
       array[8].revealed = true;
       array[8].revealPhase = false;
    }else {
        tempEl = array[15];
        array[15] = array[14];
        array[14] = array[13];
        array[13] = array[12];
        array[12] = tempEl;
        array[12].revealed = true;
        array[12].revealPhase = false;
    }array.forEach( (el) => {
      { el.MovePhase = false;
        el.hovered = false;
        el.revealPhase = true; }
      } );
      setTimeout(alert('you can reveal a card!'), 2000);
  }
  moveUp(card: Card, array: Card[]) {
 for (let i = 0; i < 16 ; i++) {
      if (card.text === array[i].text && card.value === array[i].value) {
        this.col = i % 4 + 1;
        card.revealPhase = false;
      }
    }let tempEl: Card;
    if ( this.col === 1 ) {
      tempEl = array[0];
      array[0] = array[4];
      array[4] = array[8];
      array[8] = array[12];
      array[12] = tempEl;
      array[12].revealed = true;
      array[12].revealPhase = false;

    }else if (this.col === 2) {
       tempEl = array[1];
      array[1] = array[5];
      array[5] = array[9];
      array[9] = array[13];
      array[13] = tempEl;
      array[13].revealed = true;
      array[13].revealPhase = false;
    }else if (this.col === 3) {
        tempEl = array[2];
      array[2] = array[6];
      array[6] = array[10];
      array[10] = array[14];
      array[14] = tempEl;
      array[14].revealed = true;
      array[14].revealPhase = false;
    }else {
        tempEl = array[3];
      array[3] = array[7];
      array[7] = array[11];
      array[11] = array[15];
      array[15] = tempEl;
      array[15].revealed = true;
      array[15].revealPhase = false;
    }array.forEach( (el) => {
      { el.MovePhase = false;
        el.hovered = false;
        el.revealPhase = true; }
      } );
      setTimeout(alert('you can reveal a card!'), 2000);
  }
  moveDown (card: Card, array: Card[]) {
    for (let i = 0; i < 16 ; i++) {
      if (card.text === array[i].text && card.value === array[i].value) {
        this.col = i % 4 + 1;
        card.revealPhase = false;
      }
    }let tempEl: Card;
    if ( this.col === 1 ) {
      tempEl = array[12];
      array[12] = array[8];
      array[8] = array[4];
      array[4] = array[0];
      array[0] = tempEl;
      array[0].revealed = true;
      array[0].revealPhase = false;

    }else if (this.col === 2) {
       tempEl = array[13];
      array[13] = array[9];
      array[9] = array[5];
      array[5] = array[1];
      array[1] = tempEl;
      array[1].revealed = true;
      array[1].revealPhase = false;
    }else if (this.col === 3) {
        tempEl = array[14];
      array[14] = array[10];
      array[10] = array[6];
      array[6] = array[2];
      array[2] = tempEl;
      array[2].revealed = true;
      array[2].revealPhase = false;
    }else {
       tempEl = array[15];
      array[15] = array[11];
      array[11] = array[7];
      array[7] = array[3];
      array[3] = tempEl;
      array[3].revealed = true;
      array[3].revealPhase = false;
    }array.forEach( (el) => {
        { el.MovePhase = false;
          el.hovered = false;
          el.revealPhase = true; }
        } );
      setTimeout(alert('you can reveal a card!'), 2000);
  }
}
