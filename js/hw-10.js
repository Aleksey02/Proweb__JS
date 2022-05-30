let getRecept = receipt();
console.log(getRecept);
let sum=0;
let result = 'Вы заказали';
for(let key in getRecept){
    sum += getRecept[key]['price'];
    result += ` ${key} ${getRecept[key]['info']},`;
}
result += `  | Общая стоимость ${sum+9000} сумм с доставкой (9000)`;
console.log(result)
