let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 400,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 800,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 1100,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        }
    }
}

let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 2000,
        kcall: 100
    },
    lettuce: {
        name: 'Салатный лист',
        price: 4000,
        kcall: 20
    },
    cheese: {
        name: 'Сыр',
        price: 5000,
        kcall: 130
    },
}


let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    payBtn = document.querySelector('.receipt__window-btn');
    numberInTop = document.querySelector('.header__timer-extra');
    textInTop = document.querySelector('.header__timer');
    
btnPlusOrMinus.forEach((btn) => {
    btn.addEventListener('click', function() {
        plusOrMinus(this)
    })
    let interval = 0;
    btn.addEventListener('mousedown', function() {
        interval = setInterval(() => plusOrMinus(this),100)
    })
    btn.addEventListener('mouseup', function() {
        clearInterval(interval)
    })
})

function plusOrMinus(element) {
    // closest() - подключаеться к ближайшему заданому родителю
    // getAttribute() - берет значение указанного атрибута
    let parentId = element.closest('.main__product').getAttribute('id')
    let output = element.closest('.main__product').querySelector('.main__product-num')
    let price = element.closest('.main__product').querySelector('.main__product-price span')
    let kcall = element.closest('.main__product').querySelector('.main__product-kcall span')
    
    if(element.getAttribute('data-symbol') == '+') {
        product[parentId].amount++
    }else if(element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    
    output.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].SUMM
    kcall.innerHTML = product[parentId].KCALL
}

function rekNumber(){
    let count=numberInTop.innerHTML
    if(count<100){
        count++;
        numberInTop.innerHTML = count;
        setTimeout(()=>rekNumber(),200);
        textInTop.style=`transform: scale(${1+count/40}); margin-top: ${1+count/15}%;`
    }
}
rekNumber();