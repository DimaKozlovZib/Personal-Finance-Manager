import { MouseEvent, ReactNode } from 'react'
import './CustomButton.scss'
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
			className={`simpleButton ${className} ${
				cancelType ? 'cancelType' : ''
			}`}
		>
			{children}
		</button>
	)
}

export default CustomButton
