import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldData } from '../../models/FieldData';

interface FieldItemState {
    items: FieldData[];
}

const initialState: FieldItemState = {
    items: [],
};

const fieldItemSlice = createSlice({
    name: 'fieldItem',
    initialState,
    reducers: {
        getItems: (state, action: PayloadAction<FieldData[]>) => {
            state.items = action.payload;
        },  
        addItem: (state, action: PayloadAction<FieldData>) => {
            state.items.push(action.payload);
        },  
        updateItem: (state, action: PayloadAction<FieldData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },  
        removeFieldItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },  
    },
});

export const { getItems, addItem, updateItem, removeFieldItem } = fieldItemSlice.actions;
export default fieldItemSlice.reducer;
