# Latest Release (2021/06/28)

![Generic badge](https://img.shields.io/badge/build-passing-green.svg)

This is to announce the completion of making an movie list app with ReactJS. This app runs through the basics of React.
The current stable version is v0.0.1.

# Overview
- Component<br>
Function that returns JSX, combination of HTML and JS<br>
<br>
<br>
```js

```

- Proptypes<br>
Runtime type checking for React props and similar objects<br>
```js
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
} 
```

- Destructuring <br>
```js
const developer = {
    firstName: 'Nathan',
    lastName: 'Sebhastian',
    developer: true,
    age: 25,
}
  
//destructure developer object

const { firstName : name} = developer;
/* developer.firstName을 해체해서 다음부턴
firstName만 써도 "Nathan"이 리턴되게 할 건데.
firstName값(="Nathan")을 name이란 변수에 넣어주겠다. */
console.log(name);


const { firstName, lastName } = developer;
/* developer 객체의 firstName과 lastName을 해체하겠다는 뜻
=> 이거 하고 나면 developer.firstName 이런 식으로 쓰지 않고 그냥 
firstName 으로만 써도 "Nathan"이 리턴됨
원래는 위의 name처럼 변수에 넣어줘야 하는데
객체의 키 값과 동일한 변수명을 쓰겠다 하면 생략 가능 */

console.log(firstName); // returns 'Nathan'
console.log(lastName); // returns 'Sebhastian'
console.log(developer); // returns the object


/* Array */
const numbers = [1,2,3,4,5];
const [zero, one] = numbers;
/* allocate index-accordingly
zero = numbers[0], 
one = numbers[1] */


/* , 사용해서 중간 인덱스 건너 뛰고 분해 할당 가능 */
const [first, second, , fourth] = numbers
console.log(first);
console.log(second);
console.log(fourth);

/* React에서 state를 해체할당 할 때 자주 쓰인다. */
state = {
    name: 'Wontae',
    email: 'beestron9@gmail.com'
}

reactFunction = () => {
    const {name, email} = state
    /* state 객체를 분해했다.
    name으로만 써도 state.name이 됨
    그런데 변수가 state객체의 key와 같다면
    name : name, email : email 이렇게 쓰지 않고
    그냥 name, email 해도 알아먹음 */
}

props = {
    hello : 'hello'
}
/* 원래같았으면 이렇게 쓰겠지만 */
let HelloWorld = (props) => {
    // return <h1>{props.hello}</h1>
    console.log(`${props.hello}`);
}

HelloWorld(props)
/* 분해하면? */
let SecondWorld = ({hello}) => {
    /* 위 같이 쓰려면 {hello} = props이 맞겠지만
    React에서는 App 부모클래스에서 Food를 줄 때 props를 주는 것이 정해져 있기 때문이다 */
    // return <h1>{hello}, second.</h1>
    console.log(`${hello}, second.`);
}
SecondWorld(props)
```


# Technology Stack

&nbsp;&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>

# Features
