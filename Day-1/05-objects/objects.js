const student = {
  name: "Pratik Patel",
  age: 20,
  course: "Computer Science",
  skills: ["React", "Node.js", "Next.js"],
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(student.name);        // Dot notation
console.log(student["course"]);   // Bracket notation

student.greet();  // Calling object method

student.university = "PDEU"; // Adding new property
console.log(student);

//  Updating property
student.age = 21;



// -------Inbuilt Object Methods

console.log(Object.keys(student));
// Output: [ 'name', 'age', 'skills', 'greet', 'university' ]

console.log(Object.values(student));

console.log(Object.entries(student));