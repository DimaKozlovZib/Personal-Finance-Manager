import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './HistoryList.scss'

type Props = {}

const HistoryList = ({}: Props) => {
	return (
		<article className="HistoryList">
			<div className="HistoryList-header">
				<Link className="seeAll" to={''}>
					Посмотреть всё
				</Link>
			</div>
			<div className="HistoryList-list">
				<div className="HistoryList__item">
					<div className="item-avatar-box">
						<Avatar />
					</div>
					<div className="category-box">
						<h3>Здоровье</h3>
					</div>
					<div className="money-box">
						<h3>120 ₽</h3>
					</div>
				</div>
				<div className="HistoryList__item">
					<div className="item-avatar-box">
						<Avatar />
					</div>
					<div className="category-box">
						<h3>Здоровье</h3>
					</div>
					<div className="money-box">
						<h3>120 ₽</h3>
					</div>
				</div>
			</div>
		</article>
	)
}

export default HistoryList
