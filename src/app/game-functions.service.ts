import {Card} from './card/card.model';
import {Injectable} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
@Injectable()
export class GameFunctions {
  gameArray: Card[];
  winCondition: string; // this is where the win condition is stored
  isDisabled = false;
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
    const sum = array[0].value + array[1].value + array[2].value + array[3].value;
    if (wincon === 'Same Numbers' && array[0].value === array[1].value && array[2].value === array[3].value
      && array[0].value === array[3].value) {
        alert ('You won by finding all the ' + array[0].value);
    }else if (wincon === 'Same Color' && array[0].text === array[1].text && array[2].text === array[3].text
      && array[0].text === array[3].text) {
        alert ('You won by finding all the ' + array[0].text);
    }else if (wincon === 'Everything else' && sum === 10 ) {
        alert( ' You won by finding one of each color!');
        }else {
          alert ( 'You did not find what was expected of you. #SorrynotSorry. You lost!');
    }
    this.isDisabled = true;
  }
}
