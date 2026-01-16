import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { findAllByAltText } from '@testing-library/dom';
import {init, openTelegramLink,swipeBehavior, backButton  } from '@telegram-apps/sdk';
import { hapticFeedback, shareMessage} from '@telegram-apps/sdk';

// init()

// setTimeout(() => {
// 		hapticFeedback.impactOccurred('soft');
// 		setTimeout(() => {
// 		hapticFeedback.impactOccurred('soft');
// 			setTimeout(() => {
// 		hapticFeedback.impactOccurred('soft');
// 				setTimeout(() => {
// 		hapticFeedback.impactOccurred('soft');
// 					setTimeout(() => {
// 		hapticFeedback.impactOccurred('soft');
// 	}, 100)
// 	}, 100)
// 	}, 100)
// 	}, 100)
// 	}, 100)

// function listener() {
//     backButton.hide();
//     document.getElementById("mainmenu").style.display = 'block';
//   document.getElementById("logoa").innerText = "Kerosinka";
//   document.getElementById("logoimg").src = "Coffee Beans.png";
//   document.getElementById("divob").style.width = "274px";
//   document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
//   document.getElementById("raspisaniemenu").style.display = 'none';
//   document.getElementById("basketicon").style.display = 'none';
//   document.getElementById("abouticon").style.display = 'none';
//   document.getElementById("menu_1").style.display = 'none';

// }

// backButton.mount();
// backButton.isMounted();
// const offClick = backButton.onClick(listener);

let categories = {
  1: ['Кофе и Чай', 'Баблти', 'Милкшейк', 'Добавки', 'Авторские напитки', 'Фреш бар', 'Спешл чай', 'Роллы', 'Воки', 'Паста/салаты', 'Гриль багеты', 'Разное', 'Пирожное', 'Вафли', 'Батончики', 'Подарочные наборы', 'Мороженое', 'Вода'],
  2: ['Кофе и Чай', 'Баблти', 'Милкшейк', 'Добавки', 'Авторские напитки', 'Гриль багеты', 'Разное', 'Пирожное', 'Вода'],
  3: ['Кофе и Чай', 'Добавки', 'Гриль багеты', 'Вода']
}

