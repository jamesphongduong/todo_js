//declarations
let ul = document.getElementById("list"),
    removeAll = document.getElementById("remove"),
    add = document.getElementById("add"),
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
        li = document.createElement("li"),
        textNode = document.createTextNode(element + " "),
        removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.innerHTML = "DONE!";
        removeButton.setAttribute("onclick", "removeMe(this);");
        li.appendChild(textNode);
        li.appendChild(removeButton);
        ul.appendChild(li);
    });
};
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
    list.push(inputText);
    localStorage.setItem("list-item", JSON.stringify(list));
}

//remove one list item function
function removeMe(item) {
    if (confirm("This will remove the task")) {
    } else {
        return false;
    }
    //local storage delete item (delete )
    let parent = item.parentNode;
    parent.id = "trash";
    let array = ul.childNodes;
    for (i = 0; i < array.length; i ++) {
        if (array[i].id === "trash") {
            let index = i;
            list.splice(index,1);
            localStorage.setItem("list-item", JSON.stringify(list));
        }
    }
    //delete item
    parent.parentNode.removeChild(parent);


}
//remove all function
removeAll.onclick = () => {
    if (confirm("Are you sure? This will remove all tasks!")) {
    } else {
        return false;
    }
    ul.innerHTML = "";
    localStorage.removeItem("list-item");
}


