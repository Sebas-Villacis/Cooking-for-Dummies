webpackJsonp([10],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaDettalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_voz_control_voz__ = __webpack_require__(52);
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
            selector: 'page-receta-dettale',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\receta-dettale\receta-dettale.html"*/'<!--\n\n  Generated template for the RecetaDettalePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar> <ion-title>PASOS</ion-title> </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h1>{{ value.recnombre }}</h1>\n\n  <img src="{{value.recimagen}}" alt="" class="center" />\n\n  <h2>INGREDIENTES</h2>\n\n  <hr class="new1" />\n\n  <div *ngFor="let ingredientes of value.recingredientes.split(\';\')">\n\n    <ul>\n\n      <li>{{ ingredientes }}</li>\n\n    </ul>\n\n  </div>\n\n  <h2>ACTIVAR</h2>\n\n  <hr class="new1" />\n\n  <div class="container">\n\n    <div class="row">\n\n      <div class="col"><button  ><img src="assets/imgs/radio-microphone.png" id="voz"></button></div>\n\n      <div class="col"><button><img src="assets/imgs/stopwatch.png" id="chrono"></button></div>\n\n    </div>\n\n  </div>\n\n  \n\n  <div>\n\n      <button (click)="click($event)" ion-button color="danger">COMENZAR PREPARACION</button></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\receta-dettale\receta-dettale.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RecetaDettalePage);
    return RecetaDettalePage;
}());

//# sourceMappingURL=receta-dettale.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(212);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.email = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.errorFunc = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.myLogIn = function () {
        var _this = this;
        if (this.email.trim() !== '') {
            console.log(this.email.trim() + " " + this.password.trim());
            if (this.password.trim() === '') {
                this.errorFunc('Ingrese su Contraseña');
            }
            else {
                var credentials_1 = {
                    email: this.email,
                    password: this.password
                };
                this.authService.login(credentials_1).then(function (result) {
                    console.log(result);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
                }, function (err) {
                    console.log(err);
                    _this.errorFunc('Credenciales no Validas');
                    console.log("Credenciales: " + JSON.stringify(credentials_1));
                });
            }
        }
        else {
            this.errorFunc('Ingrese una Contraseña valida');
        }
        console.log(console.log(this.email.trim() + " " + this.password.trim()));
    };
    LoginPage.prototype.myLogOut = function () {
        this.authService.logout();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])(),
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Nombre de Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="password")]></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="secondary" (click)="myLogIn()">Log In</button>\n  </div>\n  <div padding>\n    <button ion-button color="secondary" (click)="myLogOut()">Log Out</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-logro',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\logro\logro.html"*/'<!--\n\n  Generated template for the LogroPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>logro</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item text-center>\n\n  <br><h3>¡HAN DESBLOQUEADO UN LOGRO!</h3><br>\n\n  <ion-img src="../../assets/imgs/principiantes_enamoradizos.jpeg" width="250" height="375" class="slide-image"></ion-img><br><br>\n\n  <button ion-button color="light" (click)="goBack()" round>SIGUIENTE</button>\n\n</ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\logro\logro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LogroPage);
    return LogroPage;
}());

//# sourceMappingURL=logro.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PantallaInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-pantalla-inicio',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\pantalla-inicio\pantalla-inicio.html"*/'<!--\n\n  Generated template for the PantallaInicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PantallaInicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n    <img src="PantallaInicio.png"/>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\pantalla-inicio\pantalla-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PantallaInicioPage);
    return PantallaInicioPage;
}());

