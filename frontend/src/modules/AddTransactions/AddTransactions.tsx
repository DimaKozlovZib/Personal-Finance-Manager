import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import st from './AddTransactions.module.scss'
import ModalKeys from '../../ModalKeys'
import useModal from '../../hooks/useModal'
import { memo } from 'react'

const AddTransactions = memo(() => {
	const [openIncomeModal] = useModal(ModalKeys.IncomeModal)
	const [openExpensesModal] = useModal(ModalKeys.ExpensesModal)

	return (
		<div className={st.AddTransactions}>
			<div className={st.mainBtnsBox}>
				<button className={st.mainBtn} onClick={openIncomeModal}>
					<div className={st.svgBox}>
						<AddIcon />
					</div>

					<h2>Заработок</h2>
					<h3>Добавить статью доходов</h3>
				</button>
				<button className={st.mainBtn} onClick={openExpensesModal}>
					<div className={st.svgBox}>
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
