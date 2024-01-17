// START - WELCOME TYPE
let showHideDiv = function(){
  $("div.welcome-text").show();

  setTimeout(function(){
    $("div.welcome-text").hide();
  }, 3000);
};
let updateText = function(){
  let welcomeDiv = $("div.welcome-text");
  let welcomeContext = "welcome to our site";
  let type = "";
  let letter = 0;
  setInterval(function(){
    if(letter < welcomeContext.length){
      type = type + welcomeContext[letter];
      letter++;
      welcomeDiv.text(type);
    }else{
      clearInterval();
    }
  },100);

};
$(document).ready(function(){
  showHideDiv();
  updateText();
});
// END - WELCOME TYPE

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

