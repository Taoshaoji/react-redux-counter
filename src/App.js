import React, {Component} from 'react';
// import {decrement, increment} from "./redux/react_redux_counter/actions";
import * as actions from './redux/action'
 
//���ܿ����select��ʹ��
class App extends Component {
 
    // ����
    increment = () => {
        const number = this.select.value * 1
        // const {count} = this.state
        // this.setState({count: count + number})
        // ����store�ķ�������״̬
        this.props.store.dispatch(actions.increment(number))
    }
    // ����
    decrement = () => {
        const number = this.select.value * 1
        // const count = this.props.store.getState()
        // this.setState({count: count - number})
        this.props.store.dispatch(actions.decrement(number))
    }
    // ż�����ӣ����������������ӣ�
    incrementIfOdd = () => {
        const number = this.select.value * 1
        const count = this.props.store.getState()
        if (count % 2 === 1) {
            // this.setState({count: count + number})
            this.props.store.dispatch(actions.increment(number))
        } else {
            alert(`${count}����������`)
        }
    }
 
    // �첽���ӣ�������ʱ��ʱ����
    incrementAsync = () => {
        const number = this.select.value * 1
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    }
 
    render() {
        // const {count} = this.state
        // �õ�ԭ����count״̬
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