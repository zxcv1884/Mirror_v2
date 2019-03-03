const first = document.querySelector('.first');
const firstNewsTitle = first.querySelector('.newsTitle');
const firstNewsContent = first.querySelector('.newsContent');
const firstTopTitle = first.querySelector('.top-title');
const firstDownTitle = first.querySelector('.down-title');
const firstQuoteFooter = first.querySelector('.blockquote-footer');
const second = document.querySelector('.second');
const secondNewsTitle = second.querySelector('.newsTitle');
const secondNewsContent = second.querySelector('.newsContent');
const secondTopTitle = second.querySelector('.top-title');
const secondDownTitle = second.querySelector('.down-title');
const secondQuoteFooter = second.querySelector('.blockquote-footer');
const third = document.querySelector('.third');
const thirdNewsTitle = third.querySelector('.newsTitle');
const thirdNewsContent = third.querySelector('.newsContent');
const thirdTopTitle = third.querySelector('.top-title');
const thirdDownTitle = third.querySelector('.down-title');
const thirdQuoteFooter = third.querySelector('.blockquote-footer');
let page1 = 1;
let page2 = 2;
let page3 = 3;
let category = "headline";
refresh1(page1);
refresh2(page2);
refresh3(page3);
let count = 0;
var mySwiper = new Swiper('.swiper-container', {
    observer: true,
    observeParents: true,
    direction: 'vertical',
    loop : true,
    slidesPerView:'auto',
    // loopedSlides: 3,
    initialSlide: 1,
    runCallbacksOnInit: 'true',
    on: {
        slideNextTransitionEnd: function () {
            count += this.realIndex;
            if (count > 2) {
                switch (this.realIndex) {
                    case 0:
                        page2 += 3;
                        refresh2(page2);
                        this.update();
                        this.slideTo(3,200,false);
                        break;
                    case 1:
                        page3 += 3;
                        refresh3(page3);
                        this.update();
                        break;
                    case 2:
                        page1 += 3;
                        refresh1(page1);
                        this.update();
                        break;
                }
            }
        },
        slidePrevTransitionEnd: function(){
            count += this.realIndex;
            if (count > 2) {
                switch (this.realIndex) {
                    case 0:
                        page3 -= 3;
                        refresh3(page3);
                        this.update();
                        break;
                    case 1:
                        page1 -= 3;
                        refresh1(page1);
                        this.update();
                        break;
                    case 2:
                        page2 -= 3;
                        refresh2(page2);
                        this.update();
                        this.slideTo(5,200,false);
                        break;
                }
            }
        },
    },
});

function refresh1(page1) {
    con.query("SELECT * FROM `news` WHERE `category` ='" + category + "' ORDER BY `news`.`time` DESC Limit 100", function (error, result) {
        firstQuoteFooter.innerText = '來源：' + (result[page1].realUrl);
        firstTopTitle.innerText = (result[page1 - 1].title);
        firstDownTitle.innerText = (result[page1 + 1].title);
        firstNewsTitle.innerText = (result[page1].title);
        firstNewsContent.innerHTML = (result[page1].article);
    });
}

function refresh2(page2) {
    con.query("SELECT * FROM `news` WHERE `category` ='" + category + "' ORDER BY `news`.`time` DESC Limit 100", function (error, result) {
        secondQuoteFooter.innerText = '來源：' + (result[page2].realUrl);
        secondTopTitle.innerText = (result[page2 - 1].title);
        secondDownTitle.innerText = (result[page2 + 1].title);
        secondNewsTitle.innerText = (result[page2].title);
        secondNewsContent.innerHTML = (result[page2].article);
    });
}

function refresh3(page3) {
    con.query("SELECT * FROM `news` WHERE `category` ='" + category + "' ORDER BY `news`.`time` DESC Limit 100", function (error, result) {
        thirdQuoteFooter.innerText = '來源：' + (result[page3].realUrl);
        thirdTopTitle.innerText = (result[page3 - 1].title);
        thirdDownTitle.innerText = (result[page3 + 1].title);
        thirdNewsTitle.innerText = (result[page3].title);
        thirdNewsContent.innerHTML = (result[page3].article);
    });
}