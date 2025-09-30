function openSignUp(){
    var changePassword = document.querySelector(".sign-up-pop-up")
    changePassword.style.visibility = 'visible';

    var changeFrame = document.querySelector(".sign-up-pop-up-frame")
    changeFrame.style.top = '150px';

    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'hidden';

    var changeLogFrame = document.querySelector(".log-in-pop-up-frame")
    changeLogFrame.style.top = '0px';
}

function closeSignUp(){
    var changePassword = document.querySelector(".sign-up-pop-up")
    changePassword.style.visibility = 'hidden';

    var changeFrame = document.querySelector(".sign-up-pop-up-frame")
    changeFrame.style.top = '0px';
}

function closeSignUpOpenLogIn(){
    var changePassword = document.querySelector(".sign-up-pop-up")
    changePassword.style.visibility = 'hidden';

    var changeFrame = document.querySelector(".sign-up-pop-up-frame")
    changeFrame.style.top = '0px';

    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'visible';

    var changeLogFrame = document.querySelector(".log-in-pop-up-frame")
    changeLogFrame.style.top = '300px';
}