let menu_piker = {
  1: {
    1: [["Эспрессо", "50 мл", "90 руб"], ["Американо", "250 мл", "140 руб"], ["Американо", "350 мл", "180 руб"], ["Латте", "350мл", "250 руб"], ["Латте", "450мл", "290 руб"], ["Капучино", "250мл", "210 руб"], ["Капучино", "350мл", "250 руб"], ["Капучино", "450мл", "290 руб"], ["Флет Уайт", "250мл", "240 руб"], ["Флет Уайт", "350мл", "280 руб"], ["Раф", "350мл", "280 руб"], ["Раф", "450мл", "320 руб"], ["Чай листовой", "250мл", "80 руб"], ["Чай листовой", "350мл", "100 руб"], ["Чай листовой", "450мл", "120 руб"], ["Горячий шоколад", "250мл", "220 руб"], ["Горячий шоколад", "350мл", "260 руб"], ["Горячий шоколад", "450мл", "290 руб"], ["Какао", "250мл", "220 руб"], ["Какао", "350мл", "260 руб"], ["Какао", "450мл", "290 руб"]],
    2: [["Матча манго", "", "380 руб"], ["Баблти милкшейк", "", "380 руб"]],
    3: [["Милкшейк манго", "", "320 руб"], ["Милкшейк шоколад", "", "280 руб"], ["Милкшейк клубника", "", "280 руб"]],
    4: [["Сироп карамельный", "", "30 руб"], ["Сироп ваниль", "", "30 руб"], ["Сироп соленная карамель", "", "30 руб"], ["Сироп имбирный пряник", "", "30 руб"], ["Сироп поп корн", "", "30 руб"], ["Сливки", "", "30 руб"], ["Молоко доп. шот", "", "30 руб"], ["Безлактозное молоко", "", "40 руб"], ["Молоко миндальное", "", "70 руб"], ["Молоко кокосовое", "", "70 руб"], ["Молоко банановое", "", "70 руб"]],
    5: [["Раф вишня", "", "280 руб"], ["Матча латте", "", "280 руб"], ["Латте нутелла", "", "270 руб"], ["Эспрессо тоник", "", "280 руб"], ["Лимонад классический", "", "240 руб"], ["Коктейль мохито", "", "260 руб"]],
    6: [["Свежевыжитый морковный сок", "", "280 руб"], ["Свежевыжитый яблочный сок", "", "290 руб"], ["Микс из морковного и яблочного сока", "", "290 руб"], ["Апельсиновый фреш", "", "290 руб"], ["Грейпфрутовый фреш", "", "320 руб"], ["Молочно-банановый смузи", "", "300 руб"]],
    7: [["Гуава Бергамот", "350мл", "280 руб"], ["Шишка Чай", "350мл", "270 руб"], ["Облепиховый пунж", "350мл", "280 руб"], ["Имбирный апельсин", "350мл", "280 руб"], ["Клубника лайм", "350мл", "240 руб"]],
    8: [["Калифорния с икрой летучей рыбы", "", "350 руб"], ["Ролл с лососем", "", "390 руб"], ["Ролл с угрем", "", "400 руб"], ["Спайси чикен", "", "320 руб"]],
    9: [["Рисовый вок с курицей и овощами", "", "290 руб"], ["Рисовый вок с говядиной и овощами", "", "340 руб"], ["Рисовый вок с лососем и овощами", "", "380 руб"], ["Вок с лапшой удон с курицей и овощами", "", "290 руб"], ["Вок с лапшой удон с лососем и овощами", "", "380 руб"], ["Вок с лапшой удон с говядиной и овощами", "", "340 руб"], ["Вок с лапшой фрунчоза с курицей и овощами", "", "290 руб"], ["Вок с лапшой фрунчоза с лососем и овощами", "", "300 руб"], ["Вок с лапшой фрунчоза с говядиной и овощами", "", "340 руб"], ["Лапша том ям с брокколи", "", "440 руб"], ["Курица кари с рисом и шампиньонами", "", "340 руб"]],
    10: [["Паста с курицей и беконом в сливочном соусе", "", "340 руб"], ["Паста с красной рыбой и икрой летучей рыбы", "", "450 руб"], ["Паста со снежным крабом", "", "360 руб"], ["Салат цезарь с курицей", "", "290 руб"], ["Салат цезарь с креветками", "", "440 руб"]],
    11: [["Курица цезарь", "", "260 руб"], ["Ветчина с сыром", "", "260 руб"], ["Пеперони", "", "260 руб"], ["Курица терьяки", "", "260 руб"]],
    12: [["Цезарь ролл", "", "220 руб"], ["Круассан с филе цыпленка и твороженным сыром", "", "280 руб"], ["Салат цезарь", "", "260 руб"]],
    13: [["Донат", "", "130 руб"], ["Чизкейк нью йорк", "", "160 руб"], ["Чизкейк клубника", "", "160 руб"], ["Чизкейк пекан", "", "190 руб"], ["Чизкейк Арахисовый кранч", "", "260 руб"], ["Чизкейк шоколад", "", "160 руб"], ["Донат клубника", "", "140 руб"], ["Донат шоколад", "", "140 руб"], ["Донат ваниль с крошками печенья", "", "140 руб"]],
    14: [["Вафля карамель", "", "164 руб"], ["Вафля ваниль", "", "164 руб"], ["Вафля банан", "", "164 руб"], ["Вафля зефир-вишня", "", "164 руб"], ["Вафля кокос-пломбир", "", "164 руб"], ["Вафля птичье молоко", "", "164 руб"], ["Вафля птичье молоко в шоколадной глазури", "", "164 руб"], ["Вафля кофе с молоком", "", "164 руб"], ["Вафля апельсин", "", "164 руб"], ["Вафля зефир-апельсин", "", "164 руб"], ["Вафля карамель с арахисом и изюмом в молочном шоколаде", "", "164 руб"]],
    15: [["Сникерс мал.", "", "100 руб"], ["Пикник мал.", "", "100 руб"], ["Марс мал.", "", "100 руб"], ["Баунти мал.", "", "100 руб"], ["Сникерс бол.", "", "140 руб"], ["Пикник бол.", "", "140 руб"], ["Марс бол.", "", "140 руб"], ["Баунти бол.", "", "140 руб"], ["Киндер сюрприз", "", "180 руб"], ["Холс", "", "70 руб"], ["Скитлс", "", "95 руб"], ["ММдемс", "", "95 руб"], ["Ментос", "", "95 руб"], ["Миллер", "", "95 руб"], ["Жвачка", "", "50 руб"]],
    16: [["Конфеты Мерси", "", "680 руб"], ["Конфеты Коркунов подарочные", "", "680 руб"], ["Рафаэло мал", "", "360 руб"], ["Рафазло тортик", "", "750 руб"], ["Орешек со сгущенкой", "", "60 руб"], ["Печенье с предсказаниями", "", "50 руб"], ["Открытка", "", "100 руб"], ["Значок Губки", "", "150 руб"], ["ЗД стикер", "", "150 руб"], ["Эко кружка", "", "1200 руб"]],
    17: [["Рожок жемчужина", "", "150 руб"], ["Рожок от деда мороза", "", "120 руб"], ["Стаканчик", "", "80 руб"]],
    18: [["Добрый кола", "500 мл", "140 руб"], ["Добрый кола", "330 мл", "110 руб"], ["Лайм фреш", "500 мл", "140 руб"], ["Лайм фреш", "330 мл", "110 руб"], ["Липтон зеленый", "500 мл", "120 руб"], ["Вода", "500 мл", "70 руб"]]
  },
  2: {
    1: [["Эспрессо", "50 мл", "90 руб"],
        ["Американо", "250 мл", "140 руб"],
        ["Американо", "350 мл", "180 руб"],
        ["Латте", "350мл", "250 руб"],
        ["Латте", "450мл", "290 руб"],
        ["Капучино", "250мл", "210 руб"],
        ["Капучино", "350мл", "250 руб"],
        ["Капучино", "450мл", "290 руб"],
        ["Флет Уайт", "250мл", "240 руб"],
        ["Флет Уайт", "350мл", "280 руб"],
        ["Раф", "350мл", "280 руб"],
        ["Раф", "450мл", "320 руб"],
        ["Чай листовой", "250мл", "80 руб"],
        ["Чай листовой", "350мл", "100 руб"],
        ["Чай листовой", "450мл", "120 руб"],
        ["Горячий шоколад", "250мл", "220 руб"],
        ["Горячий шоколад", "350мл", "260 руб"],
        ["Горячий шоколад", "450мл", "290 руб"],
        ["Какао", "250мл", "220 руб"],
        ["Какао", "350мл", "260 руб"],
        ["Какао", "450мл", "290 руб"]],
    2: [["Матча манго", "", "380 руб"],
        ["Баблти милкшейк", "", "380 руб"]],
    3: [["Милкшейк манго", "", "320 руб"],
        ["Милкшейк шоколад", "", "280 руб"],
        ["Милкшейк клубника", "", "280 руб"]],
    4: [["Сироп карамельный", "", "30 руб"],
        ["Сироп ваниль", "", "30 руб"],
        ["Сироп соленная карамель", "", "30 руб"],
        ["Сироп имбирный пряник", "", "30 руб"],
        ["Сироп поп корн", "", "30 руб"],
        ["Сливки", "", "30 руб"],
        ["Молоко доп. шот", "", "30 руб"],
        ["Безлактозное молоко", "", "40 руб"],
        ["Молоко миндальное", "", "70 руб"],
        ["Молоко кокосовое", "", "70 руб"],
        ["Молоко банановое", "", "70 руб"]],
    5: [["Раф вишня", "", "280 руб"],
        ["Матча латте", "", "280 руб"],
        ["Латте нутелла", "", "270 руб"],
        ["Эспрессо тоник", "", "280 руб"],
        ["Лимонад классический", "", "240 руб"],
        ["Коктейль мохито", "", "260 руб"]],
    6: [["Курица цезарь", "", "260 руб"],
        ["Ветчина с сыром", "", "260 руб"],
        ["Пеперони", "", "260 руб"],
        ["Курица терьяки", "", "260 руб"]],
    7: [["Цезарь ролл", "", "220 руб"],
        ["Круассан с филе цыпленка и твороженным сыром", "", "280 руб"],
        ["Салат цезарь", "", "260 руб"]],
    8: [["Донат", "", "130 руб"],
         ["Чизкейк нью йорк", "", "160 руб"],
         ["Чизкейк клубника", "", "160 руб"],
         ["Чизкейк пекан", "", "190 руб"],
         ["Чизкейк шоколад", "", "160 руб"],
         ["Донат клубника", "", "140 руб"],
         ["Донат шоколад", "", "140 руб"],
         ["Донат ваниль с крошками печенья", "", "140 руб"]],
    9: [["Добрый кола", "500 мл", "140 руб"],
         ["Добрый кола", "330 мл", "110 руб"],
         ["Лайм фреш", "500 мл", "140 руб"],
         ["Лайм фреш", "330 мл", "110 руб"],
         ["Липтон зеленый", "500 мл", "120 руб"],
         ["Вода", "500 мл", "70 руб"]]
  },
  3: {
    1: [
      ["Эспрессо", "50 мл", "90 руб"],
      ["Американо", "250 мл", "140 руб"],
      ["Американо", "350 мл", "180 руб"],
      ["Латте", "350мл", "250 руб"],
      ["Латте", "450мл", "290 руб"],
      ["Капучино", "250мл", "210 руб"],
      ["Капучино", "350мл", "250 руб"],
      ["Капучино", "450мл", "290 руб"],
      ["Флет Уайт", "250мл", "240 руб"],
      ["Флет Уайт", "350мл", "280 руб"],
      ["Раф", "350мл", "280 руб"],
      ["Раф", "450мл", "320 руб"],
      ["Чай листовой", "250мл", "80 руб"],
      ["Чай листовой", "350мл", "100 руб"],
      ["Чай листовой", "450мл", "120 руб"],
      ["Горячий шоколад", "250мл", "220 руб"],
      ["Горячий шоколад", "350мл", "260 руб"],
      ["Горячий шоколад", "450мл", "290 руб"],
      ["Какао", "250мл", "220 руб"],
      ["Какао", "350мл", "260 руб"],
      ["Какао", "450мл", "290 руб"]
    ],
    2: [
      ["Сироп карамельный", "", "30 руб"],
      ["Сироп ваниль", "", "30 руб"],
      ["Сироп соленная карамель", "", "30 руб"],
      ["Сироп имбирный пряник", "", "30 руб"],
      ["Сироп поп корн", "", "30 руб"],
      ["Сливки", "", "30 руб"],
      ["Молоко доп. шот", "", "30 руб"],
      ["Безлактозное молоко", "", "40 руб"],
      ["Молоко миндальное", "", "70 руб"],
      ["Молоко кокосовое", "", "70 руб"],
      ["Молоко банановое", "", "70 руб"]
    ],
    3: [
      ["Курица цезарь", "", "260 руб"],
      ["Ветчина с сыром", "", "260 руб"],
      ["Пеперони", "", "260 руб"],
      ["Курица терьяки", "", "260 руб"]
    ],
    4: [
      ["Добрый кола", "500 мл", "140 руб"],
      ["Добрый кола", "330 мл", "110 руб"],
      ["Лайм фреш", "500 мл", "140 руб"],
      ["Лайм фреш", "330 мл", "110 руб"],
      ["Липтон зеленый", "500 мл", "120 руб"],
      ["Вода", "500 мл", "70 руб"]
    ]
  }
};

