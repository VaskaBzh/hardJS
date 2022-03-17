'use strict';

let lang = prompt('Выбор языка (ru,en)', 'ru');

if (lang === "ru"){
    console.log('Воскресенье' + " " + 'Понедельник' + " " + 'Вторник' + " " + 'Среда' + " " + 'Четверг' + " " + 'Пятница' + " " + 'Суббота')
}
else if (lang === "en"){
    console.log('Monday' + " " + 'Tuesday' + " " + 'Wednesday' + " " + 'Thursday' + " " + 'Friday' + " " + 'Saturday' + " " + 'Sunday')
}
else{
    console.log("Ошибка")
}



switch (lang) {
    case "ru":
        console.log('Воскресенье' + " " + 'Понедельник' + " " + 'Вторник' + " " + 'Среда' + " " + 'Четверг' + " " + 'Пятница' + " " + 'Суббота')
        break;
    case "en":
        console.log('Monday' + " " + 'Tuesday' + " " + 'Wednesday' + " " + 'Thursday' + " " + 'Friday' + " " + 'Saturday' + " " + 'Sunday')
        break;
    default:
        console.log('Ошибка')
        break;
} 


const langWeek = {
ru:['Воскресенье' + " " + 'Понедельник' + " " + 'Вторник' + " " + 'Среда' + " " + 'Четверг' + " " + 'Пятница' + " " + 'Суббота'] , 
en:['Monday' + " " + 'Tuesday' + " " + 'Wednesday' + " " + 'Thursday' + " " + 'Friday' + " " + 'Saturday' + " " + 'Sunday']
}
console.log(langWeek[lang]);


let namePerson = prompt('Введите Имя');
console.log((namePerson === 'Артем') ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент');