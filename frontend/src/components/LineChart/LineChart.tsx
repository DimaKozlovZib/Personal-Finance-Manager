import { Chart, ChartConfiguration } from 'chart.js/auto'
import { memo, useEffect } from 'react'
import st from './LineChart.module.scss'
import useAppSelector from '../../hooks/useAppSelector'

const table = 'myChart'
const themes = {
	light: {
		backgroundColor: 'white',
		textColor: 'black',
		axisColor: 'gray',
		scheduleColor: 'rgb(11, 134, 216)',
		gradientScheduleColor: 'rgba(11, 134, 216, 0.2)'
	},
	dark: {
		backgroundColor: 'black',
		textColor: 'white',
		axisColor: 'gray',
		scheduleColor: 'rgb(57, 100, 228)',
		gradientScheduleColor: 'rgba(57, 100, 228, 0.2)'
	}
}

const LineChart = memo(() => {
	const { mode: themeMode } = useAppSelector((state) => state.theme)

	useEffect(() => {
		const ctx = (
			document.getElementById(table) as HTMLCanvasElement
		).getContext('2d')

		const gradient = ctx?.createLinearGradient(0, 0, 0, 400)
		gradient?.addColorStop(0, themes[themeMode].scheduleColor)
		gradient?.addColorStop(1, themes[themeMode].gradientScheduleColor)

		const myChart = new Chart(table, {
			type: 'line',
			data: {
				labels: [
					'Day 1',
					'Day 2',
					'Day 3',
					'Day 4',
					'Day 5',
					'Day 6',
					'Day 7',
					'Day 8',
					'Day 9',
					'Day 10'
				],
				datasets: [
					{
						label: '₽',
						data: [32, 256, 144, 168, 248, 96, 144, 168, 40, 144],
						fill: true,
						backgroundColor: gradient,
						borderColor: themes[themeMode].scheduleColor
					}
				]
			},

			options: {
				maintainAspectRatio: false,
				scales: {
					x: {
						display: true,
						grid: {
							color: themes[themeMode].axisColor
						},
						ticks: {
							color: themes[themeMode].textColor
						}
					},
					y: {
						display: true,
						grid: {
							display: false
						},
						ticks: {
							color: themes[themeMode].textColor,
							callback: (value: string) => `₽ ${value}`
						}
					}
				},
				plugins: {
					legend: {
						display: false
					}
				}
			}
		} as ChartConfiguration)

		return () => {
			myChart.destroy()
		}
	}, [themeMode])

	return (
		<div className={st.LineChart}>
			<canvas id="myChart"></canvas>
		</div>
	)
})

export default LineChart
