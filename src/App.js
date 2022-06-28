import React, {Component} from 'react';
// import {decrement, increment} from "./redux/react_redux_counter/actions";
import * as actions from './redux/action'
 
//非受控组件select的使用
class App extends Component {
 
    // 增加
    increment = () => {
        const number = this.select.value * 1
        // const {count} = this.state
        // this.setState({count: count + number})
        // 调用store的方法更新状态
        this.props.store.dispatch(actions.increment(number))
    }
    // 减少
    decrement = () => {
        const number = this.select.value * 1
        // const count = this.props.store.getState()
        // this.setState({count: count - number})
        this.props.store.dispatch(actions.decrement(number))
    }
    // 偶数增加（满足条件后再增加）
    incrementIfOdd = () => {
        const number = this.select.value * 1
        const count = this.props.store.getState()
        if (count % 2 === 1) {
            // this.setState({count: count + number})
            this.props.store.dispatch(actions.increment(number))
        } else {
            alert(`${count}不是奇数！`)
        }
    }
 
    // 异步增加（设置延时定时器）
    incrementAsync = () => {
        const number = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    }
 
    render() {
        // const {count} = this.state
        // 得到原本的count状态
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        );
    }
}
 
export default App;