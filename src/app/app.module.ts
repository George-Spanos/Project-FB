import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {GameFunctions} from './game/game-functions.service';
import {CardService} from './card/card.service';
import {Card} from './card/card.model';
import {DropdownDirective} from './shared/dropdown.directive';
import {HeaderComponent} from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GameComponent } from './game/game.component';
import { ErrorComponent } from './error/error.component';
const routes = [
  {path: '', component: GameComponent },
  {path: 'Intro', component: IntroComponent},
  {path: '**', component: ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DropdownDirective,
    HeaderComponent,
    IntroComponent,
    GameComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GameFunctions, CardService, Card],
  bootstrap: [AppComponent]
})
export class AppModule { }
