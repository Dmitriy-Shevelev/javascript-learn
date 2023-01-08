let firstName = prompt('Введите первое имя');
let secondName = prompt('Введите второе имя');
let result = getRandomIntInclusive(0, 100);

console.log(`${firstName} подходит к ${secondName} на ${result} процентов!`);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}