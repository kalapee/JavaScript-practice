let score = "33abc"
let result;
let meth;

meth = "4" - "2"; 
console.log(meth, "-", typeof(meth));

meth = "4" - 2; 
console.log(meth, "-", typeof(meth));

meth = "4" * 2;
console.log(meth, "-", typeof(meth));

meth = "4" / 2;
console.log(meth, "-", typeof(meth));

result = Number("10");
console.log(result, "-", typeof(result));
result = Number(true);
console.log(result, "-", typeof(result));
result = String(true);
console.log(result, "-", typeof(result));
result = Boolean(0);
console.log(result, "-", typeof(result));
result = Boolean(12);
console.log(result, "-", typeof(result));
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);       

