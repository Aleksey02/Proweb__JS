var num1 = prompt("Введите первое число");
var num2 = prompt("Введите второе число");
var num3 = prompt("Введите третье число");
var mid = (num1 + num2 +num3)/3;

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
    if(num1 != num2 && num1 != num3 && num2 != num3){
        if(num1 < num3 && num1 > num2){
            alert('Среднее число '+num1);
        }
        else if(num2 < num3 && num2 > num1){
            alert('Среднее число '+num2);
        }
        else{
            alert('Среднее число '+num3);
        }
    }
    else{
        alert('Вы ввели одинаковые числа');
    }
}
else{
    alert('Вы ввели буквы');
}