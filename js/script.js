'use strict';
let week = ['monday', 'tuesday', 'wednesday', 'thurdsday', 'friday', 'saturday', 'sunday']
let str = ''
const body = document.querySelector('body')
const newDiv = document.createElement('div')
const todayDay = new Date();

week.forEach(function (item, index, array) {
    if (item == 'sunday' || item == 'saturday' && index !== todayDay.getDay()) {
        str += item.italics() + ' endOfWeek'.italics() + '<br>'
        console.log(item + ' sunday/saturday')
    } else if (index !== todayDay.getDay()){
        str += item + '<br>'
        console.log(item)
    } else if (index === todayDay.getDay()) {
        str += item.bold() + ' today'.bold() + '<br>'
        console.log(item + ' today')
    }
    newDiv.innerHTML = str

    body.append(newDiv)
})