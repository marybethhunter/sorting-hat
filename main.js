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
      <form class="row g-3">
      <div class="col-auto">
        <label for="nameLabel" class="visually-hidden">Name</label>
        <input type="text" readonly class="form-control-plaintext" id="nameLabel" value="Name: ">
      </div>
      <div class="col-auto">
        <label for="inputName" class="visually-hidden">Password</label>
        <input type="text" class="form-control" id="inputName" placeholder="Luna Lovegood" required/>
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

const autoAssignHogwartsHouse = () => {
  
  let domString = `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary" id="expelBtn>Expel</button>
  </div>
</div>
  `;

  renderToDom("#sortedCards", domString);
};

const welcomeButtonClick = (event) => {
  if (event.target.id === "welcomeBtn") {
    createSortingFormCard(event);
  }
};

const sortFormClick = (event) => {
  const sortedStudents = [];
  
  if (event.target.id === "sortBtn") {
    autoAssignHogwartsHouse();
    //function auto assigning house to a name
  }
};

const buttonClickEvents = () => {
  document
    .querySelector("#welcomeCard")
    .addEventListener("click", welcomeButtonClick);
  document
    .querySelector("#sortingCard")
    .addEventListener("click", (sortFormClick));
};

const init = () => {
  createWelcomeCard();
  buttonClickEvents();
  welcomeButtonClick();
  sortFormClick();
};

init();
