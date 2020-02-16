"use strict";

import users from './users.js';


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
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));


//сортировка по количеству друзей
const getNamesSortedByFriendsCount = users =>
  users
    .sort((user1, user2) => user1.friends.length - user2.friends.length)
    .map(user => user.name);

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
