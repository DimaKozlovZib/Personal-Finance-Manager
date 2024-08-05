import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { router } from './appRouter'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { ruRU } from '@mui/x-date-pickers/locales'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<LocalizationProvider
				dateAdapter={AdapterMoment}
				adapterLocale="ru-RU"
				localeText={
					ruRU.components.MuiLocalizationProvider.defaultProps
						.localeText
				}
			>
				<RouterProvider router={router} />
			</LocalizationProvider>
		</Provider>
	</React.StrictMode>
)
