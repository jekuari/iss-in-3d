
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
          // console.log(result.ObservatoryResponse.Observatory, 'result')
          const miniArray = result.ObservatoryResponse.Observatory
          // setDates(result)
          // console.log(miniArray, 'miniArray')
          let elements = []
          console.log(miniArray[0].Name[0])
          for (let i = 0; i < miniArray[i].length; i++) {
            elements = miniArray[i][1].StartTime[1]
            console.log('fechas', elements)
            console.log('hola')
          }
        })

        // const date = new Date()
        // console.log(date)
        // setDates(result)
        // console.log(result)
      }, [])
  }, [])

  // console.log('dates:', JSON.stringify(dates))

  // const fecha = JSON.stringify(res)
}

export default Dates
