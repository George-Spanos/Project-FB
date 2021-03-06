webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board {\n    display:block;\n    position:relative;\n    background-color:lightgrey;\n    width: 570px;\n    height:650px;\n    box-sizing: border-box;\n    margin:auto;\n     min-width:422px;\n     border-radius: 10px;\n}\n    @media only screen and (max-width: 1024px) {\n    /* For mobile phones: */\n    .board {\n        width:60%;\n        height: 340px;\n        overflow: inherit;\n        background-color:lightgrey;\n        max-width: 422px;\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_functions_service__ = __webpack_require__("../../../../../src/app/game-functions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(gameFunctions) {
        this.gameFunctions = gameFunctions;
        this.mainArray = this.gameFunctions.gameArray; // the main game array that is binded to GameArray (one way bind)
    }
    AppComponent.prototype.ResetGame = function () {
        this.mainArray = this.gameFunctions.InitializeArray();
        alert('double click to reveal a card!');
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__game_functions_service__["a" /* GameFunctions */], __WEBPACK_IMPORTED_MODULE_1__card_card_model__["a" /* Card */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__game_functions_service__["a" /* GameFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__game_functions_service__["a" /* GameFunctions */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game_functions_service__ = __webpack_require__("../../../../../src/app/game/game-functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card_service__ = __webpack_require__("../../../../../src/app/card/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__intro_intro_component__ = __webpack_require__("../../../../../src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */] },
    { path: 'Intro', component: __WEBPACK_IMPORTED_MODULE_11__intro_intro_component__["a" /* IntroComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13__error_error_component__["a" /* ErrorComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__card_card_component__["a" /* CardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__intro_intro_component__["a" /* IntroComponent */],
            __WEBPACK_IMPORTED_MODULE_12__game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_13__error_error_component__["a" /* ErrorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__game_game_functions_service__["a" /* GameFunctions */], __WEBPACK_IMPORTED_MODULE_7__card_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_8__card_card_model__["a" /* Card */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  display:block;\n  /* position: absolute; */\n  background-image: linear-gradient(brown, grey);\n  height: 150px;\n  width:110px;\n  margin: 6px 16px;\n  float:left;\n  border-radius: 8px;\n}\n.glyphicon {\n  font-size: medium;\n  color: white;\n  max-height: 8px;\n  /* line-height:0; */\n}\n@media only screen and (max-width: 1024px) {\n    /* For mobile phones: */\n        .card{\n      position:auto;\n      height:69px;\n      width: 51px 100%;\n      margin: 8px 27px;\n\n    }\n    .revealed{\n      font-size: 28px !important;\n    }\n}\n.revealed {\n  /* margin-top:30%; */\n  font-size: 35px;\n  font-weight: Bold;\n  text-align:center;\n  color:white;\n   max-height: 150px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"card\"(dblclick)=\"Reveal()\" (mouseenter)=\"ShowArrows()\"\n   (mouseleave)=\"HideArrows()\" (click)=\"WinArray()\"> <!-- Show/Revealed arrows are the functions that are executed on hover -->\n <div class=\"revealed\"  *ngIf=\"this.var.revealed\"> <!-- revealed is a class that is displayed when each card is revealed -->\n  <ng-content></ng-content> <!-- this is where the text is displayed via card.text and card.value -->\n  </div>\n <div style=\"width:100%; height:100%; display:flex;\n justify-content:space-evenly;\"\n  *ngIf=\"this.var.hovered\" > <!-- these are the move arrows. Hovered is the value that is true when the move Phase is true -->\n    <div class=\"glyphicon glyphicon-arrow-up\"\n    (click)=\"this.cardService.moveUp(this.var,this.gameArray)\" >\n    </div>\n    <div class=\"glyphicon glyphicon-arrow-left\"\n    (click)=\"this.cardService.moveLeft(this.var,this.gameArray)\" >\n    </div>\n     <div class=\"glyphicon glyphicon-arrow-right\"\n     (click)=\"this.cardService.moveRight(this.var,this.gameArray)\" >\n    </div>\n    <div class=\"glyphicon glyphicon-arrow-down\"\n    (click)=\"this.cardService.moveDown(this.var,this.gameArray)\" >\n\n    </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_service__ = __webpack_require__("../../../../../src/app/card/card.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = (function () {
    function CardComponent(cardService) {
        this.cardService = cardService;
        this.passWin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.Reveal = function () {
        var _this = this;
        // and this card in not revealed by the move Phase
        if (this.var.revealPhase && !this.var.revealed) {
            this.var.revealed = !this.var.revealed;
            // This loop makes sure that no other card can be revealed when a card is clicked
            for (var i = 1; i < 16; i++) {
                this.gameArray[i].revealPhase = false;
            }
            setTimeout(function () {
                _this.var.revealed = !_this.var.revealed;
                // for (let i = 0; i < 16; i++) {
                //   this.gameArray[i].MovePhase = !this.gameArray[i].MovePhase;
                // }
                _this.gameArray.forEach(function (el) { el.MovePhase = !el.MovePhase; });
                alert('you can move a card!');
            }, 4000);
            // after the click is finished, each card gets its Move Phase(boolean) reversed.
        }
    };
    CardComponent.prototype.WinArray = function () {
        if (this.var.winPhase === true) {
            // this.gameArray.forEach( (el: Card) => { el.hovered = true; } );
            var popup = prompt('Do you want to win via row or column?', 'Type "row" for row and "column" for column');
            this.passWin.emit([this.gameArray.indexOf(this.var), popup]);
            this.gameArray.forEach(function (el) {
                el.winPhase = false;
                el.revealPhase = false;
                el.MovePhase = false;
            });
        }
    };
    CardComponent.prototype.ShowArrows = function () {
        if (this.var.MovePhase) {
            this.var.hovered = true;
        }
    };
    CardComponent.prototype.HideArrows = function () {
        if (this.var.MovePhase) {
            this.var.hovered = false;
        }
    };
    return CardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__card_model__["a" /* Card */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__card_model__["a" /* Card */]) === "function" && _a || Object)
], CardComponent.prototype, "var", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], CardComponent.prototype, "gameArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], CardComponent.prototype, "passWin", void 0);
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-card',
        template: __webpack_require__("../../../../../src/app/card/card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/card/card.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__card_service__["a" /* CardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__card_service__["a" /* CardService */]) === "function" && _b || Object])
], CardComponent);

var _a, _b;
//# sourceMappingURL=card.component.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Each card has these properties.
// Reveal Phase is true when the player can reveal a card
// Move Phase is true when the player can move a card.
// hovered is true when a player is above a card
// value is the number of the card
// revealed is true when a card is revealed (either perma or temp)
// text is the color of the card (examples: S = Spade, H = Heart etc.)
var Card = (function () {
    function Card(movephase, hovered, revealphase, winPhase, value, revealed, text) {
        this.MovePhase = movephase;
        this.revealPhase = revealphase;
        this.winPhase = winPhase;
        this.hovered = hovered;
        this.value = value;
        this.revealed = revealed;
        this.text = text;
    }
    return Card;
}());
Card = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [Boolean, Boolean, Boolean, Boolean, Number, Boolean, String])
], Card);

//# sourceMappingURL=card.model.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardService = (function () {
    function CardService() {
        this.wincard = []; // the winning card
    }
    // the following functions are the move functions.
    CardService.prototype.moveLeft = function (card, array) {
        if (card.MovePhase === true) {
            for (var i = 0; i < 16; i++) {
                if (card.text === array[i].text && card.value === array[i].value) {
                    this.row = Math.floor(i / 4) + 1;
                    // array[i].revealPhase = false;
                    // Ending the reveal phase (not needed prolly)
                }
                // when you find the row, you swap the elements without using the iterator.
                // you reveal the card that gets pulled out (remember revealed is the same for temp reveal and perma reveal)
                // set the reveal Phase of the perma revealed card to false.
            }
            var tempEl = void 0;
            if (this.row === 1) {
                tempEl = array[0];
                array[0] = array[1];
                array[1] = array[2];
                array[2] = array[3];
                array[3] = tempEl;
                array[3].revealed = true;
                array[3].revealPhase = false;
            }
            else if (this.row === 2) {
                tempEl = array[4];
                array[4] = array[5];
                array[5] = array[6];
                array[6] = array[7];
                array[7] = tempEl;
                array[7].revealed = true;
                array[7].revealPhase = false;
            }
            else if (this.row === 3) {
                tempEl = array[8];
                array[8] = array[9];
                array[9] = array[10];
                array[10] = array[11];
                array[11] = tempEl;
                array[11].revealed = true;
                array[11].revealPhase = false;
            }
            else {
                tempEl = array[12];
                array[12] = array[13];
                array[13] = array[14];
                array[14] = array[15];
                array[15] = tempEl;
                array[15].revealed = true;
                array[15].revealPhase = false;
            }
            array.forEach(function (el) {
                {
                    el.MovePhase = false;
                    el.hovered = false;
                    el.revealPhase = true;
                }
            });
            alert('you can reveal a card!');
        }
    };
    CardService.prototype.moveRight = function (card, array) {
        if (card.MovePhase === true) {
            for (var i = 0; i < 16; i++) {
                if (card.text === array[i].text && card.value === array[i].value) {
                    this.row = Math.floor(i / 4) + 1;
                    array[i].revealPhase = false;
                }
            }
            var tempEl = void 0;
            if (this.row === 1) {
                tempEl = array[3];
                array[3] = array[2];
                array[2] = array[1];
                array[1] = array[0];
                array[0] = tempEl;
                array[0].revealed = true;
                array[0].revealPhase = false;
            }
            else if (this.row === 2) {
                tempEl = array[7];
                array[7] = array[6];
                array[6] = array[5];
                array[5] = array[4];
                array[4] = tempEl;
                array[4].revealed = true;
                array[4].revealPhase = false;
            }
            else if (this.row === 3) {
                tempEl = array[11];
                array[11] = array[10];
                array[10] = array[9];
                array[9] = array[8];
                array[8] = tempEl;
                array[8].revealed = true;
                array[8].revealPhase = false;
            }
            else {
                tempEl = array[15];
                array[15] = array[14];
                array[14] = array[13];
                array[13] = array[12];
                array[12] = tempEl;
                array[12].revealed = true;
                array[12].revealPhase = false;
            }
            array.forEach(function (el) {
                {
                    el.MovePhase = false;
                    el.hovered = false;
                    el.revealPhase = true;
                }
            });
            setTimeout(alert('you can reveal a card!'), 2000);
        }
    };
    CardService.prototype.moveUp = function (card, array) {
        if (card.MovePhase === true) {
            for (var i = 0; i < 16; i++) {
                if (card.text === array[i].text && card.value === array[i].value) {
                    this.col = i % 4 + 1;
                    card.revealPhase = false;
                }
            }
            var tempEl = void 0;
            if (this.col === 1) {
                tempEl = array[0];
                array[0] = array[4];
                array[4] = array[8];
                array[8] = array[12];
                array[12] = tempEl;
                array[12].revealed = true;
                array[12].revealPhase = false;
            }
            else if (this.col === 2) {
                tempEl = array[1];
                array[1] = array[5];
                array[5] = array[9];
                array[9] = array[13];
                array[13] = tempEl;
                array[13].revealed = true;
                array[13].revealPhase = false;
            }
            else if (this.col === 3) {
                tempEl = array[2];
                array[2] = array[6];
                array[6] = array[10];
                array[10] = array[14];
                array[14] = tempEl;
                array[14].revealed = true;
                array[14].revealPhase = false;
            }
            else {
                tempEl = array[3];
                array[3] = array[7];
                array[7] = array[11];
                array[11] = array[15];
                array[15] = tempEl;
                array[15].revealed = true;
                array[15].revealPhase = false;
            }
            array.forEach(function (el) {
                {
                    el.MovePhase = false;
                    el.hovered = false;
                    el.revealPhase = true;
                }
            });
            setTimeout(alert('you can reveal a card!'), 2000);
        }
    };
    CardService.prototype.moveDown = function (card, array) {
        if (card.MovePhase === true) {
            for (var i = 0; i < 16; i++) {
                if (card.text === array[i].text && card.value === array[i].value) {
                    this.col = i % 4 + 1;
                    card.revealPhase = false;
                }
            }
            var tempEl = void 0;
            if (this.col === 1) {
                tempEl = array[12];
                array[12] = array[8];
                array[8] = array[4];
                array[4] = array[0];
                array[0] = tempEl;
                array[0].revealed = true;
                array[0].revealPhase = false;
            }
            else if (this.col === 2) {
                tempEl = array[13];
                array[13] = array[9];
                array[9] = array[5];
                array[5] = array[1];
                array[1] = tempEl;
                array[1].revealed = true;
                array[1].revealPhase = false;
            }
            else if (this.col === 3) {
                tempEl = array[14];
                array[14] = array[10];
                array[10] = array[6];
                array[6] = array[2];
                array[2] = tempEl;
                array[2].revealed = true;
                array[2].revealPhase = false;
            }
            else {
                tempEl = array[15];
                array[15] = array[11];
                array[11] = array[7];
                array[7] = array[3];
                array[3] = tempEl;
                array[3].revealed = true;
                array[3].revealPhase = false;
            }
            array.forEach(function (el) {
                {
                    el.MovePhase = false;
                    el.hovered = false;
                    el.revealPhase = true;
                }
            });
            setTimeout(alert('you can reveal a card!'), 2000);
        }
    };
    return CardService;
}());
CardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CardService);

//# sourceMappingURL=card.service.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Path not Found</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/game-functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFunctions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GameFunctions = (function () {
    function GameFunctions() {
        this.isDisabled = false;
    }
    GameFunctions.prototype.InitializeArray = function () {
        this.gameArray = [];
        for (var i = 0; i < 16; i++) {
            var letter = '';
            var no = void 0;
            if (i < 4) {
                no = i + 1;
            }
            else {
                no = (i + 1) % 4;
            }
            if ((i + 1) % 4 === 0) {
                no = 4;
            }
            if (i < 4) {
                letter = 'S';
            }
            else if (i < 8) {
                letter = 'C';
            }
            else if (i < 12) {
                letter = 'H';
            }
            else {
                letter = 'D';
            }
            var card = new __WEBPACK_IMPORTED_MODULE_0__card_card_model__["a" /* Card */](false, false, true, false, no, false, letter);
            this.gameArray.push(card);
        }
        return this.gameArray;
    };
    GameFunctions.prototype.shuffleArray = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    GameFunctions.prototype.DeclareWin = function (data, array) {
        this.winCondition = data.target.innerHTML;
        array.forEach(function (el) {
            el.winPhase = true;
            // el.hovered = true;
            el.MovePhase = false;
            el.revealPhase = false;
        });
    };
    GameFunctions.prototype.checkWinCondition = function (data) {
        console.log(data);
        var index = data[0];
        var rowcol = data[1];
        var row = Math.floor(index / 4) + 1;
        // code for row win
        var col = index % 4 + 1;
        if (rowcol === 'row') {
            this.gameArray[row * 4 - 1].revealed = true;
            this.gameArray[row * 4 - 2].revealed = true;
            this.gameArray[row * 4 - 3].revealed = true;
            this.gameArray[row * 4 - 4].revealed = true;
            var sum = this.gameArray[row * 4 - 1].value + this.gameArray[row * 4 - 2].value
                + this.gameArray[row * 4 - 3].value + this.gameArray[row * 4 - 4].value;
            if (this.winCondition === 'Same Numbers' &&
                this.gameArray[row * 4 - 1].value === this.gameArray[row * 4 - 2].value &&
                this.gameArray[row * 4 - 3].value === this.gameArray[row * 4 - 4].value &&
                this.gameArray[row * 4 - 4].value === this.gameArray[row * 4 - 1].value) {
                alert('You won by finding all the ' + this.gameArray[row * 4 - 1].value + 'on the ' + row + 'row');
            }
            if (this.winCondition === 'Same Color' &&
                this.gameArray[row * 4 - 1].text === this.gameArray[row * 4 - 2].text &&
                this.gameArray[row * 4 - 3].text === this.gameArray[row * 4 - 4].text &&
                this.gameArray[row * 4 - 4].text === this.gameArray[row * 4 - 1].text) {
                alert('You won by finding all the ' + this.gameArray[row * 4 - 1].text + ' on the ' + row + ' row');
            }
            if (this.winCondition === 'Everything else' && sum === 10 &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[row * 4 - 2].text &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[col + 3].text &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[col + 4].text &&
                this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 3].text &&
                this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 4].text &&
                this.gameArray[row * 4 - 3].text !== this.gameArray[row * 4 - 4].text) {
                alert(' You won by finding one of each');
            }
        }
        if (rowcol === 'col') {
            this.gameArray[col - 1].revealed = true;
            this.gameArray[col + 3].revealed = true;
            this.gameArray[col + 7].revealed = true;
            this.gameArray[col + 11].revealed = true;
            var sum = this.gameArray[col - 1].value + this.gameArray[col + 3].value
                + this.gameArray[col + 7].value + this.gameArray[col + 11].value;
            if (this.winCondition === 'Same Numbers' &&
                this.gameArray[col - 1].value === this.gameArray[col + 3].value &&
                this.gameArray[col + 7].value === this.gameArray[col + 11].value &&
                this.gameArray[col + 11].value === this.gameArray[col - 1].value) {
                alert('You won by finding all the ' + this.gameArray[col - 1].value + ' on the ' + col + ' column');
            }
            if (this.winCondition === 'Same Color' &&
                this.gameArray[col - 1].text === this.gameArray[col + 3].text &&
                this.gameArray[col + 7].text === this.gameArray[col + 11].text &&
                this.gameArray[col + 11].text === this.gameArray[col - 1].text) {
                alert('You won by finding all the ' + this.gameArray[col - 1].text + ' on the ' + col + ' column');
            }
            if (this.winCondition === 'Everything else' && sum === 10 &&
                this.gameArray[col - 1].text !== this.gameArray[col + 3].text &&
                this.gameArray[col + 1].text !== this.gameArray[col + 7].text &&
                this.gameArray[col + 1].text !== this.gameArray[col + 11].text &&
                this.gameArray[col + 3].text !== this.gameArray[col + 7].text &&
                this.gameArray[col + 3].text !== this.gameArray[col + 11].text &&
                this.gameArray[col + 7].text !== this.gameArray[col + 11].text) {
                alert(' You won by finding one of each'); // misses stuff. Check the text(color) difference
            }
        }
    };
    return GameFunctions;
}());
GameFunctions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], GameFunctions);

