import {createStore} from 'redux';
import reducer from '../reducers/index';
const inintialState = {
    good: [
        {
            title: 'aaa',
            price: 100,
            account: 6
        },
        {
            title: 'bbb',
            price: 200,
            account: 5
        },
    ],
    cart: [],
    amount: 0,
    tagName:['美食推荐','电影推荐','颐和园','前门大街','小天桥','大士院'],
    card: [
        {
            name: '海底捞西二旗店',
            point: 8.6,
            location: '西二旗',
            distance: 300,
            image: require("./../img/3.jpg")
        },
        {
            name: '麦当劳',
            point: 8.6,
            location: '西二旗',
            distance: 500,
            image: require("./../img/1.jpeg")
        },
        {
            name: '小火锅',
            point: 8.6,
            location: '西二旗',
            distance: 343,
            image: require("./../img/2.jpg")
        },
        {
            name: '大海底捞',
            point: 8.6,
            location: '西二旗',
            distance: 300,
            image: require("./../img/1.jpeg")
        },
        {
            name: '海底捞西二旗店',
            point: 8.6,
            location: '西二旗',
            distance: 300,
            image: require("./../img/1.jpeg")
        }

    ]
}
const store = createStore(reducer,inintialState);
export default store