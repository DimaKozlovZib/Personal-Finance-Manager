import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import './HistoryList.scss'
import HistoryItem from '../../UI/HistoryItem/HistoryItem'
import { ExpensesCategories } from '../../modules/TransactionsModals/Categories'

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
				<HistoryItem
					category={ExpensesCategories[11].name}
					moneyCount={200}
					isIncome
				/>
				<HistoryItem
					category={ExpensesCategories[1].name}
					moneyCount={200}
				/>
				<HistoryItem
					category={ExpensesCategories[8].name}
					moneyCount={200}
				/>
			</div>
		</article>
	)
}

export default HistoryList
