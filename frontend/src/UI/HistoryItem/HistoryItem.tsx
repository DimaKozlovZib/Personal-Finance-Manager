import { ExpensesCategories } from '../../modules/TransactionsModals/Categories'
import RemoveIcon from '@mui/icons-material/Remove'
import './HistoryItem.scss'

const ExpensesCategoryIcons = (category: string) => {
	const categoriesList = ExpensesCategories.map((i) => i.name)
	const currentIndex = categoriesList.findIndex((i) => i === category)

	if (currentIndex === -1) return <RemoveIcon />

	return ExpensesCategories[currentIndex].icon
}

type Props = {
	isIncome?: boolean
	category: string
	moneyCount?: number
}

const HistoryItem = ({ isIncome, category, moneyCount }: Props) => {
	return (
		<div className={`HistoryList__item ${isIncome ? 'income' : ''}`}>
			<div className="item-avatar-box">
				{ExpensesCategoryIcons(category)}
			</div>
			<div className="category-box">
				<h3>{category}</h3>
			</div>
			<div className="money-box">
				<h3>
					{isIncome && '+'}
					{moneyCount} ₽
				</h3>
			</div>
		</div>
	)
}

export default HistoryItem
