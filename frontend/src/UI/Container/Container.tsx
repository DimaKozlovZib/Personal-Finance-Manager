import { ReactNode } from 'react'

type Props = {
	className: string
	children: ReactNode
}

const Container = ({ className, children }: Props) => {
	return <div className={`container ${className}`}>{children}</div>
}

export default Container
