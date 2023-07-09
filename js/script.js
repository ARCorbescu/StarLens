const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(74, 108, 247, .2)"
        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
const mood = document.getElementById("change-mood");
const root = document.getElementById("root")
mood.addEventListener("click", function (){
   if ( root.classList.contains("dark")){
       root.classList.remove("dark")
   } else {
       root.classList.add("dark")
   }
})

function redirectToPage(page) {
    switch (page) {
      case 'page1':
        window.location.href = "https://example.com/page1";
        break;
      case 'page2':
        window.location.href = "https://example.com/page2";
        break;
      case 'page3':
        window.location.href = "https://example.com/page3";
        break;
      default:
        // Handle default case or error
        break;
    }
  }
  