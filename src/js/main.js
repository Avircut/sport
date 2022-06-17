// Burger Инициализация (перенос элементов из обычного менюю)
$list = $('.nav__menu-item');
$list.each((index, el) => {
  $clone = $(el).clone(true);
  $clone
  .removeClass('nav__menu-item')
  .addClass('burger__menu-item')
  $clone    
  .children('a')
  .addClass('burger__menu-link')
  .removeClass('nav__menu-link');
  $('.burger__menu').append($clone);
});
// Контакты
$contacts= $('.top-line__contacts');
$contacts = $contacts.clone(true);
$contacts= $contacts.removeClass().addClass('burger__contacts');
$('.burger__menu-wrapper').append($contacts);
// Глаз
$eye = $('.top-line__eye');
$eye = $eye.clone(true);
$eye = $eye.removeClass().addClass('burger__eye');
$('.burger__features').append($eye);
// Поиск
$search = $('.top-line__search');
$search = $search.clone(true);
$search = $search.removeClass().addClass('burger__search');
$('.burger__features').append($search);
// Бургер
$('.top-line__burger').on('click', (e) => {
  e.stopPropagation();
  $('.burger__menu-wrapper').toggleClass('burger__menu-wrapper_opened');
});
$('.burger__closeBtn').on('click', (e) => {
  e.stopPropagation();
  $('.burger__menu-wrapper').toggleClass('burger__menu-wrapper_opened');
})
// Форма в футере
$('.footer__contactBtn').on('click', (e) => {
  e.stopPropagation();
  $('.form-wrapper').toggleClass('form-wrapper_opened');
});
$('.form__closeBtn').on('click', (e) => {
  e.stopPropagation();
  $('.form-wrapper').removeClass('form-wrapper_opened');
})
// Закрытие по клику вне формы/меню в бургере
$(document).on('click', (e) => {
  let $target = $(e.target);
  if(!$target.closest('.burger__menu-wrapper_opened').length)
    $('.burger__menu-wrapper').removeClass('burger__menu-wrapper_opened');
  if(!$target.closest('.form-wrapper_opened').length){
    $('.form-wrapper').removeClass('form-wrapper_opened');
  }
})