// Accessing Objects
console.log(`Accessing objects`);

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
console.log(`Simple Object`);

let nohoi = {}

console.log(nohoi);

nohoi.type = `Doberman`;
nohoi.name = `Max`;
nohoi.color = `Black and tan`;
nohoi.age = `1 nas 8 sar`;
nohoi.shinj = `overall shape`;

console.log(nohoi);

// Animals
console.log(`Animals`);

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
console.log(`MERN object`);

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

console.log(users[0]);

function mostSkills(user){
    for(let i = 0; i < users.length-1; i++){
        for(let j = i + 1; j < users.length; j++){
            let max = 0;
            if(max < user[j].skills.length){
                max = user[j].skills.length;
                ner = user[j].name;
                console.log(ner);
            }
        }
    }
}
mostSkills(user);





















// function proSkill(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(max < arr[j].skills.length){
//                 max = arr[j].skills.length;
//                 ner = arr[j].name
//             }
        
//         }
//     }
//     return ner;
// }
// console.log(proSkill(users));



// console.log(`newtersen hereglegch: ${users.length}`);
// let over50 = [];
// for(let i = 0; i < users.length; i++){
//     if(users[i].points >= 50){
//         over50.push(users[i].name);
//     }
// }
// console.log(over50);