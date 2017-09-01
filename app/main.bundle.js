webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<md-toolbar class=\"md-toolbar-tools\">\n    <i class=\"material-icons\">face</i>\n    <span>&nbsp;&nbsp;Deploy Version</span>\n    <span class=\"md-spacer\"></span>\n    <span>Orza&nbsp;&nbsp;</span>\n    <img src=\"./WhiteonTransparent.png\" class=\"logo-img-lg\">\n</md-toolbar>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__d3scatter_d3scatter_directive__ = __webpack_require__("../../../../../src/app/d3scatter/d3scatter-directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__d3FundLine_d3fundline_directive__ = __webpack_require__("../../../../../src/app/d3FundLine/d3fundline-directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__d3PortLine_d3portline_directive__ = __webpack_require__("../../../../../src/app/d3PortLine/d3portline-directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__d3TreeMap_d3treemap_directive__ = __webpack_require__("../../../../../src/app/d3TreeMap/d3treemap-directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// Directives




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__d3scatter_d3scatter_directive__["a" /* D3ScatterPlot */],
            __WEBPACK_IMPORTED_MODULE_11__d3FundLine_d3fundline_directive__["a" /* D3FundLine */],
            __WEBPACK_IMPORTED_MODULE_12__d3PortLine_d3portline_directive__["a" /* D3PortLine */],
            __WEBPACK_IMPORTED_MODULE_13__d3TreeMap_d3treemap_directive__["a" /* D3TreeMap */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/d3FundLine/d3fundline-directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3FundLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var x_Data;
var y_Data;
var nSliderIndex;
var nFundIndex;
var D3FundLine = (function () {
    function D3FundLine(el) {
        this.el = el;
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.chartElement = el.nativeElement;
    }
    D3FundLine.prototype.ngOnInit = function () {
        x_Data = [];
        y_Data = [];
        this.createData();
        this.createChart();
    };
    D3FundLine.prototype.ngOnChanges = function (changes) {
        nFundIndex = this.FondosValue;
        nSliderIndex = this.SliderIndex;
        x_Data = [];
        y_Data = [];
        this.createData();
        this.createChart();
    };
    D3FundLine.prototype.createData = function () {
        x_Data = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundIndex].udate;
        y_Data = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundIndex].u;
    };
    D3FundLine.prototype.createChart = function () {
        var elements = document.querySelectorAll('.data-graph');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        var element = this.chartElement;
        var margin = { top: 20, right: 10, bottom: 40, left: 40 };
        var width = window.innerWidth;
        var height = 150;
        var margin = { top: 20, right: 11, bottom: 20, left: 10 };
        if (window.innerWidth >= 1280)
            width = window.innerWidth / 100 * 50 - margin.left - margin.right;
        else
            width = window.innerWidth - margin.left - margin.right;
        width = width - 16 * 2 - 20; // card content
        // creating a div to contain fund line chart
        var div = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](element);
        var svg = div.append('svg:svg')
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'data-graph');
        var xStart = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data)[0];
        var xEnd = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data)[1];
        // setup variables
        var x = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]()
            .domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](x_Data, function (d) { return d; }))
            .range([0 + margin.left, width - margin.right]);
        var y = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]()
            .domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data, function (d) { return Number(d); }))
            .range([0 + margin.bottom, height - margin.top]);
        var g = svg.append("svg:g")
            .style('stroke', '#9E9E9E')
            .style('fill', 'none');
        var lineGraph = __WEBPACK_IMPORTED_MODULE_2_d3__["line"]()
            .x(function (d, i) { return x(x_Data[i]); })
            .y(function (d, i) { return height - y(y_Data[i]); });
        g.append("svg:path")
            .attr("d", lineGraph(y_Data))
            .style('stroke-width', 2)
            .style('stroke', '#3663d5')
            .style('fill', 'none');
        var verticalLine = svg.append('line')
            .attr("x1", 0)
            .attr("y1", 8)
            .attr("x2", 0)
            .attr("y2", height - 8)
            .attr("stroke", "black")
            .attr('class', 'line_exvline')
            .style('stroke-width', 2)
            .attr("transform", function () {
            var xPosition = x(x_Data[nSliderIndex]);
            return "translate(" + xPosition + ",0)";
        });
        var toolTipValue = svg.append('text')
            .text(function (d) { return __WEBPACK_IMPORTED_MODULE_2_d3__["format"]("$0,.06f")(y_Data[nSliderIndex]); })
            .attr('text-anchor', 'start')
            .attr('class', 'line_extoolTipValue')
            .attr('dy', '20')
            .attr('dx', '8');
        toolTipValue.attr("transform", function () {
            var xPosition = x(x_Data[nSliderIndex]);
            var node = toolTipValue.node();
            var thisWidth = node.getComputedTextLength();
            if (thisWidth + xPosition + 20 > width) {
                xPosition = xPosition - thisWidth - 15;
            }
            return "translate(" + xPosition + ",0)";
        });
    };
    return D3FundLine;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderIndex'),
    __metadata("design:type", Number)
], D3FundLine.prototype, "SliderIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('FondosValue'),
    __metadata("design:type", Number)
], D3FundLine.prototype, "FondosValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('WindowSize'),
    __metadata("design:type", Number)
], D3FundLine.prototype, "WindowSize", void 0);
D3FundLine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[d3fundline]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], D3FundLine);

var _a;
//# sourceMappingURL=d3fundline-directive.js.map

/***/ }),

/***/ "../../../../../src/app/d3PortLine/d3portline-directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3PortLine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var x_Data;
var y_Data;
var nSliderIndex;
var D3PortLine = (function () {
    function D3PortLine(el) {
        this.el = el;
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.chartElement = el.nativeElement;
    }
    D3PortLine.prototype.ngOnInit = function () {
        x_Data = [];
        y_Data = [];
        this.createData();
        this.createChart();
    };
    D3PortLine.prototype.ngOnChanges = function (changes) {
        nSliderIndex = this.SliderIndex;
        x_Data = [];
        y_Data = [];
        this.createData();
        this.createChart();
    };
    D3PortLine.prototype.createData = function () {
        // portfolio array
        x_Data = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].udate;
        y_Data = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["e" /* g_AllStatus */].arrPortfolioData;
    };
    D3PortLine.prototype.createChart = function () {
        var elements = document.querySelectorAll('.data-port');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        var element = this.chartElement;
        var margin = { top: 20, right: 10, bottom: 40, left: 40 };
        var width = window.innerWidth;
        var height = 150;
        var margin = { top: 20, right: 11, bottom: 20, left: 10 };
        if (window.innerWidth >= 1280)
            width = window.innerWidth / 100 * 50 - margin.left - margin.right;
        else
            width = window.innerWidth - margin.left - margin.right;
        width = width - 16 * 2 - 20; // card content
        // creating a div to contain fund line chart
        var div = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](element);
        var svg = div.append('svg:svg')
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'data-port');
        var xStart = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data)[0];
        var xEnd = __WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data)[1];
        // setup variables
        var x = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleTime"]()
            .domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](x_Data, function (d) { return d; }))
            .range([0 + margin.left, width - margin.right]);
        var y = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]()
            .domain(__WEBPACK_IMPORTED_MODULE_2_d3__["extent"](y_Data, function (d) { return Number(d); }))
            .range([0 + margin.bottom, height - margin.top]);
        var g = svg.append("svg:g")
            .style('stroke', '#9E9E9E')
            .style('fill', 'none');
        var lineGraph = __WEBPACK_IMPORTED_MODULE_2_d3__["line"]()
            .x(function (d, i) { return x(x_Data[i]); })
            .y(function (d, i) { return height - y(y_Data[i]); });
        g.append("svg:path")
            .attr("d", lineGraph(y_Data))
            .style('stroke-width', 2)
            .style('stroke', '#3663d5')
            .style('fill', 'none');
        var verticalLine = svg.append('line')
            .attr("x1", 0)
            .attr("y1", 8)
            .attr("x2", 0)
            .attr("y2", height - 8)
            .attr("stroke", "black")
            .attr('class', 'verticalLine')
            .style('stroke-width', 2)
            .attr("transform", function () {
            var xPosition = x(x_Data[nSliderIndex]);
            return "translate(" + xPosition + ",0)";
        });
        var toolTipValue = svg.append('text')
            .text(function (d) { return __WEBPACK_IMPORTED_MODULE_2_d3__["format"]("$0,.02f")(y_Data[nSliderIndex]); })
            .attr('text-anchor', 'start')
            .attr('class', 'toolTipValue')
            .attr('dy', '20')
            .attr('dx', '8');
        toolTipValue.attr("transform", function () {
            var xPosition = x(x_Data[nSliderIndex]);
            var node = toolTipValue.node();
            var thisWidth = node.getComputedTextLength();
            if (thisWidth + xPosition + 20 > width) {
                xPosition = xPosition - thisWidth - 15;
            }
            return "translate(" + xPosition + ",0)";
        });
    };
    return D3PortLine;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderIndex'),
    __metadata("design:type", Number)
], D3PortLine.prototype, "SliderIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('PfName'),
    __metadata("design:type", String)
], D3PortLine.prototype, "PfName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('WindowSize'),
    __metadata("design:type", Number)
], D3PortLine.prototype, "WindowSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderDisable'),
    __metadata("design:type", Object)
], D3PortLine.prototype, "SliderDisable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('RefreshStatus'),
    __metadata("design:type", Object)
], D3PortLine.prototype, "RefreshStatus", void 0);
D3PortLine = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[d3portline]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], D3PortLine);

var _a;
//# sourceMappingURL=d3portline-directive.js.map

/***/ }),

