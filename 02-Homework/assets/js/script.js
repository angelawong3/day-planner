// display current day in header
var today = moment().format("MMMM Do YYYY, h:mm a");
$("#currentDay").text(today);

// TODO: each timeblock is color coded to indicate past, present, or future
var timeOfToday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var updateTimeBlock = () => {
  var currentTime = moment().format("H");
  console.log(currentTime);
  for (var i = 0; i < timeOfToday.length; i++) {
    if (parseInt(timeOfToday[i]) < currentTime) {
      $("#" + timeOfToday[i]).addClass(".past");
    } else if (parseInt(timeOfToday[i]) === currentTime) {
      $("#" + timeOfToday[i]).addClass(".present");
    } else if (parseInt(timeOfToday[i]) > currentTime) {
      $("#" + timeOfToday[i]).addClass(".future");
    }
  }
};
updateTimeBlock();

// save text inputted in local storage
$(".saveBtn").on("click", function () {
  var hour = $(this).parent().attr("id");
  var savedText = $(this).siblings(".addtext").val();

  localStorage.setItem(hour, savedText);
});

//saved events persist after refreshing the page
var hour9 = localStorage.getItem("9am");
$("#9am .addtext").val(hour9);

var hour10 = localStorage.getItem("10am");
$("#10am .addtext").val(hour10);

var hour11 = localStorage.getItem("11am");
$("#11am .addtext").val(hour11);

var hour12 = localStorage.getItem("12pm");
$("#12pm .addtext").val(hour12);

var hour13 = localStorage.getItem("1pm");
$("#1pm .addtext").val(hour13);

var hour14 = localStorage.getItem("2pm");
$("#2pm .addtext").val(hour14);

var hour15 = localStorage.getItem("3pm");
$("#3pm .addtext").val(hour15);

var hour16 = localStorage.getItem("4pm");
$("#4pm .addtext").val(hour16);

var hour17 = localStorage.getItem("5pm");
$("#5pm .addtext").val(hour17);
