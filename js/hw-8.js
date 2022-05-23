let count = +prompt('Введите количество примеров');

function randomNumber(){
    return Math.floor(Math.random()*10+1)
}

function randomSign(){
    num = Math.floor(Math.random()*16)
    if(num<=4){
        return '+'
    }
    else if(num>4 && num<=8){
        return '-'
    }
    else if(num>8 && num<=12){
        return '*'
    }
    else{
        return '/'
    }
}

for(let i=0; i<count; i++){
    let num1 = randomNumber()
    let num2 = randomNumber()
    let sign = randomSign()
    let userAnswer = +prompt(num1 + ' ' + sign + ' ' + num2 + ' = ?');
    let correctAnswer, trueAnswer;
    
    if(sign == '+'){
        trueAnswer = userAnswer == (num1+num2)? 'Верный': 'Не верный';
        correctAnswer = num1+num2;
    }
    else if(sign == '-'){
        trueAnswer = userAnswer == (num1-num2)? 'Верный': 'Не верный';
        correctAnswer = num1-num2;
    }
    else if(sign == '*'){
        trueAnswer = userAnswer == (num1*num2)? 'Верный': 'Не верный';
        correctAnswer = num1*num2;
    }
    else{
        trueAnswer = userAnswer == (num1/num2)? 'Верный': 'Не верный';
        correctAnswer = num1/num2;
    }

    if(trueAnswer == 'Верный'){
        alert('Ваш ответ ' + trueAnswer + ' - ' + userAnswer);
    }
    else{
        alert('Ваш ответ ' + trueAnswer + ' - ' + userAnswer + '!' + ' Правильный ответ - ' + correctAnswer+'!');
    }
}
