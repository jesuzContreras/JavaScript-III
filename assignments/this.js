/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Is the default unless you are in strict mode.
* 2. Implicit Binding: Is defined by what is to the left of the dot operator.
* 3. Explicit Binding: tells what this is used for using call, apply and bind.
* 4. New Binding: creates a new object for this to point to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function sayName(name) {
//     console.log(this);
//     return name;
//   }
//   sayName("Jesuz");
// Principle 2

// code example for Implicit Binding
let newEmployee = {
    name: 'Jesuz',
    position: 'Web Developer',
    myPosition: function(){
    console.log(this.position);
}
}
newEmployee.myPosition();
// Principle 

// code example for New Binding
function Food(favorite){
    this.thing = favorite;
}
const myFavoriteFood = new Food ('enchiladas');
console.log(`${myFavoriteFood.thing}`);
// Principle 4

// code example for Explicit Binding
function Employee(){
    console.log(this.id);
}
let newID = {
    name: 'Jesuz',
    id: 1001,
    position: 'webDev',
}
Employee.call(newID);