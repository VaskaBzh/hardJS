'use strict'

const body = document.querySelector('body')
const elementOne = document.createElement('div')
const elementTwo = document.createElement('div')

elementOne.style.paddingTop = "24px"
elementOne.style.paddingLeft = "24px"
elementTwo.style.paddingTop = "12px"
elementTwo.style.paddingLeft = "24px"

const getTodayDate1 = function() {
    let todayDate = new Date();
    let weekDay;
    let date = todayDate.getDate();
    let mon;
    let year = todayDate.getFullYear();

    let result

    switch (todayDate.getDay()) {
        case 0:
            weekDay = 'Воскресенье';
            break;
        case 1:
            weekDay = 'Понедельник';
            break;
        case 2:
            weekDay = 'Вторник';
            break;
        case 3:
            weekDay = 'Среда';
            break;
        case 4:
            weekDay = 'Четверг';
            break;
        case 5:
            weekDay = 'Пятница';
            break;
        case 6:
            weekDay = 'Суббота';
            break;    
    }

    switch (todayDate.getMonth()) {
      case 0: 
            mon="января"; 
            break;
      case 1: 
            mon="февраля";
            break;
      case 2: 
            mon="марта";
            break;
      case 3: 
            mon="апреля";
            break;
      case 4: 
            mon="мая";
            break;
      case 5: 
            mon="июня";
            break;
      case 6: 
            mon="июля";
            break;
      case 7: 
            mon="августа";
            break;
      case 8: 
            mon="сентября";
            break;
      case 9: 
            mon="октября";
            break;
      case 10: 
            mon="ноября";
            break;
      case 11: 
            mon="декабря";
            break;
    }

    const getHour = function() {
        let hour = 0;
        if (todayDate.getHours() === 1 || todayDate.getHours() === 21) {
            hour = todayDate.getHours() + ' час';
        } else if (todayDate.getHours() >= 2 && todayDate.getHours() < 5 || todayDate.getHours() >= 22 && todayDate.getHours() <= 24) {
            hour = todayDate.getHours() + ' часа';
        } else if (todayDate.getHours() >= 5 && todayDate.getHours() < 21) {
            hour = todayDate.getHours() + ' часов';
        } 
        return hour;
    }

    const getMinute = function() {
        let minute = 0;
        if (todayDate.getMinutes() === 1 || todayDate.getMinutes() === 21 || todayDate.getMinutes() === 31 || todayDate.getMinutes() === 41 || todayDate.getMinutes() === 51) {
            minute = todayDate.getMinutes() + ' минута';
        } else if (todayDate.getMinutes() >= 2 && todayDate.getMinutes() < 5 || todayDate.getMinutes() >= 22 && todayDate.getMinutes() < 25 || todayDate.getMinutes() >= 32 && todayDate.getMinutes() < 35 || todayDate.getMinutes() >= 42 && todayDate.getMinutes() < 45 || todayDate.getMinutes() >= 52 && todayDate.getMinutes() < 55) {
            minute = todayDate.getMinutes() + ' минуты';
        } else if (todayDate.getMinutes() >= 5 && todayDate.getMinutes() < 21 || todayDate.getMinutes() >= 25 && todayDate.getMinutes() < 31 || todayDate.getMinutes() >= 35 && todayDate.getMinutes() < 41 || todayDate.getMinutes() >= 45 && todayDate.getMinutes() < 51 || todayDate.getMinutes() >= 55 && todayDate.getMinutes() <= 60) {
            minute = todayDate.getMinutes() + ' минут';
        } 
        return minute;
    }

    const getSecond = function() {
        let second = 0;
        if (todayDate.getSeconds() === 1 || todayDate.getSeconds() === 21 || todayDate.getSeconds() === 31 || todayDate.getSeconds() === 41 || todayDate.getSeconds() === 51) {
            second = todayDate.getSeconds() + ' секунда';
        } else if (todayDate.getSeconds() >= 2 && todayDate.getSeconds() < 5 || todayDate.getSeconds() >= 22 && todayDate.getSeconds() < 25 || todayDate.getSeconds() >= 32 && todayDate.getSeconds() < 35 || todayDate.getSeconds() >= 42 && todayDate.getSeconds() < 45 || todayDate.getSeconds() >= 52 && todayDate.getSeconds() < 55) {
            second = todayDate.getSeconds() + ' секунды';
        } else if (todayDate.getSeconds() >= 5 && todayDate.getSeconds() < 21 || todayDate.getSeconds() >= 25 && todayDate.getSeconds() < 31 || todayDate.getSeconds() >= 35 && todayDate.getSeconds() < 41 || todayDate.getSeconds() >= 45 && todayDate.getSeconds() < 51 || todayDate.getSeconds() >= 55 && todayDate.getSeconds() <= 60) {
            second = todayDate.getSeconds() + ' секунд';
        } 
        return second;
    }

    result = 'Сегодня ' + weekDay + ', ' + date + ' ' + mon + ' ' + year + ' года ' + getHour() + ' ' + getMinute() + ' ' + getSecond();
    elementOne.textContent = result
    body.append(elementOne)
}

const getTodayDate2 = function() {
    let todayDate = new Date();
    let date = todayDate.getDate();
    let mon = todayDate.getMonth();
    let year = todayDate.getFullYear();

    let hour = todayDate.getHours();
    let minute = todayDate.getMinutes();
    let seconds = todayDate.getSeconds();

    let result;

    const zeroToDate = function() {
        if (date < 10) {
            date = '0' + date;
        };
    
        if (mon < 10) {
            mon = '0' + mon;
        }
    }

    const zeroToTime = function() {
        if (hour < 10) {
            hour = '0' + hour;
        };
    
        if (minute < 10) {
            minute = '0' + minute;
        };

        if (seconds < 10) {
            seconds = '0' + seconds;
        };
    }

    zeroToDate();
    zeroToTime();

    result = date + '.' + mon + '.' + year + ' - ' + hour + ':' + minute + ':' + seconds
    elementTwo.textContent = result
    body.append(elementTwo)
};

setInterval(getTodayDate1, 1000);
setInterval(getTodayDate2, 1000);

// getTodayDate1();
// getTodayDate2();