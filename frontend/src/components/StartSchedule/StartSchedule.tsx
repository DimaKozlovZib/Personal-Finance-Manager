import { Chart, ChartConfiguration } from 'chart.js/auto'
import { useEffect } from 'react'
import './StartSchedule.scss'
import useAppSelector from '../../hooks/useAppSelector'
import useWindowDimensions from '../../hooks/useWindowDimensions'

type Props = {}

const StartSchedule = ({}: Props) => {
	const { mode: themeMode } = useAppSelector((state) => state.theme)
	const { width } = useWindowDimensions()

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

	useEffect(() => {
		const ctx = (
			document.getElementById(table) as HTMLCanvasElement
		).getContext('2d')

		let gradient = ctx?.createLinearGradient(0, 0, 0, 400)
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

		// when component unmounts
		return () => {
			myChart.destroy()
		}
	}, [themeMode, width])

	return (
		<div className="StartSchedule">
			<canvas id="myChart"></canvas>
		</div>
	)
}

export default StartSchedule