//# sourceMappingURL=pantalla-inicio.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/competencia/competencia.module": [
		293,
		9
	],
	"../pages/completar-receta/completar-receta.module": [
		294,
		8
	],
	"../pages/control-voz/control-voz.module": [
		295,
		7
	],
	"../pages/inicio/inicio.module": [
		296,
		6
	],
	"../pages/login/login.module": [
		297,
		5
	],
	"../pages/logro/logro.module": [
		298,
		4
	],
	"../pages/pantalla-inicio/pantalla-inicio.module": [
		299,
		3
	],
	"../pages/receta-dettale/receta-dettale.module": [
		302,
		2
	],
	"../pages/recetas/recetas.module": [
		300,
		1
	],
	"../pages/register/register.module": [
		301,
		0
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(166);
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
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + '/register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + '/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                resolve(_this.token);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completar_receta_completar_receta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recetas_recetas__ = __webpack_require__(33);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary"(click)="YourFancyButton()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img [src]="slide.title" class="slide-image"/>\n\n      <br>\n\n      <img [src]="slide.image" class="slide-image"/>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <img src="assets/imgs/3.3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <img src="assets/imgs/3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <button ion-button large clear icon-end color="primary"(click)="YourFancyButton()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recetas_recetas__ = __webpack_require__(33);
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
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage.prototype.YourFancyButton = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__recetas_recetas__["a" /* RecetasPage */]);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\inicio\inicio.html"*/'<!--\n\n  Generated template for the InicioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>inicio</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <ion-toolbar>\n\n        <ion-buttons end>\n\n          <button ion-button color="primary"(click)="YourFancyButton()">Skip</button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n      <img [src]="slide.title" class="slide-image"/>\n\n      <br>\n\n      <img [src]="slide.image" class="slide-image"/>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-toolbar>\n\n      </ion-toolbar>\n\n      <img src="assets/imgs/3.3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <img src="assets/imgs/3.jpeg" class="slide-image"/>\n\n      <br>\n\n      <button ion-button large clear icon-end color="primary"(click)="YourFancyButton()">\n\n        Continue\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pantalla_inicio_pantalla_inicio__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_recetas_recetas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_competencia_competencia__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_completar_receta_completar_receta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_logro_logro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_receta_dettale_receta_dettale__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_control_voz_control_voz__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_receta_servicios_receta_servicios__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_crud_crud__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pantalla_inicio_pantalla_inicio__["a" /* PantallaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_competencia_competencia__["a" /* CompetenciaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_completar_receta_completar_receta__["a" /* CompletarRecetaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_logro_logro__["a" /* LogroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receta_dettale_receta_dettale__["a" /* RecetaDettalePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_control_voz_control_voz__["a" /* ControlVozPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/competencia/competencia.module#CompetenciaPageModule', name: 'CompetenciaPage', segment: 'competencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/completar-receta/completar-receta.module#CompletarRecetaPageModule', name: 'CompletarRecetaPage', segment: 'completar-receta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/control-voz/control-voz.module#ControlVozPageModule', name: 'ControlVozPage', segment: 'control-voz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logro/logro.module#LogroPageModule', name: 'LogroPage', segment: 'logro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pantalla-inicio/pantalla-inicio.module#PantallaInicioPageModule', name: 'PantallaInicioPage', segment: 'pantalla-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recetas/recetas.module#RecetasPageModule', name: 'RecetasPage', segment: 'recetas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receta-dettale/receta-dettale.module#RecetaDettalePageModule', name: 'RecetaDettalePage', segment: 'receta-dettale', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_pantalla_inicio_pantalla_inicio__["a" /* PantallaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_recetas_recetas__["a" /* RecetasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_competencia_competencia__["a" /* CompetenciaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_completar_receta_completar_receta__["a" /* CompletarRecetaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_logro_logro__["a" /* LogroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receta_dettale_receta_dettale__["a" /* RecetaDettalePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_control_voz_control_voz__["a" /* ControlVozPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_crud_crud__["a" /* CrudProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const apiKey = 'http://127.0.0.1:8000/api/';
/* harmony export (immutable) */ __webpack_exports__["a"] = apiKey;


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pantalla_inicio_pantalla_inicio__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_recetas_recetas__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_competencia_competencia__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_completar_receta_completar_receta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_logro_logro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_control_voz_control_voz__ = __webpack_require__(52);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
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
            { title: 'ControlVoz', component: __WEBPACK_IMPORTED_MODULE_12__pages_control_voz_control_voz__["a" /* ControlVozPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CrudProvider = /** @class */ (function () {
    function CrudProvider(http) {
        this.http = http;
        console.log('Hello CrudProvider Provider');
    }
    CrudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CrudProvider);
    return CrudProvider;
}());

//# sourceMappingURL=crud.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receta_dettale_receta_dettale__ = __webpack_require__(106);
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
            selector: 'page-recetas',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\recetas\recetas.html"*/'<!--\n\n  Generated template for the RecetasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title  >Recetas</ion-title>\n\n  </ion-navbar>\n\n  <div class = "row">\n\n      <ion-searchbar (search)="searchNombre($event)"></ion-searchbar>\n\n      <ion-list>\n\n          <ion-item *ngFor="let item of items">\n\n            {{ item }}\n\n          </ion-item>\n\n        </ion-list>\n\n </div>\n\n  <div class="row">\n\n    <ion-item>\n\n  <ion-label>Categoria</ion-label>\n\n  <ion-select [(ngModel)]="filtro" (ionChange)="searchCategory($event)">\n\n    <ion-option value="Postres">Postres</ion-option>\n\n    <ion-option value="Bocadillos">Bocadillos</ion-option>\n\n    <ion-option value="Entrada">Entrada</ion-option>\n\n    <ion-option value="Plato Fuerte">Plato Fuerte</ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n  </div>\n\n    \n\n    \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n  <div>\n\n    <h3>LAS MEJORES OPCIONES EN PAREJA:</h3>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let image of recetas?.data">\n\n          <div class="image-container">\n\n              <h5>{{image.recnombre}}</h5>\n\n              <button  (click)="click($event,image)" block>\n\n                  <img [src]="image.recimagen" alt="">\n\n             </button>\n\n            \n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\recetas\recetas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */]])
    ], RecetasPage);
    return RecetasPage;
}());

