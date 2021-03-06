const housesArray = [
  {
    id: 1,
    houseName: "Griffindor",
    img: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2",
    color: "AA2E2E",
  },
  {
    id: 2,
    houseName: "Ravenclaw",
    img: "https://i.pinimg.com/originals/4e/e6/35/4ee6353519b0e68acf635c3da751591c.png",
    color: "02028A",
  },
  {
    id: 3,
    houseName: "Slytherin",
    img: "https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg",
    color: "015C01",
  },
  {
    id: 4,
    houseName: "Hufflepuff",
    img: "https://www.yourwdwstore.net/assets/images/3/30000/2000/100/32178.jpg",
    color: "FFF065",
  },
];

//function that randomizes house
const sortHouses = () => {
  const randomHogHouses =
    housesArray[Math.floor(Math.random() * housesArray.length)];

  return randomHogHouses;
};

const sortedStudents = [];

const voldyArmy = [];

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

//creates the welcome card - there upon loading site
const createWelcomeCard = () => {
  let domString = `
  <div class="welcome">
    <div class="card-body">
      <h2 class="card-title">Welcome to Hogwarts! Let's get sorting!</h2>
        <p class="card-text">Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed.</p>
        <p class="card-text"> Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.</p>
        <button type="button" id="welcomeBtn" class="btn btn-primary">Sort Me!</button>
      </div>
  </div>
  `;

  renderToDom("#welcomeCard", domString);
};

//creates the second card that has the form to put a name in
const createSortingFormCard = () => {
  let domString = `
  <div class="sortCard">
  <div class="card-body">
      <h3 class="sort-card-title">Let's get this party started!</h3>
      <div class ="sortCard sortCardForm">
      <form id="formSubmit" class="row g-3">
      <div class="col-auto">
        <label for="nameLabel" class="visually-hidden">Name</label>
        <input type="text" readonly class="form-control-plaintext" id="nameLabel" value="Name: ">
      </div>
      <div class="col-auto">
        <label for="inputName" class="visually-hidden">Name Input</label>
        <input required type="text" class="form-control" id="inputName" placeholder="Luna Lovegood">
      </div>
      <div class="col-auto">
        <button type="submit" id="sortBtn" class="btn btn-primary mb-3">Sort!</button>
      </div>
    </form>
    </div>
      </div>
  </div>
  `;

  renderToDom("#sortingCard", domString);
};

//function that creates the sorting form element
const welcomeButtonClick = (event) => {
  if (event.target.id === "welcomeBtn") {
    createSortingFormCard(event);
  }
};

//button click events
const buttonClickEvents = () => {
  document
    .querySelector("#welcomeBtn")
    .addEventListener("click", welcomeButtonClick);
  document
    .querySelector("#sortingCard")
    .addEventListener("submit", sortFormSubmit);
  document
    .querySelector("#sortedCards")
    .addEventListener("click", expelStudentToVoldyEvent);
  document
    .querySelector("#sortButtons")
    .addEventListener("click", handleFilterByHouse);
};

//function that builds the sorted student card
const autoAssignHogwartsHouseBuilder = (array) => {
  let domString = "";
  array.forEach((student, i) => {
    domString += `
      <div class="card" style="width: 18rem; background-color: #${student.houseColor}">
      <img class="crests" src="${student.img}"><alt="hogwarts house logo">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <button type="button" id=${i} id="expelButton" class="btn btn-primary">Expel</button>
      </div>
    </div>
    `;
  });

  renderToDom("#sortedCards", domString);
};

//function that creates the sorted student object and pushes it into array and gets built
const sortFormSubmit = (event) => {
  event.preventDefault();
  const { houseName, img, color } = sortHouses();
  const newStudent = {
    name: document.querySelector("#inputName").value,
    house: houseName,
    img: img,
    houseColor: color,
  };
  sortedStudents.push(newStudent);
  autoAssignHogwartsHouseBuilder(
    sortedStudents.sort((a, b) =>
      a.name === b.name ? 0 : a.name > b.name ? 1 : -1
    )
  );
  buildFilterButtons();
  document.querySelector("form").reset();
};

//expel event - pushing the spliced sortedStudents array into voldyArmy array
const expelStudentToVoldyEvent = (event) => {
  const targetType = event.target.type;
  const targetId = event.target.id;

  if (targetType === "button") {
    voldyArmy.push(sortedStudents.splice(targetId, 1)[0]);
    expelledStudCardBuilder(
      voldyArmy.sort((a, b) =>
        a.name === b.name ? 0 : a.name > b.name ? 1 : -1
      )
    );
    autoAssignHogwartsHouseBuilder(
      sortedStudents.sort((a, b) =>
        a.name === b.name ? 0 : a.name > b.name ? 1 : -1
      )
    );
  }
};

//builder for voldyArmy array cards once expelled
const expelledStudCardBuilder = (array) => {
  let domString = "";
  array.forEach((student) => {
    domString += `
    <div class="card voldyCards" style="width: 18rem;">
    <img src="https://upload.wikimedia.org/wikipedia/en/7/7d/DeathEaters.jpg" alt="voldemort and death eaters">
      <div class="card-body">
        <h5 class="card-title">Oh no, ${student.name} has joined Voldemort's Army!</h5>
      </div>
    </div>
    `;
  });

  renderToDom("#voldemortCards", domString);
};

//function that creates the filter buttons
const buildFilterButtons = () => {
  let domString = `
  <div class="buttonCard" class="card">
  <button id="grif-btn" class="btn btn-primary" type="submit">Griffindor</button>
  <button id="raven-btn" class="btn btn-primary" type="submit">Ravenclaw</button>
  <button id="slyth-btn" class="btn btn-primary" type="submit">Slytherin</button>
  <button id="huffle-btn" class="btn btn-primary" type="submit">Hufflepuff</button>
  <button id="all-btn" class="btn btn-primary" type="submit">See All</button>
  </div>
  `;
  renderToDom("#sortButtons", domString);
};

//function that filters the students by house
const filterByHouse = (array, house) => {
  return array.filter((stuObj) => stuObj.house === house);
};

//function handling filter button events
const handleFilterByHouse = (event) => {
  if (event.target.id === "all-btn") {
    const allHouses = filterByHouse(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1))
    );
    autoAssignHogwartsHouseBuilder(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1))
    );
  }
  if (event.target.id === "grif-btn") {
    const grifHouses = filterByHouse(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1)),
      "Griffindor"
    );
    autoAssignHogwartsHouseBuilder(grifHouses);
  }
  if (event.target.id === "raven-btn") {
    const ravenHouses = filterByHouse(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1)),
      "Ravenclaw"
    );
    autoAssignHogwartsHouseBuilder(ravenHouses);
  }
  if (event.target.id === "slyth-btn") {
    const slythHouses = filterByHouse(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1)),
      "Slytherin"
    );
    autoAssignHogwartsHouseBuilder(slythHouses);
  }
  if (event.target.id === "huffle-btn") {
    const huffleHouses = filterByHouse(
      sortedStudents.sort((a, b) => (a.name > b.name ? 1 : -1)),
      "Hufflepuff"
    );
    autoAssignHogwartsHouseBuilder(huffleHouses);
  }
};

//starts app
const init = () => {
  createWelcomeCard();
  buttonClickEvents();
};

init();
