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

function sameAge(){
    for(let i = 0; i < students1.length; i++){
        let sum = 0;

        sum += students1[i].age

        console.log(sum);



        // if(students1[i].age == students1[i].age){
        //     let res = 0;
        //     res += students1[i].age
            
        //     console.log(res);
        // }
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

// 
