$(document).ready(function() {
    let today = moment().format("dddd, MMMM Do");
    $("#currentDay").text(today);
});


function updateBtnVisibility(eventInput, saveBtn, deleteBtn) {
    if (eventInput.val().trim() === "") {
        saveBtn.show();
        deleteBtn.hide();
    } else {
        saveBtn.hide();
        deleteBtn.show();
    }
}


for (let i = 9; i <= 17; i++) {

    let ampm = "AM";
    let hour = i;

    if (i > 12) {
        ampm = "PM";
        hour -= 12;
    }

    selectedHour = i;

    let row = $("<div>").addClass("time-block");
    row.attr("id", "time-" + i);

    let hourCol = $("<div>").addClass("col-1 hour");
    hourCol.text(hour + ":00 " + ampm);

    let eventCol = $("<div>").addClass("col-10 event");
    let eventInput = $("<textarea>").addClass("description");
    eventInput.attr("id", i);
    eventInput.attr("required", "true");
    eventCol.append(eventInput);

    let saveBtn = $("<button>").addClass("col-1 saveBtn").text("Save");  
    let deleteBtn = $("<button>").addClass("col-1 deleteBtn").text("Delete");
    updateBtnVisibility(eventInput, saveBtn, deleteBtn);

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

    saveBtn.click(function() {
        if (eventInput.val().trim() === "") {
            saveBtn.show();
            deleteBtn.hide();
        } else {
            saveBtn.hide();
            deleteBtn.show();
        }
    });

    deleteBtn.click(function() {
        eventInput.val("");
        saveBtn.show();
        deleteBtn.hide();
    });
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
        $(".message").text("✅ Event saved successfully.");
        $(".deletemessage").empty();
    //}

});

$(".deleteBtn").on("click", function() {
    $(this).siblings(".event").children("textarea").val("");
    var event = $(this).siblings().children("textarea").val();
    var hour = $(this).siblings(".hour").text();
    hour = parseInt(hour.substring(0, 2));  
    localStorage.removeItem("event-" + hour, event);
    $(".deletemessage").text("❌ Event deleted successfully.");
    $(".message").empty();
});
