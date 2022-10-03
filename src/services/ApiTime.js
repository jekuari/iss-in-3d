import $ from 'jquery'

const ApiTime = () => {
  $.ajax({
    url: 'https://sscweb.gsfc.nasa.gov/WS/sscr/2/observatories',
    type: 'GET',
    dataType: 'json',
    async: true,
    crossdomain: true,
    success: function (datos) {
      // eslint-disable-next-line no-unused-vars
      const obj = JSON.stringify(datos)

    //   console.log(fechas, 'fechas')
    //   const date = new Date()
    //   console.log(date, 'date')
    },
    error: function () {
      console.log('error')
    }
  })
}

export default ApiTime
