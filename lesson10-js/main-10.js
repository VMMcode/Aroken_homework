// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;


// Решение 1.
const firstName = 'Марьяна';
const lastName = 'Варитлова';
let isStudent = true;
// Решение 2.
const age = 26;
const currentYear = 2025;
let birthYear = currentYear - age;
// Решение 3.
console.log(`Меня зовут ${firstName} ${lastName}, мне ${age}, я родилась в ${birthYear} году. Я ученица курса: ${isStudent}, и это лучшее решение в моей жизни.`);

// Решение 4.
let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;
console.log(result);
// Ответ: 123456789falsetrue