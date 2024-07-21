import React, { Dispatch, useState } from 'react'
import checkDate from './checkDate'

type Props = {
	placeholder: string
	className?: string
	setValue: Dispatch<React.SetStateAction<string>>
	value: string
}

const DateInput = ({ placeholder, className, setValue, value }: Props) => {
	const [isValid, setIsValid] = useState<boolean>(true)

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value

		if (checkDate(inputValue)) setIsValid(false)
		else setIsValid(true)

		setValue(inputValue)
	}

	const componentCalssName = `DateInput customInputStyleClass ${className} ${
		!isValid && 'invalidValue'
	}`
	return (
		<div className={componentCalssName}>
			<input
				type="date"
				onChange={handleInputChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default DateInput
