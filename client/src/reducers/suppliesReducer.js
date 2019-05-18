const initialState = {};

const suppliesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return {};
        default:
            return state;
    }
}

export default suppliesReducer();