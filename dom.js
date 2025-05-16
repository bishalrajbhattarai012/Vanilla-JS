// // function changeColor(color,time){
// // return new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         document.body.style.backgroundColor = `${color}`
// //         resolve()
// //     },time)

// // })
// // }

// // // async function startWork(){
// // //   await changeColor("red",1000)
// // //   await changeColor("pink",1000)
// // //   await changeColor("black",1000)
// // // }
// // // startWork()

// // // changeColor("red",1000)
// // // .then(()=>{
// // // changeColor("pink",1000)
// // // .then(()=>{
// // // changeColor("black",1000)
// // //  })
// // // })

// function readFile(){
//     fetch("./abc.json")
//     .then((response)=>response.json())
//     .then(data=>{
//         console.log(data)
//     })
// }
// // readFile()

// const value =5;
// let newValue = value;
// console.log(newValue    )

// const button = document.querySelector(".btn")
// button.addEventListener("click",(event)=>{

//     const inputData = document.querySelector(".input").value
//         const out = document.querySelector(".output")
//         out.textContent=`your input is ${inputData}`
// })

// const logEntries= []
// logEntries.push("bishal")
// console.log(typeof logEntries)

// console.log(
//     typeof undefined
// )

// function add(one,two){

//     let three =5;
//     return one+two
// }

// add(2,2)

// const json1 = {
//     name:"bishal",
//     location:{
//         address:{
//             street:"Street 1",
//             house:83,
//             city:"ktm",
//             tags:["ktathmad","pokhara"]
//         }
//     }
// }
// const json2 = structuredClone(json1)
//  console.log(json1.location===json2.location)

// const person = {
//     name:"bishal",
//     age:21,
//     city:"kathmandu",

// }

// function updateObject(obj, key, value){
//         obj[key] = value
// }

// function hasProperty(obj,key){

//     const found = Object.keys(obj).find((k)=>k===key)
//     return found ? true:false
// }

// function countProperties(obj){
//  return Object.keys(obj).length
// }

// function removeProperty(obj,key){
//         delete obj[key]

// }

// function objectToPairs(obj){

//     return Object.entries(obj)

// }

// function mergeObject(obj1,obj2){
//     const newObj = {
//         ...structuredClone(obj1),
//         ...structuredClone(obj2),
//     }
// }

// function findKeyByValue(obj,value){
//     for(let key in obj){
//         if(obj[key] === value)
//             return key
//     }
//     return undefined
// }

// function sumObjectValues(obj){
//     return Object.values(obj).reduce((acc,next)=>acc+next,0)
// }

// function invertObject(obj){
//     const newObj = {}
//     for(let key in obj){
//             newObj[obj[key]] = [key]
//     }

//     return newObj
// }

/*
const data = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' },
  { type: 'vegetable', name: 'spinach' }
];

groupByProperty(data, 'type');
// Output: 
{
  fruit: [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' }
  ],
  vegetable: [
    { type: 'vegetable', name: 'carrot' },
    { type: 'vegetable', name: 'spinach' }
  ]
}
*/

// function groupByProperty(data,propertyName){
//         let outputObject = {}

//         data.forEach((val)=>{
//             outputObject[val[propertyName]] = []
//         })

//         data.forEach((val)=>{
//             if(val.type ===  outputObject[val.type]){
//                 outputObject[val.type].push(val)
//             }
//         })

//         return outputObject;

// }



// const boolValuee = !! newObj.propsName
// console.log(boolValuee)

//  const newFunc = myFunc(1,2)
//  newFunc()

//  yo newFunc() call garda esto logged hos the arguments are 1 and 2

// CLOSURE
// HOISTING

/*
 auta table xa employee vanera
 
 id
 name 
 age
 salary 
 deptName


select id from employee
group by id
having salary = max(salary)


select 
from employee


//  select max(salary) from employee
 
//  select max(salary)
//  from employee 
//  where salary < (select max(salary) from employee)

 you need to fetch the record of 2nd highest salary employee
*/

// const newArr = Array.from("bishala")
// console.log(newArr);
// const count = {}

// for (let key of newArr){
//   if(count[key])  count[key] =  ++count[key]
//   count[key] = 1
// }

// console.log(count);

// const head = document.head
// console.log(head);

// const items = document.getElementsByClassName("list-item")
// console.log(items);

// function doStuff(changedText) {

// const pTagReference = document.getElementById("text")
// if(!pTagReference){
//   throw { message :"Paragraph Tag Doesnot Exist in the DOM or while js script was loaded"}
// }
// const btnReference = document.getElementById("changeBtn")

// btnReference.addEventListener("click",(event) => {
//       pTagReference.textContent = changedText
//  })

