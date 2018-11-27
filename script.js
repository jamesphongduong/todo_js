// var script = document.createElement('script');

// script.src = "sweetalert2.all.min.js";

// document.getElementsByTagName('head')[0].appendChild(script); 

// swal("test");

// const sweetAlert2 = require("sweetAlert2");

// swal("test");

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
        textNode = document.createTextNode("• " + element + " "),
        removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.innerHTML = "DONE!";
        removeButton.setAttribute("onclick", "removeMe(this);");
        li.appendChild(textNode);
        li.appendChild(removeButton);
        ul.appendChild(li);
    });
};
//add list item function
    add.onclick = () => {
        let inputText = document.getElementById("text").value;
        if (inputText === "") {
            alert("Invalid input. Please try again.")
            return false;
        } 
        addLi(ul,inputText);
        document.getElementById("text").value = "";
    };

function addLi(targetUl,inputText) {
        let li = document.createElement("li"),
        textNode = document.createTextNode("• " + inputText + " "),
        removeButton = document.createElement("button");
    
    removeButton.className = "remove";
    removeButton.innerHTML = "DONE!";
    removeButton.setAttribute("onclick", "removeMe(this);");
    li.appendChild(textNode);
    li.appendChild(removeButton);
    
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
    let parent = item.parentNode;
    //  parent.id = "trash";
    let array = Array.from(ul.childNodes);
    let index = array.indexOf(parent);
    list.splice(index,1);
    localStorage.setItem("list-item", JSON.stringify(list));
    // for (i = 0; i < array.length; i ++) {
    //     if (array[i].id === "trash") {
    //         let index = i;
    //         list.splice(index,1);
    //         localStorage.setItem("list-item", JSON.stringify(list));
    //     }
    // }
    //delete actual item
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
