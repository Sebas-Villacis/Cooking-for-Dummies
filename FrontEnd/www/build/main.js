webpackJsonp([9],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RecetaServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RecetaServiciosProvider = /** @class */ (function () {
    function RecetaServiciosProvider(http, _platform) {
        this.http = http;
        this._platform = _platform;
        this.basepath = "/api";
        if (this._platform.is("cordova")) {
            this.basepath = "http://192.168.1.4:8100/api";
        }
    }
    RecetaServiciosProvider.prototype.getRecetas = function () {
        return this.http.get(this.basepath.concat('/RecetasImagenes'));
    };
    RecetaServiciosProvider.prototype.getRecetasByCategory = function (buscar) {
        return this.http.get(this.basepath.concat('/RecetasByCategoria/' + buscar));
    };
    RecetaServiciosProvider.prototype.getRecetasByName = function (buscar) {
        return this.http.get(this.basepath.concat('/RecetasByNombre/' + buscar));
    };
    RecetaServiciosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
    ], RecetaServiciosProvider);
    return RecetaServiciosProvider;
}());

//# sourceMappingURL=receta-servicios.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completar_receta_completar_receta__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recetas_recetas__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "assets/imgs/1.1.jpeg",
                image: "assets/imgs/1.jpeg",
            },
            {
                title: "assets/imgs/2.2.jpeg",
                image: "assets/imgs/2.jpeg",
            }
        ];
    }
    HomePage.prototype.goCompletarReceta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__completar_receta_completar_receta__["a" /* CompletarRecetaPage */]);
    };
    HomePage.prototype.YourFancyButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__recetas_recetas__["a" /* RecetasPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary"(click)="YourFancyButton()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img [src]="slide.title" class="slide-image"/>\n\n      <br>\n\n      <img [src]="slide.image" class="slide-image"/>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <img src="assets/imgs/3.3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <img src="assets/imgs/3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <button ion-button large clear icon-end color="primary"(click)="YourFancyButton()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__okta_okta_auth_js__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__okta_okta_auth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__okta_okta_auth_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, oauthService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.oauthService = oauthService;
        oauthService.redirectUri = window.location.origin;
        oauthService.clientId = '0oahxwjp2rPwb3rjG0h7';
        oauthService.scope = 'openid profile email';
        oauthService.issuer = 'https://dev-614753.oktapreview.com/oauth2/default';
        oauthService.tokenValidationHandler = new __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__["a" /* JwksValidationHandler */]();
        // Load Discovery Document and then try to login the user
        this.oauthService.loadDiscoveryDocument().then(function () {
            _this.oauthService.tryLogin();
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.email.setFocus();
        }, 500);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.oauthService.createAndSaveNonce().then(function (nonce) {
            var authClient = new __WEBPACK_IMPORTED_MODULE_3__okta_okta_auth_js__({
                clientId: _this.oauthService.clientId,
                redirectUri: _this.oauthService.redirectUri,
                url: 'http://localhost:8100/',
                issuer: 'default'
            });
            return authClient.signIn({
                username: _this.username,
                password: _this.password
            }).then(function (response) {
                if (response.status === 'SUCCESS') {
                    return authClient.token.getWithoutPrompt({
                        nonce: nonce,
                        responseType: ['id_token', 'token'],
                        sessionToken: response.sessionToken,
                        scopes: _this.oauthService.scope.split(' ')
                    })
                        .then(function (tokens) {
                        var idToken = tokens[0].idToken;
                        var accessToken = tokens[1].accessToken;
                        var keyValuePair = "#id_token=" + encodeURIComponent(idToken) + "&access_token=" + encodeURIComponent(accessToken);
                        _this.oauthService.tryLogin({
                            customHashFragment: keyValuePair,
                            disableOAuth2StateCheck: true
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    });
                }
                else {
                    throw new Error('We cannot handle the ' + response.status + ' status');
                }
            }).fail(function (error) {
                console.error(error);
                _this.error = error.message;
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list inset>\n\n          <ion-item>\n\n            <ion-input placeholder="Email" name="username" id="loginField"\n\n                       type="text" required [(ngModel)]="username" #email></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-input placeholder="Password" name="password" id="passwordField"\n\n                       type="password" required [(ngModel)]="password"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n        <button ion-button class="submit-btn" full type="submit"\n\n                [disabled]="!loginForm.form.valid">Login\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__["c" /* OAuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaDettalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_voz_control_voz__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecetaDettalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecetaDettalePage = /** @class */ (function () {
    function RecetaDettalePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.value = navParams.get('item');
    }
    RecetaDettalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecetaDettalePage');
    };
    RecetaDettalePage.prototype.getValue = function () {
        return this.value;
    };
    RecetaDettalePage.prototype.click = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__control_voz_control_voz__["a" /* ControlVozPage */], {
            item: this.getValue()
        });
    };
    RecetaDettalePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receta-dettale',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\receta-dettale\receta-dettale.html"*/'<!--\n\n  Generated template for the RecetaDettalePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>PASOS</ion-title>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <img src="{{value.recimagen}}" alt="">\n\n    <label for="">Ingedientes</label>\n\n    <div *ngFor="let ingredientes of value.recingredientes.split(\';\')">\n\n        <p>\n\n          {{ingredientes}}\n\n        </p>\n\n    </div>\n\n    <div >\n\n        <button (click)="click($event)">\n\n            Comenzar Preparación\n\n       </button>\n\n    </div>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\receta-dettale\receta-dettale.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], RecetaDettalePage);
    return RecetaDettalePage;
    var _a, _b;
}());

