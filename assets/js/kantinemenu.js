const kantineAPI = "../../localfiles/kantine.json";

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

function addKantineToDom(data) {
  const canteenDays = data.CanteenMenu.Days.CanteenDay;

  canteenDays.forEach((day) => {
    const kantineItemElement = document.createElement("div");
    kantineItemElement.classList.add("item");

    kantineItemElement.innerHTML = `
      <p class="uge">Uge: ${data.CanteenMenu.Week}</p>
      <p class="idag"> ${day.DayName}</p>
      <p class="ret"> ${day.Dish}</p>
    `;
    //<img class="foodpic"= src="${data.CanteenMenu.PictureUrl}" alt="cantinefoods"> Hvis vi vil have billeder ind igen

    menuElement.appendChild(kantineItemElement);
  });
}

