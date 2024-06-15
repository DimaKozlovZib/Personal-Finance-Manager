import { ReactNode } from 'react'
import NavigateBar from '../components/NavigateBar/NavigateBar'

type Props = {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<div className="Layout">
				<NavigateBar />
				<div className="Layout-contentBox">
					<main>{children}</main>
				</div>
			</div>
		</>
	)
}

export default Layout
