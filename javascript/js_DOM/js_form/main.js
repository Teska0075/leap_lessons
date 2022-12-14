const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("psw");
const password2 = document.getElementById("repeatPsw");
const sms = document.getElementById("sms");

// form.addEventListener("submit",(e) => {
//   e.preventDefault();

//   validation(inputs);
// })

function validation(inputs) {
// энд та нарт бүх input орж ирж байгаа зөв эсэхийг дараах байдалаар шалгана
// 2 password хоорондоо адил байгаа эсэх
// password ийн урт 8с урт байх ёстой DONE
// email дотор заавал @ болон . орсон байх
// эдгээр нөхцөл биелсэн бол true буцаана

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim(); 

  const result = true;


  if(emailValue === ''){
    checkError(email,'Email cannot be blank');
  }else if(!isEmail(emailValue)){
    checkError(email,'Email is not valid');
  }else{
    return true;
  }


  if(passwordValue === ''){
    checkError(password, 'Password cannot be blank');
  }else if(passwordValue.length <= 8){
    checkError(password, 'Password must be longer than 8 characters');
  }else{
    return true;
  }


  
  if(password2Value === ' '){
    checkError(password, 'Password cannot be blank');
  }else if(passwordValue !== password2Value){
    checkError(password, 'Passwords must be same!');
  }else{
    return true;
  }

}

// бүх input үүдийг inputs-д авч байна
const inputs = document.getElementsByTagName("input");


// хэдэн input байгааг тоолж байна
const howManyInputs = document.getElementsByTagName("input").length;


for (let i = 0; i < howManyInputs; i++) {
  // input бүрт addEventListener өгч change эвэнтийг сонсож байна
  inputs[i].addEventListener("change", () => {
    // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
    console.log("Email-ийн утга: ", inputs.email.value);
    console.log("Password-ийн утга: ", inputs.psw.value);
    console.log("repeatPsw-ийн утга: ", inputs.repeatPsw.value);

    // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
    if (validation(inputs)) {
      document.querySelector(".registerBtn").disabled = false;
    }
  });
}


function checkError(input, message){
  const sms = document.getElementById("sms");

  sms.innerText = message;
}

// function checkSucces(input){
//   return true;
// }


function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// const message = `<h1>FAIL</h1>`

// sms.innerHTML = message;