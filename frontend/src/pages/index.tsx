import HistoryList from '../modules/HistoryList/HistoryList'
import InfoCardList from '../components/InfoCardList/InfoCardList'
import LineChart from '../components/LineChart/LineChart'
import Layout from '../Layouts/Layout'

const Home = () => {
	return (
		<Layout>
			<h1 className="pageTitle">Основная информация</h1>

			<div className="pageContentBlock">
				<InfoCardList />
			</div>
			<div className="pageContentBlock">
				<h2 className="pageContentBlock__title">Аналитический отчет</h2>
				<LineChart />
			</div>
			<div className="pageContentBlock">
				<h2 className="pageContentBlock__title">История</h2>
				<HistoryList />
			</div>
		</Layout>
	)
}

export default Home
