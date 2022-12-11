// Accessing Objects
console.log(`=== Accessing objects ===`);

let students1 = [
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

function genderCount(){
    let male = 0;
    let female = 0;
    for(let i = 0; i < students1.length; i++){
        if(students1[i].gender === "male"){
            male ++;
        } else {
            female ++
        }
    }
    console.log(`Male: ` + male + ` Female: ` + female);
}
genderCount();

function ageAverage(){
    let sum = 0;
    for(let i = 0; i < students1.length; i++){
        sum += students1[i].age;
    }
    let avarage = 0;
    ave = sum / students1.length

    console.log(`Suragchdiin dundaj nas n: ${ave}`);
}

ageAverage();

function lastName(){
    let lname = ["Zaya", "Soyoloo", "Tsendee", "Erdenee", "Manlai"];
    for(let i = 0; i < students1.length; i++){
        students1[i].lastName = lname[i];
    }
    console.log(students1);
}
lastName();

function sameAge(){
    for(let i = 0; i < students1.length-1; i++){
        for(let h = i+1; h <students1.length; h++){
            if(students1[i].age === students1[h].age){
                let res = [];
                res.push(students1[i].name, students1[h].name);
                console.log(res + ` are ` + students1[i].age + ` years old`);
            }
        }
    }
}

sameAge();


// Simple Object
console.log(`=== Simple Object ===`);

let nohoi = {}

console.log(nohoi);

nohoi.type = `Doberman`;
nohoi.name = `Max`;
nohoi.color = `Black and tan`;
nohoi.age = `1 nas 8 sar`;
nohoi.shinj = `overall shape`;

console.log(nohoi);

// Animals
console.log(`=== Animals ===`);

let animals = [
    {type: "dog", 
    sound: "woof woof", 
    printSound: function(){ 
        console.log(`What does the ` + this.type + ` say? ` + this.sound)
    }
    },
    {type: "cow",
    sound: "moo", 
    printSound: function(){ 
        console.log(`What does the ` + this.type + ` say? ` + this.sound)
    }
    }, 
    {type: "cat",
    sound: "meow", 
    printSound: function(){ 
        console.log(`What does the ` + this.type + ` say? ` + this.sound)
    }
    }];

animals[0].printSound();
animals[1].printSound();
animals[2].printSound();

// Сурагчид
console.log(`=== Сурагчид ===`);

let students = [
    {name: "Гончигоо",
    birthOfYear: 2003, 
    hobby: "морь", 
    single: false},

    {name: `Tushig`,
    birthOfYear: 2000,
    hobby: `Art, car`,
    single: true},
    
    {name: `Tomas`,
    birthOfYear: 1999,
    hobby: `Being a spiderman`,
    single: false},
    
    {name: `Tarantino`,
    birthOfYear: 2005,
    hobby: `Director`,
    single: true},
]

console.log(students.length);

function aboveTwenty(){
    for(let i = 0; i < students.length; i++){
        if((2022 - students[i].birthOfYear) > 20){
            console.log(students[i].name + ` suragch 20s deesh nastai`);
        }
    }
}
aboveTwenty();

function findAge(){
    for(let i = 0; i < students.length; i++){
        let age = 2022 - students[i].birthOfYear;
        console.log(students[i].name + ` ` + age + ` nastai`);
    }
}
findAge();

function relStat(){
    for(let i = 0; i < students.length; i++){
        if(students[i].single === true){
            console.log(students[i].name + ` is SINGLE`);
        }
    }
}
relStat();

// MERN object
console.log(`=== MERN object ===`);

const users = [
    {name: `Alex`,
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 45,
    isLoggedIn: false,
    points: 30
    },

    {name: `Job`,
    email: 'job@job.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
    },

    {name: `Brook`,
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 39,
    isLoggedIn: true,
    points: 50
    },

    {name: `Daniel`,
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 25,
    isLoggedIn: false,
    points: 40
    },

    {name: `John`,
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
    },

    {name: `Thomas`,
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 18,
    isLoggedIn: false,
    points: 40
    },

    {name: `Paul`,
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 40
    }
]

console.log(`User info`,users[0]);


// olon skilltei hereglegch

function mostSkills(skill){
    let max = 0;
    for(let i = 0; i < skill.length - 1; i++){
        for(let j = i + 1; j < skill.length; j++){
            if(max < skill[j].skills.length){
                max = skill[j].skills.length;
                ner = skill[j].name
            }
        
        }
    }
    return ner;
}
console.log(`User who has most skills: `,mostSkills(users));

// nevtersen hereglegchig

let loggedUsers = (logIn) =>{
    let count = 0;
    for(let i = 0; i < users.length; i++){
        if(users[i].isLoggedIn){
            count++;
        }
    }
    return count
}

console.log(`Users logged in: `,loggedUsers(users));

// 50-s deesh onoo avsan

let highestPoint = (point) =>{
    let highScored = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].points >= 50){
            highScored.push(users[i].name);
        }
    }
    return highScored;
}