//# sourceMappingURL=recetas.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recetas_recetas__ = __webpack_require__(33);
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
            selector: 'page-competencia',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\competencia\competencia.html"*/'<!--\n\n  Generated template for the CompetenciaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>PASOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n    <img src="{{recetas.recimagen}}"/>\n\n    <ion-slides pager style="margin-top:15%;margin-bottom: 10%;" >\n\n      <ion-slide *ngFor="let pasos of recetas.recpasos.split(\';\')">\n\n        <p [innerHTML]="pasos">\n\n        </p>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <p>\n\n          SE TERMINARON LOS PASOS\n\n        </p>\n\n        <button ion-button large clear icon-end color="primary"(click)="YourFancyButton()" style="margin-bottom:10%;">\n\n          Finalizar\n\n          <ion-icon name="arrow-forward"></ion-icon>\n\n        </button>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\competencia\competencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receta_servicios_receta_servicios__["a" /* RecetaServiciosProvider */]])
    ], CompetenciaPage);
    return CompetenciaPage;
}());

//# sourceMappingURL=competencia.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlVozPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competencia_competencia__ = __webpack_require__(51);
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
            selector: 'page-control-voz',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\control-voz\control-voz.html"*/'<!--\n\n  Generated template for the ControlVozPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Control-voz</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card text-center  >\n\n        <img src="assets/imgs/tips.1.jpeg" class="slide-image"/>\n\n        <br>\n\n        <img src="assets/imgs/tips.jpeg" class="slide-image"/>\n\n        <br>\n\n        <button  ion-button color="danger" (click)="click()">\n\n          OK\n\n          \n\n        </button>\n\n    </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\control-voz\control-voz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ControlVozPage);
    return ControlVozPage;
}());

//# sourceMappingURL=control-voz.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletarRecetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-completar-receta',template:/*ion-inline-start:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\completar-receta\completar-receta.html"*/'<!--\n\n  Generated template for the CompletarRecetaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header> \n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>FELICIDADES</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card text-center>\n\n\n\n  <br><h3>FELICIDADES!!!</h3><br>\n\n  <ion-img src="../../assets/imgs/primera_receta_completa.jpeg" width="300" height="300"></ion-img>\n\n  <ion-label>¿QUÉ QUIEREN PREPARAR LA PRÓXIMA VEZ?</ion-label>\n\n  <hr style="border:1px dotted gray; width:300px" class="slide-image"/>\n\n  \n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Postres</ion-label>\n\n      <ion-checkbox [(ngModel)]="postres"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cocteles</ion-label>\n\n      <ion-checkbox [(ngModel)]="cocteles" disabled="false"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Snacks</ion-label>\n\n      <ion-checkbox [(ngModel)]="snacks"></ion-checkbox>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cenas</ion-label>\n\n      <ion-checkbox [(ngModel)]="cenas"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list><br>\n\n\n\n  <button ion-button color="danger" (click)="goBack()" round>OK</button>\n\n\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\kjarr\Documents\Nuevas Tecnicas\Proyecto\nuevasTecnicas-Project\FrontEnd\src\pages\completar-receta\completar-receta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CompletarRecetaPage);
    return CompletarRecetaPage;
}());

//# sourceMappingURL=completar-receta.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecetaServiciosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
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
            this.basepath = "http://192.168.100.10:8100/api";
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], RecetaServiciosProvider);
    return RecetaServiciosProvider;
}());

//# sourceMappingURL=receta-servicios.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map