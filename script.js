// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () { 
var saveBtn = $(".saveBtn");
saveBtn.on('click' ,  function (event) {
  event.preventDefault();
  var value = $(this).siblings('.description').val(); // grabbing value of the element with class of description that is a sibling of the clicked saveBtn
  var time = $(this).parent().attr('id'); //get ID of the parent element of the clicked saveBtn

  console.log ("EVENT: " + value);
  console.log (time);
  localStorage.setItem(time, value); //save to localstorage with time as key and value as value 

})
var currentHour = dayjs().format('H');
console.log (currentHour);

var displayDate = dayjs().format('MMM, D, YYYY');
console.log (displayDate);




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
