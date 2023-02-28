// Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

class Animal {
    constructor(species) {
        this.species = species;
    }

    title(){
        console.log("Specie Type:", this.species)
    }
}

class Human extends Animal {
    constructor(species, name, rank) {
        super(species);
        this.name = name;
        this.rank = rank;
    }


    description(){
        console.log("Name of the player:", this.name)
        console.log("The rank in the food chain:", this.rank)

    }    
}

const type_one = new Human("Human", "Ritik", "1")
type_one.title()
type_one.description()