let current_point = 1;

let basket = [];

document.getElementById("pointselect").addEventListener("click", (e) => {
  document.getElementById("blurforselect").style.display = 'block';

  // hapticFeedback.impactOccurred('soft');
})

document.getElementById("point1").addEventListener("click", (e) => {
  basket = [];
  document.getElementById("blurforselect").style.display = 'none';
  current_point = 1;
  document.getElementById("pointa").innerText = "3 корпус 2 этаж";
})

document.getElementById("point2").addEventListener("click", (e) => {
  basket = [];
  document.getElementById("blurforselect").style.display = 'none';
  current_point = 2;
  document.getElementById("pointa").innerText = "1-3 корпус 5 этаж";
})
document.getElementById("point3").addEventListener("click", (e) => {
  basket = [];
  document.getElementById("blurforselect").style.display = 'none';
  current_point = 3;
  document.getElementById("pointa").innerText = "2 корпус 4 этаж";
})
document.getElementById("raspisanie").addEventListener("click", (e) => {
  document.getElementById("mainmenu").style.display = 'none';
  document.getElementById("logoa").innerText = "Расписание";
  document.getElementById("logoimg").src = "Schedule.png";
  document.getElementById("divob").style.width = "274px";
  document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
  document.getElementById("raspisaniemenu").style.display = 'block';

//   hapticFeedback.impactOccurred('light');
// if (backButton.mount.isAvailable()) {
//         backButton.mount();
//         backButton.isMounted(); // true
//         }
//          backButton.show();
});
document.getElementById("menu").addEventListener("click", (e) => {
// if (backButton.mount.isAvailable()) {
//         backButton.mount();
//         backButton.isMounted(); // true
//         }
//          backButton.show();
//     hapticFeedback.impactOccurred('light');
  document.getElementById("blurforselect").style.display = 'block';

  document.getElementById("mainmenu").style.display = 'none';
  document.getElementById("logoa").innerText = "Меню";
  document.getElementById("logoimg").src = "Cutlery.png";
  document.getElementById("divob").style.width = "274px";
  document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
  document.getElementById("menu_1").style.display = 'block';
    document.getElementById("title_1_1").innerText = categories[current_point][0];

    document.getElementById("menubarpiker").innerHTML = '';
  for (let i = 0; i < menu_piker[current_point][1].length; i++) {
    let divosh = document.createElement("div");
    divosh.id = 'currentitem';
    let a_1 = document.createElement("a");
    a_1.id = "nameofitem";
    a_1.innerText = menu_piker[current_point][1][i][0]
    let a_2 = document.createElement("a");
    a_2.id = "countofitem";
    a_2.innerText = menu_piker[current_point][1][i][1]
    let a_3 = document.createElement("a");
    a_3.id = "priceofitem";
    a_3.innerText = menu_piker[current_point][1][i][2]
    divosh.appendChild(a_1);
    divosh.appendChild(a_2);
    divosh.appendChild(a_3);
    let plusdiv = document.createElement('div');
    plusdiv.id = 'plusdiv';
    divosh.appendChild(plusdiv);
    document.getElementById("menubarpiker").appendChild(divosh);
    plusdiv.setAttribute('data', menu_piker[current_point][1][i][0]+"_"+menu_piker[current_point][1][i][1]+"_"+menu_piker[current_point][1][i][2])
    let imgplus = document.createElement("img");
    imgplus.src = "+.png";
    imgplus.id = "plusator";
    plusdiv.appendChild(imgplus);
  }
})
document.getElementById("menubarpiker").addEventListener('click', (e) => {

  if (e.target.id == "plusdiv") {
      // hapticFeedback.impactOccurred('soft');

    let objj = e.target.getAttribute("data");
    e.target.classList.add("bijo");
    setTimeout(() => {
      e.target.classList.remove("bijo");
    }, 100);
    basket.push(objj);
  }
})

