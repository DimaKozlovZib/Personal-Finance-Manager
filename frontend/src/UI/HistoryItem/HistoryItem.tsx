import { ExpensesCategories } from '../../modules/TransactionsModals/Categories'
import RemoveIcon from '@mui/icons-material/Remove'
import st from './HistoryItem.module.scss'
import { classes } from '../../constants'

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
		<div
			className={classes(st.HistoryList__item, isIncome ? st.income : '')}
		>
			<div className={st.itemAvatarBox}>
				{ExpensesCategoryIcons(category)}
			</div>
			<div className={st.categoryBox}>
				<h3>{category}</h3>
			</div>
			<div className={st.moneyBox}>
				<h3>
					{isIncome && '+'}
					{moneyCount} ₽
				</h3>
			</div>
		</div>
	)
}

export default HistoryItem
