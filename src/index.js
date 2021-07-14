import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'

/* import Food from './1_propTypes.js'
하고 ReactDOM.render에 <App>, <Food>를 둘 다 넣으려고 했지만
작동하지 않는다. 왜?
React app은 하나의 component만을 render할 수 있기 때문이다.
그래서 Food를 App 안에 넣는 것이다.
*/
ReactDOM.render(
    <App />, 
    /* Component: HTML을 return하는 함수
    App.js를 가서 보면 HTML element들을 return한다.
    즉, React는 component를 사용해서 HTML을 작성하고, 
    이러한 JS와 HTML의 조합을 JSX라고 한다.

    그러면 새로운 component를 어떻게 만들 수 있을까?
    learn_component, props, prop-types.js가 새로운 컴포넌트를 만들었던 과정 
    */
  document.getElementById('root')
);

