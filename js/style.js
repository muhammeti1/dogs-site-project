// navbar js code
window.addEventListener("DOMContentLoaded", event => {
let navbarMobile=function(){
    const nCollapsible=document.body.querySelector("#mainNavbar");
    if(!nCollapsible){
        return;
    }
    if(window.scrollY === 0){
        nCollapsible.classList.remove("navbar-mobile");
    }else{
        nCollapsible.classList.add("navbar-mobile");
    }
};
navbarMobile();
document.addEventListener("scroll",navbarMobile);
const myNavbar=document.body.querySelector("#mainNavbar");
if(myNavbar){
   new bootstrap.ScrollSpy(document.body,{
    target:"#mainNavbar",
    offset: 74,
   });
}
});
let BtnCanvas  = document.querySelectorAll(".btn-close-canvas");
for(let i = 0; i< BtnCanvas.length; i++){
    BtnCanvas[i].addEventListener("click", function(){
        document.querySelector("[data-bs-dismiss='offcanvas']").click();
    });
}
// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("navbar nav-item a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top    = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id     = sec.getAttribute("id");
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("navbar nav-item a[href*=" + id + "]").classList.add("active");
            });
            sec.classList.add("show-animate");
        }
        else{
            sec.classList.remove("show-animate");
        }
    });
}





