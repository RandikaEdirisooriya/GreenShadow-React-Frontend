export const StaffReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_STAFF':
            return {
                ...state,
                staff: [...state.staff, action.payload],
            };
        case 'GET_STAFF':
            return {
                ...state,
                staff: action.payload,
            };
        case 'UPDATE_STAFF':
            return {
                ...state,
                staff: state.staff.map((staff: any) =>
                    staff.id === action.payload.id ? action.payload : staff
                ),
            };
        case 'DELETE_STAFF':
            return {
                ...state,
                staff: state.staff.filter((staff: any) => staff.id !== action.payload),
            };
        default:
            return state;
    }
};