console.clear();
// const myProfile = {
//   name: "まっさん",
//   age: 37
// };

// // const msg = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// // console.log(msg);

// const { name, age } = myProfile;

// const msg = `名前は${name}です。年齢は${age}歳です。`;
// console.log(msg);

// const myProfile = ["まっさん", 37];
// // const msg = `名前は${myProfile[0]}で、年齢は${myProfile[1]}歳です。`;
// // console.log(msg);
// const [name, age] = myProfile;
// const msg2 = `名前は${name}で、年齢は${age}歳です。`;
// console.log(msg2);

// const sayHello = (name = "名無し") => console.log(`こんにちは、${name}さん！`);
// sayHello("めぐみるく");

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr = [6, 4];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr[0], arr[1]);
// sumFunc(...arr);

// まとめる
// const arr = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr2] = arr;
// console.log(num1);
// console.log(num2);
// console.log(arr2);

/**
 * 配列のコピー、結合
 */
const arr4 = [10, 25];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
arr7[0] = 100;
console.log(arr7);
console.log(arr4);
