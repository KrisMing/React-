
const cart = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            //return {...state[action.id], account: state.account - 1};
            //return Object.assign({}, state, {account: state.account-1})
            //state[action.id].account = state[action.id].account - 1;
            let flag = 0;
            state.map(item => {
                if(item.title === action.title){
                    flag = 1;
                }
            })
            if(state.length == 0){
                let newState = [...state, {...action,account:1}];
                return newState;
            }
            else if(flag == 0){
                let newState = [...state, {...action,account:1}];
                return newState;
            }
            else{
                return state.map(item => { //使用
                    if (item.title === action.title) {
                        item.account++;
                    }
                    return item
                });
            }
        case 'DEL':
            let newState = [];
            return newState;
        default:
            return state;
    }
}

export default cart