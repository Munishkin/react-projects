import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

export default function  DatePicker (props) {
  return (
    <div className='datePicker'>
    <p className='dateTitle'>Due date</p>
    <DayPickerInput value={props.selected}  onDayChange={props.onChange} />
    </div>
  )
}
