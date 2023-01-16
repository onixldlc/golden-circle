export let rules = {
    Username:{
        msg:"input can only be alphanumerikal",
        check:(el)=>{
            var allowed = true
            "/\,.<>~!@#$%^&*()_{}[]".split("").forEach((value)=>{
                if(el.value.includes(value)){
                    allowed = false
                }
            })
            console.log(allowed)
            return allowed
        }
    },
    Email:{
        msg:"invalid email format, (currently we only accept gmail account)",
        check:(el)=>{
            var allowed = true
            if(!el.value.includes("@gmail.com")){
                allowed = false
            }
            if(!el.value.includes())
            return allowed
        }
    },
    Phone:{
        msg:"input can only be numerical",
        check:(el)=>{
            var allowed = true
            el.value.split("").forEach((value)=>{
                console.log(value, !"+1234567890".includes(value))
                if(!"+1234567890".includes(value)){
                    allowed = false
                }
            })
            console.log("testing: ",el.value, allowed);
            return allowed
        }
    },
    Password:{
        msg:"password length need to be in the range of 8 or 16",
        check:(el)=>{
            var allowed = true
            if(el.value.length < 8 || el.value.length > 16){
                allowed = false
            }
            return allowed
        }
    },
    Confirm_Password:{
        msg:"wrong password",
        check:(el)=>{
            var allowed = true
            if(el.parentElement.previousElementSibling.children[0].value != el.value){
                allowed = false
            }
            return allowed
        }
    },
    agreement:{
        msg:"you need to agree with our license and agreement",
        check:(el)=>{
            var allowed = true
            if(!el.checked){
                allowed = false
            }
            return allowed
        }
    },
    default:{
        msg:"input can't be empty",
        check:(el)=>{
            var allowed = true
            if(el.value == ""){
                allowed = false
            }
            return allowed;
        }
    }
}