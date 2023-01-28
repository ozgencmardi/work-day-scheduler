$(document).ready(function() {
    let today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);
});


for (let i = 9; i <= 17; i++) {
//for (let i = 0; i <= 23; i++) {

    let row = $("<div>").addClass("time-block");
    row.attr("id", "time-" + i);

    let hourCol = $("<div>").addClass("col-1 hour");
    hourCol.text(i + ":00");

    let eventCol = $("<div>").addClass("col-10 event");
    let eventInput = $("<textarea>").addClass("description");
    eventInput.attr("id", i);
    eventCol.append(eventInput);

    let saveBtn = $("<button>").addClass("col-1 saveBtn").text("Save");

    row.append(hourCol, eventCol, saveBtn);

    $(".container").append(row);

    let currentHour = 15;

    if (i < currentHour) {
        
        eventInput.addClass("past");

    } else if (i === currentHour) {

        eventInput.addClass("present");

    } else {

        eventInput.addClass("future");
    }
}


$(document).ready(function() {
    for (var i = 9; i <= 17; i++) {
        var event = localStorage.getItem("event-" + i);
        $("#time-" + i + " textarea").val(event);
    }
});


$(".saveBtn").on("click", function() {
    var event = $(this).siblings().children("textarea").val();
    var hour = $(this).siblings(".hour").text();
    console.log(hour)
    hour = parseInt(hour.substring(0, 2));
    console.log(hour)
    localStorage.setItem("event-" + hour, event);
});