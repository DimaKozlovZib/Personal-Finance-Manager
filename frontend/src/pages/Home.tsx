import HistoryList from '../components/HistoryList/HistoryList'
import InfoCardList from '../components/InfoCardList/InfoCardList'
import StartSchedule from '../components/StartSchedule/StartSchedule'
import Layout from './Layout'

type Props = {}

const Home = ({}: Props) => {
	return (
		<Layout>
			<h1 className="pageTitle">Основная информация</h1>

			<div className="pageContentBlock">
				<InfoCardList />
			</div>
			<div className="pageContentBlock">
				<h2 className="pageContentBlock__title">Аналитический отчет</h2>
				<StartSchedule />
			</div>
			<div className="pageContentBlock">
				<h2 className="pageContentBlock__title">История</h2>
				<HistoryList />
			</div>
		</Layout>
	)
}

export default Home
