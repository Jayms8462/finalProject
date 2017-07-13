document.getElementById("restSel").addEventListener("click", sohEl);
var asianEl = document.getElementById("asian");
var mexEl = document.getElementById("mexican");
var italEl = document.getElementById("italian");
asianEl.style.display = "none";
mexEl.style.display = "none";
italEl.style.display = "none";

function sohEl(){
  var restEl = document.getElementById("restaurants").value;
  var resterEl = document.getElementById("rester");
    if (restEl === '1'){
      console.log("value 1");
      resterEl.style.display = "none";
      asianEl.style.display = "block";
    } else if (restEl === '2'){
      console.log("value 2");
      resterEl.style.display = "none";
      mexEl.style.display = "block";
    } else if (restEl === '3'){
      console.log("value 3");
      resterEl.style.display = "none";
      italEl.style.display = "block";
    }
}
document.getElementById("button").addEventListener("click", testInput);

function submitFeedback() {
  var form = document.getElementById("form");
  form.style.display = 'none';
  alert("Thank you for your input, we will review the submition and post it for the restaurant");
}

function testInput() {
  var testPar = true;
  var notAcceptedInput = ['\!', '\@', '\#', '\$', '\%', '\^', '\&', '\*', '\(', '\)', '\_', '\+', '\{', '\}', '\|', '\:', '\"', '\<', '\>', '\?', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\-', '\=', '\[', '\]', '\\', '\;', '\'', '\,', '\.', '\/'];
  var name = document.getElementById("userName").value;
  for (var i = 0; i <= notAcceptedInput.length; i++){
    var word = notAcceptedInput[i];
    if (name.indexOf(word)!=-1){
      alert('Not accepted input on name, pleast try again!');
      testPar = false;
    }
  }
  if (testPar === true){
    submitFeedback();
  }
}
