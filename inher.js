var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(_color) {
        this.color = _color;
    }
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(color, _price) {
        var _this = _super.call(this, color) || this;
        _this.price = _price;
        return _this;
    }
    Audi.prototype.display = function () {
        console.log("Colour of Audi is " + this.color);
        console.log("Price of Audi is " + this.price);
    };
    return Audi;
}(Car));
var Volkswagen = /** @class */ (function (_super) {
    __extends(Volkswagen, _super);
    function Volkswagen(color, _modelYear) {
        var _this = _super.call(this, color) || this;
        _this.modelYear = _modelYear;
        return _this;
    }
    Volkswagen.prototype.display = function () {
        console.log("Colour of Volkswagen is " + this.color);
        console.log("Price of Volkswagen is " + this.modelYear);
    };
    return Volkswagen;
}(Car));
var a1 = new Audi("black", 8500000);
a1.display();
var v1 = new Volkswagen("Red Polo", 2022);
v1.display();
