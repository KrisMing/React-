const amount = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            return state += action.price;
        case 'DEL':
            return state-state;
        default:
            return state;
    }
}
export default amount