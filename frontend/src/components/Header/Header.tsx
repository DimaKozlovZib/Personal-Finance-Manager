import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavigatePath, paths } from '../../routes'
import { ReactNode } from 'react'
import useAppSelector from '../../hooks/useAppSelector'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useActions } from '../../hooks/useActions'
import Logo from '../../Logo'

type NavigateItemProps = {
	path: string
	children: ReactNode
}

const NavigateItem = ({ path, children }: NavigateItemProps) => {
	const location = useLocation()

	const condition = location.pathname === NavigatePath(path)
	return (
		<Link
			to={NavigatePath(path)}
			className={`Header-nav__item ${condition ? 'active' : ''}`}
		>
			{children}
		</Link>
	)
}

type Props = {}
const Header = ({}: Props) => {
	const theme = useAppSelector((state) => state.theme)
	const { changeTheme } = useActions()

	const changeThemeEvent = () => changeTheme()

	return (
		<header className="Header">
			<div className="container">
				<div className="logo-box">
					<Logo />
				</div>

				<nav className="Header-nav">
					<NavigateItem path={paths.HOME}>HOME</NavigateItem>
					<NavigateItem path={paths.TRANSACTIONS}>
						TRANSACTIONS
					</NavigateItem>
				</nav>

				<div className="settings">
					<button
						className="change-theme-btn"
						onClick={changeThemeEvent}
					>
						{theme.mode === 'light' ? (
							<LightModeIcon />
						) : (
							<DarkModeIcon />
						)}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
