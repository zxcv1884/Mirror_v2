
var a = document.createElement("button");
a.className = "aaa";
a.id = "a";
a.innerText = "點擊關閉";
$(document).ready(function () {
    $("#a").on("click", function () {
        var window = remote.getCurrentWindow();
        window.close();
    });
});
var add = document.getElementById("appclose");
add.appendChild(a);
