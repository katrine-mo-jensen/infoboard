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

  filterEducations.forEach((education) => {
    const filteredSchedules = scheduleData.value.filter(
      (schedule) => schedule.Education === education
    );

    filteredSchedules.forEach((schedule) => {
      const scheduleElement = createScheduleElement(schedule);
      activitiesElement.appendChild(scheduleElement);
    });
  });
}

function createScheduleElement(schedule) {
  const scheduleElement = document.createElement("div");
  scheduleElement.classList.add("schedule");
  scheduleElement.innerHTML = `
    <p>${schedule.Subject}</p>
    <p>Start time: ${new Date(schedule.StartDate).toLocaleTimeString()}</p>
    <p>${schedule.Team}</p>
    <p>${schedule.Education}</p>
    <p>${schedule.Room}</p>
  `;

  return scheduleElement;
}
