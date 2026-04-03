// ヘッダーの読み込み
fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);



// ハンバーガーメニュー
(function($) {
  var $body = $('body'); 
  var $btn  = $('#nav-btn');
  var $nav  = $('#header-nav');
  var open  = 'open';

  // ハンバーガークリック
  $btn.on('click', function(e) {
    e.stopPropagation(); // ← 外クリックと干渉防止

    $body.toggleClass(open);
    $btn.toggleClass('active');
  });
  // メニュー内クリックは閉じない
  $nav.on('click', function(e) {
    e.stopPropagation();
  });
  // メニュー外クリックで閉じる
  $(document).on('click', function() {
    $body.removeClass(open);
    $btn.removeClass('active');
  });
  // アコーディオン
  $('.accordion').on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.submenu').slideToggle();
  });

})(jQuery);



//スライドショー
$(function() {
  $('.slider').slick({
    autoplay: true, //自動再生ON
	fade: true, // fedeオン
	speed: 1000,//スライドのスピード。初期値は300。
	arrows: false, //左右矢印OFF
    dots: false, //ドットインジケーターOFF
    centerMode: true, //両サイドに前後のスライド表示
    centerPadding: '0px', //左右のスライドのpadding
    slidesToShow: 1, //一度に表示するスライド数
  });
});



//ヘッダーの文の大きさ調整
function fitText(el) {
  const maxWidth = el.clientWidth;

  let min = 10;
  let max = 300;

  el.style.whiteSpace = 'nowrap';

  while (max - min > 1) {
    let mid = Math.floor((min + max) / 2);
    el.style.fontSize = mid + 'px';

    if (el.scrollWidth > maxWidth) {
      max = mid;
    } else {
      min = mid;
    }
  }
  el.style.fontSize = min + 'px';
}

function init() {
  const el = document.querySelector('.hero p');

  if (window.innerWidth >= 768) {
    fitText(el);
  } else {
    el.style.fontSize = '';
  }
}

window.addEventListener('load', init);
window.addEventListener('resize', init);



//フォトギャラリー(当院についてページ)
const swiper = new Swiper('.swiper', {
  loop: true,

  slidesPerView: 1.4, // スマホは少し見切れる
  centeredSlides: true, // ← 中央寄せ（重要）
  spaceBetween: 15,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true
    }
  }
});



// スクロールした時ふわっと出現するエフェクト
$('.effect').on('inview', function() {
	 var $item = $(this);
	 $item.addClass('start');
});



// サイトアクセス時フェードイン 
$(function(){
    $('body').hide();
    $('body').fadeIn(300);
});
$(window).fadeThis();