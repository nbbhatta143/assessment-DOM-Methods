//recreating Dom tree using javascript

//adding a remove button
let button = document.createElement("button");
button.id = "remove";
button.append("Remove");
let bodyElement = document.querySelector("body");
bodyElement.append(button);

//adding main in the body
let main = document.createElement("main");
bodyElement.append(main);
let mainElement = document.querySelector("main");

let imgElement = document.createElement("img");
imgElement.className = "image";
imgElement.src =
  "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/things-to-do-in-pokhara-yoga-1581671697-735X412.jpg";
mainElement.append(imgElement);

//adding a href
let aElement = document.createElement("a");
aElement.className = "link";
aElement.href = "https://en.wikipedia.org/wiki/Pokhara";
aElement.target = "_blank";
aElement.append("Click here to view Pokhara");
mainElement.append(aElement);

//adding event listener for the remove button
let buttonRemove = document.querySelector("#remove");

buttonRemove.addEventListener("click", function () {
  main.remove();
});

//adding text input and a button
let textInput = document.createElement("input");
textInput.id = "userInput";
textInput.placeholder = "Element id/class to remove";
bodyElement.append(textInput);

//button
let eventButton = document.createElement("button");
eventButton.id = "userButton";
eventButton.append("Select");
bodyElement.append(eventButton);

//user actions
let selectButton = document.querySelector("#userButton");
let input = document.querySelector("#userInput");
let result = "";
selectButton.addEventListener("click", function () {
  result = document.querySelector(input.value);
  if (result === "") {
    alert("your element input field is empty!");
  }
  console.log(result);
  result.remove();
});

//add button and input field to add element
let inputForAdd = document.createElement("input");
inputForAdd.id = "addInput";
inputForAdd.placeholder = "Add Elements to your page!";
bodyElement.append(inputForAdd);

let addButton = document.createElement("button");
addButton.id = "addButton";
addButton.append("Add Button");
bodyElement.append(addButton);

//click event for add button
let buttonAdd = document.querySelector("#addButton");
let userInputForAdd = document.querySelector("#addInput");

buttonAdd.addEventListener("click", function () {
  let userValue = document.createElement("div");
  userValue.append(userInputForAdd.value);
  bodyElement.append(userValue);
  userInputForAdd.value = "";
});
