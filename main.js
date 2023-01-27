const pets = [
    {
      id: 1,
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
    },
    {
      id: 2,
      imageUrl: "https://i.pinimg.com/736x/5d/fb/30/5dfb3090fdcf6574884b85f60e47f987.jpg",
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
    },
    {
      id: 3,
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
    },
    {
      id: 4,
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
    },
    {
      id: 5,
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
    },
    {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
    },
    {
      id: 7,
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
    },
    {
      id: 8,
      imageUrl: "https://images.immediate.co.uk/production/volatile/sites/4/2018/08/Suzhousaurus-c07b50e.jpg",
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
    },
    {
      id: 9,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
    },
    {
      id: 10,
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
    },
    {
      id: 11,
      imageUrl: "https://www.thepaws.net/wp-content/uploads/2019/02/Red-Golden-Retriever.jpg",
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
    },
    {
      id: 12,
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
    },
    {
      id: 13,
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
    },
    {
      id: 14,
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
    },
    {
      id: 15,
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
    },
    {
      id: 16,
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
    },
    {
      id: 17,
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
    },
    {
      id: 18,
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
    },
    {
      id: 19,
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
    },
    {
      id: 20,
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
    },
    {
      id: 21,
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
    },
    {
      id: 22,
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",  
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
    },
    {
      id: 23,
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
    },
    {
      id: 24,
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
    },
    {
      id: 25,
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
    },
    {
      id: 26,
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
    },
    {
      id: 27,
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
    },
    {
      id: 28,
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
    },
    {
      id: 29,
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
    },
    {
      id: 30,
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
    }
  ];


  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    console.log("divId", divId);
  
    selectedDiv.innerHTML = htmlToRender;
    console.log("html", htmlToRender);
  };

const cardsOnDom = (array) => {
let domString = "";
for (const pet of array) {
  // CARD FROM BOOTSTRAP: https://getbootstrap.com/docs/5.1/components/card/#example Removed the button
  domString += `<div class="card" style="width: 18rem;">
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text">${pet.color}</p>
        <p class="card-text">${pet.specialSkill}</p>
        <p class="card-text">${pet.type}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>
    </div>`;
  };

  renderToDom("#app", domString);
};

const filter = (array, typeString) => {
  const petsArray = [];

  for (const pet of array) {
    if (pet.type === typeString) {
      petsArray.push(pet);
    }
  }

  return petsArray;
};

  const showAllButton = document.querySelector("#showAll-btn");
  const catsButton = document.querySelector("#cats-btn");
  const dogsButton = document.querySelector("#dogs-btn");
  const dinosButton = document.querySelector("#dinos-btn");

  showAllButton.addEventListener("click", () => {
    cardsOnDom(pets);
  });

  catsButton.addEventListener("click", () => {
    const animalsThatAreCats = filter(pets, "cat");
    cardsOnDom(animalsThatAreCats);
  });

  dogsButton.addEventListener("click", () => {
    const animalsThatAreDogs = filter(pets, "dog");
    cardsOnDom(animalsThatAreDogs);
  }); 
  
  dinosButton.addEventListener("click", () => {
    const animalsThatAreDinos = filter(pets, "dino");
    cardsOnDom(animalsThatAreDinos);
  });  

// START OF PET FORM FOR ENTERING IN NEW PETS

// ******************** //
// ****** CREATE ****** //
// ******************** //

// 1. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate

const createMember = (event) => {
  event.preventDefault();
  /* grab the values from form
  const name = document.querySelector("#name");
  const color = document.querySelector("#color");
  const specialSkill = document.querySelector("#specialSkill");
  const type = document.querySelector("#type");
  const image = document.querySelector("#image");
  console.log(name);
  console.log(name.value); */
  // Create an object from values

  const newPet = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    image: document.querySelector("#image").value,
  };
  console.log("new pet", newPet);

  // push to team array
  pets.push(newPet);

  // rerender with new team
  cardsOnDom(pets);
};

// 2. Add an event listener for the form submit and pass it the function (callback)

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener("click", createMember);

// ******************** //
// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div

const appDiv = document.querySelector("#app");

// 2. Add an event listener to capture clicks

appDiv.addEventListener("click", (event) => {
  // 3. check e.target.id includes "delete"
  if (event.target.id.includes("delete")) {
    // 4. add logic to remove from array
    const [throwAway, petId] = event.target.id.split("--");
    // what object needs to be removed and I know my memberId
    //Find where the object we want to delete is in the array
    const indexOfPet = pets.findIndex(
      (object) => object.id === Number(petId)
    );

    // Now we can use a splice to delete the object at the index
    pets.splice(indexOfPet, 1);
  }
  // 5. Repaint the DOM with the updated array
  cardsOnDom(pets);
});

const startApp = () => {
  cardsOnDom(pets);
  // events(); // ALWAYS LAST
};

startApp();
