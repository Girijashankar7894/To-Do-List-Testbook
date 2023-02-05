const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const database = document.querySelector("#database");


var del;
// display data function
const displayData = () => {
    database.innerHTML = null;
    data.map(el => {
        let dataList = document.createElement("div");
        dataList.classList = "data-list";

        let username = document.createElement("p");
        username.innerText = el.name;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "DELETE";
        deleteBtn.classList = "btn del-btn";
        
        

        dataList.append(username, deleteBtn);
        database.append(dataList);

        del = document.querySelectorAll(".del-btn");
    });
}

// add data
var data = [];
addBtn.addEventListener("click", () => {
    // database.innerHTML = null;

    // store value in an object
    let obj = {
        name: inputBox.value
    };

    // store object in an array
    data.push(obj);
    
    // display data
    displayData();
    inputBox.value = "";

    deleteData();
});


// delete data
const deleteData = () => {
    if(del !== undefined){
        for(let i = 0; i < del.length; i++) {
            del[i].addEventListener("click", () => {
                data.splice(i, 1);
                displayData();
                deleteData();
            });
        }
    }
};