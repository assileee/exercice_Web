const student = {
    name: "Marie",
    age: 20,
    courses: []
};

student.age = 21;
student.grade = "A";

student.courses.push("Math", "Physics", "Chemistry");

const physicsIndex = student.courses.indexOf("Physics");

const firstTwoCourses = student.courses.slice(0, 2);

console.log(student); 
console.log(`index of Physics: ${physicsIndex}`); 
console.log(`first two courses: ${firstTwoCourses}`); 