"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../services/cars.service.ts" />
var core_1 = require("@angular/core");
var cars_service_1 = require("../services/cars.service");
var CarsComponent = (function () {
    function CarsComponent(_carsService) {
        this._carsService = _carsService;
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.getCarImages();
    };
    CarsComponent.prototype.getCarImages = function () {
        var _this = this;
        this._carsService.getCarImages().subscribe(function (response) { return _this.carImages = response; }, function (error) { return console.error(error); }, function () { return console.info(_this.carImages); });
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'of-car',
        templateUrl: './app/cars.component/cars.component.html',
        styleUrls: ['./app/Cars.Component/Cars.Component.css'],
        providers: [cars_service_1.CarsService]
    }),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=cars.component.js.map