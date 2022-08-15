var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var saveBtn = document.querySelector(".saveBtn");
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

saveBtn.addEventListener("click", saveInput)