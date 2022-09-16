function display(a:number,b:number):number;

function display(a:string,b:string):string;

function display(a:string,b:string,c:string):string;

function display(a:any,b:any):any{
    return a+b;
}


console.log(display(10,20));
console.log(display("hello","world"));
console.log(display("welcome","to","Typescript"));



/*class Student
{

    //data fields
    Rollno:number;
    Name:string;

    //constructor

    constructor(_Rollno:number,_Name:string)
    {
    this.Rollno=_Rollno;
    this.Name=_Name;
    }

    //methods
    display():void{
        console.log("Roll Number :" +this.Rollno);
        console.log("Student Name :" +this.Name);
    }

    


}

//creating objects

var obj1=new Student(101,'Jeni');
var obj2=new Student(102,'Amy');
var obj3=new Student(103,'Mitra');


//Method call

obj1.display();
obj2.display();
obj3.display();

*/