document.getElementById("title_1_1").addEventListener('click', (e) => {
  document.getElementById("blurforselect2").style.display = 'block';
  document.getElementById("selectbarcategory").innerHTML = '';
  for (let i = 0; i < categories[current_point].length; i++) {
    let catname = document.createElement("a");
    catname.id = "catname";
    catname.innerText = categories[current_point][i];
    catname.setAttribute("data", i+1);
    document.getElementById("selectbarcategory").appendChild(catname);
  }
})

document.getElementById("selectbarcategory").addEventListener('click', (e) => {
  if (e.target.id == "catname") {
    console.log(e.target);
    document.getElementById("blurforselect2").style.display = 'none';
    document.getElementById("menubarpiker").innerHTML = '';
    let data = e.target.getAttribute("data");
    document.getElementById("title_1_1").innerText = categories[current_point][data-1];

    for (let i = 0; i < menu_piker[current_point][data].length; i++) {
    let divosh = document.createElement("div");
    divosh.id = 'currentitem';
    let a_1 = document.createElement("a");
    a_1.id = "nameofitem";
    a_1.innerText = menu_piker[current_point][data][i][0]
    let a_2 = document.createElement("a");
    a_2.id = "countofitem";
    a_2.innerText = menu_piker[current_point][data][i][1]
    let a_3 = document.createElement("a");
    a_3.id = "priceofitem";
    a_3.innerText = menu_piker[current_point][data][i][2]
    divosh.appendChild(a_1);
    divosh.appendChild(a_2);
    divosh.appendChild(a_3);
    let plusdiv = document.createElement('div');
    plusdiv.id = 'plusdiv';
    divosh.appendChild(plusdiv);
    document.getElementById("menubarpiker").appendChild(divosh);
    plusdiv.setAttribute('data', menu_piker[current_point][data][i][0]+"_"+menu_piker[current_point][data][i][1]+"_"+menu_piker[current_point][data][i][2])
    let imgplus = document.createElement("img");
    imgplus.src = "+.png";
    imgplus.id = "plusator";
    plusdiv.appendChild(imgplus);
  }
  }
})
document.getElementById("basket").addEventListener("click", (e) => {
// if (backButton.mount.isAvailable()) {
//         backButton.mount();
//         backButton.isMounted(); // true
//         }
//          backButton.show();
//   hapticFeedback.impactOccurred('light');

  document.getElementById("mainmenu").style.display = 'none';
  document.getElementById("menu_1").style.display = 'none';
  document.getElementById("logoa").innerText = "Корзина";
  document.getElementById("logoimg").src = "Shopping Basket.png";
  document.getElementById("divob").style.width = "274px";
  document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
  document.getElementById("basketicon").style.display = 'block';
  document.getElementById("basketitems").innerHTML = '';
  if (basket.length == 0) {
    document.getElementById("emptybasket").style.display = 'block';
    document.getElementById("basketitems").style.display = 'none';
    document.getElementById("payoutbutton").style.display = 'none';

  } else {
    
    document.getElementById("emptybasket").style.display = 'none';
    document.getElementById("basketitems").style.display = 'block';
    document.getElementById("payoutbutton").style.display = 'block';

    let already_in = [];
    let summofbasket = 0
    for (let i = 0; i < basket.length; i++) {
      if (!already_in.includes(basket[i])){
      let obsh = document.createElement("div");
      let nameof = document.createElement("a");
      let countof = document.createElement("a");
      let priceof = document.createElement("a");
      let minusmg = document.createElement("img");
      let plusmg = document.createElement("img");
      let linediv = document.createElement("div");
      let podline =  document.createElement("img");
      let countofcurrentitem = document.createElement("a");
      nameof.id = 'bijoo';
      countof.id = "bijoo1";
      priceof.id = "bijoo2";
      obsh.id = 'obshdiv';
      linediv.id = "linediv";
      minusmg.src="-.png";
      plusmg.src="+.png";
      minusmg.id = "minusmg";
      plusmg.id = "plusmg";
      podline.src = "-.png";
      podline.id = "podline";
      countofcurrentitem.id = "countofcurrentitem";
      countofcurrentitem.className = "countofcurrentitem";
      countofcurrentitem.setAttribute("data", basket[i]);
      const countt = basket.filter(fruit => fruit === basket[i]).length;

      countofcurrentitem.innerText=countt;
      nameof.innerText = basket[i].split("_")[0];
      countof.innerText = basket[i].split("_")[1];
      priceof.innerText = basket[i].split("_")[2];
      obsh.appendChild(nameof);
      obsh.appendChild(countof);
      obsh.appendChild(priceof);
      obsh.appendChild(linediv)
      obsh.appendChild(minusmg);
      obsh.appendChild(plusmg);
      obsh.appendChild(podline);
      obsh.appendChild(countofcurrentitem);
      obsh.setAttribute("data", basket[i]);
      minusmg.setAttribute("data", basket[i]);
      plusmg.setAttribute("data", basket[i]);
      document.getElementById("basketitems").appendChild(obsh)
      already_in.push(basket[i]);
      summofbasket = summofbasket + Number(priceof.innerText.split(" ")[0])

    } else {
      summofbasket = summofbasket + Number(basket[i].split("_")[2].split(" ")[0])

    }
  
  }
  document.getElementById("summofbasket").innerText = summofbasket + " рублей";
}
})

