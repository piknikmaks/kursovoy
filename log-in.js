function openLogIn(){
    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'visible';

    var changeFrame = document.querySelector(".log-in-pop-up-frame")
    changeFrame.style.top = '300px';
}

function closeLogIn(){
    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'hidden';

    var changeFrame = document.querySelector(".log-in-pop-up-frame")
    changeFrame.style.top = '0px';
}

function changeRemind(){
    var changeRect1 = document.querySelector(".log-in-pop-up-frame-remember-rectangle")
    changeRect1.style.zIndex = '103';

    var changeRect2 = document.querySelector(".log-in-pop-up-frame-remember-rectangle-img")
    changeRect2.style.zIndex = '104';
}

function changeRemind2(){
    var changeLogIn = document.querySelector(".log-in-pop-up-frame-remember-rectangle")
    changeLogIn.style.zIndex = '104';

    var changeLogIn = document.querySelector(".log-in-pop-up-frame-remember-rectangle-img")
    changeLogIn.style.zIndex = '103';
}

function changePassword(){
    var input = document.getElementById("logInPassword");
    var image = document.getElementById("eyeImg");

    if (input.type === "password") {
      input.type = "text";
      image.src = "img/eye-svgrepo-com 2.png";
    } else {
      input.type = "password";
      image.src = "img/eye-svgrepo-com 1.png";
    }
}

function changePassword2(){
    var input = document.getElementById("logInPassword2");
    var image = document.getElementById("eyeImg2");

    if (input.type === "password") {
      input.type = "text";
      image.src = "img/eye-svgrepo-com 2.png";
    } else {
      input.type = "password";
      image.src = "img/eye-svgrepo-com 1.png";
    }
}