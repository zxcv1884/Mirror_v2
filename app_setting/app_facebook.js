var a = document.createElement("button");
const $ = jQuery = require("jquery");

a.id = "a";
a.innerText = "點擊關閉";
a.className = "app swiper-slide";

$('#a').on('click', function () {
    var window = remote.getCurrentWindow();
    window.close();
});