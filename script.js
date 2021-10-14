// const btn = document.getElementById('btn');
// const square = document.getElementById('square');
// const text = document.getElementById('text');
// const span = document.getElementById('text-span');
// const range = document.getElementById('range');
// const rspan = document.getElementById('range-span');
//
// const logger = function (event) {
//     // console.log('Click admitted!')
//     console.log(event.type)
//     console.log(event.target.value)
//     rspan.textContent = event.target.value;
// }
//
// // square.addEventListener('click', logger);
// // square.addEventListener('mousedown', logger);
// // square.addEventListener('mouseup', logger);
// // square.addEventListener('mousemove', logger);
// // square.addEventListener('mouseenter', logger);
// // square.addEventListener('mouseleave', logger);
// //события mouseover mouseout реагируют на вложенные элементы
// //mouseenter, mouseleave реагируют только на элемент предназначения
// // square.addEventListener('mouseover', logger);
// // square.addEventListener('mouseout', logger);
//
// // text.addEventListener('input', logger);
// // text.addEventListener('focus', logger);
// // text.addEventListener('blur', logger);
// //когда введено новое значение в input - событие change
// // text.addEventListener('change', logger);
// // text.addEventListener('keyup', logger);
// // text.addEventListener('keydown', logger);
//
// range.addEventListener('input', logger);
// // range.addEventListener('change', logger);
//
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM построен")
// });

//  ************************  PREVENTDEFAULT  ************************

// const link = document.querySelector('.controls > a')
//
// link.addEventListener('click', function (event) {
//     event.preventDefault()
//     console.log('just has been made the click by the link')
// })
//
// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
//     console.log('Запрет действует')
// })

//  ************************  ВСПЛЫТИЕ И ПЕРЕХВАТ  ************************

const btn = document.getElementById('e_btn');
const circle = document.getElementById('circle');
const square = document.getElementById('square');

const toggler = function (event) {
    // event.stopPropagation();
    console.log(event.target)
    console.log(event.currentTarget)
    event.target.classList.toggle('green')
}

btn.addEventListener('click', toggler)
circle.addEventListener('click', toggler)
square.addEventListener('click', toggler)
