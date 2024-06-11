//event listener
document.getElementById("btn").addEventListener("click", calculate)
function calculate() {
 
  let pph = +document.getElementById("pph").value;
  let hpw = +document.getElementById("hpw").value;
  let hw = +document.getElementById("hw").value;

  
  let result = hpw * pph * (52 - hw - 9);

  document.getElementById("yi").innerHTML = result.toFixed(2);
}


document.getElementById("btn").addEventListener("click", tax)
function tax() {

 
  let pph = +document.getElementById("pph").value;
  let hpw = +document.getElementById("hpw").value;
  let hw = +document.getElementById("hw").value;

  let taxes = hpw * pph * (52 - hw) / 15


  document.getElementById("tx").innerHTML = taxes.toFixed(2)

}

//button

//event listener
document.getElementById("btn2").addEventListener("click", formula)
function formula() {

  document.getElementById("form").innerHTML = "Yearly salary = average hours per week × hourly rate × (52 weeks - weeks of vacation - weeks of holidays)"
}

//money after button click 
document.getElementById("btn").addEventListener("click", check);
function check() {
  
}

//reset button
document.getElementById("btn3").addEventListener("click", reset)
function reset() {

  //inputs reset
  pph.value = " "
  hpw.value = " "
  hw.value = " "

  // results reset
  yi.innerHTML = "-----"
  tx.innerHTML = "-----"

  //reset formula 
  form.innerHTML = " "

}
