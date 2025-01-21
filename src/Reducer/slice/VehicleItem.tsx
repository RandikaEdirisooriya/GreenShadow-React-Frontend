import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VehicleData } from '../../models/VehicleData';

interface VehicleItemState {
    items: VehicleData[];
}

const initialState: VehicleItemState = {
    items: [],
};

const vehicleItemSlice = createSlice({
    name: 'vehicleItem',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<VehicleData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<VehicleData[]>) => {
            state.items = action.payload;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<VehicleData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeItem, updateItem } = vehicleItemSlice.actions;
export default vehicleItemSlice.reducer;
