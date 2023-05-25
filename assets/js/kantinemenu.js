const kantineAPI = "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json";

fetch(kantineAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    addKantineToDom(data);
  })
  .catch((error) => {
    console.log(error);
  });

const menuElement = document.querySelector("#menu");
const week = document.querySelector(".week");

function addKantineToDom(data) {
  console.log(data.Days); // Check the Days array

  week.innerHTML = `
    <p class="week">Uge: ${data.Week}</p>
  `;

  data.Days.forEach((day) => {
    const kantineItemElement = document.createElement("div");
    kantineItemElement.classList.add("item");

    kantineItemElement.innerHTML = `
      <p class="idag">${day.DayName}</p>
      <p class="ret">${day.Dish}</p>
    `;

    menuElement.appendChild(kantineItemElement);
  });
}
