var count = 0;

var noMessage = "Hey I think you misclicked haha!";
document.getElementById("no").addEventListener("click", function() {
    if (count == 0) {
        document.getElementById("message").textContent = noMessage;
        count++;
        noMessage = "Bae stop playin...";
    }
    else if (count == 1) {
        document.getElementById("message").textContent = noMessage;
        count++;
        noMessage = "Ok seriously stop...";
    }
    else if (count == 2) {
        document.getElementById("message").textContent = noMessage;
        count++;
        noMessage = "Why do you hate me?";
    }
    else if (count == 3) {
        document.getElementById("message").textContent = noMessage;
        count++;
        noMessage = "I will jump off a building";
    }
    else if (count == 4) {
        document.getElementById("message").textContent = noMessage;
        count++;
        noMessage = "PLEASE PLEASE PLEASE ILL DO ANYTHING PLEASE";
    }
    else if (count == 5) {
        document.getElementById("message").textContent = noMessage;
        count++;
    }
    else if (count == 6) {
        document.getElementById("message").textContent = "Yk what only one option since you wanna be fresh";
        document.getElementById("no").remove();
        
    }

  
});
document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").textContent = "YAYYY! I LOVE YOU!";
    document.getElementById("yes").remove();
    if(count != 6) {
        document.getElementById("no").remove();
    }
    document.getElementById("yesMessage").style.display = "flex";



    
    
  
});
