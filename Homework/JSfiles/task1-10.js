const users = [
  {
    name: "Moore Hensley",
    color: "blue",
    gender: "male",
    isActive: false,
    email: "moorH@mal.com",
    age: 38,
    balance: 5231,
    friends: ["Ross Vazquez", "Elma Head", "Carey Barr"],
    skills: ["veniam", "tempor", "non", "mollit", "laborum", "anim"]
  },
  {
    name: "Sharlene Bush",
    color: "blue",
    gender: "female",
    isActive: true,
    email: "BuShar@domain.com",
    age: 31,
    balance: 8254,
    friends: ["Moore Hensley", "Ross Vazquez", "Briana Decker"],
    skills: ["velit", "proident", "non", "irure", "culpa", "amet"]
  },
  {
    name: "Ross Vazquez",
    color: "green",
    gender: "male",
    isActive: false,
    email: "rossVazquez@mail.com",
    age: 24,
    balance: 1945,
    friends: ["Sharlene Bush", "Blackburn Dotson", "Sheree Anthony"],
    skills: ["veniam", "nostrud", "lorem", "laborum"]
  },
  {
    name: "Elma Head",
    color: "yellow",
    gender: "female",
    isActive: true,
    email: "elmahead@omatom.com",
    age: 29,
    balance: 4076,
    friends: [
      "Moore Hensley",
      "Sharlene Bush",
      "Elma Head",
      "Carey Barr",
      "Blackburn Dotson",
      "Goldie Gentry"
    ],
    skills: ["velit", "tempor", "non", "anim", "adipisicing"]
  },
  {
    name: "Carey Barr",
    color: "blue",
    gender: "male",
    isActive: true,
    email: "CaBarr@swoop.com",
    age: 26,
    balance: 952,
    friends: ["Ross Vazquez", "Sheree Anthony"],
    skills: ["veniam", "proident", "ipsum", "culpa", "adipisicing"]
  },
  {
    name: "Blackburn Dotson",
    color: "brown",
    gender: "male",
    isActive: false,
    email: "BlackDotson@dark.com",
    age: 34,
    balance: 7329,
    friends: ["Moore Hensley"],
    skills: ["velit", "nostrud", "mollit", "ex", "elit", "commodo"]
  },
  {
    name: "Sheree Anthony",
    color: "green",
    gender: "female",
    isActive: true,
    email: "shereeanthony@kog.com",
    age: 30,
    balance: 4578,
    friends: ["Elma Head", "Carey Barr", "Briana Decker", "Goldie Gentry"],
    skills: ["veniam", "tempor", "nulla", "lorem", "ex"]
  }
];

//сортировка по именам юзеров
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

//сортировка по цвету глаз
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.color === color);
console.log(getUsersWithEyeColor(users, "blue"));

//сортировка по полу
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUsersWithGender(users, "male"));

//сортировка по активности
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

//сортировка по эмейлу
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

//сортировка по возрасту
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age < max && user.age >= min);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//вычисление баланса всех пользователей
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users));

//сортировка по имени друга
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName)).map(user => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker')); 
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

//сортировка по количеству друзей
const getNamesSortedByFriendsCount = users => users.sort((user1, user2) => user1.friends.length - user2.friends.length).map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));

//сортировка по навыкам
const getSortedUniqueSkills = users => {
  const skills = users.reduce((acc, user) => [...acc, ...user.skills], []);
  const skillsArr = [];
  skills.forEach(skill => {
    if (!skillsArr.includes(skill)) skillsArr.push(skill);
  });
  return skillsArr.sort();
};
console.log(getSortedUniqueSkills(users));
