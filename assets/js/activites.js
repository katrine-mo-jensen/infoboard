const scheduleAPI = "../../localfiles/schedules.json";

// console.log(todayWeather);

fetch(scheduleAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    addScehduleTooDom(data);
  })
  .catch((error) => {
    console.log(error);
  });

const activitesElement = document.querySelector("#activites");

function addScehduleTooDom(product) {
  const scheduleElement = document.createElement("div");
  console.log(product);
  scheduleElement.classList.add("item");

  scheduleElement.innerHTML = `
    <p>hello
     </p>
   
    `;

  activitesElement.appendChild(scheduleElement);
}
