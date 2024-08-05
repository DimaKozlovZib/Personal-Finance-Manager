import { useState } from 'react'
import useModal from '../../hooks/useModal'
import { Modal, ModalLayout } from '../../pages/ModalLayout'
import MoneyInput from '../../UI/MoneyInput/MoneyInput'
import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import CustomInput from '../../UI/CustomInput/CustomInput'
import CustomButton from '../../UI/CustomButton/CustomButton'
import ModalKeys from '../../ModalKeys'
import useManageModal from '../../hooks/useManageModal'
import DateInput from '../../UI/DateTimeInputs/DateInput'
import { ExpensesCategories } from './Categories'
import moment from 'moment'
import TimeInput from '../../UI/DateTimeInputs/TimeInput'
import './TransactionsModals.scss'
import { checkDate } from './dataValidation'

type Props = {
	ModalKey: ModalKeys
}

const ModalType = {
	dataBlock: 0,
	timeBlock: 1
}

const AddExpensesModal = ({ ModalKey }: Props) => {
	const [closeModal] = useModal(null)

	const [MoneyCount, setMoneyCount] = useState<string>('')
	const [Category, setCategory] = useState<string>('')
	const [Comment, setComment] = useState<string>('')
	const [Date, setDate] = useState<moment.Moment>(moment())
	const [Time, setTime] = useState<moment.Moment>(moment())

	const sendDataEvent = () => {
		const dateTimeCondition = checkDate(Date, Time)
		console.log(dateTimeCondition)
	}

	const { goBack, goNext, ModalIndex, directionСlockwise, setModalIndex } =
		useManageModal(ModalType.timeBlock)

	const resetData = () => {
		setMoneyCount('')
		setCategory('')
		setComment('')
		setDate(moment())
		setTime(moment())

		setModalIndex(ModalType.dataBlock)
	}

	return (
		<ModalLayout targetKey={ModalKey}>
			<Modal
				IsActive={ModalIndex === ModalType.dataBlock}
				isDirectionСlockwise={directionСlockwise}
			>
				<div className="AddExpensesModal modalStyleClass">
					<h4 className="modalStyleClass__title">
						Параметры транзакции (расход)
					</h4>
					<div className="modalStyleClass-block first-block">
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
				</div>

				<div className="buttonsWrapper">
					<button className="clearBtn" onClick={resetData}>
						Очистить
					</button>
					<div className="navigateButtonsBox">
						<CustomButton onClick={closeModal} cancelType>
							Закрыть
						</CustomButton>
						<CustomButton onClick={goNext}>Продолжить</CustomButton>
					</div>
				</div>
			</Modal>
			<Modal
				IsActive={ModalIndex === ModalType.timeBlock}
				isDirectionСlockwise={directionСlockwise}
			>
				<div className="AddExpensesModal modalStyleClass">
					<h4 className="modalStyleClass__title">
						Установить дату и время транзакции
					</h4>
					<div className="DateTimeInputsBox modalStyleClass">
						<DateInput value={Date} setValue={setDate} />
						<TimeInput value={Time} setValue={setTime} />
					</div>
				</div>

				<div className="buttonsWrapper">
					<button className="clearBtn" onClick={resetData}>
						Очистить
					</button>
					<div className="navigateButtonsBox">
						<CustomButton onClick={goBack} cancelType>
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

export default AddExpensesModal
