import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import './AddTransactions.scss'
import ModalKeys from '../../ModalKeys'
import useModal from '../../hooks/useModal'
import { memo } from 'react'

const AddTransactions = memo(() => {
	const [openIncomeModal] = useModal(ModalKeys.IncomeModal)
	const [openExpensesModal] = useModal(ModalKeys.ExpensesModal)

	return (
		<div className="AddTransactions">
			<div className="AddTransactions-mainBtns">
				<button className="mainBtns__item" onClick={openIncomeModal}>
					<div className="svgBox">
						<AddIcon />
					</div>

					<h2>Заработок</h2>
					<h3>Добавить статью доходов</h3>
				</button>
				<button className="mainBtns__item" onClick={openExpensesModal}>
					<div className="svgBox">
						<RemoveIcon />
					</div>

					<h2>Траты</h2>
					<h3>Добавить статью расходов</h3>
				</button>
			</div>
		</div>
	)
})

export default AddTransactions
