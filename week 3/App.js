// User Management System

let users = [
  { id: 1, name: "RAHASYA", age: 18 },
  { id: 2, name: "ROHINI", age: 17 },
  { id: 3, name: "HAASINI", age: 18 },
];

function displayUsers() {
  console.log("All Users:");
  users.forEach((user) => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
  });
}

displayUsers();

function addUser(name, age) {
  const newUser = {
    id: users.length + 1,
    name: name,
    age: age,
  };
  users.push(newUser);
  console.log(`User Added: ${name}`);
}

addUser("PRANITHA", 30);

displayUsers();

console.log("Users Age >= 25:");
const seniorUsers = users.filter((user) => user.age >= 25);
seniorUsers.forEach((user) => {
  console.log(`${user.name} (${user.age})`);
});

console.log("User Names:");
const userNames = users.map((user) => user.name);
console.log(userNames);

function updateUserAge(id, newAge) {
  const user = users.find((user) => user.id === id);
  if (user) {
    user.age = newAge;
    console.log(`Updated Age of User ID ${id}`);
  }
}

updateUserAge(2, 35);

displayUsers();