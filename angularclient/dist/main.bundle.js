webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_list_question_list_component__ = __webpack_require__("./src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__results_page_results_page_component__ = __webpack_require__("./src/app/results-page/results-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_2__question_list_question_list_component__["a" /* QuestionListComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_3__results_page_results_page_component__["a" /* ResultsPageComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card bg-dark my-5\">\n        <div class=\"card-body\">\n          <h2 class=\"card-title text-center text-white py-3\">{{ title }}</h2>\n          <ul class=\"text-center list-inline py-3\">\n            <li class=\"list-inline-item\">\n              <a routerLink=\"/questions\" class=\"btn btn-info\">List Questions</a>\n                </li>\n          </ul>\n        </div>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Trivia Galore';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__ = __webpack_require__("./src/app/question-list/question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__question_service_service__ = __webpack_require__("./src/app/question-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__results_page_results_page_component__ = __webpack_require__("./src/app/results-page/results-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__result_service_service__ = __webpack_require__("./src/app/result-service.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__question_list_question_list_component__["a" /* QuestionListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__results_page_results_page_component__["a" /* ResultsPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            // Singleton service declarations
            providers: [__WEBPACK_IMPORTED_MODULE_7__question_service_service__["a" /* QuestionServiceService */], __WEBPACK_IMPORTED_MODULE_9__result_service_service__["a" /* ResultServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/question-list/question-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/question-list/question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n  <div class=\"card-body\">\n  <h3> Please answer the following list of questions: </h3>\n  <form (ngSubmit)=\"onSubmit(qForm.value)\" #qForm=\"ngForm\">\n    <table class=\"table table-bordered table-striped table-fixed\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Question</th>\n          <th scope=\"col\">Options</th>\n        </tr>\n      </thead>\n\n      <tbody>\n\t  <!-- Generate our list of questions -->\n        <tr *ngFor=\"let question of questions\">\n\t\t  <td scope=\"col\"> {{question.id }} </td>\n          <td scope=\"col\"> {{ question.question }}</td>\n          <td> \t<select class=\"form-select w-100 p-3\" name=\"{{question.id}}\" ngModel> <option *ngFor=\"let option of question.options\" value=\"{{option}}\"> {{option}} </option>\n\t\t  </select> </td> \n        </tr>\t\n      </tbody>\n\n\t \n    </table>\n\t<div class=\"row justify-content-md-center\">\n\t\t\t        <button type=\"submit\"\n        class=\"btn btn-info btn-lg\">Submit</button>\n\t\t</div>\n\t</form>\n\n\n\t \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/question-list/question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_service_service__ = __webpack_require__("./src/app/question-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_service_service__ = __webpack_require__("./src/app/result-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionListComponent = /** @class */ (function () {
    function QuestionListComponent(route, router, questionService, resultService) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.resultService = resultService;
    }
    // On initialization, fetch the questions from the backend.
    QuestionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.listQuestions().subscribe(function (data) {
            _this.questions = data;
        });
    };
    /*
     * When submitting the form, post the answers to the backend and receive back the answers. Transfer all data to the data sharing service and
     * load the results page.
     */
    QuestionListComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.questionService.answerQuestion(f).subscribe(function (result) {
            _this.answers = result;
            // Parse the Object dictionaries to Map types to ensure correct typing for keys and values and so we can use standard Map functions later
            var resultMap = new Map();
            Object.keys(result).forEach(function (k) {
                resultMap.set(k, result[k]);
            });
            _this.sendResults(resultMap);
            var answerMap = new Map();
            Object.keys(f).forEach(function (k) {
                answerMap.set(k, f[k]);
            });
            _this.sendAnswers(answerMap);
            var questionMap = new Map();
            _this.questions.forEach(function (q) {
                questionMap.set(q.id.toString(), q.question);
            });
            _this.sendQuestions(questionMap);
            _this.router.navigate(['/results']);
        });
    };
    /*
     * Methods for sending data to the data sharing service so the result page component can access them.
     */
    QuestionListComponent.prototype.sendResults = function (results) {
        this.resultService.receiveResults(results);
    };
    QuestionListComponent.prototype.sendAnswers = function (answers) {
        this.resultService.receiveAnswers(answers);
    };
    QuestionListComponent.prototype.sendQuestions = function (questions) {
        this.resultService.receiveQuestions(questions);
    };
    QuestionListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question-list',
            template: __webpack_require__("./src/app/question-list/question-list.component.html"),
            styles: [__webpack_require__("./src/app/question-list/question-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__question_service_service__["a" /* QuestionServiceService */], __WEBPACK_IMPORTED_MODULE_3__result_service_service__["a" /* ResultServiceService */]])
    ], QuestionListComponent);
    return QuestionListComponent;
}());



