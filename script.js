const users = [
    {name:'Masud', age: 17, budget:10000},
    {name:'Oryon', age: 16, budget:9000},
    {name:'Eraj', age: 16, budget:8000},
    {name:'Sino', age: 15, budget:7000},
    {name:'Mansour', age: 17, budget:6000},
    {name:'Faridun', age: 16, budget:5000},
];


// Цикл For 

// for (let index = 0; index < users.length; index++) {
//     console.log(users[i]);
    
// };

// for(let amount of users) {
//     console.log(amount)
// };


//  ForEach 

// users.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })


// Map

// let newUsers = users.map((elem) => {
//     return  elem.budget / 2;
// });
// console.log(newUsers) 



// filter 

// let newusers = users.filter((elem) => {
//    return elem.budget > 7000;
// });
// console.log(newusers);


// reduce

// let sumBudget = users.reduce((prevNum,user) => {
//     return prevNum += user.budget;
// },0);
// console.log(sumBudget);


// find

// let Masud = users.find(elem => elem.name === 'Masud');
// console.log(Masud);