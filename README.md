# Latest Release (2021/06/28)

![Generic badge](https://img.shields.io/badge/build-passing-green.svg)

This is to announce the completion of making an movie list app with ReactJS. This app runs through the basics of React.
The current stable version is v0.0.1.

# Overview
- Component<br>
```js
<Food fav="kimchi" 
      something={true}
      papapa={['hello',1,2,3,4]}/>;
              {/* HTML과 매우 비슷한 구조 
        name은 prop이라 하고, kimchi는 value라고 함
        true나 array는 JS의 요소이기 때문에 {}로 감싸준다.        
        Food에서는 요 prop들을 받아서 Food(props), 즉 파라미터로 받는다.
      */}
```
The structure above quite resembles HTML and how HTML containing class is constructed. <br>
The class-resembling elements are called 'props' as in properties. <br>
HTML code is writen without braces, JS code such as array, boolean is writen within braces. <br>

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
 
const { firstName : name} = developer;
/* deconstruct object 'developer', allocate key 'firstName' to variable 'name' 
variable 'name' returns now the value of the key 'firstName', string 'Nathan' */

const { firstName, lastName } = developer;
/* deconstruct as same process as above, not allocating them to any variables 
keys 'firstName', 'lastName' return the values, 'Nathan', 'Sebhastian'*/

/* Array */
const numbers = [1,2,3,4,5];
const [zero, one] = numbers;
/* allocate index-accordingly
zero = numbers[0], 
one = numbers[1] */


/* can skip through certain keys using , */
const [first, second, , fourth] = numbers


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
