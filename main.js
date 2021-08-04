const housesArray = [
  {
    id: 1,
    houseName: "Griffindor",
    img: "https://i.pinimg.com/originals/57/1c/05/571c05cafaaeb23da51886f4365ea7ad.jpg",
  },
  {
    id: 2,
    houseName: "Ravenclaw",
    img: "https://i.pinimg.com/originals/4e/e6/35/4ee6353519b0e68acf635c3da751591c.png",
  },
  {
    id: 3,
    houseName: "Slytherin",
    img: "https://www.logolynx.com/images/logolynx/53/5390e974544de6279c4d9cb6253e3a2c.jpeg",
  },
  {
    id: 4,
    houseName: "Hufflepuff",
    img: "https://www.yourwdwstore.net/assets/images/3/30000/2000/100/32178.jpg",
  },
];

const sortHouses = () => {
  const randomHogHouses = housesArray[Math.floor(Math.random() * housesArray.length)];

  return randomHogHouses;
};



// const randomHouse = housesArray[Math.floor(Math.random() * housesArray.length)];

const sortedStudents = [];

const voldyArmy = [];

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
  document
    .querySelector("#sortedCards")
    .addEventListener("click", expelStudentToVoldyEvent);
};

const autoAssignHogwartsHouseBuilder = (array) => {
  let domString = "";
  array.forEach((student, i) => {
    domString += `
      <div class="card" style="width: 18rem;">\
      <img src="${student.img}"><alt="hogwarts house logo">
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

const sortFormSubmit = (event) => {
  event.preventDefault();
  const {houseName, img} = sortHouses();
  const newStudent = {
    name: document.querySelector("#inputName").value,
    house: houseName,
    img: img,
    expelledStatus: 0,
  };
  sortedStudents.push(newStudent);
  autoAssignHogwartsHouseBuilder(sortedStudents);

  document.querySelector("form").reset();
};

const expelStudentToVoldyEvent = () => {
  const expelledStudent = {
    name: document.querySelector("#inputName").value,
    expelledStatus: 1,
  };
  voldyArmy.push(expelledStudent);
  expelledStudCardBuilder(voldyArmy);
};

const expelledStudCardBuilder = (array) => {
  let domString = "";
  array.forEach((student) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Oh no, ${student.name} has joined Voldemort's Army!</h5>
      </div>
    </div>
    `;
  });

  renderToDom("#voldemortCards", domString);
};

const init = () => {
  createWelcomeCard();
  buttonClickEvents();
};

init();



// const filterStudents = (array, status) => {
//   return array.filter((stuObj) => stuObj.status === status);
// };

// const expelStudentToVoldyEvent = () => {
//   if (document.getElementById("#expelButton").clicked == true) {
//     newStudent.expelledStatus = 1;
//   } 
//   voldyStudents = filterStudents(newStudents, 1);
//   expelledStudCardBuilder(voldyStudents);

// };
