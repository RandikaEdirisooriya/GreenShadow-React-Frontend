import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from './Reducer/slice/VehicleItem';
import equipmentReducer from './Reducer/slice/EquipmentItem';
import  CropReducer  from './Reducer/slice/CropItem';
import  FeildReducer  from './Reducer/slice/FieldItem';
import  StaffReducer  from './Reducer/slice/StaffItem';
import  logReducer from './Reducer/slice/LogItem';

const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    equipment: equipmentReducer,
    crop: CropReducer,
    field: FeildReducer,
    staff:StaffReducer,
    log:logReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
