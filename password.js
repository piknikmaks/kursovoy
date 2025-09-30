function openPasswordLog(){
    var changePassword = document.querySelector(".password-remind-pop-up")
    changePassword.style.visibility = 'visible';

    var changeFrame = document.querySelector(".password-remind-pop-up-frame")
    changeFrame.style.top = '300px';

    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'hidden';

    var changeLogFrame = document.querySelector(".log-in-pop-up-frame")
    changeLogFrame.style.top = '0px';
}

function closePassword(){
    var changePassword = document.querySelector(".password-remind-pop-up")
    changePassword.style.visibility = 'hidden';

    var changeFrame = document.querySelector(".password-remind-pop-up-frame")
    changeFrame.style.top = '0px';
}

function closePassOpenLog(){
    var changeLogIn = document.querySelector(".log-in-pop-up")
    changeLogIn.style.visibility = 'visible';

    var changeLogFrame = document.querySelector(".log-in-pop-up-frame")
    changeLogFrame.style.top = '300px';

    var changePassword = document.querySelector(".password-remind-pop-up")
    changePassword.style.visibility = 'hidden';

    var changeFrame = document.querySelector(".password-remind-pop-up-frame")
    changeFrame.style.top = '0px';
}