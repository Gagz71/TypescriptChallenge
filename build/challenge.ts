

interface User{
    name: string;
    age ? : number;
    birthday ? : string;
}

const user1: User ={
    name: "Pierre",
    age: 23,
};
const user2: User ={
    name: "Paul",
    birthday: "10/02/1990"
};
const user3: User = {
    name: "Jacques",
    age: 25
};

const wilders:any = [user1, user2, user3];

const prettyPrintWilder = (users:any) => {
    console.log("########################");
    users.map((el) => {
      console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
};
prettyPrintWilder(wilders);