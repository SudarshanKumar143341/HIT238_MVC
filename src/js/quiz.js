var score=document.querySelector(".score_screen").value;
document.querySelector(".score_screen").value=score;
document.querySelector(".cat").addEventListener("click", function(){
  score++;
  document.querySelector(".score_screen").value=score;
  document.body.style.background="green";
})
