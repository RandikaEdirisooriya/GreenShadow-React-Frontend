import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaffData } from '../../models/StaffData';

interface staffItemState{
    items: StaffData[];
}

const initialState: staffItemState = {
    items: [],
};

const staffItemState = createSlice({
    name: 'staffItem',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<StaffData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<StaffData[]>) => {
            state.items = action.payload;
        },
        removeStaffItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<StaffData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeStaffItem, updateItem } = staffItemState.actions;
export default staffItemState.reducer;
