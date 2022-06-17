import 'slick-carousel/slick/slick'; 
const Vivus = require('vivus');
// При инициализации слайдера добавляет анимации на стрелки
jQuery($('.banner__info-slides').on('init',(slick) => {
  jQuery('<div>', {
    class: 'arrow__circle'
  }).prependTo('.slick-arrow');
  let arrows = $('.arrow__circle');
  arrows.each((index,el) => {
    arrows[index] = new Vivus(el,{
      duration:200,
      file:`./images/icons/circle.svg`,
      type:"oneByOne",
      start:"manual"
    })
    $(arrows[index].parentEl.parentElement).on('mouseover', () => {
      arrows[index].play(3);
    })
    $(arrows[index].parentEl.parentElement).on('mouseleave', () => {
      arrows[index].play(-3);
    })
})
}))
$('.banner__info-slides').slick({
  asNavFor: '.banner__images',
  slide:'div',
  focusOnSelect: true,
  rows:0,
  arrows:true,
  appendArrows:'.banner__arrows',
  fade:true,
  focusOnSelect: true,
  speed:0,
  autoplaySpeed:1000
});
$('.banner__images').slick({
  asNavFor: '.banner__info-slides',
  arrows:false,
  speed:1500,
  fade:true
});
