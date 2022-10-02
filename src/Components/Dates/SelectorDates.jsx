import './SelectorDates.css'
import Select from 'react-select'

const SelectorDates = () => {
  const options = [
    { value: 'StartTime', label: '1998-11-21' },
    { value: 'EndTime', label: '2022-10-17' },
    { value: 'ISS', label: '1983-11-16' }
  ]

  return (
    <div className='selector-dates'>
      <Select options={options} menuPlacement='top' />
    </div>
  )
}

export default SelectorDates
