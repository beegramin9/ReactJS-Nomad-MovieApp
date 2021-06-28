import React from 'react';


/* 부모 클래스의 App 자식 클래스 
App 클래스는 state라는 method를 가지고 있기 때문에 사용한다. */
class App extends React.Component {
  /* React.Component는 render method를 가진 부모 클래스 
  App 클래스는 Component를 상속받았으므로 얘도 render method를 가짐 
  함수가 아니라서 return이 없다 */
  
  /* constructor는 JS에서 클래스를 만들 때 호출되는
  생성자. __init__ 과 같다. 리액트가 아닌 JS 코드임 */
  constructor(props) /* 리스트 패킹 */{
    /* App이 Component의 자식 클래스이기 때문에 부모 클래스의 생성자를 상속받는 과정 */
    super(props)
    console.log('hello')
  };


  state = {
  /* 동적 데이터를 다룰 때 state를 사용한다 == state는 동적 데이터를 담는다. */  
    count:0
  };

  add = () => {
    /* state의 value값을 directly하게 바꾸면, 즉 this.state.count += 1; 이렇게 사용하면 안 되는 이유:
    우리는 state가 바뀔 때마다 React 앱이 render 함수를 refresh해주길 바라는데,
    state를 직접 바꿔버리면 React는 render 함수를 자동적으로 refresh하지 않기 때문이다.
    setState를 사용하면 state가 바뀔 때마다 refresh가 자동적으로 된다. */

    /* state Object의 count 키 
    state가 Object이기 때문에 setState는 새로운 Object를 받아야 한다. 
    즉 setState()의 parameter는 새로운 state 역할을 할 object이다. */
    this.setState({count : this.state.count + 1})
    /* 이 방법은 기존 state에 의존(dependent) 하기에 최선의 방법이 아니다
    더 좋은 방법은 밑 방법 */
  };
  minus = () => {
    /* 이 방법을 쓰면 기존 state에 의존하지 않고 사용 가능하다. 
    그리고 더 이해하기 쉽다. current state가 입력되어서 새로운 state object가 리턴됨 */
    this.setState(current => ({count : current.count - 1}))
  };

  /* Component 클래스의 메소드 중 대표적인 lifecycle 메소드
  component가 생성되고 끝나고 update될 때 전후로 호출되는 메소드들 */

  /* Mount: 컴포넌트가 생성될 때 실행되는 함수 순서:
  constuctor(),App도 컴포넌트니까 => render() => componentDidMount() */
  componentDidMount() {
    console.log("component rendered.");
  }
  /* setState()로 state를 변화시킬 때 실행됨
  render() => componentDidUpdate() */
  componentDidUpdate() {
    console.log('I\'m just updated');
  }
  /* 컴포넌트가 끝나기 직전에 실행됨 */
  componentWillUnmount() {
    console.log("Goodbye, cruel world.");
  }

  render() {
    console.log('I\'m rendering.')
    return (
      <div>
        {/* 같은 App 클래스의 method인 Add, Minus, 속성인 state */}
        <h1>The number is {this.state.count}</h1>

        {/* button은 React Magic에서는 onClick을 가지고 있다
        쌩 JS 에서는 이벤트리스너를 따로 써줘야 함 */}

        {/* add 라고만 써야지 버튼을 누를 때만 작동 */}
        {/* add()는 버튼 안 눌러도 실행됨. 그럼 안 되잖아 == 이벤트리스너랑 똑같다. */}

        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;