//# sourceMappingURL=game-functions.service.js.map

/***/ }),

/***/ "../../../../../src/app/game/game-functions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFunctions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GameFunctions = (function () {
    function GameFunctions() {
        this.isDisabled = false;
    }
    GameFunctions.prototype.InitializeArray = function () {
        this.gameArray = [];
        for (var i = 0; i < 16; i++) {
            var letter = '';
            var no = void 0;
            if (i < 4) {
                no = i + 1;
            }
            else {
                no = (i + 1) % 4;
            }
            if ((i + 1) % 4 === 0) {
                no = 4;
            }
            if (i < 4) {
                letter = 'S';
            }
            else if (i < 8) {
                letter = 'C';
            }
            else if (i < 12) {
                letter = 'H';
            }
            else {
                letter = 'D';
            }
            var card = new __WEBPACK_IMPORTED_MODULE_0__card_card_model__["a" /* Card */](false, false, true, false, no, false, letter);
            this.gameArray.push(card);
        }
        return this.gameArray;
    };
    GameFunctions.prototype.shuffleArray = function (a) {
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        var _a;
    };
    GameFunctions.prototype.DeclareWin = function (data, array) {
        this.winCondition = data.target.innerHTML;
        array.forEach(function (el) {
            el.winPhase = true;
            // el.hovered = true;
            el.MovePhase = false;
            el.revealPhase = false;
        });
    };
    GameFunctions.prototype.checkWinCondition = function (data) {
        console.log(data);
        var index = data[0];
        var rowcol = data[1];
        var row = Math.floor(index / 4) + 1;
        // code for row win
        var col = index % 4 + 1;
        if (rowcol === 'row') {
            this.gameArray[row * 4 - 1].revealed = true;
            this.gameArray[row * 4 - 2].revealed = true;
            this.gameArray[row * 4 - 3].revealed = true;
            this.gameArray[row * 4 - 4].revealed = true;
            var sum = this.gameArray[row * 4 - 1].value + this.gameArray[row * 4 - 2].value
                + this.gameArray[row * 4 - 3].value + this.gameArray[row * 4 - 4].value;
            if (this.winCondition === 'Same Numbers' &&
                this.gameArray[row * 4 - 1].value === this.gameArray[row * 4 - 2].value &&
                this.gameArray[row * 4 - 3].value === this.gameArray[row * 4 - 4].value &&
                this.gameArray[row * 4 - 4].value === this.gameArray[row * 4 - 1].value) {
                alert('You won by finding all the ' + this.gameArray[row * 4 - 1].value + 'on the ' + row + 'row');
            }
            else if (this.winCondition === 'Same Color' &&
                this.gameArray[row * 4 - 1].text === this.gameArray[row * 4 - 2].text &&
                this.gameArray[row * 4 - 3].text === this.gameArray[row * 4 - 4].text &&
                this.gameArray[row * 4 - 4].text === this.gameArray[row * 4 - 1].text) {
                alert('You won by finding all the ' + this.gameArray[row * 4 - 1].text + ' on the ' + row + ' row');
            }
            else if (this.winCondition === 'Everything else' && sum === 10 &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[row * 4 - 2].text &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[col + 3].text &&
                this.gameArray[row * 4 - 1].text !== this.gameArray[col + 4].text &&
                this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 3].text &&
                this.gameArray[row * 4 - 2].text !== this.gameArray[row * 4 - 4].text &&
                this.gameArray[row * 4 - 3].text !== this.gameArray[row * 4 - 4].text) {
                alert(' You won by finding one of each');
            }
            else {
                alert('I\'m sorry, you lost');
            }
        }
        if (rowcol === 'col') {
            this.gameArray[col - 1].revealed = true;
            this.gameArray[col + 3].revealed = true;
            this.gameArray[col + 7].revealed = true;
            this.gameArray[col + 11].revealed = true;
            var sum = this.gameArray[col - 1].value + this.gameArray[col + 3].value
                + this.gameArray[col + 7].value + this.gameArray[col + 11].value;
            if (this.winCondition === 'Same Numbers' &&
                this.gameArray[col - 1].value === this.gameArray[col + 3].value &&
                this.gameArray[col + 7].value === this.gameArray[col + 11].value &&
                this.gameArray[col + 11].value === this.gameArray[col - 1].value) {
                alert('You won by finding all the ' + this.gameArray[col - 1].value + ' on the ' + col + ' column');
            }
            else if (this.winCondition === 'Same Color' &&
                this.gameArray[col - 1].text === this.gameArray[col + 3].text &&
                this.gameArray[col + 7].text === this.gameArray[col + 11].text &&
                this.gameArray[col + 11].text === this.gameArray[col - 1].text) {
                alert('You won by finding all the ' + this.gameArray[col - 1].text + ' on the ' + col + ' column');
            }
            else if (this.winCondition === 'Everything else' && sum === 10 &&
                this.gameArray[col - 1].text !== this.gameArray[col + 3].text &&
                this.gameArray[col + 1].text !== this.gameArray[col + 7].text &&
                this.gameArray[col + 1].text !== this.gameArray[col + 11].text &&
                this.gameArray[col + 3].text !== this.gameArray[col + 7].text &&
                this.gameArray[col + 3].text !== this.gameArray[col + 11].text &&
                this.gameArray[col + 7].text !== this.gameArray[col + 11].text) {
                alert(' You won by finding one of each'); // misses stuff. Check the text(color) difference
            }
            else {
                alert('I\'m sorry, you lost');
            }
        }
    };
    return GameFunctions;
}());
GameFunctions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], GameFunctions);

