$(document).ready(function () {

    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();
    var queryURL = 'https://cors-anywhere.herokuapp.com/https://dry-plains-91502.herokuapp.com/planets';

    $.ajax({
        url: queryURL,
        method: 'GET',

    }).then(function (response) {
        console.log(response);
        console.log(queryURL);

        // ***************empty content from mercury id so that new info can be populated*************** 
        $("#mercuryCard").empty();

        // ***************Create elements for pulling info from mercury index***************
        var mercFromSun = $("<p>").text("Planet #: " + "1st");
        var mercType = $("<p>").text("Type: " + "Terrestrial");
        var mercDiameter = $("<p>").text("Diameter: " + response[0].diameter + " km");
        var mercMass = $("<p>").text("Mass: " + response[0].mass + " x10^24 kg (0.06 x Earth's)");
        var mercDensity = $("<p>").text("Density: " + response[0].density + " kg/m^3");
        var mercGrav = $("<p>").text("Gravity: " + response[0].gravity + " m/s^2 (0.38 x Earth's)");
        var mercDistance = $("<p>").text("Distance from Sun: " + response[0].distance_from_sun + " million km");
        var mercRotation = $("<p>").text("Rotation Period: " + response[0].rotation_period + " hours");
        var mercDayLength = $("<p>").text("Day Length: " + response[0].length_of_day + " hours");
        var mercOb = $("<p>").text("Orbital Period: " + response[0].orbital_period + " days");
        var mercMoons = $("<p>").text("Number of Moons: " + response[0].number_of_moons);
        var mercTemp = $("<p>").text("Mean Temp: " + response[0].mean_temperature + " °C");

        // create new mercury div to append p tags
        var mercDiv = $("<div>");
        mercDiv.append(mercFromSun, mercType, mercDiameter, mercMass, mercDensity, mercGrav, mercDistance, mercRotation, mercDayLength, mercOb, mercMoons, mercTemp);
        // use .html to set content 
        $("#mercuryCard").html(mercDiv);

        // *************** empty content from venus id so that new info can be populated***************  
        $("#venusCard").empty();

        // ***************Create elements for pulling info from venus index***************
        var venusFromSun = $("<p>").text("Planet #: " + "2nd");
        var venusType = $("<p>").text("Type: " + "Terrestrial");
        var venusDiameter = $("<p>").text("Diameter: " + response[1].diameter + " km");
        var venusMass = $("<p>").text("Mass: " + response[1].mass + " x10^24 kg (0.82 x Earth's)");
        var venusDensity = $("<p>").text("Density: " + response[1].density + " kg/m^3");
        var venusGrav = $("<p>").text("Gravity: " + response[1].gravity + " m/s^2 (0.90 x Earth's)");
        var venusDistance = $("<p>").text("Distance from Sun: " + response[1].distance_from_sun + " million km");
        var venusRotation = $("<p>").text("Rotation Period: " + response[1].rotation_period + " hours");
        var venusDayLength = $("<p>").text("Day Length: " + response[1].length_of_day + " hours");
        var venusOb = $("<p>").text("Orbital Period: " + response[1].orbital_period + " days");
        var venusMoons = $("<p>").text("Number of Moons: " + response[1].number_of_moons);
        var venusTemp = $("<p>").text("Mean Temp: " + response[1].mean_temperature + " °C");

        // create new venus div to append p tags
        var venusDiv = $("<div>");
        venusDiv.append(venusFromSun, venusType, venusDiameter, venusMass, venusDensity, venusGrav, venusDistance, venusRotation, venusDayLength, venusOb, venusMoons, venusTemp);
        // use .html to set content 
        $("#venusCard").html(venusDiv);

        // *************** empty content from earth id so that new info can be populated *************** 
        $("#earthCard").empty();

        // ***************Create elements for pulling info from earth index***************
        var earthFromSun = $("<p>").text("Planet #: " + "3rd");
        var earthType = $("<p>").text("Type: " + "Terrestrial");
        var earthDiameter = $("<p>").text("Diameter: " + response[2].diameter + " km");
        var earthMass = $("<p>").text("Mass: " + response[2].mass + " x10^24 kg");
        var earthDensity = $("<p>").text("Density: " + response[2].density + " kg/m^3");
        var earthGrav = $("<p>").text("Gravity: " + response[2].gravity + " m/s^2");
        var earthDistance = $("<p>").text("Distance from Sun: " + response[2].distance_from_sun + " million km");
        var earthRotation = $("<p>").text("Rotation Period: " + response[2].rotation_period + " hours");
        var earthDayLength = $("<p>").text("Day Length: " + response[2].length_of_day + " hours");
        var earthOb = $("<p>").text("Orbital Period: " + response[2].orbital_period + " days");
        var earthMoons = $("<p>").text("Number of Moons: " + response[2].number_of_moons);
        var earthTemp = $("<p>").text("Mean Temp: " + response[2].mean_temperature + " °C");

        // create new earth div to append p tags
        var earthDiv = $("<div>");
        earthDiv.append(earthFromSun, earthType, earthDiameter, earthMass, earthDensity, earthGrav, earthDistance, earthRotation, earthDayLength, earthOb, earthMoons, earthTemp);
        // use .html to set content 
        $("#earthCard").html(earthDiv);

        // *************** empty content from mars id so that new info can be populated *************** 
        $("#marsCard").empty();

        // ***************Create elements for pulling info from mars index***************
        var marsFromSun = $("<p>").text("Planet #: " + "4th");
        var marsType = $("<p>").text("Type: " + "Terrestrial");
        var marsDiameter = $("<p>").text("Diameter: " + response[4].diameter + " km");
        var marsMass = $("<p>").text("Mass: " + response[4].mass + " x10^24 kg (0.11 x Earth's)");
        var marsDensity = $("<p>").text("Density: " + response[4].density + " kg/m^3");
        var marsGrav = $("<p>").text("Gravity: " + response[4].gravity + " m/s^2 (0.37 x Earth's)");
        var marsDistance = $("<p>").text("Distance from Sun: " + response[4].distance_from_sun + " million km");
        var marsRotation = $("<p>").text("Rotation Period: " + response[4].rotation_period + " hours");
        var marsDayLength = $("<p>").text("Day Length: " + response[4].length_of_day + " hours");
        var marsOb = $("<p>").text("Orbital Period: " + response[4].orbital_period + " days");
        var marsMoons = $("<p>").text("Number of Moons: " + response[4].number_of_moons);
        var marsTemp = $("<p>").text("Mean Temp: " + response[4].mean_temperature + " °C");

        // create new mars div to append p tags
        var marsDiv = $("<div>");
        marsDiv.append(marsFromSun, marsType, marsDiameter, marsMass, marsDensity, marsGrav, marsDistance, marsRotation, marsDayLength, marsOb, marsMoons, marsTemp);
        // use .html to set content 
        $("#marsCard").html(marsDiv);

        // *************** empty content from jupiter id so that new info can be populated***************  
        $("#jupiterCard").empty();

        // ***************Create elements for pulling info from jupiter index***************
        var jupFromSun = $("<p>").text("Planet #: " + "5th");
        var jupType = $("<p>").text("Type: " + "Gas Giant");
        var jupDiameter = $("<p>").text("Diameter: " + response[5].diameter + " km");
        var jupMass = $("<p>").text("Mass: " + response[5].mass + " x10^24 kg (318 x Earth's)");
        var jupDensity = $("<p>").text("Density: " + response[5].density + " kg/m^3");
        var jupGrav = $("<p>").text("Gravity: " + response[5].gravity + " m/s^2 (2.64 x Earth's)");
        var jupDistance = $("<p>").text("Distance from Sun: " + response[5].distance_from_sun + " million km");
        var jupRotation = $("<p>").text("Rotation Period: " + response[5].rotation_period + " hours");
        var jupDayLength = $("<p>").text("Day Length: " + response[5].length_of_day + " hours");
        var jupOb = $("<p>").text("Orbital Period: " + response[5].orbital_period + " days");
        var jupMoons = $("<p>").text("Number of Moons: " + response[5].number_of_moons);
        var jupTemp = $("<p>").text("Mean Temp: " + response[5].mean_temperature + " °C");

        // create new jupiter div to append p tags
        var jupDiv = $("<div>");
        jupDiv.append(jupFromSun, jupType, jupDiameter, jupMass, jupDensity, jupGrav, jupDistance, jupRotation, jupDayLength, jupOb, jupMoons, jupTemp);
        // use .html to set content 
        $("#jupiterCard").html(jupDiv);

        // *************** empty content from saturn id so that new info can be populated***************  
        $("#saturnCard").empty();

        // ***************Create elements for pulling info from saturn index***************
        var satFromSun = $("<p>").text("Planet #: " + "6th");
        var satType = $("<p>").text("Type: " + "Gas Giant");
        var satDiameter = $("<p>").text("Diameter: " + response[6].diameter + " km");
        var satMass = $("<p>").text("Mass: " + response[6].mass + " x10^24 kg (95 x Earth's)");
        var satDensity = $("<p>").text("Density: " + response[6].density + " kg/m^3");
        var satGrav = $("<p>").text("Gravity: " + response[6].gravity + " m/s^2 (0.92 x Earth's)");
        var satDistance = $("<p>").text("Distance from Sun: " + response[6].distance_from_sun + " million km");
        var satRotation = $("<p>").text("Rotation Period: " + response[6].rotation_period + " hours");
        var satDayLength = $("<p>").text("Day Length: " + response[6].length_of_day + " hours");
        var satOb = $("<p>").text("Orbital Period: " + response[6].orbital_period + " days");
        var satMoons = $("<p>").text("Number of Moons: " + response[6].number_of_moons);
        var satTemp = $("<p>").text("Mean Temp: " + response[6].mean_temperature + " °C");

        // create new saturn div to append p tags
        var satDiv = $("<div>");
        satDiv.append(satFromSun, satType, satDiameter, satMass, satDensity, satGrav, satDistance, satRotation, satDayLength, satOb, satMoons, satTemp);
        // use .html to set content 
        $("#saturnCard").html(satDiv);

        // *************** empty content from uranus id so that new info can be populated***************  
        $("#uranusCard").empty();

        // ***************Create elements for pulling info from uranus index***************
        var uraFromSun = $("<p>").text("Planet #: " + "7th");
        var uraType = $("<p>").text("Type: " + "Ice Giant");
        var uraDiameter = $("<p>").text("Diameter: " + response[7].diameter + " km");
        var uraMass = $("<p>").text("Mass: " + response[7].mass + " x10^24 kg (14.5 x Earth's)");
        var uraDensity = $("<p>").text("Density: " + response[7].density + " kg/m^3");
        var uraGrav = $("<p>").text("Gravity: " + response[7].gravity + " m/s^2 (0.89 x Earth's)");
        var uraDistance = $("<p>").text("Distance from Sun: " + response[7].distance_from_sun + " million km");
        var uraRotation = $("<p>").text("Rotation Period: " + response[7].rotation_period + " hours");
        var uraDayLength = $("<p>").text("Day Length: " + response[7].length_of_day + " hours");
        var uraOb = $("<p>").text("Orbital Period: " + response[7].orbital_period + " days");
        var uraMoons = $("<p>").text("Number of Moons: " + response[7].number_of_moons);
        var uraTemp = $("<p>").text("Mean Temp: " + response[7].mean_temperature + " °C");

        // create new uranus div to append p tags
        var uraDiv = $("<div>");
        uraDiv.append(uraFromSun, uraType, uraDiameter, uraMass, uraDensity, uraGrav, uraDistance, uraRotation, uraDayLength, uraOb, uraMoons, uraTemp);
        // use .html to set content 
        $("#uranusCard").html(uraDiv);

        // *************** empty content from neptune id so that new info can be populated***************  
        $("#neptuneCard").empty();

        // ***************Create elements for pulling info from neptune index***************
        var nepFromSun = $("<p>").text("Planet #: " + "8th");
        var nepType = $("<p>").text("Type: " + "Ice Giant");
        var nepDiameter = $("<p>").text("Diameter: " + response[8].diameter + " km");
        var nepMass = $("<p>").text("Mass: " + response[8].mass + " x10^24 kg (17.2 x Earth's)");
        var nepDensity = $("<p>").text("Density: " + response[8].density + " kg/m^3");
        var nepGrav = $("<p>").text("Gravity: " + response[8].gravity + " m/s^2 (1.12 x Earth's)");
        var nepDistance = $("<p>").text("Distance from Sun: " + response[8].distance_from_sun + " million km");
        var nepRotation = $("<p>").text("Rotation Period: " + response[8].rotation_period + " hours");
        var nepDayLength = $("<p>").text("Day Length: " + response[8].length_of_day + " hours");
        var nepOb = $("<p>").text("Orbital Period: " + response[8].orbital_period + " days");
        var nepMoons = $("<p>").text("Number of Moons: " + response[8].number_of_moons);
        var nepTemp = $("<p>").text("Mean Temp: " + response[8].mean_temperature + " °C");

        // create new neptune div to append p tags
        var nepDiv = $("<div>");
        nepDiv.append(nepFromSun, nepType, nepDiameter, nepMass, nepDensity, nepGrav, nepDistance, nepRotation, nepDayLength, nepOb, nepMoons, nepTemp);
        // use .html to set content 
        $("#neptuneCard").html(nepDiv);

        // *************** empty content from pluto id so that new info can be populated***************  
        $("#plutoCard").empty();

        // ***************Create elements for pulling info from pluto index***************
        var pluFromSun = $("<p>").text("Planet #: " + "9th");
        var pluType = $("<p>").text("Type: " + "Dwarf Planet");
        var pluDiameter = $("<p>").text("Diameter: " + response[9].diameter + " km");
        var pluMass = $("<p>").text("Mass: " + response[9].mass + " x10^24 kg (0.0021 x Earth's)");
        var pluDensity = $("<p>").text("Density: " + response[9].density + " kg/m^3");
        var pluGrav = $("<p>").text("Gravity: " + response[9].gravity + " m/s^2 (0.06 x Earth's)");
        var pluDistance = $("<p>").text("Distance from Sun: " + response[9].distance_from_sun + " million km");
        var pluRotation = $("<p>").text("Rotation Period: " + response[9].rotation_period + " hours");
        var pluDayLength = $("<p>").text("Day Length: " + response[9].length_of_day + " hours");
        var pluOb = $("<p>").text("Orbital Period: " + response[9].orbital_period + " days");
        var pluMoons = $("<p>").text("Number of Moons: " + response[9].number_of_moons);
        var pluTemp = $("<p>").text("Mean Temp: " + response[9].mean_temperature + " °C");

        // create new pluto div to append p tags
        var pluDiv = $("<div>");
        pluDiv.append(pluFromSun, pluType, pluDiameter, pluMass, pluDensity, pluGrav, pluDistance, pluRotation, pluDayLength, pluOb, pluMoons, pluTemp);
        // use .html to set content 
        $("#plutoCard").html(pluDiv);

        // *************** empty content from moon id so that new info can be populated***************  
        $("#moonCard").empty();

        // ***************Create elements for pulling info from moon index***************
        var mooPlanOb = $("<p>").text("Orbiting Planet: " + "Earth");
        var mooType = $("<p>").text("Type: " + "Moon");
        var mooDiameter = $("<p>").text("Diameter: " + response[3].diameter + " km");
        var mooMass = $("<p>").text("Mass: " + response[3].mass + " x10^24 kg");
        var mooDensity = $("<p>").text("Density: " + response[3].density + " kg/m^3");
        var mooGrav = $("<p>").text("Gravity: " + response[3].gravity + " m/s^2");
        var mooDistance = $("<p>").text("Distance from Sun: " + response[3].distance_from_sun + " million km");
        var mooRotation = $("<p>").text("Rotation Period: " + response[3].rotation_period + " hours");
        var mooDayLength = $("<p>").text("Day Length: " + response[3].length_of_day + " hours");
        var mooOb = $("<p>").text("Orbital Period: " + response[3].orbital_period + " days");
        var mooMoons = $("<p>").text("Number of Moons: " + response[3].number_of_moons);
        var mooTemp = $("<p>").text("Mean Temp: " + response[3].mean_temperature + " °C");

        // create new moon div to append p tags
        var mooDiv = $("<div>");
        mooDiv.append(mooPlanOb, mooType, mooDiameter, mooMass, mooDensity, mooGrav, mooDistance, mooRotation, mooDayLength, mooOb, mooMoons, mooTemp);
        // use .html to set content 
        $("#moonCard").html(mooDiv);
    });

    // *************** empty content from sun id so that new info can be populated***************  
    $("#sunCard").empty();

    // ***************Create elements for sun card***************
    var sunGalOb = $("<p>").text("Orbiting Galaxy: " + "Milky Way");
    var sunType = $("<p>").text("Type: " + "Yellow Dwarf(G2V)");
    var sunDiameter = $("<p>").text("Diameter: " + "1,392,684" + " km");
    var sunMass = $("<p>").text("Mass: " + "1.99" + " x10^30 kg");
    var sunDensity = $("<p>").text("Density: " + "1,410" + " kg/m^3");
    var sunGrav = $("<p>").text("Gravity: " + "274" + " m/s^2 (1.12 x Earth's)");
    var sunRotation = $("<p>").text("Rotation Period: " + "192" + " hours");
    var sunOb = $("<p>").text("Orbital Period: " + "230 million" + " years");
    var sunPlanets = $("<p>").text("Number of Orbiting Planets: " + "8");
    var sunTemp = $("<p>").text("Mean Temp: " + "5,500" + " °C");

    // create new sun div to append p tags
    var sunDiv = $("<div>");
    sunDiv.append(sunGalOb, sunType, sunDiameter, sunMass, sunDensity, sunGrav, sunRotation, sunOb, sunPlanets, sunTemp);
    // use .html to set content 
    $("#sunCard").html(sunDiv);
});

function cardFlipSound() {
    var cardFlipSound = new Audio("./assets/sound/swoosh.wav");
    cardFlipSound.volume = .02;
    cardFlipSound.play();

}
$(".flip-container").hover(function () {
    cardFlipSound();
});