//1
const myInfo = {
  name: "Aleksander",
  surname: "Zhuk",
  age: 19,
  profession: "Tech. Support",
  country: "Russia",
  city: "Moscow"
};

console.log (myInfo)

//2 
const myInfo2 = {
  name: "Aleksander",
  surname: "Zhuk",
  age: 19,
  profession: "Tech. Support",
  country: "Russia",
  city: "Moscow",
  greet: function(name) {
    return `Hello ${name}`;
  }
};

console.log(myInfo2.greet("Aleksander"));

//3 

const users = [
  { name: "John", isAdmin: false },
  { name: "Joe", isAdmin: true },
  { name: "Travis", isAdmin: false },
  { name: "David", isAdmin: true },
  { name: "Eve", isAdmin: false }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    simpleUsersCount++;
  }
}

console.log("Количество простых пользователей:", simpleUsersCount);

