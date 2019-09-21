const express = require('express') //importar el framework express y lo guardamos en la variable express // forma de improtar, entre parentesis lo que quremos importar
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.get('/getresult/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)
  const firsValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  switch (req.params.selectedOperator) {
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

  res.send({result})

app.listen(3000,() => {
  console.log('Servidor corriendo bien')
}) //le agregamos una sguda funcion al lsite, que si el baend se levanta bien permite ejecutar una funcion que muestra un sonsole log que diga ser corriendo
