import InfoCardList from '../../components/InfoCardList/InfoCardList'
import StartSchedule from '../../components/StartSchedule/StartSchedule'
import './HomeModel.scss'

type Props = {}

const HomeModel = ({}: Props) => {
	return (
		<>
			<div className="HomeModel">
				<div className="statistic">
					<h1 className="pageTitle">Основная информация</h1>

					<div className="statistic-block">
						<InfoCardList />
					</div>
					<div className="statistic-block">
						<h2 className="statistic-block__title">
							Аналитический отчет
						</h2>
						<StartSchedule />
					</div>
				</div>
				<div className="manage"></div>
			</div>
		</>
	)
}

export default HomeModel
