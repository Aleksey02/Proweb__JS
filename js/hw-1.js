var count = 0;
var text_input = prompt('Введите ваше имя');
console.log('Вас зовут ' + text_input);
text_input = prompt('Введите ваш возраст');
console.log('Вам ' + text_input + ' лет (года)');
text_input = prompt('Решите пример: 5 + 5 = ?');
if(text_input == 10){
    count++;
}
console.log('Пример 1: 5 + 5 = 10 Ваш ответ = ' + text_input);
text_input = prompt('Решите пример: 25 - 9 = ?');
if(text_input == 16){
    count++;
}
console.log('Пример 2: 25 - 9 = 16 Ваш ответ = ' + text_input);
text_input = prompt('Решите пример: 4 * 6 = ?');
if(text_input == 24){
    count++;
}
console.log('Пример 3: 4 * 6 = 24 Ваш ответ = ' + text_input);
text_input = prompt('Решите пример: 49 / 7 = ?');
if(text_input == 7){
    count++;
}
console.log('Пример 4: 49 / 7 = 7 Ваш ответ = ' + text_input);
text_input = prompt('Решите пример: 14 % 3 = ?');
if(text_input == 2){
    count++;
}
console.log('Пример 5: 14 % 3 = 2 Ваш ответ = ' + text_input);
alert('Вы ответили правильно ' + count + ' раз(а)')