/***/ "../../../../../src/app/d3TreeMap/d3treemap-directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3TreeMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var listofTreeMap;
var nSliderIndex;
var strPfName;
var testJSON = {
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "cluster",
                    "children": [
                        { "name": "AgglomerativeCluster", "size": 3938 },
                        { "name": "CommunityStructure", "size": 3812 },
                        { "name": "HierarchicalCluster", "size": 6714 },
                        { "name": "MergeEdge", "size": 743 }
                    ]
                }
            ]
        }
    ]
};
var D3TreeMap = (function () {
    function D3TreeMap(el) {
        this.el = el;
        this.chartElement = el.nativeElement;
    }
    D3TreeMap.prototype.ngOnInit = function () {
        this.createData();
        this.createChart();
    };
    D3TreeMap.prototype.ngOnChanges = function (changes) {
        nSliderIndex = this.SliderIndex;
        strPfName = this.PfName;
        this.createData();
        this.createChart();
    };
    D3TreeMap.prototype.createData = function () {
        listofTreeMap = { "name": "tree", "children": [] };
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].portname != strPfName)
                continue;
            var eachTree = { "name": "", "children": [] };
            eachTree.name = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].portname;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                var children = { "name": "", "size": 0 };
                children.name = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[j].name;
                children.size = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].weightArray[j][nSliderIndex];
                eachTree.children[j] = children;
            }
            listofTreeMap.children.push(eachTree);
        }
        if (listofTreeMap.children.length == 0)
            listofTreeMap.children.push({ "name": "", "children": [] });
    };
    D3TreeMap.prototype.createChart = function () {
        var elements = document.querySelectorAll('.treemap');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        if (listofTreeMap.children.length > 0) {
            var width = window.innerWidth;
            var height = 500;
            var margin = { top: 20, right: 40, bottom: 40, left: 40 };
            if (width >= 1280) {
                // document.getElementById("tree_house").style.height = "160px";
                width = width / 100 * 25;
                height = 150;
            }
            else if ((width < 1280) && (width >= 900)) {
                // document.getElementById("tree_house").style.height = "300px";
                height = 150;
            }
            else if ((width < 900) && (width >= 600)) {
                // document.getElementById("tree_house").style.height = "200px";
                height = 150;
            }
            else {
                // document.getElementById("tree_house").style.height = "150px";
                height = 130;
            }
            width = width - margin.right - margin.left;
            // creating a div to contain line charts.
            var color = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleOrdinal"]().range(__WEBPACK_IMPORTED_MODULE_2_d3__["schemeCategory20c"]);
            var treemap = __WEBPACK_IMPORTED_MODULE_2_d3__["treemap"]().size([width, height]);
            var div = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](this.chartElement).append("div")
                .attr("class", "treemap")
                .style("position", "relative")
                .style("width", (width) + "px")
                .style("height", (height) + "px")
                .style("left", "0px")
                .style("top", "0px")
                .style("background", "rgb(49, 130, 189)");
            var root = __WEBPACK_IMPORTED_MODULE_2_d3__["hierarchy"](listofTreeMap, function (d) { return d.children; })
                .sum(function (d) { return d.size; });
            var tree = treemap(root);
            var node = div.datum(root).selectAll(".node")
                .data(tree.leaves())
                .enter().append("div")
                .attr("class", "node")
                .style("left", function (d) { return d.x0 + "px"; })
                .style("top", function (d) { return d.y0 + "px"; })
                .style("width", function (d) { return Math.max(0, d.x1 - d.x0 - 1) + "px"; })
                .style("height", function (d) { return Math.max(0, d.y1 - d.y0 - 1) + "px"; })
                .style("background", function (d) { var colorObj = d.parent.data; return "" + color(colorObj.name); })
                .text(function (d) { var txtObj = d.data; return txtObj.name; });
        }
    };
    return D3TreeMap;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderIndex'),
    __metadata("design:type", Number)
], D3TreeMap.prototype, "SliderIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('PfName'),
    __metadata("design:type", String)
], D3TreeMap.prototype, "PfName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('WindowSize'),
    __metadata("design:type", Number)
], D3TreeMap.prototype, "WindowSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderDisable'),
    __metadata("design:type", Object)
], D3TreeMap.prototype, "SliderDisable", void 0);
D3TreeMap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[d3treemap]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], D3TreeMap);

var _a;
//# sourceMappingURL=d3treemap-directive.js.map

/***/ }),

/***/ "../../../../../src/app/d3scatter/d3scatter-directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ScatterPlot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_d3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var y_Day91Return;
var x_Day7LossMin;
var nSliderIndex;
var D3ScatterPlot = (function () {
    function D3ScatterPlot(el) {
        this.el = el;
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.chartElement = el.nativeElement;
    }
    D3ScatterPlot.prototype.ngOnInit = function () {
        x_Day7LossMin = [];
        y_Day91Return = [];
        this.createData();
        this.createChart();
    };
    D3ScatterPlot.prototype.ngOnChanges = function (changes) {
        nSliderIndex = this.SliderIndex;
        x_Day7LossMin = [];
        y_Day91Return = [];
        this.createData();
        this.createChart();
    };
    D3ScatterPlot.prototype.createData = function () {
        // calculate for funds
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day91_return.length; i++) {
            y_Day91Return[i] = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day91_return[i][this.SliderIndex];
            var min = 99999;
            for (var j = 0; j <= this.SliderIndex; j++) {
                if (min > __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day7_loss[i][j])
                    min = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day7_loss[i][j];
            }
            x_Day7LossMin[i] = 0 - min;
        }
        // calculate for portfolio
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i] == undefined)
                continue;
            y_Day91Return.push(__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].day91Array[this.SliderIndex]);
            var min = 99999;
            for (var j = 0; j <= this.SliderIndex; j++) {
                if (min > __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].day7Array[j])
                    min = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].day7Array[j];
            }
            x_Day7LossMin.push(0 - min);
        }
        // console.log(x_Day7LossMin);
        // console.log(y_Day91Return);
    };
    D3ScatterPlot.prototype.createChart = function () {
        var elements = document.querySelectorAll('.data-scattergraph');
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[i]);
        }
        var element = this.chartElement;
        var margin = { top: 20, right: 10, bottom: 40, left: 40 };
        this.width = window.innerWidth - margin.right - margin.left - 20;
        this.height = (window.innerWidth > 650) ? window.innerWidth / 4 : window.innerWidth / 2;
        var svg = __WEBPACK_IMPORTED_MODULE_2_d3__["select"](element).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr("transform", "translate(0, 0)")
            .attr('class', 'data-scattergraph');
        // setup variables
        var y = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]()
            .domain([-0.15, 0.3])
            .range([this.height - margin.top, 0 + margin.bottom]);
        var x = __WEBPACK_IMPORTED_MODULE_2_d3__["scaleLinear"]()
            .domain([0, 0.25])
            .range([0 + margin.left, this.width - margin.right]);
        var g = svg.append("svg:g")
            .style('stroke', '#F44336')
            .style('fill', 'none');
        g.append('g')
            .attr("class", "x_axis")
            .attr("transform", "translate(0 , " + (this.height - margin.top) + ")")
            .call(__WEBPACK_IMPORTED_MODULE_2_d3__["axisBottom"](x));
        g.append("g")
            .attr("class", "y_axis")
            .attr("transform", "translate(" + (margin.left) + ", 0)")
            .call(__WEBPACK_IMPORTED_MODULE_2_d3__["axisLeft"](y));
        __WEBPACK_IMPORTED_MODULE_2_d3__["selectAll"](".tick > text")
            .style("font-size", "12px");
        __WEBPACK_IMPORTED_MODULE_2_d3__["selectAll"](".x_axis > path")
            .style("stroke-dasharray", ("3, 3"))
            .style('stroke', '#F44336')
            .attr("transform", "translate(0 , " + (-this.height + y(0) + margin.top) + ")");
        __WEBPACK_IMPORTED_MODULE_2_d3__["selectAll"](".y_axis > path")
            .style('stroke', '#F44336');
        var clip = svg.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("id", "clip-rect")
            .attr("x", margin.left - 8)
            .attr("y", margin.bottom - 8)
            .attr("width", this.width - margin.left - margin.right + 16)
            .attr("height", this.height - margin.top - margin.bottom + 16);
        svg.append("rect")
            .attr("class", "rect_circle")
            .attr("id", "rect_circle")
            .attr("x", 100)
            .attr("y", 100)
            .attr("width", 74)
            .attr("height", 60)
            .attr("clip-path", "url(#clip)")
            .style('fill', 'grey')
            .style('stroke-width', 1)
            .style('stroke', 'grey')
            .style("opacity", 0);
        // Add title
        svg.selectAll(".dot")
            .data(y_Day91Return)
            .enter().append("text")
            .attr("x", function (d, i) {
            var xValue = x_Day7LossMin[i];
            if (xValue > 0.25)
                xValue = 0.25;
            if (xValue < 0)
                xValue = 0;
            return x(xValue) - 6;
        })
            .attr("y", function (d, i) {
            var yValue = y_Day91Return[i];
            if (yValue > 0.3)
                yValue = 0.3;
            if (yValue < -0.15)
                yValue = -0.15;
            return y(yValue) - 10;
        })
            .text(function (d, i) {
            if (i >= __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length)
                return __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].portname;
            else
                return "";
        })
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .style("fill", function (d, i) {
            var cntFund = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length;
            var isPort = (i < cntFund) ? 0 : 1;
            var color = __WEBPACK_IMPORTED_MODULE_2_d3__["rgb"](isPort * (100 + 150 / (i - cntFund + 1)), (100 + 100 / (i + 1)) * (1 - isPort), 0);
            return color + "";
        })
            .style("opacity", function (d, i) {
            var cntFund = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length;
            if (i >= cntFund) {
                if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - cntFund].showhide == 0)
                    return 0;
            }
            return 0.7;
        });
        // Add dot
        svg.selectAll(".dot")
            .data(y_Day91Return)
            .enter().append("circle")
            .attr("class", function (d, i) {
            var classname = "";
            if (i >= __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length)
                classname = "dot_" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].portname;
            else
                classname = "dot_" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].name;
            return classname;
        })
            .attr("id", function (d, i) {
            var classname = "";
            if (i >= __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length)
                classname = "dot_" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].portname;
            else
                classname = "dot_" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].name;
            return classname;
        })
            .attr("r", 8)
            .attr("cx", function (d, i) {
            var xValue = x_Day7LossMin[i];
            if (xValue > 0.25)
                xValue = 0.25;
            if (xValue < 0)
                xValue = 0;
            return x(xValue);
        })
            .attr("cy", function (d, i) {
            var yValue = y_Day91Return[i];
            if (yValue > 0.3)
                yValue = 0.3;
            if (yValue < -0.15)
                yValue = -0.15;
            return y(yValue);
        })
            .attr("clip-path", "url(#clip)")
            .style("fill", function (d, i) {
            var cntFund = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length;
            var isPort = (i < cntFund) ? 0 : 1;
            var color = __WEBPACK_IMPORTED_MODULE_2_d3__["rgb"](isPort * (100 + 150 / (i - cntFund + 1)), (100 + 100 / (i + 1)) * (1 - isPort), 0);
            return color + "";
        })
            .style("opacity", function (d, i) {
            var cntFund = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length;
            if (i >= cntFund) {
                if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - cntFund].showhide == 0)
                    return 0;
            }
            return 0.7;
        })
            .style("display", function (d, i) {
            var cntFund = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length;
            if (i >= cntFund) {
                if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i - cntFund].showhide == 0)
                    return "none";
            }
            return "block";
        })
            .on("mouseover", function (d, i) { onMouseOver(i); })
            .on("mouseout", onMouseOut);
        function onMouseOver(index) {
            var xData = x_Day7LossMin[index];
            var yData = y_Day91Return[index];
            if (xData > 0.25)
                xData = 0.25;
            if (xData < 0)
                xData = 0;
            if (yData > 0.3)
                yData = 0.3;
            if (yData < -0.15)
                yData = -0.15;
            if (index >= __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length) {
                if (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[index - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].showhide == 0)
                    return;
                document.getElementById("scatter_title").innerHTML = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[index - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].portname;
                document.getElementById("scatter_port").innerHTML = (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[index - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].yearRateArray[nSliderIndex] > 0) ? "+" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[index - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].yearRateArray[nSliderIndex] + "% desde inicio, tasa periodo o annual" : __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[index - __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length].yearRateArray[nSliderIndex] + "% desde inicio, tasa periodo o annual";
            }
            else {
                document.getElementById("scatter_title").innerHTML = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[index].name;
                document.getElementById("scatter_port").innerHTML = (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[index][nSliderIndex] > 0) ? "+" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[index][nSliderIndex] + "% desde inicio, tasa periodo o annual" : __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[index][nSliderIndex] + "% desde inicio, tasa periodo o annual";
            }
            document.getElementById("scatter_x").innerHTML = __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["m" /* toFixedDecimal */](xData * 100, 1) + "% caída máxima en 7 días ";
            document.getElementById("scatter_y").innerHTML = (__WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["m" /* toFixedDecimal */](yData * 100, 1) >= 0) ? "+" + __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["m" /* toFixedDecimal */](yData * 100, 1) + "% en 91 días" : __WEBPACK_IMPORTED_MODULE_1__globals_globals_component__["m" /* toFixedDecimal */](yData * 100, 1) + "% en 91 días";
            var tooltip = document.getElementById("scatter_tooltip");
            var width = window.innerWidth - margin.right - margin.left;
            var height = (window.innerWidth > 650) ? window.innerWidth / 4 : window.innerWidth / 2;
            tooltip.style.left = (x(xData) + 310 < width) ? ((x(xData) + 30).toFixed() + "px") : ((width - 310) + "px");
            tooltip.style.top = (y(yData) + 50).toFixed() + "px";
            tooltip.style.display = "block";
        }
        function onMouseOut() {
            document.getElementById("scatter_tooltip").style.display = "none";
        }
    };
    return D3ScatterPlot;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderIndex'),
    __metadata("design:type", Number)
], D3ScatterPlot.prototype, "SliderIndex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('WindowSize'),
    __metadata("design:type", Number)
], D3ScatterPlot.prototype, "WindowSize", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('SliderDisable'),
    __metadata("design:type", Object)
], D3ScatterPlot.prototype, "SliderDisable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('RefreshAll'),
    __metadata("design:type", Object)
], D3ScatterPlot.prototype, "RefreshAll", void 0);
D3ScatterPlot = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[d3Scatter]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], D3ScatterPlot);

