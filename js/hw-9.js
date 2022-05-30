user = {};

for(let i=1;i<=10;i++){
    user[i] = {}
    user[i].name = prompt('Введите своё имя');
    user[i].age = +prompt('Введите свой возраст');
}

for(let key in user){
    console.log(`Пользователь ${key}`);
    console.log(`Ваше имя ${user[key].name}`);
    console.log(`Ваш возраст ${user[key].age}`);
}
console.log(user);
