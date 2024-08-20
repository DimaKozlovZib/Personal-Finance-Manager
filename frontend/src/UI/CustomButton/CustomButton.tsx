import { MouseEvent, ReactNode } from 'react'
import st from './CustomButton.module.scss'
import { classes } from '../../constants'
type Props = {
	children: ReactNode
	onClick: (e: MouseEvent<HTMLButtonElement>) => void
	className?: string
	cancelType?: boolean
}

const CustomButton = ({ children, onClick, className, cancelType }: Props) => {
	return (
		<button
			onClick={onClick}
			className={classes(
				st.simpleButton,
				className,
				!!cancelType && st.cancelType
			)}
		>
			{children}
		</button>
	)
}

export default CustomButton
