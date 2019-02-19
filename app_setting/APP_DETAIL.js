
var magnifier = document.createElement("div");
magnifier.id = "magnifier";
magnifier.style.backgroundImage = "url(app_picture/magnifier.png)";
magnifier.className = "app swiper-slide";
magnifier.dataset.htmllink = "app_magnifier.html";

var calender = document.createElement("div");
calender.id = "calender";
calender.style.backgroundImage = "url(app_picture/calender.png)";
calender.className = "app swiper-slide";
calender.dataset.htmllink = "app_calender.html";

var news_de = document.createElement("div");
news_de.id = "news_de";
news_de.style.backgroundImage = "url(app_picture/news.png)";
news_de.className = "app swiper-slide";
news_de.dataset.htmllink = "app_news_de.html";

var setting = document.createElement("div");
setting.id = "setting";
setting.style.backgroundImage = "url(app_picture/setting.png)";
setting.className = "app swiper-slide";
setting.dataset.htmllink = "app_setting.html";

var close = document.createElement("div");
close.id = "close";
close.style.backgroundImage = "url(app_picture/close.png)";
close.className = "app swiper-slide";

var j = document.getElementById("swiper-wrapper");
j.appendChild(magnifier);
j.appendChild(calender);
j.appendChild(news_de);
j.appendChild(setting);
j.appendChild(close);

var all = document.querySelectorAll(".app");
var i;
for (i = 0; i < all.length; i++) {
    all[i].style.borderBottomStyle = "none";
    all[i].style.borderColor = "black";
    all[i].style.backgroundColor = "black";
    all[i].style.backgroundSize = "100% 100%";
    all[i].style.paddingTop = "20%";
    all[i].style.paddingBottom = "20%";
    all[i].style.paddingRight = "32.5%";
    all[i].style.paddingLeft = "32.5%";
}