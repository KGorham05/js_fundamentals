console.log('Hello World!');

// declare variables
var name = "Foos"; 
var tutor = "Kevin";
// boolean
var isStudent = true;
// string
var greeting = `Hello ${name} nice to meet you`; // "Hello " + name + " nice to meet you"
// number
var age = 21;
// array
var kids = ["Leonardo", "Adnan"];
// object
var webDevClass = {
  teacher: "Nate",
  students: ["Foos", "Sarah", "Steven"],
  sayHello: function() {
    this.students.map(student => {
      console.log(`Welcome to class ${student}`)
    })
  }
}

console.log(webDevClass.students)
console.log(webDevClass.teacher)
webDevClass.sayHello();
// declare function
// execute function
// for loop
