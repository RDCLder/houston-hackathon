const initialState = {};

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "":
            return {};
        default:
            return state;
    }
}

export default clothesReducer();