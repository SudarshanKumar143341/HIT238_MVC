var score=document.querySelector(".score_screen").value;
document.querySelector(".score_screen").value=score;
document.querySelector(".cat1, .dog1").addEventListener("click", function(){
  score++;
//  sessionStorage.setItem("score", score;
  document.querySelector(".score_screen").value=score;
  document.body.style.background="green";
});
