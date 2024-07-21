import { ChangeEvent, Dispatch } from 'react'
import './MoneyInput.scss'

type Props = {
	placeholder: string
	setValue: Dispatch<React.SetStateAction<string>>
	value: string
}

const MoneyInput = ({ placeholder, value, setValue }: Props) => {
	const inputChange = (e: ChangeEvent) => {
		const { value } = e.target as HTMLInputElement

		const numericValue = value.replace(/[^0-9]/g, '')
		if (Number(numericValue) <= 0 && numericValue.length > 0) return

		setValue(numericValue)
	}

	return (
		<div className="MoneyInput customInputStyleClass">
			<div className="MoneyInput__prefics">
				<span>₽</span>
			</div>
			<input
				placeholder={placeholder}
				type="number"
				onChange={inputChange}
				value={value}
				pattern="[0-9]"
			/>
		</div>
	)
}

export default MoneyInput
