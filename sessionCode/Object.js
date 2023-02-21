//학생 정보관리하는 프로그램
//학생이 한명이면?
let name = '머시기';
let age = 12;

//학생2명이면?
let name1 = '머시기1';
let age1 = 12;
let name2 = '머시기2';
let age2 = 12;

//학생이 100명이면....?
let nameArray = ['이름1', '이름2', '이름3'];
let ageArray = [12, 12, 12];

//name과 age를 따로 관리할 필요가 있나?
let student1 = {
  name: '이름1',
  age: 12,
};

student1.name;
student1['name'];

student1['color']; //undefined
student1.number; //undefined

let student2 = {
  name: '이름1',
  age: 12,
};
let student3 = {
  name: '이름1',
  age: 12,
};

let student = {
  name: '이름',
  age: 12,
  friendList: ['철수', '영희', '짱구'],
};
student.sayHi();


let studnetsArray = [
  {
    name: '이름1',
    age: 12,
  },
  {
    name: '이름1',
    age: 12,
  },
  {
    name: '이름1',
    age: 12,
  },
];
// 쓰기힘들다... 객체를 편하게 만들 수는 없을까?

