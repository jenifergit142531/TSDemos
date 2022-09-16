
/*class Company{

    readonly
    compname:string="abc.com";
}

let comp=new Company();
comp.compname="xyz.com";
console.log(comp.compname);
*/

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

function first()
{
console.log("First() factory evaluated");
return function(target:any,propertyKey:string,descriptor:PropertyDescriptor)
{
console.log("First() called");
};
}
function second()
{
    console.log("second() factory evaluated");
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor)
    {
    console.log("second() called");
    };
}

class Example{
    @first()
    @second()
    method(){}
}




