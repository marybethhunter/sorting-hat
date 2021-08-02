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
        <label for="staticEmail2" class="visually-hidden">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Name: ">
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Luna Lovegood">
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Sort!</button>
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
    .querySelector("#welcomeCard")
    .addEventListener("click", welcomeButtonClick);
};

const init = () => {
  createWelcomeCard();
  buttonClickEvents();
  welcomeButtonClick();
};

init();