//# sourceMappingURL=receta-dettale.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlVozPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competencia_competencia__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ControlVozPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ControlVozPage = /** @class */ (function () {
    function ControlVozPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recetas = navParams.get('item');
    }
    ControlVozPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ControlVozPage');
    };
    ControlVozPage.prototype.getValue = function () {
        return this.recetas;
    };
    ControlVozPage.prototype.click = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__competencia_competencia__["a" /* CompetenciaPage */], {
            item: this.getValue()
        });
    };
    ControlVozPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control-voz',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\control-voz\control-voz.html"*/'<!--\n  Generated template for the ControlVozPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Control-voz</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card text-center  >\n        <img src="assets/imgs/tips.1.jpeg" class="slide-image"/>\n        <br>\n        <img src="assets/imgs/tips.jpeg" class="slide-image"/>\n        <br>\n        <button  ion-button color="danger" (click)="click()">\n          OK\n          \n        </button>\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\control-voz\control-voz.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ControlVozPage);
    return ControlVozPage;
    var _a, _b;
}());

//# sourceMappingURL=control-voz.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogroPage = /** @class */ (function () {
    function LogroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogroPage');
    };
    LogroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logro',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\logro\logro.html"*/'<!--\n\n  Generated template for the LogroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>logro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item text-center>\n\n  <br><h3>¡HAN DESBLOQUEADO UN LOGRO!</h3><br>\n\n  <ion-img src="../../assets/imgs/principiantes_enamoradizos.jpeg" width="250" height="375" class="slide-image"></ion-img><br><br>\n\n  <button ion-button color="light" (click)="goBack()" round>SIGUIENTE</button>\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\logro\logro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LogroPage);
    return LogroPage;
}());

//# sourceMappingURL=logro.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantallaInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PantallaInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PantallaInicioPage = /** @class */ (function () {
    function PantallaInicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PantallaInicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PantallaInicioPage');
    };
    PantallaInicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pantalla-inicio',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\pantalla-inicio\pantalla-inicio.html"*/'<!--\n\n  Generated template for the PantallaInicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PantallaInicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n    <img src="PantallaInicio.png"/>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\pantalla-inicio\pantalla-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PantallaInicioPage);
    return PantallaInicioPage;
}());

