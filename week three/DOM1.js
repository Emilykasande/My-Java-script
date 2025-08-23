//An object is a collection of related data (properties) and behaviors (methods) stored together in key–value pairs.
console.log(document.title);
console.log("my file is connected")
console.log(document.body);
console.log(document.forms);
console.log(document.links);


let heading = document.getElementById("heading")
console.log(heading)
heading.textContent="WELCOME  TO MAYONDO"
heading.style.color="red"


let header=document.getElementById("first");
header.innerHTML="<h2>furniture aavailable</h2>";


//Events.
//MORE DOM METHODS
//  let subHead =document.getElementByTagName("h2")
// console.log(subHead);

// for(let i=0; i < subHead.length; i++) {
//     console.log (subHeadings[i].textContent);
// }


//  letparagraph=document.getElementsByClassName("about")
//  console.log(paragraph.length);


// let third-Title=document.querySelector(h3)
// //this works exactly like css .
// let third-Tittle=document.querySelector("#third-tittle");
// let third-Title=document.querySelector(".third-title");


let headingsArray=document.querySelectorAll("h2")
headingsArray[1].className="container"
headingsArray[1].id="subheadings"
//this captures everything.

headingsArray[1].setAttribute("class","container")
headingsArray[1].setAttribute("id","subheadings")
headingsArray[1].textContent=("This is a subheading")
headingsArray[1].style.backgroundColor= "yellow"
headingsArray[1].style.textAlign="center"


//using getElementby className to change the text content of all elements with the class "about"
// let paragraphs= document.getElementsByClassName("about");
// for (let i = 0; i < paragraphs.length; i++) {
  // paragraphs[i].textContent = " This is a paragraph with the class 'about'.";    
  // paragraphs[i].style.color = "blue";
    // paragraphs[i].style.fontSize = "20px";


// document.creadElement()