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
    array.forEach( (el: Card) => {
      el.winPhase = true;
      // el.hovered = true;
      el.MovePhase = false;
      el.revealPhase = false;
    } );
  }
  checkWinCondition(data) {
    console.log(data);
    const index = data[0];
    const rowcol = data[1];
    const row = Math.floor(index / 4) + 1;
      // code for row win
    const col = index % 4 + 1;
    if (rowcol === 'row') {
      this.gameArray[row * 4 - 1].revealed = true;
      this.gameArray[row * 4 - 2].revealed = true;
      this.gameArray[row * 4 - 3].revealed = true;
      this.gameArray[row * 4 - 4].revealed = true;
      const sum = this.gameArray[row * 4 - 1].value + this.gameArray[row * 4 - 2].value
      + this.gameArray[row * 4 - 3].value + this.gameArray[row * 4 - 4].value;
      if (this.winCondition === 'Same Numbers' &&
        this.gameArray[row * 4 - 1].value === this.gameArray[row * 4 - 2].value &&
      this.gameArray[row * 4 - 3].value === this.gameArray[row * 4 - 4].value &&
      this.gameArray[row * 4 - 4].value === this.gameArray[row * 4 - 1].value) {
        alert ('You won by finding all the ' + this.gameArray[row * 4 - 1].value + 'on the ' + row + 'row');
      }
      if (this.winCondition === 'Same Color' &&
        this.gameArray[row * 4 - 1].text === this.gameArray[row * 4 - 2].text &&
      this.gameArray[row * 4 - 3].text === this.gameArray[row * 4 - 4].text &&
      this.gameArray[row * 4 - 4].text === this.gameArray[row * 4 - 1].text) {
        alert ('You won by finding all the ' + this.gameArray[row * 4 - 1].text + ' on the ' + row + ' row');
      }
      if (this.winCondition === 'Everything else' && sum === 10 &&
        this.gameArray[row * 4 - 1].text !== this.gameArray[row * 4 - 2].text &&
        this.gameArray[row * 4 - 1].text !== this.gameArray[col + 3].text &&
        this.gameArray[row * 4 - 1].text !== this.gameArray[col + 4].text &&
        this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 3].text &&
        this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 4].text &&
        this.gameArray[row * 4 - 3].text !== this.gameArray[row * 4 - 4].text) {
        alert( ' You won by finding one of each');
      }
    }
    if (rowcol === 'col') {
      this.gameArray[col - 1].revealed = true;
      this.gameArray[col + 3].revealed = true;
      this.gameArray[col + 7].revealed = true;
      this.gameArray[col + 11].revealed = true;
      const sum = this.gameArray[col - 1].value + this.gameArray[col + 3].value
      + this.gameArray[col + 7].value + this.gameArray[col + 11].value;
      if (this.winCondition === 'Same Numbers' &&
        this.gameArray[col - 1].value === this.gameArray[col + 3].value &&
      this.gameArray[col + 7].value === this.gameArray[col + 11].value &&
      this.gameArray[col + 11].value === this.gameArray[col - 1].value) {
        alert ('You won by finding all the ' + this.gameArray[col - 1].value + ' on the ' + col + ' column');
      }
      if (this.winCondition === 'Same Color' &&
        this.gameArray[col - 1].text === this.gameArray[col + 3].text &&
      this.gameArray[col + 7].text === this.gameArray[col + 11].text &&
      this.gameArray[col + 11].text === this.gameArray[col - 1].text) {
        alert ('You won by finding all the ' + this.gameArray[col - 1].text + ' on the ' + col + ' column');
      }
      if (this.winCondition === 'Everything else' && sum === 10 &&
        this.gameArray[col - 1].text !== this.gameArray[col + 3].text &&
      this.gameArray[col + 1].text !== this.gameArray[col + 7].text &&
      this.gameArray[col + 1].text !== this.gameArray[col + 11].text &&
      this.gameArray[col + 3].text !== this.gameArray[col + 7].text &&
      this.gameArray[col + 3].text !== this.gameArray[col + 11].text &&
      this.gameArray[col + 7].text !== this.gameArray[col + 11].text) {
        alert( ' You won by finding one of each'); // misses stuff. Check the text(color) difference
      }
    }
  }
}
