import { useEffect, useMemo, useState } from 'react'
import './styles/App.scss'
import { Outlet /* useLocation, useNavigate*/ } from 'react-router-dom'
import useAppSelector from './hooks/useAppSelector'
import { createTheme, Skeleton, ThemeProvider } from '@mui/material'
import ModalKeys from './ModalKeys'
import AddIncomeModal from './modules/AddIncomeModal/AddIncomeModal'
import './styles/inputStyle.scss'
import AddExpensesModal from './modules/AddExpensesModal/AddExpensesModal'
//import { useActions } from './hooks/useActions.ts'
//import { NavigatePath, paths } from './routes.ts'

const rootStyles = getComputedStyle(document.documentElement)

function App() {
	const { mode: themeMode } = useAppSelector((state) => state.theme)
	const [loadStatus, setLoadStatus] = useState<string>('')

	const MuiTheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,
					primary: {
						main: rootStyles.getPropertyValue('--blue-color')
					}
				}
			}),
		[themeMode]
	)

	//const user = useAppSelector((state) => state.user)
	//const { type, data } = useAppSelector((state) => state.modal)
	//const { isAuth } = useAppSelector((state) => state.auth)
	//const { setUser, setAuth } = useActions()
	//const navigate = useNavigate()
	//const location = useLocation()

	useEffect(() => {
		const body = document.querySelector('body')
		body?.setAttribute('theme', themeMode)
		setTimeout(() => setLoadStatus('active'), 700)
	}, [themeMode])

	return (
		<ThemeProvider theme={MuiTheme}>
			<div className="App">
				<div className={`skeletonBox ${loadStatus}`}>
					<Skeleton className="skell" variant="rounded" />
				</div>

				<Outlet />

				<AddIncomeModal ModalKey={ModalKeys.IncomeModal} />
				<AddExpensesModal ModalKey={ModalKeys.ExpensesModal} />
			</div>
		</ThemeProvider>
	)
}

export default App
