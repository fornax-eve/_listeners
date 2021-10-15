'use strict';

// 1) Повесить на кнопку обработчик события click и реализовать такой функционал:
//     В input[type=text] можно ввести цвет: red, green, blue и так далее.
//     По нажатию на кнопку необходимо брать этот цвет и добавлять его свойству style="backgroundColor: " квадрата.
// Работать должно так: ввели в input[type=text] yellow, по нажатию на кнопку значение input[type=text] попадает в свойство style="backgroundColor: yellow" и фон квадрата должен поменяться

const text = document.getElementById('text');
const btn = document.getElementById('btn');
const ebtn = document.getElementById('e_btn');
const range = document.getElementById('range');
const square = document.getElementById('square');
const circle = document.getElementById('circle');
const span = document.getElementById('range-span');

text.value = 'Khaki';

const adding = function () {
    square.style.backgroundColor = text.value;
}

btn.addEventListener('click', adding)

// 2) В кружке (который внутри квадрата) есть кнопка. Дать ей свойство style="display: none; "

ebtn.style.display = 'none';

// 3) Повесить на input[type=range] обработчик события input и реализовать такой функционал:
//
//     при каждом изменении положения ползунка значение input[type=range] необходимо заносить в свойства ширины и высоты кружка (который внутри квадрата) (height и width) (в процентах!!)

const wd = parseInt(window.getComputedStyle(circle).getPropertyValue('width'), 10);
const ht = parseInt(window.getComputedStyle(circle).getPropertyValue('height'), 10);
range.value = '100';
span.textContent = '100%';
const sizing = function () {
    let i_value = range.value / 100;
    span.textContent = range.value + '%';
    circle.style.width = wd*i_value + 'px';
    circle.style.height = ht*i_value + 'px';
}

range.addEventListener('input', sizing);