// }

// doStuff("Text Changed")

// function getRandomColor(){
//   const colors = ["red","blue","yellow","green","pink","gray","orange"]
//   return colors[Math.floor(Math.random()* (colors.length+1))]
// }

// function getElement(idName){
//   const ref = document.getElementById(idName)
//   if(!ref) throw new Error("the element doesnot exist in the DOM")
//    else return ref
// }

// function changeColor(){
//       const btn = getElement("colorBtn")
//       const div = getElement("colorBox")

//     btn.addEventListener("click",(event)=>{
//         div.style.backgroundColor = getRandomColor()
//     })
// }

// changeColor()

// ----------------------------------------------------------
// function getElement(idName){
//   const ref = document.getElementById(idName)
//   if(!ref) throw new Error("the element doesnot exist in the DOM")
//    else return ref
// }

// function toggleButton(){
//   const btnRef = getElement("toggleBtn")
//   const pRef = getElement("toggleText")
// https://picsum.photos/200

//   btnRef.addEventListener("click",(event)=>{
//     console.log(btnRef.textContent);
//     if(btnRef.textContent == "Hide"){
//       btnRef.textContent= "Show"
//             return  pRef.style.display="none"
//     }
//     if(btnRef.textContent == "Show"){
//       btnRef.textContent="Hide"
//       return   pRef.style.display="block"
//     }
//   })

// }
// toggleButton()

// function changeImage(){
//   const btn = getElement("switchBtn")
//   const img = getElement("image")
//   btn.addEventListener("click",()=>{
//     console.log("clicked");
//     img.src = `https://picsum.photos/200?random=${Math.random()}`
//   })
// }

// changeImage()

// function getElement(idName) {
//   const ref = document.getElementById(idName);
//   if (!ref) throw new Error("the element doesnot exist in the DOM");
//   else return ref;
// }

// function addItems() {
//   let itemsCount = 0;

  
// const deletes= Array.from(document.getElementsByClassName("delete"))

// deletes.forEach((d)=>{
//   d.addEventListener("click",(e)=>{
//     console.log("clicking");
//     e.target.remove()
//   })
// })


//   const btn = getElement("addItemBtn");
//   const ul = getElement("itemList");
//   btn.addEventListener("click", () => {
//     console.log("working");
//     const input = getElement("itemInput")
//     const li = document.createElement("li");
//     const button = document.createElement("button")
//     button.textContent="delete X"

//     li.innerHTML=   ` ${++itemsCount} ${input.value}  <button class='delete'> Delete x </button> `
//     ul.append(li)
//     input.value=""

//   });
// }

// addItems()

//   const ul = document.querySelector("ul")
//   const addButton = document.querySelector("#addItemBtn")
//   addButton.addEventListener("click",(e)=>{

//   const input = document.querySelector("#itemInput")

//   const newLi = document.createElement("li");
//   newLi.classList.add("actions")
//   newLi.textContent = input.value

//   const button1 = document.createElement("button")
//   button1.classList.add("delete-btn","actions")
//   button1.textContent = "Delete"
//   button1.addEventListener("click",(event)=>{
//     ul.removeChild(newLi)  
//   })

//   const button2 = document.createElement("button")
//   button2.classList.add("edit-btn","actions")
//   button2.textContent = "Edit"
//   button2.addEventListener("click",(event)=>{
//     input.value = newLi.innerText;
//     const inputGroup = document.querySelector(".input-group")
//     const saveButton = document.createElement("button")
//     saveButton.textContent="Save"
//     saveButton.style.backgroundColor="green"
//     inputGroup.append(saveButton)

//       saveButton.addEventListener("click",(e)=>{
//         const input = document.querySelector("#itemInput")
//           newLi.innerText =  input.value
//           inputGroup.removeChild(saveButton)
//       })
//   })

//   newLi.append(button1)
//   newLi.append(button2)
//   ul.append(newLi)
//   input.value= '';
// })

const ul = document.getElementById("itemList");
const addButton = document.getElementById("addItemBtn");
const input = document.getElementById("itemInput");
const inputGroup = document.querySelector(".input-group");

addButton.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("item-text");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });

  editBtn.addEventListener("click", () => {
    input.value = span.textContent;

    if (document.getElementById("saveBtn")) return;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.id = "saveBtn";
    saveBtn.style.backgroundColor = "green";

    saveBtn.addEventListener("click", () => {
      const newText = input.value.trim();
      if (!newText) return;

      span.textContent = newText;
      input.value = "";
      inputGroup.removeChild(saveBtn);
    });

    inputGroup.appendChild(saveBtn);
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";
});
