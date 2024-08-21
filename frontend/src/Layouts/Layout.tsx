import { ReactNode } from 'react'
import Header from '../modules/Header/Header'

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main>
				<div className="container">{children}</div>
			</main>
		</>
	)
}

export default Layout
