/**
 * const、let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

//letは上書きが可能
// val2 = "let変数を上書き"
// console.log(val2);

//letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
//const変数は上書き不可
//val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name:"じゃけぇ",
//   age:28,
// };
// val4.name="jak";
// val4.addres="Hiroshima";
// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//基本的には全てconstを使う
//値が変わるものに関してはステートを使用する。


/**
 * テンプレート文字列
 */

// const name = "sua";
// const age = 23;

// //従来の方法
// const message1 = "私の名前は" + name +"です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`

/**
 * アロー関数
 */
//従来の関数
// function func1(str){
//   return str;
// }

// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) =>{
//  return str;
// }
// console.log(func2("func2です"));

//引数が一つの場合（）を省略できる
// const func2 = str =>{
//  return str;
// }
// console.log(func2("func2です"));

//関数内のロジックがreturnするだけの場合は下記のような省略も可能
// const func2 = str => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,20));

//1行なので下記のような書き方も可能
//const func3 = (num1,num2) => num1 + num2;

/**メモ
 * TODO:従来のfunctionとアロー関数でthisの扱いが違うので余裕が出てきたら調べてみる
 * 最近のReactの傾向としてthisを書かなくても良いのでその点も併せて調べてみる
 */
//ノード番号1、ノード番号2,時間,平均速度
// let list = [1,2,915,44];
// let list2 = [1,2,930,10];
// let list3 = [2,3,915,10];
// let list4 = [2,3,930,10];
// let allList = [];

// const map = new Map();



// allList.push(list,list2,list3,list4);


// const filter = (addlist) =>{
//   addlist.forEach(a => {
    
//    map.set(a[0],)
//  });{

//  }
// };
// const paramsum = (int1,int2)=> int1+int2;

// filter(allList);
// console.log(allList[0][0]);