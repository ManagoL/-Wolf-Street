
/** Функции модального окна*/


let modal = document.getElementById("myModal");


let btn_obmen = document.getElementById("btnObmen");

let SVG = document.getElementsByClassName("close")[0];


const svg_burger = document.querySelector('burger')

let int = document.querySelectorAll('.input_tranz')
let int1 = document.querySelector('.input_tranz1')

/** открытие модального окна */
btn_obmen.addEventListener("click", () => {
  // if (int[0].value <= 0 || int[1].value <= 0 || int1[2].value == '') {
  //   alert("Введите коректные значения");
  // } else {
  modal.showModal();
  document.body.classList.add('modal-open');

})

SVG.addEventListener("click", () => {
  modal.close()
  document.body.classList.remove('modal-open');
})


/** Модальная Регистрация */
let btn_avtor = document.querySelector('.Btn_avtor')
let dialog_avtor = document.querySelector('.dialog_avtor')

btn_avtor.addEventListener("click", () => {
  dialog_avtor.showModal()
})


/**Появление скрола при нажатие Esc*/
document.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    document.body.classList.remove('modal-open');
  }
});

/** Открытие бургер-меню*/
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

burger.addEventListener("click", function () {
  this.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.classList.toggle('modal-open');
})






