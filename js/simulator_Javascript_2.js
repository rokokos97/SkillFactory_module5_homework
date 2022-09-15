// let cat1 = prompt("Введите катет A");
// let cat2 = prompt("Введите катет B");
// let hypotenuse = prompt("Введите гипотинузу");
//
// const checkTriangle = function (cat1, cat2, hypotenuse){
//     if(cat1**2+cat2**2===hypotenuse**2){
//         alert("Этот трехугольник прямоугольный")
//     }else {alert("Этот трехугольник непрямоугольный")}
// }
// checkTriangle(cat1, cat2, hypotenuse);

// let number1 = +prompt("Введите первое число");
// let number2 = +prompt("Введите второе число");
// let number3 = +prompt("Введите третье число");
//
// const checkBiggestNumber = function (num1, num2, num3){
//     if(num1>num2){
//         if(num1>num3){
//             console.log('Первое число самое большое')
//         }else if (num1<num3){
//             console.log('Третье число самое большое')
//         }else {console.log('Первое и третье число ровны и больше второго')
//         }
//     }else if(num1<num2){
//         if(num2>num3){
//             console.log('Второе число самое большое')
//         }else if (num2<num3){
//             console.log('Третье число самое большое')
//         }else {console.log('Второе и третье число ровны и больше первого')
//         }
//     }else{
//         if(num1>num3){
//             console.log('Первое и второе число ровны и больше третьего')
//         }else if(num1<num3){
//             console.log('Третье число самое большое')
//         }else {console.log('Все три числа ровны')}
//     }
// }
// checkBiggestNumber(number1,number2,number3);

let userNumber = +prompt("Введите любое число");

if (isNaN(userNumber)){
    alert("Необходимо ввести число")
} else if (userNumber===0){
    alert("Вы ввели число 0")
} else if (userNumber%2===0){
    alert(`Число ${userNumber} - четное`)
} else {
    alert(`Число ${userNumber} - нечетное`)
}