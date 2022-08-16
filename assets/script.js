var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var saveBtn0 = document.querySelector(".saveBtn0");
var saveBtn1 = document.querySelector(".saveBtn1");
var saveBtn2 = document.querySelector(".saveBtn2");
var saveBtn3 = document.querySelector(".saveBtn3");
var saveBtn4 = document.querySelector(".saveBtn4");
var saveBtn5 = document.querySelector(".saveBtn5");
var saveBtn6 = document.querySelector(".saveBtn6");
var saveBtn7 = document.querySelector(".saveBtn7");
var saveBtn8 = document.querySelector(".saveBtn8");
var saveBtn9 = document.querySelector(".saveBtn9");
function saveInput(event){
    var input = event.target.attributes[0].value;
    var input2 = $("." + input).val();
    localStorage.setItem(input, input2);
}
$(".eight").val(localStorage.getItem("eight"))
$(".nine").val(localStorage.getItem("nine"))
$(".ten").val(localStorage.getItem("ten"))
$(".eleven").val(localStorage.getItem("eleven"))
$(".twelve").val(localStorage.getItem("twelve"))
$(".one").val(localStorage.getItem("one"))
$(".two").val(localStorage.getItem("two"))
$(".three").val(localStorage.getItem("three"))
$(".four").val(localStorage.getItem("four"))
$(".five").val(localStorage.getItem("five"))

saveBtn0.addEventListener("click", saveInput)
saveBtn1.addEventListener("click", saveInput)
saveBtn2.addEventListener("click", saveInput)
saveBtn3.addEventListener("click", saveInput)
saveBtn4.addEventListener("click", saveInput)
saveBtn5.addEventListener("click", saveInput)
saveBtn6.addEventListener("click", saveInput)
saveBtn7.addEventListener("click", saveInput)
saveBtn8.addEventListener("click", saveInput)
saveBtn9.addEventListener("click", saveInput)

//for loop for checking the time on the planner vs the current time and use the .addClass function to set the color scheme accordingly.  preset classes are past, future and present