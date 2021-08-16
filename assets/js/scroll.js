const header=document.getElementById ("main-header");
//const about document.getElementById ("about");
//const a document.getElementById ("");
//const a document.getElementById ("");

function scrollHeader(){
    if(window.scrollY > 500){
        header.classList.add("fixed-header")
    }
    else if(window.scrollY === 0){
        header.classList.remove("fixed-header")
    }
}
//function name() {}
document.addEventListener("scroll", scrollHeader);