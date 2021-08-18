const responsiveMenu = document.getElementById("responsive-menu");
const menu = document.getElementById("main-menu");
let flag = false;

const Desplegar = () => {
    
    if(flag){
        menu.style.transform= "scaleY(0)";
    }else{
        menu.style.transform= "scaleY(1)";
    }
    flag = !flag;
} 


responsiveMenu.onclick = Desplegar;