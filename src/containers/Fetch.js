import React, {PureComponent} from 'react';
import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
class Fetch extends PureComponent {
    constructor(props) {
        console.log("组件加载，首先加载构造方法---1")
        super(props);
        this.state = {
            msg: "HOME12 组件信息",
            list: [],
            listjson: []
        }
    }
    componentWillMount() {
        console.log("构造函数加载完成后，会加载componentWillMount(组件将要挂载)----2")
    }

    getData = () => {
        //通过axios获取数据
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        alert("获取数据");
        axios.get(api).then((response) => {
            console.log(response.data.result); //接口返回数据
            this.setState({
                //用到this,要用到this取向
                list: response.data.result
            })
        }).catch(function (error) {
            console.log(error);//捕获异常数据
        })
    }
    getfetchjsonpData = () => {
        //通过fetchjsonp获取数据
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        fetchJsonp(api)
            .then(function (response) {
                return response.json()//返回的json数据
            }).then((json) => {
            //console.log('parsed json', json)
            this.setState({
                listjson: json.result
            });
            console.log(this.state);
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    render() {
        console.log("数据将要渲染---3")
        return (
            <div>
                <h2>HOME12组件首页</h2>
                <h1>axios获取数据</h1>
                <button onClick={this.getData}>获取服务器api接口数据</button>
                <hr/>
                <ul>
                    {
                        this.state.list.map((value, key) => {
                            return (<li key={key}>{value.title}</li>)
                        })
                    }
                </ul>
                <hr/>
                <h1>fetch-jsonp获取数据</h1>
                <button onClick={this.getfetchjsonpData}>获取服务器api接口数据</button>
                <hr/>
                <ul>
                    {
                        this.state.listjson.map((value, key) => {
                            return (<li key={key}>{value.title}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }

    //生命的周期函数---组件加载完成
    componentDidMount() {
        console.log("组件加载完成---4")
        this.getData();
    }
}

export default Fetch;