console.log(`Users who has 50+ points: `,highestPoint(users));

// MERN dev

let mernDev = (stack) => {
    let mern = [];
    for(let i = 0; i < users.length; i++){
        if(users[i].skills.includes('MongoDB', 'Express', 'React', 'Node')){
            mern.push(users[i].name);
        }
    }
    return mern;
}

console.log(`MERN devs: `, mernDev(users));

// Oldest three

let eldestUsers = (old) => {
    let age = [];

    for(let i = 0; i < users.length; i++){
        age.push(users[i].age);
    }
    
    age.sort(function(a, b){
        if (a > b){
            return -1;
        }else{
            return 1;
        }
    })

    let eldestAge = age.slice(0,3);

    let eldestData = [];

    for(let i = 0; i < eldestAge.length; i++){
        for(let j = 0; j < users.length; j++){
            if(users[j].age === eldestAge[i]){
                eldestData.push(users[j]);
            }
        }
    }

    return eldestData.slice(0,3)
}

console.table(eldestUsers(users));

// Дэлгүүрийн - Тайлан

const data = [
    {
        productName: `Bakery`,
        unitPrice: 2500,
        amount: 200,
        totalPrice: 50000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Chocolate`,
        unitPrice: 3000,
        amount: 18,
        totalPrice: 54000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Milk`,
        unitPrice: 4100,
        amount: 100,
        totalPrice: 4100000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Yogurt`,
        unitPrice: 5900,
        amount: 0,
        totalPrice: 295000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Butter`,
        unitPrice: 3700,
        amount: 60,
        totalPrice: 220000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Bread`,
        unitPrice: 2190,
        amount: 200,
        totalPrice: 438000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Sandwich bread`,
        unitPrice: 2900,
        amount: 120,
        totalPrice: 348,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Egg 30pcs`,
        unitPrice: 15900,
        amount: 54,
        totalPrice: 858000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Egg 10pcs`,
        unitPrice: 5290,
        amount: 60,
        totalPrice: 317400,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Chicken`,
        unitPrice: 23800,
        amount: 43,
        totalPrice: 1023400,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Beef`,
        unitPrice: 16800,
        amount: 80,
        totalPrice: 1344000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Pork`,
        unitPrice: 9000,
        amount: 36,
        totalPrice: 324000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Potato`,
        unitPrice: 1250,
        amount: 500,
        totalPrice: 626000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Carrot`,
        unitPrice: 2100,
        amount: 300,
        totalPrice: 630000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Onion`,
        unitPrice: 2750,
        amount: 88,
        totalPrice: 242000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Beet`,
        unitPrice: 4500,
        amount: 20,
        totalPrice: 90000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Garlic`,
        unitPrice: 17200,
        amount: 12,
        totalPrice: 206400,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Rice`,
        unitPrice: 14350,
        amount: 650,
        totalPrice: 9327000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Flour`,
        unitPrice: 2450,
        amount: 400,
        totalPrice: 980000,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Veg oil`,
        unitPrice: 7990,
        amount: 50,
        totalPrice: 399500,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Olive oil`,
        unitPrice: 34503,
        amount: 7,
        totalPrice: 241521,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Jam`,
        unitPrice: 9500,
        amount: 19,
        totalPrice: 180500,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Instant noodle`,
        unitPrice: 5780,
        amount: 51,
        totalPrice: 294780,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Bottle of H2O`,
        unitPrice: 1430,
        amount: 123,
        totalPrice: 175890,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Coke`,
        unitPrice: 1050,
        amount: 651,
        totalPrice: 683550,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Toilet paper`,
        unitPrice: 2300,
        amount: 32,
        totalPrice: 73600,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Soap`,
        unitPrice: 2564,
        amount: 12,
        totalPrice: 30768,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Energy drink`,
        unitPrice: 4600,
        amount: 4,
        totalPrice: 18400,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Strawberry`,
        unitPrice: 6380,
        amount: 15,
        totalPrice: 95700,
        casherId: 1,
        date: `2022-11-01`
    },
    {
        productName: `Orange`,
        unitPrice: 23960,
        amount: 45,
        totalPrice: 1066050,
        casherId: 1,
        date: `2022-11-01`
    },
]