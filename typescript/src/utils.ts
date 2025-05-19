// Basic Types in Typescript

const num: number = 5; // dont need to explictly define the type it can infer itself
// console.log(num);

let studentsAge: number[] = [20, 21, 22, 23, 24];
let studentsAge2: Array<number> = [25, 26, 27, 28, 29, 30]; //generic Array with number

// multidimensional array
const multiDimensional = [
  ["a", "b", "c"],
  [1, 2, 3, 4, 5],
  [true, false, true],
];

// function acceptAnyType<T>(args1:T,args2:T):T {
// // narrowing
// if(typeof args1 =="number" && typeof args2 === "number"){
//     return args1+ args2;
// }

// if(typeof args1 == "string" && typeof args2 == "string"){
//     return args1.concat(args2)
// }
// else {
//     return -1;
// }
// }

// acceptAnyType<number>(1,2)

// function acceptAnyType<T extends number | string>(arg1: T, arg2: T): T {
//     if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//       return (arg1 + arg2);
//     }

//     if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//       return (arg1 + arg2);
//     }

//     throw new Error('Unsupported types');
//   }

function acceptAnyType(
  a: string | number,
  b: number | string
): number | string {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }

  if (typeof a == "string" && typeof b == "string") {
    return a + b;
  } else throw new Error("Invalid type");
}

// Type Assertions
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;

// Practical Implemntation

let ops = ["add","concat"]

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {

    if(c == "add"){
        return a+b;
    }
    else return ""+a+b

};

let myVal:string = addOrConcat(2,2,"concat") as string
let nextVal: number = addOrConcat(2,5,"add") as number

// Index Signature & Keyof Assertion Practical Implementation

// interface Student {
//     name:string;
//     GPA:number;
//     classes? : number[]
// }



// const getProperty = (obj: Student,key: keyof Student) => obj[key]

// console.log(getProperty(student1,"GPA"));

// for-in loop
interface Student {
    name:string;
    GPA:number;
    classes? : number[];
}


const student1 : Student = {    
    name:"bishal",
    GPA:4,
    classes:[11,12]
}

for(let key in student1){
    console.log(key + ": " +student1[key as keyof typeof student1])
}


















