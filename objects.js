//Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older.
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

function Array(people){
  return people.filter(person=>person.Age>=18,person=>person.name)
}
const people=[
  {name:'Alice',Age:17},
  {name:'Eunice',Age:22},
  {nme:'Charlie',Age:14},
  {name:'Max',Age:19},
]
console.log(Array(people))

////Given an object representing a car, with properties for the make,
//model, year, and a method to display the car's information, write a
// function that takes the car object and adds a new method to the object
// called age. The age method should return the current age of the car
//based on the current year and the car's year property.
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};
car.age=5
 function displayInfo(){
  console.log( ` Age is ${this.age}and year is  ${this.year}`)
 }
car.displayInfo()




