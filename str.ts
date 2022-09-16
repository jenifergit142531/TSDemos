function spreadops()
{
    const arr1=["volkwagen","benz","bmw"];
    const arr2=["Nexa","Tata","Kia"];
    const arr3=[...arr1,...arr2];
    console.log(arr3);
}

spreadops();


/* REST OPERATOR
function getAverage(...args:number[])
{
    var avg=args.reduce(function(a,b){
        return a+b;
    },0);

    return avg;
}

console.log("Average of 3 numbers " + getAverage(10,20,30));
console.log("Average of 5 numbers " + getAverage(10,20,30,40,50));

console.log("Average of 7 numbers " + getAverage(10,20,30,40,50,60,70));


*/ 







/*type Employeename = 'jeni'|'caty'|'rahul';

let str:Employeename;

if(str='jeni')
{
    console.log("Works as Tech manager");
};

if(str='caty')
{
    console.log("Works as Account manager");
};
*/



/* string methods
let str1=new String('Jenifer');
let comp:string="abccompany";

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charAt(3));
console.log(str1.substring(2,5));

//let Joinstr:string=str1+"works in" +comp;
//let joinstr2:string =`${str1} works in ${comp}`;

//console.log(str1.concat(comp));

//console.log(joinstr2);
//console.log("string length : "+str1.length); 


*/