var _a;
//# sourceMappingURL=d3scatter-directive.js.map

/***/ }),

/***/ "../../../../../src/app/globals/globals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return g_DatabaseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return g_GlobalStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return g_FundParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return g_Portfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return g_AllStatus; });
/* harmony export (immutable) */ __webpack_exports__["d"] = convertDate;
/* harmony export (immutable) */ __webpack_exports__["j"] = isSameDate;
/* harmony export (immutable) */ __webpack_exports__["l"] = numberWithCommas;
/* harmony export (immutable) */ __webpack_exports__["m"] = toFixedDecimal;
/* harmony export (immutable) */ __webpack_exports__["a"] = GetDateIndex;
/* harmony export (immutable) */ __webpack_exports__["c"] = GetFundIndexByKey;
/* harmony export (immutable) */ __webpack_exports__["b"] = GetFundIndex;
/* unused harmony export decimalPlaces */
/* harmony export (immutable) */ __webpack_exports__["k"] = multiple;
// Global Variables

var g_DatabaseInfo = {
    bIsStartCalc: false,
    FundHeader: [],
    RawFundPriceList: [],
    PortfolioList: [],
    TransactionList: [],
    ListofPriceFund: []
};
var g_GlobalStatic = {
    startDate: '2013-01-01 00:00:00',
    arrPortIndex: [40, 48, 51, 54, 59, 80, 88, 104, 105, 106, 126, 149, 176, 179, 190]
};
var g_FundParent = {
    arrAllReturns: {
        day1_return: [],
        day1_loss: [],
        day7_loss: [],
        day91_return: [],
        day182_return: [],
        day365_return: [],
        year_return: [],
        start_return: [],
        newstart_return: []
    },
    arrAllTransaction: []
};
var g_Portfolios = {
    nSliderIndex: 0,
    arrDataByPortfolio: []
};
var g_AllStatus = {
    strPfName: '',
    arrPortfolioData: [],
    arrStaircaseData: []
};
function convertDate(paramDate) {
    var date = new Date(paramDate);
    var month = (date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    var strDate = date.getFullYear() + '-' + month + '-' + day;
    return strDate;
}
function isSameDate(a, b) {
    if (a.getFullYear() == b.getFullYear()) {
        if (a.getMonth() == b.getMonth()) {
            if (a.getDate() == b.getDate()) {
                return true;
            }
        }
    }
    return false;
}
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
function toFixedDecimal(value, count) {
    var decimal = Math.pow(10, count);
    return Math.round(value * decimal) / decimal;
}
function GetDateIndex(arr, tdate) {
    for (var i = 0; i < arr.length; i++) {
        var sourceDate = new Date(arr[i]);
        var strDate = convertDate(sourceDate);
        if (strDate == tdate)
            return i;
    }
    return -1;
}
// compare keys for long fund names
function GetFundIndexByKey(strLongName) {
    strLongName = strLongName.toLowerCase();
    for (var i = 0; i < g_DatabaseInfo.ListofPriceFund.length; i++) {
        for (var j = 0; j < g_DatabaseInfo.ListofPriceFund[i].dict.length; j++) {
            var nIndex = strLongName.indexOf(g_DatabaseInfo.ListofPriceFund[i].dict[j]);
            if (nIndex > -1) {
                return g_DatabaseInfo.ListofPriceFund[i].name;
            }
        }
    }
    return undefined;
}
function GetFundIndex(strFundName) {
    for (var i = 0; i < g_DatabaseInfo.ListofPriceFund.length; i++) {
        if (g_DatabaseInfo.ListofPriceFund[i].name == strFundName) {
            return i;
        }
    }
    return 0;
}
function decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) {
        return 0;
    }
    return Math.max(0, 
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0)
        - (match[2] ? +match[2] : 0));
}
function multiple(param1, param2) {
    var len1 = decimalPlaces(param1);
    var len2 = decimalPlaces(param2);
    var len = (len1 >= len2) ? len1 : len2;
    var maxVal = Math.pow(10, len);
    var value1 = Math.round(param1 * maxVal);
    var value2 = Math.round(param2 * maxVal);
    return value1 * value2 / (maxVal * maxVal);
}
//# sourceMappingURL=globals.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isValid\" class=\"md-main-page\">\n    <md-card class=\"md-card-top\">\n        <md-card-title>\n            retorno y riesgo: cambio en últimos 91 días, máxima caída en 7 días\n        </md-card-title>\n        <md-card-content>\n            <div class=\"scatter_tooltip\" id=\"scatter_tooltip\">\n                <div class=\"scatter_title\" id=\"scatter_title\">Title1234567889</div>\n                <div class=\"scatter_y\" id=\"scatter_y\">y : 1.123456</div>                                                            \n                <div class=\"scatter_port\" id=\"scatter_port\">p : 1.123456</div>\n                <div class=\"scatter_x\" id=\"scatter_x\">x : 1.123456</div>    \n            </div>\n            <div [SliderIndex]=\"ngSliderIndex\" [RefreshAll]=\"ngAllRefresh\" [SliderDisable]=\"disabled\" [WindowSize]=\"ngWidth\" d3Scatter></div>\n        </md-card-content>\n    </md-card>\n\n    <md-grid-list cols=\"{{tile_Col}}\" (window:resize)=\"onResize($event)\" rowHeight=\"280px\" style=\"margin-bottom:10px;\">\n        <md-grid-tile [colspan]=\"tile_One\"> \n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-nochat\">\n                    escoje portafolio\n                </md-card-title>\n                <md-card-content>\n                    <md-input-container class=\"md-input-portfolio\">\n                        <input mdInput placeholder=\"input portafolio nombre\" [(ngModel)]=\"ngPortfolioName\" (ngModelChange)=\"onPfnameChanged()\" [disabled]=\"disabled\" value=\"accionescolombia\" class=\"md-input-portfolio\" spellcheck=\"false\">\n                    </md-input-container>\n                    <div>${{ngScopeVoP}} valor actual</div>\n                    <div>{{ngScopeGoL}}% de utilidad sobre valor</div>\n                    <div>${{ngScopeMax}} máxima utilidad</div>\n                    <div>${{ngScopeMin}} mínima utilidad</div>\n                    <div>{{ngScopeRate}}% desde inicio, tasa periodo o anua</div>\n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n        <md-grid-tile [colspan]=\"tile_Two\">\n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-chat\">\n                    utilidad portafolio en pesos\n                </md-card-title>\n                <md-card-content>\n                    <div [SliderIndex]=\"ngSliderIndex\" [RefreshStatus]=\"ngSecondGraphModel\" [SliderDisable]=\"disabled\" [PfName]=\"ngPortfolioName\" [WindowSize]=\"ngWidth\" d3portline></div>\n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n        <md-grid-tile [colspan]=\"tile_Tre\">\n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-chat\">\n                    composición portafolio\n                </md-card-title>\n                <md-card-content>\n                    <div [SliderIndex]=\"ngSliderIndex\" [SliderDisable]=\"disabled\" [PfName]=\"ngPortfolioName\" [WindowSize]=\"ngWidth\" d3treemap></div>\n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n\n    <md-grid-list cols=\"{{tile_Col}}\" (window:resize)=\"onResize($event)\" rowHeight=\"280px\">\n        <md-grid-tile [colspan]=\"tile_One\"> \n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-nochat\">\n                    escoje fondo\n                </md-card-title>\n                <md-card-content>\n                    <md-select [(ngModel)]=\"ngSelFondosValue\" placeholder=\"fondos\" class=\"md-select-fund\" (ngModelChange)=\"onSelectFondos()\" [disabled]=\"disabled\">\n                        <md-option *ngFor=\"let fondo of fondos\" [value]=\"fondo.value\">\n                            {{ fondo.viewValue }}\n                        </md-option>\n                    </md-select>\n                    <div>{{ngScopeDay91}}% en 91 días</div>\n                    <div>{{ngScopeDay182}}% en 182 días</div>\n                    <div>{{ngScopeDay365}}% en 365 días</div>\n                    <div>{{ngScopeYear}}% desde inicio, tasa periodo o anual</div>\n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n        <md-grid-tile [colspan]=\"tile_Two\">\n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-chat\">\n                    precio unidad\n                </md-card-title>\n                <md-card-content>\n                    <div [SliderIndex]=\"ngSliderIndex\" [FondosValue]=\"ngSelFondosValue\" [WindowSize]=\"ngWidth\" d3fundline></div>\n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n        <md-grid-tile [colspan]=\"tile_Tre\">\n            <md-card class=\"md-card-top md-card-child\">\n                <md-card-title class=\"md-card-nochat\">\n                    comprar o vender\n                </md-card-title>\n                <md-card-content>\n                    <md-input-container class=\"md-input-buy\">\n                        <input mdInput [(ngModel)]=\"ngSecondGraphModel\" (ngModelChange)=\"onUnidadesChange()\" [disabled]=\"!ngPortfolioName\" spellcheck=\"false\" placeholder=\"input unidades\" type=\"number\">\n                    </md-input-container>\n                    <span class=\"md-spacer\"></span>\n                    <button md-mini-fab class=\"md-btn-transaction md-raised md-primary md-icon-button\" (click)=\"onBuy()\" [disabled]=\"!ngPortfolioName\">\n                        <span><i class=\"material-icons\">check</i></span>\n                    </button>\n                    <button md-mini-fab class=\"md-btn-transaction md-raised md-primary md-icon-button\" (click)=\"onClose()\" [disabled]=\"!ngPortfolioName\">\n                        <span><i class=\"material-icons\">clear</i></span>\n                    </button>\n\n                    <md-input-container class=\"md-input-buy\">\n                        <input mdInput [(ngModel)]=\"ngSecondGraphAmount\" (ngModelChange)=\"onPesosChange()\" [disabled]=\"!ngPortfolioName\" spellcheck=\"false\" placeholder=\"input pesos\" type=\"number\">\n                    </md-input-container>\n\n                    <div>{{ngScopeUnidades}} unidades</div>\n                    <div>${{ngScopeTranPrice}} pesos</div> \n                </md-card-content>\n            </md-card>\n        </md-grid-tile>\n    </md-grid-list>\n\n    <md-grid-list class=\"md-table-header\" cols=\"15\" rowHeight=\"45px\">\n        <md-grid-tile class=\"md-table-back\" (click)=\"onTableReorder(eachHeader.index)\" [colspan]=\"2\" *ngFor=\"let eachHeader of tbHeader\">\n            <div>{{eachHeader.title}}</div>\n            <i class=\"material-icons\">{{eachHeader.icon}}</i>\n        </md-grid-tile>\n        <md-grid-tile class=\"md-table-back\" [colspan]=\"1\">\n            <div>borrar</div>\n        </md-grid-tile>\n    </md-grid-list>\n\n    <div *ngFor=\"let eachObj of tableInfo\" class=\"md-table-body\">\n        <md-grid-list cols=\"15\" rowHeight=\"45px\">\n            <md-grid-tile class=\"md-table-header-back\" [colspan]=\"15\" (click)=\"onShowHide(eachObj.PortIndex, 1)\">\n                <div>{{eachObj.Portname}}</div><i class=\"material-icons\">{{eachObj.PortIcon}}</i>\n            </md-grid-tile>\n        </md-grid-list>\n        <md-grid-list cols=\"15\" rowHeight=\"45px\" *ngFor=\"let eachTransaction of eachObj.Portarray\">\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\">\n                <div>{{eachTransaction.strPortID}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex2\">\n                <div>{{eachTransaction.tDate}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex3\">\n                <div>{{eachTransaction.strFundName}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex4\">\n                <div>{{eachTransaction.strBoS}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex5\">\n                <div>{{eachTransaction.str_nItemCnt}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex6\">\n                <div>${{eachTransaction.str_fItemValue}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\" [ngStyle]=\"styleFlex7\">\n                <div>${{eachTransaction.str_fTotal}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back\" [colspan]=\"1\">\n                <button md-button (click)=\"onDelete(eachTransaction)\" [disabled]=\"eachTransaction.deletable\"><i class=\"material-icons\">clear</i></button>\n            </md-grid-tile>\n\n            \n            <!-- <md-grid-tile class=\"md-table-body-back-left\" [colspan]=\"15\">\n                <div><b>- fondo:</b> {{eachTransaction.strFundName}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back-left\" [colspan]=\"15\">\n                <div><b>- compra o venta:</b> {{eachTransaction.strBoS}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back-left\" [colspan]=\"15\">\n                <div><b>- unidades:</b> {{eachTransaction.str_nItemCnt}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back-left\" [colspan]=\"15\">\n                <div><b>- precio unidad:</b> ${{eachTransaction.str_fItemValue}}</div>\n            </md-grid-tile>\n            <md-grid-tile class=\"md-table-body-back-left\" [colspan]=\"15\">\n                <div><b>- total pesos:</b> ${{eachTransaction.str_fTotal}}</div>\n            </md-grid-tile> -->\n        </md-grid-list>\n    </div>\n\n    <md-grid-list cols=\"12\" rowHeight=\"45px\">\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\">\n            <div></div>\n        </md-grid-tile>\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"8\">\n            <button md-button (click)=\"onUpload()\"><i class=\"material-icons\">file_upload</i>subir transacciones en archivo csv</button>\n        </md-grid-tile>\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\">\n            <input type=\"file\" id=\"file\" name=\"file\" style=\"display:none;\" [(ngModel)]=\"ngFileUploadPath\" accept=\".csv\" (change)=\"onChangeFilePath($event)\"/>\n        </md-grid-tile>\n    </md-grid-list>\n    <md-grid-list cols=\"12\" rowHeight=\"45px\">\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\">\n            <div></div>\n        </md-grid-tile>\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"8\">\n            <button md-button (click)=\"onDownload()\"><i class=\"material-icons\">file_download</i>bajar plantilla en archivo csv</button>\n        </md-grid-tile>\n        <md-grid-tile class=\"md-table-body-back\" [colspan]=\"2\">\n            <a target=\"_self\" href=\"./s302kd02.csv\" download=\"Template.csv\" id=\"download\" style=\"display:none\">download</a>\n        </md-grid-tile>\n    </md-grid-list>\n\n    <md-toolbar class=\"md-toolbar-bottom\">\n        <md-slider class=\"m-slider\" (input)=\"onInputChange($event)\"\n            [disabled]=\"disabled\"\n            [max]=\"maxVal\"\n            [min]=\"minVal\"\n            [step]=\"1\">\n        </md-slider>\n        <label class=\"md-label-date\">{{ng_strDate}}</label>\n    </md-toolbar>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service_component__ = __webpack_require__("../../../../../src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__ = __webpack_require__("../../../../../src/app/mainoperation/mainoperation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService;
var self;
var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.ngPortIndex = -1;
        this.tile_Col = 4;
        this.tile_One = 1;
        this.tile_Two = 2;
        this.tile_Tre = 1;
        // transaction table //
        // values for icon information on table header
        this.tbHeader = [
            { index: 0, title: 'portafolio', icon: '' },
            { index: 1, title: 'fecha', icon: '' },
            { index: 2, title: 'fondo', icon: '' },
            { index: 3, title: 'compra o venta', icon: '' },
            { index: 4, title: 'unidades', icon: '' },
            { index: 5, title: 'precio unidad', icon: '' },
            { index: 6, title: 'total pesos', icon: '' },
        ];
        this.tableInfo = [];
        this.tableStore = [];
        // Slider //
        this.ngSliderIndex = 0;
        this.disabled = false;
        this.maxVal = 0;
        this.minVal = 0;
        this.ng_strDate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["h" /* g_GlobalStatic */].startDate);
        ////////////    
        this.ngAllRefresh = 0;
        this.isValid = false;
        self = this;
        HttpService = this.service;
    }
    HomeComponent.prototype.checkStart = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].bIsStartCalc) {
            clearInterval(this.nTimerId);
            __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["c" /* onCalculateData */]();
            HttpService.getTransactionList().subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["b" /* getTransactionData */](response);
                __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["a" /* CalculatePortfolioData */]();
                _this.setSlider();
                _this.onInitSelect();
                _this.onPfnameChanged();
                _this.setEscojePortafolio();
                _this.setEscojeFondo();
                _this.setComprarVender();
                _this.onInitGraphData();
                _this.onRefreshTable();
                _this.checkTable();
                _this.isValid = true;
            });
        }
    };
    ;
    HomeComponent.prototype.setSlider = function () {
        this.minVal = 0;
        this.maxVal = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen - 1;
    };
    HomeComponent.prototype.setEscojePortafolio = function () {
        if (this.ngPortIndex > -1) {
            var VoP = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].stairArray[this.ngSliderIndex];
            var Max = 0;
            var Min = 999999;
            var GoL = 0;
            for (var i = 0; i <= this.ngSliderIndex; i++) {
                if (Max < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].portArray[i])
                    Max = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].portArray[i];
                if (Min > __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].portArray[i])
                    Min = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].portArray[i];
            }
            if (VoP > 0)
                GoL = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].portArray[this.ngSliderIndex] / VoP * 100;
            this.ngScopeVoP = (VoP != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](VoP.toFixed(2)) : 0;
            this.ngScopeGoL = (GoL != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](GoL.toFixed(2)) : 0;
            this.ngScopeMax = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](Max.toFixed(2));
            this.ngScopeMin = (Min != 999999) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](Min.toFixed(2)) : 0;
            this.ngScopeRate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].yearRateArray[this.ngSliderIndex];
        }
        else {
            this.ngScopeVoP = "0.00";
            this.ngScopeGoL = "0.00";
            this.ngScopeMax = "0.00";
            this.ngScopeMin = "0.00";
            this.ngScopeRate = "0.00";
        }
    };
    HomeComponent.prototype.setEscojeFondo = function () {
        var day91 = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day91_return[this.ngSelFondosValue][this.ngSliderIndex] * 100;
        var day182 = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day182_return[this.ngSelFondosValue][this.ngSliderIndex] * 100;
        var day365 = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day365_return[this.ngSelFondosValue][this.ngSliderIndex] * 100;
        var year = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[this.ngSelFondosValue][this.ngSliderIndex] * 1;
        this.ngScopeDay91 = (day91 != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](day91.toFixed(1)) : 0;
        this.ngScopeDay182 = (day182 != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](day182.toFixed(1)) : 0;
        this.ngScopeDay365 = (day365 != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](day365.toFixed(1)) : 0;
        this.ngScopeYear = (year != undefined) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](year.toFixed(1)) : 0;
        if (this.ngScopeDay91 > 0)
            this.ngScopeDay91 = "+" + this.ngScopeDay91;
        if (this.ngScopeDay182 > 0)
            this.ngScopeDay182 = "+" + this.ngScopeDay182;
        if (this.ngScopeDay365 > 0)
            this.ngScopeDay365 = "+" + this.ngScopeDay365;
        if (this.ngScopeYear > 0)
            this.ngScopeYear = "+" + this.ngScopeYear;
    };
    HomeComponent.prototype.setComprarVender = function () {
        this.ngSecondGraphModel = 0;
        this.ngSecondGraphAmount = 0;
        this.ngScopeUnidades = 0;
        this.ngScopeTranPrice = 0;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio.length; i++) {
            if (this.ngPortfolioName == __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].portname) {
                var sum = 0;
                for (var j = 0; j <= this.ngSliderIndex; j++) {
                    sum = sum + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].arrPurchase[this.ngSelFondosValue][j].unidades;
                }
                this.ngScopeUnidades = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](sum.toFixed(6));
                this.ngScopeTranPrice = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].staircase[this.ngSelFondosValue][this.ngSliderIndex].toFixed(2));
                this.ngSecondGraphModel = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].arrPurchase[this.ngSelFondosValue][this.ngSliderIndex].unidades;
                this.ngSecondGraphAmount = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].arrPurchase[this.ngSelFondosValue][this.ngSliderIndex].pesos;
                break;
            }
        }
    };
    HomeComponent.prototype.onInputChange = function (event) {
        var updatedDate = new Date(__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["h" /* g_GlobalStatic */].startDate);
        var selectedDate = updatedDate.setDate(updatedDate.getDate() + event.value);
        this.ng_strDate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](selectedDate);
        __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].nSliderIndex = event.value;
        // Update Slider Index for send Event
        this.ngSliderIndex = event.value;
        // Update Escoje Fondo&Portafolio
        this.setEscojePortafolio();
        this.setEscojeFondo();
        this.setComprarVender();
    };
    HomeComponent.prototype.onInitSelect = function () {
        this.fondos = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            var fondoType = { value: 0, viewValue: '' };
            fondoType.value = i;
            fondoType.viewValue = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].name;
            this.fondos[i] = fondoType;
        }
        this.ngSelFondosValue = this.fondos[0].value;
    };
    HomeComponent.prototype.onInitGraphData = function () {
        var arrOtherNew999Price = [];
        var arrOtherStaircase = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            arrOtherNew999Price[i] = [];
            arrOtherStaircase[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].ulen; j++) {
                arrOtherNew999Price[i][j] = 0;
                arrOtherStaircase[i][j] = 0;
                if (this.ngPortIndex > -1)
                    arrOtherNew999Price[i][j] = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].arrPurchase[i][j].unidades;
                if ((i == this.ngSelFondosValue) && (j == this.ngSliderIndex)) {
                    arrOtherNew999Price[i][j] = this.ngSecondGraphModel;
                }
            }
        }
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            var temp = 0;
            var new999Price = 0;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].ulen; j++) {
                if (arrOtherNew999Price[i][j] != 0) {
                    temp = temp + arrOtherNew999Price[i][j];
                    new999Price = new999Price + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] * arrOtherNew999Price[i][j];
                }
                arrOtherNew999Price[i][j] = temp * __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] - new999Price;
                arrOtherStaircase[i][j] = temp * __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j];
            }
        }
        var arrPortSum = [];
        var arrStairSum = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; i++) {
            var sum1 = 0;
            var sum2 = 0;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                sum1 = sum1 + arrOtherNew999Price[j][i];
                sum2 = sum2 + arrOtherStaircase[j][i];
            }
            arrPortSum.push(sum1);
            arrStairSum.push(sum2);
        }
        __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["e" /* g_AllStatus */].arrPortfolioData = arrPortSum;
        __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["e" /* g_AllStatus */].arrStaircaseData = arrStairSum;
    };
    HomeComponent.prototype.onPfnameChanged = function () {
        __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["e" /* g_AllStatus */].strPfName = this.ngPortfolioName;
        this.ngPortIndex = -1;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].portname == this.ngPortfolioName) {
                this.ngPortIndex = i;
                break;
            }
        }
        this.setEscojePortafolio();
        this.setComprarVender();
        this.onInitGraphData();
    };
    HomeComponent.prototype.onSelectFondos = function () {
        // console.log(this.ngSelFondosValue);
    };
    HomeComponent.prototype.onUnidadesChange = function () {
        this.disabled = true;
        var sum = 0;
        var min = 0;
        var curItemCnt = 0;
        if (this.ngPortIndex > -1) {
            var nItemByDate = 0;
            for (var j = 0; j <= this.ngSliderIndex; j++) {
                sum = sum + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].arrPurchase[this.ngSelFondosValue][j].unidades;
            }
            sum = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](sum, 6);
            curItemCnt = sum;
            min = sum;
            nItemByDate = sum;
            for (var j = this.ngSliderIndex + 1; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; j++) {
                nItemByDate = nItemByDate + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].arrPurchase[this.ngSelFondosValue][j].unidades;
                if (min > nItemByDate) {
                    min = nItemByDate;
                }
            }
        }
        if (this.ngSecondGraphModel >= 0) {
        }
        else {
            if (this.ngSecondGraphModel + curItemCnt < 0) {
                this.ngSecondGraphModel = -curItemCnt;
            }
            if (this.ngSecondGraphModel + min < 0) {
                this.ngSecondGraphModel = -min;
            }
            if (this.ngSecondGraphModel == 0)
                this.ngSecondGraphModel = 0;
        }
        var Pesos = Math.floor(__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[this.ngSelFondosValue].u[this.ngSliderIndex] * this.ngSecondGraphModel * 10000) / 10000;
        this.ngSecondGraphAmount = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](Pesos, 6);
        this.ngScopeUnidades = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](sum + this.ngSecondGraphModel, 6));
        if (this.ngPortIndex > -1) {
            this.ngScopeTranPrice = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */]((__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][this.ngSliderIndex] + this.ngSecondGraphAmount), 2));
        }
        else {
            this.ngScopeTranPrice = this.ngSecondGraphAmount;
        }
        this.onInitGraphData();
    };
    HomeComponent.prototype.onPesosChange = function () {
        this.disabled = true;
        var sum = 0;
        var min = 0;
        var curItemCnt = 0;
        if (this.ngPortIndex > -1) {
            var nItemByDate = 0;
            for (var j = 0; j <= this.ngSliderIndex; j++) {
                sum = sum + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].arrPurchase[this.ngSelFondosValue][j].unidades;
            }
            sum = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](sum, 6);
            curItemCnt = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][this.ngSliderIndex];
            min = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][this.ngSliderIndex];
            nItemByDate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][this.ngSliderIndex];
            for (var j = this.ngSliderIndex + 1; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; j++) {
                if (min > __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][j]) {
                    min = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][j];
                }
            }
        }
        if (this.ngSecondGraphAmount >= 0) {
        }
        else {
            if (this.ngSecondGraphAmount + curItemCnt < 0) {
                this.ngSecondGraphAmount = -curItemCnt;
            }
            if (this.ngSecondGraphAmount + min < 0) {
                this.ngSecondGraphAmount = -min;
            }
            if (this.ngSecondGraphAmount == 0)
                this.ngSecondGraphAmount = 0;
            this.ngSecondGraphAmount = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](this.ngSecondGraphAmount, 6);
        }
        var Unidades = this.ngSecondGraphAmount / __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[this.ngSelFondosValue].u[this.ngSliderIndex];
        this.ngSecondGraphModel = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](Unidades, 6);
        this.ngScopeUnidades = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */](sum + this.ngSecondGraphModel, 6));
        if (this.ngPortIndex > -1) {
            this.ngScopeTranPrice = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["m" /* toFixedDecimal */]((__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[this.ngPortIndex].staircase[this.ngSelFondosValue][this.ngSliderIndex] + this.ngSecondGraphAmount), 2));
        }
        else {
            this.ngScopeTranPrice = this.ngSecondGraphAmount;
        }
        this.onInitGraphData();
    };
    HomeComponent.prototype.onBuy = function () {
        var _this = this;
        if (Math.abs(this.ngSecondGraphModel) == 0)
            return;
        if (this.ngPortfolioName.length < 1)
            return;
        var url = '/buy';
        if (this.ngSecondGraphModel >= 0) {
            // buy item
            url = url + '/' + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[this.ngSelFondosValue].index;
            url = url + '/' + this.ngSecondGraphModel;
            url = url + '/' + 999;
            url = url + '/' + this.ngSecondGraphAmount;
            url = url + '/' + this.ng_strDate;
            url = url + '/' + this.ngPortfolioName;
            url = url + '/' + "deploy_user";
            url = url + '/' + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](new Date());
        }
        else {
            // sell item
            url = url + '/' + 999;
            url = url + '/' + Math.abs(this.ngSecondGraphModel);
            url = url + '/' + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[this.ngSelFondosValue].index;
            url = url + '/' + Math.abs(this.ngSecondGraphAmount);
            url = url + '/' + this.ng_strDate;
            url = url + '/' + this.ngPortfolioName;
            url = url + '/' + "deploy_user";
            url = url + '/' + __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](new Date());
        }
        HttpService.getBuyResponse(url).subscribe(function (response) {
            HttpService.getTransactionList().subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["b" /* getTransactionData */](response);
                __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["a" /* CalculatePortfolioData */]();
                _this.onPfnameChanged();
                _this.setEscojeFondo();
                _this.onRefreshTable();
                _this.checkTable();
                _this.disabled = false;
            });
        });
    };
    HomeComponent.prototype.onClose = function () {
        this.ngSecondGraphModel = 0;
        this.ngSecondGraphAmount = 0;
        this.onInitGraphData();
        this.disabled = false;
        this.setComprarVender();
    };
    // delete transaction
    HomeComponent.prototype.onDelete = function (transaction) {
        var _this = this;
        if (transaction.nFundIndex > -1) {
            HttpService.getDeleteResponse(transaction.id).subscribe(function (response) {
                HttpService.getTransactionList().subscribe(function (response) {
                    __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["b" /* getTransactionData */](response);
                    __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["a" /* CalculatePortfolioData */]();
                    _this.onPfnameChanged();
                    _this.setEscojeFondo();
                    _this.onRefreshTable();
                    _this.checkTable();
                    _this.disabled = false;
                });
            });
            this.tableInfo = [];
        }
    };
    HomeComponent.prototype.onTableReorder = function (index) {
        var strIconName = this.tbHeader[index].icon;
        for (var i = 0; i < this.tbHeader.length; i++) {
            this.tbHeader[i].icon = "";
        }
        var strOrderCmd = "";
        if (strIconName == "") {
            this.tbHeader[index].icon = "arrow_drop_down";
            strOrderCmd = "down";
        }
        else if (strIconName == "arrow_drop_down") {
            this.tbHeader[index].icon = "arrow_drop_up";
            strOrderCmd = "up";
        }
        else if (strIconName == "arrow_drop_up") {
            this.tbHeader[index].icon = "arrow_drop_down";
            strOrderCmd = "down";
        }
        this.sortTable(index, strOrderCmd);
    };
    HomeComponent.prototype.sortTable = function (index, strOrderCmd) {
        for (var i = 0; i < this.tableInfo.length; i++) {
            this.tableInfo[i].Portarray.sort(function (a, b) {
                var keyA = a[Object.keys(a)[index]], keyB = b[Object.keys(a)[index]];
                // Compare the 2 dates
                if (keyA < keyB)
                    return (strOrderCmd == "down") ? -1 : 1;
                if (keyA > keyB)
                    return (strOrderCmd == "down") ? 1 : -1;
                return 0;
            });
        }
    };
    HomeComponent.prototype.onRefreshTable = function () {
        var transactions = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction;
        this.tableInfo = [];
        this.tableStore = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].PortfolioList.length; i++) {
            var listOfSaverTransaction = [];
            for (var j = 0; j < transactions.length; j++) {
                if (__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].PortfolioList[i].portfolio_id != transactions[j].strPortID)
                    continue;
                listOfSaverTransaction.push(transactions[j]);
            }
            if (listOfSaverTransaction.length > 0) {
                var eachObj = { "PortIndex": 0, "PortStatus": "Show", "PortIcon": "add", "Portname": listOfSaverTransaction[0].strPortID, "Portarray": listOfSaverTransaction };
                this.tableInfo.push(eachObj);
                this.tableStore.push(eachObj);
            }
        }
        for (var i = 0; i < this.tableStore.length; i++) {
            this.tableInfo[i].PortIndex = i;
            this.tableStore[i].PortIndex = i;
        }
        this.tbHeader[1].icon = "";
        this.onTableReorder(1);
    };
    HomeComponent.prototype.checkTable = function () {
        for (var i = 0; i < this.tableInfo.length; i++) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                var eachArray = [];
                for (var k = 0; k < this.tableInfo[i].Portarray.length; k++) {
                    if (this.tableInfo[i].Portarray[k].nFundIndex == j)
                        eachArray.push(this.tableInfo[i].Portarray[k]);
                }
                if (eachArray.length > 0) {
                    for (var k = 0; k < eachArray.length; k++) {
                        eachArray[k].deletable = false;
                        var sum = 0;
                        for (var n = 0; n < eachArray.length; n++) {
                            if (k == n)
                                continue;
                            var ItemCnt = eachArray[n].nItemCnt;
                            sum = sum + ItemCnt;
                            if (sum < 0) {
                                eachArray[k].deletable = true;
                                break;
                            }
                        }
                    }
                }
            }
        }
    };
    HomeComponent.prototype.onShowHide = function (index, bIsDraw) {
        this.tableInfo = [];
        this.tableStore[index].PortStatus = (this.tableStore[index].PortStatus == "Show") ? "Hide" : "Show";
        this.tableStore[index].PortIcon = (this.tableStore[index].PortStatus == "Show") ? "add" : "remove";
        for (var i = 0; i < this.tableStore.length; i++) {
            this.tableInfo.push(Object.assign({}, this.tableStore[i]));
            if (this.tableStore[i].PortStatus != "Show") {
                __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].showhide = 0;
                this.tableInfo[i].Portarray = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio[i].showhide = 1;
            }
        }
        if (bIsDraw == 1)
            this.ngAllRefresh = this.ngAllRefresh + 1;
    };
    // parsing excel data
    HomeComponent.prototype.onParsing = function (data) {
        var _this = this;
        var postData = [];
        for (var i = 0; i < data.length; i++) {
            var fundObj = data[i]["fondo"];
            if ((data[i]["año"] == undefined) || (data[i]["año"] == ""))
                break;
            if ((data[i]["mes"] == undefined) || (data[i]["mes"] == ""))
                break;
            if ((data[i]["día"] == undefined) || (data[i]["día"] == ""))
                break;
            if ((data[i]["fondo"] == undefined) || (data[i]["fondo"] == ""))
                break;
            if ((data[i]["compra/-venta"] == undefined) || (data[i]["compra/-venta"] == ""))
                break;
            if ((data[i]["portafolio"] == undefined) || (data[i]["portafolio"] == ""))
                break;
            var strFundName = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["c" /* GetFundIndexByKey */](fundObj);
            if (strFundName == undefined)
                break;
            var nFundID = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["b" /* GetFundIndex */](strFundName);
            var strDate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](new Date(data[i]["año"] + "-" + data[i]["mes"] + "-" + data[i]["día"]));
            var strPortName = data[i]["portafolio"];
            var nItemCnt = data[i]["compra/-venta"] * 1;
            var nSliderIndex = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["a" /* GetDateIndex */](__WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].udate, strDate);
            var nItemValue = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundID].u[nSliderIndex];
            var strCurDate = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["d" /* convertDate */](new Date());
            var nTotal = __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["k" /* multiple */](Math.abs(nItemCnt), nItemValue);
            var objParam = { "fund_id_bought": 0, "units_bought": 0, "fund_id_sold": 0, "units_sold": 0, "date_value_transaction": "", "portfolio_id": 0, "saver_id": "", "nowDate": "" };
            objParam.fund_id_bought = (nItemCnt >= 0) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundID].index : 999;
            objParam.units_bought = Math.abs(nItemCnt);
            objParam.fund_id_sold = (nItemCnt >= 0) ? "999" : __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundID].index;
            objParam.units_sold = nTotal;
            objParam.date_value_transaction = strDate;
            objParam.portfolio_id = strPortName;
            objParam.saver_id = "deploy_user";
            objParam.nowDate = strCurDate;
            var url = "/buy/";
            var cond1 = (nItemCnt >= 0) ? __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundID].index : 999;
            url = url + cond1 + "/";
            url = url + Math.abs(nItemCnt) + "/";
            var cond2 = (nItemCnt >= 0) ? "999" : __WEBPACK_IMPORTED_MODULE_2__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[nFundID].index;
            url = url + cond2 + "/";
            url = url + nTotal + "/";
            url = url + strDate + "/";
            url = url + this.ngPortfolioName + "/";
            url = url + "deploy_user" + "/";
            url = url + strCurDate;
            postData.push(objParam);
        }
        if (postData.length > 0) {
            HttpService.uploadBuyData(postData).subscribe(function (response) {
                HttpService.getPortfolioList().subscribe(function (response) {
                    HttpService.getTransactionList().subscribe(function (response) {
                        __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["b" /* getTransactionData */](response);
                        __WEBPACK_IMPORTED_MODULE_3__mainoperation_mainoperation_component__["a" /* CalculatePortfolioData */]();
                        _this.onPfnameChanged();
                        _this.setEscojeFondo();
                        _this.onRefreshTable();
                        _this.checkTable();
                        _this.disabled = false;
                    });
                });
            });
            this.tableInfo = [];
        }
    };
    HomeComponent.prototype.onChangeFilePath = function ($event) {
        this.readCSVFile($event.target);
    };
    HomeComponent.prototype.readCSVFile = function (inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            // you can perform an action with readed data here
            HttpService.sendExcelData(myReader.result).subscribe(function (response) {
                self.onParsing(response);
            });
        };
        myReader.readAsText(file);
    };
    // upload transaction
    HomeComponent.prototype.onUpload = function () {
        document.getElementById("file").click();
    };
    // download transaction
    HomeComponent.prototype.onDownload = function () {
        document.getElementById("download").click();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        HttpService.getDatabaseInfo();
        this.nTimerId = setInterval(function () {
            _this.checkStart();
        }, 100);
        this.onResize(null);
        this.ngScopeDay91 = "0.0";
        this.ngScopeDay182 = "0.0";
        this.ngScopeDay365 = "0.0";
        this.ngScopeYear = "0.0";
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.nTimerId) {
            clearInterval(this.nTimerId);
        }
    };
    HomeComponent.prototype.onResize = function (event) {
        this.ngWidth = window.innerWidth;
        if (window.innerWidth > 1280) {
            this.tile_Col = 4;
            this.tile_One = 1;
            this.tile_Two = 2;
            this.tile_Tre = 1;
        }
        else {
            this.tile_Col = 1;
            this.tile_One = 1;
            this.tile_Two = 1;
            this.tile_Tre = 1;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__service_service_component__["a" /* ServiceComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_service_component__["a" /* ServiceComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_service_component__["a" /* ServiceComponent */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-input-container>\n  <input mdInput placeholder=\"Favorite food\" value=\"Sushi\">\n</md-input-container>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainoperation/mainoperation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = onCalculateData;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTransactionData;
/* harmony export (immutable) */ __webpack_exports__["a"] = CalculatePortfolioData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");

function onCalculateData() {
    ///////////////////////////////////////////////////////////////////
    //////////////////////// Filter Fund Names ////////////////////////
    ///////////////////////////////////////////////////////////////////
    var n = [];
    n.push([]);
    var fundnames = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].FundHeader;
    for (var i = 0; i < fundnames.length; i++) {
        fundnames[i].fund_id_alias_fund = fundnames[i].fund_id_alias_fund * 1;
    }
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++) {
        n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]] = [];
        for (var j = 0; j < fundnames.length; j++) {
            if (fundnames[j].fund_id_alias_fund == __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]) {
                n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0] = fundnames[j];
                break;
            }
        }
    }
    ;
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    ////////////////////// Filter Fund Pricess ////////////////////////
    ///////////////////////////////////////////////////////////////////
    var f = [];
    var rows = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].RawFundPriceList;
    for (var i = 0; i < rows.length; i++) {
        rows[i].fund_id_pr_fund = rows[i].fund_id_pr_fund * 1;
        rows[i].pr_fund = rows[i].pr_fund * 1;
    }
    // loop to create fund-filtered arrays
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++) {
        f[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]] = [];
        for (var j = 0; j < rows.length; j++) {
            if (rows[j].fund_id_pr_fund == __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]) {
                f[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]].push(rows[j]);
            }
        }
    }
    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    var arru = [];
    var arrudate = [];
    var u = 0;
    var dt;
    // nested loop to create array of funds and fund calculations
    for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; j++) {
        arru.push([]);
        arrudate.push([]);
        for (var i = 0; i < f[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[j]].length; i++) {
            u = f[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[j]][i].pr_fund;
            dt = new Date(f[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[j]][i].date_value_pr_fund.replace(/-/g, '\/'));
            arru[j].push(u);
            arrudate[j].push(dt);
        }
    }
    // filling listOfPriceFund array with each fund
    var maxDate = new Date('2000-01-01');
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++) {
        var item = { 'name': '', 'u': '', 'udate': '', 'ulen': 0, 'index': 0, 'dict': [] };
        item.name = n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias;
        item.u = arru[i];
        item.udate = arrudate[i];
        item.ulen = item.u.length;
        item.index = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i];
        if ((n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_1 != null) && (n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_1 != ""))
            item.dict.push(n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_1);
        if ((n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_2 != null) && (n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_2 != ""))
            item.dict.push(n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_2);
        if ((n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_3 != null) && (n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_3 != ""))
            item.dict.push(n[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[i]][0].alias_match_3);
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i] = item;
        // get last date of the array
        var tmpDate = new Date(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].udate[__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].udate.length - 1]);
        if (tmpDate.getTime() - maxDate.getTime() > 0)
            maxDate = tmpDate;
    }
    // Create longest date array
    var maxArray = [];
    var firstDate = new Date(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].startDate.replace(/-/g, '\/'));
    for (var i = 0; i < 99999; i++) {
        var seqDate = new Date(firstDate.getTime() + i * 60 * 60 * 24 * 1000);
        if (seqDate > maxDate)
            break;
        maxArray[i] = seqDate;
    }
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++) {
        var dataArr = [];
        var orgDataIndex = 0;
        for (var j = 0; j < maxArray.length; j++) {
            var orgDate = new Date(maxArray[j]);
            var curDate = new Date(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].udate[orgDataIndex]);
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["j" /* isSameDate */](orgDate, curDate) == true) {
                dataArr[j] = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[orgDataIndex];
                orgDataIndex++;
            }
            else {
                dataArr[j] = 0;
            }
        }
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].udate = maxArray;
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].ulen = maxArray.length;
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u = dataArr;
    }
    // calculate gain or less
    var arr1dr = [];
    var arr1dl = [];
    var arr7dl = [];
    var arr91dr = [];
    var arr182dr = [];
    var arr365dr = [];
    var arryr = [];
    var arrisr = [];
    var arresr = [];
    var arr1drdate = [];
    var arr1dldate = [];
    var arr7dldate = [];
    var arr91drdate = [];
    var arr182drdate = [];
    var arr365drdate = [];
    var arryrdate = [];
    var arrisrdate = [];
    var arresrdate = [];
    var arrStartValue = [];
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++)
        arrStartValue[i] = 0;
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; i++) {
        arr1drdate[i] = (maxArray);
        arr1dldate[i] = (maxArray);
        arr7dldate[i] = (maxArray);
        arr91drdate[i] = (maxArray);
        arr182drdate[i] = (maxArray);
        arr365drdate[i] = (maxArray);
        arryrdate[i] = (maxArray);
        arrisrdate[i] = (maxArray);
        arresrdate[i] = (maxArray);
        arr1dr[i] = [];
        arr1dl[i] = [];
        arr7dl[i] = [];
        arr91dr[i] = [];
        arr182dr[i] = [];
        arr365dr[i] = [];
        arryr[i] = [];
        arrisr[i] = [];
        arresr[i] = [];
        var day1_return = 0;
        var day1_loss = 0;
        var day7_loss = 0;
        var day91_return = 0;
        var day182_return = 0;
        var day365_return = 0;
        var year_return = 0;
        var start_return = 0;
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u.length; j++) {
            if (arrStartValue[i] == 0) {
                if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] != 0)
                    arrStartValue[i] = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j];
            }
            var curVal = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j];
            if (j == 0) {
                day1_return = 0;
            }
            else {
                day1_return = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 1] == 0) ? 0 : (curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 1]) - 1;
            }
            ;
            if (j == 0) {
                day1_loss = 0;
            }
            else {
                day1_loss = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 1] == 0) ? 0 : Math.min((curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 1]) - 1, 0);
            }
            ;
            if (j < 7) {
                day7_loss = 0;
            }
            else {
                day7_loss = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 7] == 0) ? 0 : Math.min((curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 7]) - 1, 0);
            }
            ;
            if (j < 91) {
                day91_return = 0;
            }
            else {
                day91_return = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 91] == 0) ? 0 : (curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 91]) - 1;
            }
            ;
            if (j < 182) {
                day182_return = 0;
            }
            else {
                day182_return = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 182] == 0) ? 0 : (curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 182]) - 1;
            }
            ;
            if (j < 365) {
                day365_return = 0;
            }
            else {
                day365_return = (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 365] == 0) ? 0 : (curVal / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 365]) - 1;
            }
            ;
            if (j == 0) {
                year_return = 0;
            }
            else {
                year_return = (arrStartValue[i] == 0) ? 0 : (curVal / arrStartValue[i]) - 1;
            }
            ;
            if (j == 0) {
                start_return = (arrStartValue[i] != 0) ? 0 : -1;
            }
            else {
                start_return = (arrStartValue[i] == 0) ? -1 : (curVal / arrStartValue[i]) - 1;
            }
            ;
            arr1dr[i][j] = (day1_return);
            arr1dl[i][j] = (day1_loss);
            arr7dl[i][j] = (day7_loss);
            arr91dr[i][j] = (day91_return);
            arr182dr[i][j] = (day182_return);
            arr365dr[i][j] = (day365_return);
            arryr[i][j] = (year_return);
            arrisr[i][j] = (start_return + 1);
            arresr[i][j] = (start_return);
        }
    }
    // fill day return arrays
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day1_return = arr1dr;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day1_loss = arr1dl;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day7_loss = arr7dl;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day91_return = arr91dr;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day182_return = arr182dr;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.day365_return = arr365dr;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.year_return = arryr;
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return = arrisr;
    var tmpArr = [];
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i] = [];
        tmpArr[i] = [];
        var cnt = 0;
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return[i].length; j++) {
            tmpArr[i][j] = cnt;
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return[i][j] != 0)
                cnt++;
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return[i][j] == 0) {
                __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] = 0;
            }
            else {
                if (tmpArr[i][j] < 366) {
                    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return[i][j] - 1;
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] = Math.pow(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.start_return[i][j], (365.25 / tmpArr[i][j])) - 1;
                }
            }
            __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["m" /* toFixedDecimal */](__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] * 100, 2);
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] == "-0.00")
                __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllReturns.newstart_return[i][j] = "0.00";
        }
    }
}
function getTransactionData(response) {
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].TransactionList = [];
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].TransactionList = response;
    var TransactionList = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].TransactionList;
    for (var i = 0; i < TransactionList.length; i++) {
        TransactionList[i].fund_id_bought = TransactionList[i].fund_id_bought * 1;
        TransactionList[i].fund_id_sold = TransactionList[i].fund_id_sold * 1;
        TransactionList[i].transaction_id = TransactionList[i].transaction_id * 1;
        TransactionList[i].units_bought = TransactionList[i].units_bought * 1;
    }
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction = [];
    for (var i = 0; i < TransactionList.length; i++) {
        var transDate = new Date(TransactionList[i].date_value_transaction.replace(/-/g, '\/'));
        var startDate = new Date(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].startDate);
        if (startDate.getTime() - transDate.getTime() > 0)
            continue;
        var tempArr = { 'strPortID': '', 'tDate': '', 'strFundName': '', 'strBoS': '', 'nItemCnt': 0, 'fItemValue': 0, 'fTotal': 0, 'id': '', 'strSaverID': '', 'nFundIndex': -1, 'str_nItemCnt': '0', 'str_fItemValue': '0', 'str_fTotal': '0' };
        var transactionID = TransactionList[i].transaction_id;
        var strFundName = "";
        var nFundIndex = -1;
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex.length; j++) {
            var fundID = (TransactionList[i].fund_id_bought == 999) ? TransactionList[i].fund_id_sold : TransactionList[i].fund_id_bought;
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["h" /* g_GlobalStatic */].arrPortIndex[j] == fundID) {
                strFundName = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[j].name;
                nFundIndex = j;
                break;
            }
        }
        tempArr.id = transactionID;
        tempArr.strSaverID = TransactionList[i].transaction_saver_id;
        tempArr.strPortID = TransactionList[i].transaction_portfolio_id;
        tempArr.strFundName = strFundName;
        tempArr.nFundIndex = nFundIndex;
        tempArr.tDate = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["d" /* convertDate */](TransactionList[i].date_value_transaction.replace(/-/g, '\/'));
        tempArr.strBoS = (TransactionList[i].fund_id_bought == 999) ? "Venta" : "Compra";
        tempArr.nItemCnt = TransactionList[i].units_bought;
        tempArr.fItemValue = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["m" /* toFixedDecimal */]((TransactionList[i].units_sold / TransactionList[i].units_bought), 6);
        tempArr.fTotal = parseFloat(TransactionList[i].units_sold);
        tempArr.str_nItemCnt = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["l" /* numberWithCommas */](tempArr.nItemCnt);
        tempArr.str_fItemValue = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["l" /* numberWithCommas */](tempArr.fItemValue);
        tempArr.str_fTotal = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["l" /* numberWithCommas */](__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["m" /* toFixedDecimal */](tempArr.fTotal, 2));
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction.push(tempArr);
    }
}
function CalculatePortfolioData() {
    __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio = [];
    for (var n = 0; n < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].PortfolioList.length; n++) {
        var PortfolioID = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].PortfolioList[n].portfolio_id;
        var response = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction[i].strPortID == PortfolioID)
                response.push(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["g" /* g_FundParent */].arrAllTransaction[i]);
        }
        if (response.length == 0)
            continue;
        // init array
        var arrOtherNew999Price = [];
        var arrOtherStaircase = [];
        var arrOtherWeight = [];
        var arrOtherIndex = [];
        var arrItemCnt = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            arrOtherNew999Price[i] = [];
            arrOtherStaircase[i] = [];
            arrOtherWeight[i] = [];
            arrOtherIndex[i] = [];
            arrItemCnt[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u.length; j++) {
                arrOtherNew999Price[i][j] = 0;
                arrOtherStaircase[i][j] = 0;
                arrOtherWeight[i][j] = 0;
                arrOtherIndex[i][j] = 0;
                arrItemCnt[i][j] = 0;
            }
        }
        // sorting by date_value_transactio field of the database
        response.sort(function (a, b) {
            var keyA = new Date(a.tDate), keyB = new Date(b.tDate);
            // Compare the 2 dates
            if (keyA < keyB)
                return -1;
            if (keyA > keyB)
                return 1;
            return 0;
        });
        // calculate data and store into arrOtherNew999Price
        for (var i = 0; i < response.length; i++) {
            if (response[i].strBoS == "Venta") {
                response[i].nItemCnt = -response[i].nItemCnt;
            }
            var fundIndex = response[i].nFundIndex;
            var transactionDate = new Date(response[i].tDate.replace(/-/g, '\/'));
            var dateIndex = -1;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; j++) {
                var curDate = new Date(__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].udate[j]);
                if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["j" /* isSameDate */](curDate, transactionDate) == true) {
                    dateIndex = j;
                    break;
                }
            }
            arrOtherNew999Price[fundIndex][dateIndex] = response[i].nItemCnt;
            // console.log("index = " + fundIndex);
            // console.log("date index = " + dateIndex);
            // console.log(response[i]);
        }
        for (var i = 0; i < arrOtherNew999Price.length; i++) {
            var temp = 0;
            var new999Price = 0;
            for (var j = 0; j < arrOtherNew999Price[i].length; j++) {
                if (arrOtherNew999Price[i][j] != 0) {
                    temp = temp + arrOtherNew999Price[i][j];
                    new999Price = new999Price + __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] * arrOtherNew999Price[i][j];
                }
                arrItemCnt[i][j] = temp;
                arrOtherNew999Price[i][j] = temp * __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] - new999Price;
                arrOtherStaircase[i][j] = temp * __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j];
            }
        }
        var arrPortSum = [];
        var arrStairSum = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; i++) {
            var sum = 0;
            var sum1 = 0;
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                sum = sum + arrOtherNew999Price[j][i];
                sum1 = sum1 + arrOtherStaircase[j][i];
            }
            arrPortSum.push(sum);
            arrStairSum.push(sum1);
        }
        // calculate weight
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; i++) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                arrOtherWeight[j][i] = (arrOtherStaircase[j][i] == 0) ? 0 : arrOtherStaircase[j][i] / arrStairSum[i];
                arrOtherWeight[j][i] = arrOtherWeight[j][i];
            }
        }
        // calculate each index
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].ulen; j++) {
                if (j > 0) {
                    if ((arrOtherStaircase[i][j - 1] == 0) && (arrOtherStaircase[i][j] == 0)) {
                        arrOtherIndex[i][j] = 0;
                    }
                    else {
                        if ((arrOtherStaircase[i][j - 1] == 0) && (arrOtherStaircase[i][j] != 0)) {
                            arrOtherIndex[i][j] = 1;
                        }
                        else {
                            arrOtherIndex[i][j] = __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j] / __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[i].u[j - 1];
                        }
                    }
                }
                else {
                    arrOtherIndex[i][j] = (arrOtherStaircase[i][j] != 0) ? 1 : 0;
                }
            }
        }
        // calculate index total
        var indexArray = [];
        var indexTmpArray = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; i++) {
            var sum = 0;
            if (i > 0) {
                if ((arrStairSum[i] == 0) && (arrStairSum[i - 1] == 0)) {
                    sum = 0;
                }
                else {
                    if ((arrStairSum[i] != 0) && (arrStairSum[i - 1] == 0)) {
                        sum = 1;
                    }
                    else {
                        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; j++) {
                            // console.log("p1 : " + arrOtherIndex[j][i] + " p2 : " + arrOtherWeight[j][i-1] + " p3 : " + indexTmpArray[indexTmpArray.length - 1]);
                            sum = sum + arrOtherIndex[j][i] * arrOtherWeight[j][i - 1] * indexTmpArray[indexTmpArray.length - 1];
                        }
                    }
                }
            }
            else {
                sum = (arrStairSum[i] == 0) ? 0 : 1;
            }
            indexTmpArray.push(sum);
            indexArray.push(sum);
        }
        // console.log(indexArray);
        // console.log(arrOtherWeight);
        // calculate days from total
        var daysArray = [];
        var incDepth = 0;
        for (var i = 0; i < indexArray.length; i++) {
            daysArray[i] = (i > 0) ? daysArray[i - 1] + incDepth : 0;
            if ((incDepth == 0) && (indexArray[i] == 1))
                incDepth = 1;
        }
        // calculate yearly rate
        var yearRateArray = [];
        for (var i = 0; i < indexArray.length; i++) {
            if (i == 0)
                yearRateArray[i] = 0;
            else {
                if (indexArray[i - 1] == 0)
                    yearRateArray[i] = 0;
                else {
                    if (daysArray[i] < 365)
                        yearRateArray[i] = indexArray[i] - 1;
                    else {
                        yearRateArray[i] = Math.pow(indexArray[i], (365.25 / daysArray[i])) - 1;
                    }
                }
            }
            yearRateArray[i] = (yearRateArray[i] * 100).toFixed(2);
            if (yearRateArray[i] == "-0.00")
                yearRateArray[i] = "0.00";
        }
        // console.log(arrOtherStaircase);
        // console.log(indexArray);
        // console.log(arrOtherWeight);
        // console.log(arrOtherIndex);
        // for (var i = 0; i < indexArray.length; i ++){
        //     console.log((i+3) + " : " + arrOtherIndex[3][i] + " : " + arrOtherIndex[4][i] + " : " + arrOtherIndex[5][i] + " : " + arrOtherIndex[9][i] + " :: " + indexArray[i]);
        //     console.log((i+3) + " : " + arrOtherWeight[3][i] + " : " + arrOtherWeight[4][i] + " : " + arrOtherWeight[5][i] + " : " + arrOtherWeight[9][i]);
        // }
        // calculate 91DayReturn and min7DayLoss for portfolio array
        var day91Arr = [];
        var day7LossArr = [];
        for (var i = 0; i < indexArray.length; i++) {
            if (i < 7) {
                day7LossArr[i] = 0;
            }
            else {
                day7LossArr[i] = (indexArray[i - 7] == 0) ? 0 : Math.min((indexArray[i] / indexArray[i - 7]) - 1, 0);
            }
            ;
            if (i < 91) {
                day91Arr[i] = 0;
            }
            else {
                day91Arr[i] = (indexArray[i - 91] == 0) ? 0 : (indexArray[i] / indexArray[i - 91]) - 1;
            }
            ;
        }
        var arrPurchase = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund.length; i++) {
            arrPurchase[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; j++) {
                arrPurchase[i][j] = { "unidades": 0, "pesos": 0 };
            }
        }
        for (var i = 0; i < response.length; i++) {
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].ulen; j++) {
                var orgDate = new Date(response[i].tDate.replace(/-/g, '\/'));
                if (__WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["j" /* isSameDate */](orgDate, __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["f" /* g_DatabaseInfo */].ListofPriceFund[0].udate[j])) {
                    arrPurchase[response[i].nFundIndex][j].unidades = response[i].nItemCnt;
                    arrPurchase[response[i].nFundIndex][j].pesos = (response[i].strBoS == "Venta") ? -parseFloat(response[i].fTotal) : parseFloat(response[i].fTotal);
                }
            }
        }
        var objOther = { "portname": "", "new999Price": [], "staircase": [], "portArray": [], "stairArray": [], "itemArray": [], "indexArray": [], "weightArray": [], "arrPurchase": [], "day91Array": [], "day7Array": [], "yearRateArray": [], "showhide": 1 };
        objOther.portname = PortfolioID;
        objOther.new999Price = arrOtherNew999Price;
        objOther.staircase = arrOtherStaircase;
        objOther.portArray = arrPortSum;
        objOther.stairArray = arrStairSum;
        objOther.itemArray = arrItemCnt;
        objOther.indexArray = indexArray;
        objOther.weightArray = arrOtherWeight;
        objOther.arrPurchase = arrPurchase;
        objOther.day91Array = day91Arr;
        objOther.day7Array = day7LossArr;
        objOther.yearRateArray = yearRateArray;
        __WEBPACK_IMPORTED_MODULE_0__globals_globals_component__["i" /* g_Portfolios */].arrDataByPortfolio.push(objOther);
    }
}
//# sourceMappingURL=mainoperation.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__ = __webpack_require__("../../../../../src/app/globals/globals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var urlHeader = "";
var ServiceComponent = (function () {
    function ServiceComponent(http) {
        this.http = http;
    }
    Object.defineProperty(ServiceComponent.prototype, "b_IsGetSuccess", {
        set: function (newValue) {
            if (newValue == true) {
                this.n_ResponseSuccess++;
                if (this.n_ResponseSuccess == 4) {
                    __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["f" /* g_DatabaseInfo */].bIsStartCalc = true;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // Get Database Information
    ServiceComponent.prototype.getDatabaseInfo = function () {
        var _this = this;
        this.n_ResponseSuccess = 0;
        this.getFundHeader().subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["f" /* g_DatabaseInfo */].FundHeader = response;
            _this.b_IsGetSuccess = true;
        });
        this.getFundPriceList(__WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["h" /* g_GlobalStatic */].startDate).subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["f" /* g_DatabaseInfo */].RawFundPriceList = response;
            _this.b_IsGetSuccess = true;
        });
        this.getPortfolioList().subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["f" /* g_DatabaseInfo */].PortfolioList = response;
            _this.b_IsGetSuccess = true;
        });
        this.getTransactionList().subscribe(function (response) {
            __WEBPACK_IMPORTED_MODULE_3__globals_globals_component__["f" /* g_DatabaseInfo */].TransactionList = response;
            _this.b_IsGetSuccess = true;
        });
    };
    // Get Fund Names and IDs
    ServiceComponent.prototype.getFundHeader = function () {
        return this.http.get(urlHeader + '/fundheader').map(function (res) { return res.json(); });
    };
    // Get Price Fund List
    ServiceComponent.prototype.getFundPriceList = function (startDate) {
        return this.http.get(urlHeader + '/ret/' + startDate).map(function (res) { return res.json(); });
    };
    // Get Portfolio List
    ServiceComponent.prototype.getPortfolioList = function () {
        return this.http.get(urlHeader + '/userPortList').map(function (res) { return res.json(); });
    };
    // Get Transaction List
    ServiceComponent.prototype.getTransactionList = function () {
        return this.http.get(urlHeader + '/transaction/all').map(function (res) { return res.json(); });
    };
    // Get Buy Response
    ServiceComponent.prototype.getBuyResponse = function (buyUrl) {
        return this.http.get(urlHeader + buyUrl).map(function (res) { return res.json(); });
    };
    // Get Delete Response
    ServiceComponent.prototype.getDeleteResponse = function (deleteID) {
        return this.http.get(urlHeader + '/delete/' + deleteID).map(function (res) { return res.json(); });
    };
    // Send Excel Data
    ServiceComponent.prototype.sendExcelData = function (data) {
        return this.http.post(urlHeader + '/getExcel', { user: data }).map(function (res) { return res.json(); });
    };
    ServiceComponent.prototype.uploadBuyData = function (data) {
        return this.http.post(urlHeader + '/buy', { user: data }).map(function (res) { return res.json(); });
    };
    return ServiceComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ServiceComponent.prototype, "b_IsGetSuccess", null);
ServiceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ServiceComponent);

var _a;
//# sourceMappingURL=service.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map