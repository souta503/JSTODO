/**
 * 分割代入
 */

//  const myProfile = {
//    name:"じゃけぇ",
//    age: 31
//  };

//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
//  console.log(message1);

//オブジェクトの場合
//オブジェクトの名前で分割代入する
//  const {name,age} = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`
//  console.log(message2);

//  const myProfile = ["じゃけぇ",31];
//  const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
//  console.log(message3);

//配列の場合
//名前は自由に付けられる
//  const [name,age] = myProfile;
//  const message4 = `名前は${name}です。年齢は${age}歳です。`
//  console.log(message4);

/**
 * デフォルト値（引数、分割代入）
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん。`);
// sayHello();
// sayHello("sua");

// const myProfile = {
//  age:31
// };

// const {age,name = "ゲスト"} = myProfile;
// console.log(age);
// console.log(name);

//="xxx"という形で値を設定することで値が設定されていない場合に使う値を設定することができる

/**
 * オブジェクト省略記法
 */

// const name = "じゃけぇ";
// const age = 31;

// const myProfile ={
//   name:name,
//   age,age
// };
// const myProfile ={
//   name,
//   age
// };
// console.log(myProfile);
//オブジェクト名：変数名が同じ場合は省略していい

/**
  *スプレッド構文 
  */
//  const arr1 = [1,2];
//  console.log(arr1);
//  console.log(...arr1);
 
 //const sumFunc = (num1,num2) => console.log(num1 + num2);
 //sumFunc(arr1[0],arr1[1]);
 //sumFunc(...arr1);
 
 //まとめる
//  const arr2 = [1,2,3,4,5];
//  const [num1,num2,...arr3] = arr2;
//  console.log(num1);
//  console.log(num2);
//  console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//=で配列をコピーする方法では参照元が同じな為、同じ参照元を使用している変数にも影響が出る為
//スプレッド構文でコピーする

/**
 * mapやfilterを使った配列の処理
 */

//  const nameArr = ["田中","山田","じゃけぇ"];
//じゃけぇ以外にさんをつけて新しい配列を定義する
// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけぇ"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//従来のFor文
//従来はindexで何番目の値かを取得できた
//  for (let index = 0; index < nameArr.length; index++) {
//    console.log(nameArr[index]);
//  }

//   nameArr.map((name) => {
//     // console.log(name);
//     return name;
//  });

//  nameArr.map((name) => console.log(name));
//indexを引数に持つことで従来と同じことができる
//  nameArr.map((name,index) => console.log(`${index}番目は${name}です`));

//特定の条件の値のみ取り出したい場合
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

/**
 * 三項演算子
 */
//条件 ? true : false
// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formatttedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";
// console.log(formatttedNum);

//returnに三項演算子を使うこともある
// const checksum = (num1,num2) =>{
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
// };
// console.log(checksum(40,40));

/**
 * 論理演算氏の本当の意味を知ろう
 * && ||
 */
//trutyhy,falsyについて
//暗黙的にtrueになる、暗黙的にfalseになる
//"ABC":trutyhy 0:falsy 10:trutyhy undefined:error null:falsy false:falsy NaN:falsy "":falsy []:trutyhy {}:trutyhy
const val = {};
if(val){
  console.log("trutyhy");
}else{
  console.log("falsy");
}

const flag1 = true;
const flag2 = true;

if(flag1 || flag2){
  console.log("1か2はtrueになる")
}
if(flag1 && flag2){
  console.log("1も2もtrueになります。")
};

const num = undefined;
const fee = num || "金額未設定です";
console.log(fee);

//  片側  または || は左側がtrutyhyの時その時点で返却する

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
//  両方  かつ   && 左側がfalsyの時その時点で返却する

// true || ,false &&
// true || false
// false && true

