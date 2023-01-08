
export class inputHandler{
    /**
     * Handles any check for user input
     * @param {HTMLInputElement} el - HTMLElement
     * @param {object} param2
     * @param {function(string):void} [param2.callback] - callback function that handles what to check and return boolean
     */
    constructor(el, {callback}={}){
        this.callback = callback || this.defaultCallbackBehavior;
        this.el = el;
    }

    check(){
        try{
            console.log(this.callback);
            this.callback(this.el);
        }
        catch(e){
            console.log("something went wrong !!!");
            console.error(e);
        }
    }



    defaultCallbackBehavior(el){
        let msg = "success";
        let err = false;
        
        if(el.disabled){
            msg = "nothing to check here";
        }
        
        if(el.type == "checkbox" && !el.checked){
            msg = "input need to be checked";
            changeColor(el, "red");
        }else{
            changeColor(el, "black");
        }

        if(["password", "text"].includes(el.type) && !el.value){
            msg = "input cant be empty";
            changeBorder(el, "red");
        }else{
            Array.from(Email.classList).includes()
            changeBorder(el, "green");
        }
        
        console.log(`@${el.id}: ${msg}`);
    }

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
