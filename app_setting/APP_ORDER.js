const remote = require('electron').remote;
const $ = jQuery = require("jquery");


//APP滑動動畫宣告
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: true
})

//主畫面點擊app指令
$(document).ready(function () {


    $('body').on('click', '.swiper-slide-active', function () {
        var app = $(this);
        if (app.attr('id') === "close") {
            var window = remote.getCurrentWindow();
            window.close();
        }

        else {
            $("#app_de").load(app.data('htmllink'), function () {
                $(".pt-page-1").addClass("pt-page-moveToLeftFade");
                $(".pt-page-2").addClass("pt-page-current pt-page-moveFromRightFade");
                setTimeout(function () {
                    $(".pt-page-1").removeClass("pt-page-current pt-page-moveToLeftFade");
                    $(".pt-page-2").removeClass("pt-page-moveFromRightFade");
                    $("#app-info").hide();
                    $("#app-menu").hide();
                }, 1000);
            });
        }
    });






});


