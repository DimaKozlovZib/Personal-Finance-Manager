import { ReactNode, useMemo } from 'react'
import { Transition } from 'react-transition-group'
import useModal from '../hooks/useModal'
import ModalKeys from '../ModalKeys'
import useAppSelector from '../hooks/useAppSelector'

type ModalProps = {
	IsActive: boolean
	children: ReactNode
	isDirectionСlockwise: boolean
}

const Modal = ({ IsActive, children, isDirectionСlockwise }: ModalProps) => {
	return (
		<Transition
			in={IsActive}
			timeout={{
				appear: 0,
				enter: 0,
				exit: 300
			}}
			unmountOnExit
		>
			{(state) => (
				<div
					className={`modal-content modal-content-${state} ${
						isDirectionСlockwise && 'DirectionСlockwise'
					}`}
				>
					{children}
				</div>
			)}
		</Transition>
	)
}

type ModalLayoutProps = {
	targetKey: ModalKeys
	children: ReactNode
}

const duration = 400

const ModalLayout = ({ targetKey, children }: ModalLayoutProps) => {
	const [, closeOnClickWrapper] = useModal(null, '.modal-wrapper')
	const { key } = useAppSelector((state) => state.modal)
	const isModalActive = useMemo(() => key === targetKey, [key])

	return (
		<Transition in={isModalActive} timeout={duration} unmountOnExit>
			{(state) => (
				<div
					className={`modal-wrapper modal-wrapper-${state}`}
					onClick={closeOnClickWrapper}
				>
					{children}
				</div>
			)}
		</Transition>
	)
}

export { Modal, ModalLayout }
