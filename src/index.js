import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
 

import store from "./redux/store";
 
function render() {
    ReactDOM.render(
        <App store={store}/>
        ,
        document.getElementById('root')
    );
}
 
// ��ʼ����Ⱦ
render()
 
//���ļ�����store�е�״̬�仯�ˣ��ͻ��Զ����ý����ػ棩
store.subscribe(render)