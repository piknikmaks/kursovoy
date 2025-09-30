function closeList() {
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";

    var closeList = document.querySelector(".order-body-left-side-2-department-frame");
    closeList.style.visibility = "hidden";
    
    var closeList = document.querySelector(".order-body-left-side-2-department-frame-2");
    closeList.style.visibility = "hidden";
}

function openList() {
    var openList = document.querySelector(".order-body-left-side-2-city-frame");
    openList.style.visibility = "visible";
}

function openDepartment() {
    var inputValue = document.getElementById("locationInput").value;
    var Kiev = document.querySelector(".order-body-left-side-2-department-frame");
    var Poltava = document.querySelector(".order-body-left-side-2-department-frame-2");
    
    if (inputValue === "Полтава") {
        Poltava.style.visibility = "visible";
    } 

    else if(inputValue === "Київ"){
        Kiev.style.visibility = "visible";
    }

}

function changeKievDepartment1() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Пирогівський шлях, 135";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame");
    closeList.style.visibility = "hidden";
}

function changeKievDepartment2() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Богатирська, 11";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame");
    closeList.style.visibility = "hidden";
}

function changeKievDepartment3() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Калачівська, 13";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame");
    closeList.style.visibility = "hidden";
}

function changePoltavaDepartment1() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Ветеринарна, 22";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame-2");
    closeList.style.visibility = "hidden";
}

function changePoltavaDepartment2() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Ковпака, 26";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame-2");
    closeList.style.visibility = "hidden";
}

function changePoltavaDepartment3() {
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Лідова, 13";
    var closeList = document.querySelector(".order-body-left-side-2-department-frame-2");
    closeList.style.visibility = "hidden";
}


function changeLocation1() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Полтава";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Ветеринарна, 22";
}

function changeLocation2() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Київ";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
    var inputElement = document.getElementById("departmentInput");
    inputElement.value = "вул. Пирогівський шлях, 135";
}

function changeLocation3() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Харків";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation4() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Кременчук";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation5() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Запоріжжя";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation6() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Одеса";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation7() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Львів";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation8() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Вінниця";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}

function changeLocation9() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Миколаїв";
}

function changeLocation10() {
    var inputElement = document.getElementById("locationInput");
    inputElement.value = "Кривий Ріг";
    var closeList = document.querySelector(".order-body-left-side-2-city-frame");
    closeList.style.visibility = "hidden";
}