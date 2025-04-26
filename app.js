// Q1
let nickname = '藤森';
let age = 27;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2
let language = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${language[0]}です。次は${language[3]}を勉強してみたいです。`)

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5
let sum = [playerList[0].age + playerList[1].age + playerList[2].age,];
let avarage = sum / playerList.length;
console.log(avarage);

// Q6
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World')
};
sayWorld();

// Q7
user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function() {
  console.log('Hello！');
};
user.sayHello();

// Q8
let calc = {};
calc.add = (x, y) => {
  console.log(x + y);
}
calc.add(2, 5);

calc.subtract = (x, y) => {
  console.log(x - y);
}
calc.subtract(15, 5);

calc.multiply = (x, y) => {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = (x, y) => {
  console.log(x / y);
}
calc.divide(25, 5);

// Q9
let x = 5;
let y = 3;

function remainder(x, y) {
  return x % y;
}

console.log(x + 'を' + y + 'で割った余りは' + +remainder(x, y) + 'です。');

// Q10
// 下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
// その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。
// - スコープ
// - 参照
// function foo() {
//   let x = 1;
// }
// console.log(x);

→変数xは関数foo内のローカル変数であり、関数内のみスコープ対象となる。
　　よって、関数外から参照しようとしてもエラーになってしまう。

// Q1 標準組み込みオブジェクト
const rndNum = Math.floor(Math.random() * 10);
console.log(rndNum);

// Q2 コールバック関数
let hello = setTimeout(function() {
    console.log('Hello World!');
  }, 3000);
console.log(hello);

// 
// Q3 if
let num = 9;

if(num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for(let num = 1; num < 100; num++) {
  numbers.push(num);  
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];
console.log(mixed);
for (let i of mixed) {
  if(typeof i !== 'number') {
    console.log('not number');
  } else if (i === 0) {
  } else if(i % 2 === 1) {
    console.log('odd');
  } else {
    console.log('evne');
  }
}