import { ChangeEvent, Dispatch } from 'react'
import st from './MoneyInput.module.scss'
import inputSt from '../../styles/inputStyle.module.scss'
import { classes } from '../../constants'

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
	//{`${}  customInputStyleClass`}
	return (
		<div className={classes(st.MoneyInput, inputSt.customInputStyleClass)}>
			<div className={st.prefics}>
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
