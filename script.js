let text1 = document.getElementById("rollanText") 
let input1 = document.getElementById("input1") 
function rollan(){ 
    if(input1.value == "da") 
        text1.innerHTML = "Ura, 10 ballov"; 
    else     
        text1.innerHTML = "Bozhe nu tipa lol" 
    counter++; 
}