//1.top画像　カルーセル⚪︎
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay:true,
  autoplaySpeed:3000,
  cssEase: 'linear'//開始から終了まで一定に変化する？
});


//2.navbottonホバー時にアニメーションで不透明にする⚪︎
/*
$(function () {
  // ボタンアニメーション hover時半透明にする
  $('.header-logo1,.header-menu > a').on('mouseover', function () {
    $(this).animate({
      opacity: 0.5,
    }, 100);
  });
  //hoverじゃなくなったら戻す
  $('.header-logo1,.header-menu > a').on('mouseout', function () {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });
});
*/

$(function () {
  // ボタンアニメーション hover時半透明にする
  $('.header-logo1,.header-menu > a').on({
    'mouseover': function () {
      $(this).animate({
        opacity: 0.5,
      }, 100);
    },
    'mouseout': function () {
      $(this).animate({
        opacity: 1.0,
      }, 100);
    }
  });
});


//3.scrollすると右下にTOPに戻るボタン出るようにする⚪︎100px境に、、、

$(window).on('scroll', function(){

//console.log();
  if( $(this).scrollTop() > 100 ){
//    console.log("100より大きい");
//    $('.page-top').fadeIn();
    $('.page-top').addClass("is-show");
    
  }else{
//    console.log("100よりちいさい");
//    $('.page-top').fadeOut();
    $('.page-top').removeClass("is-show");
  }

});


//フェードアウトコード例　fadeIn()　fadeToggle()
$(function () {
  // id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on('click', function() {
    // フェードアウトする
    $('.box').fadeOut();
  });
});


//4.ページ内リンクに飛ぶ時のスクロールを滑らかにする
// #page-topをクリックした際の設定
$('.page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

//about,worksをクリックした時のスクロールを滑らかにする
$(function () {
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    let speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

//5.スクロールした時にセクションをフェードインさせる⚪︎
// フェードインさせたい要素が、画面の表示領域内に入ったら。
// スクロールエフェクト
$(function(){
  $(window).scroll(function (){
      $('.section-center').each(function(){
          let position = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > position - windowHeight + 100){
            $(this).addClass('active');
          }
      });
  });
});

//if (scroll > position - windowHeight){
//  $(this).addClass('active');
//}  ↑これだとすぐに表示されるからwindowHeight + 100で少し遅らせる


//6.worksの画像クリックしたときにモーダルで拡大する⚪︎、❌ボタンでモーダルを閉じる
//プラグインなしで自作。
// まず、モダールが表示状態を作る。→display:none;　→画像くりっくしたらdisplay:block;

// モーダルウィンドウ全体を指す要素
const modal = document.getElementById('modal');

// モーダル内で拡大表示される画像を指す要素
const modalImg = document.getElementById('modalImage');

// .popupクラスを持つ画像のリストです。これらの画像をクリックすると、モーダルが表示されます
const imgs = document.querySelectorAll('.works-item > img');

// モーダルを閉じるためのボタン
const closeSpan = document.getElementById('close');

// 画像クリックでモーダルを表示するイベント
for( let img of imgs) {
    img.onclick = function(){

        //モーダルを表示する
        modal.style.opacity = "1";
        modal.style.visibility = "visible";

        // モーダルで表示する画像に、クリックした画像のパスを設定する
        modalImg.src = this.src;
    }
}

// クローズボタンを押したらモーダルを閉じる
closeSpan.onclick = function() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

// 画像以外の部分をクリックしたらモーダルを閉じる
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
    }
}