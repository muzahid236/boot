let name = document.querySelector('#name');
let password = document.querySelector('#password');
let form = document.querySelector('#form');
let errorElement = document.querySelector('#error');
let cnpasscode = document.querySelector('#cn-password');

form.addEventListener("submit",(e) =>{
    let messeges =[];
 if(name.value === ""){
  messeges.push("name is required!!");
 }
else if(password.value === ""){
    messeges.push("Password is required!!");
   }
  
else if(password.value ==='password'){
    messeges.push("Password can't be password")
}

else if(password.value .length <6){
    messeges.push("password must be longer than 6 character")
}

else if(password.value .length >= 14){
    messeges.push("password must be less than 14 character")
}
else if(cnpasscode.value === ""){
    messeges.push("Confirm password required")
}
else if(password.value !== cnpasscode.value){
    messeges.push("confirm password doesn't match !! please match confirm password")
}

    if(messeges.length>0){
        e.preventDefault();
        errorElement.innerText = messeges.join(' + ')
    
    }
});