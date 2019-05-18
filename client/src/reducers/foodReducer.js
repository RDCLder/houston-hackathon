const initialState = {};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {};
        default:
            return state;
    }
}

export default foodReducer;