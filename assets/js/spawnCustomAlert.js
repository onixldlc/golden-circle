/**
 * 
 * @param {string} title alert title
 * @param {string} message alert message
 * @param {string} mode
 */
export function customAlert({title, message, mode}){
    let option = {
        title: title || "example",
        message: message || "test message", 
        color:pallete[mode || "-1"]
    };

    let pallete = {
        "-1":"#ff4545",
        "0":"#a2a2a2",
        "1":"#c8b237"
    };
    let alertPopup = generateAlert(option);
    document.appendChild(alertPopup);
    setTimeout(()=>{
        document.getElementById(alertPopup.id).remove();
    }, 5000);
}

/**
 * 
 * @param {object} options - json config
 * @param {string} options.title - title message
 * @param {string} options.message - alert message
 * @param {string} options.color - class theme color
 * @returns {HTMLObjectElement} returns a div of  the overlay
 */
 function generateAlert(options){
    let alertID = "custom-alert-asd552";
    let div = document.createElement("div");
    div.id = alertID;
    div.class = "w-screen h-screen pointer-events-none bg-debug-aqua ";
    
    return div;
}