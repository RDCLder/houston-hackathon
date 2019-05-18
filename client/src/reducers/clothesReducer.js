const initialState = {};

const clothesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return {};
        default:
            return state;
    }
}

export default clothesReducer;