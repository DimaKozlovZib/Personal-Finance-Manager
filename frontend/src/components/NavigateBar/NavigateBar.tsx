import './NavigateBar.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavigatePath, paths } from '../../routes'
import HomeIcon from '@mui/icons-material/Home'
import { ReactNode } from 'react'
import useAppSelector from '../../hooks/useAppSelector'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useActions } from '../../hooks/useActions'

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
			className={`NavigateBar-nav__item ${condition ? 'active' : ''}`}
		>
			{children}
		</Link>
	)
}

type Props = {}
const NavigateBar = ({}: Props) => {
	const theme = useAppSelector((state) => state.theme)
	const { changeTheme } = useActions()

	const changeThemeEvent = () => changeTheme()

	return (
		<div className="NavigateBar">
			<div className="logo-box">
				<svg
					width="38"
					height="36"
					viewBox="0 0 38 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.34554 5.58489L1.99947 4.70052C1.92257 4.50826 1.76877 4.316 1.53806 4.23909L0.653674 3.85458C0.538319 3.81613 0.538319 3.62387 0.653674 3.54697L1.53806 3.2009C1.73032 3.124 1.92257 2.9702 1.99947 2.73949L2.38399 1.8551C2.42244 1.73975 2.6147 1.73975 2.6916 1.8551L3.03766 2.73949C3.11457 2.93175 3.26837 3.124 3.49908 3.2009L4.38346 3.58542C4.49882 3.62387 4.49882 3.81613 4.38346 3.89303L3.49908 4.23909C3.30682 4.316 3.11457 4.46981 3.03766 4.70052L2.65315 5.58489C2.57625 5.70025 2.38399 5.70025 2.34554 5.58489ZM37.3364 19.0045C36.798 28.5404 28.9155 36 19.3795 36C14.4962 36 9.92047 34.0774 6.49829 30.5783C3.07611 27.0793 1.26889 22.4651 1.38425 17.5818C1.38425 17.1972 1.4227 16.8127 1.46115 16.4282C1.46115 16.3129 1.4227 16.159 1.30735 16.0821C0.499867 15.4669 0 14.5056 0 13.429C0 11.6218 1.4227 10.1991 3.19147 10.1222C3.22992 10.1222 3.26837 10.1222 3.34528 10.1222C4.22966 10.1222 5.03714 10.4682 5.61391 11.045C6.26758 11.6602 6.6521 12.5062 6.6521 13.4674C6.6521 14.967 5.65236 16.2744 4.26811 16.6589C4.1143 16.6974 3.99895 16.8512 3.99895 17.005C3.99895 17.2357 3.9605 17.4279 3.9605 17.6587C3.84514 22.0806 5.57546 26.2333 8.80538 29.271C11.4201 31.7319 14.8807 33.2315 18.4567 33.4238C26.7622 33.8852 33.7988 27.7714 34.6832 19.735C34.7217 19.5043 34.5294 19.3121 34.2987 19.3121H25.4933C25.3395 19.3121 25.1857 19.4274 25.1473 19.5812C24.4551 22.119 22.1096 24.0031 19.3795 24.0031C15.9574 24.0031 13.1504 21.0808 13.3811 17.6202C13.5734 14.6594 15.9574 12.2754 18.8797 12.0447C21.8404 11.814 24.4167 13.7751 25.1473 16.4282C25.1857 16.582 25.3395 16.6974 25.5318 16.6974H35.1446C35.7599 16.6974 36.3366 16.9281 36.7211 17.3895C37.1826 17.8125 37.3748 18.4277 37.3364 19.0045ZM22.8017 18.0047C22.8017 16.1206 21.2637 14.5825 19.3795 14.5825C17.4954 14.5825 15.9574 16.1206 15.9574 18.0047C15.9574 19.8888 17.4954 21.4269 19.3795 21.4269C21.2637 21.4269 22.8017 19.8888 22.8017 18.0047ZM2.57625 13.4674C2.57625 13.8904 2.92231 14.198 3.30682 14.198C3.69134 14.198 4.0374 13.852 4.0374 13.4674C4.0374 13.0829 3.69134 12.7369 3.30682 12.7369C2.92231 12.7369 2.57625 13.0445 2.57625 13.4674ZM6.38294 9.73765C6.26759 9.92991 6.03687 9.96836 5.84461 9.85301C5.3832 9.5454 4.84488 9.31469 4.30656 9.16088C4.0374 9.12243 3.9605 8.81482 4.07585 8.58411C4.80643 7.43057 5.65236 6.31548 6.61364 5.35419C9.88202 2.04736 14.1886 0.163241 18.8028 0.00943508C23.6476 -0.144371 28.2618 1.58594 31.7609 4.93122C32.6068 5.7387 33.0683 6.8538 32.9913 8.04579C32.9144 9.23779 32.3761 10.3144 31.4148 11.045C29.8383 12.237 27.6082 12.1601 26.1854 10.8143C25.7625 10.4298 25.3395 10.0837 24.8781 9.77611C24.7243 9.6992 24.5705 9.6992 24.4167 9.81455C23.8399 10.276 23.1093 10.5836 22.3018 10.5836C20.7638 10.5836 19.4564 9.5454 19.1104 8.12269C19.0335 7.85353 18.995 7.54592 18.995 7.27676C18.995 6.66154 19.1873 6.04632 19.4949 5.54645C20.0717 4.58516 21.1483 3.93149 22.3403 3.93149C24.1091 3.93149 25.5318 5.31573 25.6471 7.04605C25.6471 7.16141 25.724 7.27676 25.8394 7.35366C26.6084 7.81508 27.339 8.3534 27.9927 9.00708C28.4925 9.4685 29.3 9.50695 29.8383 9.08398C30.1844 8.81482 30.3767 8.4303 30.4151 8.00734C30.4536 7.58437 30.2613 7.19986 29.9537 6.89225C26.9545 4.04684 22.994 2.54723 18.8412 2.66259C13.6118 2.73949 9.0361 5.5849 6.38294 9.73765ZM23.1093 7.19986C23.1093 6.77689 22.7633 6.46928 22.3787 6.46928C21.9942 6.46928 21.6482 6.81535 21.6482 7.19986C21.6482 7.62283 21.9942 7.96889 22.3787 7.96889C22.7633 7.96889 23.1093 7.62283 23.1093 7.19986ZM17.6877 5.62335C17.9568 5.5849 18.1875 5.8156 18.1106 6.08476C17.9953 6.46928 17.9568 6.81535 17.9568 7.19986C17.9568 7.39212 17.9568 7.58437 17.9953 7.77663C18.0337 7.96889 17.8799 8.16114 17.6877 8.19959C15.6113 8.54566 13.6887 9.5454 12.1891 11.1219C10.305 13.0829 9.30525 15.6592 9.42061 18.3892C9.61287 23.5033 13.8041 27.6945 18.9181 27.9252C21.0714 28.0021 23.1093 27.4253 24.8396 26.3102C24.9935 26.1949 25.0319 26.0026 24.955 25.8104C24.7627 25.3874 24.6089 24.8875 24.6089 24.3877C24.6089 22.5035 26.1854 20.9655 28.108 21.0808C29.7999 21.1577 31.1841 22.542 31.261 24.2339C31.3379 26.1564 29.8383 27.7329 27.9542 27.7329C27.8004 27.7329 27.6466 27.7329 27.4928 27.6945C27.3774 27.6945 27.2621 27.6945 27.1852 27.7714C24.8396 29.6555 21.9173 30.6552 18.7643 30.5014C12.3045 30.2323 7.07506 24.9644 6.8059 18.5046C6.69055 15.0824 7.921 11.814 10.305 9.31469C12.3429 7.27676 14.9192 5.96941 17.6877 5.62335ZM27.2236 24.3877C27.2236 24.8106 27.5697 25.1182 27.9542 25.1182C28.3387 25.1182 28.6848 24.7722 28.6848 24.3877C28.6848 24.0031 28.3387 23.6571 27.9542 23.6571C27.5697 23.6571 27.2236 23.9647 27.2236 24.3877Z"
						fill="var(--blue-color)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear_2_39"
							x1="18.6706"
							y1="0"
							x2="18.6706"
							y2="36"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#037BCB" />
							<stop offset="1" stop-color="#18A0FB" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			<nav className="NavigateBar-nav">
				<NavigateItem path={paths.HOME}>
					<HomeIcon />
				</NavigateItem>
			</nav>

			<div className="settings">
				<button className="change-theme-btn" onClick={changeThemeEvent}>
					{theme.mode === 'light' ? (
						<LightModeIcon />
					) : (
						<DarkModeIcon />
					)}
				</button>
			</div>
		</div>
	)
}

export default NavigateBar
