const addStuff = <T extends number | string>(arg1: T, arg2: T) => {
  if (typeof arg1 == "number" && typeof arg2 == "number") return arg1 + arg2;

  if (typeof arg1 == "string" || typeof arg2 == "string")
    return "" + arg1 + arg2;
  else throw new Error("invalid Data Type cannot process");
};

try {
  const result = addStuff("2", "3");
  //  console.log(result)
} catch (e: any) {
  console.error(`ERROR: ${e.message}`);
}

const users = [
  {
    id: 1,
    name: "Bishal Sharma",
    email: "bishal@example.com",
    profile: {
      age: 25,
      gender: "male",
      location: {
        city: "Kathmandu",
        country: "Nepal",
      },
    },
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
  {
    id: 2,
    name: "Sita Rai",
    email: "sita@example.com",
    profile: {
      age: 28,
      gender: "female",
      location: {
        city: "Pokhara",
        country: "Nepal",
      },
    },
    preferences: {
      theme: "light",
      notifications: {
        email: false,
        sms: true,
      },
    },
  },
  {
    id: 3,
    name: "John Doe",
    email: "john.doe@example.com",
    profile: {
      age: 30,
      gender: "other",
      location: {
        city: "Lalitpur",
        country: "Nepal",
      },
    },
    preferences: {
      theme: "system",
      notifications: {
        email: true,
        sms: true,
      },
    },
  },
];

type User = typeof users[0];

const getUsersProperty = <T extends User, K extends keyof T> (users:T[], key: K)  =>{
    return users.map((user)=>(user[key]))
}

const usersOfOnlyKey = getUsersProperty(users,"name")
console.log(usersOfOnlyKey);