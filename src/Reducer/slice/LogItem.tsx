import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogData } from '../../models/LogData';

interface LogItemState{
    items: LogData[];
}

const initialState: LogItemState = {
    items: [],
};

const LogItemState = createSlice({
    name: 'logItem',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<LogData>) => {
            state.items.push(action.payload);
        },
        getItems: (state, action: PayloadAction<LogData[]>) => {
            state.items = action.payload;
        },
        removeLogItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateItem: (state, action: PayloadAction<LogData>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
    },
});

export const { addItem, removeLogItem, updateItem } = LogItemState.actions;
export default LogItemState.reducer;