//# sourceMappingURL=pantalla-inicio.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/competencia/competencia.module": [
		716,
		8
	],
	"../pages/completar-receta/completar-receta.module": [
		717,
		7
	],
	"../pages/control-voz/control-voz.module": [
		718,
		6
	],
	"../pages/inicio/inicio.module": [
		719,
		0
	],
	"../pages/login/login.module": [
		720,
		5
	],
	"../pages/logro/logro.module": [
		721,
		4
	],
	"../pages/pantalla-inicio/pantalla-inicio.module": [
		722,
		3
	],
	"../pages/receta-dettale/receta-dettale.module": [
		723,
		2
	],
	"../pages/recetas/recetas.module": [
		724,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pantalla_inicio_pantalla_inicio__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_competencia_competencia__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_receta_servicios_receta_servicios__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_completar_receta_completar_receta__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_logro_logro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_receta_dettale_receta_dettale__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_oauth2_oidc__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_control_voz_control_voz__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { LoginPageModule } from '../pages/login/login.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pantalla_inicio_pantalla_inicio__["a" /* PantallaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_competencia_competencia__["a" /* CompetenciaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_completar_receta_completar_receta__["a" /* CompletarRecetaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_logro_logro__["a" /* LogroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receta_dettale_receta_dettale__["a" /* RecetaDettalePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_control_voz_control_voz__["a" /* ControlVozPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                //LoginPageModule,
                __WEBPACK_IMPORTED_MODULE_18_angular_oauth2_oidc__["b" /* OAuthModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/competencia/competencia.module#CompetenciaPageModule', name: 'CompetenciaPage', segment: 'competencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completar-receta/completar-receta.module#CompletarRecetaPageModule', name: 'CompletarRecetaPage', segment: 'completar-receta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/control-voz/control-voz.module#ControlVozPageModule', name: 'ControlVozPage', segment: 'control-voz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logro/logro.module#LogroPageModule', name: 'LogroPage', segment: 'logro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pantalla-inicio/pantalla-inicio.module#PantallaInicioPageModule', name: 'PantallaInicioPage', segment: 'pantalla-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receta-dettale/receta-dettale.module#RecetaDettalePageModule', name: 'RecetaDettalePage', segment: 'receta-dettale', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recetas/recetas.module#RecetasPageModule', name: 'RecetasPage', segment: 'recetas', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pantalla_inicio_pantalla_inicio__["a" /* PantallaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_competencia_competencia__["a" /* CompetenciaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_completar_receta_completar_receta__["a" /* CompletarRecetaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_logro_logro__["a" /* LogroPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_receta_dettale_receta_dettale__["a" /* RecetaDettalePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_control_voz_control_voz__["a" /* ControlVozPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_login_service_login_service__["a" /* LoginServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receta_dettale_receta_dettale__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecetasPage = /** @class */ (function () {
    function RecetasPage(navCtrl, navParams, RecetaServiciosProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.RecetaServiciosProvider = RecetaServiciosProvider;
        this.isSearchbarOpened = false;
        this.RecetaServiciosProvider.getRecetas()
            .subscribe(function (data) {
            _this.recetas = data;
        }, function (error) {
            console.log(error);
        });
    }
    RecetasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecetasPage');
    };
    RecetasPage.prototype.searchCategory = function (event) {
        var _this = this;
        console.log(event);
        this.RecetaServiciosProvider.getRecetasByCategory(event)
            .subscribe(function (data) {
            _this.recetas = data;
        }, function (error) {
            console.log(error);
        });
    };
    RecetasPage.prototype.click = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__receta_dettale_receta_dettale__["a" /* RecetaDettalePage */], {
            item: item
        });
    };
    RecetasPage.prototype.searchNombre = function (event) {
        var _this = this;
        var val = event.target.value;
        console.log(val);
        this.RecetaServiciosProvider.getRecetasByName(val)
            .subscribe(function (data) {
            _this.recetas = data;
        }, function (error) {
            console.log(error);
        });
    };
    RecetasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recetas',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\recetas\recetas.html"*/'<!--\n\n  Generated template for the RecetasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title  >Recetas</ion-title>\n\n  </ion-navbar>\n\n  <div class = "row">\n\n      <ion-searchbar (search)="searchNombre($event)"></ion-searchbar>\n\n      <ion-list>\n\n          <ion-item *ngFor="let item of items">\n\n            {{ item }}\n\n          </ion-item>\n\n        </ion-list>\n\n </div>\n\n  <div class="row">\n\n    <ion-item>\n\n  <ion-label>Categoria</ion-label>\n\n  <ion-select [(ngModel)]="filtro" (ionChange)="searchCategory($event)">\n\n    <ion-option value="Postres">Postres</ion-option>\n\n    <ion-option value="Bocadillos">Bocadillos</ion-option>\n\n    <ion-option value="Entrada">Entrada</ion-option>\n\n    <ion-option value="Plato Fuerte">Plato Fuerte</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  </div>\n\n    \n\n    \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n  <div>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let image of recetas?.data">\n\n          <div class="image-container">\n\n              <button  (click)="click($event,image)" block>\n\n                  <img [src]="image.recimagen" alt="">\n\n             </button>\n\n            \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\recetas\recetas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */]])
    ], RecetasPage);
    return RecetasPage;
}());