//# sourceMappingURL=game-functions.service.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board {\r\n  display:block;\r\n  position:relative;\r\n  background-color:lightgrey;\r\n  width: 570px;\r\n  height:650px;\r\n  box-sizing: border-box;\r\n  margin:auto;\r\n   min-width:422px;\r\n   border-radius: 10px;\r\n}\r\n  @media only screen and (max-width: 1024px) {\r\n  /* For mobile phones: */\r\n  .board {\r\n      width:60%;\r\n      height: 340px;\r\n      overflow: inherit;\r\n      background-color:lightgrey;\r\n      max-width: 422px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row\">\n      <div class=\"col-xs-12\">\n<button class=\"btn btn-primary pull-left\" (click)=\"ResetGame()\">Start Game!\n  </button> <!-- Initialize game button -->\n  <div class=\"dropdown pull-right\" appDropdown>\n      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Declare Win!\n      <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <li><a (click)=\"gameFunctions.DeclareWin($event, mainArray)\"\n          >Same Numbers</a></li>\n        <li><a (click)=\"gameFunctions.DeclareWin($event, mainArray)\"\n          >Same Color</a></li>\n        <li><a (click)=\"gameFunctions.DeclareWin($event, mainArray)\"\n          >Everything else</a></li>\n      </ul>\n    </div>\n  <div class=\"board\"> <!-- Background Box (grey) -->\n\n    <app-card (passWin)=\"gameFunctions.checkWinCondition($event)\"\n    *ngFor=\"let card of mainArray\"\n    [var]=\"card\"\n    [gameArray]=\"mainArray\"> <!-- Card Component -->\n    {{card.value}}{{card.text}}\n    </app-card>\n  </div>\n  </div>\n</div>\n\n\n<button class=\"btn btn-primary col-xs-12\" style=\"width: 30%; margin:10px 35% \"\n(click)=\"this.gameFunctions.shuffleArray(mainArray)\">Shuffle Array</button>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_functions_service__ = __webpack_require__("../../../../../src/app/game/game-functions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = (function () {
    function GameComponent(gameFunctions) {
        this.gameFunctions = gameFunctions;
        this.mainArray = this.gameFunctions.gameArray; // the main game array that is binded to GameArray (one way bind)
    }
    GameComponent.prototype.ResetGame = function () {
        this.mainArray = this.gameFunctions.InitializeArray();
        alert('double click to reveal a card!');
    };
    GameComponent.prototype.ngOnInit = function () {
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_functions_service__["a" /* GameFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_functions_service__["a" /* GameFunctions */]) === "function" && _a || Object])
], GameComponent);

var _a;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li routerLinkActive=\"active\"\n              style=\"cursor:pointer\"\n              ><a routerLink=\"/Intro\">Intro</a></li>\n              <li routerLinkActive=\"active\"\n              style=\"cursor:pointer\"\n              [routerLinkActiveOptions]=\"{exact: true}\"\n              ><a routerLink=\"\">Let's Play!</a></li>\n              <li><a >About</a> </li>\n              <li><a >Contact</a></li>\n            </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;position:relative;height:0;padding-bottom:75.0%;justify-content:center\">\n  <iframe src=\"https://www.youtube.com/embed/LH-i8IvYIcg?ecver=2\"\n  width=\"480\" height=\"360\" frameborder=\"0\"\n  style=\"position:absolute;\"\n  allowfullscreen></iframe>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-intro',
        template: __webpack_require__("../../../../../src/app/intro/intro.component.html"),
        styles: [__webpack_require__("../../../../../src/app/intro/intro.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IntroComponent);

//# sourceMappingURL=intro.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appDropdown]'
    })
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map