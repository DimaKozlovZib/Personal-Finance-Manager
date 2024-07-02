import { ReactNode, useMemo, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'
import useModal from '../hooks/useModal'
import ModalKeys from '../ModalKeys'
import useAppSelector from '../hooks/useAppSelector'

type Props = {
	targetKey: ModalKeys
	children: ReactNode
}

const duration = 400

const ModalLayout = ({ targetKey, children }: Props) => {
	const [_, closeOnClickWrapper] = useModal(null, '.modal-wrapper')
	const { key } = useAppSelector((state) => state.modal)
	const isModalctive = useMemo(() => key === targetKey, [key])

	return (
		<Transition
			in={isModalctive}
			timeout={duration} // Длительность анимации
			unmountOnExit
		>
			{(state) => (
				<div
					className={`modal-wrapper modal-wrapper-${state}`}
					onClick={closeOnClickWrapper}
				>
					<div className="modal-content">{children}</div>
				</div>
			)}
		</Transition>
	)
}

export default ModalLayout
