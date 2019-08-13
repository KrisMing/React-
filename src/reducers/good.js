const good = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            //return {...state[action.id], account: state.account - 1};
            //return Object.assign({}, state, {account: state.account-1})
            //state[action.id].account = state[action.id].account - 1;
            // let newState = Object.assign([],state);
            // if(newState[action.id].account > 0){
            //     newState[action.id].account--;
            //     return newState;
            // }
            return state.map(item => { //使用map赋值判断
                if (item.title === action.title) {
                    item.account--;
                }
                return item
            });
        default:
            return state;
    }
}
export default good