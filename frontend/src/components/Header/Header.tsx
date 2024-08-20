import st from './Header.module.scss'
import { routes } from '../../routes'
import { ReactNode } from 'react'
import useAppSelector from '../../hooks/useAppSelector'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useActions } from '../../hooks/useActions'
import Logo from '../../Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Container from '../../UI/Container/Container'

type NavigateItemProps = {
	path: string
	children: ReactNode
}

const NavigateItem = ({ path, children }: NavigateItemProps) => {
	const pathName = usePathname()

	const condition = pathName === path

	return (
		<Link
			href={path}
			className={`${st.nav__item} ${condition ? st.active : ''}`}
		>
			{children}
		</Link>
	)
}

const Header = () => {
	const theme = useAppSelector((state) => state.theme)
	const { changeTheme } = useActions()

	const changeThemeEvent = () => changeTheme()

	return (
		<header className={st.Header}>
			<Container className={st.container}>
				<div className={st.logoBox}>
					<Logo />
				</div>

				<nav className={st.nav}>
					<NavigateItem path={routes.Home}>HOME</NavigateItem>
					<NavigateItem path={routes.Transactions}>
						TRANSACTIONS
					</NavigateItem>
				</nav>

				<div className={st.settings}>
					<button
						className={st['change-theme-btn']}
						onClick={changeThemeEvent}
					>
						{theme.mode === 'light' ? (
							<LightModeIcon />
						) : (
							<DarkModeIcon />
						)}
					</button>
				</div>
			</Container>
		</header>
	)
}

export default Header
