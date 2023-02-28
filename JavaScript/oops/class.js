// working with a class

class Train{
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    lightStatus() {
        console.log("Lights on?", this.lightsOn)
    }
    getSelf() {
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this)
        console.log(proto)
    }
}


const dubby = new Train("red", false)
dubby.toggleLights()
console.log(dubby.lightsOn)
dubby.lightStatus()
dubby.getSelf()
dubby.getPrototype()



// inheritance class

class highSpeedTrain extends Train{
    constructor(passangers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn)
        this.passangers = passangers
        this.highSpeedOn = highSpeedOn
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log('high speed status:', this.highSpeedOn)
    }
    toggleLights() {
        super.toggleLights()
        super.lightStatus()
        console.log('Lights are operational.')
    }
}

const newTrain = new highSpeedTrain(4, false, "black", false)
newTrain.toggleHighSpeed()
newTrain.toggleLights()