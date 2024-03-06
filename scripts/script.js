document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    let petsInShelter = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet(petName, petType, petAge){
      let pet = {
        name: petName,
        type: petType,
        age: petAge
      };
      petsInShelter.push(pet);
      console.log(petsInShelter);
    };
  
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(let i=0; i<petsInShelter.length; i++){
        let pet = petsInShelter[i];
        let petShelter = document.createElement("li");
        petShelter.textContent = `Name: ${pet.name} Type: ${pet.type} Age: ${pet.age}`;
        petList.appendChild(petShelter); 
        //will assist with adding each pet item to be shown in the list on the browser
     }
    }
    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 3); //example
    addPet("Drago", "Lizard, maybe dragon", 94);
    addPet("Chirpy", "Parrot", 2);
    addPet("McJagger", "Panther", 5);
    addPet("Colgate", "Great White", 9);

    // Display the pets in the shelter
    displayPets();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    function shelterStatus(){
      let numberOfShelters = 3
      let status =  document.getElementById( "shelter-status" );
      let updateStatus = document.createElement("h5");
      if( numberOfShelters < petsInShelter.length){
        // console.log("Too many pets, they need homes!");
        updateStatus.textContent = "Too many pets, they need homes!";
        status.appendChild(updateStatus);
      }else if( numberOfShelters = petsInShelter.length ){
        // console.log("Just enough homes for every pet!");
        updateStatus.textContent = "Just enough homes for every pet!";
        status.appendChild(updateStatus);
      }else{
        // console.log("More than enough homes!");
        updateStatus.textContent = "More than enough homes!";
        status.appendChild(updateStatus);
      };
    };
    //added functionality - posts a status regarding shelter availability on DOM
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    shelterStatus();
  
    // Function to calculate the average age of pets in the shelter
    function averagePetAge(){
        let totalPetAges = 0;
        for( i=0; i<petsInShelter.length; i++){
          // console.log(petsInShelter[i].age);
          totalPetAges += petsInShelter[i].age;
          // console.log(totalPetAges);
        };
        let averageAgeOfPets = (totalPetAges/petsInShelter.length);
        console.log(averageAgeOfPets);
    }
  
    // Calculate the average age of pets in the shelter by calling the previous function
    averagePetAge();


  });
  