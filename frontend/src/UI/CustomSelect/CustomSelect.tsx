import { Dispatch, MouseEvent, useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import './CustomSelect.scss'

type Props = {
	label: string
	setValue: Dispatch<React.SetStateAction<string>>
	value: string
	valuesList: string[]
}

const CustomSelect = ({ label, valuesList, value, setValue }: Props) => {
	const [MenuStatus, setMenuStatus] = useState<boolean>(false)

	const toggleMenu = (event: MouseEvent) => {
		event.stopPropagation()
		setMenuStatus(!MenuStatus)
	}

	const selectValue = (targetValue: string) => {
		return (e: MouseEvent) => {
			e.stopPropagation()
			e.preventDefault()

			setValue(targetValue)
		}
	}

	useEffect(() => {
		const closeMenu = () => {
			setMenuStatus(false)
		}
		document.body.addEventListener('click', closeMenu)
		return () => {
			document.body.removeEventListener('click', closeMenu)
		}
	}, [])

	return (
		<div
			className={`
				CustomSelect 
				${MenuStatus && 'active'} 
				${!value && 'placeholder'}
			`}
		>
			<button className="CustomSelect__valueBox" onClick={toggleMenu}>
				<span className="CustomSelect__value">{value || label}</span>
				<div className="select-arrow">
					<KeyboardArrowDownIcon />
				</div>
			</button>
			<div className="CustomSelect__listOptions">
				{valuesList.map((i: string) => (
					<button
						onClick={selectValue(i)}
						key={i}
						className="CustomSelect__option"
					>
						{i}
					</button>
				))}
			</div>
		</div>
	)
}

export default CustomSelect
