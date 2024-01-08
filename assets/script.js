// When the document is ready
$(document).ready(function() {
  // Display the current day at the top of the calendar
  var currentDate = dayjs().format('dddd, MMM D, YYYY');
  $("#currentDay").text(currentDate);

  // Clear the container before adding new time blocks
  $(".container").empty();

  // Create time blocks for each hour from 9AM to 9PM
  for (var hour = 9; hour <= 21; hour++) {
    // Create a time label for the current hour
    var timeLabel = dayjs().hour(hour).minute(0).format('h A');

    // Determine if the hour is in the past, present, or future
    var isPast = hour < dayjs().hour();
    var isPresent = hour === dayjs().hour();

    // Create a new time block
    var timeBlock = $("<div>").addClass("row time-block");
    timeBlock.append(
      $("<div>").addClass("col-2 hour").text(timeLabel),
      $("<textarea>").addClass("col event " + (isPast ? "past" : isPresent ? "present" : "future")),
      $("<button>").addClass("col-1 saveBtn").html('<i class="far fa-save"></i>')
    );

    // Add the time block to the container
    $(".container").append(timeBlock);
  }

  // Allow a user to enter an event when they click a time block
  $(document).on("click", ".event", function() {
    $(this).addClass("active");
  });

  // Save the event in local storage when the save button is clicked
  $(document).on("click", ".saveBtn", function() {
    var eventText = $(this).parent().children(".event").val();
    var eventHour = $(this).parent().children(".hour").text();
    localStorage.setItem(eventHour, eventText);
  });
  

  // Retrieve and display saved events from local storage
  for (var hour = 9; hour <= 21; hour++) {
    var savedEvent = localStorage.getItem(dayjs().hour(hour).minute(0).format('h A'));
    if (savedEvent) {
      $(".hour:contains('" + dayjs().hour(hour).minute(0).format('h A') + "')").siblings(".event").val(savedEvent);
    }
  }
});
