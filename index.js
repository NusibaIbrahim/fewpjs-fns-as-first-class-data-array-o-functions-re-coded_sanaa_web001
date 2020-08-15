function wakeDog(a, b){
  return `Wake ${a} the ${b}`;
}
function leashDog(a, b) {
  return`Leash ${a} the ${b}`;
}
function walkToPark(a, b) {
  return `Walk to the park with ${a} the ${b}`;
}
function throwFrisbee(a, b) {
  return `Throw the frisbee for ${a} the ${b}`;
}
function walkHome(a, b) {
  return `Walk home with ${a} the ${b}`;
}
function unleashDog(a, b) {
  return `Unleash ${a} the ${b}`;
}

wakeDog("Xerox", "Border Collie");
leashDog("Boo Radley", "Pibble");
walkToPark("Bunny", "Labrador");
throwFrisbee("Mary J. Blige", "Papillon");
walkHome("Santa Paws", "Husky");
unleashDog("Lauren", "Golden Retriever");

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog,
];

function exerciseDog(dogName, dogBreed) {
  routine.forEach(function (oppressedWorker) {
    return console.log(`${oppressedWorker(dogName, dogBreed)}`);
  });
}

 const executedMessages = exerciseDog("Esther", "Dalmation");
 
  const successMessages = [
        "Wake Esther the Dalmation",
        "Leash Esther the Dalmation",
        "Walk to the park with Esther the Dalmation",
        "Throw the frisbee for Esther the Dalmation",
        "Walk home with Esther the Dalmation",
        "Unleash Esther the Dalmation",
      ];