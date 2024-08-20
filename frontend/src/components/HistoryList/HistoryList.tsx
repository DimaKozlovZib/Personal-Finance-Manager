import st from './HistoryList.module.scss'
import HistoryItem from '../../UI/HistoryItem/HistoryItem'
import { ExpensesCategories } from '../../modules/TransactionsModals/Categories'
import Link from 'next/link'

const HistoryList = () => {
	return (
		<article className={st.HistoryList}>
			<div className={st.header}>
				<Link className={st.seeAll} href={'/'}>
					Посмотреть всё
				</Link>
			</div>
			<div className={st.list}>
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
