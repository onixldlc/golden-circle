export default {
    notEmpty:notEmpty
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
    if(el.type == "text"){
        return true;
    }else{
        return false;
    }
}
function isCheckbox(el){
    if(el.type == "text"){
        return true
    }else{
        return false;
    }
}