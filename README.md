# Latest Release (2021/06/28)

![Generic badge](https://img.shields.io/badge/build-passing-green.svg)

This is to announce the completion of making an movie list app with ReactJS. This app runs through the basics of React.
The current stable version is v0.0.1.

# Overview
- Component<br>
Function that returns JSX, a combination of HTML and JS
```js
<Food fav="kimchi" 
      something={true}
      papapa={['hello',1,2,3,4]}/>;
      /* The structure above quite resembles HTML and how HTML containing class is constructed. 
          The class-resembling elements are called 'props' as in properties.
          HTML code is writen without braces, JS code such as array, boolean is writen within braces.*/
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
state = {
    name: 'Wontae',
    email: 'beestron9@gmail.com'
}

let reactFunction = () => {
    const {name, email} = state
    /* deconstruct state, not allocating them to any variables 
    keys 'name', 'email' return the values, 'Wontae', 'beestron9@gmail.com'*/
}

props = {
      hello: 'hello'
}

let renderComponent = ({hello}) => {
    console.log(`render ${hello}`);
}

```


# Technology Stack

&nbsp;&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>

# Features
