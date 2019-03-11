var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p1Score=0;
var P2Score=0;
var TotalScore = Number(numInput.value);
var p= document.querySelector("p");
var totalDispllay = document.querySelector("p span");
playingto =0;


p1Button.addEventListener("click",function()
{   if(p1Score<TotalScore)
    {
        p1Score++;
        document.getElementById("firstPlayerH1").innerHTML=p1Score;
    }
    else
    {
        alert("Game Over  !");
    }
   

   
});
p2Button.addEventListener("click",function()
{   if(P2Score<TotalScore)
    {
        P2Score++;
        document.getElementById("secondPlayerH1").innerHTML=P2Score;    
    }
    else
    {
        alert("Game Over !");
    }
    
});
resetButton.addEventListener("click",function()
{   
    p1Score=0;
    P2Score=0;
    document.getElementById("firstPlayerH1").innerHTML=p1Score;
    document.getElementById("secondPlayerH1").innerHTML=P2Score; 
      

});

numInput.addEventListener("change",function()
{
   totalDispllay.innerHTML= numInput.value;
   TotalScore=Number(numInput.value);
});