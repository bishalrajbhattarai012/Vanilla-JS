// const addStuff = <T extends number | string>(arg1: T, arg2: T) => {
//   if (typeof arg1 == "number" && typeof arg2 == "number") return arg1 + arg2;

//   if (typeof arg1 == "string" || typeof arg2 == "string")
//     return "" + arg1 + arg2;
//   else throw new Error("invalid Data Type cannot process");
// };

// try {
//   const result = addStuff("2", "3");
// } catch (e: any) {
//   console.error(`ERROR: ${e.message}`);
// }

// const users = [
//   {
//     id: 1,
//     name: "Bishal Sharma",
//     email: "bishal@example.com",
//     profile: {
//       age: 25,
//       gender: "male",
//       location: {
//         city: "Kathmandu",
//         country: "Nepal",
//       },
//     },
//     preferences: {
//       theme: "dark",
//       notifications: {
//         email: true,
//         sms: false,
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Sita Rai",
//     email: "sita@example.com",
//     profile: {
//       age: 28,
//       gender: "female",
//       location: {
//         city: "Pokhara",
//         country: "Nepal",
//       },
//     },
//     preferences: {
//       theme: "light",
//       notifications: {
//         email: false,
//         sms: true,
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     profile: {
//       age: 30,
//       gender: "other",
//       location: {
//         city: "Lalitpur",
//         country: "Nepal",
//       },
//     },
//     preferences: {
//       theme: "system",
//       notifications: {
//         email: true,
//         sms: true,
//       },
//     },
//   },
// ];

// type User = typeof users[0];

// const getUsersProperty = <T extends User, K extends keyof T> (users:T[], key: K)  =>{
//     return users.map((user)=>(user[key]))
// }

// const usersOfOnlyKey = getUsersProperty(users,"name")
// console.log(usersOfOnlyKey);

// challenge 1

const wrapInArray = <T>(arg: T): [T] => {
  return [arg];
};

/*
{
name
age
class
}
*/

const gP = <T, K extends keyof T>(o: T, k: K): T[K] => o[k];

interface IStudent {
  name: string;
  age: number;
}

function printObj(student: IStudent) {
  console.log(student);
}

function merge<T, K>(obj1: T, obj2: K): T & K {
  return {
    ...obj1,
    ...obj2,
  };
}

class DataStorage<T> {
  private storage: Array<T>;

  constructor() {
    this.storage = new Array();
  }

  public addItems(item: T) {
    this.storage.push(item);
  }

  public removeItem(item: T) {
    this.storage = this.storage.filter((i) => i !== item);
  }

  public getItems() {
    return this.storage;
  }
}

const dataStorage = new DataStorage<number>();
dataStorage.addItems(5);
dataStorage.addItems(Math.floor(Math.random() * "bishal".length));
// console.log(dataStorage.getItems());

const createKeyValuePair = <T extends string, K extends any>(a: T, b: K) => {
  return {
    [a]: b,
  };
};
// console.log(createKeyValuePair("age",true));

function mapArray<T, K>(a: T[], callback: (item:T) => K): K[] {
  return a.map(callback)

}

 mapArray<string,number>(["bishal","hari","sita","gita"],(item)=>item.length)

 type IsString<T> = T extends string ? "Yes": "No";