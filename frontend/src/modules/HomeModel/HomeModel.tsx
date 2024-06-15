import InfoCardList from '../../components/InfoCardList/InfoCardList'
import './HomeModel.scss'

type Props = {}

const HomeModel = ({}: Props) => {
	return (
		<>
			<div className="content-block">
				<h2 className="content-block__title">Основная информация</h2>
				<InfoCardList />
			</div>
		</>
	)
}

export default HomeModel
