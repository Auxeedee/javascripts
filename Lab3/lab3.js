let str = "Привіт";
let num = 52;
let bool = true;
let undef;
let nul = null;

console.log(str, typeof str);    
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(undef, typeof undef);
console.log(nul, typeof nul);

let strToNum = Number("123");
let numToStr = String(456);
let toBool1 = Boolean(0);     //false
let toBool2 = Boolean("test"); //true

console.log(strToNum, typeof strToNum);
console.log(numToStr, typeof numToStr); 
console.log(toBool1, typeof toBool1);
console.log(toBool2, typeof toBool2);

console.log("5" + 3); 
console.log("5" - 3); 
console.log("5" * "2");
console.log(1 + true);

function getType(value) {
  return typeof value;
}

console.log(getType(123));
console.log(getType("text"));
console.log(getType(false));
console.log(getType(undefined)); 
console.log(getType(null)); 


console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(0 == false);   // true
console.log(0 === false);  // false
    