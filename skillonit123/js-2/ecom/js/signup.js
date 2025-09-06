let form = document.querySelector("form");

form.addEventListener("submit", signup)

let signup_arr = JSON.parse(localStorage.getItem("singup_arr")) || [];

function signup(){
    event.preventDefault()

    let signup_obj = {
        name:form.name.value,
        mobile:form.mobile.value,
        username:form.username.value,
        password:form.password.value
    }


    signup_arr.push(signup_obj);

   localStorage.setItem("singup_arr", JSON.stringify(signup_arr))
   alert("User Ragistered")
    window.location.href = "../html/login.html";
}


// function removeel(){

//     signup_arr.splice(3,1)

//      localStorage.setItem("singup_arr", JSON.stringify(signup_arr));

// }


// localStorage.clear()

// console.log(window.location.href)