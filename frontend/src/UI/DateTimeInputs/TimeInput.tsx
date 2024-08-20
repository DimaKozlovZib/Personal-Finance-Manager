import React, { Dispatch } from 'react'
import { PickerValidDate, TimePicker } from '@mui/x-date-pickers'
import st from './DateTimeInputs.module.scss'
import moment from 'moment'

type Props = {
	label?: string
	setValue: Dispatch<React.SetStateAction<moment.Moment>>
	value: moment.Moment
}

const TimeInput = ({ label, setValue, value }: Props) => {
	const handleInputChange = (inputValue: PickerValidDate | null) => {
		setValue(moment(inputValue))
	}

	return (
		<div className={st.DateTimeInputClass}>
			<h3>{label}</h3>
			<TimePicker
				slotProps={{ textField: { variant: 'filled' } }}
				ampm={false}
				value={value}
				onChange={handleInputChange}
				views={['hours', 'minutes']}
			/>
		</div>
	)
}

export default TimeInput
