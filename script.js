//wrap js file in dom function

$(function () { 
var saveBtn = $(".saveBtn");
saveBtn.on('click' ,  function (event) {
  event.preventDefault();
  var value = $(this).siblings('.description').val(); // grabbing value of the element with class of description that is a sibling of the clicked saveBtn
  var time = $(this).parent().attr('id'); //get ID of the parent element of the clicked saveBtn

  console.log ("EVENT: " + value);
  console.log (time);
  localStorage.setItem(time, value); //save to localstorage with time as key and value as value so we can see the saved event with the correlating time

})


var displayDate = dayjs().format('MMM, D, YYYY');
console.log (displayDate); //getting current date to display at top of page 

var displayP= $("#currentDay"); // value we are going to append to the element with a class of #currentDay

displayP.append(displayDate); //appending the display date to the p element in the HTML


// use this function to compare the current time to the time on the scheduler to see if it is past, present, or future 
function hourUpdater()  {
var timeNow = dayjs().format('h'); //timeNow is current in 12 hour clock 
// console.log (timeNow);
$(".time-block").each(function () { //.time-block is the class for each div so this should loop through each time div
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//add class/color based on time
  if (timeNow ===blockTime) {
    $(this).addClass("present");
  } else if (timeNow < blockTime) {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  } else if (timeNow > blockTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
})
}

//call hourUpdater function
hourUpdater();

})
