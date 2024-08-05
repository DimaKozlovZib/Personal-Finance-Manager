import React, { Dispatch } from 'react'
import { DatePicker, PickerValidDate } from '@mui/x-date-pickers'
import './DateTimeInputs.scss'
import moment from 'moment'

type Props = {
	label?: string
	setValue: Dispatch<React.SetStateAction<moment.Moment>>
	value: moment.Moment
}

const DateInput = ({ label, setValue, value }: Props) => {
	const handleInputChange = (inputValue: PickerValidDate | null) => {
		setValue(moment(inputValue))
	}

	const today = moment() // get today's date
	const firstDayOfPreviousMonth = today
		.clone()
		.subtract(1, 'month')
		.startOf('month')

	return (
		<div className="DateInput">
			<h3>{label}</h3>
			<DatePicker
				slotProps={{ textField: { variant: 'filled' } }}
				value={value}
				onChange={handleInputChange}
				maxDate={today}
				minDate={firstDayOfPreviousMonth}
				views={['day', 'month']}
			/>
		</div>
	)
}

export default DateInput
