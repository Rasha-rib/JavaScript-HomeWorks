// START - WELCOME TEXT PART
let showHideDiv = function(){
    let welcomeDiv = $("div.welcome-text");
    welcomeDiv.show();
    setTimeout(function(){
        welcomeDiv.hide();
    },4000);
};
let updateText = function(){
    new TypeIt("#text", { 
        lifeLike: false, 
        speed: 20,
        startDelay : 1000,
    })
        .type("hi ", {delay: 100})
        .type("welcome ", {delay: 100})
        .type("to ", {delay: 100})
        .type("our", {delay: 100})
        .type(" site!", {delay: 100})
        .move(-6, {delay:100})
        .delete(3)
        .type("my", {delay:200})
        .move(6)
        .go();    
};
$(document).ready(function(){
    showHideDiv();
    updateText();
});
// END - WELCOME TEXT PART


// START - PROGRESSBAR AND NAVBAR
let updateProgressBar = function () {
    let progressBar = document.getElementsByClassName("progressbar")[0];
    let scrollableHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPosition = window.scrollY;
    let progressRatio = (scrollPosition / scrollableHeight) * 100;
  
    progressBar.style.width = `${progressRatio}%`;
  };
  
  let lastPosition = window.scrollY;
  
  let updateNavBar = function () {
    let location = window.scrollY - lastPosition;
    lastPosition = window.scrollY;
  
    if (location > 0) {
      document.getElementsByClassName("navbar-container")[0].style.top = "-105px";
    } else {
      document.getElementsByClassName("navbar-container")[0].style.top = "5px";
    }
  };
  
  let updateNavBarColor = function () {
    let progressBar = $("div.progressbar");
    let randomColor = function () {
    let randomColor = Math.floor(Math.random() * 256);
      progressBar.css("background-color",`rgb(${randomColor},${randomColor},${randomColor})`);
      progressBar.css("box-shadow",`0px 0px 15px 4px rgb(${randomColor},${randomColor},${randomColor})`);
    };
    setInterval(randomColor, 500);
  };
  window.addEventListener("scroll", function(){
    updateProgressBar();
    updateNavBar();
  });
  updateNavBarColor();
  // END - PROGRESSBAR AND NAVBAR

//   START - LEFT SIDENAV
var leftSideNavHandler = $("img#leftSideNavHandler");
var leftSideNav = $("div.sidenav-left-container");
leftSideNavHandler.click(function(){
    let leftProperty = leftSideNav.css("left");
    if(leftProperty == "0px"){
        leftSideNav.css("left","-240px")
    }else{
        leftSideNav.css("left","0px")
    }
});
let rotationAngle = 0;
let spinIcon = function(){
    rotationAngle += 10;
    leftSideNavHandler.css("transform",`rotate(${rotationAngle}deg)`);

    setTimeout(spinIcon,100);
};
spinIcon();


$("input.datepicker").pDatepicker();
//   END - LEFT SIDENAV

  