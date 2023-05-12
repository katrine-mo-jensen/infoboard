const kantineAPI = "../../localfiles/kantine.json";

console.log("menu");


fetch(kantineAPI)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    addkantineToDom(data);
  })
  .catch((error) => {
    console.log(error);
  });

const activitesElement = document.querySelector("#menu");

function addkantineToDom(product) {
  const kantineElement = document.createElement("div");
  console.log(product);
  kantineElement.classList.add("item");

  kantineElement.innerHTML = `
    <p>hello
     </p>
   
    `;

  activitesElement.appendChild(kantineElement);
}
