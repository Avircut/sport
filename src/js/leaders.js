import '../css/leaders.scss';
import './main';
import './cursor';
import './scroll';
import './slider';
import mixitup from 'mixitup';
const accordion = require('jquery-ui/ui/widgets/accordion');
const Vivus = require('vivus');
const Masonry = require('masonry-layout');
const mix = document.querySelector('.leaders__items');
$('.leaders__item:visible:nth-child(2)').addClass('mix__second');
const msnry = new Masonry(mix,{
  itemSelector:'.leaders__item',
  columnWidth:550,
  gutter:20,
  horizontalOrder:true
});
var mixer = mixitup('.leaders__items',{
  animation:{
    enable:false
  },
  callbacks:{
    onMixEnd: function(state){
      $('.mix__second').removeClass('mix__second');
      $('.leaders__item:visible').each(function(i) {
        if ( i === 1 ) $(this).addClass('mix__second');
      })
      masonryGrid();
    }
  }
});
function masonryGrid(){
  msnry.reloadItems();
  msnry.layout();
}
$('.leaders__item').on('click', (e) => {
  e.stopPropagation();
  $('.modal').removeClass('modal_opened');
  $('.burger__menu-wrapper').removeClass('burger__menu-wrapper_opened');
  $('#leader-info').toggleClass('modal_opened');
});
$(window).on('load',function(){
  $('.leader').mCustomScrollbar({
    theme:'my-theme'
  });
});
$('.leader__text').accordion({
  header:"h2",
  collapsible:true,
  activate:function (event, ui){
    $('.leader').mCustomScrollbar('update');
  }
});
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