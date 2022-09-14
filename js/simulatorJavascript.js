let cat1 = prompt("Введите катет A");
let cat2 = prompt("Введите катет B");
let hypotenuse = prompt("Введите гипотинузу");

const checkTriangle = function (cat1, cat2, hypotenuse){
    if(cat1**2+cat2**2===hypotenuse**2){
        alert("Этот трехугольник прямоугольный")
    }else {alert("Этот трехугольник непрямоугольный")}
}
checkTriangle(cat1, cat2, hypotenuse);
