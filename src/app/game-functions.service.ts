import {Card} from './card/card.model';
import {Injectable} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
@Injectable()
export class GameFunctions {
  gameArray: Card[];
  winCondition: string; // this is where the win condition is stored
  InitializeArray() { /* Inittialization of the array. Returns the array, while having no input. */
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
      const card = new Card(false, false, true, false, no, false, letter);
      this.gameArray.push(card);
    }
    return this.gameArray;
  }
  shuffleArray(a: Card[]) { /* Shuffles the array with the Fisher Yates algorithm */
    for (let i = a.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }

  }
  DeclareWin(data: any, array: Card[]) {
    this.winCondition = data.target.innerHTML;
    array.forEach( (el: Card) => { el.winPhase = true; } );
  }
  checkWinCondition(array: Card[], wincon: string) {
    console.log(array, wincon);
  }
}
