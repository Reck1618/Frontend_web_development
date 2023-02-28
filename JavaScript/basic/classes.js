//Construct a class 
class Car{
    constructor(color, speed) {
        this.color = color
        this.speed = speed

    }

    turboOn() {
        console.log('turbo is on!')
    }
}

//Generate car1 object
const car1 = new Car('red', 120)

//Invoke the method
car1.turboOn()

//Car properties
console.log(car1.color, car1.speed)




//Another Example
class Purchase {
    constructor (price, stateTax) {
        this.price = price
        this.stateTax = stateTax
    }
    
    totalprice() {
        var calculation = this.price * this.stateTax;
        console.log("total price:", calculation)
    }

}

const product_one = new Purchase(100, 1.2)

product_one.totalprice()
