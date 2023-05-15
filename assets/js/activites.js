const scheduleAPI = "../../localfiles/schedules.json";
const filterEducations = ["Grafisk teknik.", "Mediegrafiker", "Webudvikler"];

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

function addSchedulesToDOM(scheduleData) {
  const activitiesElement = document.querySelector("#activites");
  activitiesElement.innerHTML = ""; // Clear the activities element before adding schedules

  // Create three column containers
  const columnContainer1 = document.createElement("div");
  columnContainer1.classList.add("column");
  const columnContainer2 = document.createElement("div");
  columnContainer2.classList.add("column");
  const columnContainer3 = document.createElement("div");
  columnContainer3.classList.add("column");

  // Loop through each education name
  filterEducations.forEach((education, index) => {
    const filteredSchedules = scheduleData.value.filter(
      (schedule) => schedule.Education === education
    );

    filteredSchedules.forEach((schedule) => {
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
  scheduleElement.innerHTML = `
    <p>${new Date(schedule.StartDate).toLocaleTimeString()}</p>
    <p>${schedule.Education}</p>
    <p>${schedule.Team}</p>
    <p>${schedule.Subject}</p>
    <p>${schedule.Room}</p>
  `;

  return scheduleElement;
}
