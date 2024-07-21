import { ChangeEvent, Dispatch } from 'react'
import './CustomInput.scss'

type Props = {
	placeholder: string
	className?: string
	setValue: Dispatch<React.SetStateAction<string>>
	value: string
}

const CustomInput = ({ placeholder, className, setValue, value }: Props) => {
	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<div className={`CustomInput customInputStyleClass ${className}`}>
			<input
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={changeInput}
			/>
		</div>
	)
}

export default CustomInput
