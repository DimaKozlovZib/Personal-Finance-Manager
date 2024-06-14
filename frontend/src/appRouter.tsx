import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { paths } from './routes'
import Home from './pages/Home'

export const router = createBrowserRouter([
	{
		element: <App />,
		path: '/',
		children: [
			{
				path: paths.HOME,
				element: <Home />
			}
		]
	}
])
