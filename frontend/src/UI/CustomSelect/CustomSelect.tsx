import { Dispatch, MouseEvent, useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import st from './CustomSelect.module.scss'
import { classes } from '../../constants'

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
			className={classes(
				st.CustomSelect,
				MenuStatus && st.active,
				!value && st.placeholder
			)}
		>
			<button className={st.valueBox} onClick={toggleMenu}>
				<span>{value || label}</span>
				<div className={st.selectArrow}>
					<KeyboardArrowDownIcon />
				</div>
			</button>
			<div className={st.listOptions}>
				{valuesList.map((i: string) => (
					<button onClick={selectValue(i)} key={i}>
						{i}
					</button>
				))}
			</div>
		</div>
	)
}

export default CustomSelect
