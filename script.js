$(document).ready(function() {
    let today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);
});


for (let i = 9; i <= 17; i++) {

    let row = $("<div>").addClass("time-block");
    row.attr("id", i);

    let hourCol = $("<div>").addClass("col-1 hour");
    hourCol.text(i + ":00");

    let eventCol = $("<div>").addClass("col-10 event");
    let eventInput = $("<textarea>").addClass("description");
    eventCol.append(eventInput);

    let saveCol = $("<div>").addClass("col-1 save");
    let saveBtn = $("<button>").addClass("saveBtn").text("Save");
    saveCol.append(saveBtn);

    row.append(hourCol, eventCol, saveCol);

    $(".container").append(row);

    let currentHour = moment().hour();

    if (i < currentHour) {
        
        eventInput.addClass("past");

    } else if (i === currentHour) {

        eventInput.addClass("present");

    } else {

        eventInput.addClass("future");
    }
}