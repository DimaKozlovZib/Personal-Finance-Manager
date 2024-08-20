import { useEffect, useMemo, useState } from 'react'
import useAppSelector from '../hooks/useAppSelector'
import { createTheme, Skeleton, ThemeProvider } from '@mui/material'
import ModalKeys from '../ModalKeys'
import AddIncomeModal from '../modules/TransactionsModals/AddIncomeModal'
import AddExpensesModal from '../modules/TransactionsModals/AddExpensesModal'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { ruRU } from '@mui/x-date-pickers/locales'

import '../styles/App.scss'
import '../styles/variables.scss'
import { AppProps } from 'next/app'

const blueMainColor = { dark: 'rgb(57, 100, 228)', light: 'rgb(11, 134, 216)' }

function App({ Component, pageProps }: AppProps) {
	const { mode: themeMode } = useAppSelector((state) => state.theme)
	const [loadStatus, setLoadStatus] = useState<string>('')

	const MuiTheme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,
					primary: {
						main: blueMainColor[themeMode]
					}
				}
			}),
		[themeMode]
	)

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

				<Component {...pageProps} />

				<AddIncomeModal ModalKey={ModalKeys.IncomeModal} />
				<AddExpensesModal ModalKey={ModalKeys.ExpensesModal} />
			</div>
		</ThemeProvider>
	)
}
const Index = (AppProps: AppProps) => {
	return (
		<Provider store={store}>
			<LocalizationProvider
				dateAdapter={AdapterMoment}
				adapterLocale="ru-RU"
				localeText={
					ruRU.components.MuiLocalizationProvider.defaultProps
						.localeText
				}
			>
				<App {...AppProps} />
			</LocalizationProvider>
		</Provider>
	)
}

export default Index
