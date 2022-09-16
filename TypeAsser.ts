let empcode:any=111;
let employeeCode=<string>empcode;

let empcode2= empcode as string;

console.log(empcode+10);
console.log(empcode2+10);
console.log(employeeCode+10);

console.log(typeof(empcode2));

console.log(typeof(empcode));
console.log(typeof(employeeCode));