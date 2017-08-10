import {Card} from './card/card.model';
import {Injectable} from '@angular/core';
@Injectable()
export class GameFunctions {
  gameArray: Card[];
  InitializeArray() {
    this.gameArray = [];
    for (let i = 0; i < 16; i++) {
      let letter = '';
      let no: number;
      if ( i < 4 ) { no = i + 1; }else {no = (i + 1) % 4; }
      if ((i + 1 ) % 4 === 0) { no = 4; }
      if (i < 4) {
        letter = 'S';
      }else if ( i < 8) {
        letter = 'C';
      }else if ( i < 12) {
        letter = 'H';
      }else {
        letter = 'D';
      }
      const card = new Card(true, no, false, letter);
      this.gameArray.push(card);
    }
    return this.gameArray;
  }
  shuffleArray(a: Card[]) {
    for (let i = a.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }

  }
}
