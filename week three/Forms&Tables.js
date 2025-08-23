const form = document.getElementById("userForm");
const tableBody = document.querySelector("#userTable tbody");

form.addEventListener("submit", submitform);

function submitform(event){
    event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;

 //create a new row
 const newRow = document.createElement("tr"); 
 newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
 //attarch to table
tableBody.appendChild(newRow);
form.reset();                      //clears the form so that it goes back to normal
}