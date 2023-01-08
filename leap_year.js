let year = prompt('Введите год');

if (isLeapYear(year)) {
    console.log('Високосный год');
}
else {
    console.log('Не является високосным');
}

function isLeapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}