document.getElementById("oool").addEventListener("click", (e) => {
  // hapticFeedback.impactOccurred('light');
// if (backButton.mount.isAvailable()) {
//         backButton.mount();
//         backButton.isMounted(); // true
//         }
//          backButton.show();
  document.getElementById("mainmenu").style.display = 'none';
  document.getElementById("menu_1").style.display = 'none';
  document.getElementById("logoa").innerText = "Корзина";
  document.getElementById("logoimg").src = "Shopping Basket.png";
  document.getElementById("divob").style.width = "274px";
  document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
  document.getElementById("basketicon").style.display = 'block';
  
  document.getElementById("basketitems").innerHTML = '';
  if (basket.length == 0) {
    document.getElementById("emptybasket").style.display = 'block';
    document.getElementById("basketitems").style.display = 'none';
    document.getElementById("payoutbutton").style.display = 'none';

  } else {
    
    document.getElementById("emptybasket").style.display = 'none';
    document.getElementById("basketitems").style.display = 'block';
    document.getElementById("payoutbutton").style.display = 'block';

    let already_in = [];
    let summofbasket = 0
    for (let i = 0; i < basket.length; i++) {
      if (!already_in.includes(basket[i])){
      let obsh = document.createElement("div");
      let nameof = document.createElement("a");
      let countof = document.createElement("a");
      let priceof = document.createElement("a");
      let minusmg = document.createElement("img");
      let plusmg = document.createElement("img");
      let linediv = document.createElement("div");
      let podline =  document.createElement("img");
      let countofcurrentitem = document.createElement("a");
      nameof.id = 'bijoo';
      countof.id = "bijoo1";
      priceof.id = "bijoo2";
      obsh.id = 'obshdiv';
      linediv.id = "linediv";
      minusmg.src="-.png";
      plusmg.src="+.png";
      minusmg.id = "minusmg";
      plusmg.id = "plusmg";
      podline.src = "-.png";
      podline.id = "podline";
      countofcurrentitem.id = "countofcurrentitem";
      countofcurrentitem.className = "countofcurrentitem";
      countofcurrentitem.setAttribute("data", basket[i]);
      const countt = basket.filter(fruit => fruit === basket[i]).length;

      countofcurrentitem.innerText=countt;
      nameof.innerText = basket[i].split("_")[0];
      countof.innerText = basket[i].split("_")[1];
      priceof.innerText = basket[i].split("_")[2];
      obsh.appendChild(nameof);
      obsh.appendChild(countof);
      obsh.appendChild(priceof);
      obsh.appendChild(linediv)
      obsh.appendChild(minusmg);
      obsh.appendChild(plusmg);
      obsh.appendChild(podline);
      obsh.appendChild(countofcurrentitem);
      obsh.setAttribute("data", basket[i]);
      minusmg.setAttribute("data", basket[i]);
      plusmg.setAttribute("data", basket[i]);
      document.getElementById("basketitems").appendChild(obsh)
      already_in.push(basket[i]);
      summofbasket = summofbasket + Number(priceof.innerText.split(" ")[0])

    } else {
      summofbasket = summofbasket + Number(basket[i].split("_")[2].split(" ")[0])

    }
  
  }
  document.getElementById("summofbasket").innerText = summofbasket + " рублей";
}
})

