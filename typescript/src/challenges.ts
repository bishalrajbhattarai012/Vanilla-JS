export {}
// challenge 1
const user = {
    name: "Alice",
    age: 30,
    isAdmin: false,
  };

  type User =typeof user

//   challenge 2
function greet(name: string):string {
    return "Hello, " + name.toUpperCase();
  }

//   challenge 3
type Product = {
    id:number;
    name:string;
    discount?:number
}

const product1 : Product = {
    id:Math.floor(Math.random()*100),
    name: `Product ${Math.floor(Math.random()*100)}`,
    discount : Math.floor(Math.random()*10),
}

const product2 : Product = {
    id:Math.floor(Math.random()*100),
    name: `Product ${Math.floor(Math.random()*100)}`,
    discount : Math.floor(Math.random()*10),
}

// challenge 4

type Status = "loading" | "success" | "error"

const handleStatus = (arg:Status)=>{
    if(arg == "loading") return "please wait"
    if(arg == "success") return "data loaded successfully"
    if(arg == "error") return "something went wrong"

}


handleStatus("loading");  // => "Please wait..."
handleStatus("success");  // => "Data loaded successfully!"
handleStatus("error");    // => "Something went wrong."

// challenge 5
const directions = {
    up:"Moving up",
    down :"Moving down",
    left :"Moving left",
    right:"Moving right"
}
type Direction = typeof directions

const move = (direction : keyof Direction)=>{
        return directions[direction]
}
// console.log(
//     move("left")
// );


// Intermediate Challenges
const formatInput = <T extends number | string>(arg:T) : string=>{
    try {
            if(typeof arg == "string") return arg.toUpperCase()
            else return `ID :${arg}`
    } catch (error:any) {
        throw new Error(error.message)
    }
}

let formattedResult =  formatInput("bishal")
// console.log(formattedResult);

const indentify = <T>(arg:T):T=> arg
/*
Challenge 9: Generic Function — Filter by Predicate
Create a generic function filterArray that:
Takes an array of items of type T[].
Takes a predicate function (item: T) => boolean.
Returns a new array containing only the items for which the predicate returns true.
*/


function filterArray<T extends string| number>(items:T[],callback:(i: T)=>boolean):T[]{
        return items.filter(callback)
}
const numbers:number[] = [1, 2, 3, 4, 5];

filterArray<number>(numbers,(w:number)=>w % 2==0)

// challenge 10 
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

function pluck<T,K extends keyof T>(users:T[],key: K) {
   return users.map((user:T)=> user[key])
}
// console.log(pluck(users,"name"));

// challenge 11
type IsString<T> = T extends string ? "YES" : "NO";

