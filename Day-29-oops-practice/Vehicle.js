class Vehicle {
    constructor(make, model, year, rentalPricePerDay) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rentalPricePerDay = rentalPricePerDay;
        this.isAvailable = true;
    }

    calculateRentalCost(days) {
        return days * this.rentalPricePerDay;
    }

    rent() {
        if (!this.isAvailable) {
            throw new Error('Vehicle is already rented');
        }
        this.isAvailable = false;
        console.log(`${this.getDescription()} has been rented`);
    }

    returnVehicle() {
        this.isAvailable = true;
        console.log(`${this.getDescription()} has been returned`);
    }

    getDescription() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, rentalPricePerDay, doors, fuelType) {
        super(make, model, year, rentalPricePerDay);
        this.doors = doors;
        this.fuelType = fuelType;
        this.type = 'car';
    }

    getDescription() {
        return `${super.getDescription()} - ${this.doors} doors, ${this.fuelType}`;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, rentalPricePerDay, engineSize, hasSidecar = false) {
        super(make, model, year, rentalPricePerDay);
        this.engineSize = engineSize;
        this.hasSidecar = hasSidecar;
        this.type = 'motorcycle';
    }

    calculateRentalCost(days) {
        let cost = super.calculateRentalCost(days);
        if (this.hasSidecar) {
            cost += 10 * days; // Extra charge for sidecar
        }
        return cost;
    }

    getDescription() {
        let description = `${super.getDescription()} - ${this.engineSize}cc`;
        if (this.hasSidecar) {
            description += ' with sidecar';
        }
        return description;
    }
}


const sedan = new Car('Toyota', 'Camry', 2023, 45, 4, 'gasoline');
const bike = new Motorcycle('Harley Davidson', 'Sportster', 2023, 75, 1200, true);

sedan.rent(); 
console.log(bike.calculateRentalCost(3)); 