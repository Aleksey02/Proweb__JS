let arr=[];
let arrExam;
console.log(arr);
while(true){
    textInput = prompt('Введите команду');
    arrExam = textInput.split(', ');
    if(arrExam[0]=='add'){
        arr.push(arrExam[1]);
    }
    else if(arrExam[0]=='del'){
        for(let key in arr){
            if(arrExam[1]==arr[key]){
                arr.splice(key, 1);
            }
        }
    }
    else if(arrExam[0]=='stop'){
        break;
    }
    console.log(arr);
}
