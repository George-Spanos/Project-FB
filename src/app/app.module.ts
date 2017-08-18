import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {GameFunctions} from './game-functions.service';
import {CardService} from './card/card.service';
import {Card} from './card/card.model';
import {DropdownDirective} from './shared/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [GameFunctions, CardService, Card],
  bootstrap: [AppComponent]
})
export class AppModule { }
