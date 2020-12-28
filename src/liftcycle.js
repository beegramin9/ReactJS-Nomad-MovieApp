import React from 'react';

/* App is an object of React.Compenent Class, hence App extends from React.Component */
class App extends React.Component {
  /* Since React.Component is a class, not a function, it doesn't have return figure */
  /* Instead, it uses render method, which is a function hence has return fig. */
  /* React automatically executes render methods of the Class components. */
  
  /* Life cylce method: the birth and the death of components */
  /* https://reactjs.org/docs/react-component.html */
  /* - mounting: birth */
  /* - updating: update */
  /* - unmounting: death */
  constructor(props) {
    super(props)
    console.log('hello')
  };


  state = {
  /* state is an object that contains dynamic data that changes */  
    count:0
  };
  add = () => {
    console.log('add');
    /* this.state.count += 1; Do not mutate state directly. */
    /* React must refresh the render func below every time the state changes and becomes new. */
    /* hence use setState, which takes the new state as parameter. Note: state is an object. */

    this.setState({count : this.state.count + 1})
    /* However, there's a btter way to do so */
  };
  minus = () => {
    console.log('minus');
    /* React offers the current state in a func form */
    /* This way, it doesn't depend on the external state when the original state executes.*/
    this.setState(current => ({count : current.count - 1}))
  };
  /* when component borns */
  componentDidMount() {
    console.log("component rendered.");
  }
  /* after render() */
  componentDidUpdate() {
    console.log('I\'m just updated');
  }
  /* when component dies, like moving to another page or doing sth else. */
  componentWillUnmount() {
    console.log("Goodbye, cruel world.");
  }
  render() {
    console.log('I\'m rendering.')
    return (
      <div>
        {/* state lies in the same Class */}
        <h1>The number is {this.state.count}</h1>
        {/* Default react magic property */}
        {/* want 'add' func to be called only when clicked. hence add, not add() */}
        {/* add() will automatically be executed when the file compiles. */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }



}

export default App;
