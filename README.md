# Latest Release (2021/06/28)

![Generic badge](https://img.shields.io/badge/build-passing-green.svg)

This is to announce the completion of making an movie list app with ReactJS. This app runs through the basics of React.
The current stable version is v0.0.1.

This project fetchs an movie list api, added with custom responsive design. It follows the conventional React folder structure which makes it scalable and sustainable. There are many reusable features such as custom useFetchAPIandPagination Hook, styled components and HashRouters, loading spinner. The social media icons at the header and footer leads to my social accounts, and About page contains a prologue of this project.



# Overview
![React-gif](https://user-images.githubusercontent.com/58083434/126056798-e5040fef-fc25-4235-a3ea-42ee52e04775.gif)

- Component<br>
Function that returns JSX, a combination of HTML and JS
``` js
/* function App() contains the fathers of all father components, frome which branches the whole application upwards */
function App() { 
  return <Food>
  </Food>
  /* Food also can have many child components, working as if routers. */
}

```

```js
function Food({fav, name, picture, rating}) {
/* receiving properties from father component */
  return (
    <div>
      <h1>I like {fav}</h1>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
      <h4>{rating}/5.0</h4>
    </div>
  )
  /* Any JS code such as array, boolean is writen within braces. HTML code is writen without braces.*/
}
```

- Props, Properties
```js
<Food fav="kimchi" 
      something={true}
      papapa={['hello',1,2,3,4]}/>;
      /* The structure above quite resembles HTML and how HTML containing class is constructed. 
          The class-resembling elements are called 'props' as in properties. */
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
- About State, <br>
can find some reference at learn_state.js, src

# Technology Stack

&nbsp;&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>

<img src="https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=Framer&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=Gatsby&logoColor=white"/></a>
# Features
