$(document).ready(function() {
    let today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);
});


for (let i = 9; i <= 17; i++) {

    selectedHour = i;

    let row = $("<div>").addClass("time-block");
    row.attr("id", "time-" + i);

    let hourCol = $("<div>").addClass("col-1 hour");
    hourCol.text(i + ":00");

    let eventCol = $("<div>").addClass("col-10 event");
    let eventInput = $("<textarea>").addClass("description");
    eventInput.attr("id", i);
    eventInput.attr("required", "true");
    eventCol.append(eventInput);

    let saveBtn = $("<button>").addClass("col-1 saveBtn").text("Save");  
    let deleteBtn = $("<button>").addClass("col-1 deleteBtn").text("Delete");

    if (eventInput.val().trim() === "") {
        saveBtn.show();
        deleteBtn.hide();
    } else {
        saveBtn.hide();
        deleteBtn.show();
    }
    

    row.append(hourCol, eventCol, saveBtn, deleteBtn);

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


$(document).ready(function() {
    for (var i = 9; i <= 17; i++) {
        var event = localStorage.getItem("event-" + i);
        $("#time-" + i + " textarea").val(event);
    }
});


$(".saveBtn").on("click", function() {

    //if ($('textarea').val() == "") {
      //  alert("Please enter text in the textarea");
    //} else {
        var event = $(this).siblings().children("textarea").val();
        var hour = $(this).siblings(".hour").text();
        hour = parseInt(hour.substring(0, 2));
        localStorage.setItem("event-" + hour, event);
        $(".message").text("Event saved successfully.");
    //}

});

$(".deleteBtn").on("click", function() {
    $(this).siblings(".event").children("textarea").val("");
    var event = $(this).siblings().children("textarea").val();
    var hour = $(this).siblings(".hour").text();
    hour = parseInt(hour.substring(0, 2));  
    localStorage.removeItem("event-" + hour, event);
    $(".deletemessage").text("Event deleted successfully.");
});
