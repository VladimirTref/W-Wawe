document.addEventListener('DOMContentLoaded', function() {

  // select

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  });

  // accordion

  // new Accordion('.guests__accordion', {
  //   elementClass: 'accordion',
  //   triggerClass: 'accordion__control',
  //   panelClass: 'accordion__content',
  //   activeClass: 'accordion-active'
  // });

  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false,
      width: 700,
    });
  });

  let item = document.querySelector('.accordion__item');
  let def = document.querySelector('.guests__cards__default');
  let card = document.querySelector('.guests__cards');

  item.addEventListener("click", function() {
    card.classList.toggle("closed");
    def.classList.toggle("closed");
  });

  $( function() {
    $( "input" ).checkboxradio({
    });
  } );

  // $( function() {
  //   $( "#slider" ).slider({
  //     disable: true
  //   });
  // } );

  // swiper

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')

  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  })
  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  })




})
