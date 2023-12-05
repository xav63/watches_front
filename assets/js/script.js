const toggler = document.querySelector(".hamburger")
const navLinksContainer =document.querySelector(".navlinks-container");

const toggleNav = () => {
    toggler.classList.toggle("open")

    const ariaToggle = toggler.getAttribute("aria-expanded") === "true" ? "false" : "true" ;

    toggler.setAttribute("aria-expanded", ariaToggle)

    navLinksContainer.classList.toggle("open")
}

toggler.addEventListener("click", toggleNav)

// ResizeObserver permet de gérer en js la transition en responsive. Cela évite une saccade en cas de resize à la main qui sera présente en css 
new ResizeObserver(entries => {
    if(entries[0].contentRect.width <=900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)

// horloge numérique
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    +h + ":" + m;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
   
  startTime();