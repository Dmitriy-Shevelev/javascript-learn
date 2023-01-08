let count = prompt('Введите количество персон');
persons = [];

for (let i = 0; i < count; i+=1) {
    persons.push(prompt(`Введите имя ${i + 1}`));
}

var person = persons[getRandomInt(0, count)];

console.log(`Оплачивать будет ${person}`);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }