$(document).ready(function() {
  // Display the current day at the top of the calendar
  $("#currentDay").text(dayjs().format('dddd, MMM D, YYYY'));

  // Clear the container before adding new time blocks
  $(".container").empty();

  // Present timeblocks for standard business hours
  for (var hour = 9; hour <= 21; hour++) {
    var timeLabel = dayjs().hour(hour).minute(0).format('h A');
    var isPast = hour < dayjs().hour();
    var isPresent = hour === dayjs().hour();
    var timeRow = $("<div>").addClass("row time-block");
    timeRow.append(
      $("<div>").addClass("col-2 hour").text(timeLabel),
      $("<textarea>").addClass("col event " + (isPast ? "past" : isPresent ? "present" : "future")),
      $("<button>").addClass("col-1 saveBtn").html('<i class="far fa-save"></i>')
    );
    $(".container").append(timeRow);
  }

  // Allow a user to enter an event when they click a timeblock
  $(document).on("click", ".event", function() {
    $(this).addClass("active");
  });

  // Save the event in local storage when the save button is clicked
  $(document).on("click", ".saveBtn", function() {
    var eventText = $(this).siblings(".event").val();
    var eventHour = $(this).siblings(".hour").text();
    localStorage.setItem(eventHour, eventText);
  });

  // Persist events between refreshes of a page
  for (var hour = 9; hour <= 21; hour++) {
    var savedEvent = localStorage.getItem(dayjs().hour(hour).minute(0).format('h A'));
    if (savedEvent) {
      $(".hour:contains('" + dayjs().hour(hour).minute(0).format('h A') + "')").siblings(".event").val(savedEvent);
    }
  }
});
