let num = +prompt('Введит число');
let pow = +prompt('Введит степень числа');
let result =num;
for(let i=1;i<pow;i++){
    result *= num;
}
console.log(result);
alert(num + ' ^ ' + pow + ' = ' + result);
