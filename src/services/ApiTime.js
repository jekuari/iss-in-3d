import $ from 'jquery'
import swal from 'sweetalert2'

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
      let fechas = []
      for (let i = 0; i < datos.Observatory[1].length; i++) {
        console.log(datos.Observatory[1][i].StartTime[1].substring(0, 10), 'datos.Observatory[1][i].EndTime[1]')
        fechas.push({StartTime:datos.Observatory[1][i].StartTime[1].substring(0,10), EndTime:datos.Observatory[1][i].EndTime[1].substring(0,10)})
      }
      return fechas;
    //   console.log(fechas, 'fechas')
    //   const date = new Date()
    //   console.log(date, 'date')
    },
    error: function () {
      swal('Error', 'An internal server error has occurred, please contact the site admin', 'error')
    }
  })
}

export default ApiTime