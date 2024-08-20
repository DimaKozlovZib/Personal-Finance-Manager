import { ReactNode, useMemo } from 'react'
import { Transition } from 'react-transition-group'
import useModal from '../hooks/useModal'
import ModalKeys from '../ModalKeys'
import useAppSelector from '../hooks/useAppSelector'
import st from '../styles/Modals.module.scss'
import { classes } from '../constants'

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
					className={classes(
						st.modalContent,
						st['Content-' + state],
						isDirectionСlockwise ? 'DirectionСlockwise' : ''
					)}
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
	const [, closeOnClickWrapper] = useModal(null, '.' + st.modalWrapper)
	const { key } = useAppSelector((state) => state.modal)
	const isModalActive = useMemo(() => key === targetKey, [key])

	return (
		<Transition in={isModalActive} timeout={duration} unmountOnExit>
			{(state) => (
				<div
					className={classes(st.modalWrapper, st['Wrapper-' + state])}
					onClick={closeOnClickWrapper}
				>
					{children}
				</div>
			)}
		</Transition>
	)
}

export { Modal, ModalLayout }
