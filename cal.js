const display = document.querySelector("#displayscreen");
const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "C")
        {
            display.innerText = "";
        }
        else if(item.id == "bkspace")
        {
            let string = display.innerText.toString();
        display.innerText = string.substr(0 , string.length - 1);
         }
        else if(display.innerText != "" && item.id == "equal")
        {
            display.innerText = eval(display.innerText);
        }
        else if(display.innerText == "" && item.id == "equal")
        {
            display.innerText = "";
        }
        else
        {
            display.innerText += item.id;
        }
    };
    
});
display.innerText = "";