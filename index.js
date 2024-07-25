
// 1. form submit (add evenlistner)
const form = document.querySelector(`#form`);

// 2. check if form input are empty or vaild email.  (DOM select all different input)
// 3. display error message if 2. is true.  (remove class on error icon and error messages)
const fname = document.querySelector(`#fname`);
const lname = document.querySelector(`#lname`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);

form.addEventListener(`submit`,checkInput);



function checkInput(e){

    e.preventDefault();

    // check fname input value
    if (fname.value.trim() === ""){
        fname.nextElementSibling.classList.remove(`off`);
        fname.nextElementSibling.nextElementSibling.classList.remove(`off`);
        
        // console.log(fname.nextElementSibling);
        // console.log(fname.nextElementSibling.nextElementSibling)
    }else if(fname.value.trim()!== ""){
        fname.nextElementSibling.classList.add(`off`);
        fname.nextElementSibling.nextElementSibling.classList.add(`off`);   
        console.log(fname.value);
    }

    // check lname input value
    if (lname.value.trim() === ""){
        lname.nextElementSibling.classList.remove(`off`);
        lname.nextElementSibling.nextElementSibling.classList.remove(`off`);
    }else if (lname.value.trim() !== ""){
        lname.nextElementSibling.classList.add(`off`);
        lname.nextElementSibling.nextElementSibling.classList.add(`off`);
        console.log(lname.value);
    }
    // check password input value
    if(password.value.trim() === ""){
        password.nextElementSibling.classList.remove(`off`);
        password.nextElementSibling.nextElementSibling.classList.remove(`off`);
    }else if (password.value.trim() !== ""){
        password.nextElementSibling.classList.add(`off`);
        password.nextElementSibling.nextElementSibling.classList.add(`off`);
        console.log(password.value);
    }

    // check email input

    const submittedEmail = email.value;

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      
    if (validateEmail(submittedEmail)){
        email.nextElementSibling.classList.add(`off`)
        email.nextElementSibling.nextElementSibling.classList.add(`off`)
        // console.log(email.value)
        // console.log(email.nextElementSibling)

    }else if(validateEmail != (submittedEmail)){
        email.nextElementSibling.classList.remove(`off`)
        email.nextElementSibling.nextElementSibling.classList.remove(`off`)
    }

}



