const housesArray = [
{id: 1,
houseName: "Griffindor",
img: "https://i.pinimg.com/originals/57/1c/05/571c05cafaaeb23da51886f4365ea7ad.jpg",
},
{id: 2,
houseName: "Ravenclaw",
img: "https://i.pinimg.com/originals/4e/e6/35/4ee6353519b0e68acf635c3da751591c.png",
},
{id: 3,
 houseName: "Slytherin",
 img: "",
},
{id: 4,
houseName: "Hufflepuff",
img: "",
},
];

const randomHouse = housesArray[Math.floor(Math.random() * housesArray.length)];

const sortedStudents = [];

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const createWelcomeCard = () => {
  let domString = `
  <div class="welcome">
    <div class="card-body">
      <h2 class="card-title">Welcome to Hogwarts! Let's get sorting!</h2>
        <p class="card-text">Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed.</p>
        <p class="card-text"> Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.</p>
        <button type="button" id="welcomeBtn">Sort Me!</button>
      </div>
  </div>
  `;

  renderToDom("#welcomeCard", domString);
};

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

const welcomeButtonClick = (event) => {
  if (event.target.id === "welcomeBtn") {
    createSortingFormCard(event);
  }
};

const buttonClickEvents = () => {
  document
    .querySelector("#welcomeBtn")
    .addEventListener("click", welcomeButtonClick);
  document
    .querySelector("#sortingCard")
    .addEventListener("submit", sortFormSubmit);
};

const autoAssignHogwartsHouseBuilder = (array) => {
  let domString = "";
    array.forEach((student, i) => {
      domString += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <button type="button"id=${i} class="btn btn-primary">Delete</button>
      </div>
    </div>
    `;
    });
  
    renderToDom("#sortedCards", domString);
};

const sortFormSubmit = (event) => {
  event.preventDefault();
  const newStudent = {
    name: document.querySelector("#inputName").value,
    house: randomHouse.houseName,
  };
  sortedStudents.push(newStudent);
  autoAssignHogwartsHouseBuilder(sortedStudents);
};

const init = () => {
  createWelcomeCard();
  buttonClickEvents();
  // sortFormClick();
  // sortFormSubmit();
};

init();
