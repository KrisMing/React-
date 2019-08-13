const add = (index,title,price,account) => {
    return {
        type: 'ADD',
        title: title,
        price: price,
        account: account,
        amount: 0
    }
}
export default add;