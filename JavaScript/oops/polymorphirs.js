// Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

// Bycycle bell
const bycycle = {
    bell: function(){
        return "Ring, ring! Watch out!"
    }
}

// Door bell
const door = {
    bell: function(){
        return "Ring, ring! Come out!"
    }
}

// Fucntion to ring the bell
function ringTheBell(thing){
    console.log(thing.bell())
}

// Call the funciton
ringTheBell(door)
ringTheBell(bycycle)




// another example
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings(), 
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle()
var kingPenguin = new Penguin()
baldEagle.useWings()
kingPenguin.useWings()