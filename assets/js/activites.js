const scheduleAPI = "../../localfiles/schedules.json";
const filterEducations = ["Grafisk teknik.", "Mediegrafiker", "Webudvikler"];

fetch(scheduleAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("schedule:", data);
    addScheduleToDOM(data);
  })
  .catch((error) => {
    console.log(error);
  });

function addScheduleToDOM(scheduleData) {
  const activitiesElement = document.querySelector("#activites");

  const filteredSchedules = scheduleData.value.filter((schedule) =>
    filterEducations.includes(schedule.Education)
  );

  filteredSchedules.forEach((schedule) => {
    const scheduleElement = document.createElement("div");
    scheduleElement.classList.add("schedule");
    scheduleElement.innerHTML = `
    <p>${schedule.Subject}</p>
    <p>${schedule.Team}</p>
    <p>${schedule.Education}</p>
    <p>${schedule.Room}</p>
    `;

    activitiesElement.appendChild(scheduleElement);
  });
}
