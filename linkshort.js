window.onload = function() {
  
var count= 12;
var counter=setInterval(timer, 1000);
var timerDiv = document.getElementById('timer');
var link = document.getElementById('linktimer');
  
function timer()
  
{
count=count-1;
if (count <= 0)
{
clearInterval(counter);
link.style.display = '';
timerDiv.innerHTML="";
return;
}
timerDiv.innerHTML=count + "..";
}
}