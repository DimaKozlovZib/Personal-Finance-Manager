import { ChangeEvent, Dispatch } from 'react'
import { classes } from '../../constants'
import st from '../../styles/inputStyle.module.scss'

type Props = {
	placeholder: string
	className?: string
	setValue: Dispatch<React.SetStateAction<string>>
	value: string
}

const CustomInput = ({
	placeholder,
	className = '',
	setValue,
	value
}: Props) => {
	const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return (
		<div className={classes(st.customInputStyleClass, className)}>
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
