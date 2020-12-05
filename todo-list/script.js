let submit = document.getElementById("enter");
let userInput = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	userInput.value = "";

    li.addEventListener("click", function() {
        li.classList.toggle("done");
    });

	let deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    
	deleteBtn.addEventListener("click", function () {
        li.classList.add("delete");
    });
}

submit.addEventListener("click", function () {
    if (userInput.value.length > 0) {
		createListElement();
    }
    else {
        alert("Enter Item to continue");
    }
});