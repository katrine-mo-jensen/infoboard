 // Fetching the JSON file and display the data
      fetch("../../localfiles/bustider.json")
        .then(response => response.json())
        .then(jsonData => {
          let departures = jsonData.MultiDepartureBoard.Departure;
          let limit = 2; // Set the limit to desired departures
          let html = "";
          let counter = 0;

          // Iterate over each departure and create HTML elements with desired info
          departures.forEach(departure => {
            if (counter < limit) {
              html += "<div>" +
                      "<p>Name: " + departure.name + "</p>" +
                      "<p>Type: " + departure.type + "</p>" +
                      "<p>Stop: " + departure.stop + "</p>" +
                      "<p>Time: " + departure.time + "</p>" +
                      "<p>Date: " + departure.date + "</p>" +
                      "<p>ID: " + departure.id + "</p>" +
                      "<p>Line: " + departure.line + "</p>" +
                      "<p>Messages: " + departure.messages + "</p>" +
                      "<p>Final Stop: " + departure.finalStop + "</p>" +
                      "<p>Direction: " + departure.direction + "</p>" +
                      "</div>";
              counter++;
            }
          });

          document.getElementById("bus").innerHTML = html;
        })
        .catch(error => console.log(error));

        