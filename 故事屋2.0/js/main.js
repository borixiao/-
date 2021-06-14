$(function () {
    AOS.init();
});
// navbar點擊後移動到頁面
$(".navbar1 .aclass").click(function () {
    console.log(this);
    const target = $(this).attr("href");
    // console.log("移動的目標", target);
    const position = $(target).offset().top;
    // console.log("座標", position);

    $("html,body").stop().animate({
        scrollTop: position
    }, 0);
    $(".animatestyle").toggleClass("animate__animated animate__bounceInDown");
})
// icon點擊後，有textsetting的元素會加上active這個屬性
$(".iconset").click(function () {

    $(".textSetting").toggleClass("active");

})
$('.carousel').carousel({
    interval: 200
})