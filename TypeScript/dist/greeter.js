var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstname + ' ' + person.lastname;
}
var user = { firstname: 'Lee', lastname: 'Neo' };
document.body.innerText = greeter(user);
