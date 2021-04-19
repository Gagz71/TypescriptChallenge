"use strict";
const user1 = {
    name: "Pierre",
    age: 23
};
const user2 = {
    name: "Paul",
    birthday: "10/02/1990"
};
const user3 = {
    name: "Jacques",
    age: 25
};
const prettyPrintWilder = (users) => {
    console.log("########################");
    users.map((el) => {
        console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
};
const wilders = [];
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
//# sourceMappingURL=challenge.js.map