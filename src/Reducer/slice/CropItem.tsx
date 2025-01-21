import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cropdata } from '../../models/Cropdata';

interface cropItemState {
    items: Cropdata[];
}

const initialState: cropItemState = {
    items: [],
};

const cropItemSlice = createSlice({
    name: 'cropItem',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Cropdata>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<Cropdata[]>) => {
            state.items = action.payload;
        },
        removeCropItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<Cropdata>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeCropItem, updateItem } = cropItemSlice.actions;
export default cropItemSlice.reducer;
