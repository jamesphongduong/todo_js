//declarations
let ul = document.getElementById("list"),
    removeAll = document.getElementById("remove"),
    add = document.getElementById("add"),
    input = document.getElementById("text"),
    list = JSON.parse(localStorage.getItem("list-item")) || [];

//iife to load local storage
(function load() {
    if (list.length !== 0) {
        loadStorage();
    }
}) ();

function loadStorage() {
    console.log("load");
    console.log(list);
    list.forEach(function(element) {
        let li = document.createElement("li"),
            textNode = document.createTextNode("• " + element + " "),
            removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.innerHTML = "DONE!";
        removeButton.setAttribute("onclick", "removeMe(this);");
        li.appendChild(textNode);
        li.appendChild(removeButton);
        li.className = "card";
        ul.appendChild(li);
    });
};

//add list item function
add.onclick = () => {
    let inputText = input.value;
    if (inputText === "") {
        alert("Invalid input. Please try again.")
        return false;
    } 
    addLi(ul,inputText);
    input.value = "";
};

//add list item function based off "enter stroke"
input.addEventListener("keypress", (e) => {
    let inputText = input.value,
        key = e.which || e.keyCode;
    if (key === 13 && inputText !== "") { // 13 is enter
        addLi(ul, inputText);
        input.value = "";
    } else if (key === 13 && inputText === "") {
    alert("Invalid input. Please try again.")
    return false;
    }
});

function addLi(targetUl,inputText) {
    let li = document.createElement("li"),
        textNode = document.createTextNode("• " + inputText + " "),
        removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.innerHTML = "DONE!";
    removeButton.setAttribute("onclick", "removeMe(this);");
    li.appendChild(textNode);
    li.appendChild(removeButton);
    li.className = "card";
    targetUl.appendChild(li);
    list.push(inputText);
    localStorage.setItem("list-item", JSON.stringify(list));
}

//remove item function
function removeMe(item) {
        if (confirm("This will remove the task")) {
    } else {
        return false;
    }
    //local storage delete item (delete)
    let parent = item.parentNode,
        array = Array.from(ul.childNodes),
        index = array.indexOf(parent);
    list.splice(index,1);
    localStorage.setItem("list-item", JSON.stringify(list));
    parent.parentNode.removeChild(parent);
}

//remove all items function
removeAll.onclick = () => {
    if (confirm("Are you sure? This will remove all tasks!")) {
    } else {
        return false;
    }
    ul.innerHTML = "";
    localStorage.removeItem("list-item");
}


