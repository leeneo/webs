
export module TsDemo {

    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return "Hello," + person.firstName + ' ' + person.lastName
    }
    
    let user = { firstName: 'David', lastName: 'Edward' }
    document.body.innerHTML = greeter(user)  
}
