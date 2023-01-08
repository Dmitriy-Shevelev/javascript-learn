let height = prompt('Введите Ваш рост в см');
let weight = prompt('Введите Ваш вес в кг');

let imt = weight / Math.pow(height, 2);

if (imt < 1) {
    imt *= 10000;
}

if (imt <= 18.5) {
    console.log("У вас недостаточный вес");
}
else if (imt <= 25) {
    console.log("Нормально");
}
else if (imt <= 30) {
    console.log("У вас излишек веса");
}
else {
    console.log("Ожирение");
}