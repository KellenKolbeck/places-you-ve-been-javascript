$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedTimeOfYear = $("input#time-of-year").val();
    var inputtedNote = $("input#note").val();

    var newPlace = {place: inputtedPlace, landmark: inputtedLandmark, timeOfYear: inputtedTimeOfYear, note: inputtedNote};

    $("ul#places-you-been").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $("input#place").val("");
    $("input#landmark").val("");
    $("input#time-of-year").val("");
    $("input#note").val("");
  });
});
