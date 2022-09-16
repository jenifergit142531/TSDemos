/*class Company{

    readonly
    compname:string="abc.com";
}

let comp=new Company();
comp.compname="xyz.com";
console.log(comp.compname);
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*class Person
{
    msg:string;

    constructor(message:string)
    {
        this.msg=message;
    }

 @validate

 show(@required name:string)
 {
    return "hello"+name+this.msg;
 }


}
*/
function first() {
    console.log("First() factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("First() called");
    };
}
function second() {
    console.log("second() factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second() called");
    };
}
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.method = function () { };
    __decorate([
        first(),
        second()
    ], Example.prototype, "method");
    return Example;
}());
