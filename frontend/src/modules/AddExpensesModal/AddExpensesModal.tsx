import { useState } from 'react'
import useModal from '../../hooks/useModal'
import { Modal, ModalLayout } from '../../pages/ModalLayout'
import MoneyInput from '../../UI/MoneyInput/MoneyInput'
import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import CustomInput from '../../UI/CustomInput/CustomInput'
import CustomButton from '../../UI/CustomButton/CustomButton'
import ModalKeys from '../../ModalKeys'

type Props = {
	ModalKey: ModalKeys
}

const ExpensesCategories = [
	'Жилье',
	'Коммунальные услуги',
	'Продукты питания',
	'Транспорт',
	'Здоровье',
	'Образование',
	'Развлечения',
	'Одежда и обувь',
	'Связь',
	'Кредиты',
	'Налоги',
	'Другие расходы'
]

// const currentDate = new Date()
// const formattedDate = `${currentDate.getFullYear()}-${(
// 	currentDate.getMonth() + 1
// )
// 	.toString()
// 	.padStart(2, '0')}-${currentDate.getDate()}`
//форматируем дату под DD.MM.YYYY

enum ModalType {
	dataBlock = 0,
	timeBlock = 1
}

const AddExpensesModal = ({ ModalKey }: Props) => {
	const [closeModal] = useModal(null)
	const [currentIndexModal, setCurrentIndexModal] = useState<number>(
		ModalType.dataBlock
	)

	const [MoneyCount, setMoneyCount] = useState<string>('')
	const [Category, setCategory] = useState<string>('')
	const [Comment, setComment] = useState<string>('')

	const sendDataEvent = () => {}

	const [directionСlockwise, setDirectionClockwise] = useState<boolean>(false)
	const goNext = () => {
		setCurrentIndexModal(1)
		setDirectionClockwise(false)
	}
	const goBack = () => {
		if (currentIndexModal > 0) {
			setCurrentIndexModal(currentIndexModal - 1)
			setDirectionClockwise(true)
		}
	}

	return (
		<ModalLayout targetKey={ModalKey}>
			<Modal
				IsActive={currentIndexModal === ModalType.dataBlock}
				isDirectionСlockwise={directionСlockwise}
			>
				<div className="AddIncomeModal">
					<h4 className="AddIncomeModal__title">
						Параметры транзакции (расход)
					</h4>
					<div className="AddIncomeModal-block first-block">
						<MoneyInput
							value={MoneyCount}
							setValue={setMoneyCount}
							placeholder="Сумма расхода"
						/>
						<CustomSelect
							valuesList={ExpensesCategories}
							value={Category}
							setValue={setCategory}
							label="Категоря расхода"
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
							Закрыть
						</CustomButton>
						<CustomButton onClick={goNext}>Продолжить</CustomButton>
					</div>
				</div>
			</Modal>
			<Modal
				IsActive={currentIndexModal === ModalType.timeBlock}
				isDirectionСlockwise={directionСlockwise}
			>
				uuhuhushiuhds
				<div className="buttonsWrapper">
					<CustomButton onClick={goBack} cancelType>
						Назад
					</CustomButton>
					<CustomButton onClick={sendDataEvent}>
						Добавить
					</CustomButton>
				</div>
			</Modal>
		</ModalLayout>
	)
}

export default AddExpensesModal
