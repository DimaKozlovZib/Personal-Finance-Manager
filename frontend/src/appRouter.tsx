import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { paths } from './routes'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

export const router = createBrowserRouter([
	{
		element: <App />,
		path: '/',
		children: [
			{
				path: paths.HOME,
				element: <Home />
			},
			{
				path: paths.TRANSACTIONS,
				element: <Transactions />
			}
		]
	}
])
