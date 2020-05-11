var queryURL = 'https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets';


$.ajax({
    url: queryURL,
    method: 'GET',

}).then(function (response) {
    console.log(response);
    console.log(queryURL);
    // empty content from mercury id so that new info can be populated 
    $("#mercuryCard").empty();

    // ***************Create elements for pulling info from mercury index***************
    var mercDiameter = $("<p>").text("Diameter: " + response[0].diameter + " km");
    var mercMass = $("<p>").text("Mass: " + response[0].mass + " x10^24 kg (0.06 x Earth's)");
    var mercDensity = $("<p>").text("Density: " + response[0].density + " kg / m ^ 3");
    var mercGrav = $("<p>").text("Gravity: " + response[0].gravity + " m/s^2 (0.38 x Earth's)");
    var mercDistance = $("<p>").text("Avg Distance from Sun: " + response[0].distance_from_sun + " million km");
    var mercRotation = $("<p>").text("Rotation Period: " + response[0].rotation_period + " hours");
    var mercDayLength = $("<p>").text("Day Length: " + response[0].length_of_day + " hours");
    var mercOb = $("<p>").text("Orbital Period: " + response[0].orbital_period + " days");
    var mercMoons = $("<p>").text("Number of Moons: " + response[0].number_of_moons);
    var mercTemp = $("<p>").text("Mean Temp: " + response[0].mean_temperature + " °C");

    // create new div to append p tags
    var mercDiv = $("<div>");
    mercDiv.append(mercDiameter, mercMass, mercDensity, mercGrav, mercDistance, mercRotation, mercDayLength, mercOb, mercMoons, mercTemp);
    // use .html to set content 
    $("#mercuryCard").html(mercDiv);

});



