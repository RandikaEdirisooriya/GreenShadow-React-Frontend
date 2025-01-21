export const FeildReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_FIELD':
            return {
                ...state,
                field: [...state.field, action.payload],
            };
        case 'GET_FIELD':
            return {
                ...state,
                field: action.payload,
            };
        case 'UPDATE_FIELD':
            return {
                ...state,
                field: state.field.map((field: any) =>
                    field.id === action.payload.id ? action.payload : field
                ),
            };
        case 'DELETE_FIELD':
            return {
                ...state,
                field: state.field.filter((field: any) => field.id !== action.payload),
            };
        default:
            return state;

    }

}