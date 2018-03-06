class Student {
    fullName: string
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstname: string
    lastname: string
}

function greeter(person: Person) {
    return "Hello," + person.firstname + ' ' + person.lastname
}

let user = { firstname: 'Lee', lastname: 'Neo' }
document.body.innerText = greeter(user)