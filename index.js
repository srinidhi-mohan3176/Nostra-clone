
  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Auto Slide
  setInterval(() => {
    nextSlide();
  }, 4000);


  var search=document.getElementById("search")
var productcontainer=document.getElementById("productcontainer")
var productlist=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function() {

    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }
    }
    
})

var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById("menubar");
var closeNav = document.getElementById("close-nav");  // Get the close button

// Open the sidebar when menu icon is clicked
menubar.addEventListener("click", function () {
  sidenav.style.right = "0";
});

// Close the sidebar when 'X' is clicked
closeNav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
