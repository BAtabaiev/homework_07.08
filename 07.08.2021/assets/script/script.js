//1. Первое задание

function task1() {
     let a, b, c, d;
     a=10, b=20;
     c=a-b;
     d=c;
     res=d+c;
     alert(`Результат: ${res}`)
     console.log(res);
}

// 2. Второе задание

function task2(){
    alert(`num+=7\nnum-=18\nnum*=10\nnum/=15\n++num\n--num`)
}

// 3. Третье задание

function task3(){
    let userAge;
    userAge = prompt('Сколько Вам лет???');
        if(userAge >=18){
	        alert('Вы совершеннолетний!!!');
            } else {
                userAge <18
                alert('Заходите через годик-второй!');
}
}
// 4. Четвертое задание

function task4 () {
    let userNumber=prompt('Ваше число?');
    alert(`Ваше число в квадрате - ${userNumber*userNumber}`)
}

// 6. Шестое задание
function task6() {
    let userNumber=prompt("Введите число от 1 до 12");
    if (userNumber == 1 || userNumber==2 || userNumber==12) {
        alert("Зимний месяц")
    } else if(userNumber==3 || userNumber==4 || userNumber==5){
        alert("Весенний месяц")
    } else if(userNumber==6 || userNumber==7 || userNumber==8){
        alert("Летний месяц")
    } else if(userNumber==9 || userNumber==10 || userNumber==11){
        alert("Осенний месяц")
    } else {
        alert("Нет, нужно было ввести любое число от 1 до 12!!!")
    }

}

// 7. Седьмое задание

function task7(){
    let a =+prompt("Введите первое число");
    let b=+prompt("Введите второе число");
    if(a <= 1 && b > 5){
        alert(`Сумма Ваших чисел: ${a+b}`)
    } else{
        alert(`Разница Ваших чисел: ${a-b}`)
    }

}

// 8. Восьмое задание

function task8(){
    let quontityItem, priceItem=100, totalBuy;
quontityItem = prompt ('Сколько единиц вам нужно?');
totalBuy= quontityItem*priceItem;
if (totalBuy > 800){
	totalBuy*=0.97;
} else if(totalBuy > 500) {
    totalBuy*=0.98;
} 
alert(`Всего с вас ${totalBuy} грн!`);
}

// 9. Девятое задание

function task9() {

    let x, y, r, userValue;
    x=prompt('Введите значение для точки в оси X');
    y=prompt('Введите значение для точки в оси Y');
    r=prompt('Введите размер радиуса круга');
    r=(x*x + y*y) ** (1/2);
    userValue= x + y;
    if(userValue > r){
        alert('Точка по заданным  Вами координатам находится вне круга')
    } else {
        alert('Точка по заданным Вами координатам находится внутри круга')
    }
}