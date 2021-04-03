const currentDayEl = document.getElementById("currentDay");

currentDayEl.append(moment().format("dddd, MMMM Do"));

const lastDate = localStorage.getItem("date");
const currentDate = moment().format('YYYY-MM-DD');
const td = moment().subtract(1, 'd');
const testDate = td.format('YYYY-MM-DD');
console.log(lastDate);
console.log(currentDate);
console.log(testDate)

console.log(moment(`${currentDate}`).isBefore(`${testDate}`));

if (!lastDate) {
    localStorage.setItem("date", currentDate);
}

if (moment(`${currentDate}`).isAfter(`${lastDate}`)) {
    localStorage.clear();
    $("#update").append("Today is a new day! The contents of your schedule from a previous day were cleared.")
    $("#update").addClass("update");
}

var hoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var currentTime = moment().hour();

function setBackground () {
    for (var i = 0; i < hoursArr.length; i++) {
        if (hoursArr[i]<currentTime) {
            $(`#ta${(i + 9)}`).addClass("past");
        } else if (hoursArr[i]>currentTime) {
            $(`#ta${(i + 9)}`).addClass("future");
        } else {
            $(`#ta${(i + 9)}`).addClass("present");
        }
    }
}

setBackground();

$("#btn9").on("click", function(){
    var text = $("#ta9").val();
    localStorage.setItem("text9", text);
    $("#ta9").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn10").on("click", function(){
    var text = $("#ta10").val();
    localStorage.setItem("text10", text);
    $("#ta10").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn11").on("click", function(){
    var text = $("#ta11").val();
    localStorage.setItem("text11", text);
    $("#ta11").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn12").on("click", function(){
    var text = $("#ta12").val();
    localStorage.setItem("text12", text);
    $("#ta12").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn13").on("click", function(){
    var text = $("#ta13").val();
    localStorage.setItem("text13", text);
    $("#ta13").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn14").on("click", function(){
    var text = $("#ta14").val();
    localStorage.setItem("text14", text);
    $("#ta14").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn15").on("click", function(){
    var text = $("#ta15").val();
    localStorage.setItem("text15", text);
    $("#ta15").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn16").on("click", function(){
    var text = $("#ta16").val();
    localStorage.setItem("text16", text);
    $("#ta16").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

$("#btn17").on("click", function(){
    var text = $("#ta17").val();
    localStorage.setItem("text17", text);
    $("#ta17").css({"border-color":"red", "border":"1px 1px 1px 1px", "border-style":"solid"});
});

function setText () {
    for (var i = 0; i < hoursArr.length; i++) {
        var text = localStorage.getItem(`text${i + 9}`);
        var textTrim = $.trim(text);
        $(`#ta${i + 9}`).attr("placeholder", `${textTrim}`);
    }
}

setText();

$(".clearBtn").on("click", function(){
    localStorage.clear();
    window.location.reload();
});