document.getElementById("basketitems").addEventListener("click", (e) => {
    

  if (e.target.id == "minusmg") {
      // hapticFeedback.impactOccurred('soft');
      let obsf = e.target.getAttribute("data");
      let allclases = document.getElementsByClassName("countofcurrentitem");
      for (let i = 0; i < allclases.length; i++) {
        if (allclases[i].getAttribute("data") == obsf) {
          document.getElementById("summofbasket").innerText = (Number(document.getElementById("summofbasket").innerText.split(" ")[0]) - Number(obsf.split("_")[2].split(" ")[0])) +" рублей";
          const index = basket.indexOf(obsf);
          basket.splice(index, 1)
          if (allclases[i].innerText == "1" || allclases[i].innerText == 1) {
            document.getElementById("basketitems").removeChild(e.target.parentNode);

          } else {
            allclases[i].innerText = Number(allclases[i].innerText) - 1
          }
          break;
        }
      }
      if (basket.length == 0) {
        document.getElementById("emptybasket").style.display = 'block';
        document.getElementById("basketitems").style.display = 'none';
        document.getElementById("payoutbutton").style.display = 'none';

      }
  }
  if (e.target.id == "plusmg") {
    // hapticFeedback.impactOccurred('soft');
    let obsf = e.target.getAttribute("data");
      let allclases = document.getElementsByClassName("countofcurrentitem");
      for (let i = 0; i < allclases.length; i++) {
        if (allclases[i].getAttribute("data") == obsf) {
            document.getElementById("summofbasket").innerText = Number(document.getElementById("summofbasket").innerText.split(" ")[0]) + Number(obsf.split("_")[2].split(" ")[0])+" рублей";
            allclases[i].innerText = Number(allclases[i].innerText) + 1
            basket.push(obsf);
            break;
        }
      }
  }
})


document.getElementById("about").addEventListener("click", (e) => {
  // if (backButton.mount.isAvailable()) {
  //       backButton.mount();
  //       backButton.isMounted(); // true
  //       }
  //        backButton.show();
  document.getElementById("mainmenu").style.display = 'none';
  document.getElementById("logoa").innerText = "О нас";
  document.getElementById("logoimg").src = "About.png";
  document.getElementById("divob").style.width = "274px";
  document.getElementById("divob").style.left = "calc(50% - 274px / 2);";
  document.getElementById("abouticon").style.display = 'block';
  // hapticFeedback.impactOccurred('light');

});
document.getElementById("kerosinkaadmin").addEventListener("click", (e) => {
  window.open("https://t.me/kerosinka_admin");
});

document.getElementById("putinfm").addEventListener("click", (e) => {
  
  window.open("https://t.me/putinfm");
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

