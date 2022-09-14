let userInsert = +prompt("Введите любое число");
console.log(typeof userInsert);
isNaN(userInsert)? alert("Упс, кажется, вы ошиблись"): (userInsert%2===0&&userInsert!==0)? alert("Вы ввели четное число"):alert("Вы ввели нечетное число или 0");
