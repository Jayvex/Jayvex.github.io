const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/paper-plane.jpg") {
        myImage.setAttribute("src","images/风景.jpg")
    } else {
        myImage.setAttribute("src","images/paper-plane.jpg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("请输入你的名字。");
    localStorage.setItem("name",myName);
    if (!myName) {
        setUserName();
    } else {
        myHeading.textContent = `你好，${myName}`;
    }
    myHeading.textContent = `你好，${myName}`;
    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `你好，${storedName}`;
    }
};

myButton.onclick = function () {
    setUserName();
};