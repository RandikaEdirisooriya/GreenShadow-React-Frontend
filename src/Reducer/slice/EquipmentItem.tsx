import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Equipment {
  id: string;
  Name: string;
  Status: string;
  Type: string;
  FieldId: string;
  staffId: string;
}

interface EquipmentState {
  items: Equipment[];
}

const initialState: EquipmentState = {
  items: [],
};

const equipmentSlice = createSlice({
  name: 'equipmentItem',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Equipment>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<Equipment>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeEquipmentItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, removeEquipmentItem } = equipmentSlice.actions;
export default equipmentSlice.reducer;
