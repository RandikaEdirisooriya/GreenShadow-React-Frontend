export const logReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_LOG':
            return {
                ...state,
                log: [...state.log, action.payload],
            };
        case 'GET_LOG':
            return {
                ...state,
                log: action.payload,
            };
        case 'UPDATE_LOG':
            return {
                ...state,
                log: state.log.map((log: any) =>
                    log.id === action.payload.id ? action.payload : log
                ),
            };
        case 'DELETE_LOG':
            return {
                ...state,
                log: state.log.filter((log: any) => log.id !== action.payload),
            };
        default:
            return state;

    }

}