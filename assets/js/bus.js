 // Fetching the JSON file and display the data
      fetch("../../localfiles/bustider.json")
        .then(response => response.json())
        .then(jsonData => {
          let departures = jsonData.MultiDepartureBoard.Departure;
          let limit = 3; // Set the limit to desired departures
          let html = "";
          let counter = 0;
          // Iterate over each departure and create HTML elements with desired info
          departures.forEach(departure => {
            if (counter < limit) {
              html += "<br>" +
                      "<p>Linje: " + departure.line + "</p>" +
                    //   "<p> " + departure.name + "</p>" +
                    //   "<p>Type: " + departure.type + "</p>" +
                      "<p>Stoppested: " + departure.stop + "</p>" +
                      "<p>Ankomst: " + departure.time + "</p>" +
                    //   "<p>Date: " + departure.date + "</p>" +
                    //   "<p>ID: " + departure.id + "</p>" +
                    //   "<p>Messages: " + departure.messages + "</p>" +
                      "<p>Destination: " + departure.finalStop + "</p>" +
                    //   "<p>Direction: " + departure.direction + "</p>" +
                      "</br>";
              counter++;
            }
          });

          document.getElementById("bus").innerHTML = html;
        })
        .catch(error => console.log(error));

        