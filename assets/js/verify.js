(async()=>{
    let form = document.getElementsByTagName("form")[0];
    let inputs = Array.from(form.getElementsByTagName("input"));
    let exludes = ["sendEmail", "divider"];
    let inputHandler = (await import("./inputHandler.js")).inputHandler
    let utility = (await import("./utility.js")).default
    let checkAllInput = false;
    for(let input of inputs){
        if(utility.notEmpty(input)){
            checkAllInput = true;
            break;
        }
    }
    window.customHandles = []
    inputs.map((value)=>{
        if(exludes.includes(value.id)){
            return
        }else{
            var handler = new inputHandler(value, {callback:utility.advanceCheckInput});
            if(checkAllInput){
                handler.check();
            }
            value.addEventListener("change", ()=>{
                handler.check();
            });
            window.customHandles.push(handler)
            return handler;
        }
    })
})()