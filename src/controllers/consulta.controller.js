var dbobj = require('ifx_db')
const { SERVER, DATABASE, HOST, SERVICE, UID, PASS } = require('../util/config')
const {
  PARAM_ESTADO_OK,
  PARAM_ESTADO_NOK,
  PARAM_MENSAJE_QUERY,
  PARAM_MENSAJE_ERROR
} = require('../util/constants')

function main_func(sql) {
  return new Promise(function (resolve, reject) {
    // var connString =
    //   'SERVER=online03;DATABASE=tbase;HOST=10.0.1.143;SERVICE=1530;UID=informix;PWD=informix1;'
    var connString = `SERVER=${SERVER};DATABASE=${DATABASE};HOST=${HOST};SERVICE=${SERVICE};UID=${UID};PWD=${PASS};`
    try {
      var conn = dbobj.openSync(connString)
      conn.query(sql, function (err, rows, moreResultSets) {
        if (err) {
          resolve({
            estado: PARAM_ESTADO_NOK,
            mensaje: PARAM_MENSAJE_ERROR,
            sentencia: sql,
            data: [err]
          })
        } else {
          resolve({
            estado: PARAM_ESTADO_OK,
            mensaje: PARAM_MENSAJE_QUERY,
            sentencia: sql,
            data: rows
          })
        }
        conn.close()
      })
    } catch (e) {
      resolve({
        estado: PARAM_ESTADO_NOK,
        mensaje: PARAM_MENSAJE_ERROR,
        sentencia: sql,
        data: e.message
      })
    }
  })
}

function promiseSqrt(value) {
  console.log('START execution with value =', value)
  return new Promise(function (fulfill, reject) {
    setTimeout(function () {
      fulfill({ value: value, result: value * value })
    }, 8000)
  })
}

module.exports = { main_func, promiseSqrt }
