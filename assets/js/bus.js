 // Fetching the JSON file and display the data
      fetch("../../localfiles/bustider.json")
        .then(response => response.json())
        .then(jsonData => {
          let departures = jsonData.MultiDepartureBoard.Departure;
          let limit = 5; // Set the limit to desired departures
          let html = "";
          let counter = 0;
          // Iterate over each departure and create HTML elements with desired info
          departures.forEach(departure => {
            if (counter < limit) {
              html += "" +
                      "<p class='departure'>Linje: " + departure.line + "</p>" +
                    //   "<p> " + departure.name + "</p>" +
                    //   "<p>Type: " + departure.type + "</p>" +
                      "<p class='stoppested'>Stoppested: " + departure.stop + "</p>" +
                      "<p class='ankomst'>Ankomst: " + departure.time + "</p>" +
                    //   "<p>Date: " + departure.date + "</p>" +
                    //   "<p>ID: " + departure.id + "</p>" +
                    //   "<p>Messages: " + departure.messages + "</p>" +
                      "<p class='dest'>Destination: " + departure.finalStop + "</p>" +
                    //   "<p>Direction: " + departure.direction + "</p>" +
                      "";
              counter++;
            }
          });

          document.getElementById("bus").innerHTML = html;
        })
        .catch(error => console.log(error));

        