/* eslint-disable no-unused-vars */
import $ from 'jquery'
import { useEffect, useState } from 'react'
import * as satellite from 'satellite.js'

export const ApiAjax = async () => {
  const url = 'https://tle.ivanstanojevic.me/api/tle/25544'
  return await fetch(url).then(response => response.json())
}
