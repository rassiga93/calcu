console.log('app cargado')

window.onload = function() {
  console.log('se cargo la pagina')

  let firsvalue
  let selectedOperator
  let secondValue

  const display = document.getElementById("display")
	const btnOne = document.getElementById("btoOne")
	const btnTwo = document.getElementById("btoTwo")
	const btnThr = document.getElementById("btoThr")
	const btnFou = document.getElementById("btoFou")
	const btnFiv = document.getElementById("btoFiv")
	const btnSix = document.getElementById("btoSix")
	const btnSev = document.getElementById("btoSev")
	const btnEig = document.getElementById("btoEig")
	const btnNin = document.getElementById("btoNin")
	const btnZer = document.getElementById("btoZer")
  const btnDiv = document.getElementById("btoDiv")
  const btnSum = document.getElementById("btoSum")
	const btnMul = document.getElementById("btoMul")
	const btnSub = document.getElementById("btoSub")
  const btnC = document.getElementById("btoC")
  const btnEqu = document.getElementById("btoEqu")


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

const operatorFunction = function(event){
  firstValue = parseFloat(display.innerText)
  display.innerText =""
  selectedOperator = event.target.textContent
  console.log("firsvalue", firstValue)
  console.log ("selectedOperator", selectedOperator)

  }

  btnSum.onclick = operatorFunction
	btnDiv.onclick = operatorFunction
	btnMul.onclick = operatorFunction
	btnSub.onclick = operatorFunction

btnEqu.onclick = function(event){
  secondValue= parseFloat(display.innerText)
  let result
  switch (selectedOperator) {
    case '+':
      result = firstValue + secondValue
      break;

    case'-':
      result = firstValue - secondValue
      break;

    case '/':
      result = firstValue / secondValue
    break;

    case '*':
      result = firstValue * secondValue
    break;
    default:
      break;
      }
      display.innerText = result
}
}
