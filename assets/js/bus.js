 // Fetching the JSON file and display the data -testing
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
                      // "<p class='busheadline'>Linje </p>" +"<p class='busheadline'>Stoppested </p>"+"<p class='busheadline'>Ankomst </p>" +"<p class='busheadline'>Destination </p>" +
                      "<p class='departure'>Linje: " + departure.line + "</p>" +
                    //   "<p> " + departure.name + "</p>" +
                    //   "<p>Type: " + departure.type + "</p>" +
                      "<p class='stoppested'> " + departure.stop + "</p>" +
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

        