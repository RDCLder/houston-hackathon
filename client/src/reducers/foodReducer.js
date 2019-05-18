const initialState = {};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return {};
        default:
            return state;
    }
}

export default foodReducer();