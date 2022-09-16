function identity<Type>(arg:Type) : Type
{
    return arg;
}


//var user1="Jenifer";
//var user2=10;

let user1=identity<string>("JENIFER");
let user2=identity<number>(10);
console.log(user1);
console.log(user2);
