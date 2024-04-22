let number = document.getElementById("number");
let counuter = 0;
setInterval(() => {
    if(counuter == 75){
        clearInterval();
    }else{
        counuter += 1;
        number.innerHTML = counuter + "%";
    }
    
}, 25);
