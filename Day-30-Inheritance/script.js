
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    displaydata() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student Age: ${this.age}`);
        console.log(`Student Gender: ${this.gender}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, studentId, grade) {
        super(name, age, gender);
        this.studentId = studentId;
        this.grade = grade;
        this.courses = [];  
    }

    enrollCourse(course) {
        this.courses.push(course);
        console.log(`${this.name} enrolled in ${course}`);
    }

    displayinfo() {
        super.displaydata();  
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Enrolled Courses: ${this.courses.join(', ')}`);
    }
}

let student1 = new Student("Diya Dhamanda", 21, "Female", "9952", 'A+ ');
student1.enrollCourse("Full Stack Developer");
student1.displayinfo();
