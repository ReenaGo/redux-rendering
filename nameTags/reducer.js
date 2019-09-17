const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    const { type } = action;

    if (type === "ADD_NAMETAG") {
        return [
            ...state,
            action.name
        ]
    }
    return state;
}