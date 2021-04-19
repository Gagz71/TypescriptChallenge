var user1 = {
    name: "Pierre",
    age: 23
};
var user2 = {
    name: "Paul",
    birthday: "10/02/1990"
};
var user3 = {
    name: "Jacques",
    age: 25
};
var wilders = [user1, user2, user3];
var prettyPrintWilder = function (users) {
    console.log("########################");
    users.map(function (el) {
        console.log(el.name + " is " + el.age + " years old");
    });
    console.log("########################");
};
prettyPrintWilder(wilders);
//   const wilders = [];
//   const user1 = { name: "Pierre", age: 23 };
//   const user2 = { name: "Paul", birthday: "10/02/1990" };
//   const user3 = { name: "Jacques", age: 25 };
//   wilders.push(user1);
//   wilders.push(user2);
//   wilders.push(user3);
//   prettyPrintWilder(wilders);
