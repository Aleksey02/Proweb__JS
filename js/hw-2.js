var age = +prompt('Введите свой возраст');
if(age >= 0 && age <=18){
    alert('Вы ещё молоды. Вам нужно учится');
}
else if(age >= 19 && age <=50){
    alert('Вам нужно работать');
}
else if(age >= 51 && age <=59){
    alert('Вам скоро на пенсию');
}
else if(age >= 60 && age <=150){
    alert('Вы пенсионер');
}
else{
    alert('Что-то пошло не так');
}