let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
let t = document.getElementById("task")
let p = document.getElementById("priority")

form.addEventListener("submit", getData)

let todo_arr = [];

function getData(event) {
    event.preventDefault();
    
    let task = t.value;
    let priority = p.value;

    let obj = {
        task,
        priority
    };

    todo_arr.push(obj);
    display(todo_arr);

    // फॉर्म reset करायला
    form.reset();
}

function display(data) {
    tbody.innerHTML = ""; // जुने rows clear

    data.map(function (el, index) {
        let row = document.createElement("tr");

        let col1 = document.createElement("td");
        col1.innerText = el.task;

        let col2 = document.createElement("td");
        col2.innerText = el.priority;

        // priority नुसार रंग
        if (el.priority.toLowerCase() === "high") {
            col2.style.color = "red";
            col2.style.fontWeight = "bold";
        } else if (el.priority.toLowerCase() === "medium") {
            col2.style.color = "orange";
            col2.style.fontWeight = "bold";
        } else if (el.priority.toLowerCase() === "low") {
            col2.style.color = "green";
            col2.style.fontWeight = "bold";
        }

        let col3 = document.createElement("td");
        col3.innerText = "Delete";
        col3.style.color = "red";
        col3.style.cursor = "pointer";
        
        // Delete functionality
        col3.addEventListener("click", function () {
            todo_arr.splice(index, 1);
            display(todo_arr);
        });

        row.append(col1, col2, col3);
        tbody.append(row);
    });
}
