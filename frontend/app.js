'use strict';

import Slider from './slider';

new Slider(document.getElementById('main'));
new Slider(document.getElementById('main2'));
//new Slider(document.getElementById('slider'));

// let menu = new Menu({
//   title: "Сладости",
//   items: [{
//     title: "Конфеты",
//     href:  "candy"
//   }, {
//     title: "Пирожки",
//     href:  "pie"
//   }, {
//     title: "Пряники",
//     href:  "cookies"
//   }]
// });
//
// document.body.appendChild(menu.getElem());
//
// menu.getElem().addEventListener('menu-select', function(event) {
//   alert(event.detail.value);
// });