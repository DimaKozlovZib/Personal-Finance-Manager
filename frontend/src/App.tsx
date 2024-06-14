import { useEffect } from 'react'
import './App.scss'
import { Outlet /* useLocation, useNavigate*/ } from 'react-router-dom'
import useAppSelector from './hooks/useAppSelector'
//import { useActions } from './hooks/useActions.ts'
//import { NavigatePath, paths } from './routes.ts'

function App() {
	const { mode: themeMode } = useAppSelector((state) => state.theme)
	//const user = useAppSelector((state) => state.user)
	//const { type, data } = useAppSelector((state) => state.modal)
	//const { isAuth } = useAppSelector((state) => state.auth)
	//const { setUser, setAuth } = useActions()
	//const navigate = useNavigate()
	//const location = useLocation()

	useEffect(() => {
		const body = document.querySelector('body')
		body?.setAttribute('theme', themeMode)
	}, [themeMode])

	return (
		<div className="App">
			<Outlet />
		</div>
	)
}

export default App
