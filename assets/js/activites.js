const scheduleAPI =
  "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed";
/* const scheduleAPI =
  "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed"; */
const filterEducations = ["Grafisk teknik.", "Mediegrafiker", "Webudvikler"];

// Function to fetch data from the API and update the DOM
function fetchDataAndUpdateDOM() {
  fetch(scheduleAPI)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("schedule:", data);
      addSchedulesToDOM(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call the fetch function initially to load the data
fetchDataAndUpdateDOM();

// Refresh the data every day (24 hours)
const refreshInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
setInterval(fetchDataAndUpdateDOM, refreshInterval);

function addSchedulesToDOM(scheduleData) {
  // console.log(scheduleData.value)
  const data = scheduleData.value;

  const activitiesElement = document.querySelector("#activites");
  // Clear the activities element before adding schedules
  activitiesElement.innerHTML = "";

  // Create three column containers
  const columnContainer1 = document.createElement("div");
  columnContainer1.classList.add("column");
  const columnContainer2 = document.createElement("div");
  columnContainer2.classList.add("column");
  const columnContainer3 = document.createElement("div");
  columnContainer3.classList.add("column");

  // Loop through each education name
  filterEducations.forEach((education, index) => {
    const filteredSchedules = data.filter(
      (schedule) => schedule.Education === education
    );
    //Added slice to limit the schedule
    newlist = filteredSchedules.slice(0, 6);
    // console.log({ filteredSchedules });

    newlist.forEach((schedule) => {
      // console.log(schedule);
      const scheduleElement = createScheduleElement(schedule);

      // Determine the appropriate column container based on the index
      let columnContainer;
      if (index === 0) {
        columnContainer = columnContainer1;
      } else if (index === 1) {
        columnContainer = columnContainer2;
      } else {
        columnContainer = columnContainer3;
      }

      // Append the schedule element to the corresponding column container
      columnContainer.appendChild(scheduleElement);
    });
  });

  // Append the column containers to the activities element
  activitiesElement.appendChild(columnContainer1);
  activitiesElement.appendChild(columnContainer2);
  activitiesElement.appendChild(columnContainer3);
}

function createScheduleElement(schedule) {
  const scheduleElement = document.createElement("div");
  scheduleElement.classList.add("schedule");

  // Retrieve the date object from the schedule's start date
  const startDate = new Date(schedule.StartDate);

  // Extract the hours and minutes from the date object
  const hours = startDate.getHours();
  const minutes = startDate.getMinutes();

  // Format the time in military format (24-hour format)
  const militaryTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  scheduleElement.innerHTML = `
    <p id="time">${militaryTime}</p>
    <p id="edu">${schedule.Education}</p>
    <p id="team">${schedule.Team}</p>
    <p id="sub">${schedule.Subject}</p>
    <p id="room">${schedule.Room}</p>
  `;

  return scheduleElement;
}
