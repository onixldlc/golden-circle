class alertHandler{
    constructor(alertID){
        this.alert = $(`${alertID}`)
        this.title = $(`${alertID} h1`)
        this.descr = $(`${alertID} p`)
        this.colors = ["red", "grey", "green"]
        this.showing = false
    }
    show(){
        this.alert
            .removeClass("alert-box-pos-hidden")
            .addClass("alert-box-pos-show")
    }
    hide(){

        this.alert
            .removeClass("alert-box-pos-show")
            .addClass("alert-box-pos-hidden")
    }
    changeTitle(title){
        this.title.text(title)
    }
    changeDescr(descr){
        this.descr.text(descr)
    }

    toast(title, descr, mode, delay=5000){
        if(!this.showing){
            this.showing = true
            this.changeTitle(title)
            this.changeDescr(descr)
            this.changeBorder(mode)
            this.show()
            setTimeout(()=>{
                this.hide()
                this.showing = false
        }, delay)
        }
    }
    
    
    
    
    changeBorder(mode){
        this.colors.forEach((value)=>{
            this.alert[0].classList.replace(`${value}-alert-border`, `${this.colors[mode+1]}-alert-border`);
        });
    }
}


window.alertHandles = new alertHandler("#custom-alert-asd552")
window.popupHandler = 0
$("#registButton").on("click", async()=>{
    let popupData = 0
    for(let handles of window.customHandles){
        checks = await handles.callback(handles.el)
        if(popupData==0){
            popupData = checks
        }
    }
    if(popupData.msg != "success"){
        window.alertHandles.toast(popupData.el.id, popupData.msg, -1)
    }else if(popupData.msg == "notify"){
        window.alertHandles.toast(popupData.el.id, popupData.msg, 0)
    }else{
        window.alertHandles.toast("Success", "registration success", 1)
    }
})
