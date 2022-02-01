class Car {
    model: String;
    doors: Number;
    
    constructor(model: String, doors: Number) {
        this.model = model;
        this.doors = doors;
    }

    make(): void {
        console.log(`This car is ${this.model} which has ${this.doors} doors` );
    }
}
let newCar = new Car('Porsche', 2);
newCar.make();