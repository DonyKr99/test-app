function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";
  } else {
    navbar.style.top="0";
  }
    lastScrollTop = scrollTop;
})


  function checkForm(form)
  {
    if(form.inputName.value == "") {
      alert("Neirašėte savo vardo");
      form.inputName.focus();
      return false;
    }
    if(form.inputLastName.value == "") {
      alert("Neirašėte savo pavardės");
      form.inputLastName.focus();
      return false;
    }
    if(form.inputPhoneNumber.value == "") {
      alert("Neirašėte savo telefono numerio");
      form.inputPhoneNumber.focus();
      return false;
    }
  }

  var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.8) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


function mySetFunction() {
  document.getElementsByTagName('body')[0].style.fontFamily = "Arial";
}
function myResetFunction() {
  document.getElementsByTagName('body')[0].style.fontFamily = "Lato";
}

function myFunction() {
        var element = document.body;
        element.classList.toggle("dark");
        }
