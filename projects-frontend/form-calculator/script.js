

// This function create random rgb color
function colorChange() {

    // get Three Random number range form 0 - 256
    let num1 = getInt(256);
    let num2 = getInt(256);
    let num3 = getInt(256);

    // get date object of current date
    let date = new Date().toDateString()
    
    // change background color of btn using three random values
    document.getElementById("btn").style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;

    // Set alert
    window.alert(`Hi Ther Form Earth. dated :- ${date}`)
    
}

// This function create random values
function getInt(num) {
    return Math.floor(Math.random() * num )
}


// this function get total sum of two values
function totalSum() {
    // first input field value
    let num1 = document.getElementById("num1").value;
    // second input field value
    let num2 = document.getElementById("num2").value;

    // create span element
    const newSpan = document.createElement("span");
    // set id newSpan to span element
    newSpan.setAttribute("id", "newSpan")
  
    // add two values 
    let sum = Number(num1) + Number(num2);

    // add text inside span element
    newSpan.innerText = `Total :- ${ sum }`;
    
    // append child newSpan to totalSum element
    document.getElementById("totalSum").appendChild(newSpan);
    
}

// This function reset the calculator values
function reset() {
    document.getElementById("num1").value = null
    document.getElementById("num2").value = null

    // Remove span element
    document.getElementById("newSpan").remove();
}