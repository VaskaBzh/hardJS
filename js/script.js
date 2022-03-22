'use strict';

let arr = ['111111', '222222', '333333', '444444', '123123', '123123123', '232323'];

const toNumber = function getToNumber(num) {
    num = Number(num)
    return num
}

const toString = function getToString(num) {
    num = String(num)
    return num
}

function newArr() {
    for (let i = 0; i < arr.length; i++) {
        if (toNumber(arr[i].split('')[0]) === 2 || toNumber(arr[i].split('')[0]) === 4) {
            console.log(toString(arr[i]))   
        }
    }
}

function easyNum() {
    checkI: for (let i = 2; i < 101; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue checkI;
            }
        }
        console.log(i + ' Дулители данного числа: 1, ' + i)
    }
}

easyNum();
newArr();