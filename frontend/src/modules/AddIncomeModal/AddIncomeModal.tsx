import ModalKeys from '../../ModalKeys'
import { Modal, ModalLayout } from '../../pages/ModalLayout'
import MoneyInput from '../../UI/MoneyInput/MoneyInput'
import './AddIncomeModal.scss'
import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import CustomInput from '../../UI/CustomInput/CustomInput'
import { useState } from 'react'
import CustomButton from '../../UI/CustomButton/CustomButton'
import useModal from '../../hooks/useModal'

type Props = {
	ModalKey: ModalKeys
}

const incomeCategories = [
	'Зарплата',
	'Премия',
	'Подарки',
	'Проценты по вкладам',
	'Дивиденды',
	'Доход от сдачи в аренду',
	'Продажа имущества',
	'Подработка/Фриланс',
	'Другое'
]

const AddIncomeModal = ({ ModalKey }: Props) => {
	const [closeModal] = useModal(null)

	const [MoneyCount, setMoneyCount] = useState<string>('')
	const [Category, setCategory] = useState<string>('')
	const [Comment, setComment] = useState<string>('')

	const sendDataEvent = () => {}

	return (
		<ModalLayout targetKey={ModalKey}>
			<Modal IsActive>
				<div className="AddIncomeModal">
					<h4 className="AddIncomeModal__title">
						Параметры транзакции (доход)
					</h4>
					<div className="AddIncomeModal-block first-block">
						<MoneyInput
							value={MoneyCount}
							setValue={setMoneyCount}
							placeholder="Сумма дохода"
						/>
						<CustomSelect
							valuesList={incomeCategories}
							value={Category}
							setValue={setCategory}
							label="Категоря дохода"
						/>
					</div>
					<CustomInput
						value={Comment}
						setValue={setComment}
						placeholder="Коментарий"
						className="commentInput"
					/>
					<div className="buttonsWrapper">
						<CustomButton onClick={closeModal} cancelType>
							Назад
						</CustomButton>
						<CustomButton onClick={sendDataEvent}>
							Добавить
						</CustomButton>
					</div>
				</div>
			</Modal>
		</ModalLayout>
	)
}

export default AddIncomeModal
