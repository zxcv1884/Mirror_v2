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
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop : true,
});
var swiper = new Swiper('.swiper-con');
let category = "headline";
con.query("SELECT * FROM `news` WHERE `category` ='" + category + "' ORDER BY `news`.`time` ASC Limit 100", function (error, result) {
    firstQuoteFooter.innerText='來源：'+(result[0].realUrl);
    firstTopTitle.innerText=(result[99].title);
    firstDownTitle.innerText=(result[1].title);
    firstNewsTitle.innerText=(result[0].title);
    firstNewsContent.innerHTML=(result[0].article);
});

// firstTopTitle.innerText='【KINGDOM HEARTS III】王國之心3攻略隱藏BOSS簡易攻略法';
// firstDownTitle.innerText= 'MHW X Witcher 3 超誠意聯乘、居然仲有新劇情！';
// firstNewsTitle.innerText='臉書談鴻海食安管理 郭台銘每天與員工一樣在公司吃飯';
// firstNewsContent.innerHTML='鴻海董事長郭台銘臉書開張後，持續分享個人對各類議題看法，最新分享鴻海的「食安管理」。他在臉書貼文指出，鴻海集團雖然不是食品公司，但在土城，深圳，鄭州等地都建立高標準的食品檢驗實驗室，每天各廠區都對員工「食的安全」進行把關，並透露自己每天和員工一樣在公司吃飯。<br>郭台銘21日晚間在臉書分享永齡有機農場分送有機農產品到鴻海土城廠區、食品安全實驗室檢測快速篩檢作業流程的影片，並在臉書貼文提到，企業管理「大處著眼，小處著手」，每天做，重複做，做到好，就是日常。<br>他說，鴻海集團雖然不是食品公司，但在土城，深圳，鄭州等地都建立了高標準的食品檢驗實驗室，每天各廠區都對員工「食的安全」進行把關。除了高標準的各種檢驗項目，為了能快速得到結果，其中30秒農藥快篩技術，即時保障食材安全，是鴻海高科技幫助食安的最佳範例。<br>郭董並透露，自己每天和員工一樣在公司吃飯，他強調，高科技發展就是為了生活日常，把最基本的需求照顧好，學問並不高深，唯有要求徹底執行。最後他還提到，相關影片分享數達100以上，就將會公布董事長辦公室7天健康菜單。<br>'
