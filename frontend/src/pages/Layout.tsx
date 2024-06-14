import { ReactNode } from 'react'
import NavigateBar from '../components/NavigateBar/NavigateBar'

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<NavigateBar />
				<div style={{ flex: '1 1 auto' }}>
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}

export default Layout
