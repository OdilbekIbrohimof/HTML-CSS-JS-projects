let navbar = document.querySelector(".navbar");
let content = document.querySelector(".content");
let curtain = document.querySelector(".curtain");
content.style.width = "calc(100% - 300px)";
navbar.style.width = "300px";

function navbarMenu(){
    let adminText = document.querySelector(".adminsite-text");
    if(navbar.style.width === "300px"){
        navbar.style.width = "60px";
        content.style.width = "calc(100% - 60px)";
        adminText.style = "transform: translateX(-150%);";
        adminText.style = "margin-left:-158px; margin-right:15px;";
    }
    else{
        navbar.style.width = "300px";
        content.style.width = "calc(100% - 300px)";
        adminText.style = "transform: translateX(0%);";
        adminText.style = "margin-left:0px; margin-right:0px;";
    }
}

function openForm(){
    curtain.classList.add("curtain-activate")
}

function closeForm(){
    curtain.classList.remove("curtain-activate")
}