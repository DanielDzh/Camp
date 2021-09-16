/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/js/camp.js ***!
  \******************************/
// window.onload = function () {
//   console.error(111);
// }



$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 0);
  });
});

function SlowScroll(id) {
  var offset = 0;
$('html, body').animate({
      scrollTop: $(id).offset ().top - offset
  }, 0);

  return false;
}


let sulka = document.querySelectorAll(".sulka");
for(let a = 2; a < sulka.length; a++){
  if(a == 2){
    sulka[a].addEventListener("click", function () {
      $('html, body').animate({
        scrollTop: $('.block_awaits_you').offset ().top - 0
    }, 0);
    });
  }
  if(a == 3){
    sulka[a].addEventListener("click", function () {
      $('html, body').animate({
        scrollTop: $('.Enter').offset ().top - 0
    }, 0);
    });
  }
  if(a == 4){
    sulka[a].addEventListener("click", function () {
      $('html, body').animate({
        scrollTop: $('.teachers').offset ().top - 0
    }, 0);
    });
  }
  if(a == 5){
    sulka[a].addEventListener("click", function () {
      $('html, body').animate({
        scrollTop: $('.galery').offset ().top - 0
    }, 0);
    });
  }
  if(a == 6){
    sulka[a].addEventListener("click", function () {
      $('html, body').animate({
        scrollTop: $('.reviews').offset ().top - 0
    }, 0);
    });
  }
}



$(document).ready(function() {
  $('.header_burger').click(function(event){
     $('.header_burger,.header_menu,.socset').toggleClass('active');
     $('body').toggleClass('lock');
 });
 $('.button_2und').click(function(event){
   $('.header_menu1,.button_2und, .button_2und span').toggleClass('active');
   $('body').toggleClass('lock');
 })
  $('.button_3und').click(function(event){
    $('.header_menu2,.button_3und, .button_3und span').toggleClass('active');
    $('body').toggleClass('lock');
  })
  $('.selectBox1').click(function(event){
   $('.header_menu2,.button_3und, .button_3und span').toggleClass('active');
   $('body').toggleClass('lock');
 })
});







$(function () {
  $('.rev_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    responsive: [{
      breakpoint: 924,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
     } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
}); // $(document).ready(function(){
// 	$('.slider').slick({
// 		arrows:true,
// 		// dots:true,
// 		centerMode:true,
// 		slidesToShow:3,
// 		autoplay:false,
// 		speed:1000,
// 		autoplaySpeed:800,
// 		centerPadding: 0,
// 		responsive:[
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow:2
// 				}
// 			},
// 			{
// 				breakpoint: 550,
// 				settings: {
// 					slidesToShow:1
// 				}
// 			}
// 		]
// 	});
// });



$(function () {
  $('.teach_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [{
      breakpoint: 924,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode:true
      }
     }
    ]
  });
});


const BigImg = document.getElementsByClassName('gallery_item');
if(BigImg.length >= 5){
  BigImg[0].classList.add('gallery_item_big');
  BigImg[5].classList.add('gallery_item_big');

}
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;
// if(popupLinks){
    function POPUP(arg) {
      const curentPopup = document.getElementById('popup');
    
      var cart = arg.src;
      popupOpen(curentPopup, cart);
    }
    for(let a = 0; a < BigImg.length; a++){
      BigImg[a].addEventListener("click", function (arg) {
        const curentPopup = document.getElementById('popup');
      
        var cart = arg.path[0].src;
        // console.log(arg.path[0]);
        popupOpen(curentPopup, cart);
      });
    }
// }

