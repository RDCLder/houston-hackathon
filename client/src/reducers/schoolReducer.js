const initialState = {};

const schoolReducer = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return {};
        default:
            return state;
    }
}

export default schoolReducer();