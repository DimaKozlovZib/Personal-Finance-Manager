import HistoryList from '../components/HistoryList/HistoryList'
import AddTransactions from '../modules/AddTransactions/AddTransactions'
import Layout from './Layout'

type Props = {}

const Transactions = ({}: Props) => {
	return (
		<Layout>
			<h1 className="pageTitle">Денежные транзакции</h1>
			<AddTransactions />
			<div className="pageContentBlock">
				<h2 className="pageContentBlock__title">История транзакций</h2>
				<HistoryList />
			</div>
		</Layout>
	)
}

export default Transactions
