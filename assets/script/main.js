// ハンバーガーメニュー
var hamburger = $('.hamburger__menu');
$('.hamburger__button').on('click', function () {
  hamburger.toggleClass('hamburger__menu--active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger__menu--active');
});



// アコーディオン
$(function () {
  $('.accordion__item--answer').hide();
  $('.accordion__item--question').on('click', function () {
    $(this).toggleClass("open");
    $(this).next().slideToggle();
    $(this).parent().toggleClass("open");

  });
});


// カルーセル
const mySwiper = new Swiper('.swiper', {
  slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  centeredSlides: true, // アクティブなスライドを中央に配置する
  speed: 500, // スライドアニメーションのスピード（ミリ秒）

  autoplay: { // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },

  grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
  watchSlidesProgress: true, // スライドの進行状況を監視する

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: "clickable",
  },

});

