// Write your JavaScript code here!
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){ //Fetching Planetary Data
            
            response.json().then(function(json){
               const container = document.getElementById("missionTarget");
               
               function randomSelection(json){ // random function
                  let index = Math.floor(Math.random()*json.length);
                  return json[index];
               }
               let  selected = randomSelection(json);
                    container.innerHTML = `
                    <button>Refresh Destination</button>
                     <h2>Mission Destination</h2> 
                     
                     <ul>
                        <li>Name: ${selected.name}</li>
                        <li>Diameter: ${selected.diameter}</li>
                        <li>Star: ${selected.star}</li>
                        <li>Distance from Earth: ${selected.distance} </li>
                        <li>Number of moons: ${selected.moons}</li>
                     </ul>
                   
                  <img class="avatar" src="${selected.image}"/>
                  
               `;
      
            });
            
    });


      let launchformNode = document.getElementById("launchForm");
         launchformNode.addEventListener("submit",function(event){
         event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilot = pilotNameInput.value;
      let pilotCheck = Number(pilot);

      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let copilot = copilotNameInput.value;
      let copilotCheck = Number(copilot);

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let fuelLevel = fuelLevelInput.value; 
      let fuelLevelCheck = Number(fuelLevel);

      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMass = cargoMassInput.value;
      let cargoMassCheck = Number(cargoMass);



if(!pilot || !copilot || !fuelLevel ||!cargoMass){ //test all fields required
   alert("All fields required");
} else if (isNaN(fuelLevelCheck) === true ||  isNaN(cargoMassCheck) === true 
              || isNaN(pilotCheck) === false || isNaN(copilotCheck) === false ){ //test for number inputs
   alert("Please enter number values");
}else {

      document.getElementById("itemStatus").style.visibility = "visible" // make status info visible
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for Launch`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} is ready for Launch`;
      launchStatusMsg = document.getElementById("launchStatus");
      fuelLevelStatus = document.getElementById("fuelStatus");
      cargoMassStatus = document.getElementById("cargoStatus");

   function ShuttleNotReady() {
      launchStatusMsg.innerHTML = "Shuttle NOT ready for launch";
      launchStatusMsg.style = " color : red ";
   }
   
   function ShuttleReady(){
      launchStatusMsg.innerHTML = "Shuttle is ready for launch";
      launchStatusMsg.style = " color : green ";  
      fuelLevelStatus.innerHTML = "Fuel level ok for launch";
      cargoMassStatus.innerHTML = "Cargo mass check passed";
   }

//Begin safety check
    if (fuelLevel < 10000 && cargoMass > 10000){ 
      
            ShuttleNotReady();
            fuelLevelStatus.innerHTML = "Fuel level too low for launch";
            cargoMassStatus.innerHTML = "Cargo mass too much for launch";

     } else if(fuelLevel < 10000 && cargoMass < 10000){ 
      
            ShuttleNotReady();
            fuelLevelStatus.innerHTML = "Fuel level too low for launch";
            cargoMassStatus.innerHTML = "Cargo mass check passed";

     } else if(fuelLevel > 10000 && cargoMass > 10000){

            ShuttleNotReady();
            fuelLevelStatus.innerHTML = "Fuel level ok for launch";
            cargoMassStatus.innerHTML = "Cargo mass too much for launch";

     }else  {    // all clear

            ShuttleReady();
     }


} 
});
});





        


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/