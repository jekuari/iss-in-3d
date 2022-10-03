/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable n/handle-callback-err */
import { useEffect, useState } from 'react'

const parseString = require('xml2js').parseString

const Dates = () => {
  const [dates, setDates] = useState([])

  useEffect(() => {
    const url2 = 'https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories'
    const myHeaders = new Headers()
    const requestOptions2 = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors'
    }

    fetch(url2, requestOptions2)
      .then(response => response.text())
      .then(result => {
        const xml = result
        parseString(xml, function (err, result) {
          const miniArray = result.ObservatoryResponse.Observatory

          const elementsStart = []
          const elementsEnd = []

          for (let i = 0; i < miniArray.length; i++) {
            elementsStart.push(miniArray[i].StartTime)
            elementsEnd.push(miniArray[i].EndTime)
          }
          console.log('fechas iniciales: ', elementsStart)
          console.log('fechas finales: ', elementsEnd)
          console.log(elementsStart.length)
          setDates(elementsStart)
        })
      }, [])
  }, [])

  let newDate = []
  newDate = new Date(dates[0])
  for (let i = 0; i < dates.length; i++) {
    newDate += new Date(dates[i])
  }
  // Las fechas ya estan en el formato correcto, solo falta pasar cada una dentro del select
  console.log('Formato de fecha correcto: ', newDate)
}

export default Dates
