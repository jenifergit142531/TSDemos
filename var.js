/*function show() {
    var a = 50;
    return function display() {
        var b = a + 10;
        return b;
    };
}
var input = show();
console.log(input());*/

function show() {
   let a = 50;
   const pi=3.14;
  
   
    return function display() {
        let a=30;
        pi=4.25;
        let b = a + 10+pi;
        
        return b;
    }
    //return b;
}
var input = show();
console.log(input());
