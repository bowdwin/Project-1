
function displayPicOfDay(){
  var url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  
  $.ajax({
    url: url,
    method: 'GET'
  }).then(function(response){
    console.log(response)
    var copyright = response.copyright;
    var date = response.date;
    var explanation = response.explanation;
    var title = response.title;
    var picOfDay = response.hdurl;

    var photoDiv = $("<div>", {class: "photo-container",})
  });

              // var ratingParagraph = $('<p>').text('Rating: ' + rating)
              var copyrightParagraph = $("<p>").text(`Copyright: ${copyright}`);
              var dateParagraph = $("<p>").text(`Date: ${date}`);
              var explanationParagraph = $("<p>").text(`Explanation: ${explanation}`);
              var picOfDayImg = $("<img>", {
                src: picOfDay,
              });
  
              photoDiv.append(
               copyrightParagraph,
                dateParagraph,
                explanationParagraph,
                picOfDayImg
              );
  
              $("#picofday").append(photoDiv);
            });
};