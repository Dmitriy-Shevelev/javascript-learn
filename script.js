console.log('Сообщение');

let a = 1;
let b = 2;

console.log('a =', a, '; b =', b);
console.log('a + b =', a + b);

let text = 'Abcdefg';
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(pow(2, 0));
console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 6));

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function mod(a, b) {
    return a % b;
}

function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i += 1) {
        result *= a
    }

    return result;
}