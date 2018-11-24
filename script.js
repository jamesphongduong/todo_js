// declarations
let add = document.getElementById("add");
let container = document.getElementById("container");
let container1 = document.getElementById("container1");
let input = document.querySelector("input"); 

//functions
//make new list item
function li() {
    let li = document.createElement("LI");
    li.innerHTML = input.value;
    let dButton = document.createElement("button");
    let cButton = document.createElement("button");
    container.appendChild(li);
    li.appendChild(dButton);
    li.appendChild(cButton);
        dButton.addEventListener("click", () => {
            li.parentNode.removeChild(li);
        });
        cButton.addEventListener("click", () => {
            container1.appendChild(li)
        });
}

add.addEventListener("click", () => {
        try {
            if (input.value === "") throw "invalid input";
                li();
        }
        catch(error) {
            prompt(error);
        }
});

//function to create li
