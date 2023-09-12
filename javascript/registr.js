let form = getElement("form")
let input = getElements("input")
let name_text = getElement (".name_text")
let lastname_text = getElement(".lastname_text")
let email_text = getElement(".email_text")
let password_text = getElement(".password_text")
let btn = document.querySelector(".next button")

let handleNextBtn = () =>{
    let token__array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "c", "v", "b", "n", "m"]
    let h1 = document.querySelector("h1")
    function handleRenderToken(token__array){
        let string = ""
        if(token__array?.length){
            for(let i = 0; i<50; i++){
                string += token__array[parseInt(Math.random() * token__array.length)]
            }
        }
        return string
    }
    let token = handleRenderToken(token__array)
    if(token){
        h1.textContent = "tekshirilmoqda ..."
        setTimeout(() => {
            window.location.replace("order/index.html")
        },300)
    }
}
let handleChange = (event) =>{
    let rejex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 

    switch(event.target.id){
        case "name":{
            if(event.target.value.length){
                if(event.target.value.length >= 3){
                    name_text.textContent = "tugri"
                    name_text.classList.add("err")
                    event.target.classList.add("err_input")
                   
                    
                    if(event.target.getAttribute("class").includes("err_input") || name_text.getAttribute("class").includes("err")){
                        name_text.classList.remove("err")
                        event.target.classList.remove("err_input")
                }
            }else{
                
                name_text.textContent = "menmcha xato"
                name_text.classList.add("err")
                event.target.classList.add("err_input")
              
               
            }
        }else{
           
            //    name_text.textContent.remove("err")
            //    event.target.classList.remove("err_input")
            //    event.target.classList.remove("true_input")
            //    name_text.textContent = "Name"

        }
    }break;
    case "lastname":{
        if(event.target.value.endsWith("va") ||  event.target.value.endsWith("ov")||  event.target.value.endsWith("ev")){
            lastname_text.textContent = ("tugri")
            lastname_text.classList.add("true")

            if(event.target.getAttribute("class").includes("err_input") ||  lastname_text.getAttribute("class").includes("err")){
                lastname_text.classList.remove("err")
                event.target.classList.remove("err_input")
            }

        }else{
            lastname_text.textContent = "iltmos kirit"
            lastname_text.classList.add("err")
            event.target.classList.add("err_input")
        }
    }break;
    case "email" :{
        if(rejex.test(event.target.value)){
            email_text.textContent = "email"
            if(event.target.getAttribute("class").includes("err_input") ||  email_text.getAttribute("class").includes("err")){
                email_text.classList.remove("err")
                event.target.classList.remove("err_input")
            }
        }else{
            email_text.textContent = "email majburiy"
            email_text.classList.add("err")
            event.target.classList.add("err_input")
        }
       }break;
       case "password" :{
        if(event.target.value.length >8 && event.target.value.length < 15){
            password_text.textContent = "number"
            if(event.target.getAttribute("class").includes("err_input")||  numb_text.getAttribute
            ("class").includes("err")){
                password_text.classList.remove("err")
                event.target.classList.remove("err_input")
                btn.addEventListener("click", handleNextBtn)
            }
        }else{
            password_text.textContent = "tugri yozing"
            password_text.classList.add("err")
            event.target.classList.add("err_input")
        }
        }break;
    
    }
    }
    
    input.forEach(item => {
        item.addEventListener("keyup", handleChange)
        item.addEventListener("blur", handleChange)
    });
    
    
    window.addEventListener("load", () =>{
        "use strict"
        const form  = document.querySelector("form")
        let contacts = window.localStorage.getItem("contacts")? window.localStorage.getItem("contacts") : []
        const handleSub = (event) =>{
            event.preventDefault()
            if(contacts.length){
    
            }else{
                
            }
        }
        form.addEventListener("submit", handleSub)
    })