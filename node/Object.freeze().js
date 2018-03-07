// Object.freeze() 只能对object 对象有效，变量无效

var str = ''
Object.freeze(str)
str = 'self being freezed'
console.log('str:' + str);

// Create an object that has two properties.
var obj = {
    a: 1,
    b: 2
}
Object.freeze(obj)
// Try to add a new property, and then verify that it is not added. 
obj.c=3
// Try to delete a property, and then verify that it is still present. 
delete obj.a
obj.a='update'
console.log(obj)
