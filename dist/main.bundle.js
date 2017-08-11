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
exports.push([module.i, ".board {\r\n    display:block;\r\n    position:relative;\r\n    background-color:lightgrey;\r\n    width: 570px;\r\n    height:650px;\r\n    box-sizing: border-box;\r\n    margin:auto;\r\n     min-width:422px;\r\n     border-radius: 10px;\r\n}\r\n    @media only screen and (max-width: 1024px) {\r\n    /* For mobile phones: */\r\n    .board {\r\n        width:60%;\r\n        height: 340px;\r\n        overflow: inherit;\r\n        background-color:lightgrey;\r\n        max-width: 422px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" (click)=\"ResetGame()\">Start Game!</button>\n<div class=\"board\">\n  <app-card *ngFor=\"let card of mainArray\" [var]=\"card\" [gameArray]=\"mainArray\">\n{{card.value}}{{card.text}}\n  </app-card>\n</div>\n<button class=\"btn btn-primary col-xs-12\" style=\"width: 30%; margin:10px 35% \"\n(click)=\"this.gameFuntions.shuffleArray(mainArray)\">Shuffle Array</button>\n"

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
    function AppComponent(gameFuntions) {
        this.gameFuntions = gameFuntions;
    }
    AppComponent.prototype.ResetGame = function () {
        this.mainArray = this.gameFuntions.InitializeArray();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.MoveFunction = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_functions_service__ = __webpack_require__("../../../../../src/app/game-functions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card_service__ = __webpack_require__("../../../../../src/app/card/card.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card_model__ = __webpack_require__("../../../../../src/app/card/card.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__card_card_component__["a" /* CardComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__game_functions_service__["a" /* GameFunctions */], __WEBPACK_IMPORTED_MODULE_6__card_card_service__["a" /* CardService */], __WEBPACK_IMPORTED_MODULE_7__card_card_model__["a" /* Card */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  display:block;\r\n  /* position: absolute; */\r\n  background-image: linear-gradient(brown, grey);\r\n  height: 150px;\r\n  width:110px;\r\n  margin: 6px 16px;\r\n  float:left;\r\n  border-radius: 8px;\r\n}\r\n.glyphicon {\r\n  font-size: medium;\r\n  color: white;\r\n  max-height: 8px;\r\n  /* line-height:0; */\r\n}\r\n@media only screen and (max-width: 1024px) {\r\n    /* For mobile phones: */\r\n        .card{\r\n      position:auto;\r\n      height:69px;\r\n      width: 51px 100%;\r\n      margin: 8px 27px;\r\n\r\n    }\r\n    .revealed{\r\n      font-size: 28px !important;\r\n    }\r\n}\r\n.revealed {\r\n  /* margin-top:30%; */\r\n  font-size: 35px;\r\n  font-weight: Bold;\r\n  text-align:center;\r\n  color:white;\r\n   max-height: 150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"card\"(click)=\"Reveal()\" (mouseenter)=\"ShowArrows()\"\n   (mouseleave)=\"HideArrows()\">\n <div class=\"revealed\"  *ngIf=\"this.var.revealed\">\n  <ng-content></ng-content>\n  </div>\n <div style=\"width:100%; height:100%; display:flex;\n justify-content:space-evenly;\"\n  *ngIf=\"this.var.hovered\" >\n    <div class=\"glyphicon glyphicon-arrow-up\"\n    (click)=\"this.cardService.moveUp(this.var,this.gameArray)\">\n    </div>\n    <div class=\"glyphicon glyphicon-arrow-left\"\n    (click)=\"this.cardService.moveLeft(this.var,this.gameArray)\" >\n    </div>\n     <div class=\"glyphicon glyphicon-arrow-right\"\n     (click)=\"this.cardService.moveRight(this.var,this.gameArray)\" >\n    </div>\n    <div class=\"glyphicon glyphicon-arrow-down\"\n    (click)=\"this.cardService.moveDown(this.var,this.gameArray)\" >\n\n    </div>\n    </div>\n</div>\n\n"

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
    }
    CardComponent.prototype.Reveal = function () {
        var _this = this;
        if (this.var.revealPhase) {
            this.var.revealed = !this.var.revealed;
            setTimeout(function () {
                _this.var.revealed = !_this.var.revealed;
                for (var i = 0; i < 16; i++) {
                    _this.gameArray[i].MovePhase = !_this.gameArray[i].MovePhase;
                }
                alert('you can move a card!');
            }, 4000);
        }
    };
    CardComponent.prototype.ngOnInit = function () { };
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
CardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
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

var Card = (function () {
    function Card(movephase, hovered, revealphase, value, revealed, text) {
        this.MovePhase = movephase;
        this.revealPhase = revealphase;
        this.hovered = hovered;
        this.value = value;
        this.revealed = revealed;
        this.text = text;
    }
    return Card;
}());
Card = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [Boolean, Boolean, Boolean, Number, Boolean, String])
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
    }
    CardService.prototype.moveLeft = function (card, array) {
        for (var i = 0; i < 16; i++) {
            if (card.text === array[i].text && card.value === array[i].value) {
                this.row = Math.floor(i / 4) + 1;
                card.revealPhase = false;
            }
        }
        var tempEl;
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
        for (var i = 0; i < 16; i++) {
            array[i].MovePhase = false;
            array[i].hovered = false;
        }
        setTimeout(alert('you can reveal a card!'), 2000);
    };
    CardService.prototype.moveRight = function (card, array) {
        for (var i = 0; i < 16; i++) {
            if (card.text === array[i].text && card.value === array[i].value) {
                this.row = Math.floor(i / 4) + 1;
                array[i].revealPhase = false;
            }
        }
        var tempEl;
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
        for (var i = 0; i < 16; i++) {
            array[i].MovePhase = false;
            array[i].hovered = false;
        }
        setTimeout(alert('you can reveal a card!'), 2000);
    };
    CardService.prototype.moveUp = function (card, array) {
        for (var i = 0; i < 16; i++) {
            if (card.text === array[i].text && card.value === array[i].value) {
                this.col = i % 4 + 1;
                card.revealPhase = false;
            }
        }
        var tempEl;
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
        for (var i = 0; i < 16; i++) {
            array[i].MovePhase = false;
            array[i].hovered = false;
        }
        setTimeout(alert('you can reveal a card!'), 2000);
    };
    CardService.prototype.moveDown = function (card, array) {
        for (var i = 0; i < 16; i++) {
            if (card.text === array[i].text && card.value === array[i].value) {
                this.col = i % 4 + 1;
                card.revealPhase = false;
            }
        }
        var tempEl;
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
        for (var i = 0; i < 16; i++) {
            array[i].MovePhase = false;
            array[i].hovered = false;
        }
        setTimeout(alert('you can reveal a card!'), 2000);
    };
    return CardService;
}());
CardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CardService);

//# sourceMappingURL=card.service.js.map

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
            var card = new __WEBPACK_IMPORTED_MODULE_0__card_card_model__["a" /* Card */](false, false, true, no, false, letter);
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
    return GameFunctions;
}());
GameFunctions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], GameFunctions);

//# sourceMappingURL=game-functions.service.js.map

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map