export default {
    notEmpty:notEmpty,
    advanceCheckInput:advanceCheckInput
}

/**
 * 
 * @param {HTMLInputElement} el 
 * @returns {boolean}
 */
function notEmpty(el){
    if(isText(el) && el.value){
        return true;
    }
    if(isCheckbox(el) && el.checked){
        return true;
    }
    return false;
}

function isText(el){
    if(["password", "text"].includes(el.type)){
        return true;
    }else{
        return false;
    }
}
function isCheckbox(el){
    if(el.type == "checkbox"){
        return true
    }else{
        return false;
    }
}

/**
 * 
 * @param {HTMLInputElement} el 
 * @returns {string}
 */
async function advanceCheckInput(el){
    let rulesList = Object.keys(rules)
    let msg = "success"


    if(!rules.default.check(el)){
        msg = rules.default.msg
    }
    else if(rulesList.includes(el.id) && !rules[el.id].check(el)){
        msg = rules[el.id].msg
    }
    console.log(rules.default.msg, msg, rules.default.check(el), rulesList.includes(el.id) && !rules[el.id].check(el));

    if(msg != "success"){
        if(isText(el)){
            console.log(msg);
            changeBorder(el, "red");
        }else{
            changeColor(el, "red");
        }
        window.alertHandles.toast(el.id, msg, -1)
    }else{
        if(isText(el)){
            changeBorder(el, "green");
        }else{
            changeColor(el, "black");
        }
    }
    return {msg:msg, el:el}
}


function changeBorder(el, color){
    let colorList = ["red", "green", "grey"];
    colorList.forEach((value)=>{
        el.classList.replace(`border-${value}`, `border-${color}`);
    });
}

function changeColor(el, color){
    let element = el.nextElementSibling
    let colorList = ["red", "black"];
    colorList.forEach((value)=>{
        element.classList.replace(`text-${value}`, `text-${color}`);
    });
}


























let rules = {
    Username:{
        msg:"input can only be alphanumerical [A-z,0-9]",
        check:(el)=>{
            var allowed = true
            "/\,.<>~!@#$%^&*()_{}[] ".split("").forEach((value)=>{
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
        msg:"input can only be numerical [0-9]",
        check:(el)=>{
            var allowed = true
            el.value.split("").forEach((value)=>{
                if(!"+1234567890".includes(value)){
                    allowed = false
                }
            })
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
        msg:"you need to agree with our terms and condition",
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
            console.log("testing: ",el.value, allowed);
            return allowed;
        }
    }
}