class Car
{
        color:string;
        constructor(_color:string)
        {
            this.color=_color;

        }
   
}
class Audi extends Car{
    price:number;
    constructor(color:string,_price:number)
    {
       super(color);
       this.price=_price;
    }
    display():void{
        console.log("Colour of Audi is " +this.color);
        console.log("Price of Audi is " +this.price);
    }

}

class Volkswagen extends Car{

    modelYear : number;
    constructor(color:string,_modelYear:number)
    {
       super(color);
       this.modelYear=_modelYear;
    }
    display():void{
        console.log("Colour of Volkswagen is " +this.color);
        console.log("Price of Volkswagen is " +this.modelYear);
    }

}


let a1=new Audi("black",8500000);
a1.display();

let v1=new Volkswagen("Red Polo",2022);
v1.display();