// first and second task
let happyStudent = {
  name: 'Maryana',
  surname: 'Varitlova',
  age: 25,
  educatioanlProgress: 20,
  sayHello(personName) {
    return `Hello "${personName}"`
  }
}
// first and second task

// third, fourth and fifth task
let users = [
  {
    name: 'Maryana',
    age: 25,
    isAdmin: false,
  },

  {
    name: 'Alex',
    age: 16,
    isAdmin: false,
  },

  {
    name: 'Maksim',
    age: 26,
    isAdmin: true,
  },

  {
    name: 'Denis',
    age: 29,
    isAdmin: false,
  },

  {
    name: 'Albert',
    age: 22,
    isAdmin: true,
  },

  {
    name: 'Maria',
    age: 28,
    isAdmin: false
  }
]

let ordinaryUsers = 0;
for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    ordinaryUsers++;
  }
}

console.log(ordinaryUsers)
// third, fourth and fifth task