function popupOpen(curentPopup, cart){
  if(curentPopup && unlock){
    const popupActive = document.querySelector('.popup.open');
    if(popupActive){
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.remove('gray');
    document.querySelector('#popup_content').innerHTML = '<img src = "'+cart+'">';
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if(!e.target.closest('.popup_content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true){
  if(unlock){
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnlock();
    }
  }
}

function bodyLock(){
  body.classList.add('lock');

  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}

function bodyUnlock(){
  setTimeout(function() {
    body.classList.remove('lock');
  }, timeout)
}








var popuppLinks = document.getElementsByClassName('popupp-link');
var bodyy = document.querySelector('body');
var unlockk = true;
var timeoutt = 800;
for(let a = 0; a < popuppLinks.length; a++){
popuppLinks[a].addEventListener("click", function (e) {
  var curentPopupp = document.getElementsByClassName('popupp');
  // for(let b = 0; b < curentPopupp.length; b++){
  popupOpenn(curentPopupp[a]);
  // }
  e.preventDefault();

});
}

function popupOpenn(curentPopupp) {
  if (curentPopupp && unlockk) {
    var popupActivee = document.querySelector('.popupp.open');

    if (popupActivee) {
      popupClosee(popupActivee, false);
    } else {
      bodyLockk();
    }

    curentPopupp.classList.add('open');
    curentPopupp.addEventListener("click", function (e) {
      if (!e.target.closest('.popupp_content')) {
        popupClosee(e.target.closest('.popupp'));
      }
    });
  }
}

function popupClosee(popupActivee) {
  var doUnlockk = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlockk) {
    popupActivee.classList.remove('open');

    if (doUnlockk) {
      bodyUnlockk();
    }
  }
}

function bodyLockk() {
  bodyy.classList.add('lock');
  unlockk = false;
  setTimeout(function () {
    unlockk = true;
  }, timeoutt);
}

function bodyUnlockk() {
  setTimeout(function () {
    bodyy.classList.remove('lock');
  }, timeoutt);
}

console.log(window.outerWidth);
if(window.outerWidth > 930){
window.onload = function(){
var arrImg = document.querySelectorAll(".teach_slider .slide");
var ind = [];
for(let a = 0; a < arrImg.length; a++){
  ind[a] = arrImg[a].dataset.slickIndex;
  // console.log(ind[a]);
}
// console.log(arrImg[8]);
// console.log(arrImg[8].dataset.slickIndex);
var ccount = 0;
var countWidth = 0;
  arrImg[ccount+5].querySelector('.teach').classList.add('heigthhh');
  arrImg[ccount+6].querySelector('.teach').classList.add('heigthh');
  arrImg[ccount+7].querySelector('.teach').classList.add('heigth');
  arrImg[ccount+8].querySelector('.teach').classList.add('heigthh');
   arrImg[ccount+9].querySelector('.teach').classList.add('heigthhh');
  
    var next = document.getElementsByClassName("slick-next");
    next[0].classList.add('nextt');
    var prev = document.getElementsByClassName("slick-prev");
    prev[0].classList.add('prevv');
  
document.querySelector('.prevv').onclick = function() {
  if(ccount !== -1){
    arrImg[ccount+5].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.remove('heigth');
    ccount--;
    console.log(ccount)
    arrImg[ccount+5].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.add('heigth');
  }
  if(ccount === -1){
    arrImg[ccount+5].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.remove('heigth');
    ccount = arrImg.length-12;

    arrImg[ccount+5].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.add('heigth');
  }

};
// }


  // if(countWidth < arrImg.length){
document.querySelector('.nextt').onclick = function() {
  // console.log("111")
  // if(countt < arrImg.length-3){
    // Trans[0].style.transitionDuration = 500 + 'ms';
    if(ccount !== arrImg.length-11){
    arrImg[ccount+5].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.remove('heigth');
    ccount++;
    console.log(ccount)
    arrImg[ccount+5].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.add('heigth');
  }
  if(ccount === arrImg.length-11){
    // Trans[0].style.transitionDuration = 0 + 's';
    arrImg[ccount+5].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.remove('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.remove('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.remove('heigth');
    // position = 0;
    // countt = 2;
    ccount = 0;

    arrImg[ccount+5].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+9].querySelector('.teach').classList.add('heigthhh');
    arrImg[ccount+6].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+8].querySelector('.teach').classList.add('heigthh');
    arrImg[ccount+7].querySelector('.teach').classList.add('heigth');
  }
}
};
  }
  // }

/******/ })()
;


