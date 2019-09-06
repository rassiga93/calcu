console.log('app cargado')

window.onload = function() {
  console.log('se cargo la pagina')

  let firsvalue
  let selectedOperator
  let secondValue

  const display = document.getElementById("display")
	const btnOne = document.getElementById("btoOne")
	const btnTwo = document.getElementById("btoTwo")
	const btnThree = document.getElementById("btoThr")
	const btnFour = document.getElementById("btoFou")
	const btnFive = document.getElementById("btoFiv")
	const btnSix = document.getElementById("btoSix")
	const btnSeven = document.getElementById("btoSev")
	const btnEight = document.getElementById("btoEig")
	const btnNine = document.getElementById("btoNin")
	const btnZero = document.getElementById("btoZer")
  const btnDiv = document.getElementById("btnDiv")
	const btnMule = document.getElementById("btnMul")
	const btnSub = document.getElementById("btnSub")


  const numberOnClick = function(event) {
    display.innerText += event.target.textContent
  }

  btnOne.onclick = numberOnClick
  btnTwo.onclick = numberOnClick
  btnThr.onclick = numberOnClick
  btnFou.onclick = numberOnClick
  btnFiv.onclick = numberOnClick
  btnSix.onclick = numberOnClick
  btnSev.onclick = numberOnClick
  btnEig.onclick = numberOnClick
  btnNin.onclick = numberOnClick
  btnZer.onclick = numberOnClick


  btnC.onclick = function() {
    display.innerText = ""
  }

const operatorFuction = fuction(event){
  firstValue = parseFloat(display.innerText)
  display.innerText =""
  selectedOperator = event.target.textContent
  console.log("firsvalue", firsvalue)
  console.log ("selectedOperator", selectedOperator)

  }

  btnSum.onclick = operatorFunction
	btnDiv.onclick = operatorFunction
	btnMul.onclick = operatorFunction
	btnSub.onclick = operatorFunction

btnEqu.onclick = function(event){
  secondValue= parseFloat(event.target.textContent)
  let result
  switch (selectedOperator) {
    case '+':
      result = firsvalue + secondValue
      break;

    case'-':
      result = firsvalue - secondValue
      break;

    case '/':
      result = firsvalue / secondValue
    break;

    case '*':
      result = firsvalue * secondValue
    break;
    default:
      }
      display.innerText = result
}
}
