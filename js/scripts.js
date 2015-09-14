$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input.place-name").val();
    var inputtedLandmark = $("input.landmark").val();
    var inputtedTimeOfYear = $("input.time-of-year").val();
    var inputtedNote = $("input.note").val();

    var newPlace = {place: inputtedPlace, landmark: inputtedLandmark, timeOfYear: inputtedTimeOfYear, note: inputtedNote};

    $("ul#places-you-been").append("<li><span class='place'>" + newPlace.place + "</span></li>");

  $(".place").last().click(function() {
    $("#place-info").show();
    $("#place-info h2").text(newPlace.place);
    $(".place-name").text(newPlace.place);
    $(".landmark").text(newPlace.landmark);
    $(".time-of-year").text(newPlace.timeOfYear);
    $(".note").text(newPlace.note);
  });

    $("#show-places").show();
    $("input.place-name").val("");
    $("input.landmark").val("");
    $("input.time-of-year").val("");
    $("input.note").val("");
  });
});