/***/ }),

/***/ "./src/app/question-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionServiceService = /** @class */ (function () {
    function QuestionServiceService(http) {
        this.http = http;
    }
    /*
     * REST calls to the backend
     */
    QuestionServiceService.prototype.listQuestions = function () {
        return this.http.get("http://localhost:8092/questions?nr=5");
    };
    QuestionServiceService.prototype.answerQuestion = function (answers) {
        return this.http.post("http://localhost:8092/checkanswer", answers);
    };
    QuestionServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionServiceService);
    return QuestionServiceService;
}());



/***/ }),

/***/ "./src/app/result-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);

/*
 * The data sharing service for sharing data between the question list and result page components.
 * Singleton instance used app-wide.
 */
var ResultServiceService = /** @class */ (function () {
    function ResultServiceService() {
        // Use behaviorsubjects instead of regular subjects so when polling the receivers the previous result is returned.
        this.questionResultSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](new Map([["0", "no results"]]));
        this.answerSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](new Map([["0", "no answers"]]));
        this.questionSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](new Map([["0", "no questions"]]));
        this.resultsReceiver$ = this.questionResultSource.asObservable();
        this.answersReceiver$ = this.answerSource.asObservable();
        this.questionsReceiver$ = this.questionSource.asObservable();
    }
    ResultServiceService.prototype.receiveResults = function (results) {
        this.questionResultSource.next(results);
    };
    ResultServiceService.prototype.receiveAnswers = function (answers) {
        this.answerSource.next(answers);
    };
    ResultServiceService.prototype.receiveQuestions = function (questions) {
        this.questionSource.next(questions);
    };
    return ResultServiceService;
}());



/***/ }),

/***/ "./src/app/results-page/results-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/results-page/results-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n\n  <div class=\"card-body\">\n  <h3> Below you will find the results of your answered questions! Please feel free to try again.</h3>\n  <table class=\"table table-bordered table-striped\">\n  <thead>\n  <tr>\n  <td> Question ID </td>\n  <td> Question </td>\n  <td> Your Answer </td>\n  <td> Your Answer Turned Out To Be: </td>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let ans of resultKeys\">\n  <td> {{ans}} </td>\n  <td> {{questions.get(ans)}} </td>\n  <td> {{answers.get(ans)}} </td>\n  <td>  {{results.get(ans)}}</td>\n  </tr>\n  </tbody>\n  </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/results-page/results-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result_service_service__ = __webpack_require__("./src/app/result-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultsPageComponent = /** @class */ (function () {
    /* Register all of the data listeners. The results of the question form, the questions themselves and the sent answers
     * are passed separately. Generates Map objects for the data.
     */
    function ResultsPageComponent(route, router, resultService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.resultService = resultService;
        this.resultsSubscription = resultService.resultsReceiver$.subscribe(function (result) {
            _this.results = result;
            _this.loadResultKeys();
        });
        this.answersSubscription = resultService.answersReceiver$.subscribe(function (result) {
            _this.answers = result;
            console.log(_this.answers);
        });
        this.questionsSubscription = resultService.questionsReceiver$.subscribe(function (result) {
            _this.questions = result;
            console.log(_this.questions);
        });
    }
    ResultsPageComponent.prototype.loadResultKeys = function () {
        this.resultKeys = Array.from(this.results.keys());
    };
    ResultsPageComponent.prototype.ngOnInit = function () {
    };
    // Unsubscribe to prevent memory leaks.
    ResultsPageComponent.prototype.ngOnDestroy = function () {
        this.resultsSubscription.unsubscribe();
        this.answersSubscription.unsubscribe();
        this.questionsSubscription.unsubscribe();
    };
    ResultsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-results-page',
            template: __webpack_require__("./src/app/results-page/results-page.component.html"),
            styles: [__webpack_require__("./src/app/results-page/results-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__result_service_service__["a" /* ResultServiceService */]])
    ], ResultsPageComponent);
    return ResultsPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map