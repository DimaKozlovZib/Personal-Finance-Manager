import { useState } from 'react'
import useModal from '../../hooks/useModal'
import { Modal, ModalLayout } from '../../Layouts/ModalLayout'
import MoneyInput from '../../UI/MoneyInput/MoneyInput'
import CustomSelect from '../../UI/CustomSelect/CustomSelect'
import CustomInput from '../../UI/CustomInput/CustomInput'
import CustomButton from '../../UI/CustomButton/CustomButton'
import ModalKeys from '../../ModalKeys'
import useManageModal from '../../hooks/useManageModal'
import DateInput from '../../UI/DateTimeInputs/DateInput'
import { IncomeCategories } from './Categories'
import moment from 'moment'
import TimeInput from '../../UI/DateTimeInputs/TimeInput'
import { checkDate } from './dataValidation'

import st from '../../styles/Modals.module.scss'
import localeSt from './TransactionsModals.module.scss'
import { classes } from '../../constants'

type Props = {
	ModalKey: ModalKeys
}

const ModalType = {
	dataBlock: 0,
	timeBlock: 1
}

const categories = IncomeCategories.map((i) => i.name)

const AddIncomeModal = ({ ModalKey }: Props) => {
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
				<div className={classes(st.AddIncomeModal, st.modalStyleClass)}>
					<h4 className={st.modalStyleClassTitle}>
						Параметры транзакции (доход)
					</h4>
					<div
						className={classes(
							st.modalStyleBlock,
							st.firstBlock,
							localeSt.firstBlock
						)}
					>
						<MoneyInput
							value={MoneyCount}
							setValue={setMoneyCount}
							placeholder="Сумма дохода"
						/>
						<CustomSelect
							valuesList={categories}
							value={Category}
							setValue={setCategory}
							label="Категоря дохода"
						/>
					</div>
					<div className={st.modalStyleBlock}>
						<CustomInput
							value={Comment}
							setValue={setComment}
							placeholder="Коментарий"
							className="commentInput"
						/>
					</div>
				</div>

				<div className={st.buttonsWrapper}>
					<button className={st.clearBtn} onClick={resetData}>
						Очистить
					</button>
					<div className={st.navigateButtonsBox}>
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
				<div className={classes(st.AddIncomeModal, st.modalStyleClass)}>
					<h4 className={st.modalStyleClassTitle}>
						Установить дату и время транзакции
					</h4>
					<div
						className={classes(
							localeSt.DateTimeInputsBox,
							st.modalStyleBlock,
							st.firstBlock,
							localeSt.firstBlock
						)}
					>
						<DateInput value={Date} setValue={setDate} />
						<TimeInput value={Time} setValue={setTime} />
					</div>
				</div>

				<div className={st.buttonsWrapper}>
					<button className={st.clearBtn} onClick={resetData}>
						Очистить
					</button>
					<div className={st.navigateButtonsBox}>
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

export default AddIncomeModal
