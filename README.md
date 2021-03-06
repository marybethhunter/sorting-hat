## Welcome to the Hogwarts Sorting Hat application! [![Netlify Status](https://api.netlify.com/api/v1/badges/434b4a23-adec-4c3c-89e5-9b7b7877a236/deploy-status)](https://app.netlify.com/sites/mbh-sortinghat/deploys)

### [View Site](https://mbh-sortinghat.netlify.app/)

### Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/sorting-hat.git
 $ cd sorting-hat
```

### About the User
#### -The ideal user is a Harry Potter fan who wants to know in which the Sorting Hat would place them. 
#### -The user can enter their name and any of their friends' names into the application to be randomly assigned a house. 
#### -The user can view the sorted students by house and expel them into Voldemort's Army.

### Features: 
#### -House Sorting: An entered name will be randomly assigned one of the four Hogwarts houses and a card with that name, Hogwarts house, house crest, and house color will be generated.
#### -Filtering: If many names have been entered and assigned houses, the user can sort the cards by house name to only see a particular house. 

#### -Expelling: The "Expel" button on each sorted student can be clicked. This moves that student over into Voldmort's Army. The user will see a different card displayed with their name and a picture of Voldemort himself.

#### -Organizing: All sorted and expelled cards are arranged alphabetically.

### [Loom video walkthrough](https://www.loom.com/share/7c2437d0eb3546fe975b1b52dd9a73b9)

### Relevant Links:
#### -[Figma Wireframe](https://www.figma.com/file/VPChxqqF0SMoG7ZG7OHuFH/Sorting-Hat-App?node-id=0%3A1)
#### -[Project Board](https://github.com/marybethhunter/sorting-hat/projects/1)
#### -[View Site](https://mbh-sortinghat.netlify.app/)

### Code Snippet:

```javascript
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
    sortedStudents.sort(((a, b) => ((a.name === b.name) ? 0 : ((a.name > b.name)) ? 1 : -1)))
  );
  buildFilterButtons();
  document.querySelector("form").reset();
};
```

### Screenshots:

<img width="960" alt="2021-08-06 (1)" src="https://user-images.githubusercontent.com/86667443/128573741-37984916-aee4-476c-b0ce-76f6f8e3d495.png">

<img width="913" alt="2021-08-06 (2)" src="https://user-images.githubusercontent.com/86667443/128573764-b4c9205e-bcdb-457b-a273-ccf8d7c94ecc.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
