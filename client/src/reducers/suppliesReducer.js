const initialState = {};

const suppliesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {};
        default:
            return state;
    }
}

export default suppliesReducer;