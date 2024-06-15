let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", ()=> {
  alert("没事别瞎点");
});

let myImage = document.querySelector("img"); 

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/temp-image1.jpg") {
    myImage.setAttribute("src", "images/temp-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/temp-image1.jpg");
  }
};   
/*没明白，如果同一页面好几张图，怎么让每张图都可以点击切换？*/


/*以下代码不好使*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}  

if (!localStorage.getItem("name")) {
  setUserName();
} 
else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
} 

/*
myButton.onclick = function () {
  setUserName();
}；
*/