import { useEffect, useState } from 'react'
import './App.scss'
import { Outlet /* useLocation, useNavigate*/ } from 'react-router-dom'
import useAppSelector from './hooks/useAppSelector'
import { Skeleton } from '@mui/material'
//import { useActions } from './hooks/useActions.ts'
//import { NavigatePath, paths } from './routes.ts'

function App() {
	const { mode: themeMode } = useAppSelector((state) => state.theme)
	const [loadStatus, setLoadStatus] = useState<string>('')
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
		<div className="App">
			<div className={`skeletonBox ${loadStatus}`}>
				<Skeleton className="skell" variant="rounded" />
			</div>

			<Outlet />
		</div>
	)
}

export default App
