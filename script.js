
class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Example usage:
const genericAnimal = new Animal("Unknown");
console.log(genericAnimal.species); // Output: Unknown
genericAnimal.makeSound(); // Output: Generic animal sound

const fluffyCat = new Cat("Persian");
console.log(fluffyCat.species); // Output: Persian
fluffyCat.makeSound(); // Output: Generic animal sound
fluffyCat.purr(); // Output: purr

const barkingDog = new Dog("Golden Retriever");
console.log(barkingDog.species); // Output: Golden Retriever
barkingDog.makeSound(); // Output: Generic animal sound
barkingDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

