//declarations
let ul = document.getElementById("list"),
    removeAll = document.getElementById("remove"),
    add = document.getElementById("add");

//click function
    add.onclick = () => {
        addLi(ul);
    };

//add list item function
function addLi(targetUl) {
    let inputText = document.getElementById("text").value,
        li = document.createElement("li"),
        textNode = document.createTextNode(inputText + " "),
        removeButton = document.createElement("button");
    document.getElementById("text").value = "";

    if (inputText === "") {
        alert("Invalid input. Please try again.")
        return false;
    } 
    removeButton.className = "remove";
    removeButton.innerHTML = "DONE!";
    removeButton.setAttribute("onclick", "removeMe(this);");
    li.appendChild(textNode);
    li.appendChild(removeButton);
    
    targetUl.appendChild(li);
}

//remove one list item function
function removeMe(item) {
    if (confirm("This will remove the task")) {
    } else {
        return false;
    }
    parent = item.parentNode;
    parent.parentNode.removeChild(parent);
}
//remove all function
removeAll.onclick = () => {
    if (confirm("Are you sure? This will remove all tasks!")) {
    } else {
        return false;
    }
    ul.innerHTML = "";
}


