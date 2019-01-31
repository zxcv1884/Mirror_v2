
var youtube = document.createElement("div");
youtube.id = "youtube";
youtube.style.backgroundImage = "url(app_picture/YOUTUBE.png)";
youtube.className = "app swiper-slide";

var facebook = document.createElement("div");
facebook.id = "facebook";
facebook.style.backgroundImage = "url(app_picture/FACEBOOK.png)";
facebook.className = "app swiper-slide";

var weather_de = document.createElement("div");
weather_de.id = "weather_de";
weather_de.style.backgroundImage = "url(app_picture/WEATHER.png)";
weather_de.className = "app swiper-slide";

var news_de = document.createElement("div");
news_de.id = "news_de";
news_de.style.backgroundImage = "url(app_picture/news.png)";
news_de.className = "app swiper-slide";

var setting = document.createElement("div");
setting.id = "setting";
setting.style.backgroundImage = "url(app_picture/setting.png)";
setting.className = "app swiper-slide";

var close = document.createElement("div");
close.id = "close";
close.style.backgroundImage = "url(app_picture/close.png)";
close.className = "app swiper-slide";

var j = document.getElementById("swiper-wrapper");
j.appendChild(youtube);
j.appendChild(facebook);
j.appendChild(weather_de);
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