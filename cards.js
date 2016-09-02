var createCardBtn = document.getElementById("create");
//var card = document.getElementById("card");
var textCreate = document.getElementById("textCreate");
var createArea = document.getElementById("createArea");

var counter = 0;


// function getText() {
	
// }
function newCardCreate() {
	counter++;
	var cardCounter = counter;
	createCard(cardCounter);
 }

  
function createCard(input) {
	//create card div
	var cardArea = document.createElement("div");
	cardArea.id = input;
	cardArea.classList.add("card");
	document.body.appendChild(cardArea);
	//create output area for card
	var outputTextArea = document.createElement("div");
	cardArea.appendChild(outputTextArea);
	//get text output
	outputTextArea.innerHTML = '<div class="output">' + textCreate.value + '</div>';
	//create inputs for card
	var backgroundColor = document.createElement("input");
	backgroundColor.type = "color";
	cardArea.insertBefore(backgroundColor, outputTextArea);
	var fontColor = document.createElement("input");
	fontColor.type = "color";
	cardArea.insertBefore(fontColor, outputTextArea);
	// styling for card
	backgroundColor.addEventListener("input", function() {
		cardArea.style.backgroundColor = backgroundColor.value;
	});
	
	fontColor.addEventListener("input", function(){
		outputTextArea.style.color = fontColor.value;
	});
	
	var deleteCardBtn = document.createElement("button");
	//create button delete
	deleteCardBtn.innerHTML = "Delete Card";
	cardArea.appendChild(deleteCardBtn);
	deleteCardBtn.addEventListener("click", function() {
		var deleteItem = event.target.parentNode;
		console.log(deleteItem);
		if (deleteItem.parentNode) {
			deleteItem.parentNode.removeChild(deleteItem);
		}
});
}
createCardBtn.addEventListener("click", newCardCreate);



