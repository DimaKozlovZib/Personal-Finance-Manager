import { useState, useEffect } from 'react'

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({
		width: 0,
		height: 0
	})
	const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
		null
	)
	const time = 1000

	useEffect(() => {
		function handleResize() {
			if (timer) {
				clearTimeout(timer)
			}
			const timeout = setTimeout(
				() =>
					setWindowDimensions({
						width: window.innerWidth,
						height: window.innerHeight
					}),
				time
			)
			setTimer(timeout)
		}

		// Only run in the browser
		if (typeof window !== 'undefined') {
			handleResize()
			window.addEventListener('resize', handleResize)
		}

		return () => {
			// Only run in the browser
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', handleResize)
			}
		}
	}, []) // Empty dependency array to only run once on mount

	return windowDimensions
}

export default useWindowDimensions
