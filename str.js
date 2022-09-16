var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function spreadops() {
    var arr1 = ["volkwagen", "benz", "bmw"];
    var arr2 = ["Nexa", "Tata", "Kia"];
    var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
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
