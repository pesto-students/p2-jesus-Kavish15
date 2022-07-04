var Person = function () {

};
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;

}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }
    teach = function (subject) {
        console.log(this.name + " is now teaching " + subject);
    }
}

Teacher.prototype = new Person();
var him = new Teacher();
// console.log(him)

him.initialize("Adam", 45);
him.teach("Inheritance");