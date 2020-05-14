function displayPicOfDay() {
  var nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  $.ajax({
    url: nasaUrl,
    method: "GET",
  }).then(function (response) {
    //A div to show the movie
    var photoDiv = $("<div class='photo-container'>");

    //Elements from the response I want to use on my page with their elements to be displayed
    var copyright = response.copyright;
    var copyrightParagraph = $("<p>").text(`Copyright: ${copyright}`);
    var date = response.date;
    var dateParagraph = $("<p>").text(`Date: ${date}`);
    var explanation = response.explanation;
    var explanationParagraph = $("<p>").text(`Explanation: ${explanation}`);
    var title = response.title;
    var titleEl = $("<h2>").text(`${title}`);
    var picOfDay = response.hdurl;
    var picOfDayImg = $("<img class='responsive-img'>").attr("src", picOfDay);

    photoDiv.append(
      titleEl,
      copyrightParagraph,
      dateParagraph,
      explanationParagraph,
      picOfDayImg
    );

    $("#picofday").append(photoDiv);
  });
}
displayPicOfDay();

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
});
