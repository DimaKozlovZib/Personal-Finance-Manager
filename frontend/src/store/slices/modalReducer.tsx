import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ModalKeys from '../../ModalKeys'

type TypeModal = {
	key: ModalKeys | null
}

const initialState: TypeModal = {
	key: null
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		changeModal(state, action: PayloadAction<TypeModal>) {
			console.log(action)
			state.key = action.payload.key
		}
	}
})
export const { actions, reducer } = modalSlice
