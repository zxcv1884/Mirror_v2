
var youtube = document.createElement("div");
youtube.id = "youtube";
youtube.style.backgroundImage = "url(app_picture/YOUTUBE.png)";
youtube.className = "app swiper-slide";

var facebook = document.createElement("div");
facebook.id = "facebook";
facebook.style.backgroundImage = "url(app_picture/FACEBOOK.png)";
facebook.className = "app swiper-slide";

var weather = document.createElement("div");
weather.id = "weather";
weather.style.backgroundImage = "url(app_picture/WEATHER.png)";
weather.className = "app swiper-slide";



var j = document.getElementById("swiper-wrapper");
j.appendChild(youtube);
j.appendChild(facebook);
j.appendChild(weather);

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