var varName = "남지윤";
var varName = "장서현";
varName = "채정아";

console.log("var : ",varName);

let letName = "남지윤";
//let letName = "장서현";
letName = "채정아"

console.log("let: ", letName);

const constName = "남지윤";
//const constName = "장서현";
constName = "채정아";

console.log("const: ", constName);


if (true) {
    var x = 'var variable';
}
console.log(x);

/*
if (true) {
    const y = 'const variable';
    let z = 'let variable';
}
console.log(y);
console.log(z);
*/

function foo () {
    if (true) {
        var name = "채정아"
        console.log('if - block - ', name);
    }
    console.log('function - block - ', name);
}
//console.log('global - ', name);

