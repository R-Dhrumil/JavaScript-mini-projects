const task = document.getElementById("task");
const listtcon = document.getElementById("list")

function pr() {
    console.log("Enter key is pressed");

    if (task.value === "") {                              /*It checks the given input task feild is empty or not if empty then it shows the alert */
        alert("Enter your task")
    } else {
        const atask = task.value                          /*The atask store the input task value here it is in the form of string , atask makes easy to access input value if it is compleceted then you can use it directly */
        console.log("Task - " + atask);

        const li = document.createElement("li")           /*creat a <li> tag  */
        li.innerHTML = atask;                             /* li.innerHTML means convert the input data and  store the value of input task box in li tag */
        listtcon.appendChild(li)                          /* listtcon is a name of ul and .appendchild() means add the given object in list*/

        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    task.value = ""                                       /*it clears the input tast feild by making it empty */
    savedata()
}


listtcon.addEventListener("click", function (e) {         /* e is a default parameter is you want to do nay thing then use e.target , e.key etc know more about e by your self  */
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    savedata()
} );

task.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        pr();
    }

})


function savedata() {                                      /* Save the data on the browser set item */
    localStorage.setItem('data', listtcon.innerHTML);      /* localstorage used to save data on browser , data is the name of our data name could be any thing else setitem (data name , data wants to save) */
}
function displaydata() {                                   /* Get the data from saved placse and make it innerhtml  so that we can see it clearly */
    listtcon.innerHTML = localStorage.getItem('data')      /* This function basically get the data from browser which we already stored using local storage set item and set it to  the list which we can show easly */
}
displaydata()


