// ヘッダーの読み込み
fetch("header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);



// ハンバーガーメニュー




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