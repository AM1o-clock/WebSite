var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function() {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function() {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});


// アコーディオンのタイトルがクリックされたら
$('.accordion-title').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(this).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});