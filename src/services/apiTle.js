/* eslint-disable no-unused-vars */
import $ from 'jquery'
import swal from 'sweetalert2'
import { getSatelliteInfo } from 'tle.js'
import * as satellite from 'satellite.js'
import { useState } from 'react'

const ApiTle = () => {
   let satelliteInfo = [];
  // let newPosition = []
  let tle = []

  let position = []

  $.ajax({
    url: 'https://tle.ivanstanojevic.me/api/tle/25544',
    type: 'GET',
    dataType: 'json',
    async: true,
    crossdomain: true,
    success: function (datos) {
      const obj = JSON.stringify(datos)
      // console.log(obj)
      console.log(datos)
      const line1 = datos.line1
      const line2 = datos.line2

      tle = [line1, line2]
      console.log(tle)

      position = tle
    },
    error: function () {
      swal.fire('Error', 'An internal server error has occurred, please contact the site admin', 'error')
    }
  })

  return position;
}

export default ApiTle
