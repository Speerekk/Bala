const body = document.getElementsByTagName("body") [0] //body head are tags. 

function changeColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
     const red = Math.round(Math.random() * 255) // 
     const green = Math.round(Math.random() * 255) // 
     const blue = Math.round(Math.random() * 255) // 

     const color = `rgb(${red}, ${green}, ${blue})`//you need three color for rgb 

     body.style.backgroundColor = color;
}