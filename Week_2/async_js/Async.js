// // ------------------------------------------------------------------------------------

// // Fetch api provides resources to fetch data from resources.

// // It uses request and response object.

// /// "fetch()" Method is used to fetch data from resources.

// // let promise = fetch(url,[]);

// //-------------------------------------------------------------------------------------

// // IIFE: Immediately invoked Function

// // (function (){})();

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("ID: " + id);
//       resolve("data fetched")
//     }, 2000);
//   });
// }

// (async function (){
//   console.log("Getting data 1...");
//   await getData(1);
//   console.log("Getting data 2...");
//   await getData(2);
//   console.log("Getting data 3...");
//   await getData(3);
//   console.log("Getting data 4...");
//   await getData(4);
//   console.log("Getting data 5...");
//   await getData(5);
// })();

// //---------------------------------------------------------------------------------------

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("ID: " + id);
//       resolve("data fetched")
//     }, 2000);
//   });
// }

// async function getAllData(){
//   console.log("Getting data 1...");
//   await getData(1);
//   console.log("Getting data 2...");
//   await getData(2);
//   console.log("Getting data 3...");
//   await getData(3);
//   console.log("Getting data 4...");
//   await getData(4);
//   console.log("Getting data 5...");
//   await getData(5);
// }

// getAllData();

// //---------------------------------------------------------------------------------------

// function api(){
//   return new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     console.log("Inside the api");
//     resolve('{"Name":"Rohit","Age":22}');
//    }, 2000);
//   })
// }

// async function callAPI(){
//   let res=await api();
//   let obj=await JSON.parse(res);
//   console.log(obj.Name);
//   console.log(obj.Age);
// }

// callAPI();

// //---------------------------------------------------------------------------------------

// // await pauses execution of surronding async function until the promise is settled.
// // We always use await in async function only.

// //---------------------------------------------------------------------------------------

// async function Hello(){
//   console.log('Hello world');
// }

// Hello();

// //---------------------------------------------------------------------------------------

// // async function(){}
// // async always return promise

// //---------------------------------------------------------------------------------------

// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("ID: " + id);
//       resolve("data fetched")
//     }, 2000);
//   });
// }

// getData(1)
// .then(() => {
//   return getData(2);
// })
// .then(() => {
//   return getData(3);
// })
// .then(() => {
//   return getData(4);
// })
// .then((res) => {
//   console.log(res);
// })

// //------------------------------------------------------------------------------------------

// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1...");
//       resolve("success");
//     }, 3000);
//   })
// }

// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2...");
//       resolve("success");
//     }, 3000);
//   })
// }

// console.log('fetching data 1....');
// asyncFunction1().then((res) => {
//   console.log('fetching data 2....');
//   asyncFunction2().then((res) => {
//   })
// })

// // ------------------------------------------------------------------------------------

// function asyncFunction1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1...");
//       resolve("success");
//     }, 3000);
//   })
// }

// function asyncFunction2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2...");
//       resolve("success");
//     }, 3000);
//   })
// }

// console.log('fetching data 1....');
// let promise1 = asyncFunction1();

// promise1.then((res) => {
//   console.log('fetching data 2....');
//   let promise2 = asyncFunction2();
//   promise2.then((res) => {
//   })
// })

// // ------------------------------------------------------------------------------------

// const getPromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("Promise");
//     reject("failed");
//   })
// }


// let promise=getPromise();
// promise.catch((err)=>{
//   console.log("promise faild",err);
// })


// const getPromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("Promise");
//     resolve("Success");
//   })
// }


// let promise=getPromise();
// promise.then((res)=>{
//   console.log("promise fulfilled",res);
// })

// // ------------------------------------------------------------------------------------

// // Promises

// // .then() and .catch()

// // Promise.then((res)=>{})

// // Promise.catch((err)=>{})

// // ------------------------------------------------------------------------------------

// function getData(id){
//   return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//       console.log("ID: " + id);
//       resolve("data fetched")
//      }, 2000);
//   });
// }

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve("data fetched")
// })

// //------------------------------------------------------------------------------------

// function getData(id, getNextData) {
//   setTimeout(() => {
//     console.log("Data: " + id);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("fetching data 2...")
//   getData(2, () => {
//     console.log("fetching data 3...")
//     getData(3, () => {
//       console.log("fetching data 4...")
//       getData(4)
//     });
//   });
// });

// //------------------------------------------------------------------------------------

// function getData(id){
//   setTimeout(() => {
//     console.log("data: "+id);
//   }, 2000);
// }

// getData();

// //------------------------------------------------------------------------------------

// function sum(a,b){
//   console.log(a+b);
// }

// function calculator(a,b,sumfunc){
//   sumfunc(a,b);
// }

// calculator(1,2,sum);

// //------------------------------------------------------------------------------------

// console.log("One");
// console.log("Two");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("Three");
// console.log("Four");

// // ------------------------------------------------------------------------------------

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// // ------------------------------------------------------------------------------------

// console.log("One");
// console.log("Two");
// console.log("Three");

// // ------------------------------------------------------------------------------------
