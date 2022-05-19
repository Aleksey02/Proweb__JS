let count = +prompt('Введите количество ступенек');
let simbol = prompt('Введите символ отступов');
let endSimbol = prompt('Введите конечный символ');

let a='';
for(let i = 0; i < count; i++){
    console.log(a + endSimbol);
    a+=simbol;
}
