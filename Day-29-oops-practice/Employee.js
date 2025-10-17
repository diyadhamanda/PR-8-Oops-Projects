class Employee {
    constructor(name, id, deparment, baseSalary) {
        this.name = name,
            this.id = id,
            this.deparment = deparment,
            this.baseSalary = baseSalary
    }

    calculateSalary() {
        return this.baseSalary;
    }

    getDetails() {
        return `${this.name} (ID: ${this.id}) - ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, id, department, baseSalary, teamSize, bonusPercentage) {
        super(name, id, department, baseSalary)
        this.teamSize = teamSize;
        this.bonusPercentage = bonusPercentage
    }


    calculateSalary() {
        const bonus = this.baseSalary * (this.bonusPercentage / 100);
        return this.baseSalary + bonus;
    }

    
    conductMeeting() {
        console.log(`${this.name} is conducting a team meeting with ${this.teamSize} members`);
    }
}


class Developer extends Employee {
    constructor(name, id, department, baseSalary, programmingLanguage, overtimeHours = 0) {
        super(name, id, department, baseSalary);
        this.programmingLanguage = programmingLanguage;
        this.overtimeHours = overtimeHours;
    }

    calculateSalary() {
        const overtimePay = this.overtimeHours * (this.baseSalary / 160); 
        return this.baseSalary + overtimePay;
    }

    code() {
        console.log(`${this.name} is coding in ${this.programmingLanguage}`);
    }
}

let manager = new Manager('Divya Dhamanda', 'M001', 'Engineering', 80000, 5, 15);
let developer = new Developer('Pooja Patel', 'D001', 'Engineering', 60000, 'JavaScript', 10);

console.log(manager.calculateSalary());
console.log(developer.calculateSalary());
manager.conductMeeting(); 
developer.code();