//# sourceMappingURL=recetas.js.map

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pantalla_inicio_pantalla_inicio__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recetas_recetas__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_competencia_competencia__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_completar_receta_completar_receta__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logro_logro__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_oauth2_oidc__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_control_voz_control_voz__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oauthService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        if (oauthService.hasValidIdToken()) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */] },
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_7__pages_pantalla_inicio_pantalla_inicio__["a" /* PantallaInicioPage */] },
            { title: 'Recetas', component: __WEBPACK_IMPORTED_MODULE_8__pages_recetas_recetas__["a" /* RecetasPage */] },
            { title: 'Competencia', component: __WEBPACK_IMPORTED_MODULE_9__pages_competencia_competencia__["a" /* CompetenciaPage */] },
            { title: 'Receta Completa', component: __WEBPACK_IMPORTED_MODULE_10__pages_completar_receta_completar_receta__["a" /* CompletarRecetaPage */] },
            { title: 'Logro', component: __WEBPACK_IMPORTED_MODULE_11__pages_logro_logro__["a" /* LogroPage */] },
            { title: 'ControlVoz', component: __WEBPACK_IMPORTED_MODULE_13__pages_control_voz_control_voz__["a" /* ControlVozPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_12_angular_oauth2_oidc__["c" /* OAuthService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginServiceProvider = /** @class */ (function () {
    function LoginServiceProvider(http, _platform) {
        this.http = http;
        this._platform = _platform;
        this.basepath = "/api";
        if (this._platform.is("cordova")) {
            this.basepath = "http://192.168.100.10:8100/api";
        }
    }
    LoginServiceProvider.prototype.getUsuarios = function () {
        return this.http.get(this.basepath.concat('/user'));
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recetas_recetas__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CompetenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompetenciaPage = /** @class */ (function () {
    function CompetenciaPage(navCtrl, navParams, RecetaServiciosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.RecetaServiciosProvider = RecetaServiciosProvider;
        //this.searchNombre('lasagna');
        this.recetas = navParams.get('item');
    }
    CompetenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompetenciaPage');
    };
    CompetenciaPage.prototype.YourFancyButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__recetas_recetas__["a" /* RecetasPage */]);
    };
    CompetenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-competencia',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\competencia\competencia.html"*/'<!--\n\n  Generated template for the CompetenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>PASOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n    <img src="{{recetas.recimagen}}"/>\n\n    <ion-slides pager style="margin-top:15%;margin-bottom: 10%;" >\n\n      <ion-slide *ngFor="let pasos of recetas.recpasos.split(\';\')">\n\n        <p [innerHTML]="pasos">\n\n        </p>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <p>\n\n          SE TERMINARON LOS PASOS\n\n        </p>\n\n        <button ion-button large clear icon-end color="primary"(click)="YourFancyButton()" style="margin-bottom:10%;">\n\n          Finalizar\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\competencia\competencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */]])
    ], CompetenciaPage);
    return CompetenciaPage;
}());

//# sourceMappingURL=competencia.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletarRecetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CompletarRecetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletarRecetaPage = /** @class */ (function () {
    function CompletarRecetaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompletarRecetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompletarRecetaPage');
    };
    CompletarRecetaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CompletarRecetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completar-receta',template:/*ion-inline-start:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\completar-receta\completar-receta.html"*/'<!--\n\n  Generated template for the CompletarRecetaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>FELICIDADES</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card text-center>\n\n\n\n  <br><h3>FELICIDADES!!!</h3><br>\n\n  <ion-img src="../../assets/imgs/primera_receta_completa.jpeg" width="300" height="300"></ion-img>\n\n  <ion-label>¿QUÉ QUIEREN PREPARAR LA PRÓXIMA VEZ?</ion-label>\n\n  <hr style="border:1px dotted gray; width:300px" class="slide-image"/>\n\n  \n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Postres</ion-label>\n\n      <ion-checkbox [(ngModel)]="postres"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cocteles</ion-label>\n\n      <ion-checkbox [(ngModel)]="cocteles" disabled="false"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Snacks</ion-label>\n\n      <ion-checkbox [(ngModel)]="snacks"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cenas</ion-label>\n\n      <ion-checkbox [(ngModel)]="cenas"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list><br>\n\n\n\n  <button ion-button color="danger" (click)="goBack()" round>OK</button>\n\n\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Github\Cooking\nuevasTecnicas-Project\FrontEnd\src\pages\completar-receta\completar-receta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CompletarRecetaPage);
    return CompletarRecetaPage;
}());

//# sourceMappingURL=completar-receta.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map