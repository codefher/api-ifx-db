const { Router } = require('express')
const router = Router()
const { main_func, promiseSqrt } = require('../controllers/consulta.controller')

router.post('/', (req, res) => {
  const { dataSql } = req.body

  var p = dataSql.map(function (sql) {
    return main_func(sql)
  })

  Promise.all(p).then(function (results) {
    let arrayResponse = []
    results.forEach(function (obj) {
      // console.log(obj)
      arrayResponse.push(obj)
    })
    return res.json(arrayResponse)
  })

  // promiseSqrt('4')
  //   .then(result => {
  //     console.log('result: ' + result)
  //     return res.json(result)
  //   })
  //   .catch(err => {})
})

module.exports = router
