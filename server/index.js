const express = require('express') //importar el framework express y lo guardamos en la variable express // forma de improtar, entre parentesis lo que quremos importar
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Result = require('./models')
const url = "mongodb+srv://rassiga93:420655Casa@cluster0-ed9kh.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true }, (error) => {
  if(error) {
    console.log(error);
  } else {
    console.log("Base de datos conectada");
  }
})
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.get('/suma/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  result = firstValue + secondValue
  const newResult = new Result({value: result})
  newResult.save((error, result ) => {
    if(error){
      console.log(error)
    } else {
      console.log.(result)
    }
  })

  return res.send({result})

})

app.get('/resta/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  result = firstValue - secondValue

  return res.send({result})

})

app.get('/division/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  result = firstValue / secondValue

  return res.send({result})

})

app.get('/multiplicacion/:firstValue/:secondValue/:selectedOperator', function (req, res) {
  console.log(req.params)
  const firstValue = parseFloat(req.params.firstValue)
  const secondValue = parseFloat(req.params.secondValue)

  let result
  result = firstValue * secondValue

  return res.send({result})

})

app.listen(3000,() => {
  console.log('Servidor corriendo bien')
}) //le agregamos una sguda funcion al lsite, que si el baend se levanta bien permite ejecutar una funcion que muestra un sonsole log que diga ser corriendo
